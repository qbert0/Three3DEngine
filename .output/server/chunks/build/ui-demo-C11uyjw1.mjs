globalThis.__timing__.logStart('Load chunks/build/ui-demo-C11uyjw1');import { _ as _sfc_main$1$1, a as _sfc_main$7 } from './Card-DyuK0OPG.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$c } from './Switch-CNCj6PJD.mjs';
import { _ as _sfc_main$5 } from './ThemeToggle-_7_p_E0v.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-AvfA4aCh.mjs';
import { _ as _sfc_main$6 } from './Button-CeBG5qKU.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, unref, openBlock, createBlock, toDisplayString, Fragment, renderList, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './Avatar-0HPRhFHn.mjs';
import { _ as _sfc_main$9 } from './StatusDot-DZG56uwW.mjs';
import { _ as _sfc_main$a } from './Skeleton-BO-0Zy5d.mjs';
import { _ as _sfc_main$b } from './EmptyState-CYLOXev5.mjs';
import { _ as _sfc_main$d } from './Spinner-mjqtnuYo.mjs';
import { a as useToast } from './server.mjs';
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Kbd",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<kbd${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center justify-center min-w-[1.5rem] h-6 px-1.5 rounded-[--ui-radius-xs] bg-[--ui-color-bg-subtle] ring-1 ring-[--ui-color-border] ring-inset shadow-[0_1px_0_0_var(--ui-color-border-strong)] text-[11px] font-medium font-[--ui-font-mono] text-[--ui-color-text-secondary] leading-none select-none" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</kbd>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Kbd.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Divider",
  __ssrInlineRender: true,
  props: {
    variant: { default: "default" },
    orientation: { default: "horizontal" },
    label: {}
  },
  setup(__props) {
    const props = __props;
    const colorMap = {
      default: "border-[--ui-color-border]",
      subtle: "border-[--ui-color-border-subtle]",
      strong: "border-[--ui-color-border-strong]"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "separator",
        "aria-orientation": __props.orientation,
        class: [
          __props.orientation === "horizontal" ? ["w-full flex items-center gap-3", props.label ? "my-4" : ""] : ["inline-block self-stretch border-l h-full mx-2", colorMap[__props.variant]]
        ]
      }, _attrs))}>`);
      if (__props.orientation === "horizontal") {
        _push(`<div class="${ssrRenderClass(["flex-1 border-t", colorMap[__props.variant]])}"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.label) {
        _push(`<span class="shrink-0 text-xs text-[--ui-color-text-muted] font-medium whitespace-nowrap">${ssrInterpolate(__props.label)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.orientation === "horizontal") {
        _push(`<div class="${ssrRenderClass(["flex-1 border-t", colorMap[__props.variant]])}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Divider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Banner",
  __ssrInlineRender: true,
  props: {
    variant: { default: "info" },
    title: {},
    dismissable: { type: Boolean, default: false }
  },
  emits: ["dismiss"],
  setup(__props, { emit: __emit }) {
    const dismissed = ref(false);
    const iconMap = {
      info: "\u2139\uFE0F",
      success: "\u2705",
      warning: "\u26A0\uFE0F",
      error: "\u274C"
    };
    const variantClasses = {
      info: "bg-[--ui-color-brand-muted]   ring-[--ui-color-brand]/20   text-[--ui-color-brand]",
      success: "bg-[--ui-color-success-muted] ring-[--ui-color-success]/20 text-[--ui-color-success]",
      warning: "bg-[--ui-color-warning-muted] ring-[--ui-color-warning]/20 text-[--ui-color-warning]",
      error: "bg-[--ui-color-error-muted]   ring-[--ui-color-error]/20   text-[--ui-color-error]"
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (!dismissed.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          role: "alert",
          class: [
            "flex items-start gap-3 rounded-[--ui-radius-md] px-4 py-3 ring-1 text-sm",
            variantClasses[__props.variant]
          ]
        }, _attrs))}><span class="mt-px shrink-0 text-base leading-none" aria-hidden="true">${ssrInterpolate(iconMap[__props.variant])}</span><div class="flex-1 min-w-0">`);
        if (__props.title) {
          _push(`<p class="font-semibold leading-snug mb-0.5">${ssrInterpolate(__props.title)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="opacity-85 leading-relaxed">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
        if (_ctx.$slots.actions) {
          _push(`<div class="mt-3 flex gap-2">`);
          ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (__props.dismissable) {
          _push(`<button type="button" class="shrink-0 rounded p-0.5 opacity-60 hover:opacity-100 transition-opacity" aria-label="\u0110\xF3ng th\xF4ng b\xE1o"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Banner.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    label: {},
    placeholder: {},
    hint: {},
    error: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    size: { default: "md" },
    type: { default: "text" },
    id: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const uid = (_a = props.id) != null ? _a : `input-${Math.random().toString(36).slice(2, 8)}`;
    const hintId = `${uid}-hint`;
    const sizeClasses = {
      sm: "h-8  px-3 text-xs  rounded-[--ui-radius-sm]",
      md: "h-10 px-3 text-sm  rounded-[--ui-radius-sm]",
      lg: "h-12 px-4 text-base rounded-[--ui-radius-md]"
    };
    const hasError = computed(() => !!props.error);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-1.5" }, _attrs))}>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", unref(uid))} class="${ssrRenderClass([
          "text-sm font-medium leading-none",
          hasError.value ? "text-[--ui-color-error]" : "text-[--ui-color-text-primary]"
        ])}">${ssrInterpolate(__props.label)} `);
        if (__props.required) {
          _push(`<span class="ml-0.5 text-[--ui-color-error]" aria-hidden="true">*</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative flex items-center">`);
      if (_ctx.$slots.leading) {
        _push(`<div class="pointer-events-none absolute left-3 text-[--ui-color-text-muted]">`);
        ssrRenderSlot(_ctx.$slots, "leading", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderAttr("id", unref(uid))}${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrIncludeBooleanAttr(__props.readonly) ? " readonly" : ""}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrRenderAttr("aria-describedby", __props.hint || __props.error ? hintId : void 0)}${ssrRenderAttr("aria-invalid", hasError.value || void 0)} class="${ssrRenderClass([
        "w-full bg-[--ui-color-surface] text-[--ui-color-text-primary]",
        "ring-1 outline-none transition-all duration-[--ui-transition-fast]",
        "placeholder:text-[--ui-color-text-muted]",
        "focus:ring-2",
        hasError.value ? "ring-[--ui-color-error] focus:ring-[--ui-color-error]" : "ring-[--ui-color-border] focus:ring-[--ui-color-brand]",
        __props.disabled ? "opacity-50 cursor-not-allowed bg-[--ui-color-bg-muted]" : "",
        sizeClasses[__props.size],
        _ctx.$slots.leading ? "pl-9" : "",
        _ctx.$slots.trailing ? "pr-9" : ""
      ])}">`);
      if (_ctx.$slots.trailing) {
        _push(`<div class="pointer-events-none absolute right-3 text-[--ui-color-text-muted]">`);
        ssrRenderSlot(_ctx.$slots, "trailing", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.error || __props.hint) {
        _push(`<p${ssrRenderAttr("id", hintId)} class="${ssrRenderClass([
          "text-xs leading-relaxed",
          hasError.value ? "text-[--ui-color-error]" : "text-[--ui-color-text-muted]"
        ])}">${ssrInterpolate(__props.error || __props.hint)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/TextInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ui-demo",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "UI Components \u2014 View360" });
    const toast = useToast();
    const switchVal = ref(false);
    const inputVal = ref("");
    const errorInput = ref("");
    const selectedTab = ref("button");
    const tabs = [
      { id: "button", label: "Button & Badge" },
      { id: "card", label: "Card & Avatar" },
      { id: "feedback", label: "Toast & Banner" },
      { id: "form", label: "Form Controls" },
      { id: "misc", label: "Misc" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiBadge = _sfc_main$1$1;
      const _component_UiTooltip = _sfc_main$1$2;
      const _component_ThemeToggle = _sfc_main$5;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiButton = _sfc_main$6;
      const _component_UiKbd = _sfc_main$4;
      const _component_UiCard = _sfc_main$7;
      const _component_UiDivider = _sfc_main$3;
      const _component_UiAvatar = _sfc_main$8;
      const _component_UiStatusDot = _sfc_main$9;
      const _component_UiSkeleton = _sfc_main$a;
      const _component_UiBanner = _sfc_main$2;
      const _component_UiEmptyState = _sfc_main$b;
      const _component_UiTextInput = _sfc_main$1;
      const _component_UiSwitch = _sfc_main$c;
      const _component_UiSpinner = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[--ui-color-bg] font-[--ui-font-sans]" }, _attrs))}><header class="sticky top-0 z-20 border-b border-[--ui-color-border] bg-[--ui-color-surface]/90 backdrop-blur-sm"><div class="mx-auto flex h-14 max-w-5xl items-center justify-between px-6"><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UiBadge, {
        variant: "primary",
        pill: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Astryx \u2192 Vue`);
          } else {
            return [
              createTextVNode("Astryx \u2192 Vue")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-base font-semibold text-[--ui-color-text-primary]">UI Component Library</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UiTooltip, { content: "Chuy\u1EC3n \u0111\u1ED5i theme" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ThemeToggle, { size: "text-xl" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ThemeToggle, { size: "text-xl" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiButton, {
              variant: "ghost",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u2190 V\u1EC1 trang ch\u1EE7`);
                } else {
                  return [
                    createTextVNode("\u2190 V\u1EC1 trang ch\u1EE7")
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
                  createTextVNode("\u2190 V\u1EC1 trang ch\u1EE7")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header><div class="mx-auto max-w-5xl px-6 py-10"><div class="mb-10"><h1 class="text-3xl font-bold text-[--ui-color-text-primary]">Astryx Design System</h1><p class="mt-2 text-[--ui-color-text-secondary]"> 16 component \u0111\u01B0\u1EE3c port t\u1EEB <a href="https://astryx.atmeta.com" target="_blank" class="text-[--ui-color-brand] underline underline-offset-2">astryx.atmeta.com</a> sang Vue 3 + Tailwind CSS. S\u1EED d\u1EE5ng prefix `);
      _push(ssrRenderComponent(_component_UiKbd, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ui`);
          } else {
            return [
              createTextVNode("Ui")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` khi d\xF9ng (e.g. `);
      _push(ssrRenderComponent(_component_UiKbd, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`&lt;UiButton /&gt;`);
          } else {
            return [
              createTextVNode("<UiButton />")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`). </p></div><div class="mb-8 flex gap-1 border-b border-[--ui-color-border]"><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button type="button" class="${ssrRenderClass([
          "px-4 py-2.5 text-sm font-medium transition-colors -mb-px border-b-2",
          selectedTab.value === tab.id ? "border-[--ui-color-brand] text-[--ui-color-brand]" : "border-transparent text-[--ui-color-text-secondary] hover:text-[--ui-color-text-primary]"
        ])}">${ssrInterpolate(tab.label)}</button>`);
      });
      _push(`<!--]--></div>`);
      if (selectedTab.value === "button") {
        _push(`<div class="space-y-10">`);
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>Button \u2014 variants</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "Button \u2014 variants")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-wrap gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiButton, { variant: "primary" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Primary`);
                  } else {
                    return [
                      createTextVNode("Primary")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiButton, { variant: "secondary" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Secondary`);
                  } else {
                    return [
                      createTextVNode("Secondary")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiButton, { variant: "ghost" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Ghost`);
                  } else {
                    return [
                      createTextVNode("Ghost")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiButton, { variant: "muted" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Muted`);
                  } else {
                    return [
                      createTextVNode("Muted")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiButton, { variant: "danger" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Danger`);
                  } else {
                    return [
                      createTextVNode("Danger")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-wrap gap-3" }, [
                  createVNode(_component_UiButton, { variant: "primary" }, {
                    default: withCtx(() => [
                      createTextVNode("Primary")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiButton, { variant: "secondary" }, {
                    default: withCtx(() => [
                      createTextVNode("Secondary")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiButton, { variant: "ghost" }, {
                    default: withCtx(() => [
                      createTextVNode("Ghost")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiButton, { variant: "muted" }, {
                    default: withCtx(() => [
                      createTextVNode("Muted")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiButton, { variant: "danger" }, {
                    default: withCtx(() => [
                      createTextVNode("Danger")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>Button \u2014 sizes</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "Button \u2014 sizes")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-wrap items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiButton, { size: "sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Small`);
                  } else {
                    return [
                      createTextVNode("Small")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiButton, { size: "md" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Medium`);
                  } else {
                    return [
                      createTextVNode("Medium")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiButton, { size: "lg" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Large`);
                  } else {
                    return [
                      createTextVNode("Large")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                  createVNode(_component_UiButton, { size: "sm" }, {
                    default: withCtx(() => [
                      createTextVNode("Small")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiButton, { size: "md" }, {
                    default: withCtx(() => [
                      createTextVNode("Medium")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiButton, { size: "lg" }, {
                    default: withCtx(() => [
                      createTextVNode("Large")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>Button \u2014 states</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "Button \u2014 states")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-wrap items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiButton, { loading: true }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Loading`);
                  } else {
                    return [
                      createTextVNode("Loading")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiButton, { disabled: true }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Disabled`);
                  } else {
                    return [
                      createTextVNode("Disabled")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiButton, {
                href: "https://astryx.atmeta.com",
                variant: "secondary"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Link button \u2197 `);
                  } else {
                    return [
                      createTextVNode(" Link button \u2197 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                  createVNode(_component_UiButton, { loading: true }, {
                    default: withCtx(() => [
                      createTextVNode("Loading")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiButton, { disabled: true }, {
                    default: withCtx(() => [
                      createTextVNode("Disabled")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiButton, {
                    href: "https://astryx.atmeta.com",
                    variant: "secondary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Link button \u2197 ")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>Badge \u2014 variants</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "Badge \u2014 variants")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-wrap gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiBadge, { variant: "default" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Default`);
                  } else {
                    return [
                      createTextVNode("Default")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiBadge, { variant: "primary" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Primary`);
                  } else {
                    return [
                      createTextVNode("Primary")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiBadge, { variant: "success" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Success`);
                  } else {
                    return [
                      createTextVNode("Success")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiBadge, { variant: "error" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Error`);
                  } else {
                    return [
                      createTextVNode("Error")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiBadge, { variant: "warning" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Warning`);
                  } else {
                    return [
                      createTextVNode("Warning")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiBadge, { variant: "muted" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Muted`);
                  } else {
                    return [
                      createTextVNode("Muted")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="mt-4 flex flex-wrap gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiBadge, {
                variant: "default",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`sm \xB7 default`);
                  } else {
                    return [
                      createTextVNode("sm \xB7 default")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiBadge, {
                variant: "primary",
                pill: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`pill \xB7 primary`);
                  } else {
                    return [
                      createTextVNode("pill \xB7 primary")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiBadge, {
                variant: "success",
                size: "sm",
                pill: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`sm \xB7 pill \xB7 success`);
                  } else {
                    return [
                      createTextVNode("sm \xB7 pill \xB7 success")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-wrap gap-3" }, [
                  createVNode(_component_UiBadge, { variant: "default" }, {
                    default: withCtx(() => [
                      createTextVNode("Default")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiBadge, { variant: "primary" }, {
                    default: withCtx(() => [
                      createTextVNode("Primary")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiBadge, { variant: "success" }, {
                    default: withCtx(() => [
                      createTextVNode("Success")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiBadge, { variant: "error" }, {
                    default: withCtx(() => [
                      createTextVNode("Error")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiBadge, { variant: "warning" }, {
                    default: withCtx(() => [
                      createTextVNode("Warning")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiBadge, { variant: "muted" }, {
                    default: withCtx(() => [
                      createTextVNode("Muted")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "mt-4 flex flex-wrap gap-3" }, [
                  createVNode(_component_UiBadge, {
                    variant: "default",
                    size: "sm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("sm \xB7 default")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiBadge, {
                    variant: "primary",
                    pill: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("pill \xB7 primary")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiBadge, {
                    variant: "success",
                    size: "sm",
                    pill: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("sm \xB7 pill \xB7 success")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>Kbd \u2014 keyboard shortcuts</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "Kbd \u2014 keyboard shortcuts")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-wrap items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiKbd, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u2318`);
                  } else {
                    return [
                      createTextVNode("\u2318")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span class="text-sm text-[--ui-color-text-muted]"${_scopeId}>+</span>`);
              _push2(ssrRenderComponent(_component_UiKbd, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`K`);
                  } else {
                    return [
                      createTextVNode("K")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiDivider, { orientation: "vertical" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiKbd, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Ctrl`);
                  } else {
                    return [
                      createTextVNode("Ctrl")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span class="text-sm text-[--ui-color-text-muted]"${_scopeId}>+</span>`);
              _push2(ssrRenderComponent(_component_UiKbd, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`S`);
                  } else {
                    return [
                      createTextVNode("S")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiDivider, { orientation: "vertical" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiKbd, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Esc`);
                  } else {
                    return [
                      createTextVNode("Esc")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiKbd, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Tab`);
                  } else {
                    return [
                      createTextVNode("Tab")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiKbd, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Enter`);
                  } else {
                    return [
                      createTextVNode("Enter")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                  createVNode(_component_UiKbd, null, {
                    default: withCtx(() => [
                      createTextVNode("\u2318")
                    ]),
                    _: 1
                  }),
                  createVNode("span", { class: "text-sm text-[--ui-color-text-muted]" }, "+"),
                  createVNode(_component_UiKbd, null, {
                    default: withCtx(() => [
                      createTextVNode("K")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiDivider, { orientation: "vertical" }),
                  createVNode(_component_UiKbd, null, {
                    default: withCtx(() => [
                      createTextVNode("Ctrl")
                    ]),
                    _: 1
                  }),
                  createVNode("span", { class: "text-sm text-[--ui-color-text-muted]" }, "+"),
                  createVNode(_component_UiKbd, null, {
                    default: withCtx(() => [
                      createTextVNode("S")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiDivider, { orientation: "vertical" }),
                  createVNode(_component_UiKbd, null, {
                    default: withCtx(() => [
                      createTextVNode("Esc")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiKbd, null, {
                    default: withCtx(() => [
                      createTextVNode("Tab")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiKbd, null, {
                    default: withCtx(() => [
                      createTextVNode("Enter")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedTab.value === "card") {
        _push(`<div class="space-y-10"><div class="grid grid-cols-1 gap-5 sm:grid-cols-3">`);
        _push(ssrRenderComponent(_component_UiCard, {
          variant: "surface",
          padding: "md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted] mb-2"${_scopeId}>Surface</p><p class="text-sm text-[--ui-color-text-secondary]"${_scopeId}>M\u1EB7c \u0111\u1ECBnh v\u1EDBi ring border.</p>`);
            } else {
              return [
                createVNode("p", { class: "text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted] mb-2" }, "Surface"),
                createVNode("p", { class: "text-sm text-[--ui-color-text-secondary]" }, "M\u1EB7c \u0111\u1ECBnh v\u1EDBi ring border.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiCard, {
          variant: "elevated",
          padding: "md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted] mb-2"${_scopeId}>Elevated</p><p class="text-sm text-[--ui-color-text-secondary]"${_scopeId}>Shadow thay v\xEC border.</p>`);
            } else {
              return [
                createVNode("p", { class: "text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted] mb-2" }, "Elevated"),
                createVNode("p", { class: "text-sm text-[--ui-color-text-secondary]" }, "Shadow thay v\xEC border.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiCard, {
          variant: "outlined",
          padding: "md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted] mb-2"${_scopeId}>Outlined</p><p class="text-sm text-[--ui-color-text-secondary]"${_scopeId}>Strong border, bg transparent.</p>`);
            } else {
              return [
                createVNode("p", { class: "text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted] mb-2" }, "Outlined"),
                createVNode("p", { class: "text-sm text-[--ui-color-text-secondary]" }, "Strong border, bg transparent.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_UiCard, {
          hoverable: true,
          padding: "md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-sm font-medium text-[--ui-color-text-primary]"${_scopeId}>Hoverable card \u2014 hover \u0111\u1EC3 xem hi\u1EC7u \u1EE9ng lift</p><p class="text-xs text-[--ui-color-text-muted] mt-1"${_scopeId}>D\xF9ng prop `);
              _push2(ssrRenderComponent(_component_UiKbd, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`:hoverable=&quot;true&quot;`);
                  } else {
                    return [
                      createTextVNode(':hoverable="true"')
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p>`);
            } else {
              return [
                createVNode("p", { class: "text-sm font-medium text-[--ui-color-text-primary]" }, "Hoverable card \u2014 hover \u0111\u1EC3 xem hi\u1EC7u \u1EE9ng lift"),
                createVNode("p", { class: "text-xs text-[--ui-color-text-muted] mt-1" }, [
                  createTextVNode("D\xF9ng prop "),
                  createVNode(_component_UiKbd, null, {
                    default: withCtx(() => [
                      createTextVNode(':hoverable="true"')
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>Avatar \u2014 sizes &amp; shapes</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "Avatar \u2014 sizes & shapes")
              ];
            }
          }),
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-xs text-[--ui-color-text-muted]"${_scopeId}>M\xE0u avatar \u0111\u01B0\u1EE3c t\u1EA1o t\u1EF1 \u0111\u1ED9ng t\u1EEB t\xEAn, nh\u1EA5t qu\xE1n m\u1ED7i l\u1EA7n render.</p>`);
            } else {
              return [
                createVNode("p", { class: "text-xs text-[--ui-color-text-muted]" }, "M\xE0u avatar \u0111\u01B0\u1EE3c t\u1EA1o t\u1EF1 \u0111\u1ED9ng t\u1EEB t\xEAn, nh\u1EA5t qu\xE1n m\u1ED7i l\u1EA7n render.")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-wrap items-end gap-4 mb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiAvatar, {
                size: "xs",
                name: "Nguy\u1EC5n V\u0103n A"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiAvatar, {
                size: "sm",
                name: "Tr\u1EA7n Th\u1ECB B"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiAvatar, {
                size: "md",
                name: "L\xEA V\u0103n C"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiAvatar, {
                size: "lg",
                name: "Ph\u1EA1m Th\u1ECB D"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiAvatar, {
                size: "xl",
                name: "Ho\xE0ng V\u0103n E"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-wrap items-end gap-4 mb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiAvatar, {
                size: "md",
                name: "Square A",
                shape: "square"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiAvatar, {
                size: "lg",
                name: "Square B",
                shape: "square"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiAvatar, {
                size: "xl",
                src: "https://i.pravatar.cc/150?img=5",
                name: "With Photo"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-wrap items-end gap-6"${_scopeId}><div class="relative inline-flex"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiAvatar, {
                size: "lg",
                name: "Online User"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiStatusDot, {
                variant: "online",
                size: "md",
                pulse: true,
                class: "absolute bottom-0 right-0 ring-2 ring-white dark:ring-[#1c1c1c]"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="relative inline-flex"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiAvatar, {
                size: "lg",
                name: "Busy User"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiStatusDot, {
                variant: "busy",
                size: "md",
                class: "absolute bottom-0 right-0 ring-2 ring-white dark:ring-[#1c1c1c]"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="relative inline-flex"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiAvatar, {
                size: "lg",
                name: "Away User"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiStatusDot, {
                variant: "away",
                size: "md",
                class: "absolute bottom-0 right-0 ring-2 ring-white dark:ring-[#1c1c1c]"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="relative inline-flex"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiAvatar, {
                size: "lg",
                name: "Offline User"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiStatusDot, {
                variant: "offline",
                size: "md",
                class: "absolute bottom-0 right-0 ring-2 ring-white dark:ring-[#1c1c1c]"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-wrap items-end gap-4 mb-6" }, [
                  createVNode(_component_UiAvatar, {
                    size: "xs",
                    name: "Nguy\u1EC5n V\u0103n A"
                  }),
                  createVNode(_component_UiAvatar, {
                    size: "sm",
                    name: "Tr\u1EA7n Th\u1ECB B"
                  }),
                  createVNode(_component_UiAvatar, {
                    size: "md",
                    name: "L\xEA V\u0103n C"
                  }),
                  createVNode(_component_UiAvatar, {
                    size: "lg",
                    name: "Ph\u1EA1m Th\u1ECB D"
                  }),
                  createVNode(_component_UiAvatar, {
                    size: "xl",
                    name: "Ho\xE0ng V\u0103n E"
                  })
                ]),
                createVNode("div", { class: "flex flex-wrap items-end gap-4 mb-6" }, [
                  createVNode(_component_UiAvatar, {
                    size: "md",
                    name: "Square A",
                    shape: "square"
                  }),
                  createVNode(_component_UiAvatar, {
                    size: "lg",
                    name: "Square B",
                    shape: "square"
                  }),
                  createVNode(_component_UiAvatar, {
                    size: "xl",
                    src: "https://i.pravatar.cc/150?img=5",
                    name: "With Photo"
                  })
                ]),
                createVNode("div", { class: "flex flex-wrap items-end gap-6" }, [
                  createVNode("div", { class: "relative inline-flex" }, [
                    createVNode(_component_UiAvatar, {
                      size: "lg",
                      name: "Online User"
                    }),
                    createVNode(_component_UiStatusDot, {
                      variant: "online",
                      size: "md",
                      pulse: true,
                      class: "absolute bottom-0 right-0 ring-2 ring-white dark:ring-[#1c1c1c]"
                    })
                  ]),
                  createVNode("div", { class: "relative inline-flex" }, [
                    createVNode(_component_UiAvatar, {
                      size: "lg",
                      name: "Busy User"
                    }),
                    createVNode(_component_UiStatusDot, {
                      variant: "busy",
                      size: "md",
                      class: "absolute bottom-0 right-0 ring-2 ring-white dark:ring-[#1c1c1c]"
                    })
                  ]),
                  createVNode("div", { class: "relative inline-flex" }, [
                    createVNode(_component_UiAvatar, {
                      size: "lg",
                      name: "Away User"
                    }),
                    createVNode(_component_UiStatusDot, {
                      variant: "away",
                      size: "md",
                      class: "absolute bottom-0 right-0 ring-2 ring-white dark:ring-[#1c1c1c]"
                    })
                  ]),
                  createVNode("div", { class: "relative inline-flex" }, [
                    createVNode(_component_UiAvatar, {
                      size: "lg",
                      name: "Offline User"
                    }),
                    createVNode(_component_UiStatusDot, {
                      variant: "offline",
                      size: "md",
                      class: "absolute bottom-0 right-0 ring-2 ring-white dark:ring-[#1c1c1c]"
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>Skeleton loading</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "Skeleton loading")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-5"${_scopeId}><div class="flex items-start gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiSkeleton, {
                width: "48",
                height: "48",
                rounded: "full"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex-1 space-y-2 pt-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiSkeleton, {
                height: "14",
                width: "60%"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiSkeleton, {
                height: "12",
                lines: 3
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
              _push2(ssrRenderComponent(_component_UiSkeleton, {
                height: "140",
                rounded: "md"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-5" }, [
                  createVNode("div", { class: "flex items-start gap-4" }, [
                    createVNode(_component_UiSkeleton, {
                      width: "48",
                      height: "48",
                      rounded: "full"
                    }),
                    createVNode("div", { class: "flex-1 space-y-2 pt-1" }, [
                      createVNode(_component_UiSkeleton, {
                        height: "14",
                        width: "60%"
                      }),
                      createVNode(_component_UiSkeleton, {
                        height: "12",
                        lines: 3
                      })
                    ])
                  ]),
                  createVNode(_component_UiSkeleton, {
                    height: "140",
                    rounded: "md"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedTab.value === "feedback") {
        _push(`<div class="space-y-10">`);
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>Toast \u2014 imperative API</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "Toast \u2014 imperative API")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-sm text-[--ui-color-text-secondary] mb-4"${_scopeId}> D\xF9ng <code class="text-xs bg-[--ui-color-bg-muted] px-1.5 py-0.5 rounded font-mono"${_scopeId}>useToast()</code> t\u1EEB b\u1EA5t k\u1EF3 component n\xE0o. </p><div class="flex flex-wrap gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiButton, {
                variant: "ghost",
                onClick: ($event) => unref(toast).show({ message: "Th\xF4ng b\xE1o m\u1EB7c \u0111\u1ECBnh", variant: "default" })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Default`);
                  } else {
                    return [
                      createTextVNode("Default")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiButton, {
                variant: "ghost",
                onClick: ($event) => unref(toast).success("\u0110\xE3 l\u01B0u th\xE0nh c\xF4ng! \u2713")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Success`);
                  } else {
                    return [
                      createTextVNode("Success")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiButton, {
                variant: "ghost",
                onClick: ($event) => unref(toast).error("C\xF3 l\u1ED7i x\u1EA3y ra. Th\u1EED l\u1EA1i.")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Error`);
                  } else {
                    return [
                      createTextVNode("Error")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiButton, {
                variant: "ghost",
                onClick: ($event) => unref(toast).warning("Dung l\u01B0\u1EE3ng g\u1EA7n \u0111\u1EA7y.")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Warning`);
                  } else {
                    return [
                      createTextVNode("Warning")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiButton, {
                variant: "secondary",
                onClick: ($event) => unref(toast).show({ title: "Ti\xEAu \u0111\u1EC1", message: "Toast v\u1EDBi ti\xEAu \u0111\u1EC1 ri\xEAng bi\u1EC7t.", variant: "success" })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` With title `);
                  } else {
                    return [
                      createTextVNode(" With title ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("p", { class: "text-sm text-[--ui-color-text-secondary] mb-4" }, [
                  createTextVNode(" D\xF9ng "),
                  createVNode("code", { class: "text-xs bg-[--ui-color-bg-muted] px-1.5 py-0.5 rounded font-mono" }, "useToast()"),
                  createTextVNode(" t\u1EEB b\u1EA5t k\u1EF3 component n\xE0o. ")
                ]),
                createVNode("div", { class: "flex flex-wrap gap-3" }, [
                  createVNode(_component_UiButton, {
                    variant: "ghost",
                    onClick: ($event) => unref(toast).show({ message: "Th\xF4ng b\xE1o m\u1EB7c \u0111\u1ECBnh", variant: "default" })
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Default")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UiButton, {
                    variant: "ghost",
                    onClick: ($event) => unref(toast).success("\u0110\xE3 l\u01B0u th\xE0nh c\xF4ng! \u2713")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Success")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UiButton, {
                    variant: "ghost",
                    onClick: ($event) => unref(toast).error("C\xF3 l\u1ED7i x\u1EA3y ra. Th\u1EED l\u1EA1i.")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Error")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UiButton, {
                    variant: "ghost",
                    onClick: ($event) => unref(toast).warning("Dung l\u01B0\u1EE3ng g\u1EA7n \u0111\u1EA7y.")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Warning")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UiButton, {
                    variant: "secondary",
                    onClick: ($event) => unref(toast).show({ title: "Ti\xEAu \u0111\u1EC1", message: "Toast v\u1EDBi ti\xEAu \u0111\u1EC1 ri\xEAng bi\u1EC7t.", variant: "success" })
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" With title ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>Banner \u2014 contextual alerts</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "Banner \u2014 contextual alerts")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiBanner, {
                variant: "info",
                title: "Th\xF4ng tin"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Panorama m\u1EDBi \u0111\xE3 \u0111\u01B0\u1EE3c t\u1EA3i l\xEAn v\xE0 \u0111ang ch\u1EDD x\u1EED l\xFD.`);
                  } else {
                    return [
                      createTextVNode("Panorama m\u1EDBi \u0111\xE3 \u0111\u01B0\u1EE3c t\u1EA3i l\xEAn v\xE0 \u0111ang ch\u1EDD x\u1EED l\xFD.")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiBanner, {
                variant: "success",
                title: "Th\xE0nh c\xF4ng",
                dismissable: true
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Tour \u0111\xE3 \u0111\u01B0\u1EE3c l\u01B0u th\xE0nh c\xF4ng v\xE0o h\u1EC7 th\u1ED1ng.`);
                  } else {
                    return [
                      createTextVNode("Tour \u0111\xE3 \u0111\u01B0\u1EE3c l\u01B0u th\xE0nh c\xF4ng v\xE0o h\u1EC7 th\u1ED1ng.")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiBanner, {
                variant: "warning",
                dismissable: true
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u1EA2nh ch\u1EE5p c\xF3 \u0111\u1ED9 ph\xE2n gi\u1EA3i th\u1EA5p. Ch\u1EA5t l\u01B0\u1EE3ng xem c\xF3 th\u1EC3 b\u1ECB \u1EA3nh h\u01B0\u1EDFng.`);
                  } else {
                    return [
                      createTextVNode("\u1EA2nh ch\u1EE5p c\xF3 \u0111\u1ED9 ph\xE2n gi\u1EA3i th\u1EA5p. Ch\u1EA5t l\u01B0\u1EE3ng xem c\xF3 th\u1EC3 b\u1ECB \u1EA3nh h\u01B0\u1EDFng.")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiBanner, {
                variant: "error",
                title: "L\u1ED7i t\u1EA3i \u1EA3nh"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Kh\xF4ng th\u1EC3 t\u1EA3i panorama. Ki\u1EC3m tra k\u1EBFt n\u1ED1i v\xE0 th\u1EED l\u1EA1i.`);
                  } else {
                    return [
                      createTextVNode("Kh\xF4ng th\u1EC3 t\u1EA3i panorama. Ki\u1EC3m tra k\u1EBFt n\u1ED1i v\xE0 th\u1EED l\u1EA1i.")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiBanner, { variant: "info" }, {
                actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      size: "sm",
                      variant: "secondary"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`T\xECm hi\u1EC3u th\xEAm`);
                        } else {
                          return [
                            createTextVNode("T\xECm hi\u1EC3u th\xEAm")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiButton, {
                      size: "sm",
                      variant: "ghost"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`B\u1ECF qua`);
                        } else {
                          return [
                            createTextVNode("B\u1ECF qua")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, {
                        size: "sm",
                        variant: "secondary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("T\xECm hi\u1EC3u th\xEAm")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiButton, {
                        size: "sm",
                        variant: "ghost"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("B\u1ECF qua")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Banner v\u1EDBi actions slot. `);
                  } else {
                    return [
                      createTextVNode(" Banner v\u1EDBi actions slot. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-3" }, [
                  createVNode(_component_UiBanner, {
                    variant: "info",
                    title: "Th\xF4ng tin"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Panorama m\u1EDBi \u0111\xE3 \u0111\u01B0\u1EE3c t\u1EA3i l\xEAn v\xE0 \u0111ang ch\u1EDD x\u1EED l\xFD.")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiBanner, {
                    variant: "success",
                    title: "Th\xE0nh c\xF4ng",
                    dismissable: true
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Tour \u0111\xE3 \u0111\u01B0\u1EE3c l\u01B0u th\xE0nh c\xF4ng v\xE0o h\u1EC7 th\u1ED1ng.")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiBanner, {
                    variant: "warning",
                    dismissable: true
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u1EA2nh ch\u1EE5p c\xF3 \u0111\u1ED9 ph\xE2n gi\u1EA3i th\u1EA5p. Ch\u1EA5t l\u01B0\u1EE3ng xem c\xF3 th\u1EC3 b\u1ECB \u1EA3nh h\u01B0\u1EDFng.")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiBanner, {
                    variant: "error",
                    title: "L\u1ED7i t\u1EA3i \u1EA3nh"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Kh\xF4ng th\u1EC3 t\u1EA3i panorama. Ki\u1EC3m tra k\u1EBFt n\u1ED1i v\xE0 th\u1EED l\u1EA1i.")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiBanner, { variant: "info" }, {
                    actions: withCtx(() => [
                      createVNode(_component_UiButton, {
                        size: "sm",
                        variant: "secondary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("T\xECm hi\u1EC3u th\xEAm")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiButton, {
                        size: "sm",
                        variant: "ghost"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("B\u1ECF qua")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Banner v\u1EDBi actions slot. ")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>EmptyState</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "EmptyState")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiEmptyState, {
                icon: "\u{1F5FA}\uFE0F",
                title: "Ch\u01B0a c\xF3 tour n\xE0o",
                description: "B\u1EAFt \u0111\u1EA7u b\u1EB1ng c\xE1ch t\u1EA3i l\xEAn \u1EA3nh panorama \u0111\u1EA7u ti\xEAn c\u1EE7a b\u1EA1n."
              }, {
                actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, { variant: "primary" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`T\u1EA1o tour m\u1EDBi`);
                        } else {
                          return [
                            createTextVNode("T\u1EA1o tour m\u1EDBi")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiButton, { variant: "ghost" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Xem h\u01B0\u1EDBng d\u1EABn`);
                        } else {
                          return [
                            createTextVNode("Xem h\u01B0\u1EDBng d\u1EABn")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, { variant: "primary" }, {
                        default: withCtx(() => [
                          createTextVNode("T\u1EA1o tour m\u1EDBi")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiButton, { variant: "ghost" }, {
                        default: withCtx(() => [
                          createTextVNode("Xem h\u01B0\u1EDBng d\u1EABn")
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
                createVNode(_component_UiEmptyState, {
                  icon: "\u{1F5FA}\uFE0F",
                  title: "Ch\u01B0a c\xF3 tour n\xE0o",
                  description: "B\u1EAFt \u0111\u1EA7u b\u1EB1ng c\xE1ch t\u1EA3i l\xEAn \u1EA3nh panorama \u0111\u1EA7u ti\xEAn c\u1EE7a b\u1EA1n."
                }, {
                  actions: withCtx(() => [
                    createVNode(_component_UiButton, { variant: "primary" }, {
                      default: withCtx(() => [
                        createTextVNode("T\u1EA1o tour m\u1EDBi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiButton, { variant: "ghost" }, {
                      default: withCtx(() => [
                        createTextVNode("Xem h\u01B0\u1EDBng d\u1EABn")
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
        _push(`<!---->`);
      }
      if (selectedTab.value === "form") {
        _push(`<div class="space-y-10">`);
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>TextInput</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "TextInput")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="grid grid-cols-1 gap-5 sm:grid-cols-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiTextInput, {
                modelValue: inputVal.value,
                "onUpdate:modelValue": ($event) => inputVal.value = $event,
                label: "T\xEAn tour",
                placeholder: "Nh\u1EADp t\xEAn tour...",
                hint: "T\xEAn s\u1EBD hi\u1EC3n th\u1ECB trong danh s\xE1ch."
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTextInput, {
                modelValue: errorInput.value,
                "onUpdate:modelValue": ($event) => errorInput.value = $event,
                label: "Email",
                type: "email",
                placeholder: "user@example.com",
                error: "\u0110\u1ECBa ch\u1EC9 email kh\xF4ng h\u1EE3p l\u1EC7.",
                required: true
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTextInput, {
                label: "T\xECm ki\u1EBFm",
                placeholder: "T\xECm c\u1EA3nh...",
                size: "sm"
              }, {
                leading: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}><path d="m21 21-4.34-4.34"${_scopeId2}></path><circle cx="11" cy="11" r="8"${_scopeId2}></circle></svg>`);
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
                        createVNode("path", { d: "m21 21-4.34-4.34" }),
                        createVNode("circle", {
                          cx: "11",
                          cy: "11",
                          r: "8"
                        })
                      ]))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTextInput, {
                label: "Ch\u1EC9 \u0111\u1ECDc",
                "model-value": "Gi\xE1 tr\u1ECB c\u1ED1 \u0111\u1ECBnh",
                readonly: true
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTextInput, {
                label: "B\u1ECB v\xF4 hi\u1EC7u h\xF3a",
                placeholder: "Kh\xF4ng th\u1EC3 nh\u1EADp...",
                disabled: true
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "grid grid-cols-1 gap-5 sm:grid-cols-2" }, [
                  createVNode(_component_UiTextInput, {
                    modelValue: inputVal.value,
                    "onUpdate:modelValue": ($event) => inputVal.value = $event,
                    label: "T\xEAn tour",
                    placeholder: "Nh\u1EADp t\xEAn tour...",
                    hint: "T\xEAn s\u1EBD hi\u1EC3n th\u1ECB trong danh s\xE1ch."
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_UiTextInput, {
                    modelValue: errorInput.value,
                    "onUpdate:modelValue": ($event) => errorInput.value = $event,
                    label: "Email",
                    type: "email",
                    placeholder: "user@example.com",
                    error: "\u0110\u1ECBa ch\u1EC9 email kh\xF4ng h\u1EE3p l\u1EC7.",
                    required: true
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_UiTextInput, {
                    label: "T\xECm ki\u1EBFm",
                    placeholder: "T\xECm c\u1EA3nh...",
                    size: "sm"
                  }, {
                    leading: withCtx(() => [
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
                        createVNode("path", { d: "m21 21-4.34-4.34" }),
                        createVNode("circle", {
                          cx: "11",
                          cy: "11",
                          r: "8"
                        })
                      ]))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTextInput, {
                    label: "Ch\u1EC9 \u0111\u1ECDc",
                    "model-value": "Gi\xE1 tr\u1ECB c\u1ED1 \u0111\u1ECBnh",
                    readonly: true
                  }),
                  createVNode(_component_UiTextInput, {
                    label: "B\u1ECB v\xF4 hi\u1EC7u h\xF3a",
                    placeholder: "Kh\xF4ng th\u1EC3 nh\u1EADp...",
                    disabled: true
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>Switch</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "Switch")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiSwitch, {
                modelValue: switchVal.value,
                "onUpdate:modelValue": ($event) => switchVal.value = $event,
                label: "B\u1EADt th\xF4ng b\xE1o"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiSwitch, {
                "model-value": true,
                label: "L\u01B0u t\u1EF1 \u0111\u1ED9ng",
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiSwitch, {
                "model-value": false,
                label: "Ch\u1EBF \u0111\u1ED9 ngo\u1EA1i tuy\u1EBFn",
                disabled: true
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-xs text-[--ui-color-text-muted]"${_scopeId}> Switch 1: `);
              _push2(ssrRenderComponent(_component_UiBadge, {
                variant: switchVal.value ? "success" : "muted"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(switchVal.value ? "B\u1EADt" : "T\u1EAFt")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(switchVal.value ? "B\u1EADt" : "T\u1EAFt"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-4" }, [
                  createVNode(_component_UiSwitch, {
                    modelValue: switchVal.value,
                    "onUpdate:modelValue": ($event) => switchVal.value = $event,
                    label: "B\u1EADt th\xF4ng b\xE1o"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_UiSwitch, {
                    "model-value": true,
                    label: "L\u01B0u t\u1EF1 \u0111\u1ED9ng",
                    size: "sm"
                  }),
                  createVNode(_component_UiSwitch, {
                    "model-value": false,
                    label: "Ch\u1EBF \u0111\u1ED9 ngo\u1EA1i tuy\u1EBFn",
                    disabled: true
                  }),
                  createVNode("p", { class: "text-xs text-[--ui-color-text-muted]" }, [
                    createTextVNode(" Switch 1: "),
                    createVNode(_component_UiBadge, {
                      variant: switchVal.value ? "success" : "muted"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(switchVal.value ? "B\u1EADt" : "T\u1EAFt"), 1)
                      ]),
                      _: 1
                    }, 8, ["variant"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedTab.value === "misc") {
        _push(`<div class="space-y-10">`);
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>Spinner</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "Spinner")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-wrap items-center gap-6"${_scopeId}><div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiSpinner, { size: "sm" }, null, _parent2, _scopeId));
              _push2(`<p class="mt-2 text-xs text-[--ui-color-text-muted]"${_scopeId}>sm</p></div><div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiSpinner, { size: "md" }, null, _parent2, _scopeId));
              _push2(`<p class="mt-2 text-xs text-[--ui-color-text-muted]"${_scopeId}>md</p></div><div class="text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiSpinner, { size: "lg" }, null, _parent2, _scopeId));
              _push2(`<p class="mt-2 text-xs text-[--ui-color-text-muted]"${_scopeId}>lg</p></div><div class="grid h-16 w-16 place-items-center rounded-lg bg-ink text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiSpinner, {
                size: "md",
                color: "white"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-[9px] text-white/50 mt-1"${_scopeId}>white</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-wrap items-center gap-6" }, [
                  createVNode("div", { class: "text-center" }, [
                    createVNode(_component_UiSpinner, { size: "sm" }),
                    createVNode("p", { class: "mt-2 text-xs text-[--ui-color-text-muted]" }, "sm")
                  ]),
                  createVNode("div", { class: "text-center" }, [
                    createVNode(_component_UiSpinner, { size: "md" }),
                    createVNode("p", { class: "mt-2 text-xs text-[--ui-color-text-muted]" }, "md")
                  ]),
                  createVNode("div", { class: "text-center" }, [
                    createVNode(_component_UiSpinner, { size: "lg" }),
                    createVNode("p", { class: "mt-2 text-xs text-[--ui-color-text-muted]" }, "lg")
                  ]),
                  createVNode("div", { class: "grid h-16 w-16 place-items-center rounded-lg bg-ink text-center" }, [
                    createVNode(_component_UiSpinner, {
                      size: "md",
                      color: "white"
                    }),
                    createVNode("p", { class: "text-[9px] text-white/50 mt-1" }, "white")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>Divider</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "Divider")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiDivider, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiDivider, { variant: "subtle" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiDivider, { variant: "strong" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiDivider, { label: "ho\u1EB7c" }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center h-10 gap-4"${_scopeId}><span class="text-sm text-[--ui-color-text-secondary]"${_scopeId}>Tr\xE1i</span>`);
              _push2(ssrRenderComponent(_component_UiDivider, { orientation: "vertical" }, null, _parent2, _scopeId));
              _push2(`<span class="text-sm text-[--ui-color-text-secondary]"${_scopeId}>Ph\u1EA3i</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-4" }, [
                  createVNode(_component_UiDivider),
                  createVNode(_component_UiDivider, { variant: "subtle" }),
                  createVNode(_component_UiDivider, { variant: "strong" }),
                  createVNode(_component_UiDivider, { label: "ho\u1EB7c" }),
                  createVNode("div", { class: "flex items-center h-10 gap-4" }, [
                    createVNode("span", { class: "text-sm text-[--ui-color-text-secondary]" }, "Tr\xE1i"),
                    createVNode(_component_UiDivider, { orientation: "vertical" }),
                    createVNode("span", { class: "text-sm text-[--ui-color-text-secondary]" }, "Ph\u1EA3i")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>Tooltip</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "Tooltip")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-wrap gap-6 py-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiTooltip, {
                content: "Xem panorama 360\xB0",
                placement: "top"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      variant: "secondary",
                      size: "sm"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Hover (top)`);
                        } else {
                          return [
                            createTextVNode("Hover (top)")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, {
                        variant: "secondary",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Hover (top)")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTooltip, {
                content: "Ch\u1EC9nh s\u1EEDa c\u1EA3nh",
                placement: "bottom"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      variant: "secondary",
                      size: "sm"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Hover (bottom)`);
                        } else {
                          return [
                            createTextVNode("Hover (bottom)")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, {
                        variant: "secondary",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Hover (bottom)")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTooltip, {
                content: "Xo\xE1 tour n\xE0y",
                placement: "right"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      variant: "danger",
                      size: "sm"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Hover (right)`);
                        } else {
                          return [
                            createTextVNode("Hover (right)")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, {
                        variant: "danger",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Hover (right)")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-wrap gap-6 py-4" }, [
                  createVNode(_component_UiTooltip, {
                    content: "Xem panorama 360\xB0",
                    placement: "top"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, {
                        variant: "secondary",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Hover (top)")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTooltip, {
                    content: "Ch\u1EC9nh s\u1EEDa c\u1EA3nh",
                    placement: "bottom"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, {
                        variant: "secondary",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Hover (bottom)")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTooltip, {
                    content: "Xo\xE1 tour n\xE0y",
                    placement: "right"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, {
                        variant: "danger",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Hover (right)")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-sm font-semibold text-[--ui-color-text-primary]"${_scopeId}>StatusDot \u2014 t\u1EA5t c\u1EA3 variants</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-sm font-semibold text-[--ui-color-text-primary]" }, "StatusDot \u2014 t\u1EA5t c\u1EA3 variants")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-wrap items-center gap-6"${_scopeId}><!--[-->`);
              ssrRenderList(["online", "offline", "busy", "away"], (s) => {
                _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UiStatusDot, {
                  variant: s,
                  pulse: s === "online"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-sm capitalize text-[--ui-color-text-secondary]"${_scopeId}>${ssrInterpolate(s)}</span></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-wrap items-center gap-6" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(["online", "offline", "busy", "away"], (s) => {
                    return createVNode("div", {
                      key: s,
                      class: "flex items-center gap-2"
                    }, [
                      createVNode(_component_UiStatusDot, {
                        variant: s,
                        pulse: s === "online"
                      }, null, 8, ["variant", "pulse"]),
                      createVNode("span", { class: "text-sm capitalize text-[--ui-color-text-secondary]" }, toDisplayString(s), 1)
                    ]);
                  }), 64))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui-demo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/ui-demo-C11uyjw1');
//# sourceMappingURL=ui-demo-C11uyjw1.mjs.map
