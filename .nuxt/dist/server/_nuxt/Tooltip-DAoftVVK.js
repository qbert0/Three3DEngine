import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tooltip",
  __ssrInlineRender: true,
  props: {
    content: {},
    placement: { default: "top" },
    delay: { default: 400 }
  },
  setup(__props) {
    const visible = ref(false);
    const positionClasses = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2"
    };
    const arrowClasses = {
      top: "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-[#1c1c1c] dark:border-t-[#2d2d2d]",
      bottom: "bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-[#1c1c1c] dark:border-b-[#2d2d2d]",
      left: "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-[#1c1c1c] dark:border-l-[#2d2d2d]",
      right: "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-[#1c1c1c] dark:border-r-[#2d2d2d]"
    };
    const uid = `tooltip-${Math.random().toString(36).slice(2, 8)}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative inline-flex" }, _attrs))}><div${ssrRenderAttr("aria-describedby", visible.value ? uid : void 0)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (visible.value) {
        _push(`<div${ssrRenderAttr("id", uid)} role="tooltip" class="${ssrRenderClass([
          "absolute z-50 whitespace-nowrap pointer-events-none",
          "rounded-[--ui-radius-sm] bg-[#1c1c1c] dark:bg-[#2d2d2d]",
          "px-2.5 py-1.5 text-xs font-medium text-white",
          "shadow-[--ui-shadow-medium]",
          positionClasses[__props.placement]
        ])}">${ssrInterpolate(__props.content)} <span class="${ssrRenderClass([
          "absolute h-0 w-0 border-4",
          arrowClasses[__props.placement]
        ])}"></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Tooltip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Tooltip-DAoftVVK.js.map
