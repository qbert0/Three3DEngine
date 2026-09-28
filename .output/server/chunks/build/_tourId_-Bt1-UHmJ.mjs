globalThis.__timing__.logStart('Load chunks/build/_tourId_-Bt1-UHmJ');import { _ as _sfc_main$1 } from './Spinner-mjqtnuYo.mjs';
import { _ as _sfc_main$2 } from './EmptyState-CYLOXev5.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-B0iADLum.mjs';
import { _ as _sfc_main$3 } from './Button-CeBG5qKU.mjs';
import { defineComponent, computed, withAsyncContext, ref, watch, resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, shallowRef, readonly, useSSRContext, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { defineStore } from 'pinia';
import { _ as _export_sfc, u as useRoute, a as useToast } from './server.mjs';
import { V as View360Engine, H as HotspotPlugin, P as PluginBase } from './HotspotPlugin-BIrEsLUp.mjs';
import { u as useFetch } from './fetch-BMHjmZvY.mjs';
import { u as useHead } from './v3-vl98-hf4.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import '@vue/shared';
import 'perfect-debounce';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
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
  return initial != null ? initial : tour.scenes[0];
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
  const activeSceneId = computed(() => {
    var _a, _b;
    return (_b = (_a = navState.value) == null ? void 0 : _a.current.sceneId) != null ? _b : "";
  });
  const activeTourId = computed(() => {
    var _a, _b;
    return (_b = (_a = navState.value) == null ? void 0 : _a.current.tourId) != null ? _b : "";
  });
  const entryTourId = computed(() => {
    var _a, _b;
    return (_b = (_a = navState.value) == null ? void 0 : _a.entryTourId) != null ? _b : "";
  });
  const canGoBack = computed(() => navState.value ? canGoBackFn(navState.value) : false);
  const inGuestTour = computed(() => navState.value ? isInGuestTourFn(navState.value) : false);
  const scenes = computed(() => {
    var _a, _b;
    return (_b = (_a = tour.value) == null ? void 0 : _a.scenes) != null ? _b : [];
  });
  const sceneIndex = computed(() => {
    if (!navState.value || !tour.value) return 0;
    return tour.value.scenes.findIndex((s) => s.id === activeSceneId.value) + 1;
  });
  async function loadTour(tourId, preferredSceneId) {
    var _a, _b, _c;
    if (loading.value) return;
    loading.value = true;
    error.value = null;
    try {
      const res = await $fetch(`/api/tours/${tourId}`);
      if (!res.item) throw new Error("Tour kh\xF4ng t\u1ED3n t\u1EA1i.");
      tour.value = res.item;
      const initial = resolveInitialScene(res.item, preferredSceneId);
      navState.value = createNavigationState(tourId, initial.id);
    } catch (e) {
      error.value = (_c = (_b = (_a = e == null ? void 0 : e.data) == null ? void 0 : _a.statusMessage) != null ? _b : e == null ? void 0 : e.message) != null ? _c : "L\u1ED7i t\u1EA3i tour.";
    } finally {
      loading.value = false;
    }
  }
  function navigateTo(sceneId, tourId) {
    var _a, _b;
    if (!navState.value) return;
    navState.value = navTo(navState.value, {
      tourId: (_b = tourId != null ? tourId : (_a = tour.value) == null ? void 0 : _a.slug) != null ? _b : "",
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
  constructor(opts = {}) {
    var _a, _b, _c;
    super();
    __publicField(this, "id", "autorotate");
    __publicField(this, "name", "Autorotate Plugin");
    __publicField(this, "speed");
    __publicField(this, "idleDelayMs");
    __publicField(this, "direction");
    __publicField(this, "isActive", false);
    __publicField(this, "timer", null);
    __publicField(this, "rampProgress", 0);
    // 0–1, ramp-up factor
    __publicField(this, "unsubs", []);
    this.speed = (_a = opts.speed) != null ? _a : 0.3;
    this.idleDelayMs = (_b = opts.idleDelayMs) != null ? _b : 12e4;
    this.direction = (_c = opts.direction) != null ? _c : 1;
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
    var _a, _b, _c, _d;
    isLoading.value = true;
    errorMessage.value = "";
    try {
      const e = new View360Engine({
        container,
        introDelay: (_a = options.introDelay) != null ? _a : 0,
        pano: {
          defaultTransition: (_b = options.transition) != null ? _b : "fly-through",
          transitionDuration: (_c = tour == null ? void 0 : tour.transitionDuration) != null ? _c : 900
        }
      });
      const hotspot = new HotspotPlugin();
      e.use(hotspot);
      if ((_d = options.autorotate) != null ? _d : tour == null ? void 0 : tour.autoRotate) {
        e.use(new AutorotatePlugin({ speed: 0.3 }));
      }
      e.bus.on("navigate", ({ sceneId }) => options.onNavigate(sceneId));
      e.bus.on("hotspot:click", ({ marker }) => {
        var _a2;
        if (marker.plugin !== "navigation") {
          (_a2 = options.onHotspotClick) == null ? void 0 : _a2.call(options, marker);
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
      errorMessage.value = err instanceof Error ? err.message : "Kh\xF4ng th\u1EC3 kh\u1EDFi \u0111\u1ED9ng viewer.";
      isLoading.value = false;
    }
  }
  async function navigateTo(scene, allScenes, flyYaw, flyPitch) {
    var _a;
    if (!engine.value) return;
    if (((_a = currentScene.value) == null ? void 0 : _a.id) === scene.id) return;
    isTransitioning.value = true;
    try {
      await engine.value.navigateTo(scene, void 0, flyYaw, flyPitch);
      if (allScenes) preloadNeighbours(scene, allScenes);
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : "L\u1ED7i chuy\u1EC3n c\u1EA3nh.";
    } finally {
      isTransitioning.value = false;
    }
  }
  function preloadNeighbours(scene, allScenes) {
    var _a, _b;
    if (!engine.value) return;
    const navTargets = ((_a = scene.markers) != null ? _a : []).filter((m) => m.plugin === "navigation" && "targetScene" in m).map((m) => allScenes.find((s) => s.id === m.targetScene)).filter((s) => !!s);
    const idx = allScenes.findIndex((s) => s.id === scene.id);
    const adjacent = [allScenes[idx - 1], allScenes[idx + 1]].filter(
      (s) => !!s
    );
    const targets = [.../* @__PURE__ */ new Set([...navTargets, ...adjacent])].slice(0, 3);
    for (const t of targets) {
      if (!preloaded.has(t.panorama)) {
        preloaded.add(t.panorama);
        (_b = engine.value) == null ? void 0 : _b.pano.preload(t.panorama).catch(() => {
        });
      }
    }
  }
  function getDiagnostics() {
    var _a, _b;
    return (_b = (_a = engine.value) == null ? void 0 : _a.getDiagnostics()) != null ? _b : null;
  }
  function setQualityMode(mode) {
    var _a;
    (_a = engine.value) == null ? void 0 : _a.setQualityMode(mode);
  }
  function destroyEngine() {
    var _a;
    (_a = engine.value) == null ? void 0 : _a.destroy();
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
    const tour = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.item;
    });
    const scenes = computed(() => {
      var _a, _b;
      return (_b = (_a = tour.value) == null ? void 0 : _a.scenes) != null ? _b : [];
    });
    useHead({ title: computed(() => tour.value ? `${tour.value.title} \u2014 View360` : "View360") });
    const activeSceneId = ref("");
    const activeScene = computed(
      () => {
        var _a;
        return (_a = scenes.value.find((s) => s.id === activeSceneId.value)) != null ? _a : scenes.value[0];
      }
    );
    const queryScene = computed(() => route.query.scene);
    watch(scenes, (val) => {
      var _a;
      if (!val.length || activeSceneId.value) return;
      const preferred = queryScene.value || ((_a = tour.value) == null ? void 0 : _a.initialSceneId);
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
      autorotate: computed(() => {
        var _a, _b;
        return (_b = (_a = tour.value) == null ? void 0 : _a.autoRotate) != null ? _b : false;
      }).value,
      transition: "fly-through"
    });
    watch(canvasContainerRef, async (el) => {
      var _a;
      if (!el || !activeScene.value) return;
      await initEngine(el, activeScene.value, (_a = tour.value) != null ? _a : void 0);
    }, { once: true });
    watch(activeSceneId, async (id) => {
      const scene = scenes.value.find((s) => s.id === id);
      if (!scene || !engineScene.value || engineScene.value.id === id) return;
      await navigateTo(scene, scenes.value);
    });
    const devQualityMode = ref("quality");
    const devCompareMode = ref("panorama");
    const devPanoUrl = computed(() => {
      var _a, _b;
      return (_b = (_a = engineScene.value) == null ? void 0 : _a.panorama) != null ? _b : "";
    });
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
        toast.show({ message: `\u0110\xE3 chuy\u1EC3n \u0111\u1EBFn: ${targetScene.title}` });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
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
        _push(`<div class="absolute inset-0 animate-ping rounded-full bg-river/15" data-v-4cadd7cc></div></div><div class="text-center" data-v-4cadd7cc><p class="text-sm font-semibold text-white" data-v-4cadd7cc>\u0110ang t\u1EA3i tr\u1EA3i nghi\u1EC7m 360\xB0</p><p class="mt-1 text-xs text-white/40" data-v-4cadd7cc>${ssrInterpolate(unref(tourId))}</p></div></div></div>`);
      } else if (unref(error) || !unref(tour) || !unref(activeScene)) {
        _push(`<div class="grid h-screen w-full place-items-center bg-ink px-6" data-v-4cadd7cc>`);
        _push(ssrRenderComponent(_component_UiEmptyState, {
          icon: "\u{1F310}",
          title: "Kh\xF4ng th\u1EC3 t\u1EA3i tour",
          description: `Tour '${unref(tourId)}' kh\xF4ng t\u1ED3n t\u1EA1i ho\u1EB7c l\u1ED7i k\u1EBFt n\u1ED1i.`
        }, {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, { variant: "primary" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`V\u1EC1 trang ch\u1EE7`);
                        } else {
                          return [
                            createTextVNode("V\u1EC1 trang ch\u1EE7")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, { variant: "primary" }, {
                        default: withCtx(() => [
                          createTextVNode("V\u1EC1 trang ch\u1EE7")
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
                        createTextVNode("V\u1EC1 trang ch\u1EE7")
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
        _push(`<div class="absolute inset-0 h-full w-full" style="${ssrRenderStyle({ visibility: unref(devCompareMode) !== "panorama" ? "hidden" : "visible" })}" aria-label="Panorama 360\xB0" data-v-4cadd7cc></div>`);
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
          "aria-label": "Quay l\u1EA1i danh m\u1EE5c",
          title: "Quay l\u1EA1i trang ch\u1EE7"
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
        _push(`<div class="tb-scene" data-v-4cadd7cc><span class="tb-scene-badge" data-v-4cadd7cc>${ssrInterpolate(unref(sceneIndex))}/${ssrInterpolate(unref(scenes).length)}</span><span class="tb-scene-title" data-v-4cadd7cc>${ssrInterpolate(unref(activeScene).title)}</span><span class="tb-scene-desc" data-v-4cadd7cc>${ssrInterpolate(unref(activeScene).subtitle ? `\xB7 ${unref(activeScene).subtitle}` : "")}</span></div><div class="tb-actions" data-v-4cadd7cc><button type="button" class="tb-btn hide-mobile" title="H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-4cadd7cc><circle cx="12" cy="12" r="10" data-v-4cadd7cc></circle><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" data-v-4cadd7cc></path><line x1="12" y1="17" x2="12.01" y2="17" data-v-4cadd7cc></line></svg></button><button type="button" class="tb-btn hide-mobile" title="\u0110\u1ED5i hi\u1EC7u \u1EE9ng" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1" data-v-4cadd7cc></path></svg></button><button type="button" class="tb-btn icon-only" title="Ch\u1EBF \u0111\u1ED9 to\xE0n c\u1EA3nh (nh\u1EA5n F)" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" data-v-4cadd7cc></path></svg></button></div></div><aside class="${ssrRenderClass(["side-panel", { open: unref(showHelpPanel) }])}" aria-hidden="true" data-v-4cadd7cc><div class="panel-head" data-v-4cadd7cc><div class="panel-head-left" data-v-4cadd7cc><div class="panel-icon river" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-4cadd7cc><circle cx="12" cy="12" r="10" data-v-4cadd7cc></circle><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" data-v-4cadd7cc></path><line x1="12" y1="17" x2="12.01" y2="17" data-v-4cadd7cc></line></svg></div><div data-v-4cadd7cc><div class="panel-title" data-v-4cadd7cc>H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng</div><div class="panel-subtitle" data-v-4cadd7cc>\u0110i\u1EC1u khi\u1EC3n tour 360\xB0</div></div></div><button type="button" class="panel-close" aria-label="\u0110\xF3ng" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-4cadd7cc><path d="M18 6 6 18" data-v-4cadd7cc></path><path d="m6 6 12 12" data-v-4cadd7cc></path></svg></button></div><div class="panel-body" data-v-4cadd7cc><ul class="guide-list" data-v-4cadd7cc><li class="guide-item" data-v-4cadd7cc><div class="guide-icon" data-v-4cadd7cc>\u{1F5B1}\uFE0F</div><div data-v-4cadd7cc><div class="guide-title" data-v-4cadd7cc>K\xE9o \u0111\u1EC3 xoay \u1EA3nh 360\xB0</div><div class="guide-desc" data-v-4cadd7cc>Nh\u1EA5n gi\u1EEF v\xE0 k\xE9o chu\u1ED9t (ho\u1EB7c vu\u1ED1t tr\xEAn \u0111i\u1EC7n tho\u1EA1i) \u0111\u1EC3 xoay g\xF3c nh\xECn.</div></div></li><li class="guide-item" data-v-4cadd7cc><div class="guide-icon river-icon" data-v-4cadd7cc>\u{1F535}</div><div data-v-4cadd7cc><div class="guide-title" data-v-4cadd7cc>N\xFAt xanh \u2014 Di chuy\u1EC3n</div><div class="guide-desc" data-v-4cadd7cc>Nh\u1EA5n v\xE0o marker xanh \u0111\u1EC3 di chuy\u1EC3n \u0111\u1EBFn c\u1EA3nh ti\u1EBFp theo.</div></div></li><li class="guide-item" data-v-4cadd7cc><div class="guide-icon info-icon" data-v-4cadd7cc>\u{1F7E0}</div><div data-v-4cadd7cc><div class="guide-title" data-v-4cadd7cc>N\xFAt cam \u2014 Xem th\xF4ng tin</div><div class="guide-desc" data-v-4cadd7cc>Nh\u1EA5n v\xE0o marker cam \u0111\u1EC3 xem th\xF4ng tin chi ti\u1EBFt v\u1EC1 \u0111\u1ECBa \u0111i\u1EC3m.</div></div></li><li class="guide-item" data-v-4cadd7cc><div class="guide-icon" data-v-4cadd7cc>\u{1F50D}</div><div data-v-4cadd7cc><div class="guide-title" data-v-4cadd7cc>Cu\u1ED9n \u0111\u1EC3 zoom</div><div class="guide-desc" data-v-4cadd7cc>D\xF9ng con l\u0103n chu\u1ED9t ho\u1EB7c ch\u1EE5m 2 ng\xF3n \u0111\u1EC3 ph\xF3ng to / thu nh\u1ECF.</div></div></li><li class="guide-item" data-v-4cadd7cc><div class="guide-icon" data-v-4cadd7cc>\u2328\uFE0F</div><div data-v-4cadd7cc><div class="guide-title" data-v-4cadd7cc>Ph\xEDm t\u1EAFt</div><div class="guide-desc" data-v-4cadd7cc><strong data-v-4cadd7cc>F</strong> \u2014 B\u1EADt/t\u1EAFt to\xE0n c\u1EA3nh \xB7 <strong data-v-4cadd7cc>H</strong> \u2014 \u1EA8n/hi\u1EC7n giao di\u1EC7n \xB7 <strong data-v-4cadd7cc>D</strong> \u2014 Thu g\u1ECDn/m\u1EDF dock \xB7 <strong data-v-4cadd7cc>\u2190 \u2192</strong> \u2014 Chuy\u1EC3n c\u1EA3nh </div></div></li></ul></div></aside><aside class="${ssrRenderClass(["side-panel", { open: unref(showInfoPanel) }])}" aria-hidden="true" data-v-4cadd7cc><div class="panel-head" data-v-4cadd7cc><div class="panel-head-left" data-v-4cadd7cc><div class="panel-icon clay" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-4cadd7cc><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-4cadd7cc></circle><path d="M12 11 L12 18" data-v-4cadd7cc></path></svg></div><div data-v-4cadd7cc><div class="panel-title" data-v-4cadd7cc>${ssrInterpolate(unref(infoPanelTitle) || "Th\xF4ng tin \u0111\u1ECBa \u0111i\u1EC3m")}</div><div class="panel-subtitle" data-v-4cadd7cc>Chi ti\u1EBFt c\u1EA3nh quan</div></div></div><button type="button" class="panel-close" aria-label="\u0110\xF3ng" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-4cadd7cc><path d="M18 6 6 18" data-v-4cadd7cc></path><path d="m6 6 12 12" data-v-4cadd7cc></path></svg></button></div><div class="panel-body" data-v-4cadd7cc>`);
        if (unref(infoPanelContent)) {
          _push(`<div class="space-y-3" data-v-4cadd7cc>${(_a = unref(infoPanelContent)) != null ? _a : ""}</div>`);
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
        _push(`</div></aside><div class="fab-stack" data-v-4cadd7cc><button type="button" class="fab" title="Th\xF4ng tin \u0111\u1ECBa \u0111i\u1EC3m" aria-label="Th\xF4ng tin \u0111\u1ECBa \u0111i\u1EC3m" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" data-v-4cadd7cc><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-4cadd7cc></circle><path d="M12 11 L12 18" data-v-4cadd7cc></path></svg></button><button type="button" class="${ssrRenderClass(["fab", { active: unref(isCompassActive) }])}" title="La b\xE0n" aria-label="La b\xE0n" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><circle cx="12" cy="12" r="10" data-v-4cadd7cc></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" opacity="0.6" data-v-4cadd7cc></polygon></svg></button><button type="button" class="fab" title="Chia s\u1EBB" aria-label="Chia s\u1EBB" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><circle cx="18" cy="5" r="3" data-v-4cadd7cc></circle><circle cx="6" cy="12" r="3" data-v-4cadd7cc></circle><circle cx="18" cy="19" r="3" data-v-4cadd7cc></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-v-4cadd7cc></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-v-4cadd7cc></line></svg></button></div><button type="button" class="tb-btn icon-only immersive-exit" title="Tho\xE1t ch\u1EBF \u0111\u1ED9 to\xE0n c\u1EA3nh (Esc)" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" data-v-4cadd7cc></path></svg></button><div class="${ssrRenderClass(["dock", { collapsed: unref(isDockCollapsed) }])}" data-v-4cadd7cc><button type="button" class="dock-toggle" aria-label="M\u1EDF/\u0111\xF3ng danh s\xE1ch c\u1EA3nh" title="M\u1EDF/\u0111\xF3ng danh s\xE1ch c\u1EA3nh (D)" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><path d="m18 15-6-6-6 6" data-v-4cadd7cc></path></svg></button><div class="dock-head" data-v-4cadd7cc><div class="dock-label" data-v-4cadd7cc><span class="dock-label-dot" data-v-4cadd7cc></span><span data-v-4cadd7cc>${ssrInterpolate(unref(scenes).length)} c\u1EA3nh \xB7 ${ssrInterpolate(unref(tour).title)}</span></div><div class="dock-actions" data-v-4cadd7cc><button type="button" class="dock-btn" title="C\u1EA3nh tr\u01B0\u1EDBc" data-v-4cadd7cc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><path d="m15 18-6-6 6-6" data-v-4cadd7cc></path></svg><span data-v-4cadd7cc>Tr\u01B0\u1EDBc</span></button><button type="button" class="dock-btn" title="C\u1EA3nh sau" data-v-4cadd7cc><span data-v-4cadd7cc>Sau</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-4cadd7cc><path d="m9 18 6-6-6-6" data-v-4cadd7cc></path></svg></button></div></div><div class="scene-strip" data-v-4cadd7cc><!--[-->`);
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

export { _tourId_ as default };;globalThis.__timing__.logEnd('Load chunks/build/_tourId_-Bt1-UHmJ');
//# sourceMappingURL=_tourId_-Bt1-UHmJ.mjs.map
