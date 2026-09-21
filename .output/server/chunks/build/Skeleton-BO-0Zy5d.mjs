globalThis.__timing__.logStart('Load chunks/build/Skeleton-BO-0Zy5d');import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Skeleton",
  __ssrInlineRender: true,
  props: {
    width: {},
    height: {},
    rounded: { default: "sm" },
    lines: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const roundedClasses = {
      none: "rounded-none",
      sm: "rounded-[--ui-radius-sm]",
      md: "rounded-[--ui-radius-md]",
      full: "rounded-full"
    };
    const style = (idx = 0) => {
      var _a;
      return {
        width: idx === props.lines - 1 && props.lines > 1 ? "75%" : typeof props.width === "number" ? `${props.width}px` : props.width,
        height: typeof props.height === "number" ? `${props.height}px` : (_a = props.height) != null ? _a : "16px"
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: __props.lines > 1 ? "flex flex-col gap-2" : void 0
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.lines, (i) => {
        _push(`<div style="${ssrRenderStyle(style(i - 1))}" class="${ssrRenderClass([
          roundedClasses[__props.rounded],
          "relative overflow-hidden bg-[--ui-color-bg-muted]"
        ])}"><div class="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_ease_infinite]" style="${ssrRenderStyle({ "background": "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)", "animation-name": "ui-shimmer", "animation-duration": "1.4s", "animation-timing-function": "ease", "animation-iteration-count": "infinite" })}"></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Skeleton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };;globalThis.__timing__.logEnd('Load chunks/build/Skeleton-BO-0Zy5d');
//# sourceMappingURL=Skeleton-BO-0Zy5d.mjs.map
