globalThis.__timing__.logStart('Load chunks/build/index-_DOozQhn');import { _ as __nuxt_component_0 } from './nuxt-link-AvfA4aCh.mjs';
import { defineComponent, withAsyncContext, computed, ref, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead } from './v3-vl98-hf4.mjs';
import { u as useFetch } from './fetch-BTut8LNP.mjs';
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
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import '@vue/shared';
import 'perfect-debounce';
import 'pinia';
import 'vue-router';

const _imports_0 = publicAssetsURL("/images/song-van/aerial-view.jpg");
const _imports_1 = publicAssetsURL("/images/song-van/exhibition-visitors.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "S\xF4ng V\xE2n Art Space \u2014 \u0110i\xEAu kh\u1EAFc \u0111\xE1 \u0111\u01B0\u01A1ng \u0111\u1EA1i",
      meta: [{ name: "description", content: "Kh\xF4ng gian ngh\u1EC7 thu\u1EADt S\xF4ng V\xE2n t\u1EA1i Ninh B\xECnh \u2014 \u0111i\xEAu kh\u1EAFc \u0111\xE1 \u0111\u01B0\u01A1ng \u0111\u1EA1i, l\xE0ng ngh\u1EC1 Ninh V\xE2n v\xE0 tour tham quan 360\xB0." }]
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
      { bg: "/images/song-van/sculpture-garden.jpg", label: "S\xF4ng V\xE2n Art Space b\xEAn d\xF2ng s\xF4ng V\xE2n" },
      { bg: "/images/song-van/waterside-sculpture.jpg", label: "\u0110i\xEAu kh\u1EAFc \u0111\xE1 trong c\u1EA3nh quan" },
      { bg: "/images/song-van/gallery-interior.jpg", label: "Ph\xF2ng tr\u01B0ng b\xE0y S\xF4ng V\xE2n" }
    ];
    const currentSlide = ref(0);
    const highlights = [
      { tag: "\u0110i\xEAu kh\u1EAFc", title: "\u0110\u1ED1i tho\u1EA1i c\xF9ng \u0111\xE1", desc: "Ng\xF4n ng\u1EEF \u0111i\xEAu kh\u1EAFc \u0111\u01B0\u01A1ng \u0111\u1EA1i \u0111\u01B0\u1EE3c h\xECnh th\xE0nh t\u1EEB c\u1EA9m th\u1EA1ch, \u0111\xE1 \u0111en v\xE0 granite." },
      { tag: "Kh\xF4ng gian", title: "Ngh\u1EC7 thu\u1EADt b\xEAn s\xF4ng", desc: "T\xE1c ph\u1EA9m hi\u1EC7n di\u1EC7n gi\u1EEFa \xE1nh s\xE1ng, c\xE2y xanh v\xE0 c\u1EA3nh quan ven s\xF4ng V\xE2n." },
      { tag: "L\xE0ng ngh\u1EC1", title: "M\u1EA1ch ngu\u1ED3n Ninh V\xE2n", desc: "M\u1ED9t \u0111i\u1EC3m g\u1EB7p gi\u1EEFa k\u1EF9 ngh\u1EC7 \u0111\xE1 truy\u1EC1n th\u1ED1ng v\xE0 t\u01B0 duy t\u1EA1o h\xECnh \u0111\u01B0\u01A1ng \u0111\u1EA1i." },
      { tag: "Tr\u1EA3i nghi\u1EC7m", title: "Tour ngh\u1EC7 thu\u1EADt 360\xB0", desc: "D\u1EA1o qua s\xE2n t\u01B0\u1EE3ng, x\u01B0\u1EDFng s\xE1ng t\xE1c v\xE0 kh\xF4ng gian tr\u01B0ng b\xE0y t\u1EEB b\u1EA5t c\u1EE9 \u0111\xE2u." }
    ];
    const events = [
      { day: "22", month: "Th\xE1ng 3", cat: "Tri\u1EC3n l\xE3m", title: "Khai m\u1EA1c tri\u1EC3n l\xE3m \u201CS\xF4ng V\xE2n\u201D", desc: "Cu\u1ED9c g\u1EB7p g\u1EE1 \u0111i\xEAu kh\u1EAFc \u0111\xE1 \u0111\u01B0\u01A1ng \u0111\u1EA1i c\u1EE7a L\xEA Th\u1ECB Hi\u1EC1n v\xE0 L\u01B0\u01A1ng Tr\u1ECBnh.", time: "2026", place: "S\xF4ng V\xE2n Art Space" },
      { day: "22", month: "Th\xE1ng 8", cat: "Tri\u1EC3n l\xE3m", title: "H\xE0nh tr\xECnh tri\u1EC3n l\xE3m \u201CS\xF4ng V\xE2n\u201D", desc: "H\u01A1n 30 t\xE1c ph\u1EA9m k\u1EBFt n\u1ED1i h\xECnh kh\u1ED1i hi\u1EC7n \u0111\u1EA1i v\u1EDBi ch\u1EA5t li\u1EC7u \u0111\xE1 Ninh B\xECnh.", time: "2026", place: "Nam Hoa L\u01B0" }
    ];
    const tickets = [
      { name: "Kh\xE1ch C\xE1 Nh\xE2n", desc: "D\xE0nh cho ng\u01B0\u1EDDi y\xEAu ngh\u1EC7 thu\u1EADt", price: "\u0110\u0103ng k\xFD", unit: "tr\u01B0\u1EDBc khi \u0111\u1EBFn", features: ["Tham quan kh\xF4ng gian tr\u01B0ng b\xE0y", "Kh\xE1m ph\xE1 tour 360\xB0", "X\xE1c nh\u1EADn l\u1ECBch tr\u01B0\u1EDBc khi \u0111\u1EBFn"], featured: false },
      { name: "Nh\xF3m H\u1ECDc T\u1EADp", desc: "D\xE0nh cho h\u1ECDc sinh, sinh vi\xEAn v\xE0 nh\xE0 nghi\xEAn c\u1EE9u", price: "Li\xEAn h\u1EC7", unit: "theo ch\u01B0\u01A1ng tr\xECnh", features: ["T\xECm hi\u1EC3u \u0111i\xEAu kh\u1EAFc \u0111\xE1", "Kh\xE1m ph\xE1 m\u1ED1i li\xEAn h\u1EC7 v\u1EDBi l\xE0ng ngh\u1EC1", "Trao \u0111\u1ED5i nhu c\u1EA7u \u0111\xF3n nh\xF3m"], featured: true },
      { name: "\u0110o\xE0n \xB7 \u0110\u1ED1i T\xE1c", desc: "D\xE0nh cho t\u1ED5 ch\u1EE9c v\xE0 nh\xF3m ngh\u1EC7 thu\u1EADt", price: "Li\xEAn h\u1EC7", unit: "\u0111\u1EC3 x\xE1c nh\u1EADn", features: ["\u0110\u1EC1 xu\u1EA5t l\u1ECBch ri\xEAng", "Trao \u0111\u1ED5i ch\u01B0\u01A1ng tr\xECnh ph\xF9 h\u1EE3p", "K\u1EBFt n\u1ED1i h\u1EE3p t\xE1c ngh\u1EC7 thu\u1EADt"], featured: false }
    ];
    const contexts = ["\u0110i\xEAu kh\u1EAFc \u0111\u01B0\u01A1ng \u0111\u1EA1i", "\u0110\xE1 Ninh V\xE2n", "Ninh B\xECnh", "Sculpture Garden", "Ngh\u1EC7 thu\u1EADt & c\u1EA3nh quan"];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a10c6f61><section class="hero" data-v-a10c6f61><div class="hero-slides" data-v-a10c6f61><!--[-->`);
      ssrRenderList(heroSlides, (slide, i) => {
        _push(`<div class="${ssrRenderClass([{ active: unref(currentSlide) === i }, "hero-slide"])}" style="${ssrRenderStyle({ backgroundImage: `url('${slide.bg}')` })}" data-v-a10c6f61></div>`);
      });
      _push(`<!--]--></div><div class="container hero-content" data-v-a10c6f61><div class="hero-eyebrow" data-v-a10c6f61><span class="dot" data-v-a10c6f61></span> Kh\xF4ng gian ngh\u1EC7 thu\u1EADt \xB7 Ninh B\xECnh </div><h1 class="hero-title" data-v-a10c6f61> D\xF2ng ch\u1EA3y c\u1EE7a h\xECnh kh\u1ED1i<br data-v-a10c6f61><em data-v-a10c6f61>S\xF4ng V\xE2n</em></h1><p class="hero-desc" data-v-a10c6f61> N\u01A1i \u0111\xE1, n\u01B0\u1EDBc v\xE0 k\xFD \u1EE9c l\xE0ng ngh\u1EC1 g\u1EB7p nhau trong m\u1ED9t kh\xF4ng gian \u0111i\xEAu kh\u1EAFc \u0111\u01B0\u01A1ng \u0111\u1EA1i m\u1EDF. </p><div class="hero-ctas" data-v-a10c6f61>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tickets",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a10c6f61${_scopeId}><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" data-v-a10c6f61${_scopeId}></path></svg> \u0110\u0103ng k\xFD tham quan `);
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
              createTextVNode(" \u0110\u0103ng k\xFD tham quan ")
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
              _push2(`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${ssrRenderStyle({ "display": "inline-block", "vertical-align": "-2px", "margin-right": "6px" })}" data-v-a10c6f61${_scopeId}><circle cx="12" cy="12" r="10" data-v-a10c6f61${_scopeId}></circle><polygon points="10 8 16 12 10 16 10 8" data-v-a10c6f61${_scopeId}></polygon></svg> Tour 360\xB0 \u1EA2o `);
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
      _push(`</div></div><div class="hero-dots" data-v-a10c6f61><!--[-->`);
      ssrRenderList(heroSlides, (_, i) => {
        _push(`<button type="button" class="${ssrRenderClass([{ active: unref(currentSlide) === i }, "hero-dot"])}" data-v-a10c6f61></button>`);
      });
      _push(`<!--]--></div><div class="hero-stats" data-v-a10c6f61><div class="hero-stats-inner" data-v-a10c6f61><!--[-->`);
      ssrRenderList([
        { value: "02", label: "Ph\xF2ng tr\u01B0ng b\xE0y" },
        { value: "01", label: "V\u01B0\u1EDDn \u0111i\xEAu kh\u1EAFc" },
        { value: "360\xB0", label: "Tour \u1EA3o s\u1ED1ng \u0111\u1ED9ng" },
        { value: "2018", label: "Kh\u1EDFi ngu\u1ED3n kh\xF4ng gian" }
      ], (stat) => {
        _push(`<div class="stat" data-v-a10c6f61><div class="stat-value" data-v-a10c6f61>${ssrInterpolate(stat.value)}</div><div class="stat-label" data-v-a10c6f61>${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section" id="intro" data-v-a10c6f61><div class="container" data-v-a10c6f61><div class="intro-grid" data-v-a10c6f61><div class="intro-images" data-v-a10c6f61><img${ssrRenderAttr("src", _imports_0)} alt="To\xE0n c\u1EA3nh S\xF4ng V\xE2n Art Space b\xEAn d\xF2ng s\xF4ng V\xE2n" class="intro-img-main" data-v-a10c6f61><img${ssrRenderAttr("src", _imports_1)} alt="Kh\xE1ch tham quan tri\u1EC3n l\xE3m S\xF4ng V\xE2n" class="intro-img-float" data-v-a10c6f61><div class="intro-badge" data-v-a10c6f61><strong data-v-a10c6f61>T\u1EEB 2018</strong><span data-v-a10c6f61>m\u1ED9t kh\xF4ng gian cho \u0111\xE1</span></div></div><div data-v-a10c6f61><div class="section-eyebrow" data-v-a10c6f61>Gi\u1EDBi thi\u1EC7u</div><h2 class="section-title" data-v-a10c6f61> T\u1EEB l\xE0ng ngh\u1EC1 truy\u1EC1n th\u1ED1ng<br data-v-a10c6f61><em style="${ssrRenderStyle({ "font-style": "italic", "color": "var(--tb-bronze)" })}" data-v-a10c6f61>\u0111\u1EBFn ngh\u1EC7 thu\u1EADt \u0111\u01B0\u01A1ng \u0111\u1EA1i</em></h2><p class="section-sub" data-v-a10c6f61> Ph\xE1t tri\u1EC3n t\u1EEB L\u01B0\u01A1ng Gia Art Space, S\xF4ng V\xE2n Art Space m\u1EDF ra m\u1ED9t \u0111i\u1EC3m \u0111\u1EBFn s\xE1ng t\u1EA1o gi\u1EEFa l\xE0ng \u0111\xE1 Ninh V\xE2n, k\u1EBFt n\u1ED1i ngh\u1EC7 s\u0129, ng\u01B0\u1EDDi th\u1EE3 v\xE0 c\xF4ng ch\xFAng. </p><div class="intro-features" data-v-a10c6f61><!--[-->`);
      ssrRenderList([
        { title: "Tour 360\xB0 S\u1ED1 H\xF3a", desc: "Kh\xE1m ph\xE1 s\xE2n t\u01B0\u1EE3ng, x\u01B0\u1EDFng \u0111\xE1 v\xE0 kh\xF4ng gian tr\u01B0ng b\xE0y qua panorama." },
        { title: "\u0110i\xEAu Kh\u1EAFc \u0110\u01B0\u01A1ng \u0110\u1EA1i", desc: "H\xECnh kh\u1ED1i t\u1ED1i gi\u1EA3n \u0111\u1ED1i tho\u1EA1i v\u1EDBi \u0111\u1EB7c t\xEDnh t\u1EF1 nhi\xEAn c\u1EE7a \u0111\xE1." },
        { title: "K\u1EBFt N\u1ED1i L\xE0ng Ngh\u1EC1", desc: "\u0110\u01B0a truy\u1EC1n th\u1ED1ng ch\u1EBF t\xE1c \u0111\xE1 Ninh V\xE2n \u0111\u1EBFn g\u1EA7n h\u01A1n v\u1EDBi c\xF4ng ch\xFAng h\xF4m nay." }
      ], (feat) => {
        _push(`<div class="intro-feature" data-v-a10c6f61><div class="feature-icon" data-v-a10c6f61><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a10c6f61><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" data-v-a10c6f61></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" data-v-a10c6f61></path></svg></div><div data-v-a10c6f61><h4 style="${ssrRenderStyle({ "font-size": "15px", "font-weight": "700", "margin-bottom": "4px", "color": "var(--tb-ink)" })}" data-v-a10c6f61>${ssrInterpolate(feat.title)}</h4><p style="${ssrRenderStyle({ "font-size": "13px", "color": "var(--ink-70)", "line-height": "1.5", "margin": "0" })}" data-v-a10c6f61>${ssrInterpolate(feat.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section><section class="section highlights" id="highlights" data-v-a10c6f61><div class="container" data-v-a10c6f61><div class="section-head" data-v-a10c6f61><div class="section-eyebrow" data-v-a10c6f61>\u0110i\u1EC3m ch\u1EA1m ngh\u1EC7 thu\u1EADt</div><h2 class="section-title" data-v-a10c6f61>Kh\xE1m ph\xE1 nh\u1EEFng l\u1EDBp kh\xF4ng gian<br data-v-a10c6f61>c\u1EE7a S\xF4ng V\xE2n</h2></div><div class="highlight-grid" data-v-a10c6f61><!--[-->`);
      ssrRenderList(highlights, (h, i) => {
        _push(`<div class="highlight-card" data-v-a10c6f61><img${ssrRenderAttr("src", ["/images/song-van/bong-nui.jpg", "/images/song-van/waterside-sculpture.jpg", "/images/song-van/luong-trinh.jpg", "/images/song-van/gallery-interior.jpg"][i])}${ssrRenderAttr("alt", h.title)} data-v-a10c6f61><div class="highlight-body" data-v-a10c6f61><span class="highlight-tag" data-v-a10c6f61>${ssrInterpolate(h.tag)}</span><h3 data-v-a10c6f61>${ssrInterpolate(h.title)}</h3><p data-v-a10c6f61>${ssrInterpolate(h.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section" id="tour" data-v-a10c6f61><div class="container" data-v-a10c6f61><div class="tour-module" data-v-a10c6f61><div class="tour-info" data-v-a10c6f61><div class="section-eyebrow" data-v-a10c6f61>Tr\u1EA3i nghi\u1EC7m s\u1ED1</div><h2 data-v-a10c6f61>Tour 360\xB0<br data-v-a10c6f61>Tham quan \u1EA3o</h2><p data-v-a10c6f61> D\u1EA1o qua t\u1EEBng l\u1EDBp kh\xF4ng gian ngh\u1EC7 thu\u1EADt ngay t\u1EA1i nh\xE0. Ch\u1ECDn m\u1ED9t \u0111i\u1EC3m \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u h\xE0nh tr\xECnh. </p><div class="tour-scenes" data-v-a10c6f61><!--[-->`);
      ssrRenderList(unref(tours).length ? unref(tours).slice(0, 4) : [{ slug: "", title: "S\xE2n \u0110i\xEAu Kh\u1EAFc B\xEAn S\xF4ng" }, { slug: "", title: "V\u01B0\u1EDDn T\u01B0\u1EE3ng" }, { slug: "", title: "X\u01B0\u1EDFng \u0110\xE1" }, { slug: "", title: "Kho\u1EA3ng Tr\u01B0ng B\xE0y M\u1EDF" }], (tour, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: i,
          to: tour.slug ? `/experience/${tour.slug}` : "#",
          class: "tour-scene"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="tour-scene-num" data-v-a10c6f61${_scopeId}>${ssrInterpolate(i + 1)}</span> ${ssrInterpolate(tour.title)}`);
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
              _push2(`<button type="button" class="btn btn-primary" data-v-a10c6f61${_scopeId}> M\u1EDF to\xE0n m\xE0n h\xECnh <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a10c6f61${_scopeId}><path d="M15 3h6v6" data-v-a10c6f61${_scopeId}></path><path d="M9 21H3v-6" data-v-a10c6f61${_scopeId}></path><path d="M21 3l-7 7" data-v-a10c6f61${_scopeId}></path><path d="M3 21l7-7" data-v-a10c6f61${_scopeId}></path></svg></button>`);
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
      _push(`</div><div class="tour-viewer" data-v-a10c6f61><div class="tour-viewer-img" style="${ssrRenderStyle({ backgroundImage: `url('/images/song-van/aerial-view.jpg')` })}" data-v-a10c6f61></div><div class="tour-viewer-overlay" data-v-a10c6f61></div><div class="tour-badge" data-v-a10c6f61>\u25CF Panorama 360\xB0</div><!--[-->`);
      ssrRenderList([{ top: "35%", left: "28%" }, { top: "55%", left: "72%" }, { top: "68%", left: "45%" }], (pos) => {
        _push(`<div style="${ssrRenderStyle([{ "position": "absolute", "width": "20px", "height": "20px", "border-radius": "50%", "background": "var(--tb-bronze)", "box-shadow": "0 0 0 6px rgba(160,120,40,.25), 0 0 20px rgba(160,120,40,.5)", "cursor": "pointer" }, { top: pos.top, left: pos.left }])}" data-v-a10c6f61></div>`);
      });
      _push(`<!--]--><div style="${ssrRenderStyle({ "position": "absolute", "inset": "0", "display": "flex", "align-items": "center", "justify-content": "center" })}" data-v-a10c6f61><div style="${ssrRenderStyle({ "width": "64px", "height": "64px", "display": "grid", "place-items": "center", "border-radius": "50%", "background": "rgba(255,255,255,.18)", "backdrop-filter": "blur(8px)", "border": "2px solid rgba(255,255,255,.4)", "transition": "all .2s" })}" data-v-a10c6f61><svg width="22" height="22" viewBox="0 0 24 24" fill="white" data-v-a10c6f61><polygon points="5 3 19 12 5 21 5 3" data-v-a10c6f61></polygon></svg></div></div><div style="${ssrRenderStyle({ "position": "absolute", "bottom": "24px", "left": "24px", "right": "24px" })}" data-v-a10c6f61><h4 style="${ssrRenderStyle({ "font-family": "var(--font-serif)", "font-size": "22px", "font-weight": "600", "color": "#fff", "margin": "0 0 4px" })}" data-v-a10c6f61>${ssrInterpolate((_b = (_a = unref(featuredTour)) == null ? void 0 : _a.title) != null ? _b : "Tour 360\xB0 S\xF4ng V\xE2n")}</h4><p style="${ssrRenderStyle({ "font-size": "13px", "color": "rgba(255,255,255,.7)", "margin": "0" })}" data-v-a10c6f61>${ssrInterpolate((_d = (_c = unref(featuredTour)) == null ? void 0 : _c.location) != null ? _d : "Nam Hoa L\u01B0, Ninh B\xECnh")}</p></div></div></div></div></section><section class="section" id="events" style="${ssrRenderStyle({ "background": "#fff" })}" data-v-a10c6f61><div class="container" data-v-a10c6f61><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between", "align-items": "flex-end", "margin-bottom": "48px", "flex-wrap": "wrap", "gap": "16px" })}" data-v-a10c6f61><div data-v-a10c6f61><div class="section-eyebrow" data-v-a10c6f61>Tri\u1EC3n l\xE3m</div><h2 class="section-title" data-v-a10c6f61>Nh\u1EEFng d\u1EA5u m\u1ED1c t\u1EA1i S\xF4ng V\xE2n</h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/events",
        class: "btn btn-ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Xem t\u1EA5t c\u1EA3 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a10c6f61${_scopeId}><path d="M5 12h14" data-v-a10c6f61${_scopeId}></path><path d="m12 5 7 7-7 7" data-v-a10c6f61${_scopeId}></path></svg>`);
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
      _push(`</div><div class="events-grid" data-v-a10c6f61><!--[-->`);
      ssrRenderList(events, (event) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: event.title,
          to: "/events",
          class: "event-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="event-img" data-v-a10c6f61${_scopeId}><img${ssrRenderAttr("src", ["/images/song-van/exhibition-visitors.jpg", "/images/song-van/sculpture-garden.jpg"][events.indexOf(event)])}${ssrRenderAttr("alt", event.title)} data-v-a10c6f61${_scopeId}><div class="event-date" data-v-a10c6f61${_scopeId}><strong data-v-a10c6f61${_scopeId}>${ssrInterpolate(event.day)}</strong><span data-v-a10c6f61${_scopeId}>${ssrInterpolate(event.month)}</span></div></div><div class="event-body" data-v-a10c6f61${_scopeId}><div class="event-cat" data-v-a10c6f61${_scopeId}>${ssrInterpolate(event.cat)}</div><h3 data-v-a10c6f61${_scopeId}>${ssrInterpolate(event.title)}</h3><p data-v-a10c6f61${_scopeId}>${ssrInterpolate(event.desc)}</p><div class="event-meta" data-v-a10c6f61${_scopeId}><span data-v-a10c6f61${_scopeId}>\u{1F550} ${ssrInterpolate(event.time)}</span><span data-v-a10c6f61${_scopeId}>\u{1F4CD} ${ssrInterpolate(event.place)}</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "event-img" }, [
                  createVNode("img", {
                    src: ["/images/song-van/exhibition-visitors.jpg", "/images/song-van/sculpture-garden.jpg"][events.indexOf(event)],
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
      _push(`<!--]--></div></div></section><section class="section tickets" id="tickets" data-v-a10c6f61><div class="container" data-v-a10c6f61><div class="section-head center" data-v-a10c6f61><div class="section-eyebrow" data-v-a10c6f61>L\xEAn k\u1EBF ho\u1EA1ch tham quan</div><h2 class="section-title" data-v-a10c6f61>Ch\u1ECDn g\xF3i ph\xF9 h\u1EE3p v\u1EDBi b\u1EA1n</h2><p class="section-sub" data-v-a10c6f61>G\u1EEDi y\xEAu c\u1EA7u tr\u01B0\u1EDBc chuy\u1EBFn \u0111i \u0111\u1EC3 kh\xF4ng gian x\xE1c nh\u1EADn l\u1ECBch tham quan ph\xF9 h\u1EE3p.</p></div><div class="tickets-grid" data-v-a10c6f61><!--[-->`);
      ssrRenderList(tickets, (t) => {
        _push(`<div class="${ssrRenderClass([{ featured: t.featured }, "ticket"])}" data-v-a10c6f61><div class="ticket-name" data-v-a10c6f61>${ssrInterpolate(t.name)}</div><div class="ticket-desc" data-v-a10c6f61>${ssrInterpolate(t.desc)}</div><div class="ticket-price" data-v-a10c6f61>${ssrInterpolate(t.price)}<span data-v-a10c6f61>${ssrInterpolate(t.unit)}</span></div><ul class="ticket-features" data-v-a10c6f61><!--[-->`);
        ssrRenderList(t.features, (f) => {
          _push(`<li data-v-a10c6f61><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-a10c6f61><path d="M20 6 9 17l-5-5" data-v-a10c6f61></path></svg> ${ssrInterpolate(f)}</li>`);
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/tickets",
          style: { "display": "block" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button type="button" class="${ssrRenderClass([t.featured ? "btn-primary" : "btn-outline", "btn"])}" style="${ssrRenderStyle({ "width": "100%", "justify-content": "center" })}" data-v-a10c6f61${_scopeId}>${ssrInterpolate(t.featured ? "G\u1EEDi y\xEAu c\u1EA7u" : "Ch\u1ECDn h\xECnh th\u1EE9c")}</button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  class: ["btn", t.featured ? "btn-primary" : "btn-outline"],
                  style: { "width": "100%", "justify-content": "center" }
                }, toDisplayString(t.featured ? "G\u1EEDi y\xEAu c\u1EA7u" : "Ch\u1ECDn h\xECnh th\u1EE9c"), 3)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section class="partners" data-v-a10c6f61><div class="container" data-v-a10c6f61><div class="partners-label" data-v-a10c6f61>S\xF4ng V\xE2n Art Space</div><div class="partners-logos" data-v-a10c6f61><!--[-->`);
      ssrRenderList(contexts, (p) => {
        _push(`<span class="partner-logo" data-v-a10c6f61>${ssrInterpolate(p)}</span>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a10c6f61"]]);

export { index as default };;globalThis.__timing__.logEnd('Load chunks/build/index-_DOozQhn');
//# sourceMappingURL=index-_DOozQhn.mjs.map
