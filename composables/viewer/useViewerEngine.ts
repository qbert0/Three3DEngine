/**
 * ─────────────────────────────────────────────────────────────────
 * useViewerEngine — Bridge Layer cho trang Viewer (người xem)
 *
 * Đây là TOÀN BỘ điểm tiếp xúc giữa Vue và core Three.js engine.
 * - Vue components KHÔNG được import từ core/three/ trực tiếp
 * - Chỉ nhận/trả về các Vue ref và plain objects
 * ─────────────────────────────────────────────────────────────────
 */

import { ref, shallowRef, readonly, onBeforeUnmount } from 'vue';
import type { Ref } from 'vue';
import { View360Engine } from '~/core/three/engine/View360Engine';
import type { EngineDiagnostics } from '~/core/three/engine/View360Engine';
import { MarkerPlugin } from '~/core/three/plugins/MarkerPlugin';
import { AutorotatePlugin } from '~/core/three/plugins/AutorotatePlugin';
import type { TourScene, TourMarker, TourConfig } from '~/types/tour';
import type { TransitionStyle } from '~/core/three/engine/PanoSphere';

export type { EngineDiagnostics };
export type QualityMode = 'performance' | 'balanced' | 'quality' | 'native';

// ── Options ────────────────────────────────────────────────────

export interface ViewerEngineOptions {
  /** Called when user clicks a navigation marker */
  onNavigate: (sceneId: string) => void;
  /** Called when user clicks a non-navigation marker */
  onMarkerClick?: (marker: TourMarker) => void;
  /** Enable auto-rotate after idle */
  autorotate?: boolean;
  /** Transition style between scenes */
  transition?: TransitionStyle;
  /**
   * Delay (ms) before Little Planet intro auto-starts.
   * During countdown, user can click to skip. Default: 0 (no delay).
   * Set to 5000 to match PSV example behavior.
   */
  introDelay?: number;
}

// ── State exported to UI ────────────────────────────────────────

export interface ViewerState {
  isLoading: Ref<boolean>;
  isTransitioning: Ref<boolean>;
  errorMessage: Ref<string>;
  currentScene: Ref<TourScene | null>;
}

// ── Composable ─────────────────────────────────────────────────

export function useViewerEngine(options: ViewerEngineOptions) {
  // ── Reactive state (read-only to UI) ──
  const isLoading = ref(true);
  const isTransitioning = ref(false);
  const errorMessage = ref('');
  const currentScene = ref<TourScene | null>(null);
  /** True while the intro countdown (delay before auto-start) is running */
  const isInCountdown = ref(false);
  /** Remaining ms in countdown (0–introDelay), updated every 100ms */
  const countdownRemaining = ref(0);

  // Engine instance (shallow = no deep reactivity, just reference)
  const engine = shallowRef<View360Engine | null>(null);

  // Preload cache tracking
  const preloaded = new Set<string>();

  // ── Init ───────────────────────────────────────────────────────

  async function initEngine(
    container: HTMLElement,
    initialScene: TourScene,
    tour?: TourConfig,
  ): Promise<void> {
    isLoading.value = true;
    errorMessage.value = '';

    try {
      const e = new View360Engine({
        container,
        introDelay: options.introDelay ?? 0,
        pano: {
          defaultTransition: options.transition ?? 'crossfade',
          transitionDuration: tour?.transitionDuration ?? 900,
        },
      });

      // ── Register plugins ──
      e.use(new MarkerPlugin());
      if (options.autorotate ?? tour?.autoRotate) {
        e.use(new AutorotatePlugin({ speed: 0.3 }));
      }

      // ── Wire events to callbacks ──
      e.bus.on('navigate', ({ sceneId }) => options.onNavigate(sceneId));

      e.bus.on('marker:click', ({ marker }) => {
        if (marker.plugin !== 'navigation') {
          options.onMarkerClick?.(marker);
        }
      });

      e.bus.on('scene:transition:start', () => {
        isTransitioning.value = true;
      });

      e.bus.on('scene:transition:end', ({ scene }) => {
        isTransitioning.value = false;
        currentScene.value = scene;
      });

      e.bus.on('scene:loaded', ({ scene }) => {
        currentScene.value = scene;
        isLoading.value = false;
      });

      // ── Intro countdown state ──
      let countdownInterval: ReturnType<typeof setInterval> | null = null;
      e.bus.on('intro:countdown:start', ({ delayMs }) => {
        isInCountdown.value = true;
        countdownRemaining.value = delayMs;
        countdownInterval = setInterval(() => {
          countdownRemaining.value = Math.max(0, countdownRemaining.value - 100);
        }, 100);
      });
      e.bus.on('intro:end', () => {
        isInCountdown.value = false;
        countdownRemaining.value = 0;
        if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
      });
      e.bus.on('intro:countdown:skip', () => {
        isInCountdown.value = false;
        countdownRemaining.value = 0;
        if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
      });

      engine.value = e;

      // ── Load first scene ──
      await e.loadScene(initialScene, true);

      // ── Background-preload neighbours ──
      if (tour) preloadNeighbours(initialScene, tour.scenes);
    } catch (err) {
      errorMessage.value =
        err instanceof Error ? err.message : 'Không thể khởi động viewer.';
      isLoading.value = false;
    }
  }

  // ── Navigation ─────────────────────────────────────────────────

  async function navigateTo(
    scene: TourScene,
    allScenes?: TourScene[],
    flyYaw?: number,
    flyPitch?: number,
  ): Promise<void> {
    if (!engine.value) return;
    if (currentScene.value?.id === scene.id) return;

    isTransitioning.value = true;
    try {
      await engine.value.navigateTo(scene, undefined, flyYaw, flyPitch);
      if (allScenes) preloadNeighbours(scene, allScenes);
    } catch (err) {
      errorMessage.value =
        err instanceof Error ? err.message : 'Lỗi chuyển cảnh.';
    } finally {
      isTransitioning.value = false;
    }
  }

  // ── Preload ────────────────────────────────────────────────────

  function preloadNeighbours(scene: TourScene, allScenes: TourScene[]): void {
    if (!engine.value) return;

    // Preload navigation targets + adjacent scenes
    const navTargets = (scene.markers ?? [])
      .filter((m) => m.plugin === 'navigation' && 'targetScene' in m)
      .map((m) => allScenes.find((s) => s.id === (m as any).targetScene))
      .filter((s): s is TourScene => !!s);

    const idx = allScenes.findIndex((s) => s.id === scene.id);
    const adjacent = [allScenes[idx - 1], allScenes[idx + 1]].filter(
      (s): s is TourScene => !!s,
    );

    const targets = [...new Set([...navTargets, ...adjacent])].slice(0, 3);

    for (const t of targets) {
      if (!preloaded.has(t.panorama)) {
        preloaded.add(t.panorama);
        engine.value?.pano.preload(t.panorama).catch(() => {});
      }
    }
  }

  // ── Dev Tools ──────────────────────────────────────────────────

  /** Snapshot of GPU/rendering metrics. Only call after engine is initialized. */
  function getDiagnostics(): EngineDiagnostics | null {
    return engine.value?.getDiagnostics() ?? null;
  }

  /**
   * Change renderer quality mode.
   * Takes effect immediately without restarting the engine.
   */
  function setQualityMode(mode: QualityMode): void {
    engine.value?.setQualityMode(mode);
  }

  // ── Cleanup ────────────────────────────────────────────────────

  function destroyEngine(): void {
    engine.value?.destroy();
    engine.value = null;
    preloaded.clear();
    currentScene.value = null;
  }

  // Auto-cleanup when parent component unmounts
  onBeforeUnmount(destroyEngine);

  // ── Return (read-only state + actions) ────────────────────────

  return {
    // State — readonly so UI cannot mutate directly
    isLoading: readonly(isLoading),
    isTransitioning: readonly(isTransitioning),
    errorMessage: readonly(errorMessage),
    currentScene: readonly(currentScene),

    // Actions
    initEngine,
    navigateTo,
    destroyEngine,

    // Dev tools
    getDiagnostics,
    setQualityMode,
  };
}
