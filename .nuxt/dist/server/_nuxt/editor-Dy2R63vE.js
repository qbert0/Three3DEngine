import { _ as __nuxt_component_0 } from "./nuxt-link-AvfA4aCh.js";
import { _ as _sfc_main$1 } from "./Button-CeBG5qKU.js";
import { _ as _sfc_main$2 } from "./ThemeToggle-_7_p_E0v.js";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { u as useRoute } from "../server.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ufo/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/defu/dist/defu.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unctx/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/h3/dist/index.mjs";
import "pinia";
import "vue-router";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/klona/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "editor",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const navItems = [
      { to: "/admin", label: "Tổng quan", icon: "⊞" }
    ];
    const isActive = (to) => to === "/admin" ? route.path === "/admin" : route.path.startsWith(to);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiButton = _sfc_main$1;
      const _component_ThemeToggle = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen overflow-hidden bg-[--ui-color-bg] font-[--ui-font-sans]" }, _attrs))}><aside class="flex h-full w-56 shrink-0 flex-col border-r border-[--ui-color-border] bg-[--ui-color-surface]"><div class="flex h-14 items-center gap-2.5 border-b border-[--ui-color-border] px-4"><div class="grid h-7 w-7 place-items-center rounded-[--ui-radius-xs] bg-[--ui-color-brand] text-white text-[10px] font-bold"> V<span class="text-[7px] align-super">360</span></div><div><p class="text-[10px] font-bold uppercase tracking-widest text-[--ui-color-brand]">Admin</p><p class="text-xs font-semibold text-[--ui-color-text-primary] leading-none">View360</p></div></div><nav class="flex-1 overflow-y-auto px-2 py-3 space-y-0.5"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to,
          class: [
            "flex items-center gap-2.5 rounded-[--ui-radius-sm] px-3 py-2 text-sm transition-colors",
            isActive(item.to) ? "bg-[--ui-color-brand-muted] text-[--ui-color-brand] font-medium" : "text-[--ui-color-text-secondary] hover:bg-[--ui-color-bg-muted] hover:text-[--ui-color-text-primary]"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-base leading-none"${_scopeId}>${ssrInterpolate(item.icon)}</span> ${ssrInterpolate(item.label)}`);
            } else {
              return [
                createVNode("span", { class: "text-base leading-none" }, toDisplayString(item.icon), 1),
                createTextVNode(" " + toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="border-t border-[--ui-color-border] px-3 py-3 space-y-1">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiButton, {
              variant: "ghost",
              size: "sm",
              class: "w-full justify-start"
            }, {
              "icon-leading": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><circle cx="12" cy="12" r="10"${_scopeId2}></circle><path d="m4.93 4.93 4.24 4.24"${_scopeId2}></path><path d="m14.83 9.17 4.24-4.24"${_scopeId2}></path><path d="m14.83 14.83 4.24 4.24"${_scopeId2}></path><path d="m9.17 14.83-4.24 4.24"${_scopeId2}></path><circle cx="12" cy="12" r="4"${_scopeId2}></circle></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "14",
                      height: "14",
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
                      createVNode("path", { d: "m4.93 4.93 4.24 4.24" }),
                      createVNode("path", { d: "m14.83 9.17 4.24-4.24" }),
                      createVNode("path", { d: "m14.83 14.83 4.24 4.24" }),
                      createVNode("path", { d: "m9.17 14.83-4.24 4.24" }),
                      createVNode("circle", {
                        cx: "12",
                        cy: "12",
                        r: "4"
                      })
                    ]))
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Xem catalog `);
                } else {
                  return [
                    createTextVNode(" Xem catalog ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiButton, {
                variant: "ghost",
                size: "sm",
                class: "w-full justify-start"
              }, {
                "icon-leading": withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "14",
                    height: "14",
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
                    createVNode("path", { d: "m4.93 4.93 4.24 4.24" }),
                    createVNode("path", { d: "m14.83 9.17 4.24-4.24" }),
                    createVNode("path", { d: "m14.83 14.83 4.24 4.24" }),
                    createVNode("path", { d: "m9.17 14.83-4.24 4.24" }),
                    createVNode("circle", {
                      cx: "12",
                      cy: "12",
                      r: "4"
                    })
                  ]))
                ]),
                default: withCtx(() => [
                  createTextVNode(" Xem catalog ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center justify-between px-2 py-1"><span class="text-xs text-[--ui-color-text-muted]">Theme</span>`);
      _push(ssrRenderComponent(_component_ThemeToggle, { size: "text-base" }, null, _parent));
      _push(`</div></div></aside><div class="flex flex-1 flex-col overflow-hidden"><main class="flex-1 overflow-y-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/editor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=editor-Dy2R63vE.js.map
