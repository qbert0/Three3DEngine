import { _ as __nuxt_component_0 } from './nuxt-link-BQsFDeBo.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/tours/${slug}`,
      "$pAVK-PtWZM"
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
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-ink px-6 py-10 text-white" }, _attrs))}><div class="mx-auto max-w-5xl"><div class="mb-8 flex items-end justify-between"><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: "text-xs text-white/40 hover:text-white/70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2190 Danh s\xE1ch tour`);
          } else {
            return [
              createTextVNode("\u2190 Danh s\xE1ch tour")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="mt-2 text-2xl font-bold">${ssrInterpolate((_a = unref(tour)) == null ? void 0 : _a.title)}</h1><p class="text-sm text-white/40">${ssrInterpolate(unref(scenes).length)} c\u1EA3nh \xB7 ${ssrInterpolate((_b = unref(tour)) == null ? void 0 : _b.location)}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/${unref(slug)}`,
        class: "rounded-lg border border-white/15 px-4 py-2 text-sm text-white/60 hover:text-white transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Xem tour \u2192 `);
          } else {
            return [
              createTextVNode(" Xem tour \u2192 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-3"><!--[-->`);
      ssrRenderList(unref(scenes), (scene, index) => {
        _push(`<div class="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:border-river/40 transition-all"><span class="w-7 shrink-0 text-center text-sm font-bold text-white/25">${ssrInterpolate(String(index + 1).padStart(2, "0"))}</span><img${ssrRenderAttr("src", scene.thumbnail)}${ssrRenderAttr("alt", scene.title)} class="h-16 w-28 shrink-0 rounded-lg object-cover"><div class="min-w-0 flex-1"><p class="font-semibold text-white">${ssrInterpolate(scene.title)}</p><p class="mt-0.5 text-xs text-white/45">${ssrInterpolate(scene.subtitle)}</p><div class="mt-2 flex flex-wrap gap-1.5"><!--[-->`);
        ssrRenderList(scene.markers, (marker) => {
          _push(`<span class="${ssrRenderClass([{
            "bg-river/20 text-river": marker.plugin === "navigation",
            "bg-clay/20 text-clay": marker.plugin === "info",
            "bg-moss/20 text-moss": marker.plugin === "audio"
          }, "rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"])}">${ssrInterpolate(marker.plugin)} \xB7 ${ssrInterpolate(marker.label)}</span>`);
        });
        _push(`<!--]--></div></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/${unref(slug)}/${scene.id}`,
          class: "shrink-0 rounded-lg border border-white/15 px-3 py-2 text-xs text-white/50 hover:border-river/50 hover:text-river transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Ch\u1EC9nh s\u1EEDa `);
            } else {
              return [
                createTextVNode(" Ch\u1EC9nh s\u1EEDa ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/[slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CuaQbRi9.mjs.map
