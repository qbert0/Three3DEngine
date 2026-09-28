/**
 * ─────────────────────────────────────────────────────────────────
 * PanoSphere — Manages dual-sphere equirectangular panorama rendering
 * with smooth texture transitions (crossfade, fly-through, etc.)
 * ─────────────────────────────────────────────────────────────────
 */

import * as THREE from 'three';

export type TransitionStyle =
  | 'crossfade'         // simple opacity crossfade
  | 'fly-through'       // 3D spatial fly into next sphere
  | 'crossfade-pan';    // crossfade + camera pan drift

export interface PanoSphereConfig {
  radius?: number;        // sphere radius. Default 600
  segments?: number;      // lat/lon segments. Default 64/48
  defaultTransition?: TransitionStyle;
  transitionDuration?: number;  // ms. Default 900
}

// ── GLSL Shaders (PSV-compatible raycast approach) ────────────────────────
// The vertex shader passes local position + camera-in-local-space.
// The fragment shader raycasts through the sphere to derive UV,
// which enables fisheye (camera offset from center) without artifacts.

const VERTEX_SHADER = /* glsl */`
  varying vec3 vLocalPos;
  varying vec3 vLocalCam;

  void main() {
    vLocalPos = position;
    // mat3(modelMatrix) is a pure rotation (no scale/translate);
    // camera in local space = transpose(R) * cameraPosition
    vLocalCam = cameraPosition * mat3(modelMatrix);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */`
  varying vec3 vLocalPos;
  varying vec3 vLocalCam;
  uniform sampler2D map;
  uniform float opacity;
  uniform float radius;

  const float PI = 3.14159265358979323846;

  void main() {
    // Raycast from camera (possibly offset for fisheye) through polygon
    // surface to the true sphere surface.
    vec3 rayDir = vLocalPos - vLocalCam;
    float a = dot(rayDir, rayDir);
    float b = dot(vLocalCam, rayDir);
    float c = dot(vLocalCam, vLocalCam) - radius * radius;
    float t = (-b + sqrt(max(b * b - a * c, 0.0))) / a;
    vec3 dir = normalize(vLocalCam + t * rayDir);

    float u = atan(-dir.x, dir.z) / (2.0 * PI) + 0.5;
    float v = asin(clamp(dir.y, -1.0, 1.0)) / PI + 0.5;

    gl_FragColor = texture2D(map, vec2(u, v));
    gl_FragColor.a *= opacity;
  }
`;

// ── PanoSphere ─────────────────────────────────────────────────────────────

export class PanoSphere {
  private scene: THREE.Scene;
  private renderer: THREE.WebGLRenderer;
  private textureLoader: THREE.TextureLoader;

  private sphereA: THREE.Mesh<THREE.SphereGeometry, THREE.ShaderMaterial>;
  private sphereB: THREE.Mesh<THREE.SphereGeometry, THREE.ShaderMaterial>;

  private readonly radius: number;
  private readonly transitionDuration: number;
  private readonly defaultTransition: TransitionStyle;

  private isTransitioning = false;
  private textureCache = new Map<string, THREE.Texture>();
  private pendingTextures = new Map<string, Promise<THREE.Texture>>();
  private readonly maxCachedTextures = 4;

  /** Dimensions of the most-recently-loaded source image */
  private lastTextureInfo: { srcWidth: number; srcHeight: number; url: string } | null = null;

  get textureInfo() { return this.lastTextureInfo; }

  /** Blank 1×1 transparent texture — used before first panorama loads */
  private static blankTex = (() => {
    const t = new THREE.DataTexture(new Uint8Array([0, 0, 0, 0]), 1, 1);
    t.needsUpdate = true;
    return t;
  })();

  private makeShaderMat(opacity: number): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      uniforms: {
        map:     { value: PanoSphere.blankTex },
        opacity: { value: opacity },
        radius:  { value: this.radius },
      },
      vertexShader:   VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      side:        THREE.BackSide,  // camera is inside sphere
      transparent: true,
      depthWrite:  false,
    });
  }

  constructor(scene: THREE.Scene, renderer: THREE.WebGLRenderer, config: PanoSphereConfig = {}) {
    this.scene = scene;
    this.renderer = renderer;
    this.textureLoader = new THREE.TextureLoader();

    this.radius = config.radius ?? 600;
    this.transitionDuration = config.transitionDuration ?? 900;
    this.defaultTransition = config.defaultTransition ?? 'fly-through';

    const segsW = config.segments ?? 128;  // higher tessellation for fisheye
    const segsH = Math.round(segsW * 0.75);

    // Standard (not inverted) sphere — BackSide handles inside view
    const geo = new THREE.SphereGeometry(this.radius, segsW, segsH);

    this.sphereA = new THREE.Mesh(geo,        this.makeShaderMat(1));
    this.sphereB = new THREE.Mesh(geo.clone(), this.makeShaderMat(0));
    this.sphereB.visible = false;

    this.scene.add(this.sphereA);
    this.scene.add(this.sphereB);
  }

  get busy(): boolean { return this.isTransitioning; }

  // ── Texture Loading ────────────────────────────────────────────

  /**
   * Preload a texture into GPU VRAM. Cached so same URL is never loaded twice.
   */
  async preload(url: string): Promise<THREE.Texture> {
    if (this.textureCache.has(url)) {
      const cached = this.textureCache.get(url)!;
      // Refresh insertion order so Map also acts as a small LRU cache.
      this.textureCache.delete(url);
      this.textureCache.set(url, cached);
      return cached;
    }
    const pending = this.pendingTextures.get(url);
    if (pending) return pending;
    const request = this.loadTexture(url);
    this.pendingTextures.set(url, request);
    try {
      return await request;
    } finally {
      this.pendingTextures.delete(url);
    }
  }

  /**
   * Set the panorama instantly (no transition).
   */
  async setImmediate(url: string): Promise<void> {
    const tex = await this.preload(url);
    this.sphereA.material.uniforms.map.value     = tex;
    this.sphereA.material.uniforms.opacity.value = 1;
    this.sphereA.position.set(0, 0, 0);
    this.sphereB.visible = false;
  }

  /**
   * Apply fisheye / "little planet" distortion by offsetting the camera
   * position along its forward axis — matching PSV's exact formula:
   *
   *   camera.position = -forward * (fisheye / 2) * radius
   *
   * At fisheye=2: camera sits AT the sphere surface (north pole when looking
   * straight down) → produces true stereographic "little planet" projection.
   * At fisheye=0: camera at center → normal equirectangular perspective.
   *
   * PSV uses normalized radius≈1 so their offset (fisheye/2) already equals
   * radius. We must scale by `this.radius` (600) to get the same visual.
   */
  setFisheye(value: number, camera: THREE.PerspectiveCamera): void {
    if (value <= 0) {
      camera.position.set(0, 0, 0);
      return;
    }
    // Get normalized forward direction from current camera quaternion
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
    // Scale by radius: fisheye=2 → camera ON sphere surface = stereographic
    const offset = (value / 2) * this.radius;
    camera.position.copy(forward).multiplyScalar(-offset);
  }


  // ── Transitions ────────────────────────────────────────────────

  /**
   * Transition to a new panorama URL using the given style.
   * Returns a Promise that resolves when the transition is done.
   * @param onProgress - called each frame with 0–1 progress (use for FOV warp etc.)
   */
  async transition(
    url: string,
    style: TransitionStyle = this.defaultTransition,
    direction?: THREE.Vector3,
    onProgress?: (p: number) => void,
  ): Promise<void> {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    const newTex = await this.preload(url);

    switch (style) {
      case 'fly-through':
        await this.doFlyThrough(newTex, direction, onProgress);
        break;
      case 'crossfade-pan':
        await this.doCrossfade(newTex, onProgress);
        break;
      case 'crossfade':
      default:
        await this.doCrossfade(newTex, onProgress);
        break;
    }

    this.isTransitioning = false;
  }

  // ── Dispose ────────────────────────────────────────────────────

  dispose(): void {
    this.textureCache.forEach((t) => t.dispose());
    this.textureCache.clear();
    this.pendingTextures.clear();
    this.sphereA.geometry.dispose();
    this.sphereA.material.dispose();
    this.sphereB.geometry.dispose();
    this.sphereB.material.dispose();
  }

  // ── Private ────────────────────────────────────────────────────

  private loadTexture(url: string): Promise<THREE.Texture> {
    return new Promise((resolve, reject) => {
      this.textureLoader.load(
        url,
        (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.minFilter = THREE.LinearFilter;
          tex.magFilter = THREE.LinearFilter;
          this.renderer.initTexture(tex); // warm GPU VRAM
          this.textureCache.set(url, tex);
          this.trimTextureCache();

          // Capture source dimensions for diagnostics
          const img = tex.image as HTMLImageElement | ImageBitmap | null;
          if (img) {
            this.lastTextureInfo = {
              url,
              srcWidth:  'naturalWidth'  in img ? img.naturalWidth  : (img as ImageBitmap).width,
              srcHeight: 'naturalHeight' in img ? img.naturalHeight : (img as ImageBitmap).height,
            };
          }

          resolve(tex);
        },
        undefined,
        reject,
      );
    });
  }

  /** Keep only nearby panoramas in GPU memory, never disposing active textures. */
  private trimTextureCache(): void {
    if (this.textureCache.size <= this.maxCachedTextures) return;
    const active = new Set<THREE.Texture>([
      this.sphereA.material.uniforms.map.value,
      this.sphereB.material.uniforms.map.value,
    ]);
    for (const [url, texture] of this.textureCache) {
      if (this.textureCache.size <= this.maxCachedTextures) break;
      if (active.has(texture)) continue;
      this.textureCache.delete(url);
      texture.dispose();
    }
  }

  /**
   * Simple crossfade: sphereA fades out, sphereB (new texture) fades in.
   * After done, sphereA gets new texture and sphereB is hidden.
   */
  private doCrossfade(newTex: THREE.Texture, onProgress?: (p: number) => void): Promise<void> {
    this.sphereB.material.uniforms.map.value     = newTex;
    this.sphereB.material.uniforms.opacity.value = 0;
    this.sphereB.position.set(0, 0, 0);
    this.sphereB.visible = true;

    const duration = this.transitionDuration;
    const start = performance.now();

    return new Promise((resolve) => {
      const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;

        this.sphereA.material.uniforms.opacity.value = 1 - ease;
        this.sphereB.material.uniforms.opacity.value = ease;
        onProgress?.(p);

        if (p < 1) {
          requestAnimationFrame(step);
        } else {
          this.promoteSphereB(newTex);
          resolve();
        }
      };
      requestAnimationFrame(step);
    });
  }

  /**
   * 3D Fly-through: camera moves toward direction, enters next sphere.
   * Requires the calling engine to also animate camera position.
   */
  private doFlyThrough(newTex: THREE.Texture, direction?: THREE.Vector3, onProgress?: (p: number) => void): Promise<void> {
    const flyDist = this.radius * 0.85;
    const dir = direction?.clone().normalize() ?? new THREE.Vector3(0, 0, -1);
    const targetPos = dir.multiplyScalar(flyDist);

    this.sphereB.material.uniforms.map.value     = newTex;
    this.sphereB.material.uniforms.opacity.value = 0;
    this.sphereB.position.copy(targetPos);
    this.sphereB.visible = true;

    const duration = this.transitionDuration;
    const start = performance.now();

    return new Promise((resolve) => {
      const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

        this.sphereA.material.uniforms.opacity.value = 1 - ease;
        this.sphereB.material.uniforms.opacity.value = ease;
        onProgress?.(p);

        if (p < 1) {
          requestAnimationFrame(step);
        } else {
          this.promoteSphereB(newTex);
          resolve();
        }
      };
      requestAnimationFrame(step);
    });
  }

  /** After transition done: move new texture to sphereA, reset sphereB */
  private promoteSphereB(newTex: THREE.Texture): void {
    this.sphereA.material.uniforms.map.value     = newTex;
    this.sphereA.material.uniforms.opacity.value = 1;
    this.sphereA.position.set(0, 0, 0);

    this.sphereB.visible = false;
    this.sphereB.material.uniforms.opacity.value = 0;
    this.sphereB.position.set(0, 0, 0);
    this.trimTextureCache();
  }
}
