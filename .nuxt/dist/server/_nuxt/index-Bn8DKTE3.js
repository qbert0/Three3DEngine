import { defineComponent, mergeProps, unref, useSSRContext, ref, shallowRef, watch, withAsyncContext, computed, createVNode, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { Binoculars, MapPin } from "@lucide/vue";
import { M as MarkersPlugin, V as Viewer, e as events_exports } from "./index.module-CqWmqBTO.js";
import { _ as _export_sfc } from "../server.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs";
import { u as useFetch } from "./fetch-DKKvSd4U.js";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unctx/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/defu/dist/defu.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ufo/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TourSidebar",
  __ssrInlineRender: true,
  props: {
    tour: {},
    activeScene: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "order-2 flex w-full flex-col border-t border-white/10 bg-ink lg:order-1 lg:h-screen lg:w-[320px] lg:border-r lg:border-t-0" }, _attrs))}><div class="relative overflow-hidden px-6 pb-6 pt-7"><div class="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-river/20 blur-3xl"></div><div class="pointer-events-none absolute -bottom-4 left-4 h-24 w-24 rounded-full bg-clay/15 blur-2xl"></div><div class="relative flex items-start gap-3"><div class="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-river/20 ring-1 ring-river/40">`);
      _push(ssrRenderComponent(unref(Binoculars), { class: "h-5 w-5 text-river" }, null, _parent));
      _push(`</div><div><p class="text-[10px] font-bold uppercase tracking-[0.22em] text-river">View360</p><h1 class="mt-0.5 text-xl font-bold leading-tight text-white">${ssrInterpolate(__props.tour.title)}</h1></div></div><p class="relative mt-4 text-sm leading-6 text-white/55">${ssrInterpolate(__props.tour.summary)}</p><div class="relative mt-4 flex items-center gap-2 text-xs text-white/40">`);
      _push(ssrRenderComponent(unref(MapPin), { class: "h-3.5 w-3.5 shrink-0 text-clay" }, null, _parent));
      _push(`<span>${ssrInterpolate(__props.tour.location)}</span></div></div><div class="mx-6 h-px bg-white/8"></div><div class="px-6 py-5"><p class="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">Đang xem</p><p class="text-base font-semibold text-white">${ssrInterpolate(__props.activeScene.title)}</p><p class="mt-0.5 text-xs leading-5 text-white/50">${ssrInterpolate(__props.activeScene.subtitle)}</p></div><div class="mx-6 h-px bg-white/8"></div><div class="mt-auto px-6 py-5"><p class="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">Hướng dẫn</p><ul class="grid gap-2"><li class="flex items-center gap-2.5 text-xs text-white/50"><span class="text-base leading-none">🖱️</span> Kéo để xoay ảnh 360° </li><li class="flex items-center gap-2.5 text-xs text-white/50"><span class="text-base leading-none">🔵</span> Nút xanh – di chuyển cảnh </li><li class="flex items-center gap-2.5 text-xs text-white/50"><span class="text-base leading-none">🟠</span> Nút cam – xem thông tin </li><li class="flex items-center gap-2.5 text-xs text-white/50"><span class="text-base leading-none">🔍</span> Cuộn chuột để zoom </li></ul></div></aside>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/nature/TourSidebar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TourSidebar",
  __ssrInlineRender: true,
  props: {
    tour: {},
    activeScene: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute left-4 top-4 z-20 flex items-center gap-2 rounded-lg bg-ink/80 px-3 py-2 backdrop-blur-sm ring-1 ring-white/10" }, _attrs))}><span class="text-[10px] font-bold uppercase tracking-widest text-river">View360</span><span class="h-3.5 w-px bg-white/20"></span><span class="text-xs font-medium text-white/80">${ssrInterpolate(__props.activeScene.title)}</span></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/minimal/TourSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function useViewer360(options) {
  const isLoading = ref(true);
  const errorMessage = ref("");
  const viewer = shallowRef(null);
  const buildContext = () => ({
    navigate: options.onNavigate,
    openInfo: options.onInfoOpen,
    playAudio: (src, label) => {
      const audio = new Audio(src);
      audio.play().catch(() => {
      });
    }
  });
  const buildMarkers = (scene) => {
    const ctx = buildContext();
    return options.plugins.flatMap((p) => p.getMarkers(scene, ctx));
  };
  async function initViewer(container, scene) {
    isLoading.value = true;
    errorMessage.value = "";
    try {
      viewer.value = new Viewer({
        container,
        panorama: scene.panorama,
        loadingImg: scene.thumbnail,
        // show thumbnail while full res loads
        caption: scene.title,
        defaultYaw: scene.initialYaw,
        defaultPitch: scene.initialPitch,
        touchmoveTwoFingers: false,
        mousewheelCtrlKey: false,
        navbar: ["zoom", "move", "caption", "fullscreen"],
        plugins: [
          [MarkersPlugin, { markers: buildMarkers(scene) }]
        ]
      });
      viewer.value.addEventListener(events_exports.PanoramaLoadedEvent.type, () => {
        isLoading.value = false;
      });
      viewer.value.addEventListener(events_exports.PanoramaErrorEvent.type, ({ error }) => {
        isLoading.value = false;
        errorMessage.value = error.message || "Không thể tải ảnh panorama.";
      });
      viewer.value.getPlugin(MarkersPlugin).addEventListener("select-marker", ({ marker }) => {
        const pluginName = marker.data?.plugin;
        const scene_marker = options.plugins.find((p) => p.name === pluginName);
        const rawMarker = (currentScene.value?.markers ?? []).find((m) => m.id === marker.id);
        if (scene_marker && rawMarker) {
          scene_marker.onMarkerClick(rawMarker, buildContext());
        }
      });
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : "Không thể khởi động viewer.";
      isLoading.value = false;
    }
  }
  const currentScene = ref(null);
  async function switchScene(scene) {
    if (!viewer.value) return;
    currentScene.value = scene;
    isLoading.value = true;
    const loaded = await viewer.value.setPanorama(scene.panorama, {
      caption: scene.title,
      position: { yaw: scene.initialYaw, pitch: scene.initialPitch },
      transition: false
      // instant cut — no PSV fade/zoom
    });
    if (!loaded) return;
    isLoading.value = false;
    const markersPlugin = viewer.value.getPlugin(MarkersPlugin);
    markersPlugin.clearMarkers();
    markersPlugin.setMarkers(buildMarkers(scene));
  }
  function destroyViewer() {
    viewer.value?.destroy();
    viewer.value = null;
  }
  return {
    isLoading,
    errorMessage,
    currentScene,
    initViewer,
    switchScene,
    destroyViewer
  };
}
function usePreloader() {
  const preloaded = /* @__PURE__ */ new Set();
  function preloadUrl(url) {
    if (!url || preloaded.has(url)) return;
    preloaded.add(url);
    const img = new (void 0).Image();
    img.src = url;
  }
  function preloadScene(scene) {
    preloadUrl(scene.thumbnail);
    preloadUrl(scene.panorama);
  }
  function preloadNeighbours(activeScene, allScenes) {
    const targetIds = activeScene.markers.filter((m) => m.plugin === "navigation").map((m) => m.targetScene);
    for (const id of targetIds) {
      const scene = allScenes.find((s) => s.id === id);
      if (scene) preloadScene(scene);
    }
  }
  return { preloadScene, preloadNeighbours, preloadUrl };
}
const navHtml = (destTitle) => `
<button class="nav-hotspot-btn" aria-label="Đến: ${destTitle}"
  style="display:flex;flex-direction:column;align-items:center;gap:5px;background:none;border:none;cursor:pointer;padding:0;position:relative;">
  <span class="nav-hotspot-tooltip" style="
    position:absolute;bottom:calc(100% + 10px);left:50%;
    transform:translateX(-50%) translateY(6px);
    background:rgba(10,10,10,0.88);color:#fff;font-size:11px;font-weight:600;
    padding:5px 11px;border-radius:8px;white-space:nowrap;pointer-events:none;
    opacity:0;transition:opacity 0.2s ease,transform 0.2s ease;
    border:1px solid rgba(255,255,255,0.12);backdrop-filter:blur(8px);
    letter-spacing:0.03em;box-shadow:0 4px 16px rgba(0,0,0,0.4);">
    ↑ ${destTitle}
    <span style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);
      width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;
      border-top:5px solid rgba(10,10,10,0.88);"></span>
  </span>
  <div style="width:54px;height:54px;border-radius:50%;background:rgba(31,111,139,0.88);
    border:2.5px solid rgba(255,255,255,0.8);
    box-shadow:0 4px 24px rgba(31,111,139,0.6),0 0 0 6px rgba(31,111,139,0.2);
    display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 4 L12 18" stroke="white" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M6 11 L12 5 L18 11" stroke="white" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="9" cy="20.5" r="1.6" fill="rgba(255,255,255,0.65)"/>
      <circle cx="15" cy="20.5" r="1.6" fill="rgba(255,255,255,0.65)"/>
    </svg>
  </div>
  <span style="font-size:10px;font-weight:700;color:#fff;background:rgba(15,15,15,0.7);
    padding:3px 9px;border-radius:20px;white-space:nowrap;backdrop-filter:blur(6px);
    letter-spacing:0.04em;max-width:130px;overflow:hidden;text-overflow:ellipsis;
    border:1px solid rgba(255,255,255,0.1);">${destTitle}</span>
</button>`;
const NavigationPlugin = {
  name: "navigation",
  getMarkers(scene, _ctx) {
    return scene.markers.filter((m) => m.plugin === "navigation").map((m) => ({
      id: m.id,
      position: { yaw: m.yaw, pitch: m.pitch },
      html: navHtml(m.label),
      anchor: "bottom center",
      data: { plugin: "navigation", targetScene: m.targetScene }
    }));
  },
  onMarkerClick(marker, ctx) {
    if (marker.plugin === "navigation" && marker.targetScene) {
      ctx.navigate(marker.targetScene);
    }
  }
};
const infoHtml = (label) => `
<button aria-label="${label}"
  style="display:flex;flex-direction:column;align-items:center;gap:5px;background:none;border:none;cursor:pointer;padding:0;">
  <div style="width:44px;height:44px;border-radius:50%;background:rgba(168,88,63,0.88);
    border:2.5px solid rgba(255,255,255,0.8);
    box-shadow:0 4px 20px rgba(168,88,63,0.55),0 0 0 6px rgba(168,88,63,0.18);
    display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="5" r="1.5" fill="white"/>
      <path d="M9 8 L9 13.5" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
    </svg>
  </div>
  <span style="font-size:10px;font-weight:700;color:#fff;background:rgba(15,15,15,0.7);
    padding:3px 9px;border-radius:20px;white-space:nowrap;backdrop-filter:blur(6px);
    letter-spacing:0.04em;border:1px solid rgba(255,255,255,0.1);">${label}</span>
</button>`;
const InfoPlugin = {
  name: "info",
  getMarkers(scene, _ctx) {
    return scene.markers.filter((m) => m.plugin === "info").map((m) => ({
      id: m.id,
      position: { yaw: m.yaw, pitch: m.pitch },
      html: infoHtml(m.label),
      anchor: "bottom center",
      data: { plugin: "info", content: m.content, label: m.label }
    }));
  },
  onMarkerClick(marker, ctx) {
    if (marker.plugin === "info") {
      ctx.openInfo(marker.content, marker.label);
    }
  }
};
const REGISTRY = {
  navigation: NavigationPlugin,
  info: InfoPlugin
};
function resolvePlugins(names) {
  return names.map((name) => {
    const plugin = REGISTRY[name];
    if (!plugin && process.env.NODE_ENV === "development") {
      console.warn(`[View360] Unknown plugin: "${name}". Available: ${Object.keys(REGISTRY).join(", ")}`);
    }
    return plugin;
  }).filter((p) => !!p);
}
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
    const emit = __emit;
    const infoPanelOpen = ref(false);
    const infoPanelContent = ref("");
    const infoPanelLabel = ref("");
    const enabledPlugins = resolvePlugins(props.tour.plugins ?? ["navigation"]);
    ref(null);
    const { isLoading, errorMessage, switchScene } = useViewer360({
      plugins: enabledPlugins,
      onNavigate: (sceneId) => emit("navigate", sceneId),
      onInfoOpen: (content, label) => {
        infoPanelContent.value = content;
        infoPanelLabel.value = label;
        infoPanelOpen.value = true;
        emit("infoOpen", content, label);
      }
    });
    const { preloadNeighbours } = usePreloader();
    watch(
      () => props.scene.id,
      async () => {
        await switchScene(props.scene);
        preloadNeighbours(props.scene, props.tour.scenes);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-[calc(62vh-52px)] w-full overflow-hidden bg-ink lg:h-[calc(100vh-52px)]" }, _attrs))} data-v-8670fe78><div class="h-full w-full" data-v-8670fe78></div>`);
      if (unref(isLoading) && !unref(errorMessage)) {
        _push(`<div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-ink/75 backdrop-blur-sm" data-v-8670fe78><div class="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-river" data-v-8670fe78></div><p class="mt-3 text-xs font-semibold text-white/60" data-v-8670fe78>Đang tải panorama…</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(errorMessage)) {
        _push(`<div class="pointer-events-none absolute inset-0 grid place-items-center bg-ink/90 px-6 text-center" data-v-8670fe78><div data-v-8670fe78><p class="text-sm font-semibold text-white" data-v-8670fe78>Không thể tải ảnh</p><p class="mt-2 max-w-md text-xs leading-5 text-white/60" data-v-8670fe78>${ssrInterpolate(unref(errorMessage))}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (infoPanelOpen.value) {
        _push(`<div class="absolute bottom-0 left-0 right-0 rounded-t-2xl bg-ink/95 px-6 pb-8 pt-5 shadow-panel backdrop-blur-sm" data-v-8670fe78><div class="mb-3 flex items-start justify-between gap-4" data-v-8670fe78><p class="text-sm font-semibold text-white" data-v-8670fe78>${ssrInterpolate(infoPanelLabel.value)}</p><button class="text-white/50 hover:text-white transition-colors" aria-label="Đóng" data-v-8670fe78>✕</button></div><p class="text-sm leading-6 text-white/70 whitespace-pre-line" data-v-8670fe78>${ssrInterpolate(infoPanelContent.value)}</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Viewer360.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8670fe78"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/tours/trang-bay",
      "$1cxjKEGR5E"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const tour = computed(() => data.value?.item);
    const scenes = computed(() => tour.value?.scenes ?? []);
    const activeSceneId = ref("");
    const activeScene = computed(
      () => scenes.value.find((s) => s.id === activeSceneId.value) ?? scenes.value[0]
    );
    watch(scenes, (val) => {
      if (val.length && !activeSceneId.value) {
        const preferredId = tour.value?.initialSceneId;
        const exists = preferredId && val.some((s) => s.id === preferredId);
        activeSceneId.value = exists ? preferredId : val[0].id;
      }
    }, { immediate: true });
    const themeName = computed(() => tour.value?.theme ?? "nature");
    const NatureSidebar = _sfc_main$3;
    const MinimalSidebar = _sfc_main$2;
    const themeSidebar = computed(
      () => themeName.value === "minimal" ? MinimalSidebar : NatureSidebar
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Viewer360 = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-ink" }, _attrs))}>`);
      if (unref(pending)) {
        _push(`<div class="grid min-h-screen place-items-center"><div class="text-center"><div class="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-river"></div><p class="text-sm text-white/50">Đang tải trải nghiệm 360°…</p></div></div>`);
      } else if (unref(error) || !tour.value || !activeScene.value) {
        _push(`<div class="grid min-h-screen place-items-center px-6 text-center"><div><h1 class="text-2xl font-semibold text-white">Không thể tải nội dung</h1><p class="mt-2 text-sm text-white/50">API server không trả về dữ liệu tour.</p></div></div>`);
      } else {
        _push(`<div class="flex min-h-screen flex-col lg:flex-row">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(themeSidebar.value), {
          tour: tour.value,
          "active-scene": activeScene.value,
          class: "lg:order-1"
        }, null), _parent);
        _push(`<section class="order-1 flex min-h-[62vh] flex-1 flex-col bg-ink lg:order-2 lg:h-screen"><div class="flex items-center justify-between border-b border-white/8 bg-ink/95 px-4 py-3 backdrop-blur-sm lg:px-6"><div class="min-w-0"><p class="truncate text-sm font-semibold text-white">${ssrInterpolate(activeScene.value.title)}</p><p class="truncate text-xs text-white/45">${ssrInterpolate(activeScene.value.subtitle)}</p></div><div class="ml-4 flex items-center gap-1.5 rounded-full bg-white/8 px-3 py-1.5 text-[11px] font-medium text-white/60 ring-1 ring-white/10"><span class="text-sm">🖱️</span> Kéo để xoay </div></div>`);
        _push(ssrRenderComponent(_component_Viewer360, {
          tour: tour.value,
          scene: activeScene.value,
          onNavigate: ($event) => activeSceneId.value = $event
        }, null, _parent));
        _push(`</section></div>`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Bn8DKTE3.js.map
