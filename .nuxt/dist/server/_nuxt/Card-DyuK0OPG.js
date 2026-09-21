import { defineComponent, mergeProps, useSSRContext, createVNode, resolveDynamicComponent, withCtx, openBlock, createBlock, renderSlot, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderVNode } from "vue/server-renderer";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    variant: { default: "default" },
    size: { default: "md" },
    pill: { type: Boolean, default: false }
  },
  setup(__props) {
    const variantClasses = {
      default: "bg-[--ui-color-bg-muted]  text-[--ui-color-text-secondary] ring-1 ring-[--ui-color-border]",
      primary: "bg-[--ui-color-brand-muted] text-[--ui-color-brand] ring-1 ring-[--ui-color-brand]/20",
      success: "bg-[--ui-color-success-muted] text-[--ui-color-success] ring-1 ring-[--ui-color-success]/20",
      error: "bg-[--ui-color-error-muted] text-[--ui-color-error]   ring-1 ring-[--ui-color-error]/20",
      warning: "bg-[--ui-color-warning-muted] text-[--ui-color-warning] ring-1 ring-[--ui-color-warning]/20",
      muted: "bg-[--ui-color-bg-subtle]  text-[--ui-color-text-muted]  ring-1 ring-[--ui-color-border-subtle]"
    };
    const sizeClasses = {
      sm: "text-[10px] font-semibold px-1.5 py-0.5 leading-none tracking-wide uppercase",
      md: "text-xs     font-medium  px-2   py-1   leading-none"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: [
          "inline-flex items-center gap-1 whitespace-nowrap",
          variantClasses[__props.variant],
          sizeClasses[__props.size],
          __props.pill ? "rounded-full" : "rounded-[--ui-radius-xs]"
        ]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Badge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    variant: { default: "surface" },
    padding: { default: "md" },
    hoverable: { type: Boolean, default: false },
    clickable: { type: Boolean, default: false },
    as: { default: "div" }
  },
  setup(__props) {
    const variantClasses = {
      surface: "bg-[--ui-color-surface] ring-1 ring-[--ui-color-border]",
      elevated: "bg-[--ui-color-surface-raised] shadow-[--ui-shadow-low]",
      outlined: "bg-transparent ring-1 ring-[--ui-color-border-strong]"
    };
    const paddingClasses = {
      none: "",
      sm: "p-3",
      md: "p-5",
      lg: "p-7"
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.clickable ? "button" : __props.as), mergeProps({
        type: __props.clickable ? "button" : void 0,
        class: [
          "block w-full rounded-[--ui-radius-md] transition-all duration-[--ui-transition-base]",
          variantClasses[__props.variant],
          paddingClasses[__props.padding],
          __props.hoverable || __props.clickable ? "hover:shadow-[--ui-shadow-medium] hover:-translate-y-px" : "",
          __props.clickable ? "cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-[--ui-color-brand]" : ""
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$slots.header) {
              _push2(`<div class="mb-4 border-b border-[--ui-color-border-subtle] pb-4"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (_ctx.$slots.footer) {
              _push2(`<div class="mt-4 border-t border-[--ui-color-border-subtle] pt-4"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.$slots.header ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 border-b border-[--ui-color-border-subtle] pb-4"
              }, [
                renderSlot(_ctx.$slots, "header")
              ])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default"),
              _ctx.$slots.footer ? (openBlock(), createBlock("div", {
                key: 1,
                class: "mt-4 border-t border-[--ui-color-border-subtle] pt-4"
              }, [
                renderSlot(_ctx.$slots, "footer")
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
//# sourceMappingURL=Card-DyuK0OPG.js.map
