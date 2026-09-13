import { _ as __nuxt_component_0 } from './nuxt-link-BQsFDeBo.mjs';
import { defineComponent, withAsyncContext, computed, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { u as useRoute } from './server.mjs';
import { u as useFetch } from './fetch-DKKvSd4U.mjs';
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
    const tour = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.item;
    });
    const scene = computed(
      () => {
        var _a;
        return (_a = tour.value) == null ? void 0 : _a.scenes.find((s) => s.id === sceneId);
      }
    );
    const otherScenes = computed(
      () => {
        var _a, _b;
        return (_b = (_a = tour.value) == null ? void 0 : _a.scenes.filter((s) => s.id !== sceneId)) != null ? _b : [];
      }
    );
    const localMarkers = ref([]);
    watch(scene, (s) => {
      if (s) localMarkers.value = JSON.parse(JSON.stringify(s.markers));
    }, { immediate: true });
    const addMode = ref("view");
    ref(null);
    const selectedId = ref(null);
    const selectedMarker = computed(
      () => {
        var _a;
        return (_a = localMarkers.value.find((m) => m.id === selectedId.value)) != null ? _a : null;
      }
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
      var _a;
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
        saveMsg.value = "\u2713 \u0110\xE3 l\u01B0u";
      } catch (err) {
        saveMsg.value = `\u2717 ${(_a = err == null ? void 0 : err.statusMessage) != null ? _a : "L\u1ED7i l\u01B0u file"}`;
      } finally {
        saving.value = false;
        setTimeout(() => {
          saveMsg.value = "";
        }, 2500);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex h-screen overflow-hidden bg-[#0d0d0d] text-white" }, _attrs))}><aside class="flex h-full w-[290px] shrink-0 flex-col border-r border-white/8 bg-ink"><div class="border-b border-white/8 px-5 py-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/${unref(slug)}`,
        class: "text-xs text-white/40 hover:text-white/70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(` \u2190 ${ssrInterpolate((_a2 = tour.value) == null ? void 0 : _a2.title)}`);
          } else {
            return [
              createTextVNode(" \u2190 " + toDisplayString((_b = tour.value) == null ? void 0 : _b.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="mt-1.5 text-sm font-bold leading-snug text-white">${ssrInterpolate((_a = scene.value) == null ? void 0 : _a.title)}</h1><p class="mt-0.5 text-xs text-white/40">${ssrInterpolate(localMarkers.value.length)} marker</p></div><div class="border-b border-white/8 px-4 py-3"><p class="mb-2 text-[10px] font-bold uppercase tracking-widest text-white/30">Th\xEAm marker</p><div class="flex gap-2"><button class="${ssrRenderClass([addMode.value === "add-navigation" ? "border-river bg-river/20 text-river" : "border-white/15 text-white/50 hover:border-river/50 hover:text-white/80", "flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-xs font-semibold transition-all"])}"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 3 L12 17"${ssrRenderAttr("stroke", addMode.value === "add-navigation" ? "currentColor" : "#6b7280")} stroke-width="2.5" stroke-linecap="round"></path><path d="M6 10 L12 4 L18 10"${ssrRenderAttr("stroke", addMode.value === "add-navigation" ? "currentColor" : "#6b7280")} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> Navigation </button><button class="${ssrRenderClass([addMode.value === "add-info" ? "border-clay bg-clay/20 text-clay" : "border-white/15 text-white/50 hover:border-clay/50 hover:text-white/80", "flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-xs font-semibold transition-all"])}"><svg width="14" height="14" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="4.5" r="1.5"${ssrRenderAttr("fill", addMode.value === "add-info" ? "currentColor" : "#6b7280")}></circle><path d="M9 7.5 L9 13.5"${ssrRenderAttr("stroke", addMode.value === "add-info" ? "currentColor" : "#6b7280")} stroke-width="2.2" stroke-linecap="round"></path></svg> Info </button></div>`);
      if (addMode.value !== "view") {
        _push(`<p class="${ssrRenderClass([addMode.value === "add-navigation" ? "bg-river/10 text-river" : "bg-clay/10 text-clay", "mt-2 rounded-lg px-2 py-1.5 text-[11px] text-center font-medium"])}">${ssrInterpolate(addMode.value === "add-navigation" ? "\u2191 Nh\u1EA5n v\xE0o \u1EA3nh \u0111\u1EC3 \u0111\u1EB7t marker \u0111i\u1EC1u h\u01B0\u1EDBng" : "\u24D8 Nh\u1EA5n v\xE0o \u1EA3nh \u0111\u1EC3 \u0111\u1EB7t marker th\xF4ng tin")}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex-1 overflow-y-auto px-3 py-3">`);
      if (!localMarkers.value.length) {
        _push(`<p class="px-1 py-4 text-center text-xs italic text-white/30"> Ch\u01B0a c\xF3 marker n\xE0o.<br>D\xF9ng n\xFAt \u1EDF tr\xEAn r\u1ED3i nh\u1EA5n v\xE0o \u1EA3nh \u0111\u1EC3 th\xEAm. </p>`);
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
        _push(`</div><div class="min-w-0 flex-1"><p class="truncate text-xs font-semibold text-white">${ssrInterpolate(m.label)}</p><p class="text-[10px] text-white/35"> yaw ${ssrInterpolate(m.yaw.toFixed(2))} \xB7 pitch ${ssrInterpolate(m.pitch.toFixed(2))}</p></div><button class="${ssrRenderClass([selectedId.value === m.id ? "opacity-100" : "", "shrink-0 rounded p-1 text-white/30 opacity-0 hover:text-clay group-hover:opacity-100 transition-all"])}" title="Xo\xE1 marker">\u2715</button></div>`);
      });
      _push(`<!--]--></div></div><div class="border-t border-white/8 px-4 py-4 space-y-2"><div class="flex items-center gap-2 rounded-lg bg-white/4 px-3 py-2">`);
      if (saving.value) {
        _push(`<span class="h-2 w-2 rounded-full bg-river animate-pulse shrink-0"></span>`);
      } else if (saveMsg.value.startsWith("\u2713")) {
        _push(`<span class="h-2 w-2 rounded-full bg-[#4caf50] shrink-0"></span>`);
      } else if (saveMsg.value.startsWith("\u2717")) {
        _push(`<span class="h-2 w-2 rounded-full bg-clay shrink-0"></span>`);
      } else {
        _push(`<span class="h-2 w-2 rounded-full bg-white/20 shrink-0"></span>`);
      }
      _push(`<p class="${ssrRenderClass([{
        "text-river": saving.value,
        "text-[#4caf50]": !saving.value && saveMsg.value.startsWith("\u2713"),
        "text-clay": !saving.value && saveMsg.value.startsWith("\u2717"),
        "text-white/35": !saving.value && !saveMsg.value
      }, "text-xs"])}">${ssrInterpolate(saving.value ? "\u0110ang l\u01B0u\u2026" : saveMsg.value || "T\u1EF1 \u0111\u1ED9ng l\u01B0u khi thay \u0111\u1ED5i")}</p></div><button class="w-full rounded-lg border border-white/15 px-4 py-2 text-xs text-white/55 hover:text-white hover:border-white/30 transition">\u{1F4E5} Xu\u1EA5t YAML</button></div></aside><div class="relative flex-1"><div class="h-full w-full"></div><div class="${ssrRenderClass([addMode.value === "view" ? "bg-ink/70 text-white/40 ring-white/10" : addMode.value === "add-navigation" ? "bg-river/20 text-river ring-river/40" : "bg-clay/20 text-clay ring-clay/40", "pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 text-xs backdrop-blur-sm ring-1 transition-all"])}">`);
      if (addMode.value === "view") {
        _push(`<span>\u{1F5B1}\uFE0F K\xE9o marker \u0111\u1EC3 di chuy\u1EC3n \xB7 Nh\u1EA5n marker \u0111\u1EC3 ch\u1EC9nh \xB7 Nh\u1EA5n \u1EA3nh \u0111\u1EC3 b\u1ECF ch\u1ECDn</span>`);
      } else if (addMode.value === "add-navigation") {
        _push(`<span>\u2191 Nh\u1EA5n v\xE0o \u0111i\u1EC3m trong \u1EA3nh \u0111\u1EC3 \u0111\u1EB7t marker Navigation</span>`);
      } else {
        _push(`<span>\u24D8 Nh\u1EA5n v\xE0o \u0111i\u1EC3m trong \u1EA3nh \u0111\u1EC3 \u0111\u1EB7t marker Info</span>`);
      }
      _push(`</div>`);
      if (selectedMarker.value) {
        _push(`<div class="absolute bottom-0 left-0 right-0 rounded-t-2xl border-t border-white/10 bg-ink/97 px-5 pb-6 pt-4 backdrop-blur-md shadow-2xl"><div class="mb-4 flex items-center gap-3"><span class="${ssrRenderClass([selectedMarker.value.plugin === "navigation" ? "bg-river/20 text-river" : "bg-clay/20 text-clay", "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"])}">${ssrInterpolate(selectedMarker.value.plugin === "navigation" ? "\u2191 Navigation" : "\u24D8 Info")}</span><h2 class="flex-1 text-sm font-semibold text-white">Ch\u1EC9nh s\u1EEDa Marker</h2><button class="text-white/40 hover:text-white text-sm">\u2715</button></div><div class="grid gap-3"><div><label class="mb-1 block text-[11px] text-white/50">T\xEAn hi\u1EC3n th\u1ECB</label><input${ssrRenderAttr("value", editLabel.value)} placeholder="T\xEAn marker" class="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/25 focus:border-river focus:outline-none"></div><div class="flex gap-2"><div class="flex-1"><label class="mb-1 block text-[11px] text-white/50">Yaw (k\xE9o \u0111\u1EC3 thay \u0111\u1ED5i)</label><div class="rounded-lg border border-white/8 bg-white/3 px-3 py-2 text-sm text-white/50 font-mono">${ssrInterpolate(editYaw.value.toFixed(3))}</div></div><div class="flex-1"><label class="mb-1 block text-[11px] text-white/50">Pitch (k\xE9o \u0111\u1EC3 thay \u0111\u1ED5i)</label><div class="rounded-lg border border-white/8 bg-white/3 px-3 py-2 text-sm text-white/50 font-mono">${ssrInterpolate(editPitch.value.toFixed(3))}</div></div></div>`);
        if (selectedMarker.value.plugin === "navigation") {
          _push(`<div><label class="mb-1 block text-[11px] text-white/50">C\u1EA3nh \u0111\xEDch</label><select class="w-full rounded-lg border border-white/15 bg-ink px-3 py-2 text-sm text-white focus:border-river focus:outline-none"><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(editTargetScene.value) ? ssrLooseContain(editTargetScene.value, "") : ssrLooseEqual(editTargetScene.value, "")) ? " selected" : ""}>Ch\u1ECDn c\u1EA3nh \u0111\xEDch...</option><!--[-->`);
          ssrRenderList(otherScenes.value, (s) => {
            _push(`<option${ssrRenderAttr("value", s.id)}${ssrIncludeBooleanAttr(Array.isArray(editTargetScene.value) ? ssrLooseContain(editTargetScene.value, s.id) : ssrLooseEqual(editTargetScene.value, s.id)) ? " selected" : ""}>${ssrInterpolate(s.title)}</option>`);
          });
          _push(`<!--]--></select></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedMarker.value.plugin === "info") {
          _push(`<div><label class="mb-1 block text-[11px] text-white/50">N\u1ED9i dung th\xF4ng tin</label><textarea rows="2" placeholder="M\xF4 t\u1EA3 v\u1EC1 \u0111\u1ECBa \u0111i\u1EC3m..." class="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/25 focus:border-clay focus:outline-none">${ssrInterpolate(editContent.value)}</textarea></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex gap-2 pt-1"><button class="${ssrRenderClass([selectedMarker.value.plugin === "navigation" ? "bg-river hover:bg-river/80 text-white" : "bg-clay hover:bg-clay/80 text-white", "flex-1 rounded-lg py-2.5 text-sm font-bold transition"])}">L\u01B0u thay \u0111\u1ED5i</button><button class="rounded-lg border border-white/15 px-4 py-2.5 text-sm text-white/50 hover:border-clay/40 hover:text-clay transition">Xo\xE1</button></div></div></div>`);
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

export { _sfc_main as default };
//# sourceMappingURL=_sceneId_-DcabmLE5.mjs.map
