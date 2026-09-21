globalThis.__timing__.logStart('Load chunks/build/ThemeToggle-_7_p_E0v');import { defineComponent, computed, createVNode, resolveDynamicComponent, mergeProps, unref, readonly, useAttrs, ref, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';

const THEME_KEY = "view360:theme";
const VARIANT_KEY = "view360:toggle-variant";
const isDark = ref(false);
const variant = ref("classic");
function applyTheme(dark) {
  return;
}
function useTheme() {
  function toggle() {
    isDark.value = !isDark.value;
    applyTheme(isDark.value);
    localStorage.setItem(THEME_KEY, isDark.value ? "dark" : "light");
  }
  function setVariant(v) {
    variant.value = v;
    localStorage.setItem(VARIANT_KEY, v);
  }
  const label = computed(() => isDark.value ? "Chuy\u1EC3n sang s\xE1ng" : "Chuy\u1EC3n sang t\u1ED1i");
  return {
    isDark: readonly(isDark),
    variant: readonly(variant),
    toggle,
    setVariant,
    label
  };
}
let nextId$8 = 0;
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Around",
  __ssrInlineRender: true,
  props: {
    duration: { default: 500 },
    type: { default: "button" },
    title: { default: "Toggle theme" },
    ariaLabel: { default: "Toggle theme" }
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    const toggleId = `around-${++nextId$8}`;
    const clipMainId = `toggles.dev-around-main-${toggleId}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps(unref(attrs), {
        type: props.type,
        title: props.title,
        "aria-label": props.ariaLabel
      }, _attrs))}><svg width="1em" height="1em" viewBox="0 0 32 32" aria-hidden="true"${ssrRenderAttr("fill", "currentColor")} style="${ssrRenderStyle({ "--toggles-around--duration": `${props.duration}ms` })}"><defs><clipPath${ssrRenderAttr("id", clipMainId)} class="${ssrRenderClass("toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_calc(var(--toggles-around--duration)_*_0.6)_ease] dark:toggles-dev--[transform:rotate(-90deg)] dark:toggles-dev--[transition:transform_var(--toggles-around--duration)_ease]")}"><path${ssrRenderAttr("d", "M0 0h42v30a1 1 0 00-16 13H0Z")} class="${ssrRenderClass("toggles-dev--transition-[d,translate] toggles-dev--[transition-duration:calc(var(--toggles-around--duration)_*_0.6)] toggles-dev--[transition-timing-function:ease] dark:toggles-dev--[d:path('M-12_-14h42v30a1_1_0_00-16_13H0Z')] dark:toggles-dev--not-supports-[d:path('M0_0')]:-translate-x-[12px] dark:toggles-dev--not-supports-[d:path('M0_0')]:-translate-y-[14px] dark:toggles-dev--[transition-duration:var(--toggles-around--duration)]")}"></path></clipPath></defs><g${ssrRenderAttr("clip-path", `url(#${clipMainId})`)}><circle${ssrRenderAttr("cx", 16)}${ssrRenderAttr("cy", 16)}${ssrRenderAttr("r", 8.4)} class="${ssrRenderClass("toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_calc(var(--toggles-around--duration)_*_0.6)_ease] dark:toggles-dev--[transform:scale(1.4)] dark:toggles-dev--[transition:transform_var(--toggles-around--duration)_ease]")}"></circle><g><circle${ssrRenderAttr("cx", 16)}${ssrRenderAttr("cy", 3.3)}${ssrRenderAttr("r", 2.3)} class="${ssrRenderClass("toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.253)] dark:toggles-dev--[transform:scale(0)] dark:toggles-dev--[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]")}"></circle><circle${ssrRenderAttr("cx", 27)}${ssrRenderAttr("cy", 9.7)}${ssrRenderAttr("r", 2.3)} class="${ssrRenderClass("toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.348)] dark:toggles-dev--[transform:scale(0)] dark:toggles-dev--[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]")}"></circle><circle${ssrRenderAttr("cx", 27)}${ssrRenderAttr("cy", 22.3)}${ssrRenderAttr("r", 2.3)} class="${ssrRenderClass("toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.443)] dark:toggles-dev--[transform:scale(0)] dark:toggles-dev--[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]")}"></circle><circle${ssrRenderAttr("cx", 16)}${ssrRenderAttr("cy", 28.7)}${ssrRenderAttr("r", 2.3)} class="${ssrRenderClass("toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.538)] dark:toggles-dev--[transform:scale(0)] dark:toggles-dev--[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]")}"></circle><circle${ssrRenderAttr("cx", 5)}${ssrRenderAttr("cy", 22.3)}${ssrRenderAttr("r", 2.3)} class="${ssrRenderClass("toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.633)] dark:toggles-dev--[transform:scale(0)] dark:toggles-dev--[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]")}"></circle><circle${ssrRenderAttr("cx", 5)}${ssrRenderAttr("cy", 9.7)}${ssrRenderAttr("r", 2.3)} class="${ssrRenderClass("toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.728)] dark:toggles-dev--[transform:scale(0)] dark:toggles-dev--[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]")}"></circle></g></g></svg></button>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@theme-toggles/vue/dist/Around.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
let nextId$7 = 0;
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Classic",
  __ssrInlineRender: true,
  props: {
    duration: { default: 400 },
    type: { default: "button" },
    title: { default: "Toggle theme" },
    ariaLabel: { default: "Toggle theme" }
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    const toggleId = `classic-${++nextId$7}`;
    const clipMainId = `toggles.dev-classic-main-${toggleId}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps(unref(attrs), {
        type: props.type,
        title: props.title,
        "aria-label": props.ariaLabel
      }, _attrs))}><svg width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true" style="${ssrRenderStyle({ "--toggles-dot-dev--duration": `${props.duration}ms` })}"><defs><clipPath${ssrRenderAttr("id", clipMainId)}><path${ssrRenderAttr("d", "M0 0h25a1 1 0 0010 10v14H0Z")} class="${ssrRenderClass("toggles-dev--transition-[d,translate] toggles-dev--duration-(--toggles-dot-dev--duration) dark:toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:toggles-dev--[d:path('M0_2h13a1_1_0_0010_10v14H0Z')] dark:toggles-dev--not-supports-[d:path('M0_0')]:-translate-x-3.25 dark:toggles-dev--not-supports-[d:path('M0_0')]:translate-y-0.5")}"></path></clipPath></defs><g${ssrRenderAttr("stroke", "currentColor")}${ssrRenderAttr("stroke-linecap", "round")}><circle${ssrRenderAttr("cx", 12)}${ssrRenderAttr("cy", 12)}${ssrRenderAttr("r", 5)}${ssrRenderAttr("fill", "currentColor")}${ssrRenderAttr("clip-path", `url(#${clipMainId})`)} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--duration-(--toggles-dot-dev--duration) dark:toggles-dev--scale-170")}"></circle><path${ssrRenderAttr("d", "M12 1.4v2.4")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--[transform-box:view-box] toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_var(--toggles-dot-dev--duration),opacity_var(--toggles-dot-dev--duration)] toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--[transform:scale(0)] dark:toggles-dev--opacity-0")}"></path><path${ssrRenderAttr("d", "m20.3 3.7-2.5 2.5")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--[transform-box:view-box] toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_var(--toggles-dot-dev--duration),opacity_var(--toggles-dot-dev--duration)] toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--[transform:scale(0)] dark:toggles-dev--opacity-0")}"></path><path${ssrRenderAttr("d", "M22.6 12h-2.4")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--[transform-box:view-box] toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_var(--toggles-dot-dev--duration),opacity_var(--toggles-dot-dev--duration)] toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--[transform:scale(0)] dark:toggles-dev--opacity-0")}"></path><path${ssrRenderAttr("d", "M12 22.6v-2.4")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--[transform-box:view-box] toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_var(--toggles-dot-dev--duration),opacity_var(--toggles-dot-dev--duration)] toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--[transform:scale(0)] dark:toggles-dev--opacity-0")}"></path><path${ssrRenderAttr("d", "M1.4 12h2.4")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--[transform-box:view-box] toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_var(--toggles-dot-dev--duration),opacity_var(--toggles-dot-dev--duration)] toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--[transform:scale(0)] dark:toggles-dev--opacity-0")}"></path><path${ssrRenderAttr("d", "m20.3 20.3-2.5-2.5")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--[transform-box:view-box] toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_var(--toggles-dot-dev--duration),opacity_var(--toggles-dot-dev--duration)] toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--[transform:scale(0)] dark:toggles-dev--opacity-0")}"></path><path${ssrRenderAttr("d", "m3.7 20.3 2.5-2.5")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--[transform-box:view-box] toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_var(--toggles-dot-dev--duration),opacity_var(--toggles-dot-dev--duration)] toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--[transform:scale(0)] dark:toggles-dev--opacity-0")}"></path><path${ssrRenderAttr("d", "m3.7 3.7 2.5 2.5")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--[transform-box:view-box] toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_var(--toggles-dot-dev--duration),opacity_var(--toggles-dot-dev--duration)] toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--[transform:scale(0)] dark:toggles-dev--opacity-0")}"></path></g></svg></button>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@theme-toggles/vue/dist/Classic.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "DarkInner",
  __ssrInlineRender: true,
  props: {
    duration: { default: 500 },
    type: { default: "button" },
    title: { default: "Toggle theme" },
    ariaLabel: { default: "Toggle theme" }
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps(unref(attrs), {
        type: props.type,
        title: props.title,
        "aria-label": props.ariaLabel
      }, _attrs))}><svg width="1em" height="1em" viewBox="0 0 32 32" aria-hidden="true"${ssrRenderAttr("fill", "currentColor")} style="${ssrRenderStyle({ "--toggles-dark-inner--duration": `${props.duration}ms` })}"><path${ssrRenderAttr("d", "M16 9c3.9 0 7 3.1 7 7s-3.1 7-7 7")} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--duration-(--toggles-dark-inner--duration) toggles-dev--[transition-timing-function:ease] dark:toggles-dev--rotate-180")}"></path><path${ssrRenderAttr("d", "M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V23c-3.9 0-7-3.1-7-7s3.1-7 7-7V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z")} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--duration-(--toggles-dark-inner--duration) toggles-dev--[transition-timing-function:ease] dark:toggles-dev---rotate-180")}"></path></svg></button>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@theme-toggles/vue/dist/DarkInner.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "DarkSide",
  __ssrInlineRender: true,
  props: {
    duration: { default: 500 },
    type: { default: "button" },
    title: { default: "Toggle theme" },
    ariaLabel: { default: "Toggle theme" }
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps(unref(attrs), {
        type: props.type,
        title: props.title,
        "aria-label": props.ariaLabel
      }, _attrs))}><svg width="1em" height="1em" viewBox="0 0 32 32" aria-hidden="true"${ssrRenderAttr("fill", "currentColor")} style="${ssrRenderStyle({ "--toggles-dark-side--duration": `${props.duration}ms` })}"><path${ssrRenderAttr("d", "M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z")} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--duration-(--toggles-dark-side--duration) toggles-dev--[transition-timing-function:ease] dark:toggles-dev--rotate-180")}"></path></svg></button>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@theme-toggles/vue/dist/DarkSide.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
let nextId$6 = 0;
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Eclipse",
  __ssrInlineRender: true,
  props: {
    duration: { default: 500 },
    type: { default: "button" },
    title: { default: "Toggle theme" },
    ariaLabel: { default: "Toggle theme" }
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    const toggleId = `eclipse-${++nextId$6}`;
    const clipMainId = `toggles.dev-eclipse-main-${toggleId}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps(unref(attrs), {
        type: props.type,
        title: props.title,
        "aria-label": props.ariaLabel
      }, _attrs))}><svg width="1em" height="1em" viewBox="0 0 32 32" aria-hidden="true"${ssrRenderAttr("fill", "currentColor")} style="${ssrRenderStyle({ "--toggles-eclipse--duration": `${props.duration}ms` })}"><defs><clipPath${ssrRenderAttr("id", clipMainId)}><path${ssrRenderAttr("d", "M0 0h64v32h-64zm38 16a1 1 0 0020 0 1 1 0 00-20 0")} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-[d,translate] toggles-dev--[transition-duration:var(--toggles-eclipse--duration)] toggles-dev--[transition-timing-function:cubic-bezier(0,0,0.05,1.15)] toggles-dev--[transition-delay:0s] dark:toggles-dev--[d:path('M-16_-16h64v64h-64zm22_32a1_1_0_0020_0_1_1_0_00-20_0')] dark:toggles-dev--not-supports-[d:path('M0_0')]:-translate-x-[32px] dark:toggles-dev--[transition-duration:calc(var(--toggles-eclipse--duration)_*_0.8)] dark:toggles-dev--[transition-delay:calc(var(--toggles-eclipse--duration)_*_0.2)]")}"></path></clipPath></defs><g${ssrRenderAttr("clip-path", `url(#${clipMainId})`)}><circle${ssrRenderAttr("cx", 16)}${ssrRenderAttr("cy", 16)}${ssrRenderAttr("r", 16)} class="${ssrRenderClass("toggles-dev--[transform-origin:center] toggles-dev--[transition-property:transform] toggles-dev--[transition-duration:var(--toggles-eclipse--duration)] toggles-dev--[transition-timing-function:cubic-bezier(0,0,0.05,1.15)]")}"></circle></g></svg></button>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@theme-toggles/vue/dist/Eclipse.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
let nextId$5 = 0;
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Expand",
  __ssrInlineRender: true,
  props: {
    duration: { default: 500 },
    type: { default: "button" },
    title: { default: "Toggle theme" },
    ariaLabel: { default: "Toggle theme" }
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    const toggleId = `expand-${++nextId$5}`;
    const clipMainId = `toggles.dev-expand-main-${toggleId}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps(unref(attrs), {
        type: props.type,
        title: props.title,
        "aria-label": props.ariaLabel
      }, _attrs))}><svg width="1em" height="1em" viewBox="0 0 32 32" aria-hidden="true"${ssrRenderAttr("fill", "currentColor")} style="${ssrRenderStyle({ "--toggles-expand--duration": `${props.duration}ms` })}"><defs><clipPath${ssrRenderAttr("id", clipMainId)}><path${ssrRenderAttr("d", "M0-11h25a1 1 0 0017 13v30H0Z")} class="${ssrRenderClass("toggles-dev--transition-[d,translate] toggles-dev--[transition-duration:calc(var(--toggles-expand--duration)_*_0.6)] toggles-dev--[transition-timing-function:cubic-bezier(0,0,0.5,1)] toggles-dev--[transition-delay:0s] dark:toggles-dev--[d:path('M0_0h15A1_1_0_0032_15v17H0Z')] dark:toggles-dev--not-supports-[d:path('M0_0')]:-translate-x-[5px] dark:toggles-dev--not-supports-[d:path('M0_0')]:translate-y-[11px] dark:toggles-dev--[transition-timing-function:cubic-bezier(0,0,0,1.25)] dark:toggles-dev--[transition-delay:calc(var(--toggles-expand--duration)_*_0.4)]")}"></path></clipPath></defs><g${ssrRenderAttr("clip-path", `url(#${clipMainId})`)}><circle${ssrRenderAttr("cx", 16)}${ssrRenderAttr("cy", 16)}${ssrRenderAttr("r", 8.4)} class="${ssrRenderClass("toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_calc(var(--toggles-expand--duration)_*_0.65)_cubic-bezier(0,0,0,1.25)_calc(var(--toggles-expand--duration)_*_0.35)] dark:toggles-dev--[transform:scale(1.6)] dark:toggles-dev--[transition:transform_calc(var(--toggles-expand--duration)_*_0.65)_cubic-bezier(0,0,0,1.25)]")}"></circle><path${ssrRenderAttr("d", "M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z")} class="${ssrRenderClass("toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_calc(var(--toggles-expand--duration)_*_0.65)_cubic-bezier(0,0,0,1.25)_calc(var(--toggles-expand--duration)_*_0.35)] dark:toggles-dev--[transform:scale(0.75)] dark:toggles-dev--[transition:transform_calc(var(--toggles-expand--duration)_*_0.65)_cubic-bezier(0,0,0,1.25)]")}"></path></g></svg></button>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@theme-toggles/vue/dist/Expand.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
let nextId$4 = 0;
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Spin",
  __ssrInlineRender: true,
  props: {
    duration: { default: 400 },
    type: { default: "button" },
    title: { default: "Toggle theme" },
    ariaLabel: { default: "Toggle theme" }
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    const toggleId = `spin-${++nextId$4}`;
    const clipMainId = `toggles.dev-spin-main-${toggleId}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps(unref(attrs), {
        type: props.type,
        title: props.title,
        "aria-label": props.ariaLabel
      }, _attrs))}><svg width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true" style="${ssrRenderStyle({ "--toggles-spin--duration": `${props.duration}ms` })}"><defs><clipPath${ssrRenderAttr("id", clipMainId)}><path${ssrRenderAttr("d", "M0 0h25a1 1 0 0010 10v14H0Z")} class="${ssrRenderClass("toggles-dev--transition-[d,translate] toggles-dev--duration-(--toggles-spin--duration) dark:toggles-dev--delay-[calc(var(--toggles-spin--duration)*0.15)] dark:toggles-dev--[d:path('M0_2h13a1_1_0_0010_10v14H0Z')] dark:toggles-dev--not-supports-[d:path('M0_0')]:-translate-x-3.25 dark:toggles-dev--not-supports-[d:path('M0_0')]:translate-y-0.5")}"></path></clipPath></defs><g${ssrRenderAttr("stroke", "currentColor")}${ssrRenderAttr("stroke-linecap", "round")}><circle${ssrRenderAttr("cx", 12)}${ssrRenderAttr("cy", 12)}${ssrRenderAttr("r", 5)}${ssrRenderAttr("fill", "currentColor")}${ssrRenderAttr("clip-path", `url(#${clipMainId})`)} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--duration-(--toggles-spin--duration) dark:toggles-dev--scale-170")}"></circle><path${ssrRenderAttr("d", "M12 1.4v2.4")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--duration-(--toggles-spin--duration) toggles-dev--delay-[calc(var(--toggles-spin--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--rotate-45 dark:toggles-dev--scale-0")}"></path><path${ssrRenderAttr("d", "m20.3 3.7-2.5 2.5")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--duration-(--toggles-spin--duration) toggles-dev--delay-[calc(var(--toggles-spin--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--rotate-45 dark:toggles-dev--scale-0")}"></path><path${ssrRenderAttr("d", "M22.6 12h-2.4")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--duration-(--toggles-spin--duration) toggles-dev--delay-[calc(var(--toggles-spin--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--rotate-45 dark:toggles-dev--scale-0")}"></path><path${ssrRenderAttr("d", "M12 22.6v-2.4")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--duration-(--toggles-spin--duration) toggles-dev--delay-[calc(var(--toggles-spin--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--rotate-45 dark:toggles-dev--scale-0")}"></path><path${ssrRenderAttr("d", "M1.4 12h2.4")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--duration-(--toggles-spin--duration) toggles-dev--delay-[calc(var(--toggles-spin--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--rotate-45 dark:toggles-dev--scale-0")}"></path><path${ssrRenderAttr("d", "m20.3 20.3-2.5-2.5")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--duration-(--toggles-spin--duration) toggles-dev--delay-[calc(var(--toggles-spin--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--rotate-45 dark:toggles-dev--scale-0")}"></path><path${ssrRenderAttr("d", "m3.7 20.3 2.5-2.5")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--duration-(--toggles-spin--duration) toggles-dev--delay-[calc(var(--toggles-spin--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--rotate-45 dark:toggles-dev--scale-0")}"></path><path${ssrRenderAttr("d", "m3.7 3.7 2.5 2.5")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 2)}${ssrRenderAttr("stroke-linejoin", "round")}${ssrRenderAttr("stroke-miterlimit", 0)}${ssrRenderAttr("paint-order", "stroke markers fill")} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--duration-(--toggles-spin--duration) toggles-dev--delay-[calc(var(--toggles-spin--duration)*0.15)] dark:toggles-dev--delay-0 dark:toggles-dev--rotate-45 dark:toggles-dev--scale-0")}"></path></g></svg></button>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@theme-toggles/vue/dist/Spin.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "HalfSun",
  __ssrInlineRender: true,
  props: {
    duration: { default: 500 },
    type: { default: "button" },
    title: { default: "Toggle theme" },
    ariaLabel: { default: "Toggle theme" }
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps(unref(attrs), {
        type: props.type,
        title: props.title,
        "aria-label": props.ariaLabel
      }, _attrs))}><svg width="1em" height="1em" viewBox="0 0 32 32" aria-hidden="true"${ssrRenderAttr("fill", "currentColor")} style="${ssrRenderStyle({ "--toggles-half-sun--duration": `${props.duration}ms` })}"><path${ssrRenderAttr("d", "M27.5 11.5v-7h-7L16 0l-4.5 4.5h-7v7L0 16l4.5 4.5v7h7L16 32l4.5-4.5h7v-7L32 16l-4.5-4.5zM16 25.4V6.6c5.2 0 9.4 4.2 9.4 9.4s-4.2 9.4-9.4 9.4z")} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--duration-(--toggles-half-sun--duration) toggles-dev--[transition-timing-function:ease] dark:toggles-dev--rotate-180")}"></path></svg></button>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@theme-toggles/vue/dist/HalfSun.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
let nextId$3 = 0;
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Horizon",
  __ssrInlineRender: true,
  props: {
    duration: { default: 500 },
    type: { default: "button" },
    title: { default: "Toggle theme" },
    ariaLabel: { default: "Toggle theme" }
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    const toggleId = `horizon-${++nextId$3}`;
    const clipMainId = `toggles.dev-horizon-main-${toggleId}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps(unref(attrs), {
        type: props.type,
        title: props.title,
        "aria-label": props.ariaLabel
      }, _attrs))}><svg width="1em" height="1em" viewBox="0 0 32 32" aria-hidden="true"${ssrRenderAttr("fill", "currentColor")} style="${ssrRenderStyle({ "--toggles-horizon--duration": `${props.duration}ms` })}"><defs><clipPath${ssrRenderAttr("id", clipMainId)}><path${ssrRenderAttr("d", "M0 0h32v29h-32z")}></path></clipPath></defs><path${ssrRenderAttr("d", "M30.7 29.9H1.3c-.7 0-1.3.5-1.3 1.1 0 .6.6 1 1.3 1h29.3c.7 0 1.3-.5 1.3-1.1.1-.5-.5-1-1.2-1z")}></path><g${ssrRenderAttr("clip-path", `url(#${clipMainId})`)}><path${ssrRenderAttr("d", "M16 8.8c-3.4 0-6.1 2.8-6.1 6.1s2.7 6.3 6.1 6.3 6.1-2.8 6.1-6.1-2.7-6.3-6.1-6.3zm13.3 11L26 15l3.3-4.8c.3-.5.1-1.1-.5-1.2l-5.7-1-1-5.7c-.1-.6-.8-.8-1.2-.5L16 5.1l-4.8-3.3c-.5-.4-1.2-.1-1.3.4L8.9 8 3.2 9c-.6.1-.8.8-.5 1.2L6 15l-3.3 4.8c-.3.5-.1 1.1.5 1.2l5.7 1 1 5.7c.1.6.8.8 1.2.5L16 25l4.8 3.3c.5.3 1.1.1 1.2-.5l1-5.7 5.7-1c.7-.1.9-.8.6-1.3zM16 22.5A7.6 7.6 0 0 1 8.3 15c0-4.2 3.5-7.5 7.7-7.5s7.7 3.4 7.7 7.5c0 4.2-3.4 7.5-7.7 7.5z")} class="${ssrRenderClass("toggles-dev--transition-transform toggles-dev--duration-(--toggles-horizon--duration) toggles-dev--[transition-timing-function:cubic-bezier(0,0,0.15,1)] dark:toggles-dev--translate-y-[50%]")}"></path></g></svg></button>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@theme-toggles/vue/dist/Horizon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "InnerMoon",
  __ssrInlineRender: true,
  props: {
    duration: { default: 500 },
    type: { default: "button" },
    title: { default: "Toggle theme" },
    ariaLabel: { default: "Toggle theme" }
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps(unref(attrs), {
        type: props.type,
        title: props.title,
        "aria-label": props.ariaLabel
      }, _attrs))}><svg width="1em" height="1em" viewBox="0 0 32 32" aria-hidden="true"${ssrRenderAttr("fill", "currentColor")} style="${ssrRenderStyle({ "--toggles-inner-moon--duration": `${props.duration}ms` })}"><path${ssrRenderAttr("d", "M27.5 11.5v-7h-7L16 0l-4.5 4.5h-7v7L0 16l4.5 4.5v7h7L16 32l4.5-4.5h7v-7L32 16l-4.5-4.5zM16 25.4a9.39 9.39 0 1 1 0-18.8 9.39 9.39 0 1 1 0 18.8z")} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--duration-(--toggles-inner-moon--duration) toggles-dev--[transition-timing-function:cubic-bezier(0,0,0.15,1.25)] dark:toggles-dev--rotate-180")}"></path><circle${ssrRenderAttr("cx", 16)}${ssrRenderAttr("cy", 16)}${ssrRenderAttr("r", 7.6)} class="${ssrRenderClass("toggles-dev--origin-center toggles-dev--transition-transform toggles-dev--[transition-timing-function:cubic-bezier(0.4,0,0.2,1)] toggles-dev--[transition-duration:calc(var(--toggles-inner-moon--duration)/1.5)] dark:toggles-dev--translate-x-[15%]")}"></circle></svg></button>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@theme-toggles/vue/dist/InnerMoon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Lightbulb",
  __ssrInlineRender: true,
  props: {
    duration: { default: 500 },
    type: { default: "button" },
    title: { default: "Toggle theme" },
    ariaLabel: { default: "Toggle theme" }
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps(unref(attrs), {
        type: props.type,
        title: props.title,
        "aria-label": props.ariaLabel
      }, _attrs))}><svg width="1em" height="1em" viewBox="0 0 32 32" aria-hidden="true"${ssrRenderAttr("stroke-width", "2")}${ssrRenderAttr("stroke", "currentColor")}${ssrRenderAttr("fill", "currentColor")}${ssrRenderAttr("stroke-linecap", "round")} style="${ssrRenderStyle({ "--toggles-lightbulb--duration": `${props.duration}ms` })}"><path${ssrRenderAttr("stroke-width", 1)}${ssrRenderAttr("d", "M9.4 9.9c1.8-1.8 4.1-2.7 6.6-2.7 5.1 0 9.3 4.2 9.3 9.3 0 2.3-.8 4.4-2.3 6.1-.7.8-2 2.8-2.5 4.4 0 .2-.2.4-.5.4-.2 0-.4-.2-.4-.5v-.1c.5-1.8 2-3.9 2.7-4.8 1.4-1.5 2.1-3.5 2.1-5.6 0-4.7-3.7-8.5-8.4-8.5-2.3 0-4.4.9-5.9 2.5-1.6 1.6-2.5 3.7-2.5 6 0 2.1.7 4 2.1 5.6.8.9 2.2 2.9 2.7 4.9 0 .2-.1.5-.4.5h-.1c-.2 0-.4-.1-.4-.4-.5-1.7-1.8-3.7-2.5-4.5-1.5-1.7-2.3-3.9-2.3-6.1 0-2.3 1-4.7 2.7-6.5z")}></path><path${ssrRenderAttr("d", "M19.8 27.5h-7.6")}></path><path${ssrRenderAttr("d", "M19.8 29.2h-7.6")}></path><path${ssrRenderAttr("d", "M19.8 30.9h-7.6")}></path><path${ssrRenderAttr("pathLength", 1)}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("d", "M14.6 27.1c0-3.4 0-6.8-.1-10.2-.2-1-1.1-1.7-2-1.7-1.2-.1-2.3 1-2.2 2.3.1 1 .9 1.9 2.1 2h7.2c1.1-.1 2-1 2.1-2 .1-1.2-1-2.3-2.2-2.3-.9 0-1.7.7-2 1.7 0 3.4 0 6.8-.1 10.2")} class="${ssrRenderClass("toggles-dev--[stroke-dasharray:1.1] toggles-dev--transition-[stroke-dashoffset,opacity] toggles-dev--duration-(--toggles-lightbulb--duration) toggles-dev--[stroke-dashoffset:0] toggles-dev--opacity-100 dark:toggles-dev--[stroke-dashoffset:1] dark:toggles-dev--opacity-0")}"></path><path${ssrRenderAttr("d", "M16 5V1.3")}${ssrRenderAttr("pathLength", 1)}${ssrRenderAttr("stroke-width", 1.5)} class="${ssrRenderClass("toggles-dev--[stroke-dasharray:1.1] toggles-dev--transition-[stroke-dashoffset,opacity] toggles-dev--duration-(--toggles-lightbulb--duration) toggles-dev--[stroke-dashoffset:0] toggles-dev--opacity-100 dark:toggles-dev--[stroke-dashoffset:1] dark:toggles-dev--opacity-0")}"></path><path${ssrRenderAttr("d", "M27.5 15.8h3.9")}${ssrRenderAttr("pathLength", 1)}${ssrRenderAttr("stroke-width", 1.5)} class="${ssrRenderClass("toggles-dev--[stroke-dasharray:1.1] toggles-dev--transition-[stroke-dashoffset,opacity] toggles-dev--duration-(--toggles-lightbulb--duration) toggles-dev--[stroke-dashoffset:0] toggles-dev--opacity-100 dark:toggles-dev--[stroke-dashoffset:1] dark:toggles-dev--opacity-0")}"></path><path${ssrRenderAttr("d", "M23.6 7.9 26.3 5.4")}${ssrRenderAttr("pathLength", 1)}${ssrRenderAttr("stroke-width", 1.5)} class="${ssrRenderClass("toggles-dev--[stroke-dasharray:1.1] toggles-dev--transition-[stroke-dashoffset,opacity] toggles-dev--duration-(--toggles-lightbulb--duration) toggles-dev--[stroke-dashoffset:0] toggles-dev--opacity-100 dark:toggles-dev--[stroke-dashoffset:1] dark:toggles-dev--opacity-0")}"></path><path${ssrRenderAttr("d", "M8.4 7.9 5.7 5.4")}${ssrRenderAttr("pathLength", 1)}${ssrRenderAttr("stroke-width", 1.5)} class="${ssrRenderClass("toggles-dev--[stroke-dasharray:1.1] toggles-dev--transition-[stroke-dashoffset,opacity] toggles-dev--duration-(--toggles-lightbulb--duration) toggles-dev--[stroke-dashoffset:0] toggles-dev--opacity-100 dark:toggles-dev--[stroke-dashoffset:1] dark:toggles-dev--opacity-0")}"></path><path${ssrRenderAttr("d", "M4.5 15.8H.6")}${ssrRenderAttr("pathLength", 1)}${ssrRenderAttr("stroke-width", 1.5)} class="${ssrRenderClass("toggles-dev--[stroke-dasharray:1.1] toggles-dev--transition-[stroke-dashoffset,opacity] toggles-dev--duration-(--toggles-lightbulb--duration) toggles-dev--[stroke-dashoffset:0] toggles-dev--opacity-100 dark:toggles-dev--[stroke-dashoffset:1] dark:toggles-dev--opacity-0")}"></path></svg></button>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@theme-toggles/vue/dist/Lightbulb.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
let nextId$2 = 0;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LightSwitch",
  __ssrInlineRender: true,
  props: {
    duration: { default: 350 },
    type: { default: "button" },
    title: { default: "Toggle theme" },
    ariaLabel: { default: "Toggle theme" }
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    const toggleId = `light-switch-${++nextId$2}`;
    const clipPaddleId = `toggles.dev-light-switch-paddle-${toggleId}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps(unref(attrs), {
        type: props.type,
        title: props.title,
        "aria-label": props.ariaLabel
      }, _attrs))}><svg width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true" style="${ssrRenderStyle({ "--toggles-light-switch--duration": `${props.duration}ms` })}"><defs><clipPath${ssrRenderAttr("id", clipPaddleId)}><path${ssrRenderAttr("d", "M7 3h10v9H7Z")} class="${ssrRenderClass("toggles-dev--transition-[d,translate] toggles-dev--duration-(--toggles-light-switch--duration) toggles-dev--[transition-timing-function:cubic-bezier(0,0,0.15,1.25)] dark:toggles-dev--[d:path('M7_12h10v9H7Z')] dark:toggles-dev--not-supports-[d:path('M0_0')]:translate-y-[9px]")}"></path></clipPath></defs><rect${ssrRenderAttr("x", 5)}${ssrRenderAttr("y", 1)}${ssrRenderAttr("width", 14)}${ssrRenderAttr("height", 22)}${ssrRenderAttr("rx", 2)}${ssrRenderAttr("stroke", "currentColor")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 1.5)}></rect><rect${ssrRenderAttr("x", 7)}${ssrRenderAttr("y", 3)}${ssrRenderAttr("width", 10)}${ssrRenderAttr("height", 18)}${ssrRenderAttr("rx", 1)}${ssrRenderAttr("stroke", "currentColor")}${ssrRenderAttr("fill", "none")}${ssrRenderAttr("stroke-width", 1)}></rect><rect${ssrRenderAttr("x", 8)}${ssrRenderAttr("y", 4)}${ssrRenderAttr("width", 8)}${ssrRenderAttr("height", 16)}${ssrRenderAttr("rx", 0.5)}${ssrRenderAttr("fill", "currentColor")}${ssrRenderAttr("clip-path", `url(#${clipPaddleId})`)}></rect></svg></button>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@theme-toggles/vue/dist/LightSwitch.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
let nextId$1 = 0;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Simple",
  __ssrInlineRender: true,
  props: {
    duration: { default: 500 },
    type: { default: "button" },
    title: { default: "Toggle theme" },
    ariaLabel: { default: "Toggle theme" }
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    const toggleId = `simple-${++nextId$1}`;
    const clipMainId = `toggles.dev-simple-main-${toggleId}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps(unref(attrs), {
        type: props.type,
        title: props.title,
        "aria-label": props.ariaLabel
      }, _attrs))}><svg width="1em" height="1em" viewBox="0 0 32 32" aria-hidden="true"${ssrRenderAttr("fill", "currentColor")} style="${ssrRenderStyle({ "--toggles-simple--duration": `${props.duration}ms` })}"><defs><clipPath${ssrRenderAttr("id", clipMainId)}><path${ssrRenderAttr("d", "M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0")} class="${ssrRenderClass("toggles-dev--transition-[d,translate] toggles-dev--duration-(--toggles-simple--duration) toggles-dev--[transition-timing-function:cubic-bezier(0,0,0.15,1.25)] dark:toggles-dev--[d:path('M-18-1h55v37h-55zm32_12a1_1_0_0025_0_1_1_0_00-25_0')] dark:toggles-dev--not-supports-[d:path('M0_0')]:-translate-x-[19px] dark:toggles-dev--not-supports-[d:path('M0_0')]:translate-y-[5px]")}"></path></clipPath></defs><g${ssrRenderAttr("clip-path", `url(#${clipMainId})`)}><circle${ssrRenderAttr("cx", 16)}${ssrRenderAttr("cy", 16)}${ssrRenderAttr("r", 15)}></circle></g></svg></button>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@theme-toggles/vue/dist/Simple.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
let nextId = 0;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Within",
  __ssrInlineRender: true,
  props: {
    duration: { default: 500 },
    type: { default: "button" },
    title: { default: "Toggle theme" },
    ariaLabel: { default: "Toggle theme" }
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    const toggleId = `within-${++nextId}`;
    const clipMainId = `toggles.dev-within-main-${toggleId}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps(unref(attrs), {
        type: props.type,
        title: props.title,
        "aria-label": props.ariaLabel
      }, _attrs))}><svg width="1em" height="1em" viewBox="0 0 32 32" aria-hidden="true"${ssrRenderAttr("fill", "currentColor")} style="${ssrRenderStyle({ "--toggles-within--duration": `${props.duration}ms` })}"><defs><clipPath${ssrRenderAttr("id", clipMainId)}><path${ssrRenderAttr("d", "M0 0h32v32h-32ZM6 16A1 1 0 0026 16 1 1 0 006 16")}></path></clipPath></defs><g${ssrRenderAttr("clip-path", `url(#${clipMainId})`)}><path${ssrRenderAttr("d", "M30.7 21.3 27.1 16l3.7-5.3c.4-.5.1-1.3-.6-1.4l-6.3-1.1-1.1-6.3c-.1-.6-.8-.9-1.4-.6L16 5l-5.4-3.7c-.5-.4-1.3-.1-1.4.6l-1 6.3-6.4 1.1c-.6.1-.9.9-.6 1.3L4.9 16l-3.7 5.3c-.4.5-.1 1.3.6 1.4l6.3 1.1 1.1 6.3c.1.6.8.9 1.4.6l5.3-3.7 5.3 3.7c.5.4 1.3.1 1.4-.6l1.1-6.3 6.3-1.1c.8-.1 1.1-.8.7-1.4zM16 25.1c-5.1 0-9.1-4.1-9.1-9.1 0-5.1 4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1c0 5.1-4 9.1-9.1 9.1z")} class="${ssrRenderClass("toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_var(--toggles-within--duration)_cubic-bezier(0,0,0,1.25)] dark:toggles-dev--[transform:scale(0.65)]")}"></path></g><path${ssrRenderAttr("d", "M16 7.7c-4.6 0-8.2 3.7-8.2 8.2s3.6 8.4 8.2 8.4 8.2-3.7 8.2-8.2-3.6-8.4-8.2-8.4zm0 14.4c-3.4 0-6.1-2.9-6.1-6.2s2.7-6.1 6.1-6.1c3.4 0 6.1 2.9 6.1 6.2s-2.7 6.1-6.1 6.1z")} class="${ssrRenderClass("toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_var(--toggles-within--duration)_cubic-bezier(0,0,0,1.25)] dark:toggles-dev--[transform:scale(1.5)]")}"></path><path${ssrRenderAttr("d", "M16 9.5c-3.6 0-6.4 2.9-6.4 6.4s2.8 6.5 6.4 6.5 6.4-2.9 6.4-6.4-2.8-6.5-6.4-6.5z")} class="${ssrRenderClass("toggles-dev--[transform-origin:center] toggles-dev--[transition:transform_var(--toggles-within--duration)_cubic-bezier(0,0,0,1.25)] dark:toggles-dev--[transform:translate3d(3px,-3px,0)_scale(1.2)]")}"></path></svg></button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@theme-toggles/vue/dist/Within.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  props: {
    size: { default: "text-2xl" },
    duration: { default: 400 }
  },
  setup(__props) {
    const props = __props;
    const { isDark: isDark2, variant: variant2, toggle } = useTheme();
    const COMPONENT_MAP = {
      "classic": _sfc_main$d,
      "around": _sfc_main$e,
      "dark-inner": _sfc_main$c,
      "dark-side": _sfc_main$b,
      "eclipse": _sfc_main$a,
      "expand": _sfc_main$9,
      "spin": _sfc_main$8,
      "half-sun": _sfc_main$7,
      "horizon": _sfc_main$6,
      "inner-moon": _sfc_main$5,
      "lightbulb": _sfc_main$4,
      "light-switch": _sfc_main$3,
      "simple": _sfc_main$2,
      "within": _sfc_main$1
    };
    const activeComponent = computed(() => {
      var _a;
      return (_a = COMPONENT_MAP[variant2.value]) != null ? _a : _sfc_main$d;
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(activeComponent.value), mergeProps({
        class: [
          props.size,
          "cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95",
          unref(isDark2) ? "dark" : ""
        ],
        duration: props.duration,
        title: "Chuy\u1EC3n \u0111\u1ED5i giao di\u1EC7n",
        "aria-label": "Chuy\u1EC3n \u0111\u1ED5i giao di\u1EC7n s\xE1ng/t\u1ED1i",
        onClick: unref(toggle)
      }, _attrs), null), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeToggle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };;globalThis.__timing__.logEnd('Load chunks/build/ThemeToggle-_7_p_E0v');
//# sourceMappingURL=ThemeToggle-_7_p_E0v.mjs.map
