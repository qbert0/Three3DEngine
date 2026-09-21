import { _ as __nuxt_component_0 } from "./nuxt-link-B0iADLum.js";
import { defineComponent, withAsyncContext, computed, ref, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-vl98-hf4.js";
import { u as useFetch } from "./fetch-BMHjmZvY.js";
import { _ as _export_sfc } from "../server.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ufo/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/defu/dist/defu.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/@unhead/vue/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/perfect-debounce/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unctx/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/h3/dist/index.mjs";
import "pinia";
import "vue-router";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/klona/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Trảng Bay — Khu Du Lịch Sinh Thái 360°",
      meta: [{ name: "description", content: "Khu du lịch sinh thái Trảng Bay — thiên nhiên hoang sơ, tour 360°, đặt vé và sự kiện." }]
    });
    const { data, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/tours",
      "$1cxjKEGR5E"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const tours = computed(() => data.value?.items ?? []);
    const featuredTour = computed(() => tours.value[0]);
    const heroSlides = [
      { bg: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80", label: "Rừng nguyên sinh Trảng Bay" },
      { bg: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80", label: "Đại ngàn xanh thẳm" },
      { bg: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80", label: "Khám phá thiên nhiên" }
    ];
    const currentSlide = ref(0);
    const highlights = [
      { tag: "Thiên nhiên", title: "Rừng Nguyên Sinh 12km", desc: "Đường mòn xuyên rừng nguyên sinh, hệ động thực vật phong phú." },
      { tag: "Mạo hiểm", title: "Đỉnh Trảng Nhìn Xa", desc: "Điểm ngắm cảnh toàn bộ thung lũng ở độ cao 840m." },
      { tag: "Văn hóa", title: "Làng Bản Địa", desc: "Trải nghiệm văn hóa và ẩm thực cộng đồng dân tộc địa phương." },
      { tag: "Sinh thái", title: "Hồ Trảng Bay", desc: "Hồ nước tự nhiên giữa lòng rừng, trong xanh bốn mùa." }
    ];
    const events = [
      { day: "20", month: "Tháng 9", cat: "Thiên văn", title: "Đêm Ngắm Sao Trảng Bay", desc: "Quan sát bầu trời đêm hoang sơ cùng kính thiên văn chuyên nghiệp.", time: "19:00 – 23:00", place: "Đỉnh Trảng" },
      { day: "27", month: "Tháng 9", cat: "Outdoor", title: "Trekking Rừng 12km", desc: "Hành trình xuyên rừng cùng hướng dẫn viên sinh thái địa phương.", time: "06:00 – 18:00", place: "Cổng chính" },
      { day: "04", month: "Tháng 10", cat: "Âm nhạc", title: "Lễ Hội Âm Nhạc Xanh", desc: "Âm nhạc acoustic và indie giữa thiên nhiên, không khuếch đại.", time: "17:00 – 22:00", place: "Bãi Trảng" }
    ];
    const tickets = [
      { name: "Vé Tiêu Chuẩn", desc: "Phù hợp khách lẻ, tham quan tự do", price: "150.000", unit: "đ / người", features: ["Vào tất cả khu tham quan", "Bản đồ tham quan miễn phí", "Thời gian tự do"], featured: false },
      { name: "Combo Trải Nghiệm", desc: "Được chọn nhiều nhất — tiết kiệm 25%", price: "350.000", unit: "đ / người", features: ["Vé vào cổng + Hướng dẫn viên", "Tour rừng 4h có thuyết minh", "Bữa trưa địa phương", "Ảnh kỷ niệm miễn phí"], featured: true },
      { name: "Gói Gia Đình", desc: "2 người lớn + 2 trẻ em", price: "450.000", unit: "đ / gói", features: ["Vé vào cổng cả gia đình", "Khu vui chơi trẻ em", "Picnic set tặng kèm"], featured: false }
    ];
    const partners = ["Bộ Văn hóa TT&DL", "Vietnam Airlines", "Booking.com", "TripAdvisor", "Agoda", "Sun Group"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-379cb6cd><section class="hero" data-v-379cb6cd><div class="hero-slides" data-v-379cb6cd><!--[-->`);
      ssrRenderList(heroSlides, (slide, i) => {
        _push(`<div class="${ssrRenderClass([{ active: unref(currentSlide) === i }, "hero-slide"])}" style="${ssrRenderStyle({ backgroundImage: `url('${slide.bg}')` })}" data-v-379cb6cd></div>`);
      });
      _push(`<!--]--></div><div class="container hero-content" data-v-379cb6cd><div class="hero-eyebrow" data-v-379cb6cd><span class="dot" data-v-379cb6cd></span> Khu du lịch sinh thái · Mở cửa hôm nay </div><h1 class="hero-title" data-v-379cb6cd> Thiên nhiên hoang sơ<br data-v-379cb6cd><em data-v-379cb6cd>Trảng Bay</em></h1><p class="hero-desc" data-v-379cb6cd> Rừng núi nguyên sinh, không khí trong lành và những trải nghiệm 360° đắm chìm. Khám phá. Nghỉ ngơi. Tái sinh. </p><div class="hero-ctas" data-v-379cb6cd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tickets",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-379cb6cd${_scopeId}><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" data-v-379cb6cd${_scopeId}></path></svg> Đặt vé tham quan `);
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
              createTextVNode(" Đặt vé tham quan ")
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
              _push2(`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${ssrRenderStyle({ "display": "inline-block", "vertical-align": "-2px", "margin-right": "6px" })}" data-v-379cb6cd${_scopeId}><circle cx="12" cy="12" r="10" data-v-379cb6cd${_scopeId}></circle><polygon points="10 8 16 12 10 16 10 8" data-v-379cb6cd${_scopeId}></polygon></svg> Tour 360° Ảo `);
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
      _push(`</div></div><div class="hero-dots" data-v-379cb6cd><!--[-->`);
      ssrRenderList(heroSlides, (_, i) => {
        _push(`<button type="button" class="${ssrRenderClass([{ active: unref(currentSlide) === i }, "hero-dot"])}" data-v-379cb6cd></button>`);
      });
      _push(`<!--]--></div><div class="hero-stats" data-v-379cb6cd><div class="hero-stats-inner" data-v-379cb6cd><!--[-->`);
      ssrRenderList([
        { value: "1.200 ha", label: "Diện tích rừng" },
        { value: "15+", label: "Điểm tham quan" },
        { value: "360°", label: "Tour ảo sống động" },
        { value: "7 ngày", label: "Mở cửa mỗi tuần" }
      ], (stat) => {
        _push(`<div class="stat" data-v-379cb6cd><div class="stat-value" data-v-379cb6cd>${ssrInterpolate(stat.value)}</div><div class="stat-label" data-v-379cb6cd>${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section" id="intro" data-v-379cb6cd><div class="container" data-v-379cb6cd><div class="intro-grid" data-v-379cb6cd><div class="intro-images" data-v-379cb6cd><img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&amp;q=80" alt="Rừng Trảng Bay" class="intro-img-main" data-v-379cb6cd><img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&amp;q=80" alt="Toàn cảnh" class="intro-img-float" data-v-379cb6cd><div class="intro-badge" data-v-379cb6cd><strong data-v-379cb6cd>8+ năm</strong><span data-v-379cb6cd>bảo tồn thiên nhiên</span></div></div><div data-v-379cb6cd><div class="section-eyebrow" data-v-379cb6cd>Giới thiệu</div><h2 class="section-title" data-v-379cb6cd> Hơn 8 năm gìn giữ<br data-v-379cb6cd><em style="${ssrRenderStyle({ "font-style": "italic", "color": "var(--tb-bronze)" })}" data-v-379cb6cd>rừng nguyên sinh</em></h2><p class="section-sub" data-v-379cb6cd> Trảng Bay được thành lập với sứ mệnh bảo vệ 1.200 ha rừng nguyên sinh trong khi tạo ra nguồn thu bền vững cho cộng đồng địa phương thông qua du lịch sinh thái có trách nhiệm. </p><div class="intro-features" data-v-379cb6cd><!--[-->`);
      ssrRenderList([
        { title: "Tour 360° Số Hóa", desc: "Khám phá toàn bộ khu rừng từ mọi nơi qua ảnh panorama sống động." },
        { title: "Bảo Tồn Có Trách Nhiệm", desc: "10% doanh thu tái đầu tư vào bảo tồn và phát triển cộng đồng." },
        { title: "Sinh Thái Không Rác Thải", desc: "Toàn khu không dùng đồ nhựa dùng một lần từ năm 2022." }
      ], (feat) => {
        _push(`<div class="intro-feature" data-v-379cb6cd><div class="feature-icon" data-v-379cb6cd><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-379cb6cd><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" data-v-379cb6cd></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" data-v-379cb6cd></path></svg></div><div data-v-379cb6cd><h4 style="${ssrRenderStyle({ "font-size": "15px", "font-weight": "700", "margin-bottom": "4px", "color": "var(--tb-ink)" })}" data-v-379cb6cd>${ssrInterpolate(feat.title)}</h4><p style="${ssrRenderStyle({ "font-size": "13px", "color": "var(--ink-70)", "line-height": "1.5", "margin": "0" })}" data-v-379cb6cd>${ssrInterpolate(feat.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section><section class="section highlights" id="highlights" data-v-379cb6cd><div class="container" data-v-379cb6cd><div class="section-head" data-v-379cb6cd><div class="section-eyebrow" data-v-379cb6cd>Điểm tham quan</div><h2 class="section-title" data-v-379cb6cd>Khám phá những điểm đến<br data-v-379cb6cd>không thể bỏ qua</h2></div><div class="highlight-grid" data-v-379cb6cd><!--[-->`);
      ssrRenderList(highlights, (h, i) => {
        _push(`<div class="highlight-card" data-v-379cb6cd><img${ssrRenderAttr("src", `https://images.unsplash.com/photo-${["1448375240586-882707db888b", "1501854140801-50d01698950b", "1441974231531-c6227db76b6e", "1506905925346-21bda4d32df4"][i]}?w=600&q=80`)}${ssrRenderAttr("alt", h.title)} data-v-379cb6cd><div class="highlight-body" data-v-379cb6cd><span class="highlight-tag" data-v-379cb6cd>${ssrInterpolate(h.tag)}</span><h3 data-v-379cb6cd>${ssrInterpolate(h.title)}</h3><p data-v-379cb6cd>${ssrInterpolate(h.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section" id="tour" data-v-379cb6cd><div class="container" data-v-379cb6cd><div class="tour-module" data-v-379cb6cd><div class="tour-info" data-v-379cb6cd><div class="section-eyebrow" data-v-379cb6cd>Trải nghiệm số</div><h2 data-v-379cb6cd>Tour 360°<br data-v-379cb6cd>Tham quan ảo</h2><p data-v-379cb6cd> Dạo bước qua từng góc khu du lịch ngay tại nhà. Chọn điểm để bắt đầu hành trình. </p><div class="tour-scenes" data-v-379cb6cd><!--[-->`);
      ssrRenderList(unref(tours).length ? unref(tours).slice(0, 4) : [{ slug: "", title: "Đỉnh Nhìn Ra Thung Lũng" }, { slug: "", title: "Rìa Rừng Thưa" }, { slug: "", title: "Hồ Trảng Bay" }, { slug: "", title: "Trảng Cỏ Mênh Mông" }], (tour, i) => {
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
              _push2(`<button type="button" class="btn btn-primary" data-v-379cb6cd${_scopeId}> Mở toàn màn hình <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-379cb6cd${_scopeId}><path d="M15 3h6v6" data-v-379cb6cd${_scopeId}></path><path d="M9 21H3v-6" data-v-379cb6cd${_scopeId}></path><path d="M21 3l-7 7" data-v-379cb6cd${_scopeId}></path><path d="M3 21l7-7" data-v-379cb6cd${_scopeId}></path></svg></button>`);
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
      _push(`</div><div class="tour-viewer" data-v-379cb6cd><div class="tour-viewer-img" style="${ssrRenderStyle({ backgroundImage: unref(featuredTour)?.thumbnail ? `url('${unref(featuredTour).thumbnail}')` : `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80')` })}" data-v-379cb6cd></div><div class="tour-viewer-overlay" data-v-379cb6cd></div><div class="tour-badge" data-v-379cb6cd>● Panorama 360°</div><!--[-->`);
      ssrRenderList([{ top: "35%", left: "28%" }, { top: "55%", left: "72%" }, { top: "68%", left: "45%" }], (pos) => {
        _push(`<div style="${ssrRenderStyle([{ "position": "absolute", "width": "20px", "height": "20px", "border-radius": "50%", "background": "var(--tb-bronze)", "box-shadow": "0 0 0 6px rgba(160,120,40,.25), 0 0 20px rgba(160,120,40,.5)", "cursor": "pointer" }, { top: pos.top, left: pos.left }])}" data-v-379cb6cd></div>`);
      });
      _push(`<!--]--><div style="${ssrRenderStyle({ "position": "absolute", "inset": "0", "display": "flex", "align-items": "center", "justify-content": "center" })}" data-v-379cb6cd><div style="${ssrRenderStyle({ "width": "64px", "height": "64px", "display": "grid", "place-items": "center", "border-radius": "50%", "background": "rgba(255,255,255,.18)", "backdrop-filter": "blur(8px)", "border": "2px solid rgba(255,255,255,.4)", "transition": "all .2s" })}" data-v-379cb6cd><svg width="22" height="22" viewBox="0 0 24 24" fill="white" data-v-379cb6cd><polygon points="5 3 19 12 5 21 5 3" data-v-379cb6cd></polygon></svg></div></div><div style="${ssrRenderStyle({ "position": "absolute", "bottom": "24px", "left": "24px", "right": "24px" })}" data-v-379cb6cd><h4 style="${ssrRenderStyle({ "font-family": "var(--font-serif)", "font-size": "22px", "font-weight": "600", "color": "#fff", "margin": "0 0 4px" })}" data-v-379cb6cd>${ssrInterpolate(unref(featuredTour)?.title ?? "Tour 360° Trảng Bay")}</h4><p style="${ssrRenderStyle({ "font-size": "13px", "color": "rgba(255,255,255,.7)", "margin": "0" })}" data-v-379cb6cd>${ssrInterpolate(unref(featuredTour)?.location ?? "Rừng Núi Trảng Bay")}</p></div></div></div></div></section><section class="section" id="events" style="${ssrRenderStyle({ "background": "#fff" })}" data-v-379cb6cd><div class="container" data-v-379cb6cd><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between", "align-items": "flex-end", "margin-bottom": "48px", "flex-wrap": "wrap", "gap": "16px" })}" data-v-379cb6cd><div data-v-379cb6cd><div class="section-eyebrow" data-v-379cb6cd>Sự kiện &amp; Lễ hội</div><h2 class="section-title" data-v-379cb6cd>Lịch sự kiện sắp diễn ra</h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/events",
        class: "btn btn-ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Xem tất cả <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-379cb6cd${_scopeId}><path d="M5 12h14" data-v-379cb6cd${_scopeId}></path><path d="m12 5 7 7-7 7" data-v-379cb6cd${_scopeId}></path></svg>`);
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
      _push(`</div><div class="events-grid" data-v-379cb6cd><!--[-->`);
      ssrRenderList(events, (event) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: event.title,
          to: "/events",
          class: "event-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="event-img" data-v-379cb6cd${_scopeId}><img${ssrRenderAttr("src", `https://images.unsplash.com/photo-${["1501854140801-50d01698950b", "1448375240586-882707db888b", "1441974231531-c6227db76b6e"][events.indexOf(event)]}?w=600&q=80`)}${ssrRenderAttr("alt", event.title)} data-v-379cb6cd${_scopeId}><div class="event-date" data-v-379cb6cd${_scopeId}><strong data-v-379cb6cd${_scopeId}>${ssrInterpolate(event.day)}</strong><span data-v-379cb6cd${_scopeId}>${ssrInterpolate(event.month)}</span></div></div><div class="event-body" data-v-379cb6cd${_scopeId}><div class="event-cat" data-v-379cb6cd${_scopeId}>${ssrInterpolate(event.cat)}</div><h3 data-v-379cb6cd${_scopeId}>${ssrInterpolate(event.title)}</h3><p data-v-379cb6cd${_scopeId}>${ssrInterpolate(event.desc)}</p><div class="event-meta" data-v-379cb6cd${_scopeId}><span data-v-379cb6cd${_scopeId}>🕐 ${ssrInterpolate(event.time)}</span><span data-v-379cb6cd${_scopeId}>📍 ${ssrInterpolate(event.place)}</span></div></div>`);
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
      _push(`<!--]--></div></div></section><section class="section tickets" id="tickets" data-v-379cb6cd><div class="container" data-v-379cb6cd><div class="section-head center" data-v-379cb6cd><div class="section-eyebrow" data-v-379cb6cd>Bán vé trực tuyến</div><h2 class="section-title" data-v-379cb6cd>Chọn gói phù hợp với bạn</h2><p class="section-sub" data-v-379cb6cd>Đặt vé online, nhận mã QR qua email, không cần xếp hàng tại quầy.</p></div><div class="tickets-grid" data-v-379cb6cd><!--[-->`);
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
              _push2(`<button type="button" class="${ssrRenderClass([t.featured ? "btn-primary" : "btn-outline", "btn"])}" style="${ssrRenderStyle({ "width": "100%", "justify-content": "center" })}" data-v-379cb6cd${_scopeId}>${ssrInterpolate(t.featured ? "Đặt ngay" : "Chọn gói này")}</button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  class: ["btn", t.featured ? "btn-primary" : "btn-outline"],
                  style: { "width": "100%", "justify-content": "center" }
                }, toDisplayString(t.featured ? "Đặt ngay" : "Chọn gói này"), 3)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section class="partners" data-v-379cb6cd><div class="container" data-v-379cb6cd><div class="partners-label" data-v-379cb6cd>Đơn vị đồng hành &amp; Chứng nhận</div><div class="partners-logos" data-v-379cb6cd><!--[-->`);
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
export {
  index as default
};
//# sourceMappingURL=index-BaUuIVlm.js.map
