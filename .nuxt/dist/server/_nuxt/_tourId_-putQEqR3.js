import { _ as _sfc_main$2 } from "./Spinner-mjqtnuYo.js";
import { _ as _sfc_main$3 } from "./EmptyState-CYLOXev5.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-B0iADLum.js";
import { _ as _sfc_main$4 } from "./Button-CeBG5qKU.js";
import { ref, computed, defineComponent, watch, mergeProps, useSSRContext, withAsyncContext, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, nextTick } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { defineStore } from "pinia";
import { _ as _export_sfc, u as useRoute, a as useToast } from "../server.mjs";
import "./index.module-o4ASpxkC.js";
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
  const activeSceneId = computed(() => navState.value?.current.sceneId ?? "");
  const activeTourId = computed(() => navState.value?.current.tourId ?? "");
  const entryTourId = computed(() => navState.value?.entryTourId ?? "");
  const canGoBack$1 = computed(() => navState.value ? canGoBack(navState.value) : false);
  const inGuestTour = computed(() => navState.value ? isInGuestTour(navState.value) : false);
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
  function navigateTo$1(sceneId, tourId) {
    if (!navState.value) return;
    navState.value = navigateTo(navState.value, {
      tourId: tourId ?? tour.value?.slug ?? "",
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
        _push(`<div class="pointer-events-none absolute inset-0 grid place-items-center bg-ink/80 text-white backdrop-blur-sm z-10" data-v-993a5d5e><div class="text-center" data-v-993a5d5e><div class="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-river" data-v-993a5d5e></div><p class="text-xs font-semibold text-white/70" data-v-993a5d5e>Đang tải panorama 360°…</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(`<div class="pointer-events-none absolute inset-0 grid place-items-center bg-ink/90 px-6 text-center text-white z-10" data-v-993a5d5e><div data-v-993a5d5e><p class="text-sm font-semibold" data-v-993a5d5e>Lỗi Panorama</p><p class="mt-2 max-w-md text-xs leading-5 text-white/60" data-v-993a5d5e>${ssrInterpolate(errorMessage.value)}</p></div></div>`);
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
    function handleInfoOpen(content, label) {
      infoPanelTitle.value = label;
      infoPanelContent.value = content;
      showHelpPanel.value = false;
      showInfoPanel.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
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
        _push(`<div class="absolute inset-0 animate-ping rounded-full bg-river/15" data-v-f333ff5a></div></div><div class="text-center" data-v-f333ff5a><p class="text-sm font-semibold text-white" data-v-f333ff5a>Đang tải trải nghiệm 360°</p><p class="mt-1 text-xs text-white/40" data-v-f333ff5a>${ssrInterpolate(unref(tourId))}</p></div></div></div>`);
      } else if (unref(error) || !unref(tour) || !unref(activeScene)) {
        _push(`<div class="grid h-screen w-full place-items-center bg-ink px-6" data-v-f333ff5a>`);
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
          "aria-label": "Quay lại danh mục",
          title: "Quay lại trang chủ"
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
        _push(`<div class="tb-scene" data-v-f333ff5a><span class="tb-scene-badge" data-v-f333ff5a>${ssrInterpolate(unref(sceneIndex))}/${ssrInterpolate(unref(scenes).length)}</span><span class="tb-scene-title" data-v-f333ff5a>${ssrInterpolate(unref(activeScene).title)}</span><span class="tb-scene-desc" data-v-f333ff5a>${ssrInterpolate(unref(activeScene).subtitle ? `· ${unref(activeScene).subtitle}` : "")}</span></div><div class="tb-actions" data-v-f333ff5a><button type="button" class="tb-btn hide-mobile" title="Hướng dẫn sử dụng" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-f333ff5a><circle cx="12" cy="12" r="10" data-v-f333ff5a></circle><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" data-v-f333ff5a></path><line x1="12" y1="17" x2="12.01" y2="17" data-v-f333ff5a></line></svg></button><button type="button" class="tb-btn hide-mobile" title="Đổi hiệu ứng" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1" data-v-f333ff5a></path></svg></button><button type="button" class="tb-btn icon-only" title="Chế độ toàn cảnh (nhấn F)" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" data-v-f333ff5a></path></svg></button></div></div><aside class="${ssrRenderClass(["side-panel", { open: unref(showHelpPanel) }])}" aria-hidden="true" data-v-f333ff5a><div class="panel-head" data-v-f333ff5a><div class="panel-head-left" data-v-f333ff5a><div class="panel-icon river" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-f333ff5a><circle cx="12" cy="12" r="10" data-v-f333ff5a></circle><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" data-v-f333ff5a></path><line x1="12" y1="17" x2="12.01" y2="17" data-v-f333ff5a></line></svg></div><div data-v-f333ff5a><div class="panel-title" data-v-f333ff5a>Hướng dẫn sử dụng</div><div class="panel-subtitle" data-v-f333ff5a>Điều khiển tour 360°</div></div></div><button type="button" class="panel-close" aria-label="Đóng" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-f333ff5a><path d="M18 6 6 18" data-v-f333ff5a></path><path d="m6 6 12 12" data-v-f333ff5a></path></svg></button></div><div class="panel-body" data-v-f333ff5a><ul class="guide-list" data-v-f333ff5a><li class="guide-item" data-v-f333ff5a><div class="guide-icon" data-v-f333ff5a>🖱️</div><div data-v-f333ff5a><div class="guide-title" data-v-f333ff5a>Kéo để xoay ảnh 360°</div><div class="guide-desc" data-v-f333ff5a>Nhấn giữ và kéo chuột (hoặc vuốt trên điện thoại) để xoay góc nhìn.</div></div></li><li class="guide-item" data-v-f333ff5a><div class="guide-icon river-icon" data-v-f333ff5a>🔵</div><div data-v-f333ff5a><div class="guide-title" data-v-f333ff5a>Nút xanh — Di chuyển</div><div class="guide-desc" data-v-f333ff5a>Nhấn vào marker xanh để di chuyển đến cảnh tiếp theo.</div></div></li><li class="guide-item" data-v-f333ff5a><div class="guide-icon info-icon" data-v-f333ff5a>🟠</div><div data-v-f333ff5a><div class="guide-title" data-v-f333ff5a>Nút cam — Xem thông tin</div><div class="guide-desc" data-v-f333ff5a>Nhấn vào marker cam để xem thông tin chi tiết về địa điểm.</div></div></li><li class="guide-item" data-v-f333ff5a><div class="guide-icon" data-v-f333ff5a>🔍</div><div data-v-f333ff5a><div class="guide-title" data-v-f333ff5a>Cuộn để zoom</div><div class="guide-desc" data-v-f333ff5a>Dùng con lăn chuột hoặc chụm 2 ngón để phóng to / thu nhỏ.</div></div></li><li class="guide-item" data-v-f333ff5a><div class="guide-icon" data-v-f333ff5a>⌨️</div><div data-v-f333ff5a><div class="guide-title" data-v-f333ff5a>Phím tắt</div><div class="guide-desc" data-v-f333ff5a><strong data-v-f333ff5a>F</strong> — Bật/tắt toàn cảnh · <strong data-v-f333ff5a>H</strong> — Ẩn/hiện giao diện · <strong data-v-f333ff5a>D</strong> — Thu gọn/mở dock · <strong data-v-f333ff5a>← →</strong> — Chuyển cảnh </div></div></li></ul></div></aside><aside class="${ssrRenderClass(["side-panel", { open: unref(showInfoPanel) }])}" aria-hidden="true" data-v-f333ff5a><div class="panel-head" data-v-f333ff5a><div class="panel-head-left" data-v-f333ff5a><div class="panel-icon clay" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-f333ff5a><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-f333ff5a></circle><path d="M12 11 L12 18" data-v-f333ff5a></path></svg></div><div data-v-f333ff5a><div class="panel-title" data-v-f333ff5a>${ssrInterpolate(unref(infoPanelTitle) || "Thông tin địa điểm")}</div><div class="panel-subtitle" data-v-f333ff5a>Chi tiết cảnh quan</div></div></div><button type="button" class="panel-close" aria-label="Đóng" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-f333ff5a><path d="M18 6 6 18" data-v-f333ff5a></path><path d="m6 6 12 12" data-v-f333ff5a></path></svg></button></div><div class="panel-body" data-v-f333ff5a>`);
        if (unref(infoPanelContent)) {
          _push(`<div class="space-y-3" data-v-f333ff5a>${unref(infoPanelContent) ?? ""}</div>`);
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
        _push(`</div></aside><div class="fab-stack" data-v-f333ff5a><button type="button" class="fab" title="Thông tin địa điểm" aria-label="Thông tin địa điểm" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" data-v-f333ff5a><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-f333ff5a></circle><path d="M12 11 L12 18" data-v-f333ff5a></path></svg></button><button type="button" class="${ssrRenderClass(["fab", { active: unref(isCompassActive) }])}" title="La bàn" aria-label="La bàn" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><circle cx="12" cy="12" r="10" data-v-f333ff5a></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" opacity="0.6" data-v-f333ff5a></polygon></svg></button><button type="button" class="fab" title="Chia sẻ" aria-label="Chia sẻ" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><circle cx="18" cy="5" r="3" data-v-f333ff5a></circle><circle cx="6" cy="12" r="3" data-v-f333ff5a></circle><circle cx="18" cy="19" r="3" data-v-f333ff5a></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-v-f333ff5a></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-v-f333ff5a></line></svg></button></div><button type="button" class="tb-btn icon-only immersive-exit" title="Thoát chế độ toàn cảnh (Esc)" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" data-v-f333ff5a></path></svg></button><div class="${ssrRenderClass(["dock", { collapsed: unref(isDockCollapsed) }])}" data-v-f333ff5a><button type="button" class="dock-toggle" aria-label="Mở/đóng danh sách cảnh" title="Mở/đóng danh sách cảnh (D)" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><path d="m18 15-6-6-6 6" data-v-f333ff5a></path></svg></button><div class="dock-head" data-v-f333ff5a><div class="dock-label" data-v-f333ff5a><span class="dock-label-dot" data-v-f333ff5a></span><span data-v-f333ff5a>${ssrInterpolate(unref(scenes).length)} cảnh · ${ssrInterpolate(unref(tour).title)}</span></div><div class="dock-actions" data-v-f333ff5a><button type="button" class="dock-btn" title="Cảnh trước" data-v-f333ff5a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><path d="m15 18-6-6 6-6" data-v-f333ff5a></path></svg><span data-v-f333ff5a>Trước</span></button><button type="button" class="dock-btn" title="Cảnh sau" data-v-f333ff5a><span data-v-f333ff5a>Sau</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-f333ff5a><path d="m9 18 6-6-6-6" data-v-f333ff5a></path></svg></button></div></div><div class="scene-strip" data-v-f333ff5a><!--[-->`);
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
export {
  _tourId_ as default
};
//# sourceMappingURL=_tourId_-putQEqR3.js.map
