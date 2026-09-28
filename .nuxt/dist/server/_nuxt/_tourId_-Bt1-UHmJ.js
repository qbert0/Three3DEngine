import { _ as _sfc_main$1 } from "./Spinner-mjqtnuYo.js";
import { _ as _sfc_main$2 } from "./EmptyState-CYLOXev5.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-B0iADLum.js";
import { _ as _sfc_main$3 } from "./Button-CeBG5qKU.js";
import { ref, computed, shallowRef, readonly, defineComponent, withAsyncContext, watch, resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, nextTick, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { defineStore } from "pinia";
import { u as useRoute, a as useToast, _ as _export_sfc } from "../server.mjs";
import { P as PluginBase, V as View360Engine, H as HotspotPlugin } from "./HotspotPlugin-BIrEsLUp.js";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs";
import { u as useFetch } from "./fetch-BMHjmZvY.js";
import { u as useHead } from "./v3-vl98-hf4.js";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ufo/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/defu/dist/defu.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unctx/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/klona/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/perfect-debounce/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/@unhead/vue/dist/index.mjs";
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
function createNavigationState(tourId, sceneId) {
  return { entryTourId: tourId, current: { tourId, sceneId }, history: [] };
}
function navTo(state, dest) {
  return {
    ...state,
    current: dest,
    history: state.history.length < 50 ? [...state.history, state.current] : [...state.history.slice(1), state.current]
  };
}
function navBack(state) {
  if (!state.history.length) return state;
  const prev = state.history[state.history.length - 1];
  return { ...state, current: prev, history: state.history.slice(0, -1) };
}
function canGoBackFn(state) {
  return state.history.length > 0;
}
function isInGuestTourFn(state) {
  return state.current.tourId !== state.entryTourId;
}
function resolveScene(tour, sceneId) {
  return tour.scenes.find((s) => s.id === sceneId);
}
function resolveInitialScene(tour, preferredId) {
  if (preferredId) {
    const found = tour.scenes.find((s) => s.id === preferredId);
    if (found) return found;
  }
  const initial = tour.initialSceneId ? tour.scenes.find((s) => s.id === tour.initialSceneId) : void 0;
  return initial ?? tour.scenes[0];
}
const useRuntimeStore = defineStore("runtime", () => {
  const tour = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const navState = ref(null);
  const activeScene = computed(() => {
    if (!tour.value || !navState.value) return void 0;
    if (navState.value.current.tourId === tour.value.slug) {
      return resolveScene(tour.value, navState.value.current.sceneId);
    }
    return void 0;
  });
  const activeSceneId = computed(() => navState.value?.current.sceneId ?? "");
  const activeTourId = computed(() => navState.value?.current.tourId ?? "");
  const entryTourId = computed(() => navState.value?.entryTourId ?? "");
  const canGoBack = computed(() => navState.value ? canGoBackFn(navState.value) : false);
  const inGuestTour = computed(() => navState.value ? isInGuestTourFn(navState.value) : false);
  const scenes = computed(() => tour.value?.scenes ?? []);
  const sceneIndex = computed(() => {
    if (!navState.value || !tour.value) return 0;
    return tour.value.scenes.findIndex((s) => s.id === activeSceneId.value) + 1;
  });
  async function loadTour(tourId, preferredSceneId) {
    if (loading.value) return;
    loading.value = true;
    error.value = null;
    try {
      const res = await $fetch(`/api/tours/${tourId}`);
      if (!res.item) throw new Error("Tour không tồn tại.");
      tour.value = res.item;
      const initial = resolveInitialScene(res.item, preferredSceneId);
      navState.value = createNavigationState(tourId, initial.id);
    } catch (e) {
      error.value = e?.data?.statusMessage ?? e?.message ?? "Lỗi tải tour.";
    } finally {
      loading.value = false;
    }
  }
  function navigateTo(sceneId, tourId) {
    if (!navState.value) return;
    navState.value = navTo(navState.value, {
      tourId: tourId ?? tour.value?.slug ?? "",
      sceneId
    });
  }
  function goBack() {
    if (!navState.value) return;
    navState.value = navBack(navState.value);
  }
  function reset() {
    tour.value = null;
    navState.value = null;
    loading.value = false;
    error.value = null;
  }
  return {
    // State
    tour,
    loading,
    error,
    navState,
    // Computed
    activeScene,
    activeSceneId,
    activeTourId,
    entryTourId,
    canGoBack,
    inGuestTour,
    scenes,
    sceneIndex,
    // Actions
    loadTour,
    navigateTo,
    goBack,
    reset
  };
});
class AutorotatePlugin extends PluginBase {
  id = "autorotate";
  name = "Autorotate Plugin";
  speed;
  idleDelayMs;
  direction;
  isActive = false;
  timer = null;
  rampProgress = 0;
  // 0–1, ramp-up factor
  unsubs = [];
  constructor(opts = {}) {
    super();
    this.speed = opts.speed ?? 0.3;
    this.idleDelayMs = opts.idleDelayMs ?? 12e4;
    this.direction = opts.direction ?? 1;
  }
  onInit() {
    this.scheduleStart();
    const stopOnDrag = () => {
      this.isActive = false;
      this.rampProgress = 0;
      this.scheduleStart();
    };
    const unsub1 = this.ctx.bus.on("interaction:dragstart", stopOnDrag);
    const unsub2 = this.ctx.bus.on("scene:transition:start", stopOnDrag);
    this.unsubs.push(unsub1, unsub2);
  }
  onUpdate(delta) {
    if (!this.isActive) return;
    this.rampProgress = Math.min(1, this.rampProgress + delta * 0.5);
    const ease = this.rampProgress * this.rampProgress;
    const yaw = this.ctx.camera.getTargetYaw() + this.direction * this.speed * delta * ease;
    this.ctx.camera.setTarget(yaw, this.ctx.camera.getTargetPitch());
  }
  onDestroy() {
    if (this.timer) clearTimeout(this.timer);
    this.unsubs.forEach((fn) => fn());
  }
  scheduleStart() {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.isActive = true;
      this.rampProgress = 0;
    }, this.idleDelayMs);
  }
}
function useViewerEngine(options) {
  const isLoading = ref(true);
  const isTransitioning = ref(false);
  const errorMessage = ref("");
  const currentScene = ref(null);
  const isInCountdown = ref(false);
  const countdownRemaining = ref(0);
  const engine = shallowRef(null);
  const preloaded = /* @__PURE__ */ new Set();
  async function initEngine(container, initialScene, tour) {
    isLoading.value = true;
    errorMessage.value = "";
    try {
      const e = new View360Engine({
        container,
        introDelay: options.introDelay ?? 0,
        pano: {
          defaultTransition: options.transition ?? "fly-through",
          transitionDuration: tour?.transitionDuration ?? 900
        }
      });
      const hotspot = new HotspotPlugin();
      e.use(hotspot);
      if (options.autorotate ?? tour?.autoRotate) {
        e.use(new AutorotatePlugin({ speed: 0.3 }));
      }
      e.bus.on("navigate", ({ sceneId }) => options.onNavigate(sceneId));
      e.bus.on("hotspot:click", ({ marker }) => {
        if (marker.plugin !== "navigation") {
          options.onHotspotClick?.(marker);
        }
      });
      e.bus.on("scene:transition:start", () => {
        isTransitioning.value = true;
      });
      e.bus.on("scene:transition:end", ({ scene }) => {
        isTransitioning.value = false;
        currentScene.value = scene;
      });
      e.bus.on("scene:loaded", ({ scene }) => {
        currentScene.value = scene;
        isLoading.value = false;
      });
      let countdownInterval = null;
      e.bus.on("intro:countdown:start", ({ delayMs }) => {
        isInCountdown.value = true;
        countdownRemaining.value = delayMs;
        countdownInterval = setInterval(() => {
          countdownRemaining.value = Math.max(0, countdownRemaining.value - 100);
        }, 100);
      });
      e.bus.on("intro:end", () => {
        isInCountdown.value = false;
        countdownRemaining.value = 0;
        if (countdownInterval) {
          clearInterval(countdownInterval);
          countdownInterval = null;
        }
      });
      e.bus.on("intro:countdown:skip", () => {
        isInCountdown.value = false;
        countdownRemaining.value = 0;
        if (countdownInterval) {
          clearInterval(countdownInterval);
          countdownInterval = null;
        }
      });
      engine.value = e;
      await e.loadScene(initialScene, true);
      if (tour) preloadNeighbours(initialScene, tour.scenes);
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : "Không thể khởi động viewer.";
      isLoading.value = false;
    }
  }
  async function navigateTo(scene, allScenes, flyYaw, flyPitch) {
    if (!engine.value) return;
    if (currentScene.value?.id === scene.id) return;
    isTransitioning.value = true;
    try {
      await engine.value.navigateTo(scene, void 0, flyYaw, flyPitch);
      if (allScenes) preloadNeighbours(scene, allScenes);
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : "Lỗi chuyển cảnh.";
    } finally {
      isTransitioning.value = false;
    }
  }
  function preloadNeighbours(scene, allScenes) {
    if (!engine.value) return;
    const navTargets = (scene.markers ?? []).filter((m) => m.plugin === "navigation" && "targetScene" in m).map((m) => allScenes.find((s) => s.id === m.targetScene)).filter((s) => !!s);
    const idx = allScenes.findIndex((s) => s.id === scene.id);
    const adjacent = [allScenes[idx - 1], allScenes[idx + 1]].filter(
      (s) => !!s
    );
    const targets = [.../* @__PURE__ */ new Set([...navTargets, ...adjacent])].slice(0, 3);
    for (const t of targets) {
      if (!preloaded.has(t.panorama)) {
        preloaded.add(t.panorama);
        engine.value?.pano.preload(t.panorama).catch(() => {
        });
      }
    }
  }
  function getDiagnostics() {
    return engine.value?.getDiagnostics() ?? null;
  }
  function setQualityMode(mode) {
    engine.value?.setQualityMode(mode);
  }
  function destroyEngine() {
    engine.value?.destroy();
    engine.value = null;
    preloaded.clear();
    currentScene.value = null;
  }
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
    setQualityMode
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[tourId]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const tourId = computed(() => route.params.tourId);
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      computed(() => `/api/tours/${tourId.value}`),
      "$0YHbKkY3VX"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const tour = computed(() => data.value?.item);
    const scenes = computed(() => tour.value?.scenes ?? []);
    useHead({ title: computed(() => tour.value ? `${tour.value.title} — View360` : "View360") });
    const activeSceneId = ref("");
    const activeScene = computed(
      () => scenes.value.find((s) => s.id === activeSceneId.value) ?? scenes.value[0]
    );
    const queryScene = computed(() => route.query.scene);
    watch(scenes, (val) => {
      if (!val.length || activeSceneId.value) return;
      const preferred = queryScene.value || tour.value?.initialSceneId;
      const exists = preferred && val.some((s) => s.id === preferred);
      activeSceneId.value = exists ? preferred : val[0].id;
    }, { immediate: true });
    const store = useRuntimeStore();
    watch(activeSceneId, (sceneId) => {
      if (sceneId && tour.value) {
        store.navigateTo(sceneId, tour.value.slug);
      }
    });
    watch(tour, (t) => {
      if (t && !store.tour) store.tour = t;
    }, { immediate: true });
    const canvasContainerRef = ref(null);
    const activeHotspot = ref(null);
    const {
      isLoading: engineLoading,
      isTransitioning,
      errorMessage: engineError,
      currentScene: engineScene,
      initEngine,
      navigateTo,
      getDiagnostics,
      setQualityMode
    } = useViewerEngine({
      onNavigate: (sceneId) => handleNavigate(sceneId),
      onHotspotClick: (marker) => {
        activeHotspot.value = marker;
      },
      autorotate: computed(() => tour.value?.autoRotate ?? false).value,
      transition: "fly-through"
    });
    watch(canvasContainerRef, async (el) => {
      if (!el || !activeScene.value) return;
      await initEngine(el, activeScene.value, tour.value ?? void 0);
    }, { once: true });
    watch(activeSceneId, async (id) => {
      const scene = scenes.value.find((s) => s.id === id);
      if (!scene || !engineScene.value || engineScene.value.id === id) return;
      await navigateTo(scene, scenes.value);
    });
    const devQualityMode = ref("quality");
    const devCompareMode = ref("panorama");
    const devPanoUrl = computed(() => engineScene.value?.panorama ?? "");
    function handleDevQualityChange(mode) {
      devQualityMode.value = mode;
      setQualityMode(mode);
    }
    function handleDevCompareMode(mode) {
      devCompareMode.value = mode;
    }
    const toast = useToast();
    const isImmersive = ref(false);
    const showHelpPanel = ref(false);
    const showInfoPanel = ref(false);
    const infoPanelTitle = ref("");
    const infoPanelContent = ref("");
    const isCompassActive = ref(false);
    const isDockCollapsed = ref(true);
    ref(null);
    const sceneStripEl = ref(null);
    let dockAutoCollapseTimer = null;
    const sceneIndex = computed(
      () => scenes.value.findIndex((s) => s.id === activeSceneId.value) + 1
    );
    function setDockCollapsed(collapsed) {
      isDockCollapsed.value = collapsed;
      if (dockAutoCollapseTimer) clearTimeout(dockAutoCollapseTimer);
    }
    function flashDock() {
      if (isDockCollapsed.value) {
        isDockCollapsed.value = false;
        if (dockAutoCollapseTimer) clearTimeout(dockAutoCollapseTimer);
        dockAutoCollapseTimer = setTimeout(() => setDockCollapsed(true), 4e3);
      }
    }
    function scrollStripTo(idx) {
      nextTick(() => {
        if (!sceneStripEl.value) return;
        const thumb = sceneStripEl.value.querySelector(`[data-idx="${idx}"]`);
        if (thumb) {
          thumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
      });
    }
    function handleNavigate(sceneId) {
      if (sceneId === activeSceneId.value) return;
      const targetScene = scenes.value.find((s) => s.id === sceneId);
      activeSceneId.value = sceneId;
      const idx = scenes.value.findIndex((s) => s.id === sceneId);
      if (idx >= 0) scrollStripTo(idx);
      flashDock();
      if (targetScene) {
        toast.show({ message: `Đã chuyển đến: ${targetScene.title}` });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSpinner = _sfc_main$1;
      const _component_UiEmptyState = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiButton = _sfc_main$3;
      const _component_DevImageComparison = resolveComponent("DevImageComparison");
      const _component_ViewerHUD = resolveComponent("ViewerHUD");
      const _component_ViewerHotspotPanel = resolveComponent("ViewerHotspotPanel");
      const _component_DevDiagnosticPanel = resolveComponent("DevDiagnosticPanel");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["viewer-root bg-ink", { immersive: unref(isImmersive) }]
      }, _attrs))} data-v-4cadd7cc>`);
      if (unref(pending)) {
        _push(`<div class="grid h-screen w-full place-items-center bg-ink" data-v-4cadd7cc><div class="flex flex-col items-center gap-5" data-v-4cadd7cc><div class="relative" data-v-4cadd7cc>`);
        _push(ssrRenderComponent(_component_UiSpinner, {
          size: "lg",
          color: "primary"
        }, null, _parent));
        _push(`<div class="absolute inset-0 animate-ping rounded-full bg-river/15" data-v-4cadd7cc></div></div><div class="text-center" data-v-4cadd7cc><p class="text-sm font-semibold text-white" data-v-4cadd7cc>Đang tải trải nghiệm 360°</p><p class="mt-1 text-xs text-white/40" data-v-4cadd7cc>${ssrInterpolate(unref(tourId))}</p></div></div></div>`);
      } else if (unref(error) || !unref(tour) || !unref(activeScene)) {
        _push(`<div class="grid h-screen w-full place-items-center bg-ink px-6" data-v-4cadd7cc>`);
        _push(ssrRenderComponent(_component_UiEmptyState, {
          icon: "🌐",
          title: "Không thể tải tour",
          description: `Tour '${unref(tourId)}' không tồn tại hoặc lỗi kết nối.`
        }, {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, { variant: "primary" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Về trang chủ`);
                        } else {
                          return [
                            createTextVNode("Về trang chủ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, { variant: "primary" }, {
                        default: withCtx(() => [
                          createTextVNode("Về trang chủ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "/" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiButton, { variant: "primary" }, {
                      default: withCtx(() => [
                        createTextVNode("Về trang chủ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!--[-->`);
        if (_ctx.$dev && unref(devCompareMode) !== "panorama") {
          _push(ssrRenderComponent(_component_DevImageComparison, {
            url: unref(devPanoUrl),
            mode: unref(devCompareMode),
            onClose: ($event) => devCompareMode.value = "panorama"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="absolute inset-0 h-full w-full" style="${ssrRenderStyle({ visibility: unref(devCompareMode) !== "panorama" ? "hidden" : "visible" })}" aria-label="Panorama 360°" data-v-4cadd7cc></div>`);
        _push(ssrRenderComponent(_component_ViewerHUD, {
          "is-loading": unref(engineLoading),
          "is-transitioning": unref(isTransitioning),
          "error-message": unref(engineError),
          "current-scene": unref(engineScene)
        }, null, _parent));
        _push(ssrRenderComponent(_component_ViewerHotspotPanel, {
          marker: unref(activeHotspot),
          onClose: ($event) => activeHotspot.value = null,
          onAudioPlay: (src) => new _ctx.Audio(src).play().catch(() => {
          })
        }, null, _parent));
        if (_ctx.$dev) {
          _push(ssrRenderComponent(_component_DevDiagnosticPanel, {
            "get-diagnostics": unref(getDiagnostics),
            "set-quality-mode": unref(setQualityMode),
            "current-quality": unref(devQualityMode),
            "panorama-url": unref(devPanoUrl),
            onQualityChange: handleDevQualityChange,
            onCompareMode: handleDevCompareMode
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="topbar" data-v-4cadd7cc>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "tb-btn icon-only",
          "aria-label": "Quay lại danh mục",
          title: "Quay lại trang chủ"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc${_scopeId}><path d="m15 18-6-6 6-6" data-v-4cadd7cc${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "m15 18-6-6 6-6" })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="tb-scene" data-v-4cadd7cc><span class="tb-scene-badge" data-v-4cadd7cc>${ssrInterpolate(unref(sceneIndex))}/${ssrInterpolate(unref(scenes).length)}</span><span class="tb-scene-title" data-v-4cadd7cc>${ssrInterpolate(unref(activeScene).title)}</span><span class="tb-scene-desc" data-v-4cadd7cc>${ssrInterpolate(unref(activeScene).subtitle ? `· ${unref(activeScene).subtitle}` : "")}</span></div><div class="tb-actions" data-v-4cadd7cc><button type="button" class="tb-btn hide-mobile" title="Hướng dẫn sử dụng" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-4cadd7cc><circle cx="12" cy="12" r="10" data-v-4cadd7cc></circle><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" data-v-4cadd7cc></path><line x1="12" y1="17" x2="12.01" y2="17" data-v-4cadd7cc></line></svg></button><button type="button" class="tb-btn hide-mobile" title="Đổi hiệu ứng" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1" data-v-4cadd7cc></path></svg></button><button type="button" class="tb-btn icon-only" title="Chế độ toàn cảnh (nhấn F)" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" data-v-4cadd7cc></path></svg></button></div></div><aside class="${ssrRenderClass(["side-panel", { open: unref(showHelpPanel) }])}" aria-hidden="true" data-v-4cadd7cc><div class="panel-head" data-v-4cadd7cc><div class="panel-head-left" data-v-4cadd7cc><div class="panel-icon river" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-4cadd7cc><circle cx="12" cy="12" r="10" data-v-4cadd7cc></circle><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" data-v-4cadd7cc></path><line x1="12" y1="17" x2="12.01" y2="17" data-v-4cadd7cc></line></svg></div><div data-v-4cadd7cc><div class="panel-title" data-v-4cadd7cc>Hướng dẫn sử dụng</div><div class="panel-subtitle" data-v-4cadd7cc>Điều khiển tour 360°</div></div></div><button type="button" class="panel-close" aria-label="Đóng" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-4cadd7cc><path d="M18 6 6 18" data-v-4cadd7cc></path><path d="m6 6 12 12" data-v-4cadd7cc></path></svg></button></div><div class="panel-body" data-v-4cadd7cc><ul class="guide-list" data-v-4cadd7cc><li class="guide-item" data-v-4cadd7cc><div class="guide-icon" data-v-4cadd7cc>🖱️</div><div data-v-4cadd7cc><div class="guide-title" data-v-4cadd7cc>Kéo để xoay ảnh 360°</div><div class="guide-desc" data-v-4cadd7cc>Nhấn giữ và kéo chuột (hoặc vuốt trên điện thoại) để xoay góc nhìn.</div></div></li><li class="guide-item" data-v-4cadd7cc><div class="guide-icon river-icon" data-v-4cadd7cc>🔵</div><div data-v-4cadd7cc><div class="guide-title" data-v-4cadd7cc>Nút xanh — Di chuyển</div><div class="guide-desc" data-v-4cadd7cc>Nhấn vào marker xanh để di chuyển đến cảnh tiếp theo.</div></div></li><li class="guide-item" data-v-4cadd7cc><div class="guide-icon info-icon" data-v-4cadd7cc>🟠</div><div data-v-4cadd7cc><div class="guide-title" data-v-4cadd7cc>Nút cam — Xem thông tin</div><div class="guide-desc" data-v-4cadd7cc>Nhấn vào marker cam để xem thông tin chi tiết về địa điểm.</div></div></li><li class="guide-item" data-v-4cadd7cc><div class="guide-icon" data-v-4cadd7cc>🔍</div><div data-v-4cadd7cc><div class="guide-title" data-v-4cadd7cc>Cuộn để zoom</div><div class="guide-desc" data-v-4cadd7cc>Dùng con lăn chuột hoặc chụm 2 ngón để phóng to / thu nhỏ.</div></div></li><li class="guide-item" data-v-4cadd7cc><div class="guide-icon" data-v-4cadd7cc>⌨️</div><div data-v-4cadd7cc><div class="guide-title" data-v-4cadd7cc>Phím tắt</div><div class="guide-desc" data-v-4cadd7cc><strong data-v-4cadd7cc>F</strong> — Bật/tắt toàn cảnh · <strong data-v-4cadd7cc>H</strong> — Ẩn/hiện giao diện · <strong data-v-4cadd7cc>D</strong> — Thu gọn/mở dock · <strong data-v-4cadd7cc>← →</strong> — Chuyển cảnh </div></div></li></ul></div></aside><aside class="${ssrRenderClass(["side-panel", { open: unref(showInfoPanel) }])}" aria-hidden="true" data-v-4cadd7cc><div class="panel-head" data-v-4cadd7cc><div class="panel-head-left" data-v-4cadd7cc><div class="panel-icon clay" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-4cadd7cc><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-4cadd7cc></circle><path d="M12 11 L12 18" data-v-4cadd7cc></path></svg></div><div data-v-4cadd7cc><div class="panel-title" data-v-4cadd7cc>${ssrInterpolate(unref(infoPanelTitle) || "Thông tin địa điểm")}</div><div class="panel-subtitle" data-v-4cadd7cc>Chi tiết cảnh quan</div></div></div><button type="button" class="panel-close" aria-label="Đóng" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-4cadd7cc><path d="M18 6 6 18" data-v-4cadd7cc></path><path d="m6 6 12 12" data-v-4cadd7cc></path></svg></button></div><div class="panel-body" data-v-4cadd7cc>`);
        if (unref(infoPanelContent)) {
          _push(`<div class="space-y-3" data-v-4cadd7cc>${unref(infoPanelContent) ?? ""}</div>`);
        } else {
          _push(`<div class="space-y-3" data-v-4cadd7cc><p data-v-4cadd7cc><strong data-v-4cadd7cc>${ssrInterpolate(unref(activeScene).title)}</strong></p>`);
          if (unref(activeScene).subtitle) {
            _push(`<p data-v-4cadd7cc>${ssrInterpolate(unref(activeScene).subtitle)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(tour).summary) {
            _push(`<p data-v-4cadd7cc>${ssrInterpolate(unref(tour).summary)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</div></aside><div class="fab-stack" data-v-4cadd7cc><button type="button" class="fab" title="Thông tin địa điểm" aria-label="Thông tin địa điểm" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" data-v-4cadd7cc><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-4cadd7cc></circle><path d="M12 11 L12 18" data-v-4cadd7cc></path></svg></button><button type="button" class="${ssrRenderClass(["fab", { active: unref(isCompassActive) }])}" title="La bàn" aria-label="La bàn" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><circle cx="12" cy="12" r="10" data-v-4cadd7cc></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" opacity="0.6" data-v-4cadd7cc></polygon></svg></button><button type="button" class="fab" title="Chia sẻ" aria-label="Chia sẻ" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><circle cx="18" cy="5" r="3" data-v-4cadd7cc></circle><circle cx="6" cy="12" r="3" data-v-4cadd7cc></circle><circle cx="18" cy="19" r="3" data-v-4cadd7cc></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-v-4cadd7cc></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-v-4cadd7cc></line></svg></button></div><button type="button" class="tb-btn icon-only immersive-exit" title="Thoát chế độ toàn cảnh (Esc)" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" data-v-4cadd7cc></path></svg></button><div class="${ssrRenderClass(["dock", { collapsed: unref(isDockCollapsed) }])}" data-v-4cadd7cc><button type="button" class="dock-toggle" aria-label="Mở/đóng danh sách cảnh" title="Mở/đóng danh sách cảnh (D)" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><path d="m18 15-6-6-6 6" data-v-4cadd7cc></path></svg></button><div class="dock-head" data-v-4cadd7cc><div class="dock-label" data-v-4cadd7cc><span class="dock-label-dot" data-v-4cadd7cc></span><span data-v-4cadd7cc>${ssrInterpolate(unref(scenes).length)} cảnh · ${ssrInterpolate(unref(tour).title)}</span></div><div class="dock-actions" data-v-4cadd7cc><button type="button" class="dock-btn" title="Cảnh trước" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><path d="m15 18-6-6 6-6" data-v-4cadd7cc></path></svg><span data-v-4cadd7cc>Trước</span></button><button type="button" class="dock-btn" title="Cảnh sau" data-v-4cadd7cc><span data-v-4cadd7cc>Sau</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><path d="m9 18 6-6-6-6" data-v-4cadd7cc></path></svg></button></div></div><div class="scene-strip" data-v-4cadd7cc><!--[-->`);
        ssrRenderList(unref(scenes), (scene, idx) => {
          _push(`<button type="button"${ssrRenderAttr("data-idx", idx)} class="${ssrRenderClass(["scene-thumb", { active: scene.id === unref(activeSceneId) }])}"${ssrRenderAttr("aria-label", `Xem: ${scene.title}`)}${ssrRenderAttr("title", scene.title)} data-v-4cadd7cc><img${ssrRenderAttr("src", scene.thumbnail)}${ssrRenderAttr("alt", scene.title)} loading="lazy" data-v-4cadd7cc><span class="scene-thumb-num" data-v-4cadd7cc>${ssrInterpolate(idx + 1)}</span><span class="scene-thumb-name" data-v-4cadd7cc>${ssrInterpolate(scene.title)}</span></button>`);
        });
        _push(`<!--]--></div></div><!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experience/[tourId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _tourId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4cadd7cc"]]);
export {
  _tourId_ as default
};
//# sourceMappingURL=_tourId_-Bt1-UHmJ.js.map
