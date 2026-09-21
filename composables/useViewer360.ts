import { ref, shallowRef } from 'vue';
import { EquirectangularAdapter, Viewer, events } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import type { TourScene } from '~/types/tour';
import type { PluginMarker, PluginContext, View360Plugin } from '~/core/plugins/types';
import { useImageLoader } from './useImageLoader';
import { useSceneTransition } from './useSceneTransition';
import { useSnapshot } from './useSnapshot';

export interface UseViewer360Options {
  plugins: View360Plugin[];
  onNavigate: (sceneId: string) => void;
  onInfoOpen: (content: string, label: string) => void;

  /** Thời gian transition (ms). Mặc định 500 */
  transitionDuration?: number;
  /** Ngưỡng chờ trước khi hiện thumbnail fallback (ms). Mặc định 1000 */
  thumbnailFallbackAfterMs?: number;
  /** Bật preload ngầm. Mặc định true */
  preloadEnabled?: boolean;
  /** Số cảnh preload xung quanh. Mặc định 2 */
  preloadRadius?: number;
  /** Giữ nguyên hướng nhìn (yaw/pitch) khi đổi cảnh */
  preserveOrientation?: boolean;
}

export function useViewer360(options: UseViewer360Options) {
  const isLoading = ref(true);
  const errorMessage = ref('');
  const viewer = shallowRef<Viewer | null>(null);
  const currentScene = ref<TourScene | null>(null);
  const isSwitching = ref(false);
  const loadPhase = ref<'idle' | 'loading' | 'thumbnail' | 'full'>('idle');

  const imageLoader = useImageLoader();
  const transition = useSceneTransition();
  const snapshot = useSnapshot();

  const cfg = {
    transitionDuration: options.transitionDuration ?? 500,
    thumbnailFallbackAfterMs: options.thumbnailFallbackAfterMs ?? 1000,
    preloadEnabled: options.preloadEnabled ?? true,
    preloadRadius: options.preloadRadius ?? 2,
    preserveOrientation: options.preserveOrientation ?? false,
  };

  const buildContext = (): PluginContext => ({
    navigate: options.onNavigate,
    openInfo: options.onInfoOpen,
    playAudio: (src) => {
      new Audio(src).play().catch(() => {});
    },
  });

  const buildMarkers = (scene: TourScene): PluginMarker[] => {
    const ctx = buildContext();
    return options.plugins.flatMap((p) => p.getMarkers(scene, ctx));
  };

  /* ═══════════════════════════════════════════════════════════
     PRELOAD — LỚP 1
     ═══════════════════════════════════════════════════════════ */
  function preloadNeighbours(scene: TourScene, allScenes?: TourScene[]) {
    if (!cfg.preloadEnabled || !allScenes?.length) return;

    const idx = allScenes.findIndex((s) => s.id === scene.id);
    if (idx === -1) return;

    const srcs: string[] = [];
    const offsets: number[] = [];
    for (let r = 1; r <= cfg.preloadRadius; r++) offsets.push(-r, r);

    for (const off of offsets) {
      const s = allScenes[idx + off];
      if (!s) continue;
      if (s.panorama && !imageLoader.isCached(s.panorama)) srcs.push(s.panorama);
      if (s.thumbnail && !imageLoader.isCached(s.thumbnail)) srcs.push(s.thumbnail);
    }

    imageLoader.preloadInBackground(srcs);
  }

  /* ═══════════════════════════════════════════════════════════
     INIT VIEWER
     ═══════════════════════════════════════════════════════════ */
  async function initViewer(container: HTMLElement, scene: TourScene): Promise<void> {
    isLoading.value = true;
    errorMessage.value = '';
    loadPhase.value = 'loading';

    try {
      await imageLoader.waitForImage(scene.panorama).catch(() => null);

      viewer.value = new Viewer({
        container,
        panorama: scene.panorama,
        adapter: [EquirectangularAdapter, { useXmpData: false }],
        loadingImg: scene.thumbnail,
        caption: scene.title,
        defaultYaw: scene.initialYaw,
        defaultPitch: scene.initialPitch,
        touchmoveTwoFingers: false,
        mousewheelCtrlKey: false,
        navbar: ['zoom', 'move', 'caption', 'fullscreen'],
        rendererParameters: {
          preserveDrawingBuffer: true,
          powerPreference: 'high-performance',
        },
        plugins: [[MarkersPlugin, { markers: buildMarkers(scene) }]],
      });

      viewer.value.addEventListener(events.PanoramaLoadedEvent.type, () => {
        isLoading.value = false;
        loadPhase.value = 'full';
      });

      viewer.value.addEventListener(events.PanoramaErrorEvent.type, ({ error }) => {
        isLoading.value = false;
        loadPhase.value = 'idle';
        errorMessage.value = error.message || 'Không thể tải ảnh panorama.';
      });

      viewer.value
        .getPlugin<MarkersPlugin>(MarkersPlugin)
        .addEventListener('select-marker', ({ marker }) => {
          const pluginName = marker.data?.plugin as string | undefined;
          const plugin = options.plugins.find((p) => p.name === pluginName);
          const rawMarker = (currentScene.value?.markers ?? []).find((m) => m.id === marker.id);
          if (plugin && rawMarker) {
            plugin.onMarkerClick(rawMarker, buildContext());
          }
        });

      currentScene.value = scene;
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : 'Không thể khởi động viewer.';
      isLoading.value = false;
      loadPhase.value = 'idle';
    }
  }

  /* ═══════════════════════════════════════════════════════════
     SWITCH SCENE — 2-LAYER CROSSFADE + NON-BLOCKING SNAPSHOT
     ═══════════════════════════════════════════════════════════ */
  async function switchScene(scene: TourScene): Promise<void> {
    if (!viewer.value || isSwitching.value) return;
    if (currentScene.value?.id === scene.id) return;
    isSwitching.value = true;

    const container = viewer.value.container as HTMLElement;
    const target = scene.panorama;

    try {
      // ── BƯỚC 1: CHUẨN BỊ SONG SONG ──
      // 1a. Snapshot cảnh cũ (async canvas toBlob, không block main thread)
      // 1b. Load + decode trước ảnh mới (nếu chưa cache)
      const [snapshotUrl] = await Promise.all([
        snapshot.capture(viewer.value, currentScene.value?.thumbnail),
        imageLoader.waitForImage(target).catch(() => null),
      ]);

      // ── BƯỚC 2: BẮT ĐẦU TRANSITION ──
      const handle = transition.run(
        container,
        snapshotUrl,
        target,
        cfg.transitionDuration,
      );

      // ── BƯỚC 3: CHỜ OVERLAY CHE KÍN (MIDPOINT) ──
      await handle.atMidpoint;

      // Never render markers from the previous panorama on the next one.
      const markersPlugin = viewer.value.getPlugin<MarkersPlugin>(MarkersPlugin);
      markersPlugin.clearMarkers();

      // Tính vị trí yaw/pitch nếu cần preserveOrientation
      let yaw = scene.initialYaw;
      let pitch = scene.initialPitch;
      if (cfg.preserveOrientation && viewer.value) {
        try {
          const pos = viewer.value.getPosition();
          if (pos) {
            yaw = pos.yaw;
            pitch = pos.pitch;
          }
        } catch {
          /* fallback to initialYaw/Pitch */
        }
      }

      // ── BƯỚC 4: SWAP PSV (overlay đang che kín, user không thấy) ──
      await viewer.value.setPanorama(target, {
        caption: scene.title,
        position: { yaw, pitch },
        transition: false,
        showLoader: false,
      });

      // Cập nhật markers
      markersPlugin.setMarkers(buildMarkers(scene));

      currentScene.value = scene;

      // ── BƯỚC 5: OVERLAY TAN MỊN HẲN ──
      await handle.done;

      loadPhase.value = 'full';
    } catch (err) {
      console.error('[switchScene] Error:', err);
      errorMessage.value = err instanceof Error ? err.message : 'Lỗi chuyển cảnh.';
    } finally {
      isSwitching.value = false;
    }
  }

  function prefetch(src: string) {
    imageLoader.loadImage(src, { decode: false }).catch(() => {});
  }

  function destroyViewer(): void {
    transition.destroy();
    snapshot.destroy();
    viewer.value?.destroy();
    viewer.value = null;
    imageLoader.clearCache();
  }

  return {
    isLoading,
    errorMessage,
    currentScene,
    loadPhase,
    initViewer,
    switchScene,
    preloadNeighbours,
    prefetch,
    destroyViewer,
    isCached: imageLoader.isCached,
  };
}
