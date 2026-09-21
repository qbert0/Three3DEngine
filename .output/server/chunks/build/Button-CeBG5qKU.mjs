globalThis.__timing__.logStart('Load chunks/build/Button-CeBG5qKU');import { defineComponent, computed, createVNode, resolveDynamicComponent, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    type: { default: "button" },
    href: {},
    as: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => {
      var _a;
      return props.href ? "a" : (_a = props.as) != null ? _a : "button";
    });
    const variantClasses = {
      primary: "bg-[--ui-color-brand] text-white hover:bg-[--ui-color-brand-hover] active:bg-[--ui-color-brand-active] focus-visible:ring-[--ui-color-brand]",
      secondary: "bg-transparent text-[--ui-color-brand] ring-1 ring-[--ui-color-brand] hover:bg-[--ui-color-brand-muted] active:bg-[--ui-color-brand-subtle]  focus-visible:ring-[--ui-color-brand]",
      ghost: "bg-transparent text-[--ui-color-text-primary] hover:bg-[--ui-color-bg-muted] active:bg-[--ui-color-bg-subtle] focus-visible:ring-[--ui-color-border-strong]",
      muted: "bg-[--ui-color-bg-muted] text-[--ui-color-text-secondary] hover:bg-[--ui-color-bg-subtle] active:opacity-80 focus-visible:ring-[--ui-color-border-strong]",
      danger: "bg-[--ui-color-error] text-white hover:bg-[--ui-color-error-hover] active:opacity-90 focus-visible:ring-[--ui-color-error]"
    };
    const sizeClasses = {
      sm: "h-8  px-3   text-xs   gap-1.5 rounded-[--ui-radius-sm]",
      md: "h-10 px-4   text-sm   gap-2   rounded-[--ui-radius-sm]",
      lg: "h-12 px-5   text-base gap-2.5 rounded-[--ui-radius-md]"
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({
        type: tag.value === "button" ? __props.type : void 0,
        href: __props.href,
        disabled: __props.disabled || __props.loading || void 0,
        "aria-busy": __props.loading || void 0,
        class: [
          "inline-flex items-center justify-center font-medium leading-none",
          "select-none whitespace-nowrap outline-none",
          "transition-all duration-[--ui-transition-fast]",
          "focus-visible:ring-2 focus-visible:ring-offset-1",
          variantClasses[__props.variant],
          sizeClasses[__props.size],
          __props.disabled || __props.loading ? "opacity-50 pointer-events-none" : ""
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.loading) {
              _push2(`<span class="mr-1 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "icon-leading", {}, null, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "icon-trailing", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              __props.loading ? (openBlock(), createBlock("span", {
                key: 0,
                class: "mr-1 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
              })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "icon-leading"),
              renderSlot(_ctx.$slots, "default"),
              renderSlot(_ctx.$slots, "icon-trailing")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };;globalThis.__timing__.logEnd('Load chunks/build/Button-CeBG5qKU');
//# sourceMappingURL=Button-CeBG5qKU.mjs.map
