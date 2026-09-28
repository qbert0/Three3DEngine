globalThis.__timing__.logStart('Load chunks/build/about-Xrtdkedn');import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead } from './v3-vl98-hf4.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './server.mjs';
import 'pinia';
import 'vue-router';

const _imports_0 = publicAssetsURL("/images/song-van/sculpture-garden.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Gi\u1EDBi Thi\u1EC7u \u2014 S\xF4ng V\xE2n Art Space",
      meta: [{ name: "description", content: "C\xE2u chuy\u1EC7n S\xF4ng V\xE2n Art Space \u2014 kh\xF4ng gian \u0111i\xEAu kh\u1EAFc \u0111\xE1 \u0111\u01B0\u01A1ng \u0111\u1EA1i gi\u1EEFa l\xE0ng ngh\u1EC1 Ninh V\xE2n, Ninh B\xECnh." }]
    });
    const milestones = [
      { year: "2018", title: "V\u1EC1 v\u1EDBi \u0111\xE1", desc: "L\u01B0\u01A1ng Gia Art Space kh\u1EDFi \u0111\u1ED9ng ho\u1EA1t \u0111\u1ED9ng \u0111i\xEAu kh\u1EAFc \u0111\xE1 \u0111\u01B0\u01A1ng \u0111\u1EA1i v\u1EDBi workshop \u201CV\u1EC1 v\u1EDBi \u0111\xE1\u201D." },
      { year: "2021", title: "Bi\u1EBFn Chuy\u1EC3n", desc: "Workshop v\xE0 tri\u1EC3n l\xE3m \u0111i\xEAu kh\u1EAFc \u0111\xE1 \u201CBi\u1EBFn Chuy\u1EC3n\u201D ti\u1EBFp t\u1EE5c m\u1EDF r\u1ED9ng \u0111\u1ED1i tho\u1EA1i ngh\u1EC7 thu\u1EADt t\u1EA1i l\xE0ng ngh\u1EC1." },
      { year: "2026", title: "S\xF4ng V\xE2n Art Space", desc: "Kh\xF4ng gian mang t\xEAn m\u1EDBi, h\u01B0\u1EDBng \u0111\u1EBFn m\u1ED9t n\u01A1i tr\u01B0ng b\xE0y ho\xE0n ch\u1EC9nh v\xE0 h\xF2a \u0111\u1ED3ng h\u01A1n v\u1EDBi c\u1EA3nh quan s\u1ED1ng." },
      { year: "2026", title: "Tri\u1EC3n l\xE3m \u201CS\xF4ng V\xE2n\u201D", desc: "L\xEA Th\u1ECB Hi\u1EC1n v\xE0 L\u01B0\u01A1ng Tr\u1ECBnh gi\u1EDBi thi\u1EC7u h\u01A1n 30 t\xE1c ph\u1EA9m \u0111i\xEAu kh\u1EAFc \u0111\xE1 \u0111\u01B0\u01A1ng \u0111\u1EA1i." }
    ];
    const values = [
      { icon: "\u{1FAA8}", title: "T\xF4n tr\u1ECDng v\u1EADt li\u1EC7u", desc: "\u0110\xE1 t\u1EF1 nhi\xEAn \u0111\u01B0\u1EE3c l\u1EAFng nghe nh\u01B0 m\u1ED9t ch\u1EA5t li\u1EC7u c\xF3 k\xFD \u1EE9c, c\u1EA5u tr\xFAc v\xE0 ti\u1EBFng n\xF3i ri\xEAng." },
      { icon: "\u2726", title: "Ng\xF4n ng\u1EEF \u0111\u01B0\u01A1ng \u0111\u1EA1i", desc: "T\u1EA1o m\u1ED9t kh\xF4ng gian cho t\u01B0 duy h\xECnh kh\u1ED1i t\u1ED1i gi\u1EA3n, t\u1EF1 do v\xE0 gi\xE0u t\xEDnh t\u1EF1 th\xE2n." },
      { icon: "\u{1F91D}", title: "K\u1EBFt n\u1ED1i l\xE0ng ngh\u1EC1", desc: "\u0110\u1EB7t ngh\u1EC7 thu\u1EADt \u0111\u01B0\u01A1ng \u0111\u1EA1i trong m\u1EA1ch ngh\u1EC1 \u0111\xE1 l\xE2u \u0111\u1EDDi c\u1EE7a Ninh V\xE2n." },
      { icon: "\u25EF", title: "Kh\xF4ng gian m\u1EDF", desc: "\u0110\u1EC3 t\xE1c ph\u1EA9m \u0111\u1ED1i tho\u1EA1i t\u1EF1 nhi\xEAn v\u1EDBi \xE1nh s\xE1ng, c\xE2y xanh, m\u1EB7t n\u01B0\u1EDBc v\xE0 ng\u01B0\u1EDDi xem." }
    ];
    const artists = [
      {
        name: "L\xEA Th\u1ECB Hi\u1EC1n",
        role: "Nh\xE0 \u0111i\xEAu kh\u1EAFc \xB7 Tr\u1EEBu t\u01B0\u1EE3ng h\xECnh h\u1ECDc",
        image: "/images/song-van/le-thi-hien.jpg",
        alt: "Nh\xE0 \u0111i\xEAu kh\u1EAFc L\xEA Th\u1ECB Hi\u1EC1n gi\u1EDBi thi\u1EC7u t\xE1c ph\u1EA9m t\u1EA1i S\xF4ng V\xE2n Art Space",
        bio: "M\u1ED9t g\u01B0\u01A1ng m\u1EB7t b\u1EA3n l\u1EC1 c\u1EE7a \u0111i\xEAu kh\u1EAFc \u0111\u01B0\u01A1ng \u0111\u1EA1i Vi\u1EC7t Nam. Th\u1EF1c h\xE0nh c\u1EE7a b\xE0 \u0111i t\u1EEB bi\u1EC3u h\xECnh \u0111\u1EBFn phi bi\u1EC3u h\xECnh, s\u1EED d\u1EE5ng nh\u1EEFng chuy\u1EC3n \u0111\u1ED9ng g\u1EA5p, xo\u1EAFn, \u0111an v\xE0 \u0111\u1EA3o chi\u1EC1u \u0111\u1EC3 l\xE0m v\u1EADt li\u1EC7u n\u1EB7ng tr\u1EDF n\xEAn thanh tho\xE1t.",
        note: "T\u1EA1i tri\u1EC3n l\xE3m \u201CS\xF4ng V\xE2n\u201D, b\xE0 gi\u1EDBi thi\u1EC7u 15 t\xE1c ph\u1EA9m b\u1EB1ng c\u1EA9m th\u1EA1ch tr\u1EAFng, \u0111\xE1 \u0111en v\xE0 granite."
      },
      {
        name: "L\u01B0\u01A1ng Tr\u1ECBnh",
        role: "Nh\xE0 \u0111i\xEAu kh\u1EAFc \xB7 Ng\u01B0\u1EDDi s\xE1ng l\u1EADp kh\xF4ng gian",
        image: "/images/song-van/luong-trinh.jpg",
        alt: "Nh\xE0 \u0111i\xEAu kh\u1EAFc L\u01B0\u01A1ng Tr\u1ECBnh ph\xE1c th\u1EA3o t\xE1c ph\u1EA9m t\u1EA1i S\xF4ng V\xE2n Art Space",
        bio: "Sinh tr\u01B0\u1EDFng trong gia \u0111\xECnh c\xF3 truy\u1EC1n th\u1ED1ng l\xE0m ngh\u1EC1 \u0111\xE1 t\u1EA1i Ninh V\xE2n v\xE0 \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o t\u1EA1i Tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc M\u1EF9 thu\u1EADt Vi\u1EC7t Nam. Anh k\u1EBFt n\u1ED1i k\u1EF9 ngh\u1EC7 b\u1EA3n \u0111\u1ECBa v\u1EDBi m\u1ED9t ng\xF4n ng\u1EEF \u0111i\xEAu kh\u1EAFc hi\u1EC7n \u0111\u1EA1i, ki\u1EC7m l\u1EDDi v\xE0 gi\xE0u ch\u1EA5t ki\u1EBFn tr\xFAc.",
        note: "B\u1ED9 \u201CB\xF3ng n\xFAi\u201D g\u1ED3m 21 t\xE1c ph\u1EA9m \u0111\xE1 \u0111en, ch\u1EAFt l\u1ECDc t\u1EEB n\xFAi non, m\xE2y tr\u1EDDi v\xE0 ki\u1EBFn tr\xFAc c\u1ED5 Ninh B\xECnh."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative overflow-hidden bg-gradient-to-br from-[#0d1a12] to-[#1a3a22] py-24 text-white"><div class="absolute inset-0 opacity-10 bg-[url(&#39;data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=1%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&#39;)]"></div><div class="relative container text-center"><div class="section-eyebrow justify-center text-emerald-400">C\xE2u chuy\u1EC7n ch\xFAng t\xF4i</div><h1 class="section-title text-4xl sm:text-5xl lg:text-6xl text-white">S\xF4ng V\xE2n \u2014<br>M\u1ED9t kh\xF4ng gian cho \u0111\xE1</h1><p class="section-sub text-white/70 max-w-2xl mx-auto"> M\u1ED9t \u0111i\u1EC3m g\u1EB7p gi\u1EEFa truy\u1EC1n th\u1ED1ng ch\u1EBF t\xE1c \u0111\xE1 Ninh V\xE2n, th\u1EF1c h\xE0nh \u0111i\xEAu kh\u1EAFc \u0111\u01B0\u01A1ng \u0111\u1EA1i v\xE0 c\u1EA3nh quan Ninh B\xECnh. </p></div></section><section class="container section"><div class="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center"><div><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-3">S\u1EE9 m\u1EC7nh</p><h2 class="text-3xl font-bold text-[--ui-color-text-primary] leading-tight"> K\u1EBFt n\u1ED1i truy\u1EC1n th\u1ED1ng,<br>M\u1EDF l\u1ED1i \u0111\u01B0\u01A1ng \u0111\u1EA1i </h2><p class="mt-5 text-[--ui-color-text-muted] leading-relaxed"> S\xF4ng V\xE2n Art Space ph\xE1t tri\u1EC3n t\u1EEB kh\xF4ng gian s\u1ED1ng v\xE0 s\xE1ng t\xE1c c\u1EE7a gia \u0111\xECnh ngh\u1EC7 s\u0129 L\u01B0\u01A1ng Tr\u1ECBnh, gi\u1EEFa l\xF2ng l\xE0ng ngh\u1EC1 \u0111\xE1 Ninh V\xE2n. </p><p class="mt-4 text-[--ui-color-text-muted] leading-relaxed"> Kh\xF4ng gian h\u01B0\u1EDBng \u0111\u1EBFn vi\u1EC7c \u0111\u01B0a \u0111i\xEAu kh\u1EAFc \u0111\xE1 \u0111\u01B0\u01A1ng \u0111\u1EA1i \u0111\u1EBFn g\u1EA7n h\u01A1n v\u1EDBi \u0111\u1EDDi s\u1ED1ng, \u0111\u1ED3ng th\u1EDDi t\u1EA1o n\u01A1i g\u1EB7p g\u1EE1 gi\u1EEFa ngh\u1EC7 s\u0129, ng\u01B0\u1EDDi th\u1EE3, t\xE1c ph\u1EA9m v\xE0 c\xF4ng ch\xFAng. </p></div><div class="grid grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(values, (v) => {
        _push(`<div class="rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] p-5"><div class="text-2xl mb-3">${ssrInterpolate(v.icon)}</div><h3 class="font-bold text-sm text-[--ui-color-text-primary]">${ssrInterpolate(v.title)}</h3><p class="mt-1.5 text-xs text-[--ui-color-text-muted] leading-relaxed">${ssrInterpolate(v.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-[--ui-color-surface] border-y border-[--ui-color-border] py-20"><div class="mx-auto max-w-6xl px-5 lg:px-8"><div class="mb-12 max-w-3xl"><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-3">Ngh\u1EC7 s\u0129</p><h2 class="text-3xl font-bold text-[--ui-color-text-primary]">Hai th\u1EBF h\u1EC7, m\u1ED9t cu\u1ED9c \u0111\u1ED1i tho\u1EA1i v\u1EDBi \u0111\xE1</h2><p class="mt-4 text-[--ui-color-text-muted] leading-relaxed"> L\xEA Th\u1ECB Hi\u1EC1n v\xE0 L\u01B0\u01A1ng Tr\u1ECBnh g\u1EB7p nhau \u1EDF tinh th\u1EA7n h\xECnh h\u1ECDc, t\u1ED1i gi\u1EA3n v\xE0 s\u1EF1 t\xF4n tr\u1ECDng t\xEDnh t\u1EF1 th\xE2n c\u1EE7a v\u1EADt li\u1EC7u \u2014 m\u1ED9t ng\u01B0\u1EDDi \u0111i qua nhi\u1EC1u m\xF4i tr\u01B0\u1EDDng ngh\u1EC7 thu\u1EADt tr\u1EDF v\u1EC1 l\xE0ng, m\u1ED9t ng\u01B0\u1EDDi t\u1EEB l\xE0ng ngh\u1EC1 b\u01B0\u1EDBc ra th\u1EBF gi\u1EDBi. </p></div><div class="grid grid-cols-1 gap-8 lg:grid-cols-2"><!--[-->`);
      ssrRenderList(artists, (artist) => {
        _push(`<article class="overflow-hidden rounded-2xl border border-[--ui-color-border] bg-[--ui-color-bg]"><img${ssrRenderAttr("src", artist.image)}${ssrRenderAttr("alt", artist.alt)} class="h-72 w-full object-cover"><div class="p-6"><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand]">${ssrInterpolate(artist.role)}</p><h3 class="mt-2 text-2xl font-bold text-[--ui-color-text-primary]">${ssrInterpolate(artist.name)}</h3><p class="mt-4 text-sm leading-relaxed text-[--ui-color-text-muted]">${ssrInterpolate(artist.bio)}</p><p class="mt-4 border-l-2 border-[--ui-color-brand] pl-4 text-sm font-medium leading-relaxed text-[--ui-color-text-secondary]">${ssrInterpolate(artist.note)}</p></div></article>`);
      });
      _push(`<!--]--></div><p class="mt-5 text-xs text-[--ui-color-text-muted]">\u1EA2nh: Ng\u1ECDc Linh / B\xE1o Ninh B\xECnh.</p></div></section><section class="container section"><div class="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center"><img${ssrRenderAttr("src", _imports_0)} alt="To\xE0n c\u1EA3nh khu v\u01B0\u1EDDn \u0111i\xEAu kh\u1EAFc S\xF4ng V\xE2n b\xEAn m\u1EB7t n\u01B0\u1EDBc" class="h-full min-h-80 w-full rounded-2xl object-cover"><div><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-3">Ninh V\xE2n \xB7 Ninh B\xECnh</p><h2 class="text-3xl font-bold text-[--ui-color-text-primary]">M\u1ED9t art space \u1EDF ngay trong m\u1EA1ch s\u1ED1ng c\u1EE7a l\xE0ng \u0111\xE1</h2><p class="mt-5 text-[--ui-color-text-muted] leading-relaxed"> S\xF4ng V\xE2n Art Space n\u1EB1m t\u1EA1i Xu\xE2n Ph\xFAc, ph\u01B0\u1EDDng Nam Hoa L\u01B0, trong v\xF9ng ngh\u1EC1 \u0111\xE1 Ninh V\xE2n. X\u01B0\u1EDFng, t\u01B0 gia, hai ph\xF2ng tr\u01B0ng b\xE0y v\xE0 khu v\u01B0\u1EDDn \u0111i\xEAu kh\u1EAFc c\xF9ng t\u1ED3n t\u1EA1i b\xEAn m\u1ED9t nh\xE1nh s\xF4ng V\xE2n, \u0111\u1EC3 t\xE1c ph\u1EA9m \u0111\u1ED1i tho\u1EA1i tr\u1EF1c ti\u1EBFp v\u1EDBi \xE1nh s\xE1ng, m\u1EB7t n\u01B0\u1EDBc v\xE0 \u0111\u1EDDi s\u1ED1ng \u0111\u1ECBa ph\u01B0\u01A1ng. </p><dl class="mt-6 grid grid-cols-2 gap-4 text-sm"><div class="rounded-xl bg-[--ui-color-bg-muted] p-4"><dt class="text-[--ui-color-text-muted]">Kh\xF4ng gian</dt><dd class="mt-1 font-bold">02 ph\xF2ng \xB7 01 khu v\u01B0\u1EDDn</dd></div><div class="rounded-xl bg-[--ui-color-bg-muted] p-4"><dt class="text-[--ui-color-text-muted]">T\u1ECDa \u0111\u1ED9</dt><dd class="mt-1 font-bold">20\xB012\u203229.4\u2033N<br>105\xB057\u203212.1\u2033E</dd></div></dl><a href="https://maps.app.goo.gl/Yzgs3xcSwHCcgq2L9" target="_blank" rel="noreferrer" class="mt-6 inline-flex font-bold text-[--ui-color-brand] hover:underline">M\u1EDF Google Maps \u2197</a></div></div></section><section class="bg-[--ui-color-surface] border-y border-[--ui-color-border] py-16"><div class="mx-auto max-w-5xl px-5 lg:px-8"><div class="text-center mb-12"><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-2">L\u1ECBch s\u1EED</p><h2 class="text-2xl font-bold text-[--ui-color-text-primary]">H\xE0nh tr\xECnh ph\xE1t tri\u1EC3n</h2></div><div class="relative"><div class="absolute left-1/2 top-0 bottom-0 w-px bg-[--ui-color-border] hidden lg:block"></div><div class="space-y-8 lg:space-y-0"><!--[-->`);
      ssrRenderList(milestones, (m, i) => {
        _push(`<div class="${ssrRenderClass(["relative lg:flex lg:items-center lg:gap-8", i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"])}"><div class="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-[--ui-color-brand] text-xs font-bold text-white shadow-md">${ssrInterpolate(m.year.slice(2))}&#39; </div><div class="${ssrRenderClass(["lg:w-[calc(50%-2.5rem)] rounded-2xl border border-[--ui-color-border] bg-[--ui-color-bg] p-5", i % 2 === 0 ? "lg:text-right" : ""])}"><p class="text-xs font-bold text-[--ui-color-brand] mb-1">${ssrInterpolate(m.year)}</p><h3 class="font-bold text-[--ui-color-text-primary]">${ssrInterpolate(m.title)}</h3><p class="mt-1 text-sm text-[--ui-color-text-muted] leading-relaxed">${ssrInterpolate(m.desc)}</p></div><div class="hidden lg:block lg:w-[calc(50%-2.5rem)]"></div></div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="mx-auto max-w-5xl px-5 py-20 lg:px-8"><div class="text-center mb-10"><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-2">Li\xEAn h\u1EC7</p><h2 class="text-2xl font-bold text-[--ui-color-text-primary]">Ch\xFAng t\xF4i lu\xF4n s\u1EB5n s\xE0ng h\u1ED7 tr\u1EE3</h2></div><div class="grid grid-cols-1 gap-5 sm:grid-cols-3"><!--[-->`);
      ssrRenderList([
        { icon: "\u25F7", label: "L\u1ECBch tham quan", value: "\u0110\u1EB7t l\u1ECBch tr\u01B0\u1EDBc khi \u0111\u1EBFn", sub: "Kh\xF4ng gian s\u1EBD x\xE1c nh\u1EADn th\u1EDDi gian", href: "/tickets" },
        { icon: "\u260E", label: "\u0110i\u1EC7n tho\u1EA1i", value: "+84 988 793 456", sub: "Li\xEAn h\u1EC7 S\xF4ng V\xE2n Art Space", href: "tel:+84988793456" },
        { icon: "\u{1F4CD}", label: "\u0110\u1ECBa ch\u1EC9", value: "Xu\xE2n Ph\xFAc", sub: "Ph\u01B0\u1EDDng Nam Hoa L\u01B0, Ninh B\xECnh", href: "https://maps.app.goo.gl/Yzgs3xcSwHCcgq2L9" }
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

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/about-Xrtdkedn');
//# sourceMappingURL=about-Xrtdkedn.mjs.map
