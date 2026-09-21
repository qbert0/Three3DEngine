globalThis.__timing__.logStart('Load chunks/build/index-BaUuIVlm');import { _ as __nuxt_component_0 } from './nuxt-link-B0iADLum.mjs';
import { defineComponent, withAsyncContext, computed, ref, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead } from './v3-vl98-hf4.mjs';
import { u as useFetch } from './fetch-BMHjmZvY.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import '@vue/shared';
import 'perfect-debounce';
import 'pinia';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Tr\u1EA3ng Bay \u2014 Khu Du L\u1ECBch Sinh Th\xE1i 360\xB0",
      meta: [{ name: "description", content: "Khu du l\u1ECBch sinh th\xE1i Tr\u1EA3ng Bay \u2014 thi\xEAn nhi\xEAn hoang s\u01A1, tour 360\xB0, \u0111\u1EB7t v\xE9 v\xE0 s\u1EF1 ki\u1EC7n." }]
    });
    const { data, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/tours",
      "$1cxjKEGR5E"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const tours = computed(() => {
      var _a, _b;
      return (_b = (_a = data.value) == null ? void 0 : _a.items) != null ? _b : [];
    });
    const featuredTour = computed(() => tours.value[0]);
    const heroSlides = [
      { bg: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80", label: "R\u1EEBng nguy\xEAn sinh Tr\u1EA3ng Bay" },
      { bg: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80", label: "\u0110\u1EA1i ng\xE0n xanh th\u1EB3m" },
      { bg: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80", label: "Kh\xE1m ph\xE1 thi\xEAn nhi\xEAn" }
    ];
    const currentSlide = ref(0);
    const highlights = [
      { tag: "Thi\xEAn nhi\xEAn", title: "R\u1EEBng Nguy\xEAn Sinh 12km", desc: "\u0110\u01B0\u1EDDng m\xF2n xuy\xEAn r\u1EEBng nguy\xEAn sinh, h\u1EC7 \u0111\u1ED9ng th\u1EF1c v\u1EADt phong ph\xFA." },
      { tag: "M\u1EA1o hi\u1EC3m", title: "\u0110\u1EC9nh Tr\u1EA3ng Nh\xECn Xa", desc: "\u0110i\u1EC3m ng\u1EAFm c\u1EA3nh to\xE0n b\u1ED9 thung l\u0169ng \u1EDF \u0111\u1ED9 cao 840m." },
      { tag: "V\u0103n h\xF3a", title: "L\xE0ng B\u1EA3n \u0110\u1ECBa", desc: "Tr\u1EA3i nghi\u1EC7m v\u0103n h\xF3a v\xE0 \u1EA9m th\u1EF1c c\u1ED9ng \u0111\u1ED3ng d\xE2n t\u1ED9c \u0111\u1ECBa ph\u01B0\u01A1ng." },
      { tag: "Sinh th\xE1i", title: "H\u1ED3 Tr\u1EA3ng Bay", desc: "H\u1ED3 n\u01B0\u1EDBc t\u1EF1 nhi\xEAn gi\u1EEFa l\xF2ng r\u1EEBng, trong xanh b\u1ED1n m\xF9a." }
    ];
    const events = [
      { day: "20", month: "Th\xE1ng 9", cat: "Thi\xEAn v\u0103n", title: "\u0110\xEAm Ng\u1EAFm Sao Tr\u1EA3ng Bay", desc: "Quan s\xE1t b\u1EA7u tr\u1EDDi \u0111\xEAm hoang s\u01A1 c\xF9ng k\xEDnh thi\xEAn v\u0103n chuy\xEAn nghi\u1EC7p.", time: "19:00 \u2013 23:00", place: "\u0110\u1EC9nh Tr\u1EA3ng" },
      { day: "27", month: "Th\xE1ng 9", cat: "Outdoor", title: "Trekking R\u1EEBng 12km", desc: "H\xE0nh tr\xECnh xuy\xEAn r\u1EEBng c\xF9ng h\u01B0\u1EDBng d\u1EABn vi\xEAn sinh th\xE1i \u0111\u1ECBa ph\u01B0\u01A1ng.", time: "06:00 \u2013 18:00", place: "C\u1ED5ng ch\xEDnh" },
      { day: "04", month: "Th\xE1ng 10", cat: "\xC2m nh\u1EA1c", title: "L\u1EC5 H\u1ED9i \xC2m Nh\u1EA1c Xanh", desc: "\xC2m nh\u1EA1c acoustic v\xE0 indie gi\u1EEFa thi\xEAn nhi\xEAn, kh\xF4ng khu\u1EBFch \u0111\u1EA1i.", time: "17:00 \u2013 22:00", place: "B\xE3i Tr\u1EA3ng" }
    ];
    const tickets = [
      { name: "V\xE9 Ti\xEAu Chu\u1EA9n", desc: "Ph\xF9 h\u1EE3p kh\xE1ch l\u1EBB, tham quan t\u1EF1 do", price: "150.000", unit: "\u0111 / ng\u01B0\u1EDDi", features: ["V\xE0o t\u1EA5t c\u1EA3 khu tham quan", "B\u1EA3n \u0111\u1ED3 tham quan mi\u1EC5n ph\xED", "Th\u1EDDi gian t\u1EF1 do"], featured: false },
      { name: "Combo Tr\u1EA3i Nghi\u1EC7m", desc: "\u0110\u01B0\u1EE3c ch\u1ECDn nhi\u1EC1u nh\u1EA5t \u2014 ti\u1EBFt ki\u1EC7m 25%", price: "350.000", unit: "\u0111 / ng\u01B0\u1EDDi", features: ["V\xE9 v\xE0o c\u1ED5ng + H\u01B0\u1EDBng d\u1EABn vi\xEAn", "Tour r\u1EEBng 4h c\xF3 thuy\u1EBFt minh", "B\u1EEFa tr\u01B0a \u0111\u1ECBa ph\u01B0\u01A1ng", "\u1EA2nh k\u1EF7 ni\u1EC7m mi\u1EC5n ph\xED"], featured: true },
      { name: "G\xF3i Gia \u0110\xECnh", desc: "2 ng\u01B0\u1EDDi l\u1EDBn + 2 tr\u1EBB em", price: "450.000", unit: "\u0111 / g\xF3i", features: ["V\xE9 v\xE0o c\u1ED5ng c\u1EA3 gia \u0111\xECnh", "Khu vui ch\u01A1i tr\u1EBB em", "Picnic set t\u1EB7ng k\xE8m"], featured: false }
    ];
    const partners = ["B\u1ED9 V\u0103n h\xF3a TT&DL", "Vietnam Airlines", "Booking.com", "TripAdvisor", "Agoda", "Sun Group"];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-379cb6cd><section class="hero" data-v-379cb6cd><div class="hero-slides" data-v-379cb6cd><!--[-->`);
      ssrRenderList(heroSlides, (slide, i) => {
        _push(`<div class="${ssrRenderClass([{ active: unref(currentSlide) === i }, "hero-slide"])}" style="${ssrRenderStyle({ backgroundImage: `url('${slide.bg}')` })}" data-v-379cb6cd></div>`);
      });
      _push(`<!--]--></div><div class="container hero-content" data-v-379cb6cd><div class="hero-eyebrow" data-v-379cb6cd><span class="dot" data-v-379cb6cd></span> Khu du l\u1ECBch sinh th\xE1i \xB7 M\u1EDF c\u1EEDa h\xF4m nay </div><h1 class="hero-title" data-v-379cb6cd> Thi\xEAn nhi\xEAn hoang s\u01A1<br data-v-379cb6cd><em data-v-379cb6cd>Tr\u1EA3ng Bay</em></h1><p class="hero-desc" data-v-379cb6cd> R\u1EEBng n\xFAi nguy\xEAn sinh, kh\xF4ng kh\xED trong l\xE0nh v\xE0 nh\u1EEFng tr\u1EA3i nghi\u1EC7m 360\xB0 \u0111\u1EAFm ch\xECm. Kh\xE1m ph\xE1. Ngh\u1EC9 ng\u01A1i. T\xE1i sinh. </p><div class="hero-ctas" data-v-379cb6cd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tickets",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-379cb6cd${_scopeId}><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" data-v-379cb6cd${_scopeId}></path></svg> \u0110\u1EB7t v\xE9 tham quan `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "15",
                height: "15",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" })
              ])),
              createTextVNode(" \u0110\u1EB7t v\xE9 tham quan ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(featuredTour)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/experience/${unref(featuredTour).slug}`,
          class: "btn-hero-outline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${ssrRenderStyle({ "display": "inline-block", "vertical-align": "-2px", "margin-right": "6px" })}" data-v-379cb6cd${_scopeId}><circle cx="12" cy="12" r="10" data-v-379cb6cd${_scopeId}></circle><polygon points="10 8 16 12 10 16 10 8" data-v-379cb6cd${_scopeId}></polygon></svg> Tour 360\xB0 \u1EA2o `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "15",
                  height: "15",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  style: { "display": "inline-block", "vertical-align": "-2px", "margin-right": "6px" }
                }, [
                  createVNode("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                  }),
                  createVNode("polygon", { points: "10 8 16 12 10 16 10 8" })
                ])),
                createTextVNode(" Tour 360\xB0 \u1EA2o ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="hero-dots" data-v-379cb6cd><!--[-->`);
      ssrRenderList(heroSlides, (_, i) => {
        _push(`<button type="button" class="${ssrRenderClass([{ active: unref(currentSlide) === i }, "hero-dot"])}" data-v-379cb6cd></button>`);
      });
      _push(`<!--]--></div><div class="hero-stats" data-v-379cb6cd><div class="hero-stats-inner" data-v-379cb6cd><!--[-->`);
      ssrRenderList([
        { value: "1.200 ha", label: "Di\u1EC7n t\xEDch r\u1EEBng" },
        { value: "15+", label: "\u0110i\u1EC3m tham quan" },
        { value: "360\xB0", label: "Tour \u1EA3o s\u1ED1ng \u0111\u1ED9ng" },
        { value: "7 ng\xE0y", label: "M\u1EDF c\u1EEDa m\u1ED7i tu\u1EA7n" }
      ], (stat) => {
        _push(`<div class="stat" data-v-379cb6cd><div class="stat-value" data-v-379cb6cd>${ssrInterpolate(stat.value)}</div><div class="stat-label" data-v-379cb6cd>${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section" id="intro" data-v-379cb6cd><div class="container" data-v-379cb6cd><div class="intro-grid" data-v-379cb6cd><div class="intro-images" data-v-379cb6cd><img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&amp;q=80" alt="R\u1EEBng Tr\u1EA3ng Bay" class="intro-img-main" data-v-379cb6cd><img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&amp;q=80" alt="To\xE0n c\u1EA3nh" class="intro-img-float" data-v-379cb6cd><div class="intro-badge" data-v-379cb6cd><strong data-v-379cb6cd>8+ n\u0103m</strong><span data-v-379cb6cd>b\u1EA3o t\u1ED3n thi\xEAn nhi\xEAn</span></div></div><div data-v-379cb6cd><div class="section-eyebrow" data-v-379cb6cd>Gi\u1EDBi thi\u1EC7u</div><h2 class="section-title" data-v-379cb6cd> H\u01A1n 8 n\u0103m g\xECn gi\u1EEF<br data-v-379cb6cd><em style="${ssrRenderStyle({ "font-style": "italic", "color": "var(--tb-bronze)" })}" data-v-379cb6cd>r\u1EEBng nguy\xEAn sinh</em></h2><p class="section-sub" data-v-379cb6cd> Tr\u1EA3ng Bay \u0111\u01B0\u1EE3c th\xE0nh l\u1EADp v\u1EDBi s\u1EE9 m\u1EC7nh b\u1EA3o v\u1EC7 1.200 ha r\u1EEBng nguy\xEAn sinh trong khi t\u1EA1o ra ngu\u1ED3n thu b\u1EC1n v\u1EEFng cho c\u1ED9ng \u0111\u1ED3ng \u0111\u1ECBa ph\u01B0\u01A1ng th\xF4ng qua du l\u1ECBch sinh th\xE1i c\xF3 tr\xE1ch nhi\u1EC7m. </p><div class="intro-features" data-v-379cb6cd><!--[-->`);
      ssrRenderList([
        { title: "Tour 360\xB0 S\u1ED1 H\xF3a", desc: "Kh\xE1m ph\xE1 to\xE0n b\u1ED9 khu r\u1EEBng t\u1EEB m\u1ECDi n\u01A1i qua \u1EA3nh panorama s\u1ED1ng \u0111\u1ED9ng." },
        { title: "B\u1EA3o T\u1ED3n C\xF3 Tr\xE1ch Nhi\u1EC7m", desc: "10% doanh thu t\xE1i \u0111\u1EA7u t\u01B0 v\xE0o b\u1EA3o t\u1ED3n v\xE0 ph\xE1t tri\u1EC3n c\u1ED9ng \u0111\u1ED3ng." },
        { title: "Sinh Th\xE1i Kh\xF4ng R\xE1c Th\u1EA3i", desc: "To\xE0n khu kh\xF4ng d\xF9ng \u0111\u1ED3 nh\u1EF1a d\xF9ng m\u1ED9t l\u1EA7n t\u1EEB n\u0103m 2022." }
      ], (feat) => {
        _push(`<div class="intro-feature" data-v-379cb6cd><div class="feature-icon" data-v-379cb6cd><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-379cb6cd><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" data-v-379cb6cd></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" data-v-379cb6cd></path></svg></div><div data-v-379cb6cd><h4 style="${ssrRenderStyle({ "font-size": "15px", "font-weight": "700", "margin-bottom": "4px", "color": "var(--tb-ink)" })}" data-v-379cb6cd>${ssrInterpolate(feat.title)}</h4><p style="${ssrRenderStyle({ "font-size": "13px", "color": "var(--ink-70)", "line-height": "1.5", "margin": "0" })}" data-v-379cb6cd>${ssrInterpolate(feat.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section><section class="section highlights" id="highlights" data-v-379cb6cd><div class="container" data-v-379cb6cd><div class="section-head" data-v-379cb6cd><div class="section-eyebrow" data-v-379cb6cd>\u0110i\u1EC3m tham quan</div><h2 class="section-title" data-v-379cb6cd>Kh\xE1m ph\xE1 nh\u1EEFng \u0111i\u1EC3m \u0111\u1EBFn<br data-v-379cb6cd>kh\xF4ng th\u1EC3 b\u1ECF qua</h2></div><div class="highlight-grid" data-v-379cb6cd><!--[-->`);
      ssrRenderList(highlights, (h, i) => {
        _push(`<div class="highlight-card" data-v-379cb6cd><img${ssrRenderAttr("src", `https://images.unsplash.com/photo-${["1448375240586-882707db888b", "1501854140801-50d01698950b", "1441974231531-c6227db76b6e", "1506905925346-21bda4d32df4"][i]}?w=600&q=80`)}${ssrRenderAttr("alt", h.title)} data-v-379cb6cd><div class="highlight-body" data-v-379cb6cd><span class="highlight-tag" data-v-379cb6cd>${ssrInterpolate(h.tag)}</span><h3 data-v-379cb6cd>${ssrInterpolate(h.title)}</h3><p data-v-379cb6cd>${ssrInterpolate(h.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section" id="tour" data-v-379cb6cd><div class="container" data-v-379cb6cd><div class="tour-module" data-v-379cb6cd><div class="tour-info" data-v-379cb6cd><div class="section-eyebrow" data-v-379cb6cd>Tr\u1EA3i nghi\u1EC7m s\u1ED1</div><h2 data-v-379cb6cd>Tour 360\xB0<br data-v-379cb6cd>Tham quan \u1EA3o</h2><p data-v-379cb6cd> D\u1EA1o b\u01B0\u1EDBc qua t\u1EEBng g\xF3c khu du l\u1ECBch ngay t\u1EA1i nh\xE0. Ch\u1ECDn \u0111i\u1EC3m \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u h\xE0nh tr\xECnh. </p><div class="tour-scenes" data-v-379cb6cd><!--[-->`);
      ssrRenderList(unref(tours).length ? unref(tours).slice(0, 4) : [{ slug: "", title: "\u0110\u1EC9nh Nh\xECn Ra Thung L\u0169ng" }, { slug: "", title: "R\xECa R\u1EEBng Th\u01B0a" }, { slug: "", title: "H\u1ED3 Tr\u1EA3ng Bay" }, { slug: "", title: "Tr\u1EA3ng C\u1ECF M\xEAnh M\xF4ng" }], (tour, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: i,
          to: tour.slug ? `/experience/${tour.slug}` : "#",
          class: "tour-scene"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="tour-scene-num" data-v-379cb6cd${_scopeId}>${ssrInterpolate(i + 1)}</span> ${ssrInterpolate(tour.title)}`);
            } else {
              return [
                createVNode("span", { class: "tour-scene-num" }, toDisplayString(i + 1), 1),
                createTextVNode(" " + toDisplayString(tour.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (unref(featuredTour)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/experience/${unref(featuredTour).slug}`,
          style: { "align-self": "flex-start" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button type="button" class="btn btn-primary" data-v-379cb6cd${_scopeId}> M\u1EDF to\xE0n m\xE0n h\xECnh <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-379cb6cd${_scopeId}><path d="M15 3h6v6" data-v-379cb6cd${_scopeId}></path><path d="M9 21H3v-6" data-v-379cb6cd${_scopeId}></path><path d="M21 3l-7 7" data-v-379cb6cd${_scopeId}></path><path d="M3 21l7-7" data-v-379cb6cd${_scopeId}></path></svg></button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  class: "btn btn-primary"
                }, [
                  createTextVNode(" M\u1EDF to\xE0n m\xE0n h\xECnh "),
                  (openBlock(), createBlock("svg", {
                    width: "15",
                    height: "15",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, [
                    createVNode("path", { d: "M15 3h6v6" }),
                    createVNode("path", { d: "M9 21H3v-6" }),
                    createVNode("path", { d: "M21 3l-7 7" }),
                    createVNode("path", { d: "M3 21l7-7" })
                  ]))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="tour-viewer" data-v-379cb6cd><div class="tour-viewer-img" style="${ssrRenderStyle({ backgroundImage: ((_a = unref(featuredTour)) == null ? void 0 : _a.thumbnail) ? `url('${unref(featuredTour).thumbnail}')` : `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80')` })}" data-v-379cb6cd></div><div class="tour-viewer-overlay" data-v-379cb6cd></div><div class="tour-badge" data-v-379cb6cd>\u25CF Panorama 360\xB0</div><!--[-->`);
      ssrRenderList([{ top: "35%", left: "28%" }, { top: "55%", left: "72%" }, { top: "68%", left: "45%" }], (pos) => {
        _push(`<div style="${ssrRenderStyle([{ "position": "absolute", "width": "20px", "height": "20px", "border-radius": "50%", "background": "var(--tb-bronze)", "box-shadow": "0 0 0 6px rgba(160,120,40,.25), 0 0 20px rgba(160,120,40,.5)", "cursor": "pointer" }, { top: pos.top, left: pos.left }])}" data-v-379cb6cd></div>`);
      });
      _push(`<!--]--><div style="${ssrRenderStyle({ "position": "absolute", "inset": "0", "display": "flex", "align-items": "center", "justify-content": "center" })}" data-v-379cb6cd><div style="${ssrRenderStyle({ "width": "64px", "height": "64px", "display": "grid", "place-items": "center", "border-radius": "50%", "background": "rgba(255,255,255,.18)", "backdrop-filter": "blur(8px)", "border": "2px solid rgba(255,255,255,.4)", "transition": "all .2s" })}" data-v-379cb6cd><svg width="22" height="22" viewBox="0 0 24 24" fill="white" data-v-379cb6cd><polygon points="5 3 19 12 5 21 5 3" data-v-379cb6cd></polygon></svg></div></div><div style="${ssrRenderStyle({ "position": "absolute", "bottom": "24px", "left": "24px", "right": "24px" })}" data-v-379cb6cd><h4 style="${ssrRenderStyle({ "font-family": "var(--font-serif)", "font-size": "22px", "font-weight": "600", "color": "#fff", "margin": "0 0 4px" })}" data-v-379cb6cd>${ssrInterpolate((_c = (_b = unref(featuredTour)) == null ? void 0 : _b.title) != null ? _c : "Tour 360\xB0 Tr\u1EA3ng Bay")}</h4><p style="${ssrRenderStyle({ "font-size": "13px", "color": "rgba(255,255,255,.7)", "margin": "0" })}" data-v-379cb6cd>${ssrInterpolate((_e = (_d = unref(featuredTour)) == null ? void 0 : _d.location) != null ? _e : "R\u1EEBng N\xFAi Tr\u1EA3ng Bay")}</p></div></div></div></div></section><section class="section" id="events" style="${ssrRenderStyle({ "background": "#fff" })}" data-v-379cb6cd><div class="container" data-v-379cb6cd><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between", "align-items": "flex-end", "margin-bottom": "48px", "flex-wrap": "wrap", "gap": "16px" })}" data-v-379cb6cd><div data-v-379cb6cd><div class="section-eyebrow" data-v-379cb6cd>S\u1EF1 ki\u1EC7n &amp; L\u1EC5 h\u1ED9i</div><h2 class="section-title" data-v-379cb6cd>L\u1ECBch s\u1EF1 ki\u1EC7n s\u1EAFp di\u1EC5n ra</h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/events",
        class: "btn btn-ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Xem t\u1EA5t c\u1EA3 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-379cb6cd${_scopeId}><path d="M5 12h14" data-v-379cb6cd${_scopeId}></path><path d="m12 5 7 7-7 7" data-v-379cb6cd${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Xem t\u1EA5t c\u1EA3 "),
              (openBlock(), createBlock("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("path", { d: "M5 12h14" }),
                createVNode("path", { d: "m12 5 7 7-7 7" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="events-grid" data-v-379cb6cd><!--[-->`);
      ssrRenderList(events, (event) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: event.title,
          to: "/events",
          class: "event-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="event-img" data-v-379cb6cd${_scopeId}><img${ssrRenderAttr("src", `https://images.unsplash.com/photo-${["1501854140801-50d01698950b", "1448375240586-882707db888b", "1441974231531-c6227db76b6e"][events.indexOf(event)]}?w=600&q=80`)}${ssrRenderAttr("alt", event.title)} data-v-379cb6cd${_scopeId}><div class="event-date" data-v-379cb6cd${_scopeId}><strong data-v-379cb6cd${_scopeId}>${ssrInterpolate(event.day)}</strong><span data-v-379cb6cd${_scopeId}>${ssrInterpolate(event.month)}</span></div></div><div class="event-body" data-v-379cb6cd${_scopeId}><div class="event-cat" data-v-379cb6cd${_scopeId}>${ssrInterpolate(event.cat)}</div><h3 data-v-379cb6cd${_scopeId}>${ssrInterpolate(event.title)}</h3><p data-v-379cb6cd${_scopeId}>${ssrInterpolate(event.desc)}</p><div class="event-meta" data-v-379cb6cd${_scopeId}><span data-v-379cb6cd${_scopeId}>\u{1F550} ${ssrInterpolate(event.time)}</span><span data-v-379cb6cd${_scopeId}>\u{1F4CD} ${ssrInterpolate(event.place)}</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "event-img" }, [
                  createVNode("img", {
                    src: `https://images.unsplash.com/photo-${["1501854140801-50d01698950b", "1448375240586-882707db888b", "1441974231531-c6227db76b6e"][events.indexOf(event)]}?w=600&q=80`,
                    alt: event.title
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "event-date" }, [
                    createVNode("strong", null, toDisplayString(event.day), 1),
                    createVNode("span", null, toDisplayString(event.month), 1)
                  ])
                ]),
                createVNode("div", { class: "event-body" }, [
                  createVNode("div", { class: "event-cat" }, toDisplayString(event.cat), 1),
                  createVNode("h3", null, toDisplayString(event.title), 1),
                  createVNode("p", null, toDisplayString(event.desc), 1),
                  createVNode("div", { class: "event-meta" }, [
                    createVNode("span", null, "\u{1F550} " + toDisplayString(event.time), 1),
                    createVNode("span", null, "\u{1F4CD} " + toDisplayString(event.place), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="section tickets" id="tickets" data-v-379cb6cd><div class="container" data-v-379cb6cd><div class="section-head center" data-v-379cb6cd><div class="section-eyebrow" data-v-379cb6cd>B\xE1n v\xE9 tr\u1EF1c tuy\u1EBFn</div><h2 class="section-title" data-v-379cb6cd>Ch\u1ECDn g\xF3i ph\xF9 h\u1EE3p v\u1EDBi b\u1EA1n</h2><p class="section-sub" data-v-379cb6cd>\u0110\u1EB7t v\xE9 online, nh\u1EADn m\xE3 QR qua email, kh\xF4ng c\u1EA7n x\u1EBFp h\xE0ng t\u1EA1i qu\u1EA7y.</p></div><div class="tickets-grid" data-v-379cb6cd><!--[-->`);
      ssrRenderList(tickets, (t) => {
        _push(`<div class="${ssrRenderClass([{ featured: t.featured }, "ticket"])}" data-v-379cb6cd><div class="ticket-name" data-v-379cb6cd>${ssrInterpolate(t.name)}</div><div class="ticket-desc" data-v-379cb6cd>${ssrInterpolate(t.desc)}</div><div class="ticket-price" data-v-379cb6cd>${ssrInterpolate(t.price)}<span data-v-379cb6cd>${ssrInterpolate(t.unit)}</span></div><ul class="ticket-features" data-v-379cb6cd><!--[-->`);
        ssrRenderList(t.features, (f) => {
          _push(`<li data-v-379cb6cd><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-379cb6cd><path d="M20 6 9 17l-5-5" data-v-379cb6cd></path></svg> ${ssrInterpolate(f)}</li>`);
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/tickets",
          style: { "display": "block" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button type="button" class="${ssrRenderClass([t.featured ? "btn-primary" : "btn-outline", "btn"])}" style="${ssrRenderStyle({ "width": "100%", "justify-content": "center" })}" data-v-379cb6cd${_scopeId}>${ssrInterpolate(t.featured ? "\u0110\u1EB7t ngay" : "Ch\u1ECDn g\xF3i n\xE0y")}</button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  class: ["btn", t.featured ? "btn-primary" : "btn-outline"],
                  style: { "width": "100%", "justify-content": "center" }
                }, toDisplayString(t.featured ? "\u0110\u1EB7t ngay" : "Ch\u1ECDn g\xF3i n\xE0y"), 3)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section class="partners" data-v-379cb6cd><div class="container" data-v-379cb6cd><div class="partners-label" data-v-379cb6cd>\u0110\u01A1n v\u1ECB \u0111\u1ED3ng h\xE0nh &amp; Ch\u1EE9ng nh\u1EADn</div><div class="partners-logos" data-v-379cb6cd><!--[-->`);
      ssrRenderList(partners, (p) => {
        _push(`<span class="partner-logo" data-v-379cb6cd>${ssrInterpolate(p)}</span>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-379cb6cd"]]);

export { index as default };;globalThis.__timing__.logEnd('Load chunks/build/index-BaUuIVlm');
//# sourceMappingURL=index-BaUuIVlm.mjs.map
