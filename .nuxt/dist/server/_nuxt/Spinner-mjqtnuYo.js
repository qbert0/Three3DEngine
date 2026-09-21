import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Spinner",
  __ssrInlineRender: true,
  props: {
    size: { default: "md" },
    color: { default: "primary" },
    label: { default: "Đang tải…" }
  },
  setup(__props) {
    const sizeClasses = {
      sm: "h-4 w-4 border-[1.5px]",
      md: "h-6 w-6 border-2",
      lg: "h-8 w-8 border-[2.5px]"
    };
    const colorClasses = {
      primary: "border-[--ui-color-brand-subtle] border-t-[--ui-color-brand]",
      white: "border-white/25 border-t-white",
      inherit: "border-current/20 border-t-current"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        role: "status",
        "aria-label": __props.label,
        class: [
          "inline-block animate-spin rounded-full",
          sizeClasses[__props.size],
          colorClasses[__props.color]
        ]
      }, _attrs))}></span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Spinner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Spinner-mjqtnuYo.js.map
