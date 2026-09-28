/**
 * ─────────────────────────────────────────────────────────────────
 * HotspotPlugin — Renders hotspot markers for all marker types:
 *   navigation | info | audio | ai-chat
 *
 * Navigation markers: THREE.Mesh (PlaneGeometry) — true 3D object
 *   - Full 3-axis rotation (rotX, rotY, rotZ)
 *   - Parallax lean: camera movement causes subtle counter-tilt
 *   - Animated canvas texture (^^ sequential pulse)
 *
 * Other markers: THREE.Sprite (billboard) — pulse + hover scale
 * ─────────────────────────────────────────────────────────────────
 */

import * as THREE from 'three';
import { PluginBase } from './PluginBase';
import type { TourScene, TourMarker, NavigationMarker } from '~/types/tour';

/** Hotspot appearance config per marker plugin type */
const HOTSPOT_STYLES: Record<string, { color: string; icon: string; label: string }> = {
  navigation: { color: '#1d6fa8', icon: '↑', label: 'Điểm đến' },
  info:        { color: '#b85c2e', icon: 'i', label: 'Thông tin' },
  video:       { color: '#dc2626', icon: '▶', label: 'Video' },
  model3d:     { color: '#9333ea', icon: '◇', label: 'Ảnh 3D' },
  audio:       { color: '#2e7d52', icon: '♪', label: 'Âm thanh' },
  'ai-chat':   { color: '#6b3fa0', icon: '✦', label: 'AI Chat' },
};

const SPHERE_RADIUS  = 520;
const CANVAS_SIZE    = 256;   // non-nav sprite canvas
const SPRITE_BASE    = 58;    // non-nav sprite world size

// Navigation arrow — 3D PlaneGeometry mesh
const NAV_CANVAS_W   = 256;
const NAV_CANVAS_H   = 256;
const NAV_MESH_W     = 62;    // world-space width
const NAV_MESH_H     = 65;    // world-space height

/**
 * Parallax lean strength in radians per unit of camera-offset projection.
 * Higher = stronger 3D lean when camera pans. 0.15 ≈ 8° at full perpendicular view.
 */
const PARALLAX_STRENGTH = 0.15;

/** Reusable vectors to avoid per-frame allocation */
const _v3a = new THREE.Vector3();
const _v3b = new THREE.Vector3();
const _euler = new THREE.Euler();
const _leanQuat = new THREE.Quaternion();

export interface HotspotPluginOptions {
  pulseSpeed?: number;       // default 0.004
  pulseAmplitude?: number;   // default 0.06
  hoverScale?: number;       // default 1.15
  /** Enable drag-to-reposition markers. Disable in viewer, enable in designer. */
  draggable?: boolean;       // default false
}

export class HotspotPlugin extends PluginBase {
  readonly id = 'hotspot';
  readonly name = 'Hotspot Plugin';

  private group = new THREE.Group();
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private hovered: THREE.Object3D | null = null;

  private pulseSpeed: number;
  private pulseAmplitude: number;
  private hoverScale: number;
  private draggable: boolean;

  // Drag state — works for both Sprite and Mesh
  private draggingObj: THREE.Object3D | null = null;
  private dragRaycaster = new THREE.Raycaster();
  private dragMouse     = new THREE.Vector2();

  /**
   * Per-nav-mesh canvas + orientation state.
   * baseQuaternion = lookAt(0,0,0) + user rotations (frozen at build time).
   * Each frame we layer a parallax lean on top of it.
   */
  private navMeshData = new Map<THREE.Mesh, {
    canvas:         HTMLCanvasElement;
    ctx:            CanvasRenderingContext2D;
    texture:        THREE.CanvasTexture;
    time:           number;
    baseQuaternion: THREE.Quaternion;
  }>();

  private unsubs: Array<() => void> = [];

  constructor(opts: HotspotPluginOptions = {}) {
    super();
    this.pulseSpeed      = opts.pulseSpeed      ?? 0.004;
    this.pulseAmplitude  = opts.pulseAmplitude  ?? 0.06;
    this.hoverScale      = opts.hoverScale      ?? 1.15;
    this.draggable       = opts.draggable       ?? false;
  }

  protected override onInit(): void {
    this.ctx.scene.add(this.group);
    this.bindEvents();
    if (this.draggable) this.bindDragEvents();
  }

  protected override onUpdate(delta: number): void {
    const pulse = 1 + Math.sin(performance.now() * this.pulseSpeed) * this.pulseAmplitude;

    this.group.children.forEach((child) => {
      const isHov = child === this.hovered;

      if (child instanceof THREE.Mesh) {
        // ── Navigation marker (3D Mesh) ──────────────────────────
        const data = this.navMeshData.get(child);
        if (!data) return;

        // Animate canvas texture
        data.time += delta;
        this.drawNavArrow(data.ctx, data.canvas, data.time, isHov);
        data.texture.needsUpdate = true;

        // Hover scale (uniform XY, keep Z=1 for plane)
        const hm = isHov ? this.hoverScale : 1;
        child.scale.set(hm, hm, 1);

        // ── Parallax lean ─────────────────────────────────────────
        // Camera forward vector in world space
        _v3a.set(0, 0, -1).applyQuaternion(this.ctx.camera.camera.quaternion);

        // Marker's local X and Y axes in world space (from base quaternion)
        _v3b.set(1, 0, 0).applyQuaternion(data.baseQuaternion); // local X = right
        const projX = _v3a.dot(_v3b);                            // camera lean right/left

        _v3b.set(0, 1, 0).applyQuaternion(data.baseQuaternion); // local Y = up
        const projY = _v3a.dot(_v3b);                            // camera lean up/down

        // Counter-lean: camera looks right → marker leans left (projX > 0 → lean -Y)
        _euler.set(
           projY * PARALLAX_STRENGTH,   // pitch lean
          -projX * PARALLAX_STRENGTH,   // yaw lean (negate: counter-direction)
          0,
        );
        _leanQuat.setFromEuler(_euler);

        // Apply: base orientation × lean
        child.quaternion.copy(data.baseQuaternion).multiply(_leanQuat);

      } else if (child instanceof THREE.Sprite) {
        // ── Interaction marker (Sprite billboard) ─────────────────
        const base: number = child.userData.baseScale ?? SPRITE_BASE;
        const s = (isHov ? base * this.hoverScale : base) * pulse;
        child.scale.set(s, s, 1);
      }
    });
  }

  protected override onDestroy(): void {
    this.unsubs.forEach((fn) => fn());
    this.clearSprites();
    this.ctx.scene.remove(this.group);
  }

  // ── Scene hooks ────────────────────────────────────────────────

  override onSceneLoad(_scene: TourScene): void {
    this.fadeAll(0, 200);
  }

  override onSceneReady(scene: TourScene): void {
    this.clearSprites();
    this.buildSprites(scene);
    this.fadeAll(1, 350);
  }

  // ── Sprite / Mesh building ─────────────────────────────────────

  private buildSprites(scene: TourScene): void {
    (scene.markers ?? []).forEach((m) => {
      const obj = m.plugin === 'navigation'
        ? this.createNavMesh(m)
        : this.createSprite(m);
      this.group.add(obj);
    });
  }

  private createSprite(marker: TourMarker): THREE.Sprite {
    const style = HOTSPOT_STYLES[marker.plugin] ?? HOTSPOT_STYLES['info'];
    const label = marker.label || style.label;

    const canvas = document.createElement('canvas');
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    const ctx = canvas.getContext('2d')!;

    // ── Circle button ──
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 14;
    ctx.shadowOffsetY = 5;

    ctx.beginPath();
    ctx.arc(128, 88, 50, 0, Math.PI * 2);
    ctx.fillStyle = style.color;
    ctx.fill();

    ctx.shadowColor = 'transparent';
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgba(255,255,255,0.9)';
    ctx.stroke();
    ctx.restore();

    // ── Inner icon ──
    ctx.save();
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 36px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(style.icon, 128, 88);
    ctx.restore();

    // ── Pill label ──
    ctx.save();
    ctx.font = '600 20px "Be Vietnam Pro", sans-serif';
    const tw = ctx.measureText(label).width;
    const pw = Math.max(110, tw + 28);
    const ph = 34;
    const px = 128 - pw / 2;
    const py = 170 - ph / 2;
    const r = 8;

    ctx.beginPath();
    ctx.moveTo(px + r, py);
    ctx.arcTo(px + pw, py, px + pw, py + ph, r);
    ctx.arcTo(px + pw, py + ph, px, py + ph, r);
    ctx.arcTo(px, py + ph, px, py, r);
    ctx.arcTo(px, py, px + pw, py, r);
    ctx.closePath();

    ctx.fillStyle = 'rgba(12,12,12,0.88)';
    ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, 128, 170);
    ctx.restore();

    // ── Sprite setup ──
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;

    const mat = new THREE.SpriteMaterial({
      map: tex,
      depthTest: false,
      transparent: true,
      opacity: 0,
    });
    const sprite = new THREE.Sprite(mat);

    sprite.position.set(
      -SPHERE_RADIUS * Math.sin(marker.yaw) * Math.cos(marker.pitch),
       SPHERE_RADIUS * Math.sin(marker.pitch),
      -SPHERE_RADIUS * Math.cos(marker.yaw) * Math.cos(marker.pitch),
    );

    const base = SPRITE_BASE - 6;
    sprite.scale.set(base, base, 1);
    sprite.renderOrder = 999;
    sprite.userData = { marker, baseScale: base };

    return sprite;
  }

  // ── Navigation Mesh (3D PlaneGeometry) ─────────────────────────

  /**
   * Create a navigation marker as a true 3D PlaneGeometry mesh.
   *
   * Orientation:
   *   1. mesh.lookAt(0,0,0) — plane faces the sphere center (= camera)
   *   2. rotateZ(rotZ)       — user spin around normal axis
   *   3. rotateX(rotX)       — user tilt forward/backward
   *   4. rotateY(rotY)       — user swivel left/right
   *
   * The resulting quaternion is stored as `baseQuaternion`.
   * Each frame, a parallax lean is multiplied ON TOP of baseQuaternion.
   */
  private createNavMesh(marker: TourMarker): THREE.Mesh {
    const nav = marker as NavigationMarker;

    const canvas = document.createElement('canvas');
    canvas.width  = NAV_CANVAS_W;
    canvas.height = NAV_CANVAS_H;
    const ctx = canvas.getContext('2d')!;

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    this.drawNavArrow(ctx, canvas, 0, false);

    const mat = new THREE.MeshBasicMaterial({
      map:         tex,
      transparent: true,
      depthTest:   false,
      side:        THREE.DoubleSide,
      opacity:     0,
    });

    const geo  = new THREE.PlaneGeometry(NAV_MESH_W, NAV_MESH_H);
    const mesh = new THREE.Mesh(geo, mat);

    // Position on sphere surface
    mesh.position.set(
      -SPHERE_RADIUS * Math.sin(nav.yaw)   * Math.cos(nav.pitch),
       SPHERE_RADIUS * Math.sin(nav.pitch),
      -SPHERE_RADIUS * Math.cos(nav.yaw)   * Math.cos(nav.pitch),
    );

    // Step 1: face toward sphere center (so texture is visible from inside)
    mesh.lookAt(0, 0, 0);

    // Step 2-4: apply user rotations in local axes (after lookAt)
    // rotZ = former `rotation` field (backward compat)
    const rotZ = nav.rotZ ?? nav.rotation ?? 0;
    const rotX = nav.rotX ?? 0;
    const rotY = nav.rotY ?? 0;
    if (rotZ !== 0) mesh.rotateZ(rotZ);
    if (rotX !== 0) mesh.rotateX(rotX);
    if (rotY !== 0) mesh.rotateY(rotY);

    // Freeze base orientation for parallax computation
    const baseQuaternion = mesh.quaternion.clone();

    mesh.renderOrder = 999;
    mesh.userData    = { marker };

    this.navMeshData.set(mesh, { canvas, ctx, texture: tex, time: 0, baseQuaternion });
    return mesh;
  }

  /**
   * Draw animated double-up-chevron (^^) navigation arrow.
   * Runs every frame per nav mesh.
   *
   * Animation: bottom ^ peaks first → top ^ peaks → repeat.
   * Creates "upward flow" = "go forward" direction cue.
   */
  private drawNavArrow(
    ctx:     CanvasRenderingContext2D,
    canvas:  HTMLCanvasElement,
    time:    number,
    hovered: boolean,
  ): void {
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const phase = (time * 1.5) % 1.0;
    const cBot = 0.45 + 0.55 * Math.max(0, Math.sin((phase - 0.0) * Math.PI * 2));
    const cTop = 0.45 + 0.55 * Math.max(0, Math.sin((phase - 0.5) * Math.PI * 2));

    const cx   = W / 2;
    const armX = W * 0.355;
    const armH = H * 0.262;
    const lw   = W * 0.148;

    if (hovered) {
      ctx.save();
      ctx.shadowColor = 'rgba(200, 230, 255, 0.8)';
      ctx.shadowBlur  = 18;
      this.drawChevron(ctx, cx, H * 0.20, armX, armH, lw, 1.0, true);
      this.drawChevron(ctx, cx, H * 0.56, armX, armH, lw, 1.0, true);
      ctx.restore();
    }

    this.drawChevron(ctx, cx, H * 0.20, armX, armH, lw, cTop, hovered);
    this.drawChevron(ctx, cx, H * 0.56, armX, armH, lw, cBot, hovered);
  }

  private drawChevron(
    ctx:     CanvasRenderingContext2D,
    cx:      number,
    tipY:    number,
    armX:    number,
    armH:    number,
    lw:      number,
    alpha:   number,
    hovered: boolean,
  ): void {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.lineWidth   = lw;
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';
    ctx.strokeStyle = hovered ? 'rgba(220, 240, 255, 1.0)' : '#ffffff';

    ctx.beginPath();
    ctx.moveTo(cx - armX, tipY + armH);
    ctx.lineTo(cx,         tipY);
    ctx.lineTo(cx + armX,  tipY + armH);
    ctx.stroke();
    ctx.restore();
  }

  // ── Fade animation ─────────────────────────────────────────────

  private fadeAll(target: number, duration: number): void {
    const start = performance.now();

    // Snapshot initial opacity for every child (Sprite or Mesh)
    const initial = this.group.children.map((c) => {
      if (c instanceof THREE.Sprite) return c.material.opacity;
      if (c instanceof THREE.Mesh)   return (c.material as THREE.MeshBasicMaterial).opacity;
      return 0;
    });

    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      this.group.children.forEach((c, i) => {
        const from = initial[i] ?? 0;
        const alpha = from + (target - from) * p;
        if (c instanceof THREE.Sprite) {
          c.material.opacity = alpha;
        } else if (c instanceof THREE.Mesh) {
          (c.material as THREE.MeshBasicMaterial).opacity = alpha;
        }
      });
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // ── Raycasting ─────────────────────────────────────────────────

  private bindEvents(): void {
    const el = this.ctx.renderer.domElement;

    const onMove = (e: MouseEvent) => {
      if (this.draggingObj) return;

      const rect = el.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.ctx.camera.camera);
      const hits = this.raycaster.intersectObjects(this.group.children);

      if (hits.length > 0) {
        const obj = hits[0].object;
        if (this.hovered !== obj) {
          this.hovered = obj;
          this.ctx.container.style.cursor = this.draggable ? 'grab' : 'pointer';
          const marker = obj.userData?.marker as TourMarker | undefined;
          if (marker) this.ctx.bus.emit('hotspot:hover', { marker });
        }
      } else {
        if (this.hovered) {
          this.hovered = null;
          this.ctx.container.style.cursor = 'grab';
          this.ctx.bus.emit('hotspot:hover', { marker: null });
        }
      }
    };

    const onClick = (e: MouseEvent) => {
      if (this.draggingObj) return;

      const rect = el.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.ctx.camera.camera);
      const hits = this.raycaster.intersectObjects(this.group.children);

      if (hits.length > 0) {
        const obj    = hits[0].object;
        const marker = obj.userData?.marker as TourMarker | undefined;
        if (!marker) return;

        this.ctx.bus.emit('hotspot:click', { marker });

        if (marker.plugin === 'navigation' && (marker as NavigationMarker).targetScene) {
          this.ctx.bus.emit('navigate', { sceneId: (marker as NavigationMarker).targetScene });
        }
      }
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('click', onClick);
    this.unsubs.push(
      () => el.removeEventListener('mousemove', onMove),
      () => el.removeEventListener('click', onClick),
    );
  }

  // ── Drag-to-reposition (designer mode) ────────────────────────────────────

  private bindDragEvents(): void {
    const el     = this.ctx.renderer.domElement;
    let   dragStarted = false;
    let   pointerDownPos = { x: 0, y: 0 };

    const onPointerDown = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const ndcX = ((e.clientX - rect.left) / rect.width)  * 2 - 1;
      const ndcY = -((e.clientY - rect.top)  / rect.height) * 2 + 1;

      this.dragRaycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), this.ctx.camera.camera);
      const hits = this.dragRaycaster.intersectObjects(this.group.children);
      if (hits.length === 0) return;

      this.draggingObj = hits[0].object;
      pointerDownPos = { x: e.clientX, y: e.clientY };
      dragStarted = false;
      el.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!this.draggingObj) return;

      const dx = e.clientX - pointerDownPos.x;
      const dy = e.clientY - pointerDownPos.y;
      if (!dragStarted && Math.sqrt(dx * dx + dy * dy) > 4) {
        dragStarted = true;
        this.ctx.bus.emit('interaction:lock');
        this.ctx.container.style.cursor = 'grabbing';
      }
      if (!dragStarted) return;

      const rect = el.getBoundingClientRect();
      this.dragMouse.x = ((e.clientX - rect.left) / rect.width)  * 2 - 1;
      this.dragMouse.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;

      this.dragRaycaster.setFromCamera(this.dragMouse, this.ctx.camera.camera);
      const dir = this.dragRaycaster.ray.direction.clone().normalize();

      const yaw   = Math.atan2(-dir.x, -dir.z);
      const pitch = Math.asin(Math.max(-1, Math.min(1, dir.y)));
      const R     = SPHERE_RADIUS;

      const newPos = new THREE.Vector3(
        -R * Math.sin(yaw) * Math.cos(pitch),
         R * Math.sin(pitch),
        -R * Math.cos(yaw) * Math.cos(pitch),
      );

      this.draggingObj.position.copy(newPos);

      // For nav meshes: recompute lookAt + user rotations after position change
      if (this.draggingObj instanceof THREE.Mesh) {
        const data = this.navMeshData.get(this.draggingObj);
        if (data) {
          const nav = this.draggingObj.userData.marker as NavigationMarker;
          this.draggingObj.lookAt(0, 0, 0);
          const rotZ = nav.rotZ ?? nav.rotation ?? 0;
          const rotX = nav.rotX ?? 0;
          const rotY = nav.rotY ?? 0;
          if (rotZ !== 0) this.draggingObj.rotateZ(rotZ);
          if (rotX !== 0) this.draggingObj.rotateX(rotX);
          if (rotY !== 0) this.draggingObj.rotateY(rotY);
          data.baseQuaternion.copy(this.draggingObj.quaternion);
        }
      }

      this.draggingObj.userData.dragYaw   = yaw;
      this.draggingObj.userData.dragPitch = pitch;
    };

    const onPointerUp = () => {
      if (!this.draggingObj) return;

      if (dragStarted) {
        const marker = this.draggingObj.userData.marker as TourMarker | undefined;
        const yaw    = this.draggingObj.userData.dragYaw   as number | undefined;
        const pitch  = this.draggingObj.userData.dragPitch as number | undefined;

        if (marker && yaw !== undefined && pitch !== undefined) {
          this.ctx.bus.emit('hotspot:moved', {
            markerId: marker.id,
            yaw:   +yaw.toFixed(4),
            pitch: +pitch.toFixed(4),
          });
        }

        this.ctx.bus.emit('interaction:unlock');
        this.ctx.container.style.cursor = 'grab';
      }

      this.draggingObj = null;
      dragStarted = false;
    };

    el.addEventListener('pointerdown',   onPointerDown);
    el.addEventListener('pointermove',   onPointerMove);
    el.addEventListener('pointerup',     onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);
    this.unsubs.push(
      () => el.removeEventListener('pointerdown',   onPointerDown),
      () => el.removeEventListener('pointermove',   onPointerMove),
      () => el.removeEventListener('pointerup',     onPointerUp),
      () => el.removeEventListener('pointercancel', onPointerUp),
    );
  }

  private clearSprites(): void {
    while (this.group.children.length > 0) {
      const obj = this.group.children[0];
      this.group.remove(obj);
      if (obj instanceof THREE.Sprite) {
        obj.material.map?.dispose();
        obj.material.dispose();
      } else if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        (obj.material as THREE.MeshBasicMaterial).map?.dispose();
        (obj.material as THREE.MeshBasicMaterial).dispose();
      }
    }
    this.navMeshData.clear();
    this.hovered     = null;
    this.draggingObj = null;
  }
}
