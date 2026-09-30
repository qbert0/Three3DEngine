/**
 * ─────────────────────────────────────────────────────────────────
 * CameraController — Smooth camera with damping, FOV zoom, pitch clamp
 * ─────────────────────────────────────────────────────────────────
 */

import * as THREE from 'three';
import type { EventBus } from './EventBus';

export interface CameraConfig {
  fov?: number;
  minFov?: number;
  maxFov?: number;
  dampingFactor?: number;    // 0–1, lower = smoother. Default 0.12
  pitchLimit?: number;       // radians. Default PI/2.2
  dragSensitivity?: number;  // Default 0.003
  zoomSensitivity?: number;  // Default 0.04
}

export class CameraController {
  readonly camera: THREE.PerspectiveCamera;

  // Current state (interpolated)
  private yaw = 0;
  private pitch = 0;
  private fov: number;

  // Target state (set by input)
  private targetYaw = 0;
  private targetPitch = 0;
  private targetFov: number;

  // Config
  private readonly minFov: number;
  private readonly maxFov: number;
  private readonly damping: number;
  private readonly pitchLimit: number;
  private readonly dragSensitivity: number;
  private readonly zoomSensitivity: number;

  // Pointer state
  private isPointerDown = false;
  private pointerStartX = 0;
  private pointerStartY = 0;
  private startYaw = 0;
  private startPitch = 0;

  private bus: EventBus;
  private container: HTMLElement;
  private domElement: HTMLElement;

  // Unsubscribe callbacks
  private disposers: Array<() => void> = [];
  // When true, all pointer/wheel input is ignored (e.g. during marker drag)
  private inputLocked = false;

  constructor(container: HTMLElement, domElement: HTMLElement, bus: EventBus, config: CameraConfig = {}) {
    this.container = container;
    this.domElement = domElement;
    this.bus = bus;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    this.fov = config.fov ?? 75;
    this.targetFov = this.fov;
    this.minFov = config.minFov ?? 30;
    this.maxFov = config.maxFov ?? 100;
    this.damping = config.dampingFactor ?? 0.12;
    this.pitchLimit = config.pitchLimit ?? Math.PI / 2.2;
    this.dragSensitivity = config.dragSensitivity ?? 0.003;
    this.zoomSensitivity = config.zoomSensitivity ?? 0.04;

    this.camera = new THREE.PerspectiveCamera(this.fov, width / height, 0.1, 3000);
    this.camera.position.set(0, 0, 0);

    this.bindPointerEvents();

    // Lock/unlock camera input when marker drag starts/stops
    this.disposers.push(
      bus.on('interaction:lock',   () => { this.inputLocked = true; }),
      bus.on('interaction:unlock', () => { this.inputLocked = false; }),
    );
  }

  // ── Public API ─────────────────────────────────────────────────

  /** Set camera orientation instantly (no lerp) */
  setOrientation(yaw: number, pitch: number, fov?: number): void {
    this.yaw = yaw;
    this.pitch = pitch;
    this.targetYaw = yaw;
    this.targetPitch = pitch;
    if (fov !== undefined) {
      this.fov = fov;
      this.targetFov = fov;
      this.camera.fov = fov;
      this.camera.updateProjectionMatrix();
    }
    this.applyRotation();
  }

  /** Set camera target orientation (lerp to it) */
  setTarget(yaw: number, pitch: number, fov?: number): void {
    this.targetYaw = yaw;
    this.targetPitch = Math.max(-this.pitchLimit, Math.min(this.pitchLimit, pitch));
    if (fov !== undefined) {
      this.targetFov = Math.max(this.minFov, Math.min(this.maxFov, fov));
    }
  }

  /** Override current + target yaw/pitch/fov directly (for animations) */
  setRaw(yaw: number, pitch: number, fov?: number): void {
    this.yaw = yaw;
    this.pitch = pitch;
    this.targetYaw = yaw;
    this.targetPitch = pitch;
    if (fov !== undefined) {
      this.fov = fov;
      this.camera.fov = fov;
      this.camera.updateProjectionMatrix();
    }
    this.applyRotation();
  }

  getYaw(): number { return this.yaw; }
  getPitch(): number { return this.pitch; }
  getFov(): number { return this.fov; }
  getTargetYaw(): number { return this.targetYaw; }
  getTargetPitch(): number { return this.targetPitch; }

  /** Called each frame by the engine render loop */
  update(): void {
    let moved = false;

    const dyaw = this.targetYaw - this.yaw;
    const dpitch = this.targetPitch - this.pitch;

    if (Math.abs(dyaw) > 0.0001 || Math.abs(dpitch) > 0.0001) {
      this.yaw += dyaw * this.damping;
      this.pitch += dpitch * this.damping;
      this.applyRotation();
      moved = true;
    }

    if (Math.abs(this.targetFov - this.fov) > 0.05) {
      this.fov += (this.targetFov - this.fov) * this.damping;
      this.camera.fov = this.fov;
      this.camera.updateProjectionMatrix();
      moved = true;
    }

    if (moved) {
      this.bus.emit('camera:move', { yaw: this.yaw, pitch: this.pitch });
    }
  }

  onResize(width: number, height: number): void {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  dispose(): void {
    this.disposers.forEach((fn) => fn());
    this.disposers = [];
  }

  // ── Private ────────────────────────────────────────────────────

  private applyRotation(): void {
    const euler = new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ');
    this.camera.quaternion.setFromEuler(euler);
  }

  private bindPointerEvents(): void {
    const el = this.domElement;

    const onDown = (e: PointerEvent) => {
      if (this.inputLocked) return;
      // Only capture camera drag from the WebGL canvas itself — don't
      // steal pointer events destined for interactive CSS3D elements
      // (video/iframe play buttons, controls, etc.).
      if (e.target !== el) return;
      this.isPointerDown = true;
      this.pointerStartX = e.clientX;
      this.pointerStartY = e.clientY;
      this.startYaw = this.targetYaw;
      this.startPitch = this.targetPitch;
      el.setPointerCapture(e.pointerId);
      this.bus.emit('interaction:dragstart', { x: e.clientX, y: e.clientY });
    };

    const onMove = (e: PointerEvent) => {
      if (!this.isPointerDown || this.inputLocked) return;
      const dx = e.clientX - this.pointerStartX;
      const dy = e.clientY - this.pointerStartY;

      // Content-drag convention:
      //   Kéo phải (dx > 0) → camera quay trái → yaw tăng (+dx)
      //   Kéo lên  (dy < 0) → camera nhìn xuống → pitch giảm (+dy vì dy âm)
      this.targetYaw = this.startYaw + dx * this.dragSensitivity;
      this.targetPitch = Math.max(
        -this.pitchLimit,
        Math.min(this.pitchLimit, this.startPitch + dy * this.dragSensitivity)
      );
    };

    const onUp = () => {
      if (!this.isPointerDown) return;
      this.isPointerDown = false;
      this.bus.emit('interaction:dragend');
    };

    const onWheel = (e: WheelEvent) => {
      if (this.inputLocked) return;
      e.preventDefault();
      this.targetFov = Math.max(this.minFov, Math.min(this.maxFov, this.targetFov + e.deltaY * this.zoomSensitivity));
      this.bus.emit('camera:fov', { fov: this.targetFov });
    };

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);
    el.addEventListener('wheel', onWheel, { passive: false });

    this.disposers.push(
      () => el.removeEventListener('pointerdown', onDown),
      () => el.removeEventListener('pointermove', onMove),
      () => el.removeEventListener('pointerup', onUp),
      () => el.removeEventListener('pointercancel', onUp),
      () => el.removeEventListener('wheel', onWheel),
    );
  }
}
