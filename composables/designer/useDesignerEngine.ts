/**
 * ─────────────────────────────────────────────────────────────────
 * useDesignerEngine — Bridge Layer cho trang Designer (thiết kế tour)
 *
 * Cung cấp:
 *   - Preview panorama trong canvas
 *   - Đọc yaw/pitch real-time từ camera (để đặt hotspot)
 *   - Thêm / Xoá hotspot (preview, chưa lưu vào DB)
 *   - Snapshot canvas
 * ─────────────────────────────────────────────────────────────────
 */

import { ref, shallowRef, readonly, computed, onBeforeUnmount } from 'vue';
import { View360Engine } from '~/core/three/engine/View360Engine';
import { HotspotPlugin } from '~/core/three/plugins/HotspotPlugin';
import type { TourScene, TourMarker } from '~/types/tour';

// ── Hotspot placement state ─────────────────────────────────────

export type PlacementMode = 'none' | 'navigation' | 'info' | 'video' | 'model3d' | 'audio' | 'ai-chat';

export interface PendingHotspot {
  type: PlacementMode;
  yaw: number;
  pitch: number;
}

// ── Composable ─────────────────────────────────────────────────

export function useDesignerEngine() {
  // ── State ──
  const isLoading = ref(true);
  const errorMessage = ref('');
  const currentScene = ref<TourScene | null>(null);

  // Camera pose — updated every frame via EventBus
  const cameraYaw = ref(0);
  const cameraPitch = ref(0);
  const cameraFov = ref(75);

  // Hotspot placement mode
  const placementMode = ref<PlacementMode>('none');
  const isPlacing = computed(() => placementMode.value !== 'none');

  // Last marker that was moved via drag (admin page watches this)
  const lastMarkerMoved = ref<{ markerId: string; yaw: number; pitch: number } | null>(null);
  const lastPlacement = ref<{ type: Exclude<PlacementMode, 'none'>; yaw: number; pitch: number } | null>(null);

  // Engine instance
  const engine = shallowRef<View360Engine | null>(null);

  // Unsubscribe cleanup
  const unsubs: Array<() => void> = [];

  // ── Init ───────────────────────────────────────────────────────

  async function initEngine(
    container: HTMLElement,
    initialScene: TourScene,
  ): Promise<void> {
    isLoading.value = true;
    errorMessage.value = '';

    try {
      const e = new View360Engine({
        container,
        // No autorotate in designer — camera must stay where user puts it
        camera: {
          dampingFactor: 0.1,
        },
        pano: {
          defaultTransition: 'crossfade',
          transitionDuration: 500,
        },
      });

      // Hotspot preview + drag-to-reposition (designer mode)
      e.use(new HotspotPlugin({ pulseSpeed: 0, pulseAmplitude: 0, draggable: true }));

      // ── Wire camera pose to reactive refs ──
      const unsub1 = e.bus.on('camera:move', ({ yaw, pitch }) => {
        cameraYaw.value = yaw;
        cameraPitch.value = pitch;
      });
      const unsub2 = e.bus.on('camera:fov', ({ fov }) => {
        cameraFov.value = fov;
      });
      const unsub3 = e.bus.on('scene:loaded', ({ scene }) => {
        currentScene.value = scene;
        isLoading.value = false;
      });

      unsubs.push(unsub1, unsub2, unsub3);

      // ── Hotspot moved (drag-to-reposition) ─────────────────────────────────
      const unsub4 = e.bus.on('hotspot:moved', ({ markerId, yaw, pitch }) => {
        lastMarkerMoved.value = { markerId, yaw, pitch };
      });
      unsubs.push(unsub4);

      // ── Canvas click → place hotspot ──
      const canvas = e['renderer'].domElement as HTMLCanvasElement;
      const onClick = (ev: MouseEvent) => {
        if (placementMode.value === 'none') return;
        // Use current camera yaw/pitch at click as hotspot position
        // (the user looks at the spot they want, then clicks the button)
        // For more precision: raycast to sphere surface from mouse position
        handlePlacementClick(ev, canvas, e);
      };
      canvas.addEventListener('click', onClick);
      unsubs.push(() => canvas.removeEventListener('click', onClick));

      engine.value = e;

      // ── Load first scene without intro ──
      await e.loadScene(initialScene, false);
    } catch (err) {
      errorMessage.value =
        err instanceof Error ? err.message : 'Không thể khởi động designer.';
      isLoading.value = false;
    }
  }

  // ── Scene navigation (no intro in designer) ────────────────────

  async function loadScene(scene: TourScene): Promise<void> {
    if (!engine.value) return;
    isLoading.value = true;
    try {
      await engine.value.loadScene(scene, false);
    } finally {
      isLoading.value = false;
    }
  }

  // ── Hotspot Placement ──────────────────────────────────────────

  /** Start placement mode — next canvas click places a hotspot of this type */
  function startPlacement(type: PlacementMode): void {
    placementMode.value = type;
  }

  /** Cancel placement mode without placing */
  function cancelPlacement(): void {
    placementMode.value = 'none';
  }

  /**
   * Handle canvas click during placement mode.
   * Performs a sphere raycast to get the exact yaw/pitch at the click point.
   */
  function handlePlacementClick(
    ev: MouseEvent,
    canvas: HTMLCanvasElement,
    e: View360Engine,
  ): void {
    const rect = canvas.getBoundingClientRect();
    const ndcX = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
    const ndcY = -((ev.clientY - rect.top) / rect.height) * 2 + 1;

    // Use THREE Raycaster via engine camera
    // Import dynamically to avoid polluting Vue composable with THREE
    import('three').then(({ Raycaster, Vector2, Vector3 }) => {
      const raycaster = new Raycaster();
      const mouse = new Vector2(ndcX, ndcY);
      raycaster.setFromCamera(mouse, e.camera.camera);

      // Intersect with a virtual sphere at radius 520
      const dir = raycaster.ray.direction.clone().normalize();
      const yaw = Math.atan2(-dir.x, -dir.z);
      const pitch = Math.asin(dir.y);

      const type = placementMode.value;
      if (type === 'none') return;
      lastPlacement.value = { type, yaw, pitch };
      placementMode.value = 'none';
    });
  }

  /** Get current camera yaw/pitch as a tuple (to manually set hotspot position) */
  function getCameraAim(): { yaw: number; pitch: number } {
    return { yaw: cameraYaw.value, pitch: cameraPitch.value };
  }

  // ── Marker sync ───────────────────────────────────────────────────

  /** Force HotspotPlugin to re-render markers for current scene */
  function refreshMarkers(scene: TourScene): void {
    const hp = engine.value?.getPlugin<HotspotPlugin>('hotspot');
    if (!hp) return;
    hp.onSceneReady?.(scene);
  }

  /** Set camera FOV (for zoom slider). Clamped to [30, 120]. */
  function setFov(fov: number): void {
    if (!engine.value) return;
    engine.value.camera.setTarget(
      engine.value.camera.getTargetYaw(),
      engine.value.camera.getTargetPitch(),
      Math.max(30, Math.min(120, fov)),
    );
  }

  function setBrightness(value: number): void {
    engine.value?.pano.setBrightness(value);
  }

  // ── Snapshot ───────────────────────────────────────────────────

  /** Capture current frame as a data URL (for thumbnail generation) */
  function captureSnapshot(): string | null {
    if (!engine.value) return null;
    try {
      const canvas = engine.value['renderer'].domElement as HTMLCanvasElement;
      return canvas.toDataURL('image/jpeg', 0.85);
    } catch {
      return null;
    }
  }

  // ── Cleanup ────────────────────────────────────────────────────

  function destroyEngine(): void {
    unsubs.forEach((fn) => fn());
    engine.value?.destroy();
    engine.value = null;
    currentScene.value = null;
  }

  onBeforeUnmount(destroyEngine);

  // ── Return ─────────────────────────────────────────────────────

  return {
    // State
    isLoading: readonly(isLoading),
    errorMessage: readonly(errorMessage),
    currentScene: readonly(currentScene),
    cameraYaw: readonly(cameraYaw),
    cameraPitch: readonly(cameraPitch),
    cameraFov: readonly(cameraFov),
    placementMode: readonly(placementMode),
    isPlacing,
    lastMarkerMoved: readonly(lastMarkerMoved),
    lastPlacement: readonly(lastPlacement),

    // Actions
    initEngine,
    loadScene,
    startPlacement,
    cancelPlacement,
    getCameraAim,
    captureSnapshot,
    refreshMarkers,
    setFov,
    setBrightness,
    destroyEngine,
  };
}
