globalThis.__timing__.logStart('Load chunks/build/Switch-BXmFqIoE');import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

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
    var _a;
    const props = __props;
    const uid = (_a = props.id) != null ? _a : `switch-${Math.random().toString(36).slice(2, 8)}`;
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

export { _sfc_main as _ };;globalThis.__timing__.logEnd('Load chunks/build/Switch-BXmFqIoE');
//# sourceMappingURL=Switch-BXmFqIoE.mjs.map
