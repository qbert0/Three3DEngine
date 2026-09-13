import { _ as __nuxt_component_0 } from "./nuxt-link-BQsFDeBo.js";
import { defineComponent, withAsyncContext, computed, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import "./index.module-CqWmqBTO.js";
import "js-yaml";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs";
import { u as useRoute } from "../server.mjs";
import { u as useFetch } from "./fetch-DKKvSd4U.js";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ufo/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/defu/dist/defu.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unctx/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[sceneId]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const sceneId = route.params.sceneId;
    const { data, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/tours/${slug}`,
      "$YBMUQN6emw"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const tour = computed(() => data.value?.item);
    const scene = computed(
      () => tour.value?.scenes.find((s) => s.id === sceneId)
    );
    const otherScenes = computed(
      () => tour.value?.scenes.filter((s) => s.id !== sceneId) ?? []
    );
    const localMarkers = ref([]);
    watch(scene, (s) => {
      if (s) localMarkers.value = JSON.parse(JSON.stringify(s.markers));
    }, { immediate: true });
    const addMode = ref("view");
    ref(null);
    const selectedId = ref(null);
    const selectedMarker = computed(
      () => localMarkers.value.find((m) => m.id === selectedId.value) ?? null
    );
    const editLabel = ref("");
    const editTargetScene = ref("");
    const editContent = ref("");
    const editYaw = ref(0);
    const editPitch = ref(0);
    watch(selectedMarker, (m) => {
      if (!m) return;
      editLabel.value = m.label;
      editYaw.value = m.yaw;
      editPitch.value = m.pitch;
      editTargetScene.value = m.plugin === "navigation" ? m.targetScene : "";
      editContent.value = m.plugin === "info" ? m.content : "";
    });
    function syncMarkersToViewer() {
      return;
    }
    watch(localMarkers, syncMarkersToViewer, { deep: true });
    const saving = ref(false);
    const saveMsg = ref("");
    let saveTimer = null;
    watch(
      localMarkers,
      () => {
        if (saveTimer) clearTimeout(saveTimer);
        saveTimer = setTimeout(saveToServer, 1500);
      },
      { deep: true }
    );
    async function saveToServer() {
      if (!tour.value) return;
      saving.value = true;
      saveMsg.value = "";
      try {
        const res = await $fetch(
          `/api/admin/tours/${slug}/scenes/${sceneId}/markers`,
          {
            method: "POST",
            body: { markers: localMarkers.value }
          }
        );
        if (res.tour) {
          data.value = { item: res.tour };
        }
        saveMsg.value = "✓ Đã lưu";
      } catch (err) {
        saveMsg.value = `✗ ${err?.statusMessage ?? "Lỗi lưu file"}`;
      } finally {
        saving.value = false;
        setTimeout(() => {
          saveMsg.value = "";
        }, 2500);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex h-screen overflow-hidden bg-[#0d0d0d] text-white" }, _attrs))}><aside class="flex h-full w-[290px] shrink-0 flex-col border-r border-white/8 bg-ink"><div class="border-b border-white/8 px-5 py-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/${unref(slug)}`,
        class: "text-xs text-white/40 hover:text-white/70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ← ${ssrInterpolate(tour.value?.title)}`);
          } else {
            return [
              createTextVNode(" ← " + toDisplayString(tour.value?.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="mt-1.5 text-sm font-bold leading-snug text-white">${ssrInterpolate(scene.value?.title)}</h1><p class="mt-0.5 text-xs text-white/40">${ssrInterpolate(localMarkers.value.length)} marker</p></div><div class="border-b border-white/8 px-4 py-3"><p class="mb-2 text-[10px] font-bold uppercase tracking-widest text-white/30">Thêm marker</p><div class="flex gap-2"><button class="${ssrRenderClass([addMode.value === "add-navigation" ? "border-river bg-river/20 text-river" : "border-white/15 text-white/50 hover:border-river/50 hover:text-white/80", "flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-xs font-semibold transition-all"])}"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 3 L12 17"${ssrRenderAttr("stroke", addMode.value === "add-navigation" ? "currentColor" : "#6b7280")} stroke-width="2.5" stroke-linecap="round"></path><path d="M6 10 L12 4 L18 10"${ssrRenderAttr("stroke", addMode.value === "add-navigation" ? "currentColor" : "#6b7280")} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> Navigation </button><button class="${ssrRenderClass([addMode.value === "add-info" ? "border-clay bg-clay/20 text-clay" : "border-white/15 text-white/50 hover:border-clay/50 hover:text-white/80", "flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-xs font-semibold transition-all"])}"><svg width="14" height="14" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="4.5" r="1.5"${ssrRenderAttr("fill", addMode.value === "add-info" ? "currentColor" : "#6b7280")}></circle><path d="M9 7.5 L9 13.5"${ssrRenderAttr("stroke", addMode.value === "add-info" ? "currentColor" : "#6b7280")} stroke-width="2.2" stroke-linecap="round"></path></svg> Info </button></div>`);
      if (addMode.value !== "view") {
        _push(`<p class="${ssrRenderClass([addMode.value === "add-navigation" ? "bg-river/10 text-river" : "bg-clay/10 text-clay", "mt-2 rounded-lg px-2 py-1.5 text-[11px] text-center font-medium"])}">${ssrInterpolate(addMode.value === "add-navigation" ? "↑ Nhấn vào ảnh để đặt marker điều hướng" : "ⓘ Nhấn vào ảnh để đặt marker thông tin")}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex-1 overflow-y-auto px-3 py-3">`);
      if (!localMarkers.value.length) {
        _push(`<p class="px-1 py-4 text-center text-xs italic text-white/30"> Chưa có marker nào.<br>Dùng nút ở trên rồi nhấn vào ảnh để thêm. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-1.5"><!--[-->`);
      ssrRenderList(localMarkers.value, (m) => {
        _push(`<div class="${ssrRenderClass([selectedId.value === m.id ? m.plugin === "navigation" ? "border-river/60 bg-river/10" : "border-clay/60 bg-clay/10" : "border-white/8 bg-white/3 hover:border-white/20", "group flex items-center gap-2 rounded-lg border px-3 py-2.5 cursor-pointer transition-all"])}"><div class="${ssrRenderClass([m.plugin === "navigation" ? "bg-river/25" : "bg-clay/25", "grid h-7 w-7 shrink-0 place-items-center rounded-full"])}">`);
        if (m.plugin === "navigation") {
          _push(`<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 4 L12 17" stroke="#1f6f8b" stroke-width="2.5" stroke-linecap="round"></path><path d="M7 10 L12 5 L17 10" stroke="#1f6f8b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
        } else {
          _push(`<svg width="10" height="12" viewBox="0 0 14 16" fill="none"><circle cx="7" cy="3" r="1.4" fill="#a8583f"></circle><path d="M7 6 L7 13" stroke="#a8583f" stroke-width="2" stroke-linecap="round"></path></svg>`);
        }
        _push(`</div><div class="min-w-0 flex-1"><p class="truncate text-xs font-semibold text-white">${ssrInterpolate(m.label)}</p><p class="text-[10px] text-white/35"> yaw ${ssrInterpolate(m.yaw.toFixed(2))} · pitch ${ssrInterpolate(m.pitch.toFixed(2))}</p></div><button class="${ssrRenderClass([selectedId.value === m.id ? "opacity-100" : "", "shrink-0 rounded p-1 text-white/30 opacity-0 hover:text-clay group-hover:opacity-100 transition-all"])}" title="Xoá marker">✕</button></div>`);
      });
      _push(`<!--]--></div></div><div class="border-t border-white/8 px-4 py-4 space-y-2"><div class="flex items-center gap-2 rounded-lg bg-white/4 px-3 py-2">`);
      if (saving.value) {
        _push(`<span class="h-2 w-2 rounded-full bg-river animate-pulse shrink-0"></span>`);
      } else if (saveMsg.value.startsWith("✓")) {
        _push(`<span class="h-2 w-2 rounded-full bg-[#4caf50] shrink-0"></span>`);
      } else if (saveMsg.value.startsWith("✗")) {
        _push(`<span class="h-2 w-2 rounded-full bg-clay shrink-0"></span>`);
      } else {
        _push(`<span class="h-2 w-2 rounded-full bg-white/20 shrink-0"></span>`);
      }
      _push(`<p class="${ssrRenderClass([{
        "text-river": saving.value,
        "text-[#4caf50]": !saving.value && saveMsg.value.startsWith("✓"),
        "text-clay": !saving.value && saveMsg.value.startsWith("✗"),
        "text-white/35": !saving.value && !saveMsg.value
      }, "text-xs"])}">${ssrInterpolate(saving.value ? "Đang lưu…" : saveMsg.value || "Tự động lưu khi thay đổi")}</p></div><button class="w-full rounded-lg border border-white/15 px-4 py-2 text-xs text-white/55 hover:text-white hover:border-white/30 transition">📥 Xuất YAML</button></div></aside><div class="relative flex-1"><div class="h-full w-full"></div><div class="${ssrRenderClass([addMode.value === "view" ? "bg-ink/70 text-white/40 ring-white/10" : addMode.value === "add-navigation" ? "bg-river/20 text-river ring-river/40" : "bg-clay/20 text-clay ring-clay/40", "pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 text-xs backdrop-blur-sm ring-1 transition-all"])}">`);
      if (addMode.value === "view") {
        _push(`<span>🖱️ Kéo marker để di chuyển · Nhấn marker để chỉnh · Nhấn ảnh để bỏ chọn</span>`);
      } else if (addMode.value === "add-navigation") {
        _push(`<span>↑ Nhấn vào điểm trong ảnh để đặt marker Navigation</span>`);
      } else {
        _push(`<span>ⓘ Nhấn vào điểm trong ảnh để đặt marker Info</span>`);
      }
      _push(`</div>`);
      if (selectedMarker.value) {
        _push(`<div class="absolute bottom-0 left-0 right-0 rounded-t-2xl border-t border-white/10 bg-ink/97 px-5 pb-6 pt-4 backdrop-blur-md shadow-2xl"><div class="mb-4 flex items-center gap-3"><span class="${ssrRenderClass([selectedMarker.value.plugin === "navigation" ? "bg-river/20 text-river" : "bg-clay/20 text-clay", "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"])}">${ssrInterpolate(selectedMarker.value.plugin === "navigation" ? "↑ Navigation" : "ⓘ Info")}</span><h2 class="flex-1 text-sm font-semibold text-white">Chỉnh sửa Marker</h2><button class="text-white/40 hover:text-white text-sm">✕</button></div><div class="grid gap-3"><div><label class="mb-1 block text-[11px] text-white/50">Tên hiển thị</label><input${ssrRenderAttr("value", editLabel.value)} placeholder="Tên marker" class="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/25 focus:border-river focus:outline-none"></div><div class="flex gap-2"><div class="flex-1"><label class="mb-1 block text-[11px] text-white/50">Yaw (kéo để thay đổi)</label><div class="rounded-lg border border-white/8 bg-white/3 px-3 py-2 text-sm text-white/50 font-mono">${ssrInterpolate(editYaw.value.toFixed(3))}</div></div><div class="flex-1"><label class="mb-1 block text-[11px] text-white/50">Pitch (kéo để thay đổi)</label><div class="rounded-lg border border-white/8 bg-white/3 px-3 py-2 text-sm text-white/50 font-mono">${ssrInterpolate(editPitch.value.toFixed(3))}</div></div></div>`);
        if (selectedMarker.value.plugin === "navigation") {
          _push(`<div><label class="mb-1 block text-[11px] text-white/50">Cảnh đích</label><select class="w-full rounded-lg border border-white/15 bg-ink px-3 py-2 text-sm text-white focus:border-river focus:outline-none"><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(editTargetScene.value) ? ssrLooseContain(editTargetScene.value, "") : ssrLooseEqual(editTargetScene.value, "")) ? " selected" : ""}>Chọn cảnh đích...</option><!--[-->`);
          ssrRenderList(otherScenes.value, (s) => {
            _push(`<option${ssrRenderAttr("value", s.id)}${ssrIncludeBooleanAttr(Array.isArray(editTargetScene.value) ? ssrLooseContain(editTargetScene.value, s.id) : ssrLooseEqual(editTargetScene.value, s.id)) ? " selected" : ""}>${ssrInterpolate(s.title)}</option>`);
          });
          _push(`<!--]--></select></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedMarker.value.plugin === "info") {
          _push(`<div><label class="mb-1 block text-[11px] text-white/50">Nội dung thông tin</label><textarea rows="2" placeholder="Mô tả về địa điểm..." class="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/25 focus:border-clay focus:outline-none">${ssrInterpolate(editContent.value)}</textarea></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex gap-2 pt-1"><button class="${ssrRenderClass([selectedMarker.value.plugin === "navigation" ? "bg-river hover:bg-river/80 text-white" : "bg-clay hover:bg-clay/80 text-white", "flex-1 rounded-lg py-2.5 text-sm font-bold transition"])}">Lưu thay đổi</button><button class="rounded-lg border border-white/15 px-4 py-2.5 text-sm text-white/50 hover:border-clay/40 hover:text-clay transition">Xoá</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/[slug]/[sceneId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_sceneId_-DcabmLE5.js.map
