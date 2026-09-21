import { _ as __nuxt_component_0 } from "./nuxt-link-B0iADLum.js";
import { _ as _sfc_main$1 } from "./Button-CeBG5qKU.js";
import { a as _sfc_main$2, _ as _sfc_main$4 } from "./Card-DyuK0OPG.js";
import { _ as _sfc_main$3 } from "./Avatar-0HPRhFHn.js";
import { _ as _sfc_main$5 } from "./EmptyState-CYLOXev5.js";
import { defineComponent, withAsyncContext, computed, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/tours/${slug}`,
      "$pAVK-PtWZM"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const tour = computed(() => data.value?.item);
    const scenes = computed(() => tour.value?.scenes ?? []);
    useHead({ title: computed(() => `${tour.value?.title ?? slug} — Admin · View360`) });
    const markerCount = (scene, plugin) => plugin ? scene.markers?.filter((m) => m.plugin === plugin).length ?? 0 : scene.markers?.length ?? 0;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiButton = _sfc_main$1;
      const _component_UiCard = _sfc_main$2;
      const _component_UiAvatar = _sfc_main$3;
      const _component_UiBadge = _sfc_main$4;
      const _component_UiEmptyState = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[--ui-color-bg] font-[--ui-font-sans]" }, _attrs))}><div class="px-6 py-8"><div class="mb-6 flex items-center gap-2 text-sm">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: "text-[--ui-color-text-muted] hover:text-[--ui-color-text-primary] transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Admin`);
          } else {
            return [
              createTextVNode("Admin")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-[--ui-color-border-strong]">/</span><p class="font-semibold text-[--ui-color-text-primary] truncate">${ssrInterpolate(unref(tour)?.title ?? unref(slug))}</p><div class="ml-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/experience/${unref(slug)}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiButton, {
              variant: "ghost",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Xem tour →`);
                } else {
                  return [
                    createTextVNode("Xem tour →")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiButton, {
                variant: "ghost",
                size: "sm"
              }, {
                default: withCtx(() => [
                  createTextVNode("Xem tour →")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_UiCard, {
        variant: "surface",
        padding: "md",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiAvatar, {
              name: unref(tour)?.title ?? unref(slug),
              size: "xl",
              shape: "square"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex-1 min-w-0"${_scopeId}><div class="flex items-center gap-2 flex-wrap"${_scopeId}><h1 class="text-xl font-bold text-[--ui-color-text-primary]"${_scopeId}>${ssrInterpolate(unref(tour)?.title)}</h1>`);
            _push2(ssrRenderComponent(_component_UiBadge, {
              variant: "primary",
              pill: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(tour)?.theme ?? "nature")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(tour)?.theme ?? "nature"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><p class="mt-1 text-sm text-[--ui-color-text-muted]"${_scopeId}>${ssrInterpolate(unref(tour)?.location)}</p><div class="mt-2 flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiBadge, { variant: "default" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(scenes).length)} cảnh `);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(scenes).length) + " cảnh ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiBadge, { variant: "muted" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(scenes).reduce((n, s) => n + (s.markers?.length ?? 0), 0))} markers `);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(scenes).reduce((n, s) => n + (s.markers?.length ?? 0), 0)) + " markers ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-4" }, [
                createVNode(_component_UiAvatar, {
                  name: unref(tour)?.title ?? unref(slug),
                  size: "xl",
                  shape: "square"
                }, null, 8, ["name"]),
                createVNode("div", { class: "flex-1 min-w-0" }, [
                  createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [
                    createVNode("h1", { class: "text-xl font-bold text-[--ui-color-text-primary]" }, toDisplayString(unref(tour)?.title), 1),
                    createVNode(_component_UiBadge, {
                      variant: "primary",
                      pill: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(tour)?.theme ?? "nature"), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("p", { class: "mt-1 text-sm text-[--ui-color-text-muted]" }, toDisplayString(unref(tour)?.location), 1),
                  createVNode("div", { class: "mt-2 flex items-center gap-3" }, [
                    createVNode(_component_UiBadge, { variant: "default" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(scenes).length) + " cảnh ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiBadge, { variant: "muted" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(scenes).reduce((n, s) => n + (s.markers?.length ?? 0), 0)) + " markers ", 1)
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mb-4 flex items-center justify-between"><h2 class="text-base font-semibold text-[--ui-color-text-primary]">Danh sách cảnh</h2><p class="text-xs text-[--ui-color-text-muted]">Nhấn vào cảnh để chỉnh sửa markers</p></div>`);
      if (unref(scenes).length) {
        _push(`<div class="space-y-3"><!--[-->`);
        ssrRenderList(unref(scenes), (scene, index) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: scene.id,
            to: `/admin/${unref(slug)}/${scene.id}`,
            class: "block group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UiCard, {
                  variant: "surface",
                  padding: "none",
                  hoverable: true,
                  class: "overflow-hidden transition-all group-hover:ring-[--ui-color-brand]/25"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex items-center gap-0"${_scopeId2}><div class="flex h-full w-12 shrink-0 items-center justify-center border-r border-[--ui-color-border] self-stretch"${_scopeId2}><span class="text-sm font-bold tabular-nums text-[--ui-color-text-muted]"${_scopeId2}>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</span></div><div class="shrink-0"${_scopeId2}><img${ssrRenderAttr("src", scene.thumbnail)}${ssrRenderAttr("alt", scene.title)} class="h-20 w-32 object-cover"${_scopeId2}></div><div class="min-w-0 flex-1 px-4 py-3"${_scopeId2}><p class="font-semibold text-[--ui-color-text-primary] group-hover:text-[--ui-color-brand] transition-colors"${_scopeId2}>${ssrInterpolate(scene.title)}</p><p class="mt-0.5 text-xs text-[--ui-color-text-muted]"${_scopeId2}>${ssrInterpolate(scene.subtitle)}</p><div class="mt-2 flex flex-wrap gap-1.5"${_scopeId2}>`);
                      if (markerCount(scene, "navigation") > 0) {
                        _push3(ssrRenderComponent(_component_UiBadge, {
                          variant: "primary",
                          size: "sm"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` ↑ ${ssrInterpolate(markerCount(scene, "navigation"))} nav `);
                            } else {
                              return [
                                createTextVNode(" ↑ " + toDisplayString(markerCount(scene, "navigation")) + " nav ", 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (markerCount(scene, "info") > 0) {
                        _push3(ssrRenderComponent(_component_UiBadge, {
                          variant: "warning",
                          size: "sm"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` ⓘ ${ssrInterpolate(markerCount(scene, "info"))} info `);
                            } else {
                              return [
                                createTextVNode(" ⓘ " + toDisplayString(markerCount(scene, "info")) + " info ", 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (markerCount(scene) === 0) {
                        _push3(ssrRenderComponent(_component_UiBadge, {
                          variant: "muted",
                          size: "sm"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` Chưa có marker `);
                            } else {
                              return [
                                createTextVNode(" Chưa có marker ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div><div class="shrink-0 pr-4 text-[--ui-color-text-muted] group-hover:text-[--ui-color-brand] transition-colors"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path d="M5 12h14"${_scopeId2}></path><path d="m12 5 7 7-7 7"${_scopeId2}></path></svg></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center gap-0" }, [
                          createVNode("div", { class: "flex h-full w-12 shrink-0 items-center justify-center border-r border-[--ui-color-border] self-stretch" }, [
                            createVNode("span", { class: "text-sm font-bold tabular-nums text-[--ui-color-text-muted]" }, toDisplayString(String(index + 1).padStart(2, "0")), 1)
                          ]),
                          createVNode("div", { class: "shrink-0" }, [
                            createVNode("img", {
                              src: scene.thumbnail,
                              alt: scene.title,
                              class: "h-20 w-32 object-cover"
                            }, null, 8, ["src", "alt"])
                          ]),
                          createVNode("div", { class: "min-w-0 flex-1 px-4 py-3" }, [
                            createVNode("p", { class: "font-semibold text-[--ui-color-text-primary] group-hover:text-[--ui-color-brand] transition-colors" }, toDisplayString(scene.title), 1),
                            createVNode("p", { class: "mt-0.5 text-xs text-[--ui-color-text-muted]" }, toDisplayString(scene.subtitle), 1),
                            createVNode("div", { class: "mt-2 flex flex-wrap gap-1.5" }, [
                              markerCount(scene, "navigation") > 0 ? (openBlock(), createBlock(_component_UiBadge, {
                                key: 0,
                                variant: "primary",
                                size: "sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" ↑ " + toDisplayString(markerCount(scene, "navigation")) + " nav ", 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              markerCount(scene, "info") > 0 ? (openBlock(), createBlock(_component_UiBadge, {
                                key: 1,
                                variant: "warning",
                                size: "sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" ⓘ " + toDisplayString(markerCount(scene, "info")) + " info ", 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              markerCount(scene) === 0 ? (openBlock(), createBlock(_component_UiBadge, {
                                key: 2,
                                variant: "muted",
                                size: "sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Chưa có marker ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "shrink-0 pr-4 text-[--ui-color-text-muted] group-hover:text-[--ui-color-brand] transition-colors" }, [
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
                              createVNode("path", { d: "M5 12h14" }),
                              createVNode("path", { d: "m12 5 7 7-7 7" })
                            ]))
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
                    class: "overflow-hidden transition-all group-hover:ring-[--ui-color-brand]/25"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-0" }, [
                        createVNode("div", { class: "flex h-full w-12 shrink-0 items-center justify-center border-r border-[--ui-color-border] self-stretch" }, [
                          createVNode("span", { class: "text-sm font-bold tabular-nums text-[--ui-color-text-muted]" }, toDisplayString(String(index + 1).padStart(2, "0")), 1)
                        ]),
                        createVNode("div", { class: "shrink-0" }, [
                          createVNode("img", {
                            src: scene.thumbnail,
                            alt: scene.title,
                            class: "h-20 w-32 object-cover"
                          }, null, 8, ["src", "alt"])
                        ]),
                        createVNode("div", { class: "min-w-0 flex-1 px-4 py-3" }, [
                          createVNode("p", { class: "font-semibold text-[--ui-color-text-primary] group-hover:text-[--ui-color-brand] transition-colors" }, toDisplayString(scene.title), 1),
                          createVNode("p", { class: "mt-0.5 text-xs text-[--ui-color-text-muted]" }, toDisplayString(scene.subtitle), 1),
                          createVNode("div", { class: "mt-2 flex flex-wrap gap-1.5" }, [
                            markerCount(scene, "navigation") > 0 ? (openBlock(), createBlock(_component_UiBadge, {
                              key: 0,
                              variant: "primary",
                              size: "sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" ↑ " + toDisplayString(markerCount(scene, "navigation")) + " nav ", 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            markerCount(scene, "info") > 0 ? (openBlock(), createBlock(_component_UiBadge, {
                              key: 1,
                              variant: "warning",
                              size: "sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" ⓘ " + toDisplayString(markerCount(scene, "info")) + " info ", 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            markerCount(scene) === 0 ? (openBlock(), createBlock(_component_UiBadge, {
                              key: 2,
                              variant: "muted",
                              size: "sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Chưa có marker ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "shrink-0 pr-4 text-[--ui-color-text-muted] group-hover:text-[--ui-color-brand] transition-colors" }, [
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
                            createVNode("path", { d: "M5 12h14" }),
                            createVNode("path", { d: "m12 5 7 7-7 7" })
                          ]))
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
        _push(`<!--]--></div>`);
      } else {
        _push(ssrRenderComponent(_component_UiCard, {
          variant: "outlined",
          padding: "none"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiEmptyState, {
                icon: "🎞️",
                title: "Chưa có cảnh nào",
                description: "Tour này chưa có scene nào được cấu hình trong file YAML."
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiEmptyState, {
                  icon: "🎞️",
                  title: "Chưa có cảnh nào",
                  description: "Tour này chưa có scene nào được cấu hình trong file YAML."
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/[slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CsxKME8I.js.map
