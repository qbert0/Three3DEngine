import { defineComponent, ref, mergeProps, useSSRContext, computed, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Tooltip.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Switch",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    size: { default: "md" },
    label: {},
    id: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const uid = props.id ?? `switch-${Math.random().toString(36).slice(2, 8)}`;
    const sizeMap = {
      sm: { track: "w-8 h-5", thumb: "h-3.5 w-3.5", translate: "translate-x-3.5" },
      md: { track: "w-11 h-6", thumb: "h-4.5 w-4.5", translate: "translate-x-5" }
    };
    const s = computed(() => sizeMap[props.size]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        for: unref(uid),
        class: [
          "inline-flex items-center gap-3",
          __props.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        ]
      }, _attrs))}><button${ssrRenderAttr("id", unref(uid))} type="button" role="switch"${ssrRenderAttr("aria-checked", __props.modelValue)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} class="${ssrRenderClass([
        "relative shrink-0 rounded-full transition-colors duration-[--ui-transition-base]",
        "outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[--ui-color-brand]",
        s.value.track,
        __props.modelValue ? "bg-[--ui-color-brand]" : "bg-[--ui-color-bg-muted] ring-1 ring-[--ui-color-border]"
      ])}"><span class="${ssrRenderClass([
        "absolute top-1/2 left-0.5 -translate-y-1/2 rounded-full bg-white shadow-sm",
        "transition-transform duration-[--ui-transition-base]",
        s.value.thumb,
        __props.modelValue ? s.value.translate : "translate-x-0"
      ])}"></span></button>`);
      if (__props.label) {
        _push(`<span class="text-sm text-[--ui-color-text-primary] select-none">${ssrInterpolate(__props.label)}</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Switch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
//# sourceMappingURL=Switch-CNCj6PJD.js.map
