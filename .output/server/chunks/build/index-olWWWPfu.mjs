globalThis.__timing__.logStart('Load chunks/build/index-olWWWPfu');import { a as _sfc_main$1, _ as _sfc_main$1$1 } from './Card-DyuK0OPG.mjs';
import { _ as _sfc_main$2 } from './StatusDot-DZG56uwW.mjs';
import { _ as _sfc_main$3 } from './Button-CeBG5qKU.mjs';
import { _ as _sfc_main$4 } from './Avatar-0HPRhFHn.mjs';
import { _ as _sfc_main$5 } from './EmptyState-CYLOXev5.mjs';
import { defineComponent, withAsyncContext, computed, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, withModifiers, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useHead } from './v3-vl98-hf4.mjs';
import { u as useFetch } from './fetch-BTut8LNP.mjs';
import { a as useToast, n as navigateTo } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import '@vue/shared';
import 'perfect-debounce';
import 'pinia';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Admin \u2014 Qu\u1EA3n l\xFD Tour \xB7 View360" });
    const { data, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/tours",
      "$94m-C4-3my"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const tours = computed(() => {
      var _a, _b;
      return (_b = (_a = data.value) == null ? void 0 : _a.items) != null ? _b : [];
    });
    const creatingTour = ref(false);
    const deletingTourSlug = ref(null);
    const { show: showToast } = useToast();
    const totalScenes = computed(
      () => tours.value.reduce((sum, tour) => {
        var _a;
        return sum + ((_a = tour.sceneCount) != null ? _a : 0);
      }, 0)
    );
    async function createEmptyTour() {
      var _a, _b, _c, _d;
      if (creatingTour.value) return;
      creatingTour.value = true;
      try {
        const result = await $fetch("/api/admin/tours", {
          method: "POST"
        });
        showToast({ message: "\u0110\xE3 t\u1EA1o tour r\u1ED7ng", variant: "success" });
        await navigateTo(`/admin/${result.slug}`);
      } catch (error) {
        const message = (_d = (_c = (_b = (_a = error == null ? void 0 : error.data) == null ? void 0 : _a.statusMessage) != null ? _b : error == null ? void 0 : error.statusMessage) != null ? _c : error == null ? void 0 : error.message) != null ? _d : "Kh\xF4ng th\u1EC3 t\u1EA1o tour";
        showToast({ message, variant: "error" });
      } finally {
        creatingTour.value = false;
      }
    }
    async function deleteSelectedTour(tour) {
      var _a, _b, _c, _d;
      if (deletingTourSlug.value) return;
      if (!confirm(`X\xF3a tour \u201C${tour.title}\u201D?

File c\u1EA5u h\xECnh tour s\u1EBD b\u1ECB x\xF3a v\xE0 kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.`)) return;
      deletingTourSlug.value = tour.slug;
      try {
        await $fetch(`/api/admin/tours/${tour.slug}`, { method: "DELETE" });
        await refresh();
        showToast({ message: `\u0110\xE3 x\xF3a tour \u201C${tour.title}\u201D`, variant: "success" });
      } catch (error) {
        const message = (_d = (_c = (_b = (_a = error == null ? void 0 : error.data) == null ? void 0 : _a.statusMessage) != null ? _b : error == null ? void 0 : error.statusMessage) != null ? _c : error == null ? void 0 : error.message) != null ? _d : "Kh\xF4ng th\u1EC3 x\xF3a tour";
        showToast({ message, variant: "error" });
      } finally {
        deletingTourSlug.value = null;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$1;
      const _component_UiBadge = _sfc_main$1$1;
      const _component_UiStatusDot = _sfc_main$2;
      const _component_UiButton = _sfc_main$3;
      const _component_UiAvatar = _sfc_main$4;
      const _component_UiEmptyState = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[--ui-color-bg] font-[--ui-font-sans]" }, _attrs))}><div class="px-6 py-8"><div class="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">`);
      _push(ssrRenderComponent(_component_UiCard, {
        variant: "surface",
        padding: "md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted]"${_scopeId}>T\u1ED5ng tour</p><p class="mt-2 text-3xl font-bold text-[--ui-color-text-primary]"${_scopeId}>${ssrInterpolate(unref(tours).length)}</p>`);
            _push2(ssrRenderComponent(_component_UiBadge, {
              variant: "primary",
              size: "sm",
              class: "mt-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u0111ang ho\u1EA1t \u0111\u1ED9ng`);
                } else {
                  return [
                    createTextVNode("\u0111ang ho\u1EA1t \u0111\u1ED9ng")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted]" }, "T\u1ED5ng tour"),
              createVNode("p", { class: "mt-2 text-3xl font-bold text-[--ui-color-text-primary]" }, toDisplayString(unref(tours).length), 1),
              createVNode(_component_UiBadge, {
                variant: "primary",
                size: "sm",
                class: "mt-2"
              }, {
                default: withCtx(() => [
                  createTextVNode("\u0111ang ho\u1EA1t \u0111\u1ED9ng")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCard, {
        variant: "surface",
        padding: "md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted]"${_scopeId}>T\u1ED5ng c\u1EA3nh</p><p class="mt-2 text-3xl font-bold text-[--ui-color-text-primary]"${_scopeId}>${ssrInterpolate(unref(totalScenes))}</p>`);
            _push2(ssrRenderComponent(_component_UiBadge, {
              variant: "success",
              size: "sm",
              class: "mt-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`panoramas`);
                } else {
                  return [
                    createTextVNode("panoramas")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted]" }, "T\u1ED5ng c\u1EA3nh"),
              createVNode("p", { class: "mt-2 text-3xl font-bold text-[--ui-color-text-primary]" }, toDisplayString(unref(totalScenes)), 1),
              createVNode(_component_UiBadge, {
                variant: "success",
                size: "sm",
                class: "mt-2"
              }, {
                default: withCtx(() => [
                  createTextVNode("panoramas")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCard, {
        variant: "surface",
        padding: "md",
        class: "col-span-2 sm:col-span-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted]"${_scopeId}>H\u1EC7 th\u1ED1ng</p><div class="mt-2 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiStatusDot, {
              variant: "online",
              pulse: true
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>Ho\u1EA1t \u0111\u1ED9ng b\xECnh th\u01B0\u1EDDng</p></div><p class="mt-1 text-xs text-[--ui-color-text-muted]"${_scopeId}> Ch\u1EC9 ho\u1EA1t \u0111\u1ED9ng khi <code class="rounded bg-[--ui-color-bg-muted] px-1 font-mono text-[10px]"${_scopeId}>ENABLE_ADMIN=true</code></p>`);
          } else {
            return [
              createVNode("p", { class: "text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted]" }, "H\u1EC7 th\u1ED1ng"),
              createVNode("div", { class: "mt-2 flex items-center gap-2" }, [
                createVNode(_component_UiStatusDot, {
                  variant: "online",
                  pulse: true
                }),
                createVNode("p", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "Ho\u1EA1t \u0111\u1ED9ng b\xECnh th\u01B0\u1EDDng")
              ]),
              createVNode("p", { class: "mt-1 text-xs text-[--ui-color-text-muted]" }, [
                createTextVNode(" Ch\u1EC9 ho\u1EA1t \u0111\u1ED9ng khi "),
                createVNode("code", { class: "rounded bg-[--ui-color-bg-muted] px-1 font-mono text-[10px]" }, "ENABLE_ADMIN=true")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-5 flex items-center justify-between"><div><h1 class="text-xl font-bold text-[--ui-color-text-primary]">Danh s\xE1ch Tour</h1><p class="mt-0.5 text-sm text-[--ui-color-text-muted]">Ch\u1ECDn tour \u0111\u1EC3 xem v\xE0 ch\u1EC9nh s\u1EEDa c\xE1c c\u1EA3nh</p></div><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UiBadge, { variant: "muted" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(tours).length)} tour`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(tours).length) + " tour", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        loading: unref(creatingTour),
        onClick: createEmptyTour
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+ T\u1EA1o tour`);
          } else {
            return [
              createTextVNode("+ T\u1EA1o tour")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(tours).length) {
        _push(`<div class="grid gap-4 sm:grid-cols-2"><!--[-->`);
        ssrRenderList(unref(tours), (tour) => {
          _push(`<div class="block group cursor-pointer" role="link" tabindex="0">`);
          _push(ssrRenderComponent(_component_UiCard, {
            variant: "surface",
            padding: "md",
            hoverable: true,
            class: "h-full transition-all group-hover:ring-[--ui-color-brand]/30"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-start justify-between gap-3"${_scopeId}><div class="flex items-start gap-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UiAvatar, {
                  name: tour.title,
                  size: "md",
                  shape: "square"
                }, null, _parent2, _scopeId));
                _push2(`<div class="min-w-0 flex-1"${_scopeId}><p class="font-semibold text-[--ui-color-text-primary] group-hover:text-[--ui-color-brand] transition-colors"${_scopeId}>${ssrInterpolate(tour.title)}</p><p class="mt-0.5 text-xs text-[--ui-color-text-muted]"${_scopeId}>${ssrInterpolate(tour.location)}</p></div></div>`);
                _push2(ssrRenderComponent(_component_UiBadge, {
                  variant: "default",
                  size: "sm",
                  class: "shrink-0"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(tour.sceneCount)} c\u1EA3nh `);
                    } else {
                      return [
                        createTextVNode(toDisplayString(tour.sceneCount) + " c\u1EA3nh ", 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><p class="mt-3 text-xs leading-relaxed text-[--ui-color-text-muted] line-clamp-2"${_scopeId}>${ssrInterpolate(tour.summary)}</p><div class="mt-4 flex items-center justify-between"${_scopeId}><div class="flex gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UiBadge, {
                  variant: "primary",
                  size: "sm",
                  pill: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a, _b;
                    if (_push3) {
                      _push3(`${ssrInterpolate((_a = tour.theme) != null ? _a : "nature")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString((_b = tour.theme) != null ? _b : "nature"), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="flex items-center gap-2"${_scopeId}>`);
                if (tour.slug !== "trang-bay") {
                  _push2(ssrRenderComponent(_component_UiButton, {
                    variant: "danger",
                    size: "sm",
                    loading: unref(deletingTourSlug) === tour.slug,
                    onClick: ($event) => deleteSelectedTour(tour),
                    onKeydown: () => {
                    }
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`X\xF3a`);
                      } else {
                        return [
                          createTextVNode("X\xF3a")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="text-xs text-[--ui-color-text-muted] group-hover:text-[--ui-color-brand] transition-colors flex items-center gap-1"${_scopeId}> Ch\u1EC9nh s\u1EEDa <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M5 12h14"${_scopeId}></path><path d="m12 5 7 7-7 7"${_scopeId}></path></svg></span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-start justify-between gap-3" }, [
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UiAvatar, {
                        name: tour.title,
                        size: "md",
                        shape: "square"
                      }, null, 8, ["name"]),
                      createVNode("div", { class: "min-w-0 flex-1" }, [
                        createVNode("p", { class: "font-semibold text-[--ui-color-text-primary] group-hover:text-[--ui-color-brand] transition-colors" }, toDisplayString(tour.title), 1),
                        createVNode("p", { class: "mt-0.5 text-xs text-[--ui-color-text-muted]" }, toDisplayString(tour.location), 1)
                      ])
                    ]),
                    createVNode(_component_UiBadge, {
                      variant: "default",
                      size: "sm",
                      class: "shrink-0"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tour.sceneCount) + " c\u1EA3nh ", 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createVNode("p", { class: "mt-3 text-xs leading-relaxed text-[--ui-color-text-muted] line-clamp-2" }, toDisplayString(tour.summary), 1),
                  createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode(_component_UiBadge, {
                        variant: "primary",
                        size: "sm",
                        pill: ""
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = tour.theme) != null ? _a : "nature"), 1)
                          ];
                        }),
                        _: 2
                      }, 1024)
                    ]),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      tour.slug !== "trang-bay" ? (openBlock(), createBlock(_component_UiButton, {
                        key: 0,
                        variant: "danger",
                        size: "sm",
                        loading: unref(deletingTourSlug) === tour.slug,
                        onClick: withModifiers(($event) => deleteSelectedTour(tour), ["stop"]),
                        onKeydown: withModifiers(() => {
                        }, ["stop"])
                      }, {
                        default: withCtx(() => [
                          createTextVNode("X\xF3a")
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick", "onKeydown"])) : createCommentVNode("", true),
                      createVNode("span", { class: "text-xs text-[--ui-color-text-muted] group-hover:text-[--ui-color-brand] transition-colors flex items-center gap-1" }, [
                        createTextVNode(" Ch\u1EC9nh s\u1EEDa "),
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "12",
                          height: "12",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, [
                          createVNode("path", { d: "M5 12h14" }),
                          createVNode("path", { d: "m12 5 7 7-7 7" })
                        ]))
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
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
                icon: "\u{1F5FA}\uFE0F",
                title: "Ch\u01B0a c\xF3 tour n\xE0o",
                description: "T\u1EA1o m\u1ED9t tour r\u1ED7ng \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u x\xE2y d\u1EF1ng tr\u1EA3i nghi\u1EC7m 360\xB0."
              }, {
                actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      size: "sm",
                      loading: unref(creatingTour),
                      onClick: createEmptyTour
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`+ T\u1EA1o tour \u0111\u1EA7u ti\xEAn`);
                        } else {
                          return [
                            createTextVNode("+ T\u1EA1o tour \u0111\u1EA7u ti\xEAn")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, {
                        size: "sm",
                        loading: unref(creatingTour),
                        onClick: createEmptyTour
                      }, {
                        default: withCtx(() => [
                          createTextVNode("+ T\u1EA1o tour \u0111\u1EA7u ti\xEAn")
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
                  icon: "\u{1F5FA}\uFE0F",
                  title: "Ch\u01B0a c\xF3 tour n\xE0o",
                  description: "T\u1EA1o m\u1ED9t tour r\u1ED7ng \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u x\xE2y d\u1EF1ng tr\u1EA3i nghi\u1EC7m 360\xB0."
                }, {
                  actions: withCtx(() => [
                    createVNode(_component_UiButton, {
                      size: "sm",
                      loading: unref(creatingTour),
                      onClick: createEmptyTour
                    }, {
                      default: withCtx(() => [
                        createTextVNode("+ T\u1EA1o tour \u0111\u1EA7u ti\xEAn")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/index-olWWWPfu');
//# sourceMappingURL=index-olWWWPfu.mjs.map
