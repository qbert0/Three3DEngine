globalThis.__timing__.logStart('Load chunks/build/Avatar-0HPRhFHn');import { defineComponent, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Avatar",
  __ssrInlineRender: true,
  props: {
    src: {},
    name: {},
    size: { default: "md" },
    shape: { default: "circle" },
    alt: {}
  },
  setup(__props) {
    const props = __props;
    const sizeClasses = {
      xs: "h-6  w-6  text-[9px]",
      sm: "h-8  w-8  text-[11px]",
      md: "h-10 w-10 text-sm",
      lg: "h-12 w-12 text-base",
      xl: "h-16 w-16 text-lg"
    };
    const shapeClasses = {
      circle: "rounded-full",
      square: "rounded-[--ui-radius-sm]"
    };
    const initials = computed(() => {
      if (!props.name) return "?";
      const parts = props.name.trim().split(/\s+/);
      return parts.length >= 2 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : parts[0].slice(0, 2).toUpperCase();
    });
    const bgColors = [
      "#1f6f8b",
      "#3d5f43",
      "#a8583f",
      "#7c3aed",
      "#0891b2",
      "#065f46",
      "#9d174d",
      "#92400e",
      "#1e40af",
      "#5b21b6"
    ];
    const bgColor = computed(() => {
      if (!props.name) return bgColors[0];
      const idx = props.name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % bgColors.length;
      return bgColors[idx];
    });
    const hasImage = computed(() => !!props.src);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "relative inline-flex shrink-0 items-center justify-center overflow-hidden font-semibold",
          sizeClasses[__props.size],
          shapeClasses[__props.shape]
        ],
        style: !hasImage.value ? { backgroundColor: bgColor.value, color: "#fff" } : void 0,
        "aria-label": __props.name || __props.alt,
        role: "img"
      }, _attrs))}>`);
      if (hasImage.value) {
        _push(`<img${ssrRenderAttr("src", __props.src)}${ssrRenderAttr("alt", __props.name || __props.alt || "")} class="h-full w-full object-cover">`);
      } else {
        _push(`<!---->`);
      }
      if (!hasImage.value) {
        _push(`<span aria-hidden="true">${ssrInterpolate(initials.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "status", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };;globalThis.__timing__.logEnd('Load chunks/build/Avatar-0HPRhFHn');
//# sourceMappingURL=Avatar-0HPRhFHn.mjs.map
