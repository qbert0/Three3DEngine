globalThis.__timing__.logStart('Load chunks/build/index-XQxqfvvW');import { _ as __nuxt_component_0 } from './nuxt-link-AvfA4aCh.mjs';
import { _ as _sfc_main$1 } from './Button-CeBG5qKU.mjs';
import { a as _sfc_main$2, _ as _sfc_main$1$1 } from './Card-DyuK0OPG.mjs';
import { _ as _sfc_main$3 } from './Avatar-0HPRhFHn.mjs';
import { _ as _sfc_main$4 } from './EmptyState-CYLOXev5.mjs';
import { defineComponent, ref, withAsyncContext, computed, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useRoute, a as useToast, n as navigateTo } from './server.mjs';
import { u as useFetch } from './fetch-BTut8LNP.mjs';
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
import 'pinia';
import 'vue-router';
import '@vue/shared';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e;
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const firstSceneInput = ref(null);
    const addingFirstScene = ref(false);
    const { show: showToast } = useToast();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/tours/${slug}`,
      "$pAVK-PtWZM"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const tour = computed(() => {
      var _a2;
      return (_a2 = data.value) == null ? void 0 : _a2.item;
    });
    const scenes = computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = tour.value) == null ? void 0 : _a2.scenes) != null ? _b2 : [];
    });
    const preferredSceneId = (_e = (_b = (_a = tour.value) == null ? void 0 : _a.scenes.find((scene) => {
      var _a2;
      return scene.id === ((_a2 = tour.value) == null ? void 0 : _a2.initialSceneId);
    })) == null ? void 0 : _b.id) != null ? _e : (_d = (_c = tour.value) == null ? void 0 : _c.scenes[0]) == null ? void 0 : _d.id;
    if (preferredSceneId) {
      [__temp, __restore] = withAsyncContext(() => navigateTo(`/admin/${slug}/${preferredSceneId}`, { replace: true })), await __temp, __restore();
    }
    useHead({ title: computed(() => {
      var _a2, _b2;
      return `${(_b2 = (_a2 = tour.value) == null ? void 0 : _a2.title) != null ? _b2 : slug} \u2014 Admin \xB7 View360`;
    }) });
    const markerCount = (scene, plugin) => {
      var _a2, _b2, _c2, _d2;
      return plugin ? (_b2 = (_a2 = scene.markers) == null ? void 0 : _a2.filter((m) => m.plugin === plugin).length) != null ? _b2 : 0 : (_d2 = (_c2 = scene.markers) == null ? void 0 : _c2.length) != null ? _d2 : 0;
    };
    function selectFirstScenePanorama() {
      var _a2;
      (_a2 = firstSceneInput.value) == null ? void 0 : _a2.click();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiButton = _sfc_main$1;
      const _component_UiCard = _sfc_main$2;
      const _component_UiAvatar = _sfc_main$3;
      const _component_UiBadge = _sfc_main$1$1;
      const _component_UiEmptyState = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[--ui-color-bg] font-[--ui-font-sans]" }, _attrs))}><input class="hidden" type="file" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"><div class="px-6 py-8"><div class="mb-6 flex items-center gap-2 text-sm">`);
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
      _push(`<span class="text-[--ui-color-border-strong]">/</span><p class="font-semibold text-[--ui-color-text-primary] truncate">${ssrInterpolate((_b2 = (_a2 = unref(tour)) == null ? void 0 : _a2.title) != null ? _b2 : unref(slug))}</p><div class="ml-auto">`);
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
                  _push3(`Xem tour \u2192`);
                } else {
                  return [
                    createTextVNode("Xem tour \u2192")
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
                  createTextVNode("Xem tour \u2192")
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
          var _a3, _b3, _c2, _d2, _e2, _f, _g, _h;
          if (_push2) {
            _push2(`<div class="flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiAvatar, {
              name: (_b3 = (_a3 = unref(tour)) == null ? void 0 : _a3.title) != null ? _b3 : unref(slug),
              size: "xl",
              shape: "square"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex-1 min-w-0"${_scopeId}><div class="flex items-center gap-2 flex-wrap"${_scopeId}><h1 class="text-xl font-bold text-[--ui-color-text-primary]"${_scopeId}>${ssrInterpolate((_c2 = unref(tour)) == null ? void 0 : _c2.title)}</h1>`);
            _push2(ssrRenderComponent(_component_UiBadge, {
              variant: "primary",
              pill: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a4, _b4, _c3, _d3;
                if (_push3) {
                  _push3(`${ssrInterpolate((_b4 = (_a4 = unref(tour)) == null ? void 0 : _a4.theme) != null ? _b4 : "nature")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString((_d3 = (_c3 = unref(tour)) == null ? void 0 : _c3.theme) != null ? _d3 : "nature"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><p class="mt-1 text-sm text-[--ui-color-text-muted]"${_scopeId}>${ssrInterpolate((_d2 = unref(tour)) == null ? void 0 : _d2.location)}</p><div class="mt-2 flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiBadge, { variant: "default" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(scenes).length)} c\u1EA3nh `);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(scenes).length) + " c\u1EA3nh ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiBadge, { variant: "muted" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(scenes).reduce((n, s) => {
                    var _a4, _b4;
                    return n + ((_b4 = (_a4 = s.markers) == null ? void 0 : _a4.length) != null ? _b4 : 0);
                  }, 0))} markers `);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(scenes).reduce((n, s) => {
                      var _a4, _b4;
                      return n + ((_b4 = (_a4 = s.markers) == null ? void 0 : _a4.length) != null ? _b4 : 0);
                    }, 0)) + " markers ", 1)
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
                  name: (_f = (_e2 = unref(tour)) == null ? void 0 : _e2.title) != null ? _f : unref(slug),
                  size: "xl",
                  shape: "square"
                }, null, 8, ["name"]),
                createVNode("div", { class: "flex-1 min-w-0" }, [
                  createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [
                    createVNode("h1", { class: "text-xl font-bold text-[--ui-color-text-primary]" }, toDisplayString((_g = unref(tour)) == null ? void 0 : _g.title), 1),
                    createVNode(_component_UiBadge, {
                      variant: "primary",
                      pill: ""
                    }, {
                      default: withCtx(() => {
                        var _a4, _b4;
                        return [
                          createTextVNode(toDisplayString((_b4 = (_a4 = unref(tour)) == null ? void 0 : _a4.theme) != null ? _b4 : "nature"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  createVNode("p", { class: "mt-1 text-sm text-[--ui-color-text-muted]" }, toDisplayString((_h = unref(tour)) == null ? void 0 : _h.location), 1),
                  createVNode("div", { class: "mt-2 flex items-center gap-3" }, [
                    createVNode(_component_UiBadge, { variant: "default" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(scenes).length) + " c\u1EA3nh ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiBadge, { variant: "muted" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(scenes).reduce((n, s) => {
                          var _a4, _b4;
                          return n + ((_b4 = (_a4 = s.markers) == null ? void 0 : _a4.length) != null ? _b4 : 0);
                        }, 0)) + " markers ", 1)
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
      _push(`<div class="mb-4 flex items-center justify-between"><h2 class="text-base font-semibold text-[--ui-color-text-primary]">Danh s\xE1ch c\u1EA3nh</h2><p class="text-xs text-[--ui-color-text-muted]">Nh\u1EA5n v\xE0o c\u1EA3nh \u0111\u1EC3 ch\u1EC9nh s\u1EEDa markers</p></div>`);
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
                              _push4(` \u2191 ${ssrInterpolate(markerCount(scene, "navigation"))} nav `);
                            } else {
                              return [
                                createTextVNode(" \u2191 " + toDisplayString(markerCount(scene, "navigation")) + " nav ", 1)
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
                              _push4(` \u24D8 ${ssrInterpolate(markerCount(scene, "info"))} info `);
                            } else {
                              return [
                                createTextVNode(" \u24D8 " + toDisplayString(markerCount(scene, "info")) + " info ", 1)
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
                              _push4(` Ch\u01B0a c\xF3 marker `);
                            } else {
                              return [
                                createTextVNode(" Ch\u01B0a c\xF3 marker ")
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
                                  createTextVNode(" \u2191 " + toDisplayString(markerCount(scene, "navigation")) + " nav ", 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              markerCount(scene, "info") > 0 ? (openBlock(), createBlock(_component_UiBadge, {
                                key: 1,
                                variant: "warning",
                                size: "sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u24D8 " + toDisplayString(markerCount(scene, "info")) + " info ", 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              markerCount(scene) === 0 ? (openBlock(), createBlock(_component_UiBadge, {
                                key: 2,
                                variant: "muted",
                                size: "sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Ch\u01B0a c\xF3 marker ")
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
                                createTextVNode(" \u2191 " + toDisplayString(markerCount(scene, "navigation")) + " nav ", 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            markerCount(scene, "info") > 0 ? (openBlock(), createBlock(_component_UiBadge, {
                              key: 1,
                              variant: "warning",
                              size: "sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u24D8 " + toDisplayString(markerCount(scene, "info")) + " info ", 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            markerCount(scene) === 0 ? (openBlock(), createBlock(_component_UiBadge, {
                              key: 2,
                              variant: "muted",
                              size: "sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Ch\u01B0a c\xF3 marker ")
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
                icon: "\u{1F39E}\uFE0F",
                title: "Ch\u01B0a c\xF3 c\u1EA3nh n\xE0o",
                description: "Ch\u1ECDn m\u1ED9t \u1EA3nh panorama 2:1 \u0111\u1EC3 t\u1EA1o c\u1EA3nh \u0111\u1EA7u ti\xEAn v\xE0 m\u1EDF tr\xECnh ch\u1EC9nh s\u1EEDa."
              }, {
                actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      loading: unref(addingFirstScene),
                      onClick: selectFirstScenePanorama
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` + Th\xEAm c\u1EA3nh \u0111\u1EA7u ti\xEAn `);
                        } else {
                          return [
                            createTextVNode(" + Th\xEAm c\u1EA3nh \u0111\u1EA7u ti\xEAn ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, {
                        loading: unref(addingFirstScene),
                        onClick: selectFirstScenePanorama
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" + Th\xEAm c\u1EA3nh \u0111\u1EA7u ti\xEAn ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiEmptyState, {
                  icon: "\u{1F39E}\uFE0F",
                  title: "Ch\u01B0a c\xF3 c\u1EA3nh n\xE0o",
                  description: "Ch\u1ECDn m\u1ED9t \u1EA3nh panorama 2:1 \u0111\u1EC3 t\u1EA1o c\u1EA3nh \u0111\u1EA7u ti\xEAn v\xE0 m\u1EDF tr\xECnh ch\u1EC9nh s\u1EEDa."
                }, {
                  actions: withCtx(() => [
                    createVNode(_component_UiButton, {
                      loading: unref(addingFirstScene),
                      onClick: selectFirstScenePanorama
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" + Th\xEAm c\u1EA3nh \u0111\u1EA7u ti\xEAn ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
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

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/index-XQxqfvvW');
//# sourceMappingURL=index-XQxqfvvW.mjs.map
