globalThis.__timing__.logStart('Load chunks/build/tickets-ChZBhEmS');import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
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
  __name: "tickets",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0110\u1EB7t V\xE9 \u2014 Tr\u1EA3ng Bay",
      meta: [{ name: "description", content: "\u0110\u1EB7t v\xE9 tham quan khu du l\u1ECBch sinh th\xE1i Tr\u1EA3ng Bay tr\u1EF1c tuy\u1EBFn. Nh\u1EADn QR ngay l\u1EADp t\u1EE9c." }]
    });
    const ticketTypes = [
      {
        id: "normal",
        label: "V\xE9 Th\u01B0\u1EDDng",
        price: 15e4,
        desc: "Ng\u01B0\u1EDDi l\u1EDBn (tr\xEAn 12 tu\u1ED5i)",
        includes: ["Tham quan to\xE0n khu", "B\u1EA3n \u0111\u1ED3 tham quan", "Wifi khu v\u1EF1c trung t\xE2m"],
        badge: ""
      },
      {
        id: "child",
        label: "V\xE9 Tr\u1EBB Em",
        price: 75e3,
        desc: "Tr\u1EBB em 4\u201312 tu\u1ED5i",
        includes: ["Tham quan to\xE0n khu", "B\u1EA3n \u0111\u1ED3 tham quan", "Khu vui ch\u01A1i tr\u1EBB em"],
        badge: ""
      },
      {
        id: "family",
        label: "V\xE9 Gia \u0110\xECnh",
        price: 4e5,
        desc: "2 ng\u01B0\u1EDDi l\u1EDBn + 2 tr\u1EBB em",
        includes: ["Tham quan to\xE0n khu", "Picnic set mi\u1EC5n ph\xED", "\u01AFu ti\xEAn \u0111\u1EB7t ch\u1ED7 s\u1EF1 ki\u1EC7n", "Gi\u1EA3m 20% d\u1ECBch v\u1EE5 \u0103n u\u1ED1ng"],
        badge: "Ph\u1ED5 bi\u1EBFn"
      },
      {
        id: "group",
        label: "V\xE9 Nh\xF3m",
        price: 12e4,
        desc: "T\u1EEB 10 ng\u01B0\u1EDDi (t\xEDnh/ng\u01B0\u1EDDi)",
        includes: ["Tham quan to\xE0n khu", "H\u01B0\u1EDBng d\u1EABn vi\xEAn ri\xEAng", "Xe \u0111\u01B0a \u0111\xF3n n\u1ED9i b\u1ED9"],
        badge: "Ti\u1EBFt ki\u1EC7m"
      }
    ];
    const selected = ref("family");
    const visitDate = ref("");
    const quantity = ref(1);
    const visitorName = ref("");
    const visitorPhone = ref("");
    const submitted = ref(false);
    const selectedTicket = computed(() => ticketTypes.find((t) => t.id === selected.value));
    const totalPrice = computed(() => {
      var _a, _b;
      return ((_b = (_a = selectedTicket.value) == null ? void 0 : _a.price) != null ? _b : 0) * quantity.value;
    });
    function formatPrice(n) {
      return n.toLocaleString("vi-VN") + "\u20AB";
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container section" }, _attrs))}><div class="section-head center"><div class="section-eyebrow">V\xE9 tham quan</div><h1 class="section-title">\u0110\u1EB7t v\xE9 online</h1><p class="section-sub"> Ch\u1ECDn lo\u1EA1i v\xE9, ng\xE0y tham quan v\xE0 \u0111i\u1EC1n th\xF4ng tin. Nh\u1EADn m\xE3 QR x\xE1c nh\u1EADn qua SMS ngay l\u1EADp t\u1EE9c. </p></div>`);
      if (unref(submitted)) {
        _push(`<div class="max-w-md mx-auto rounded-2xl border border-green-500/30 bg-green-500/10 p-10 text-center"><div class="text-5xl mb-4">\u{1F389}</div><h2 class="text-xl font-bold text-[--ui-color-text-primary]">\u0110\u1EB7t v\xE9 th\xE0nh c\xF4ng!</h2><p class="mt-2 text-sm text-[--ui-color-text-muted]">M\xE3 QR \u0111\xE3 \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn <strong>${ssrInterpolate(unref(visitorPhone))}</strong>. Vui l\xF2ng xu\u1EA5t tr\xECnh khi v\xE0o c\u1ED5ng.</p><div class="mt-6 p-4 rounded-xl bg-[--ui-color-bg-muted] font-mono text-2xl tracking-widest text-center text-[--ui-color-brand]"> TB${ssrInterpolate(Math.random().toString(36).slice(2, 8).toUpperCase())}</div><button type="button" class="mt-6 text-sm text-[--ui-color-brand] hover:underline">\u0110\u1EB7t th\xEAm v\xE9</button></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 gap-8 lg:grid-cols-3"><div class="lg:col-span-2 space-y-4"><h2 class="font-bold text-[--ui-color-text-primary] mb-4">Ch\u1ECDn lo\u1EA1i v\xE9</h2><!--[-->`);
        ssrRenderList(ticketTypes, (t) => {
          _push(`<label class="${ssrRenderClass([
            "relative flex cursor-pointer gap-4 rounded-2xl border-2 p-5 transition",
            unref(selected) === t.id ? "border-[--ui-color-brand] bg-[--ui-color-brand-muted]" : "border-[--ui-color-border] bg-[--ui-color-surface] hover:border-[--ui-color-brand]/40"
          ])}"><input type="radio"${ssrRenderAttr("value", t.id)}${ssrIncludeBooleanAttr(ssrLooseEqual(unref(selected), t.id)) ? " checked" : ""} class="sr-only"><div class="${ssrRenderClass([unref(selected) === t.id ? "border-[--ui-color-brand]" : "border-[--ui-color-border]", "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"])}">`);
          if (unref(selected) === t.id) {
            _push(`<div class="h-2.5 w-2.5 rounded-full bg-[--ui-color-brand]"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex-1"><div class="flex items-center gap-2"><p class="font-bold text-[--ui-color-text-primary]">${ssrInterpolate(t.label)}</p>`);
          if (t.badge) {
            _push(`<span class="rounded-full bg-[--ui-color-brand] px-2 py-0.5 text-[10px] font-bold text-white">${ssrInterpolate(t.badge)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><p class="text-xs text-[--ui-color-text-muted] mt-0.5">${ssrInterpolate(t.desc)}</p><ul class="mt-2 space-y-1"><!--[-->`);
          ssrRenderList(t.includes, (inc) => {
            _push(`<li class="flex items-center gap-1.5 text-xs text-[--ui-color-text-secondary]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg> ${ssrInterpolate(inc)}</li>`);
          });
          _push(`<!--]--></ul></div><p class="shrink-0 text-xl font-bold text-[--ui-color-brand]">${ssrInterpolate(formatPrice(t.price))}</p></label>`);
        });
        _push(`<!--]--></div><div class="rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] p-6 h-fit sticky top-20"><h2 class="font-bold text-[--ui-color-text-primary] mb-5">Th\xF4ng tin \u0111\u1EB7t v\xE9</h2><form class="space-y-4"><div><label class="text-xs font-semibold text-[--ui-color-text-secondary] block mb-1">Ng\xE0y tham quan *</label><input type="date"${ssrRenderAttr("value", unref(visitDate))} required class="w-full rounded-lg border border-[--ui-color-border] bg-[--ui-color-bg] px-3 py-2.5 text-sm text-[--ui-color-text-primary] outline-none focus:border-[--ui-color-brand] focus:ring-2 focus:ring-[--ui-color-brand]/20 transition"></div><div><label class="text-xs font-semibold text-[--ui-color-text-secondary] block mb-1">S\u1ED1 l\u01B0\u1EE3ng v\xE9</label><div class="flex items-center gap-3"><button type="button" class="grid h-9 w-9 place-items-center rounded-lg border border-[--ui-color-border] text-lg font-bold transition hover:bg-[--ui-color-bg-muted]">\u2212</button><span class="text-lg font-bold text-[--ui-color-text-primary] w-8 text-center">${ssrInterpolate(unref(quantity))}</span><button type="button" class="grid h-9 w-9 place-items-center rounded-lg border border-[--ui-color-border] text-lg font-bold transition hover:bg-[--ui-color-bg-muted]">+</button></div></div><div><label class="text-xs font-semibold text-[--ui-color-text-secondary] block mb-1">H\u1ECD t\xEAn *</label><input type="text"${ssrRenderAttr("value", unref(visitorName))} placeholder="Nguy\u1EC5n V\u0103n A" required class="w-full rounded-lg border border-[--ui-color-border] bg-[--ui-color-bg] px-3 py-2.5 text-sm text-[--ui-color-text-primary] outline-none focus:border-[--ui-color-brand] focus:ring-2 focus:ring-[--ui-color-brand]/20 transition"></div><div><label class="text-xs font-semibold text-[--ui-color-text-secondary] block mb-1">S\u1ED1 \u0111i\u1EC7n tho\u1EA1i *</label><input type="tel"${ssrRenderAttr("value", unref(visitorPhone))} placeholder="090x xxx xxx" required class="w-full rounded-lg border border-[--ui-color-border] bg-[--ui-color-bg] px-3 py-2.5 text-sm text-[--ui-color-text-primary] outline-none focus:border-[--ui-color-brand] focus:ring-2 focus:ring-[--ui-color-brand]/20 transition"></div><div class="rounded-xl bg-[--ui-color-bg-muted] p-4 space-y-2"><div class="flex justify-between text-sm"><span class="text-[--ui-color-text-muted]">${ssrInterpolate((_a = unref(selectedTicket)) == null ? void 0 : _a.label)}</span><span class="text-[--ui-color-text-secondary]">${ssrInterpolate(formatPrice((_c = (_b = unref(selectedTicket)) == null ? void 0 : _b.price) != null ? _c : 0))} \xD7 ${ssrInterpolate(unref(quantity))}</span></div><div class="flex justify-between font-bold text-[--ui-color-text-primary] border-t border-[--ui-color-border] pt-2 mt-2"><span>T\u1ED5ng c\u1ED9ng</span><span class="text-[--ui-color-brand] text-lg">${ssrInterpolate(formatPrice(unref(totalPrice)))}</span></div></div><button type="submit" class="w-full rounded-xl bg-gradient-to-r from-[#1a4a2e] to-[#2d7a4f] py-3 text-sm font-bold text-white shadow-md transition hover:opacity-90 active:scale-[0.98]"> \u0110\u1EB7t v\xE9 \u2014 ${ssrInterpolate(formatPrice(unref(totalPrice)))}</button><p class="text-center text-xs text-[--ui-color-text-muted]">\u{1F512} Thanh to\xE1n an to\xE0n \xB7 Ho\xE0n ti\u1EC1n 100% n\u1EBFu h\u1EE7y tr\u01B0\u1EDBc 24h</p></form></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tickets.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/tickets-ChZBhEmS');
//# sourceMappingURL=tickets-ChZBhEmS.mjs.map
