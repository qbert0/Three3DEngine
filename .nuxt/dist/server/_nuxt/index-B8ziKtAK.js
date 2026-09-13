import { _ as __nuxt_component_0 } from "./nuxt-link-BQsFDeBo.js";
import { defineComponent, withAsyncContext, computed, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs";
import { u as useFetch } from "./fetch-DKKvSd4U.js";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unctx/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/defu/dist/defu.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/tours",
      "$94m-C4-3my"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const tours = computed(() => data.value?.items ?? []);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-ink px-6 py-10 text-white" }, _attrs))}><div class="mx-auto max-w-4xl"><div class="mb-8 flex items-end justify-between"><div><p class="text-[11px] font-bold uppercase tracking-[0.22em] text-river">Admin</p><h1 class="mt-1 text-3xl font-bold">Tour Manager</h1><p class="mt-1 text-sm text-white/50">Quản lý và chỉnh sửa các tour 360°</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "rounded-lg border border-white/15 px-4 py-2 text-sm text-white/60 hover:border-white/30 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ← Xem tour `);
          } else {
            return [
              createTextVNode(" ← Xem tour ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(tours).length) {
        _push(`<div class="grid gap-4 sm:grid-cols-2"><!--[-->`);
        ssrRenderList(unref(tours), (tour) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: tour.slug,
            to: `/admin/${tour.slug}`,
            class: "group block rounded-xl border border-white/10 bg-white/5 p-5 hover:border-river/50 hover:bg-white/8 transition-all"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-start justify-between gap-3"${_scopeId}><div${_scopeId}><p class="font-semibold text-white group-hover:text-river transition-colors"${_scopeId}>${ssrInterpolate(tour.title)}</p><p class="mt-0.5 text-xs text-white/45"${_scopeId}>${ssrInterpolate(tour.location)}</p></div><span class="shrink-0 rounded-full bg-white/8 px-2.5 py-0.5 text-xs text-white/50"${_scopeId}>${ssrInterpolate(tour.sceneCount)} cảnh </span></div><p class="mt-3 text-xs leading-5 text-white/40 line-clamp-2"${_scopeId}>${ssrInterpolate(tour.summary)}</p><div class="mt-4 flex items-center gap-2"${_scopeId}><span class="rounded bg-river/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-river"${_scopeId}>${ssrInterpolate(tour.theme ?? "default")}</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-start justify-between gap-3" }, [
                    createVNode("div", null, [
                      createVNode("p", { class: "font-semibold text-white group-hover:text-river transition-colors" }, toDisplayString(tour.title), 1),
                      createVNode("p", { class: "mt-0.5 text-xs text-white/45" }, toDisplayString(tour.location), 1)
                    ]),
                    createVNode("span", { class: "shrink-0 rounded-full bg-white/8 px-2.5 py-0.5 text-xs text-white/50" }, toDisplayString(tour.sceneCount) + " cảnh ", 1)
                  ]),
                  createVNode("p", { class: "mt-3 text-xs leading-5 text-white/40 line-clamp-2" }, toDisplayString(tour.summary), 1),
                  createVNode("div", { class: "mt-4 flex items-center gap-2" }, [
                    createVNode("span", { class: "rounded bg-river/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-river" }, toDisplayString(tour.theme ?? "default"), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="rounded-xl border border-white/10 p-12 text-center text-white/40"><p class="text-lg">Không có tour nào</p><p class="mt-1 text-sm">Thêm file .yaml vào thư mục /tours để bắt đầu.</p></div>`);
      }
      _push(`<p class="mt-8 text-xs text-white/25"> Admin UI — chỉ hoạt động khi <code class="text-white/40">ENABLE_ADMIN=true</code></p></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-B8ziKtAK.js.map
