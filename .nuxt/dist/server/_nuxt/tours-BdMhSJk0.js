import { _ as __nuxt_component_0 } from "./nuxt-link-B0iADLum.js";
import { defineComponent, withAsyncContext, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-vl98-hf4.js";
import { u as useFetch } from "./fetch-BMHjmZvY.js";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unctx/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/h3/dist/index.mjs";
import "pinia";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/klona/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/@unhead/vue/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tours",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Tour 360° — Sông Vân Art Space",
      meta: [{ name: "description", content: "Khám phá không gian điêu khắc đá đương đại Sông Vân tại Ninh Bình qua panorama 360°." }]
    });
    const { data, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/tours",
      "$FGkX3yYjHq"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const tours = computed(() => data.value?.items ?? []);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container section" }, _attrs))}><div class="section-head"><div class="section-eyebrow">Khám phá</div><h1 class="section-title">Tour 360° Ảo</h1><p class="section-sub"> Dạo bước qua Sông Vân Art Space bằng ảnh panorama 360°. Khám phá sân tượng, xưởng đá và những khoảng trưng bày giữa làng nghề Ninh Vân. </p></div><div class="mb-8 flex items-center gap-3 rounded-xl bg-[--ui-color-brand-muted] border border-[--ui-color-brand]/20 p-4"><div class="text-xl">🌐</div><p class="text-sm text-[--ui-color-text-secondary]"><strong class="text-[--ui-color-text-primary]">Tip:</strong> Kéo chuột để xoay, cuộn để zoom. Nhấn các mũi tên xanh để di chuyển giữa các điểm tham quan. </p></div>`);
      if (unref(pending)) {
        _push(`<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(3, (i) => {
          _push(`<div class="rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] overflow-hidden"><div class="h-48 bg-[--ui-color-bg-muted] animate-pulse"></div><div class="p-5 space-y-3"><div class="h-4 w-3/4 rounded bg-[--ui-color-bg-muted] animate-pulse"></div><div class="h-3 rounded bg-[--ui-color-bg-muted] animate-pulse"></div><div class="h-3 w-1/2 rounded bg-[--ui-color-bg-muted] animate-pulse"></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (!unref(tours).length) {
        _push(`<div class="py-20 text-center"><div class="text-5xl mb-4">🗺️</div><p class="font-bold text-[--ui-color-text-primary]">Chưa có tour nào</p><p class="mt-2 text-sm text-[--ui-color-text-muted]">Thêm file .yaml vào thư mục /tours để bắt đầu.</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(tours), (tour) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: tour.slug,
            to: `/experience/${tour.slug}`,
            class: "group overflow-hidden rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] transition hover:shadow-xl hover:border-[--ui-color-brand]/30 hover:-translate-y-1"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative overflow-hidden aspect-video"${_scopeId}><img${ssrRenderAttr("src", tour.thumbnail)}${ssrRenderAttr("alt", tour.title)} class="h-full w-full object-cover transition duration-500 group-hover:scale-105"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"${_scopeId}></div><div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"${_scopeId}><div class="grid h-12 w-12 place-items-center rounded-full bg-white/25 backdrop-blur-sm border border-white/40"${_scopeId}><svg width="18" height="18" viewBox="0 0 24 24" fill="white"${_scopeId}><polygon points="5 3 19 12 5 21 5 3"${_scopeId}></polygon></svg></div></div><div class="absolute bottom-3 left-3 flex flex-wrap gap-1.5"${_scopeId}><span class="rounded-full bg-black/50 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm"${_scopeId}>360°</span>`);
                if (tour.duration) {
                  _push2(`<span class="rounded-full bg-black/50 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm"${_scopeId}>${ssrInterpolate(tour.duration)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><div class="p-5"${_scopeId}><div class="flex items-start justify-between gap-2"${_scopeId}><div class="min-w-0"${_scopeId}><h3 class="font-bold text-[--ui-color-text-primary] leading-tight truncate"${_scopeId}>${ssrInterpolate(tour.title)}</h3><p class="mt-0.5 text-xs text-[--ui-color-text-muted] flex items-center gap-1"${_scopeId}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"${_scopeId}></path><circle cx="12" cy="10" r="3"${_scopeId}></circle></svg> ${ssrInterpolate(tour.location || "Nam Hoa Lư, Ninh Bình")}</p></div></div><p class="mt-3 text-xs text-[--ui-color-text-muted] leading-relaxed line-clamp-2"${_scopeId}>${ssrInterpolate(tour.summary)}</p><div class="mt-4 flex items-center justify-between"${_scopeId}><span class="text-xs font-semibold text-[--ui-color-brand]"${_scopeId}>Miễn phí xem ảo</span><span class="text-xs text-[--ui-color-text-muted] group-hover:text-[--ui-color-brand] transition flex items-center gap-1"${_scopeId}> Trải nghiệm ngay <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="m9 18 6-6-6-6"${_scopeId}></path></svg></span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "relative overflow-hidden aspect-video" }, [
                    createVNode("img", {
                      src: tour.thumbnail,
                      alt: tour.title,
                      class: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
                    createVNode("div", { class: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300" }, [
                      createVNode("div", { class: "grid h-12 w-12 place-items-center rounded-full bg-white/25 backdrop-blur-sm border border-white/40" }, [
                        (openBlock(), createBlock("svg", {
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          fill: "white"
                        }, [
                          createVNode("polygon", { points: "5 3 19 12 5 21 5 3" })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "absolute bottom-3 left-3 flex flex-wrap gap-1.5" }, [
                      createVNode("span", { class: "rounded-full bg-black/50 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm" }, "360°"),
                      tour.duration ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "rounded-full bg-black/50 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm"
                      }, toDisplayString(tour.duration), 1)) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "p-5" }, [
                    createVNode("div", { class: "flex items-start justify-between gap-2" }, [
                      createVNode("div", { class: "min-w-0" }, [
                        createVNode("h3", { class: "font-bold text-[--ui-color-text-primary] leading-tight truncate" }, toDisplayString(tour.title), 1),
                        createVNode("p", { class: "mt-0.5 text-xs text-[--ui-color-text-muted] flex items-center gap-1" }, [
                          (openBlock(), createBlock("svg", {
                            width: "10",
                            height: "10",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }, [
                            createVNode("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }),
                            createVNode("circle", {
                              cx: "12",
                              cy: "10",
                              r: "3"
                            })
                          ])),
                          createTextVNode(" " + toDisplayString(tour.location || "Nam Hoa Lư, Ninh Bình"), 1)
                        ])
                      ])
                    ]),
                    createVNode("p", { class: "mt-3 text-xs text-[--ui-color-text-muted] leading-relaxed line-clamp-2" }, toDisplayString(tour.summary), 1),
                    createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                      createVNode("span", { class: "text-xs font-semibold text-[--ui-color-brand]" }, "Miễn phí xem ảo"),
                      createVNode("span", { class: "text-xs text-[--ui-color-text-muted] group-hover:text-[--ui-color-brand] transition flex items-center gap-1" }, [
                        createTextVNode(" Trải nghiệm ngay "),
                        (openBlock(), createBlock("svg", {
                          width: "12",
                          height: "12",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, [
                          createVNode("path", { d: "m9 18 6-6-6-6" })
                        ]))
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tours.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=tours-BdMhSJk0.js.map
