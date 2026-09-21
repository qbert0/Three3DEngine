globalThis.__timing__.logStart('Load chunks/build/StatusDot-DZG56uwW');import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatusDot",
  __ssrInlineRender: true,
  props: {
    variant: { default: "online" },
    size: { default: "md" },
    pulse: { type: Boolean, default: false }
  },
  setup(__props) {
    const variantClasses = {
      online: "bg-[--ui-color-success]",
      offline: "bg-[--ui-color-text-muted]",
      busy: "bg-[--ui-color-error]",
      away: "bg-[--ui-color-warning]"
    };
    const sizeClasses = {
      sm: "h-2   w-2   ring-[1.5px]",
      md: "h-2.5 w-2.5 ring-2",
      lg: "h-3   w-3   ring-2"
    };
    const labels = {
      online: "Tr\u1EF1c tuy\u1EBFn",
      offline: "Ngo\u1EA1i tuy\u1EBFn",
      busy: "B\u1EADn",
      away: "V\u1EAFng m\u1EB7t"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        "aria-label": labels[__props.variant],
        role: "img",
        class: [
          "inline-block rounded-full ring-white dark:ring-[--ui-color-surface]",
          variantClasses[__props.variant],
          sizeClasses[__props.size],
          __props.pulse && __props.variant === "online" ? "animate-pulse" : ""
        ]
      }, _attrs))}></span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/StatusDot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };;globalThis.__timing__.logEnd('Load chunks/build/StatusDot-DZG56uwW');
//# sourceMappingURL=StatusDot-DZG56uwW.mjs.map
