globalThis.__timing__.logStart('Load chunks/build/events-waVQst3L');import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useHead } from './v3-vl98-hf4.mjs';
import './server.mjs';
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
  __name: "events",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "S\u1EF1 Ki\u1EC7n \u2014 S\xF4ng V\xE2n Art Space",
      meta: [{ name: "description", content: "Tri\u1EC3n l\xE3m v\xE0 ho\u1EA1t \u0111\u1ED9ng \u0111i\xEAu kh\u1EAFc \u0111\xE1 \u0111\u01B0\u01A1ng \u0111\u1EA1i t\u1EA1i S\xF4ng V\xE2n Art Space, Ninh B\xECnh." }]
    });
    const activeFilter = ref("all");
    const filters = [
      { id: "all", label: "T\u1EA5t c\u1EA3" },
      { id: "exhibition", label: "Tri\u1EC3n l\xE3m" },
      { id: "workshop", label: "Workshop" },
      { id: "talk", label: "Tr\xF2 chuy\u1EC7n" }
    ];
    const allEvents = [
      { id: 1, title: "Tri\u1EC3n l\xE3m \u0111i\xEAu kh\u1EAFc \u201CS\xF4ng V\xE2n\u201D", date: "2026-03-22", tag: "exhibition", tagLabel: "Tri\u1EC3n l\xE3m", status: "past", seats: 0, capacity: 1, price: 0, img: "" }
    ];
    const filtered = computed(
      () => activeFilter.value === "all" ? allEvents : allEvents.filter((e) => e.tag === activeFilter.value)
    );
    const upcoming = computed(() => filtered.value.filter((e) => e.status === "upcoming"));
    const past = computed(() => filtered.value.filter((e) => e.status === "past"));
    function formatDate(d) {
      const dt = new Date(d);
      return dt.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
    }
    function formatPrice(n) {
      return n.toLocaleString("vi-VN") + "\u20AB";
    }
    function seatsPercent(e) {
      return Math.round((e.capacity - e.seats) / e.capacity * 100);
    }
    function seatsColor(e) {
      const p = e.seats / e.capacity;
      if (p > 0.5) return "text-green-500";
      if (p > 0.2) return "text-amber-500";
      return "text-red-500";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container section" }, _attrs))}><div class="section-head"><div class="section-eyebrow">L\u1ECBch tr\xECnh</div><h1 class="section-title">S\u1EF1 ki\u1EC7n t\u1EA1i S\xF4ng V\xE2n</h1><p class="section-sub"> Theo d\xF5i c\xE1c tri\u1EC3n l\xE3m, workshop v\xE0 cu\u1ED9c tr\xF2 chuy\u1EC7n xoay quanh \u0111i\xEAu kh\u1EAFc, v\u1EADt li\u1EC7u v\xE0 l\xE0ng ngh\u1EC1 \u0111\xE1. </p></div><div class="flex flex-wrap gap-2 mb-10"><!--[-->`);
      ssrRenderList(filters, (f) => {
        _push(`<button type="button" class="${ssrRenderClass([
          "rounded-full px-4 py-1.5 text-sm font-semibold transition",
          unref(activeFilter) === f.id ? "bg-[--ui-color-brand] text-white" : "border border-[--ui-color-border] text-[--ui-color-text-secondary] hover:border-[--ui-color-brand]/40 hover:text-[--ui-color-brand]"
        ])}">${ssrInterpolate(f.label)}</button>`);
      });
      _push(`<!--]--></div>`);
      if (unref(upcoming).length) {
        _push(`<section><h2 class="text-sm font-bold uppercase tracking-widest text-[--ui-color-text-muted] mb-5">S\u1EAFp di\u1EC5n ra</h2><div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(upcoming), (event) => {
          _push(`<article class="group overflow-hidden rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] transition hover:shadow-lg hover:border-[--ui-color-brand]/30"><div class="${ssrRenderClass(["h-1.5", {
            "bg-gradient-to-r from-[#1a4a2e] to-[#2d7a4f]": event.tag === "outdoor",
            "bg-gradient-to-r from-purple-700 to-indigo-500": event.tag === "science",
            "bg-gradient-to-r from-amber-600 to-orange-400": event.tag === "music",
            "bg-gradient-to-r from-rose-600 to-pink-400": event.tag === "food"
          }])}"></div><div class="p-5"><div class="flex items-center justify-between mb-3"><span class="rounded-full bg-[--ui-color-bg-muted] px-2.5 py-0.5 text-xs font-semibold text-[--ui-color-text-secondary]">${ssrInterpolate(event.tagLabel)}</span><span class="text-xs font-semibold text-[--ui-color-text-muted]">${ssrInterpolate(formatDate(event.date))}</span></div><h3 class="font-bold text-[--ui-color-text-primary] leading-snug">${ssrInterpolate(event.title)}</h3><div class="mt-3"><div class="flex justify-between text-xs mb-1"><span class="text-[--ui-color-text-muted]">Ch\u1ED7 c\xF2n l\u1EA1i</span><span class="${ssrRenderClass(["font-semibold", seatsColor(event)])}">${ssrInterpolate(event.seats)} / ${ssrInterpolate(event.capacity)}</span></div><div class="h-1.5 rounded-full bg-[--ui-color-bg-muted] overflow-hidden"><div class="h-full rounded-full bg-[--ui-color-brand] transition-all" style="${ssrRenderStyle({ width: seatsPercent(event) + "%" })}"></div></div></div><div class="mt-4 flex items-center justify-between"><p class="font-bold text-[--ui-color-brand]">${ssrInterpolate(formatPrice(event.price))}<span class="text-xs font-normal text-[--ui-color-text-muted]">/ng\u01B0\u1EDDi</span></p><button type="button" class="rounded-lg bg-[--ui-color-brand] px-4 py-1.5 text-xs font-bold text-white transition hover:opacity-90 active:scale-[0.97]"> \u0110\u0103ng k\xFD </button></div></div></article>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(past).length) {
        _push(`<section class="mt-14"><h2 class="text-sm font-bold uppercase tracking-widest text-[--ui-color-text-muted] mb-5">\u0110\xE3 k\u1EBFt th\xFAc</h2><div class="space-y-3"><!--[-->`);
        ssrRenderList(unref(past), (event) => {
          _push(`<div class="flex items-center gap-4 rounded-xl border border-[--ui-color-border] bg-[--ui-color-surface] px-5 py-4 opacity-60"><div class="flex-1 min-w-0"><p class="font-semibold text-[--ui-color-text-primary] truncate">${ssrInterpolate(event.title)}</p><p class="text-xs text-[--ui-color-text-muted] mt-0.5">${ssrInterpolate(event.tagLabel)} \xB7 ${ssrInterpolate(formatDate(event.date))}</p></div><span class="shrink-0 rounded-full border border-[--ui-color-border] px-3 py-1 text-xs text-[--ui-color-text-muted]">\u0110\xE3 k\u1EBFt th\xFAc</span></div>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(upcoming).length && !unref(past).length) {
        _push(`<div class="py-20 text-center text-[--ui-color-text-muted]"> Kh\xF4ng c\xF3 s\u1EF1 ki\u1EC7n n\xE0o ph\xF9 h\u1EE3p v\u1EDBi b\u1ED9 l\u1ECDc n\xE0y. </div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/events-waVQst3L');
//# sourceMappingURL=events-waVQst3L.mjs.map
