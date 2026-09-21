import { _ as _sfc_main$1 } from "./Skeleton-BO-0Zy5d.js";
import { _ as _sfc_main$2 } from "./EmptyState-CYLOXev5.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-B0iADLum.js";
import { _ as _sfc_main$3 } from "./Button-CeBG5qKU.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./Card-DyuK0OPG.js";
import { defineComponent, computed, withAsyncContext, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs";
import { u as useRoute } from "../server.mjs";
import { u as useFetch } from "./fetch-BMHjmZvY.js";
import { u as useHead } from "./v3-vl98-hf4.js";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ufo/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/defu/dist/defu.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unctx/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/h3/dist/index.mjs";
import "pinia";
import "vue-router";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/klona/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/perfect-debounce/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[tourId]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const tourId = computed(() => route.params.tourId);
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      computed(() => `/api/tours/${tourId.value}`),
      "$yWH9_lP9hL"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const tour = computed(() => data.value?.item);
    const scenes = computed(() => tour.value?.scenes ?? []);
    useHead({
      title: computed(() => tour.value ? `${tour.value.title} — View360` : "Tour — View360"),
      meta: [
        { name: "description", content: computed(() => tour.value?.summary ?? "") }
      ]
    });
    const totalMarkers = computed(
      () => scenes.value.reduce((n, s) => n + (s.markers?.length ?? 0), 0)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSkeleton = _sfc_main$1;
      const _component_UiEmptyState = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiButton = _sfc_main$3;
      const _component_UiBadge = _sfc_main$4;
      const _component_UiCard = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(pending)) {
        _push(`<div class="mx-auto max-w-4xl px-6 py-16">`);
        _push(ssrRenderComponent(_component_UiSkeleton, {
          height: "40",
          width: "60%",
          rounded: "sm",
          class: "mb-4"
        }, null, _parent));
        _push(ssrRenderComponent(_component_UiSkeleton, {
          height: "16",
          lines: 3
        }, null, _parent));
        _push(`<div class="mt-8 grid grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(3, (i) => {
          _push(ssrRenderComponent(_component_UiSkeleton, {
            key: i,
            height: "140",
            rounded: "md"
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else if (unref(error) || !unref(tour)) {
        _push(`<div class="py-24">`);
        _push(ssrRenderComponent(_component_UiEmptyState, {
          icon: "🗺️",
          title: "Không tìm thấy tour",
          description: `Tour '${unref(tourId)}' không tồn tại.`
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
        _push(`<!--[--><div class="relative overflow-hidden bg-ink"><div class="absolute inset-0"><img${ssrRenderAttr("src", unref(scenes)[0]?.thumbnail)}${ssrRenderAttr("alt", unref(tour).title)} class="h-full w-full object-cover opacity-40"><div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent"></div></div><div class="relative mx-auto max-w-4xl px-6 pb-16 pt-20"><div class="mb-3 flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "text-xs text-white/50 hover:text-white/80 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Trang chủ`);
            } else {
              return [
                createTextVNode("Trang chủ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="text-white/30">/</span><span class="text-xs text-white/50">${ssrInterpolate(unref(tour).location)}</span></div><div class="flex flex-wrap items-center gap-3 mb-3">`);
        _push(ssrRenderComponent(_component_UiBadge, {
          variant: "primary",
          pill: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(tour).theme ?? "nature")}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(tour).theme ?? "nature"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiBadge, { variant: "muted" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(scenes).length)} cảnh`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(scenes).length) + " cảnh", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(tour).duration) {
          _push(ssrRenderComponent(_component_UiBadge, { variant: "muted" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(tour).duration)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(tour).duration), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h1 class="text-4xl font-bold text-white leading-tight">${ssrInterpolate(unref(tour).title)}</h1><p class="mt-3 max-w-2xl text-base text-white/70 leading-relaxed">${ssrInterpolate(unref(tour).summary)}</p><div class="mt-8 flex flex-wrap gap-3">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/experience/${unref(tourId)}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiButton, {
                size: "lg",
                variant: "primary"
              }, {
                "icon-leading": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><circle cx="12" cy="12" r="10"${_scopeId2}></circle><polygon points="10 8 16 12 10 16 10 8"${_scopeId2}></polygon></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        createVNode("circle", {
                          cx: "12",
                          cy: "12",
                          r: "10"
                        }),
                        createVNode("polygon", { points: "10 8 16 12 10 16 10 8" })
                      ]))
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Bắt đầu khám phá `);
                  } else {
                    return [
                      createTextVNode(" Bắt đầu khám phá ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiButton, {
                  size: "lg",
                  variant: "primary"
                }, {
                  "icon-leading": withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10"
                      }),
                      createVNode("polygon", { points: "10 8 16 12 10 16 10 8" })
                    ]))
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" Bắt đầu khám phá ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiButton, {
                size: "lg",
                variant: "ghost",
                class: "!text-white/70 hover:!text-white hover:!bg-white/10"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` ← Quay lại `);
                  } else {
                    return [
                      createTextVNode(" ← Quay lại ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiButton, {
                  size: "lg",
                  variant: "ghost",
                  class: "!text-white/70 hover:!text-white hover:!bg-white/10"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" ← Quay lại ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div class="border-b border-[--ui-color-border] bg-[--ui-color-surface]"><div class="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-[--ui-color-border] px-6"><div class="py-5 text-center"><p class="text-2xl font-bold text-[--ui-color-text-primary]">${ssrInterpolate(unref(scenes).length)}</p><p class="mt-0.5 text-xs text-[--ui-color-text-muted]">Điểm nhìn 360°</p></div><div class="py-5 text-center"><p class="text-2xl font-bold text-[--ui-color-text-primary]">${ssrInterpolate(unref(totalMarkers))}</p><p class="mt-0.5 text-xs text-[--ui-color-text-muted]">Điểm tương tác</p></div><div class="py-5 text-center"><p class="text-2xl font-bold text-[--ui-color-text-primary]">${ssrInterpolate(unref(tour).duration ?? "~5 phút")}</p><p class="mt-0.5 text-xs text-[--ui-color-text-muted]">Thời lượng</p></div></div></div><div class="mx-auto max-w-4xl px-6 py-10"><h2 class="mb-5 text-lg font-bold text-[--ui-color-text-primary]">Các điểm trong tour</h2><div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(scenes), (scene, i) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: scene.id,
            to: `/experience/${unref(tourId)}?scene=${scene.id}`,
            class: "group block"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UiCard, {
                  variant: "surface",
                  padding: "none",
                  hoverable: true,
                  class: "overflow-hidden"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="relative overflow-hidden"${_scopeId2}><img${ssrRenderAttr("src", scene.thumbnail)}${ssrRenderAttr("alt", scene.title)} class="h-36 w-full object-cover transition duration-300 group-hover:scale-105"${_scopeId2}><div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"${_scopeId2}></div>`);
                      _push3(ssrRenderComponent(_component_UiBadge, {
                        variant: "default",
                        size: "sm",
                        class: "absolute left-2 top-2 !bg-black/50 !text-white !ring-white/10"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(String(i + 1).padStart(2, "0"))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(String(i + 1).padStart(2, "0")), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div><div class="p-3"${_scopeId2}><p class="font-semibold text-sm text-[--ui-color-text-primary] group-hover:text-[--ui-color-brand] transition-colors"${_scopeId2}>${ssrInterpolate(scene.title)}</p><p class="mt-0.5 text-xs text-[--ui-color-text-muted]"${_scopeId2}>${ssrInterpolate(scene.subtitle)}</p><div class="mt-2 flex flex-wrap gap-1"${_scopeId2}>`);
                      if (scene.markers?.filter((m) => m.plugin === "navigation").length) {
                        _push3(ssrRenderComponent(_component_UiBadge, {
                          variant: "primary",
                          size: "sm"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` ↑ ${ssrInterpolate(scene.markers.filter((m) => m.plugin === "navigation").length)} nav `);
                            } else {
                              return [
                                createTextVNode(" ↑ " + toDisplayString(scene.markers.filter((m) => m.plugin === "navigation").length) + " nav ", 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (scene.markers?.filter((m) => m.plugin === "info").length) {
                        _push3(ssrRenderComponent(_component_UiBadge, {
                          variant: "warning",
                          size: "sm"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` ⓘ ${ssrInterpolate(scene.markers.filter((m) => m.plugin === "info").length)} info `);
                            } else {
                              return [
                                createTextVNode(" ⓘ " + toDisplayString(scene.markers.filter((m) => m.plugin === "info").length) + " info ", 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "relative overflow-hidden" }, [
                          createVNode("img", {
                            src: scene.thumbnail,
                            alt: scene.title,
                            class: "h-36 w-full object-cover transition duration-300 group-hover:scale-105"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
                          createVNode(_component_UiBadge, {
                            variant: "default",
                            size: "sm",
                            class: "absolute left-2 top-2 !bg-black/50 !text-white !ring-white/10"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(String(i + 1).padStart(2, "0")), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("div", { class: "p-3" }, [
                          createVNode("p", { class: "font-semibold text-sm text-[--ui-color-text-primary] group-hover:text-[--ui-color-brand] transition-colors" }, toDisplayString(scene.title), 1),
                          createVNode("p", { class: "mt-0.5 text-xs text-[--ui-color-text-muted]" }, toDisplayString(scene.subtitle), 1),
                          createVNode("div", { class: "mt-2 flex flex-wrap gap-1" }, [
                            scene.markers?.filter((m) => m.plugin === "navigation").length ? (openBlock(), createBlock(_component_UiBadge, {
                              key: 0,
                              variant: "primary",
                              size: "sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" ↑ " + toDisplayString(scene.markers.filter((m) => m.plugin === "navigation").length) + " nav ", 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            scene.markers?.filter((m) => m.plugin === "info").length ? (openBlock(), createBlock(_component_UiBadge, {
                              key: 1,
                              variant: "warning",
                              size: "sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" ⓘ " + toDisplayString(scene.markers.filter((m) => m.plugin === "info").length) + " info ", 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UiCard, {
                    variant: "surface",
                    padding: "none",
                    hoverable: true,
                    class: "overflow-hidden"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative overflow-hidden" }, [
                        createVNode("img", {
                          src: scene.thumbnail,
                          alt: scene.title,
                          class: "h-36 w-full object-cover transition duration-300 group-hover:scale-105"
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
                        createVNode(_component_UiBadge, {
                          variant: "default",
                          size: "sm",
                          class: "absolute left-2 top-2 !bg-black/50 !text-white !ring-white/10"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(String(i + 1).padStart(2, "0")), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode("div", { class: "p-3" }, [
                        createVNode("p", { class: "font-semibold text-sm text-[--ui-color-text-primary] group-hover:text-[--ui-color-brand] transition-colors" }, toDisplayString(scene.title), 1),
                        createVNode("p", { class: "mt-0.5 text-xs text-[--ui-color-text-muted]" }, toDisplayString(scene.subtitle), 1),
                        createVNode("div", { class: "mt-2 flex flex-wrap gap-1" }, [
                          scene.markers?.filter((m) => m.plugin === "navigation").length ? (openBlock(), createBlock(_component_UiBadge, {
                            key: 0,
                            variant: "primary",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" ↑ " + toDisplayString(scene.markers.filter((m) => m.plugin === "navigation").length) + " nav ", 1)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          scene.markers?.filter((m) => m.plugin === "info").length ? (openBlock(), createBlock(_component_UiBadge, {
                            key: 1,
                            variant: "warning",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" ⓘ " + toDisplayString(scene.markers.filter((m) => m.plugin === "info").length) + " info ", 1)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tours/[tourId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_tourId_-O5trug1u.js.map
