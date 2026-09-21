import * as THREE from 'three';
import type { TourScene, TourMarker } from '~/types/tour';

export interface Three360EngineOptions {
  container: HTMLElement;
  onNavigate?: (sceneId: string) => void;
  onHotspotClick?: (marker: TourMarker) => void;
  onCameraMove?: (yaw: number, pitch: number) => void;
  autorotate?: boolean;
  autorotateSpeed?: number;
  enableIntro?: boolean;
}

export class Three360Engine {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private textureLoader: THREE.TextureLoader;

  // Spheres for 3D Spatial Transition
  private sphereA: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
  private sphereB: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;

  // Hotspots 3D Group & Raycasting
  private hotspotsGroup: THREE.Group;
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;
  private hoveredSprite: THREE.Sprite | null = null;

  // Camera Rotation State (with Damping Lerp)
  private yaw = 0;
  private pitch = 0;
  private targetYaw = 0;
  private targetPitch = 0;

  // FOV & Zoom State (with Damping Lerp)
  private fov = 75;
  private targetFov = 75;

  // Pointer Interaction State
  private isPointerDown = false;
  private pointerStartX = 0;
  private pointerStartY = 0;
  private startYaw = 0;
  private startPitch = 0;

  // Autorotate State (Disabled by default, 2 min idle delay if enabled)
  private isAutorotating = false;
  private enableAutorotateOption = false;
  private autorotateSpeed = 0.001; // rad per frame
  private idleTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly IDLE_DELAY_MS = 120000; // 2 minutes (120s)

  // Active Scene & Animation State
  private currentScene: TourScene | null = null;
  private isAnimating = false;
  private animFrameId: number | null = null;

  // Callbacks
  private onNavigate?: (sceneId: string) => void;
  private onHotspotClick?: (marker: TourMarker) => void;
  private onCameraMove?: (yaw: number, pitch: number) => void;

  constructor(options: Three360EngineOptions) {
    this.container = options.container;
    this.onNavigate = options.onNavigate;
    this.onHotspotClick = options.onHotspotClick;
    this.onCameraMove = options.onCameraMove;
    this.enableAutorotateOption = options.autorotate ?? false; // Default disabled
    if (options.autorotateSpeed) this.autorotateSpeed = options.autorotateSpeed;

    // 1. Scene & Camera Setup
    this.scene = new THREE.Scene();
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.camera = new THREE.PerspectiveCamera(this.fov, width / height, 0.1, 3000);
    this.camera.position.set(0, 0, 0);

    // 2. WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);

    this.textureLoader = new THREE.TextureLoader();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // 3. Create Inverted Spheres for Panorama Projection (Scale X = -1)
    const sphereGeo = new THREE.SphereGeometry(600, 64, 48);
    sphereGeo.scale(-1, 1, 1);

    const matA = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 1,
    });
    this.sphereA = new THREE.Mesh(sphereGeo, matA);
    this.sphereA.position.set(0, 0, 0);
    this.scene.add(this.sphereA);

    const matB = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
    });
    this.sphereB = new THREE.Mesh(sphereGeo, matB);
    this.sphereB.position.set(0, 0, 0);
    this.sphereB.visible = false;
    this.scene.add(this.sphereB);

    // 4. Hotspots Group
    this.hotspotsGroup = new THREE.Group();
    this.scene.add(this.hotspotsGroup);

    // 5. Bind Events & Start Render Loop
    this.bindEvents();
    this.render();
  }

  /** Load scene with optional PSV Little Planet Intro Animation */
  public async loadScene(scene: TourScene, playIntro = true): Promise<void> {
    this.currentScene = scene;
    this.targetYaw = scene.initialYaw || 0;
    this.targetPitch = scene.initialPitch || 0;

    // Preload texture into GPU VRAM before doing anything
    const texture = await this.loadTexture(scene.panorama);
    this.sphereA.material.map = texture;
    this.sphereA.material.opacity = 1;
    this.sphereA.material.needsUpdate = true;
    this.sphereB.visible = false;

    this.renderHotspots(scene);

    if (playIntro) {
      await this.playLittlePlanetIntro(scene.initialYaw || 0, scene.initialPitch || 0);
    } else {
      this.yaw = this.targetYaw;
      this.pitch = this.targetPitch;
      this.updateCameraRotation();
      this.fadeHotspots(1, 300);
    }
  }

  /**
   * 🪐 PSV DEMO: LITTLE PLANET INTRO ANIMATION
   * Starts in wide fisheye Little Planet view and zooms smoothly into 360 panorama!
   */
  public playLittlePlanetIntro(targetYaw = 0, targetPitch = 0): Promise<void> {
    this.isAnimating = true;

    const startFov = 135;
    const startPitch = -Math.PI / 2.3;
    const startYaw = targetYaw - Math.PI / 1.5;

    this.fov = startFov;
    this.targetFov = 75;
    this.pitch = startPitch;
    this.targetPitch = targetPitch;
    this.yaw = startYaw;
    this.targetYaw = targetYaw;

    const duration = 2200;
    const startTime = performance.now();

    return new Promise((resolve) => {
      const animateIntro = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const ease = 1 - Math.pow(1 - progress, 3);

        this.fov = startFov + (75 - startFov) * ease;
        this.camera.fov = this.fov;
        this.camera.updateProjectionMatrix();

        this.pitch = startPitch + (targetPitch - startPitch) * ease;
        this.yaw = startYaw + (targetYaw - startYaw) * ease;
        this.updateCameraRotation();

        if (progress < 1) {
          requestAnimationFrame(animateIntro);
        } else {
          this.targetYaw = targetYaw;
          this.targetPitch = targetPitch;
          this.yaw = targetYaw;
          this.pitch = targetPitch;
          this.fov = 75;
          this.targetFov = 75;
          this.isAnimating = false;
          this.fadeHotspots(1, 400); // Ensure hotspots are fully visible on intro completion
          this.resetIdleTimer();
          resolve();
        }
      };
      requestAnimationFrame(animateIntro);
    });
  }

  /**
   * 🌟 ULTRA-SMOOTH 3D SPATIAL FLY-THROUGH TRANSITION
   * Preloads new texture BEFORE starting fly to prevent black frame cuts!
   */
  public async flyToScene(targetScene: TourScene, flyYaw?: number, flyPitch?: number): Promise<void> {
    if (this.isAnimating) return;
    this.isAnimating = true;

    // 1. Preload new texture FIRST before changing any scene visibility
    const newTexture = await this.loadTexture(targetScene.panorama);

    const dirYaw = flyYaw !== undefined ? flyYaw : this.targetYaw;
    const dirPitch = flyPitch !== undefined ? flyPitch : this.targetPitch;

    const flyDistance = 500;
    const targetVector = new THREE.Vector3(
      -flyDistance * Math.sin(dirYaw) * Math.cos(dirPitch),
      flyDistance * Math.sin(dirPitch),
      -flyDistance * Math.cos(dirYaw) * Math.cos(dirPitch)
    );

    // 2. Setup Sphere B with loaded texture
    this.sphereB.position.copy(targetVector);
    this.sphereB.material.map = newTexture;
    this.sphereB.material.opacity = 0;
    this.sphereB.material.needsUpdate = true;
    this.sphereB.visible = true;

    this.fadeHotspots(0, 200);

    const duration = 850;
    const startTime = performance.now();
    const startCamPos = new THREE.Vector3(0, 0, 0);

    const startYaw = this.yaw;
    const startPitch = this.pitch;
    const destYaw = targetScene.initialYaw || 0;
    const destPitch = targetScene.initialPitch || 0;
    const baseFov = this.fov;

    return new Promise((resolve) => {
      const animateStep = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const ease = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        this.camera.position.lerpVectors(startCamPos, targetVector, ease * 0.88);

        this.targetYaw = startYaw + (destYaw - startYaw) * ease;
        this.targetPitch = startPitch + (destPitch - startPitch) * ease;
        this.yaw = this.targetYaw;
        this.pitch = this.targetPitch;
        this.updateCameraRotation();

        const warpFov = baseFov + Math.sin(progress * Math.PI) * 22;
        this.camera.fov = warpFov;
        this.camera.updateProjectionMatrix();

        this.sphereA.material.opacity = 1 - ease;
        this.sphereB.material.opacity = ease;

        if (progress < 1) {
          requestAnimationFrame(animateStep);
        } else {
          this.sphereA.material.map = newTexture;
          this.sphereA.material.opacity = 1;
          this.sphereA.material.needsUpdate = true;

          this.sphereA.position.set(0, 0, 0);
          this.camera.position.set(0, 0, 0);
          this.camera.fov = baseFov;
          this.camera.updateProjectionMatrix();

          this.sphereB.visible = false;
          this.sphereB.material.opacity = 0;

          this.currentScene = targetScene;
          this.targetYaw = destYaw;
          this.targetPitch = destPitch;
          this.yaw = destYaw;
          this.pitch = destPitch;
          this.updateCameraRotation();

          this.renderHotspots(targetScene);
          this.fadeHotspots(1, 300);

          this.isAnimating = false;
          this.resetIdleTimer();
          resolve();
        }
      };

      requestAnimationFrame(animateStep);
    });
  }

  /** Render PSV 3D Circular Hotspot Sprites */
  private renderHotspots(scene: TourScene): void {
    this.clearHotspots();
    if (!scene.markers || !scene.markers.length) return;

    scene.markers.forEach((m) => {
      const sprite = this.createHotspotSprite(m);
      this.hotspotsGroup.add(sprite);
    });
  }

  /** Fade out / fade in hotspots */
  private fadeHotspots(targetOpacity: number, duration: number): void {
    const startTime = performance.now();
    const initialOpacities = this.hotspotsGroup.children.map(
      (child) => (child as THREE.Sprite).material.opacity
    );

    const animateFade = (now: number) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);

      this.hotspotsGroup.children.forEach((child, idx) => {
        if (child instanceof THREE.Sprite) {
          const startOp = initialOpacities[idx] ?? 0;
          child.material.opacity = startOp + (targetOpacity - startOp) * p;
        }
      });

      if (p < 1) {
        requestAnimationFrame(animateFade);
      }
    };
    requestAnimationFrame(animateFade);
  }

  /**
   * Create Circular Hotspot Sprite matching Image 2 design exactly:
   * Circular button with white border + pill label below!
   */
  private createHotspotSprite(marker: TourMarker): THREE.Sprite {
    const isNav = marker.plugin === 'navigation';
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    const labelText = marker.label || (isNav ? 'Điểm đến mới' : 'Thông tin');

    if (ctx) {
      ctx.clearRect(0, 0, 256, 256);

      // 1. Top Circular Button (Centered at 128, 90)
      ctx.save();

      // Circle Glow / Shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
      ctx.shadowBlur = 12;
      ctx.shadowOffsetY = 4;

      // Circle background
      ctx.beginPath();
      ctx.arc(128, 90, 48, 0, Math.PI * 2);
      ctx.fillStyle = isNav ? '#1f6f8b' : '#a8583f';
      ctx.fill();

      // Circle White Stroke Border
      ctx.shadowColor = 'transparent';
      ctx.lineWidth = 6;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.stroke();

      // Inner Icon (↑ for navigation, i for info)
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 38px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(isNav ? '↑' : 'i', 128, 89);
      ctx.restore();

      // 2. Bottom Pill Label (Centered at 128, 185)
      ctx.save();
      ctx.font = '600 22px "Be Vietnam Pro", sans-serif';
      const textWidth = ctx.measureText(labelText).width;
      const pillWidth = Math.max(120, textWidth + 32);
      const pillHeight = 38;
      const pillX = 128 - pillWidth / 2;
      const pillY = 175 - pillHeight / 2;
      const radius = 10;

      // Pill Dark Glass Background
      ctx.beginPath();
      ctx.moveTo(pillX + radius, pillY);
      ctx.arcTo(pillX + pillWidth, pillY, pillX + pillWidth, pillY + pillHeight, radius);
      ctx.arcTo(pillX + pillWidth, pillY + pillHeight, pillX, pillY + pillHeight, radius);
      ctx.arcTo(pillX, pillY + pillHeight, pillX, pillY, radius);
      ctx.arcTo(pillX, pillY, pillX + pillWidth, pillY, radius);
      ctx.closePath();

      ctx.fillStyle = 'rgba(15, 15, 15, 0.85)';
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.stroke();

      // Pill Label Text
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(labelText, 128, 175);
      ctx.restore();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;

    const material = new THREE.SpriteMaterial({
      map: texture,
      depthTest: false,
      transparent: true,
      opacity: 1,
    });
    const sprite = new THREE.Sprite(material);

    // Position sprite on 3D sphere at (yaw, pitch)
    // Note minus sign on x: -radius * sin(yaw) to align 3D vector with equirectangular image
    const radius = 520;
    sprite.position.x = -radius * Math.sin(marker.yaw) * Math.cos(marker.pitch);
    sprite.position.y = radius * Math.sin(marker.pitch);
    sprite.position.z = -radius * Math.cos(marker.yaw) * Math.cos(marker.pitch);

    const baseScale = isNav ? 58 : 52;
    sprite.scale.set(baseScale, baseScale, 1);
    sprite.renderOrder = 999;

    sprite.userData = { marker, baseScale };
    return sprite;
  }

  private clearHotspots(): void {
    while (this.hotspotsGroup.children.length > 0) {
      const obj = this.hotspotsGroup.children[0];
      this.hotspotsGroup.remove(obj);
      if (obj instanceof THREE.Sprite) {
        obj.material.map?.dispose();
        obj.material.dispose();
      }
    }
  }

  /** Load Texture with GPU pre-warming */
  private loadTexture(url: string): Promise<THREE.Texture> {
    return new Promise((resolve, reject) => {
      this.textureLoader.load(
        url,
        (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.minFilter = THREE.LinearFilter;
          tex.magFilter = THREE.LinearFilter;
          this.renderer.initTexture(tex);
          resolve(tex);
        },
        undefined,
        (err) => reject(err)
      );
    });
  }

  /** Camera Rotation from Yaw & Pitch */
  private updateCameraRotation(): void {
    const euler = new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ');
    this.camera.quaternion.setFromEuler(euler);

    if (this.onCameraMove) {
      this.onCameraMove(this.yaw, this.pitch);
    }
  }

  /** Reset Autorotate Idle Timer (2 minutes idle delay if enabled) */
  private resetIdleTimer(): void {
    if (this.idleTimer) clearTimeout(this.idleTimer);
    this.isAutorotating = false;
    if (this.enableAutorotateOption) {
      this.idleTimer = setTimeout(() => {
        this.isAutorotating = true;
      }, this.IDLE_DELAY_MS);
    }
  }

  /** Bind Pointer Drag, Hover & Resize Events */
  private bindEvents(): void {
    const el = this.renderer.domElement;

    el.addEventListener('pointerdown', (e) => {
      this.resetIdleTimer();
      this.isPointerDown = true;
      this.pointerStartX = e.clientX;
      this.pointerStartY = e.clientY;
      this.startYaw = this.targetYaw;
      this.startPitch = this.targetPitch;
    });

    el.addEventListener('pointermove', (e) => {
      this.checkHover(e);

      if (!this.isPointerDown) return;
      const dx = e.clientX - this.pointerStartX;
      const dy = e.clientY - this.pointerStartY;

      // Pointer drag direction requested by user:
      // Drag mouse RIGHT (dx > 0) -> view turns RIGHT (+dx)
      // Drag mouse LEFT (dx < 0) -> view turns LEFT (-dx)
      // Drag mouse UP (dy < 0) -> view turns UP (-dy)
      // Drag mouse DOWN (dy > 0) -> view turns DOWN (+dy)
      this.targetYaw = this.startYaw + dx * 0.003;
      this.targetPitch = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, this.startPitch - dy * 0.003));
    });

    el.addEventListener('pointerup', (e) => {
      if (!this.isPointerDown) return;
      this.isPointerDown = false;

      const dx = Math.abs(e.clientX - this.pointerStartX);
      const dy = Math.abs(e.clientY - this.pointerStartY);
      if (dx < 5 && dy < 5) {
        this.onClick(e);
      }
    });

    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.resetIdleTimer();
      this.targetFov = Math.max(30, Math.min(100, this.targetFov + e.deltaY * 0.04));
    }, { passive: false });

    window.addEventListener('resize', this.onResize);
  }

  /** Hover check & Cursor indicator */
  private checkHover(e: MouseEvent): void {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.hotspotsGroup.children);

    if (intersects.length > 0) {
      const sprite = intersects[0].object as THREE.Sprite;
      if (this.hoveredSprite !== sprite) {
        this.hoveredSprite = sprite;
        this.container.style.cursor = 'pointer';
      }
    } else {
      if (this.hoveredSprite) {
        this.hoveredSprite = null;
        this.container.style.cursor = 'grab';
      }
    }
  }

  private onClick(e: MouseEvent): void {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.hotspotsGroup.children);

    if (intersects.length > 0) {
      const sprite = intersects[0].object as THREE.Sprite;
      const marker = sprite.userData?.marker as TourMarker | undefined;

      if (marker) {
        if (marker.plugin === 'navigation' && marker.targetScene) {
          if (this.onNavigate) this.onNavigate(marker.targetScene);
        } else if (this.onHotspotClick) {
          this.onHotspotClick(marker);
        }
      }
    }
  }

  private onResize = (): void => {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  /** Main Render Loop */
  private render = (): void => {
    this.animFrameId = requestAnimationFrame(this.render);

    if (!this.isAnimating) {
      // PSV Autorotate Plugin behavior when idle (if enabled)
      if (this.isAutorotating && !this.isPointerDown) {
        this.targetYaw += this.autorotateSpeed;
      }

      // Damped Lerp
      this.yaw += (this.targetYaw - this.yaw) * 0.15;
      this.pitch += (this.targetPitch - this.pitch) * 0.15;
      this.updateCameraRotation();

      if (Math.abs(this.targetFov - this.fov) > 0.05) {
        this.fov += (this.targetFov - this.fov) * 0.15;
        this.camera.fov = this.fov;
        this.camera.updateProjectionMatrix();
      }

      // Hotspot gentle pulse animation
      const pulse = 1 + Math.sin(performance.now() * 0.004) * 0.06;
      this.hotspotsGroup.children.forEach((child) => {
        if (child instanceof THREE.Sprite) {
          const baseScale = child.userData.baseScale || 58;
          const isHovered = child === this.hoveredSprite;
          const targetScale = isHovered ? baseScale * 1.15 * pulse : baseScale * pulse;
          child.scale.set(targetScale, targetScale, 1);
        }
      });
    }

    this.renderer.render(this.scene, this.camera);
  };

  /** Destroy Engine */
  public destroy(): void {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    if (this.idleTimer) clearTimeout(this.idleTimer);
    window.removeEventListener('resize', this.onResize);

    this.clearHotspots();
    this.sphereA.geometry.dispose();
    this.sphereA.material.map?.dispose();
    this.sphereA.material.dispose();

    this.sphereB.geometry.dispose();
    this.sphereB.material.map?.dispose();
    this.sphereB.material.dispose();

    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
