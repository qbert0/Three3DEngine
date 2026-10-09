import { _ as __nuxt_component_0 } from "./nuxt-link-AvfA4aCh.js";
import { defineComponent, withAsyncContext, computed, ref, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-vl98-hf4.js";
import { u as useFetch } from "./fetch-BTut8LNP.js";
import { _ as _export_sfc } from "../server.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ufo/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/defu/dist/defu.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/@unhead/vue/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/perfect-debounce/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ofetch/dist/node.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unctx/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/h3/dist/index.mjs";
import "pinia";
import "vue-router";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/klona/dist/index.mjs";
const _imports_0 = publicAssetsURL("/images/song-van/aerial-view.jpg");
const _imports_1 = publicAssetsURL("/images/song-van/exhibition-visitors.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Sông Vân Art Space — Điêu khắc đá đương đại",
      meta: [{ name: "description", content: "Không gian nghệ thuật Sông Vân tại Ninh Bình — điêu khắc đá đương đại, làng nghề Ninh Vân và tour tham quan 360°." }]
    });
    const { data, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/tours",
      "$1cxjKEGR5E"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const tours = computed(() => data.value?.items ?? []);
    const featuredTour = computed(() => tours.value[0]);
    const heroSlides = [
      { bg: "/images/song-van/sculpture-garden.jpg", label: "Sông Vân Art Space bên dòng sông Vân" },
      { bg: "/images/song-van/waterside-sculpture.jpg", label: "Điêu khắc đá trong cảnh quan" },
      { bg: "/images/song-van/gallery-interior.jpg", label: "Phòng trưng bày Sông Vân" }
    ];
    const currentSlide = ref(0);
    const highlights = [
      { tag: "Điêu khắc", title: "Đối thoại cùng đá", desc: "Ngôn ngữ điêu khắc đương đại được hình thành từ cẩm thạch, đá đen và granite." },
      { tag: "Không gian", title: "Nghệ thuật bên sông", desc: "Tác phẩm hiện diện giữa ánh sáng, cây xanh và cảnh quan ven sông Vân." },
      { tag: "Làng nghề", title: "Mạch nguồn Ninh Vân", desc: "Một điểm gặp giữa kỹ nghệ đá truyền thống và tư duy tạo hình đương đại." },
      { tag: "Trải nghiệm", title: "Tour nghệ thuật 360°", desc: "Dạo qua sân tượng, xưởng sáng tác và không gian trưng bày từ bất cứ đâu." }
    ];
    const events = [
      { day: "22", month: "Tháng 3", cat: "Triển lãm", title: "Khai mạc triển lãm “Sông Vân”", desc: "Cuộc gặp gỡ điêu khắc đá đương đại của Lê Thị Hiền và Lương Trịnh.", time: "2026", place: "Sông Vân Art Space" },
      { day: "22", month: "Tháng 8", cat: "Triển lãm", title: "Hành trình triển lãm “Sông Vân”", desc: "Hơn 30 tác phẩm kết nối hình khối hiện đại với chất liệu đá Ninh Bình.", time: "2026", place: "Nam Hoa Lư" }
    ];
    const tickets = [
      { name: "Khách Cá Nhân", desc: "Dành cho người yêu nghệ thuật", price: "Đăng ký", unit: "trước khi đến", features: ["Tham quan không gian trưng bày", "Khám phá tour 360°", "Xác nhận lịch trước khi đến"], featured: false },
      { name: "Nhóm Học Tập", desc: "Dành cho học sinh, sinh viên và nhà nghiên cứu", price: "Liên hệ", unit: "theo chương trình", features: ["Tìm hiểu điêu khắc đá", "Khám phá mối liên hệ với làng nghề", "Trao đổi nhu cầu đón nhóm"], featured: true },
      { name: "Đoàn · Đối Tác", desc: "Dành cho tổ chức và nhóm nghệ thuật", price: "Liên hệ", unit: "để xác nhận", features: ["Đề xuất lịch riêng", "Trao đổi chương trình phù hợp", "Kết nối hợp tác nghệ thuật"], featured: false }
    ];
    const contexts = ["Điêu khắc đương đại", "Đá Ninh Vân", "Ninh Bình", "Sculpture Garden", "Nghệ thuật & cảnh quan"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a10c6f61><section class="hero" data-v-a10c6f61><div class="hero-slides" data-v-a10c6f61><!--[-->`);
      ssrRenderList(heroSlides, (slide, i) => {
        _push(`<div class="${ssrRenderClass([{ active: unref(currentSlide) === i }, "hero-slide"])}" style="${ssrRenderStyle({ backgroundImage: `url('${slide.bg}')` })}" data-v-a10c6f61></div>`);
      });
      _push(`<!--]--></div><div class="container hero-content" data-v-a10c6f61><div class="hero-eyebrow" data-v-a10c6f61><span class="dot" data-v-a10c6f61></span> Không gian nghệ thuật · Ninh Bình </div><h1 class="hero-title" data-v-a10c6f61> Dòng chảy của hình khối<br data-v-a10c6f61><em data-v-a10c6f61>Sông Vân</em></h1><p class="hero-desc" data-v-a10c6f61> Nơi đá, nước và ký ức làng nghề gặp nhau trong một không gian điêu khắc đương đại mở. </p><div class="hero-ctas" data-v-a10c6f61>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tickets",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a10c6f61${_scopeId}><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" data-v-a10c6f61${_scopeId}></path></svg> Đăng ký tham quan `);
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
              createTextVNode(" Đăng ký tham quan ")
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
              _push2(`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${ssrRenderStyle({ "display": "inline-block", "vertical-align": "-2px", "margin-right": "6px" })}" data-v-a10c6f61${_scopeId}><circle cx="12" cy="12" r="10" data-v-a10c6f61${_scopeId}></circle><polygon points="10 8 16 12 10 16 10 8" data-v-a10c6f61${_scopeId}></polygon></svg> Tour 360° Ảo `);
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
                createTextVNode(" Tour 360° Ảo ")
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
        { value: "02", label: "Phòng trưng bày" },
        { value: "01", label: "Vườn điêu khắc" },
        { value: "360°", label: "Tour ảo sống động" },
        { value: "2018", label: "Khởi nguồn không gian" }
      ], (stat) => {
        _push(`<div class="stat" data-v-a10c6f61><div class="stat-value" data-v-a10c6f61>${ssrInterpolate(stat.value)}</div><div class="stat-label" data-v-a10c6f61>${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section" id="intro" data-v-a10c6f61><div class="container" data-v-a10c6f61><div class="intro-grid" data-v-a10c6f61><div class="intro-images" data-v-a10c6f61><img${ssrRenderAttr("src", _imports_0)} alt="Toàn cảnh Sông Vân Art Space bên dòng sông Vân" class="intro-img-main" data-v-a10c6f61><img${ssrRenderAttr("src", _imports_1)} alt="Khách tham quan triển lãm Sông Vân" class="intro-img-float" data-v-a10c6f61><div class="intro-badge" data-v-a10c6f61><strong data-v-a10c6f61>Từ 2018</strong><span data-v-a10c6f61>một không gian cho đá</span></div></div><div data-v-a10c6f61><div class="section-eyebrow" data-v-a10c6f61>Giới thiệu</div><h2 class="section-title" data-v-a10c6f61> Từ làng nghề truyền thống<br data-v-a10c6f61><em style="${ssrRenderStyle({ "font-style": "italic", "color": "var(--tb-bronze)" })}" data-v-a10c6f61>đến nghệ thuật đương đại</em></h2><p class="section-sub" data-v-a10c6f61> Phát triển từ Lương Gia Art Space, Sông Vân Art Space mở ra một điểm đến sáng tạo giữa làng đá Ninh Vân, kết nối nghệ sĩ, người thợ và công chúng. </p><div class="intro-features" data-v-a10c6f61><!--[-->`);
      ssrRenderList([
        { title: "Tour 360° Số Hóa", desc: "Khám phá sân tượng, xưởng đá và không gian trưng bày qua panorama." },
        { title: "Điêu Khắc Đương Đại", desc: "Hình khối tối giản đối thoại với đặc tính tự nhiên của đá." },
        { title: "Kết Nối Làng Nghề", desc: "Đưa truyền thống chế tác đá Ninh Vân đến gần hơn với công chúng hôm nay." }
      ], (feat) => {
        _push(`<div class="intro-feature" data-v-a10c6f61><div class="feature-icon" data-v-a10c6f61><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a10c6f61><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" data-v-a10c6f61></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" data-v-a10c6f61></path></svg></div><div data-v-a10c6f61><h4 style="${ssrRenderStyle({ "font-size": "15px", "font-weight": "700", "margin-bottom": "4px", "color": "var(--tb-ink)" })}" data-v-a10c6f61>${ssrInterpolate(feat.title)}</h4><p style="${ssrRenderStyle({ "font-size": "13px", "color": "var(--ink-70)", "line-height": "1.5", "margin": "0" })}" data-v-a10c6f61>${ssrInterpolate(feat.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section><section class="section highlights" id="highlights" data-v-a10c6f61><div class="container" data-v-a10c6f61><div class="section-head" data-v-a10c6f61><div class="section-eyebrow" data-v-a10c6f61>Điểm chạm nghệ thuật</div><h2 class="section-title" data-v-a10c6f61>Khám phá những lớp không gian<br data-v-a10c6f61>của Sông Vân</h2></div><div class="highlight-grid" data-v-a10c6f61><!--[-->`);
      ssrRenderList(highlights, (h, i) => {
        _push(`<div class="highlight-card" data-v-a10c6f61><img${ssrRenderAttr("src", ["/images/song-van/bong-nui.jpg", "/images/song-van/waterside-sculpture.jpg", "/images/song-van/luong-trinh.jpg", "/images/song-van/gallery-interior.jpg"][i])}${ssrRenderAttr("alt", h.title)} data-v-a10c6f61><div class="highlight-body" data-v-a10c6f61><span class="highlight-tag" data-v-a10c6f61>${ssrInterpolate(h.tag)}</span><h3 data-v-a10c6f61>${ssrInterpolate(h.title)}</h3><p data-v-a10c6f61>${ssrInterpolate(h.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section" id="tour" data-v-a10c6f61><div class="container" data-v-a10c6f61><div class="tour-module" data-v-a10c6f61><div class="tour-info" data-v-a10c6f61><div class="section-eyebrow" data-v-a10c6f61>Trải nghiệm số</div><h2 data-v-a10c6f61>Tour 360°<br data-v-a10c6f61>Tham quan ảo</h2><p data-v-a10c6f61> Dạo qua từng lớp không gian nghệ thuật ngay tại nhà. Chọn một điểm để bắt đầu hành trình. </p><div class="tour-scenes" data-v-a10c6f61><!--[-->`);
      ssrRenderList(unref(tours).length ? unref(tours).slice(0, 4) : [{ slug: "", title: "Sân Điêu Khắc Bên Sông" }, { slug: "", title: "Vườn Tượng" }, { slug: "", title: "Xưởng Đá" }, { slug: "", title: "Khoảng Trưng Bày Mở" }], (tour, i) => {
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
              _push2(`<button type="button" class="btn btn-primary" data-v-a10c6f61${_scopeId}> Mở toàn màn hình <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a10c6f61${_scopeId}><path d="M15 3h6v6" data-v-a10c6f61${_scopeId}></path><path d="M9 21H3v-6" data-v-a10c6f61${_scopeId}></path><path d="M21 3l-7 7" data-v-a10c6f61${_scopeId}></path><path d="M3 21l7-7" data-v-a10c6f61${_scopeId}></path></svg></button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  class: "btn btn-primary"
                }, [
                  createTextVNode(" Mở toàn màn hình "),
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
      _push(`</div><div class="tour-viewer" data-v-a10c6f61><div class="tour-viewer-img" style="${ssrRenderStyle({ backgroundImage: `url('/images/song-van/aerial-view.jpg')` })}" data-v-a10c6f61></div><div class="tour-viewer-overlay" data-v-a10c6f61></div><div class="tour-badge" data-v-a10c6f61>● Panorama 360°</div><!--[-->`);
      ssrRenderList([{ top: "35%", left: "28%" }, { top: "55%", left: "72%" }, { top: "68%", left: "45%" }], (pos) => {
        _push(`<div style="${ssrRenderStyle([{ "position": "absolute", "width": "20px", "height": "20px", "border-radius": "50%", "background": "var(--tb-bronze)", "box-shadow": "0 0 0 6px rgba(160,120,40,.25), 0 0 20px rgba(160,120,40,.5)", "cursor": "pointer" }, { top: pos.top, left: pos.left }])}" data-v-a10c6f61></div>`);
      });
      _push(`<!--]--><div style="${ssrRenderStyle({ "position": "absolute", "inset": "0", "display": "flex", "align-items": "center", "justify-content": "center" })}" data-v-a10c6f61><div style="${ssrRenderStyle({ "width": "64px", "height": "64px", "display": "grid", "place-items": "center", "border-radius": "50%", "background": "rgba(255,255,255,.18)", "backdrop-filter": "blur(8px)", "border": "2px solid rgba(255,255,255,.4)", "transition": "all .2s" })}" data-v-a10c6f61><svg width="22" height="22" viewBox="0 0 24 24" fill="white" data-v-a10c6f61><polygon points="5 3 19 12 5 21 5 3" data-v-a10c6f61></polygon></svg></div></div><div style="${ssrRenderStyle({ "position": "absolute", "bottom": "24px", "left": "24px", "right": "24px" })}" data-v-a10c6f61><h4 style="${ssrRenderStyle({ "font-family": "var(--font-serif)", "font-size": "22px", "font-weight": "600", "color": "#fff", "margin": "0 0 4px" })}" data-v-a10c6f61>${ssrInterpolate(unref(featuredTour)?.title ?? "Tour 360° Sông Vân")}</h4><p style="${ssrRenderStyle({ "font-size": "13px", "color": "rgba(255,255,255,.7)", "margin": "0" })}" data-v-a10c6f61>${ssrInterpolate(unref(featuredTour)?.location ?? "Nam Hoa Lư, Ninh Bình")}</p></div></div></div></div></section><section class="section" id="events" style="${ssrRenderStyle({ "background": "#fff" })}" data-v-a10c6f61><div class="container" data-v-a10c6f61><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between", "align-items": "flex-end", "margin-bottom": "48px", "flex-wrap": "wrap", "gap": "16px" })}" data-v-a10c6f61><div data-v-a10c6f61><div class="section-eyebrow" data-v-a10c6f61>Triển lãm</div><h2 class="section-title" data-v-a10c6f61>Những dấu mốc tại Sông Vân</h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/events",
        class: "btn btn-ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Xem tất cả <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a10c6f61${_scopeId}><path d="M5 12h14" data-v-a10c6f61${_scopeId}></path><path d="m12 5 7 7-7 7" data-v-a10c6f61${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Xem tất cả "),
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
              _push2(`<div class="event-img" data-v-a10c6f61${_scopeId}><img${ssrRenderAttr("src", ["/images/song-van/exhibition-visitors.jpg", "/images/song-van/sculpture-garden.jpg"][events.indexOf(event)])}${ssrRenderAttr("alt", event.title)} data-v-a10c6f61${_scopeId}><div class="event-date" data-v-a10c6f61${_scopeId}><strong data-v-a10c6f61${_scopeId}>${ssrInterpolate(event.day)}</strong><span data-v-a10c6f61${_scopeId}>${ssrInterpolate(event.month)}</span></div></div><div class="event-body" data-v-a10c6f61${_scopeId}><div class="event-cat" data-v-a10c6f61${_scopeId}>${ssrInterpolate(event.cat)}</div><h3 data-v-a10c6f61${_scopeId}>${ssrInterpolate(event.title)}</h3><p data-v-a10c6f61${_scopeId}>${ssrInterpolate(event.desc)}</p><div class="event-meta" data-v-a10c6f61${_scopeId}><span data-v-a10c6f61${_scopeId}>🕐 ${ssrInterpolate(event.time)}</span><span data-v-a10c6f61${_scopeId}>📍 ${ssrInterpolate(event.place)}</span></div></div>`);
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
                    createVNode("span", null, "🕐 " + toDisplayString(event.time), 1),
                    createVNode("span", null, "📍 " + toDisplayString(event.place), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="section tickets" id="tickets" data-v-a10c6f61><div class="container" data-v-a10c6f61><div class="section-head center" data-v-a10c6f61><div class="section-eyebrow" data-v-a10c6f61>Lên kế hoạch tham quan</div><h2 class="section-title" data-v-a10c6f61>Chọn gói phù hợp với bạn</h2><p class="section-sub" data-v-a10c6f61>Gửi yêu cầu trước chuyến đi để không gian xác nhận lịch tham quan phù hợp.</p></div><div class="tickets-grid" data-v-a10c6f61><!--[-->`);
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
              _push2(`<button type="button" class="${ssrRenderClass([t.featured ? "btn-primary" : "btn-outline", "btn"])}" style="${ssrRenderStyle({ "width": "100%", "justify-content": "center" })}" data-v-a10c6f61${_scopeId}>${ssrInterpolate(t.featured ? "Gửi yêu cầu" : "Chọn hình thức")}</button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  class: ["btn", t.featured ? "btn-primary" : "btn-outline"],
                  style: { "width": "100%", "justify-content": "center" }
                }, toDisplayString(t.featured ? "Gửi yêu cầu" : "Chọn hình thức"), 3)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section class="partners" data-v-a10c6f61><div class="container" data-v-a10c6f61><div class="partners-label" data-v-a10c6f61>Sông Vân Art Space</div><div class="partners-logos" data-v-a10c6f61><!--[-->`);
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
export {
  index as default
};
//# sourceMappingURL=index-_DOozQhn.js.map
