globalThis.__timing__.logStart('Load chunks/build/about-C_Gbpl7V');import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Gi\u1EDBi Thi\u1EC7u \u2014 Tr\u1EA3ng Bay",
      meta: [{ name: "description", content: "C\xE2u chuy\u1EC7n, s\u1EE9 m\u1EC7nh v\xE0 \u0111\u1ED9i ng\u0169 c\u1EE7a khu du l\u1ECBch sinh th\xE1i Tr\u1EA3ng Bay." }]
    });
    const milestones = [
      { year: "2018", title: "Th\xE0nh l\u1EADp", desc: "Kh\u1EDFi \u0111\u1EA7u t\u1EEB 120 ha r\u1EEBng t\u1EF1 nhi\xEAn, v\u1EDBi s\u1EE9 m\u1EC7nh b\u1EA3o t\u1ED3n v\xE0 ph\xE1t tri\u1EC3n du l\u1ECBch b\u1EC1n v\u1EEFng." },
      { year: "2020", title: "M\u1EDF r\u1ED9ng", desc: "M\u1EDF r\u1ED9ng l\xEAn 600 ha, x\xE2y d\u1EF1ng h\u1EC7 th\u1ED1ng \u0111\u01B0\u1EDDng m\xF2n sinh th\xE1i v\xE0 khu ngh\u1EC9 d\u01B0\u1EE1ng xanh." },
      { year: "2023", title: "S\u1ED1 h\xF3a", desc: "Ra m\u1EAFt h\u1EC7 th\u1ED1ng tour \u1EA3o 360\xB0, cho ph\xE9p du kh\xE1ch kh\xE1m ph\xE1 Tr\u1EA3ng Bay t\u1EEB m\u1ECDi n\u01A1i tr\xEAn th\u1EBF gi\u1EDBi." },
      { year: "2026", title: "H\xF4m nay", desc: "H\u01A1n 1.200 ha, 15 \u0111i\u1EC3m tham quan, \u0111\xF3n ti\u1EBFp h\xE0ng ngh\xECn du kh\xE1ch m\u1ED7i th\xE1ng." }
    ];
    const values = [
      { icon: "\u{1F33F}", title: "B\u1EA3o t\u1ED3n thi\xEAn nhi\xEAn", desc: "10% doanh thu \u0111\u01B0\u1EE3c d\xF9ng \u0111\u1EC3 t\xE1i tr\u1ED3ng r\u1EEBng v\xE0 b\u1EA3o t\u1ED3n \u0111a d\u1EA1ng sinh h\u1ECDc." },
      { icon: "\u{1F91D}", title: "C\u1ED9ng \u0111\u1ED3ng \u0111\u1ECBa ph\u01B0\u01A1ng", desc: "\u01AFu ti\xEAn tuy\u1EC3n d\u1EE5ng v\xE0 ph\xE1t tri\u1EC3n k\u1EF9 n\u0103ng cho ng\u01B0\u1EDDi d\xE2n b\u1EA3n \u0111\u1ECBa." },
      { icon: "\u267B\uFE0F", title: "Kh\xF4ng r\xE1c th\u1EA3i nh\u1EF1a", desc: "To\xE0n b\u1ED9 khu kh\xF4ng d\xF9ng \u0111\u1ED3 nh\u1EF1a d\xF9ng m\u1ED9t l\u1EA7n k\u1EC3 t\u1EEB 2022." },
      { icon: "\u{1F4DA}", title: "Gi\xE1o d\u1EE5c sinh th\xE1i", desc: "Ch\u01B0\u01A1ng tr\xECnh tham quan gi\xE1o d\u1EE5c cho h\u1ECDc sinh c\xE1c c\u1EA5p, mi\u1EC5n ph\xED cho tr\u01B0\u1EDDng c\xF4ng l\u1EADp." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative overflow-hidden bg-gradient-to-br from-[#0d1a12] to-[#1a3a22] py-24 text-white"><div class="absolute inset-0 opacity-10 bg-[url(&#39;data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=1%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&#39;)]"></div><div class="relative container text-center"><div class="section-eyebrow justify-center text-emerald-400">C\xE2u chuy\u1EC7n ch\xFAng t\xF4i</div><h1 class="section-title text-4xl sm:text-5xl lg:text-6xl text-white">Tr\u1EA3ng Bay \u2014<br>S\u1ED1ng c\xF9ng thi\xEAn nhi\xEAn</h1><p class="section-sub text-white/70 max-w-2xl mx-auto"> H\u01A1n 8 n\u0103m ph\xE1t tri\u1EC3n, ch\xFAng t\xF4i tin r\u1EB1ng du l\u1ECBch v\xE0 b\u1EA3o t\u1ED3n kh\xF4ng m\xE2u thu\u1EABn \u2014 ch\xFAng c\xF3 th\u1EC3 c\xF9ng ph\xE1t tri\u1EC3n khi \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF \u0111\xFAng c\xE1ch. </p></div></section><section class="container section"><div class="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center"><div><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-3">S\u1EE9 m\u1EC7nh</p><h2 class="text-3xl font-bold text-[--ui-color-text-primary] leading-tight"> B\u1EA3o t\u1ED3n thi\xEAn nhi\xEAn,<br>N\xE2ng t\u1EA7m tr\u1EA3i nghi\u1EC7m </h2><p class="mt-5 text-[--ui-color-text-muted] leading-relaxed"> Tr\u1EA3ng Bay \u0111\u01B0\u1EE3c th\xE0nh l\u1EADp v\u1EDBi m\u1EE5c ti\xEAu b\u1EA3o v\u1EC7 1.200 ha r\u1EEBng nguy\xEAn sinh trong khi t\u1EA1o ra ngu\u1ED3n thu b\u1EC1n v\u1EEFng cho c\u1ED9ng \u0111\u1ED3ng \u0111\u1ECBa ph\u01B0\u01A1ng th\xF4ng qua du l\u1ECBch sinh th\xE1i c\xF3 tr\xE1ch nhi\u1EC7m. </p><p class="mt-4 text-[--ui-color-text-muted] leading-relaxed"> M\u1ED7i tr\u1EA3i nghi\u1EC7m t\u1EA1i \u0111\xE2y \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF \u0111\u1EC3 k\u1EBFt n\u1ED1i con ng\u01B0\u1EDDi v\u1EDBi thi\xEAn nhi\xEAn m\u1ED9t c\xE1ch s\xE2u s\u1EAFc v\xE0 c\xF3 \xFD ngh\u0129a \u2014 t\u1EEB tour 360\xB0 s\u1ED1 h\xF3a \u0111\u1EBFn nh\u1EEFng chuy\u1EBFn trekking m\u1EB7t \u0111\u1EA5t. </p></div><div class="grid grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(values, (v) => {
        _push(`<div class="rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] p-5"><div class="text-2xl mb-3">${ssrInterpolate(v.icon)}</div><h3 class="font-bold text-sm text-[--ui-color-text-primary]">${ssrInterpolate(v.title)}</h3><p class="mt-1.5 text-xs text-[--ui-color-text-muted] leading-relaxed">${ssrInterpolate(v.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-[--ui-color-surface] border-y border-[--ui-color-border] py-16"><div class="mx-auto max-w-5xl px-5 lg:px-8"><div class="text-center mb-12"><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-2">L\u1ECBch s\u1EED</p><h2 class="text-2xl font-bold text-[--ui-color-text-primary]">H\xE0nh tr\xECnh ph\xE1t tri\u1EC3n</h2></div><div class="relative"><div class="absolute left-1/2 top-0 bottom-0 w-px bg-[--ui-color-border] hidden lg:block"></div><div class="space-y-8 lg:space-y-0"><!--[-->`);
      ssrRenderList(milestones, (m, i) => {
        _push(`<div class="${ssrRenderClass(["relative lg:flex lg:items-center lg:gap-8", i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"])}"><div class="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-[--ui-color-brand] text-xs font-bold text-white shadow-md">${ssrInterpolate(m.year.slice(2))}&#39; </div><div class="${ssrRenderClass(["lg:w-[calc(50%-2.5rem)] rounded-2xl border border-[--ui-color-border] bg-[--ui-color-bg] p-5", i % 2 === 0 ? "lg:text-right" : ""])}"><p class="text-xs font-bold text-[--ui-color-brand] mb-1">${ssrInterpolate(m.year)}</p><h3 class="font-bold text-[--ui-color-text-primary]">${ssrInterpolate(m.title)}</h3><p class="mt-1 text-sm text-[--ui-color-text-muted] leading-relaxed">${ssrInterpolate(m.desc)}</p></div><div class="hidden lg:block lg:w-[calc(50%-2.5rem)]"></div></div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="mx-auto max-w-5xl px-5 py-20 lg:px-8"><div class="text-center mb-10"><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-2">Li\xEAn h\u1EC7</p><h2 class="text-2xl font-bold text-[--ui-color-text-primary]">Ch\xFAng t\xF4i lu\xF4n s\u1EB5n s\xE0ng h\u1ED7 tr\u1EE3</h2></div><div class="grid grid-cols-1 gap-5 sm:grid-cols-3"><!--[-->`);
      ssrRenderList([
        { icon: "\u{1F4DE}", label: "Hotline", value: "0900 000 000", sub: "7:00 \u2013 18:00 h\xE0ng ng\xE0y", href: "tel:0900000000" },
        { icon: "\u2709\uFE0F", label: "Email", value: "info@trangbay.vn", sub: "Ph\u1EA3n h\u1ED3i trong 4 gi\u1EDD", href: "mailto:info@trangbay.vn" },
        { icon: "\u{1F4CD}", label: "\u0110\u1ECBa ch\u1EC9", value: "R\u1EEBng N\xFAi Tr\u1EA3ng Bay", sub: "Vi\u1EC7t Nam", href: "#" }
      ], (c) => {
        _push(`<a${ssrRenderAttr("href", c.href)} class="rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] p-6 text-center transition hover:border-[--ui-color-brand]/40 hover:shadow-md"><div class="text-3xl mb-3">${ssrInterpolate(c.icon)}</div><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-text-muted]">${ssrInterpolate(c.label)}</p><p class="mt-1 font-bold text-[--ui-color-text-primary]">${ssrInterpolate(c.value)}</p><p class="text-xs text-[--ui-color-text-muted] mt-0.5">${ssrInterpolate(c.sub)}</p></a>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/about-C_Gbpl7V');
//# sourceMappingURL=about-C_Gbpl7V.mjs.map
