globalThis.__timing__.logStart('Load chunks/build/_sceneId_-GVjG37GZ');import { _ as _sfc_main$1 } from './Spinner-mjqtnuYo.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useRoute } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[sceneId]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSpinner = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid h-screen w-full place-items-center bg-ink" }, _attrs))}><div class="flex flex-col items-center gap-4">`);
      _push(ssrRenderComponent(_component_UiSpinner, {
        size: "lg",
        color: "primary"
      }, null, _parent));
      _push(`<p class="text-sm text-white/50">\u0110ang m\u1EDF c\u1EA3nh...</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experience/[tourId]/[ownerTourId]/[sceneId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/_sceneId_-GVjG37GZ');
//# sourceMappingURL=_sceneId_-GVjG37GZ.mjs.map
