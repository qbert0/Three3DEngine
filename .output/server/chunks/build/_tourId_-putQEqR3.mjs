globalThis.__timing__.logStart('Load chunks/build/_tourId_-putQEqR3');import { _ as _sfc_main$2 } from './Spinner-mjqtnuYo.mjs';
import { _ as _sfc_main$3 } from './EmptyState-CYLOXev5.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-B0iADLum.mjs';
import { _ as _sfc_main$4 } from './Button-CeBG5qKU.mjs';
import { defineComponent, computed, withAsyncContext, ref, watch, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { defineStore } from 'pinia';
import { _ as _export_sfc, u as useRoute, a as useToast } from './server.mjs';
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

function createNavigationState(tourId, sceneId) {
  return {
    entryTourId: tourId,
    current: { tourId, sceneId },
    history: []
  };
}
function navigateTo(state, target) {
  if (state.current.tourId === target.tourId && state.current.sceneId === target.sceneId) {
    return state;
  }
  return {
    ...state,
    current: target,
    history: [...state.history, state.current]
  };
}
function navigateBack(state) {
  if (state.history.length === 0) return state;
  const history = [...state.history];
  const previous = history.pop();
  return {
    ...state,
    current: previous,
    history
  };
}
function canGoBack(state) {
  return state.history.length > 0;
}
function isInGuestTour(state) {
  return state.current.tourId !== state.entryTourId;
}
function resolveScene(tour, sceneId) {
  return tour.scenes.find((s) => s.id === sceneId);
}
function resolveInitialScene(tour, preferredId) {
  if (preferredId) {
    const found = resolveScene(tour, preferredId);
    if (found) return found;
  }
  if (tour.initialSceneId) {
    const found = resolveScene(tour, tour.initialSceneId);
    if (found) return found;
  }
  return tour.scenes[0];
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
  const canGoBack$1 = computed(() => navState.value ? canGoBack(navState.value) : false);
  const inGuestTour = computed(() => navState.value ? isInGuestTour(navState.value) : false);
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
  function navigateTo$1(sceneId, tourId) {
    var _a, _b;
    if (!navState.value) return;
    navState.value = navigateTo(navState.value, {
      tourId: (_b = tourId != null ? tourId : (_a = tour.value) == null ? void 0 : _a.slug) != null ? _b : "",
      sceneId
    });
  }
  function goBack() {
    if (!navState.value) return;
    navState.value = navigateBack(navState.value);
  }
  function reset() {
    tour.value = null;
    navState.value = null;
    loading.value = false;
    error.value = null;
  }
  return {
    // State (read-only from outside via computed)
    tour,
    loading,
    error,
    navState,
    // Computed
    activeScene,
    activeSceneId,
    activeTourId,
    entryTourId,
    canGoBack: canGoBack$1,
    inGuestTour,
    scenes,
    sceneIndex,
    // Actions
    loadTour,
    navigateTo: navigateTo$1,
    goBack,
    reset
  };
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Viewer360",
  __ssrInlineRender: true,
  props: {
    tour: {},
    scene: {}
  },
  emits: ["navigate", "infoOpen"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const container = ref(null);
    const isLoading = ref(true);
    const errorMessage = ref("");
    const switchScene = async (scene) => {
      return;
    };
    watch(() => props.scene.id, () => switchScene(props.scene));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container,
        class: "absolute inset-0 h-full w-full overflow-hidden bg-ink"
      }, _attrs))} data-v-993a5d5e>`);
      if (isLoading.value) {
        _push(`<div class="pointer-events-none absolute inset-0 grid place-items-center bg-ink/80 text-white backdrop-blur-sm z-10" data-v-993a5d5e><div class="text-center" data-v-993a5d5e><div class="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-river" data-v-993a5d5e></div><p class="text-xs font-semibold text-white/70" data-v-993a5d5e>\u0110ang t\u1EA3i panorama 360\xB0\u2026</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(`<div class="pointer-events-none absolute inset-0 grid place-items-center bg-ink/90 px-6 text-center text-white z-10" data-v-993a5d5e><div data-v-993a5d5e><p class="text-sm font-semibold" data-v-993a5d5e>L\u1ED7i Panorama</p><p class="mt-2 max-w-md text-xs leading-5 text-white/60" data-v-993a5d5e>${ssrInterpolate(errorMessage.value)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/experience/Viewer360.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ExperienceViewer360 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-993a5d5e"]]);
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
    function handleInfoOpen(content, label) {
      infoPanelTitle.value = label;
      infoPanelContent.value = content;
      showHelpPanel.value = false;
      showInfoPanel.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UiSpinner = _sfc_main$2;
      const _component_UiEmptyState = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiButton = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["viewer-root bg-ink", { immersive: unref(isImmersive) }]
      }, _attrs))} data-v-f333ff5a>`);
      if (unref(pending)) {
        _push(`<div class="grid h-screen w-full place-items-center bg-ink" data-v-f333ff5a><div class="flex flex-col items-center gap-5" data-v-f333ff5a><div class="relative" data-v-f333ff5a>`);
        _push(ssrRenderComponent(_component_UiSpinner, {
          size: "lg",
          color: "primary"
        }, null, _parent));
        _push(`<div class="absolute inset-0 animate-ping rounded-full bg-river/15" data-v-f333ff5a></div></div><div class="text-center" data-v-f333ff5a><p class="text-sm font-semibold text-white" data-v-f333ff5a>\u0110ang t\u1EA3i tr\u1EA3i nghi\u1EC7m 360\xB0</p><p class="mt-1 text-xs text-white/40" data-v-f333ff5a>${ssrInterpolate(unref(tourId))}</p></div></div></div>`);
      } else if (unref(error) || !unref(tour) || !unref(activeScene)) {
        _push(`<div class="grid h-screen w-full place-items-center bg-ink px-6" data-v-f333ff5a>`);
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
        _push(ssrRenderComponent(ExperienceViewer360, {
          tour: unref(tour),
          scene: unref(activeScene),
          onNavigate: handleNavigate,
          onInfoOpen: handleInfoOpen
        }, null, _parent));
        _push(`<div class="topbar" data-v-f333ff5a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "tb-btn icon-only",
          "aria-label": "Quay l\u1EA1i danh m\u1EE5c",
          title: "Quay l\u1EA1i trang ch\u1EE7"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a${_scopeId}><path d="m15 18-6-6 6-6" data-v-f333ff5a${_scopeId}></path></svg>`);
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
        _push(`<div class="tb-scene" data-v-f333ff5a><span class="tb-scene-badge" data-v-f333ff5a>${ssrInterpolate(unref(sceneIndex))}/${ssrInterpolate(unref(scenes).length)}</span><span class="tb-scene-title" data-v-f333ff5a>${ssrInterpolate(unref(activeScene).title)}</span><span class="tb-scene-desc" data-v-f333ff5a>${ssrInterpolate(unref(activeScene).subtitle ? `\xB7 ${unref(activeScene).subtitle}` : "")}</span></div><div class="tb-actions" data-v-f333ff5a><button type="button" class="tb-btn hide-mobile" title="H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-f333ff5a><circle cx="12" cy="12" r="10" data-v-f333ff5a></circle><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" data-v-f333ff5a></path><line x1="12" y1="17" x2="12.01" y2="17" data-v-f333ff5a></line></svg></button><button type="button" class="tb-btn hide-mobile" title="\u0110\u1ED5i hi\u1EC7u \u1EE9ng" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1" data-v-f333ff5a></path></svg></button><button type="button" class="tb-btn icon-only" title="Ch\u1EBF \u0111\u1ED9 to\xE0n c\u1EA3nh (nh\u1EA5n F)" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" data-v-f333ff5a></path></svg></button></div></div><aside class="${ssrRenderClass(["side-panel", { open: unref(showHelpPanel) }])}" aria-hidden="true" data-v-f333ff5a><div class="panel-head" data-v-f333ff5a><div class="panel-head-left" data-v-f333ff5a><div class="panel-icon river" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-f333ff5a><circle cx="12" cy="12" r="10" data-v-f333ff5a></circle><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" data-v-f333ff5a></path><line x1="12" y1="17" x2="12.01" y2="17" data-v-f333ff5a></line></svg></div><div data-v-f333ff5a><div class="panel-title" data-v-f333ff5a>H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng</div><div class="panel-subtitle" data-v-f333ff5a>\u0110i\u1EC1u khi\u1EC3n tour 360\xB0</div></div></div><button type="button" class="panel-close" aria-label="\u0110\xF3ng" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-f333ff5a><path d="M18 6 6 18" data-v-f333ff5a></path><path d="m6 6 12 12" data-v-f333ff5a></path></svg></button></div><div class="panel-body" data-v-f333ff5a><ul class="guide-list" data-v-f333ff5a><li class="guide-item" data-v-f333ff5a><div class="guide-icon" data-v-f333ff5a>\u{1F5B1}\uFE0F</div><div data-v-f333ff5a><div class="guide-title" data-v-f333ff5a>K\xE9o \u0111\u1EC3 xoay \u1EA3nh 360\xB0</div><div class="guide-desc" data-v-f333ff5a>Nh\u1EA5n gi\u1EEF v\xE0 k\xE9o chu\u1ED9t (ho\u1EB7c vu\u1ED1t tr\xEAn \u0111i\u1EC7n tho\u1EA1i) \u0111\u1EC3 xoay g\xF3c nh\xECn.</div></div></li><li class="guide-item" data-v-f333ff5a><div class="guide-icon river-icon" data-v-f333ff5a>\u{1F535}</div><div data-v-f333ff5a><div class="guide-title" data-v-f333ff5a>N\xFAt xanh \u2014 Di chuy\u1EC3n</div><div class="guide-desc" data-v-f333ff5a>Nh\u1EA5n v\xE0o marker xanh \u0111\u1EC3 di chuy\u1EC3n \u0111\u1EBFn c\u1EA3nh ti\u1EBFp theo.</div></div></li><li class="guide-item" data-v-f333ff5a><div class="guide-icon info-icon" data-v-f333ff5a>\u{1F7E0}</div><div data-v-f333ff5a><div class="guide-title" data-v-f333ff5a>N\xFAt cam \u2014 Xem th\xF4ng tin</div><div class="guide-desc" data-v-f333ff5a>Nh\u1EA5n v\xE0o marker cam \u0111\u1EC3 xem th\xF4ng tin chi ti\u1EBFt v\u1EC1 \u0111\u1ECBa \u0111i\u1EC3m.</div></div></li><li class="guide-item" data-v-f333ff5a><div class="guide-icon" data-v-f333ff5a>\u{1F50D}</div><div data-v-f333ff5a><div class="guide-title" data-v-f333ff5a>Cu\u1ED9n \u0111\u1EC3 zoom</div><div class="guide-desc" data-v-f333ff5a>D\xF9ng con l\u0103n chu\u1ED9t ho\u1EB7c ch\u1EE5m 2 ng\xF3n \u0111\u1EC3 ph\xF3ng to / thu nh\u1ECF.</div></div></li><li class="guide-item" data-v-f333ff5a><div class="guide-icon" data-v-f333ff5a>\u2328\uFE0F</div><div data-v-f333ff5a><div class="guide-title" data-v-f333ff5a>Ph\xEDm t\u1EAFt</div><div class="guide-desc" data-v-f333ff5a><strong data-v-f333ff5a>F</strong> \u2014 B\u1EADt/t\u1EAFt to\xE0n c\u1EA3nh \xB7 <strong data-v-f333ff5a>H</strong> \u2014 \u1EA8n/hi\u1EC7n giao di\u1EC7n \xB7 <strong data-v-f333ff5a>D</strong> \u2014 Thu g\u1ECDn/m\u1EDF dock \xB7 <strong data-v-f333ff5a>\u2190 \u2192</strong> \u2014 Chuy\u1EC3n c\u1EA3nh </div></div></li></ul></div></aside><aside class="${ssrRenderClass(["side-panel", { open: unref(showInfoPanel) }])}" aria-hidden="true" data-v-f333ff5a><div class="panel-head" data-v-f333ff5a><div class="panel-head-left" data-v-f333ff5a><div class="panel-icon clay" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-f333ff5a><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-f333ff5a></circle><path d="M12 11 L12 18" data-v-f333ff5a></path></svg></div><div data-v-f333ff5a><div class="panel-title" data-v-f333ff5a>${ssrInterpolate(unref(infoPanelTitle) || "Th\xF4ng tin \u0111\u1ECBa \u0111i\u1EC3m")}</div><div class="panel-subtitle" data-v-f333ff5a>Chi ti\u1EBFt c\u1EA3nh quan</div></div></div><button type="button" class="panel-close" aria-label="\u0110\xF3ng" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-f333ff5a><path d="M18 6 6 18" data-v-f333ff5a></path><path d="m6 6 12 12" data-v-f333ff5a></path></svg></button></div><div class="panel-body" data-v-f333ff5a>`);
        if (unref(infoPanelContent)) {
          _push(`<div class="space-y-3" data-v-f333ff5a>${(_a = unref(infoPanelContent)) != null ? _a : ""}</div>`);
        } else {
          _push(`<div class="space-y-3" data-v-f333ff5a><p data-v-f333ff5a><strong data-v-f333ff5a>${ssrInterpolate(unref(activeScene).title)}</strong></p>`);
          if (unref(activeScene).subtitle) {
            _push(`<p data-v-f333ff5a>${ssrInterpolate(unref(activeScene).subtitle)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(tour).summary) {
            _push(`<p data-v-f333ff5a>${ssrInterpolate(unref(tour).summary)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</div></aside><div class="fab-stack" data-v-f333ff5a><button type="button" class="fab" title="Th\xF4ng tin \u0111\u1ECBa \u0111i\u1EC3m" aria-label="Th\xF4ng tin \u0111\u1ECBa \u0111i\u1EC3m" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" data-v-f333ff5a><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-f333ff5a></circle><path d="M12 11 L12 18" data-v-f333ff5a></path></svg></button><button type="button" class="${ssrRenderClass(["fab", { active: unref(isCompassActive) }])}" title="La b\xE0n" aria-label="La b\xE0n" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><circle cx="12" cy="12" r="10" data-v-f333ff5a></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" opacity="0.6" data-v-f333ff5a></polygon></svg></button><button type="button" class="fab" title="Chia s\u1EBB" aria-label="Chia s\u1EBB" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><circle cx="18" cy="5" r="3" data-v-f333ff5a></circle><circle cx="6" cy="12" r="3" data-v-f333ff5a></circle><circle cx="18" cy="19" r="3" data-v-f333ff5a></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-v-f333ff5a></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-v-f333ff5a></line></svg></button></div><button type="button" class="tb-btn icon-only immersive-exit" title="Tho\xE1t ch\u1EBF \u0111\u1ED9 to\xE0n c\u1EA3nh (Esc)" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" data-v-f333ff5a></path></svg></button><div class="${ssrRenderClass(["dock", { collapsed: unref(isDockCollapsed) }])}" data-v-f333ff5a><button type="button" class="dock-toggle" aria-label="M\u1EDF/\u0111\xF3ng danh s\xE1ch c\u1EA3nh" title="M\u1EDF/\u0111\xF3ng danh s\xE1ch c\u1EA3nh (D)" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><path d="m18 15-6-6-6 6" data-v-f333ff5a></path></svg></button><div class="dock-head" data-v-f333ff5a><div class="dock-label" data-v-f333ff5a><span class="dock-label-dot" data-v-f333ff5a></span><span data-v-f333ff5a>${ssrInterpolate(unref(scenes).length)} c\u1EA3nh \xB7 ${ssrInterpolate(unref(tour).title)}</span></div><div class="dock-actions" data-v-f333ff5a><button type="button" class="dock-btn" title="C\u1EA3nh tr\u01B0\u1EDBc" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><path d="m15 18-6-6 6-6" data-v-f333ff5a></path></svg><span data-v-f333ff5a>Tr\u01B0\u1EDBc</span></button><button type="button" class="dock-btn" title="C\u1EA3nh sau" data-v-f333ff5a><span data-v-f333ff5a>Sau</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><path d="m9 18 6-6-6-6" data-v-f333ff5a></path></svg></button></div></div><div class="scene-strip" data-v-f333ff5a><!--[-->`);
        ssrRenderList(unref(scenes), (scene, idx) => {
          _push(`<button type="button"${ssrRenderAttr("data-idx", idx)} class="${ssrRenderClass(["scene-thumb", { active: scene.id === unref(activeSceneId) }])}"${ssrRenderAttr("aria-label", `Xem: ${scene.title}`)}${ssrRenderAttr("title", scene.title)} data-v-f333ff5a><img${ssrRenderAttr("src", scene.thumbnail)}${ssrRenderAttr("alt", scene.title)} loading="lazy" data-v-f333ff5a><span class="scene-thumb-num" data-v-f333ff5a>${ssrInterpolate(idx + 1)}</span><span class="scene-thumb-name" data-v-f333ff5a>${ssrInterpolate(scene.title)}</span></button>`);
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
const _tourId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f333ff5a"]]);

export { _tourId_ as default };;globalThis.__timing__.logEnd('Load chunks/build/_tourId_-putQEqR3');
//# sourceMappingURL=_tourId_-putQEqR3.mjs.map
