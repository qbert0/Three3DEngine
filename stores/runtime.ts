/**
 * stores/runtime.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Pinia store for the viewer runtime state.
 * Tracks active tour, active scene, navigation history, and loading state.
 *
 * Docs: "stores/ — Pinia store tách runtime/editor"
 *       "Không đưa instance WebGL, AST lớn hoặc file ảnh vào reactive store"
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { defineStore } from 'pinia';
import type { TourConfig, TourScene } from '~/types/tour';
import {
  createNavigationState,
  navigateTo as navTo,
  navigateBack as navBack,
  canGoBack as canGoBackFn,
  isInGuestTour as isInGuestTourFn,
  type NavigationState,
} from '~/core/runtime/navigation';
import { resolveScene, resolveInitialScene } from '~/core/runtime/resolver';

export const useRuntimeStore = defineStore('runtime', () => {
  // ── State ─────────────────────────────────────────────────────────────────

  /** Currently loaded tour data (scenes only — no WebGL refs) */
  const tour    = ref<TourConfig | null>(null);
  const loading = ref(false);
  const error   = ref<string | null>(null);

  /** Navigation stack */
  const navState = ref<NavigationState | null>(null);

  // ── Computed ──────────────────────────────────────────────────────────────

  const activeScene = computed<TourScene | undefined>(() => {
    if (!tour.value || !navState.value) return undefined;
    // Active scene may be in a different tour (cross-tour) — in that case
    // we only have its ID; the viewer component is responsible for loading
    // the guest tour. For same-tour scenes, resolve directly.
    if (navState.value.current.tourId === tour.value.slug) {
      return resolveScene(tour.value, navState.value.current.sceneId);
    }
    return undefined; // viewer must load guest tour
  });

  const activeSceneId  = computed(() => navState.value?.current.sceneId ?? '');
  const activeTourId   = computed(() => navState.value?.current.tourId ?? '');
  const entryTourId    = computed(() => navState.value?.entryTourId ?? '');
  const canGoBack      = computed(() => navState.value ? canGoBackFn(navState.value) : false);
  const inGuestTour    = computed(() => navState.value ? isInGuestTourFn(navState.value) : false);
  const scenes         = computed<TourScene[]>(() => tour.value?.scenes ?? []);
  const sceneIndex     = computed(() => {
    if (!navState.value || !tour.value) return 0;
    return tour.value.scenes.findIndex(s => s.id === activeSceneId.value) + 1;
  });

  // ── Actions ───────────────────────────────────────────────────────────────

  /**
   * Load a tour and initialize navigation to its entry scene.
   * Does NOT touch WebGL — just sets the data.
   */
  async function loadTour(tourId: string, preferredSceneId?: string): Promise<void> {
    if (loading.value) return;
    loading.value = true;
    error.value   = null;

    try {
      const res = await $fetch<{ item: TourConfig }>(`/api/tours/${tourId}`);
      if (!res.item) throw new Error('Tour không tồn tại.');

      tour.value = res.item;

      const initial = resolveInitialScene(res.item, preferredSceneId);
      navState.value = createNavigationState(tourId, initial.id);
    } catch (e: any) {
      error.value = e?.data?.statusMessage ?? e?.message ?? 'Lỗi tải tour.';
    } finally {
      loading.value = false;
    }
  }

  /** Navigate to a scene within the current or another tour. */
  function navigateTo(sceneId: string, tourId?: string): void {
    if (!navState.value) return;
    navState.value = navTo(navState.value, {
      tourId:  tourId ?? tour.value?.slug ?? '',
      sceneId,
    });
  }

  /** Go back one step in history. */
  function goBack(): void {
    if (!navState.value) return;
    navState.value = navBack(navState.value);
  }

  /** Reset all state (e.g. when leaving the viewer). */
  function reset(): void {
    tour.value     = null;
    navState.value = null;
    loading.value  = false;
    error.value    = null;
  }

  return {
    // State (read-only from outside via computed)
    tour, loading, error, navState,
    // Computed
    activeScene, activeSceneId, activeTourId, entryTourId,
    canGoBack, inGuestTour, scenes, sceneIndex,
    // Actions
    loadTour, navigateTo, goBack, reset,
  };
});
