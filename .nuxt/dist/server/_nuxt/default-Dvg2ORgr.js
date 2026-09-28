import { _ as _sfc_main$1 } from "./ThemeToggle-_7_p_E0v.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-B0iADLum.js";
import { defineComponent, ref, watch, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderAttr } from "vue/server-renderer";
import { u as useRoute, _ as _export_sfc } from "../server.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ufo/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/defu/dist/defu.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unctx/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/h3/dist/index.mjs";
import "pinia";
import "vue-router";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/klona/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const mobileOpen = ref(false);
    const navLinks = [
      { to: "/", label: "Trang chủ", exact: true },
      { to: "/tours", label: "Tour 360°", exact: false },
      { to: "/tickets", label: "Tham quan", exact: false },
      { to: "/events", label: "Sự kiện", exact: false },
      { to: "/about", label: "Giới thiệu", exact: false }
    ];
    watch(() => route.path, () => {
      mobileOpen.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ThemeToggle = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "font-family": "var(--font-sans)", "background": "var(--tb-paper)", "color": "var(--tb-ink)", "min-height": "100vh" } }, _attrs))} data-v-347f8fd6><div style="${ssrRenderStyle({ "background": "var(--tb-ink)", "color": "rgba(245,239,230,.7)", "font-size": "12px", "padding": "8px 0" })}" data-v-347f8fd6><div style="${ssrRenderStyle({ "max-width": "1200px", "margin": "0 auto", "padding": "0 24px", "display": "flex", "justify-content": "space-between", "align-items": "center", "gap": "16px", "flex-wrap": "wrap" })}" data-v-347f8fd6><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "6px" })}" data-v-347f8fd6><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-347f8fd6><circle cx="12" cy="12" r="10" data-v-347f8fd6></circle><polyline points="12 6 12 12 16 14" data-v-347f8fd6></polyline></svg> Tham quan: <strong style="${ssrRenderStyle({ "color": "var(--tb-bronze)", "margin-left": "4px" })}" data-v-347f8fd6>Đặt lịch trước khi đến</strong></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "20px" })}" data-v-347f8fd6><a href="tel:+84988793456" style="${ssrRenderStyle({ "color": "rgba(245,239,230,.7)", "text-decoration": "none", "display": "flex", "align-items": "center", "gap": "6px" })}" onmouseover="this.style.color=&#39;var(--tb-bronze)&#39;" onmouseout="this.style.color=&#39;rgba(245,239,230,.7)&#39;" data-v-347f8fd6><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-347f8fd6><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-v-347f8fd6></path></svg><strong style="${ssrRenderStyle({ "color": "var(--tb-bronze)" })}" data-v-347f8fd6>+84 988 793 456</strong></a>`);
      _push(ssrRenderComponent(_component_ThemeToggle, { size: "text-base" }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        style: { "color": "rgba(245,239,230,.6)", "font-size": "11px", "text-decoration": "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Quản trị`);
          } else {
            return [
              createTextVNode("Quản trị")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><header style="${ssrRenderStyle({ "position": "sticky", "top": "0", "z-index": "100", "background": "rgba(245,239,232,.94)", "backdrop-filter": "blur(12px)", "border-bottom": "1px solid var(--tb-line)" })}" data-v-347f8fd6><div style="${ssrRenderStyle({ "max-width": "1200px", "margin": "0 auto", "padding": "0 24px", "display": "flex", "align-items": "center", "justify-content": "space-between", "height": "72px", "gap": "32px" })}" data-v-347f8fd6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        style: { "display": "flex", "align-items": "center", "gap": "12px", "text-decoration": "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "width": "44px", "height": "44px", "display": "grid", "place-items": "center", "background": "linear-gradient(135deg, var(--tb-forest), var(--tb-forest-dk))", "color": "#fff", "border-radius": "50%", "font-family": "var(--font-serif)", "font-weight": "600", "font-size": "19px", "box-shadow": "var(--shadow-md)", "flex-shrink": "0" })}" data-v-347f8fd6${_scopeId}> SV </div><div style="${ssrRenderStyle({ "line-height": "1.1" })}" data-v-347f8fd6${_scopeId}><strong style="${ssrRenderStyle({ "display": "block", "font-family": "var(--font-serif)", "font-size": "17px", "font-weight": "600", "letter-spacing": "-.01em", "color": "var(--tb-ink)" })}" data-v-347f8fd6${_scopeId}>Sông Vân</strong><span style="${ssrRenderStyle({ "font-size": "10px", "letter-spacing": ".18em", "text-transform": "uppercase", "color": "var(--tb-muted)" })}" data-v-347f8fd6${_scopeId}>Art Space · Ninh Bình</span></div>`);
          } else {
            return [
              createVNode("div", { style: { "width": "44px", "height": "44px", "display": "grid", "place-items": "center", "background": "linear-gradient(135deg, var(--tb-forest), var(--tb-forest-dk))", "color": "#fff", "border-radius": "50%", "font-family": "var(--font-serif)", "font-weight": "600", "font-size": "19px", "box-shadow": "var(--shadow-md)", "flex-shrink": "0" } }, " SV "),
              createVNode("div", { style: { "line-height": "1.1" } }, [
                createVNode("strong", { style: { "display": "block", "font-family": "var(--font-serif)", "font-size": "17px", "font-weight": "600", "letter-spacing": "-.01em", "color": "var(--tb-ink)" } }, "Sông Vân"),
                createVNode("span", { style: { "font-size": "10px", "letter-spacing": ".18em", "text-transform": "uppercase", "color": "var(--tb-muted)" } }, "Art Space · Ninh Bình")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav style="${ssrRenderStyle({ "display": "flex", "gap": "4px" })}" class="hidden lg:flex" data-v-347f8fd6><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.to,
          to: link.to,
          style: [{ "padding": "8px 14px", "border-radius": "8px", "font-size": "14px", "font-weight": "500", "text-decoration": "none", "transition": "all .15s" }, {
            color: unref(route).path === link.to ? "var(--tb-forest)" : "var(--ink-70)",
            background: unref(route).path === link.to ? "var(--ink-10)" : "transparent"
          }],
          onMouseover: ($event) => $event.target.style.color = "var(--tb-forest)",
          onMouseout: ($event) => $event.target.style.color = unref(route).path === link.to ? "var(--tb-forest)" : "var(--ink-70)"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "8px" })}" data-v-347f8fd6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tickets",
        class: "hidden sm:block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" style="${ssrRenderStyle({ "display": "inline-flex", "align-items": "center", "gap": "8px", "padding": "10px 20px", "border-radius": "999px", "background": "var(--tb-forest)", "color": "#fff", "font-weight": "600", "font-size": "14px", "box-shadow": "var(--shadow-md)", "transition": "all .2s", "border": "none", "cursor": "pointer", "font-family": "var(--font-sans)" })}" onmouseover="this.style.background=&#39;var(--tb-forest-dk)&#39;; this.style.transform=&#39;translateY(-1px)&#39;" onmouseout="this.style.background=&#39;var(--tb-forest)&#39;; this.style.transform=&#39;translateY(0)&#39;" data-v-347f8fd6${_scopeId}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-347f8fd6${_scopeId}><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" data-v-347f8fd6${_scopeId}></path></svg> Đăng ký tham quan </button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                style: { "display": "inline-flex", "align-items": "center", "gap": "8px", "padding": "10px 20px", "border-radius": "999px", "background": "var(--tb-forest)", "color": "#fff", "font-weight": "600", "font-size": "14px", "box-shadow": "var(--shadow-md)", "transition": "all .2s", "border": "none", "cursor": "pointer", "font-family": "var(--font-sans)" },
                onmouseover: "this.style.background='var(--tb-forest-dk)'; this.style.transform='translateY(-1px)'",
                onmouseout: "this.style.background='var(--tb-forest)'; this.style.transform='translateY(0)'"
              }, [
                (openBlock(), createBlock("svg", {
                  width: "14",
                  height: "14",
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
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" class="lg:hidden" style="${ssrRenderStyle({ "width": "40px", "height": "40px", "display": "grid", "place-items": "center", "border-radius": "50%", "color": "var(--ink-70)", "transition": "all .15s", "background": "transparent", "border": "none", "cursor": "pointer" })}" data-v-347f8fd6>`);
      if (!unref(mobileOpen)) {
        _push(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-347f8fd6><line x1="4" y1="8" x2="20" y2="8" data-v-347f8fd6></line><line x1="4" y1="16" x2="20" y2="16" data-v-347f8fd6></line></svg>`);
      } else {
        _push(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-347f8fd6><line x1="18" y1="6" x2="6" y2="18" data-v-347f8fd6></line><line x1="6" y1="6" x2="18" y2="18" data-v-347f8fd6></line></svg>`);
      }
      _push(`</button></div></div>`);
      if (unref(mobileOpen)) {
        _push(`<div style="${ssrRenderStyle({ "border-top": "1px solid var(--tb-line)", "background": "rgba(245,239,232,.97)", "padding": "12px 24px 16px" })}" class="lg:hidden" data-v-347f8fd6><!--[-->`);
        ssrRenderList(navLinks, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.to,
            to: link.to,
            style: { "display": "flex", "padding": "10px 12px", "border-radius": "8px", "font-size": "14px", "font-weight": "500", "color": "var(--ink-70)", "text-decoration": "none", "transition": "all .15s" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/tickets",
          style: { "display": "block", "margin-top": "8px" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button type="button" style="${ssrRenderStyle({ "width": "100%", "padding": "11px", "border-radius": "999px", "background": "var(--tb-forest)", "color": "#fff", "font-weight": "600", "font-size": "14px", "border": "none", "cursor": "pointer", "font-family": "var(--font-sans)" })}" data-v-347f8fd6${_scopeId}> Đăng ký tham quan </button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  style: { "width": "100%", "padding": "11px", "border-radius": "999px", "background": "var(--tb-forest)", "color": "#fff", "font-weight": "600", "font-size": "14px", "border": "none", "cursor": "pointer", "font-family": "var(--font-sans)" }
                }, " Đăng ký tham quan ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><main data-v-347f8fd6>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer style="${ssrRenderStyle({ "background": "var(--tb-ink)", "color": "rgba(245,239,230,.7)", "padding": "64px 0 0" })}" data-v-347f8fd6><div style="${ssrRenderStyle({ "max-width": "1200px", "margin": "0 auto", "padding": "0 24px" })}" data-v-347f8fd6><div style="${ssrRenderStyle({ "display": "grid", "grid-template-columns": "1.4fr 1fr 1fr 1.2fr", "gap": "48px", "padding-bottom": "48px", "border-bottom": "1px solid rgba(255,255,255,.1)" })}" class="footer-grid-responsive" data-v-347f8fd6><div data-v-347f8fd6><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "12px", "margin-bottom": "16px" })}" data-v-347f8fd6><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "display": "grid", "place-items": "center", "background": "linear-gradient(135deg, var(--tb-forest), var(--tb-forest-dk))", "color": "#fff", "border-radius": "50%", "font-family": "var(--font-serif)", "font-weight": "600", "font-size": "15px" })}" data-v-347f8fd6>SV</div><strong style="${ssrRenderStyle({ "color": "#fff", "font-family": "var(--font-serif)", "font-size": "18px" })}" data-v-347f8fd6>Sông Vân Art Space</strong></div><p style="${ssrRenderStyle({ "font-size": "13px", "line-height": "1.7", "max-width": "300px", "margin-bottom": "20px" })}" data-v-347f8fd6> Không gian nghệ thuật bên dòng sông Vân, nơi điêu khắc đá đương đại gặp gỡ truyền thống làng nghề Ninh Vân. </p><div style="${ssrRenderStyle({ "display": "flex", "gap": "8px" })}" data-v-347f8fd6><input type="email" placeholder="Email của bạn..." style="${ssrRenderStyle({ "flex": "1", "padding": "10px 14px", "background": "rgba(255,255,255,.06)", "border": "1px solid rgba(255,255,255,.15)", "border-radius": "8px", "color": "#fff", "font-size": "13px", "font-family": "var(--font-sans)", "outline": "none" })}" data-v-347f8fd6><button type="button" style="${ssrRenderStyle({ "padding": "10px 16px", "background": "var(--tb-forest)", "color": "#fff", "border-radius": "8px", "font-weight": "600", "font-size": "13px", "border": "none", "cursor": "pointer", "font-family": "var(--font-sans)", "transition": "background .2s" })}" data-v-347f8fd6> Đăng ký </button></div></div><div data-v-347f8fd6><h5 style="${ssrRenderStyle({ "color": "#fff", "font-size": "13px", "font-weight": "700", "letter-spacing": ".12em", "text-transform": "uppercase", "margin-bottom": "20px" })}" data-v-347f8fd6>Khám phá</h5><ul style="${ssrRenderStyle({ "list-style": "none", "padding": "0", "margin": "0", "display": "grid", "gap": "10px" })}" data-v-347f8fd6><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(`<li data-v-347f8fd6>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.to,
          style: { "font-size": "13px", "color": "rgba(245,239,230,.7)", "text-decoration": "none", "transition": "color .15s" },
          onmouseover: "this.style.color='var(--tb-bronze)'",
          onmouseout: "this.style.color='rgba(245,239,230,.7)'"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div data-v-347f8fd6><h5 style="${ssrRenderStyle({ "color": "#fff", "font-size": "13px", "font-weight": "700", "letter-spacing": ".12em", "text-transform": "uppercase", "margin-bottom": "20px" })}" data-v-347f8fd6>Hỗ trợ</h5><ul style="${ssrRenderStyle({ "list-style": "none", "padding": "0", "margin": "0", "display": "grid", "gap": "10px" })}" data-v-347f8fd6><!--[-->`);
      ssrRenderList(["Hướng dẫn tham quan", "Thông tin không gian", "Câu hỏi thường gặp", "Liên hệ hợp tác"], (item) => {
        _push(`<li data-v-347f8fd6><a href="#" style="${ssrRenderStyle({ "font-size": "13px", "color": "rgba(245,239,230,.7)", "text-decoration": "none", "transition": "color .15s" })}" onmouseover="this.style.color=&#39;var(--tb-bronze)&#39;" onmouseout="this.style.color=&#39;rgba(245,239,230,.7)&#39;" data-v-347f8fd6>${ssrInterpolate(item)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div data-v-347f8fd6><h5 style="${ssrRenderStyle({ "color": "#fff", "font-size": "13px", "font-weight": "700", "letter-spacing": ".12em", "text-transform": "uppercase", "margin-bottom": "20px" })}" data-v-347f8fd6>Liên hệ</h5><div style="${ssrRenderStyle({ "display": "grid", "gap": "12px", "font-size": "13px" })}" data-v-347f8fd6><!--[-->`);
      ssrRenderList([
        { icon: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0", text: "Thôn Xuân Phúc, phường Nam Hoa Lư, Ninh Bình" },
        { icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 1 2.81.7A2 2 0 0 1 22 16.92z", text: "Liên hệ trước khi tham quan" },
        { icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6", text: "Sông Vân Art Space" }
      ], (c) => {
        _push(`<div style="${ssrRenderStyle({ "display": "flex", "gap": "10px", "align-items": "flex-start" })}" data-v-347f8fd6><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--tb-bronze)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${ssrRenderStyle({ "flex-shrink": "0", "margin-top": "2px" })}" data-v-347f8fd6><path${ssrRenderAttr("d", c.icon)} data-v-347f8fd6></path></svg><span data-v-347f8fd6>${ssrInterpolate(c.text)}</span></div>`);
      });
      _push(`<!--]--></div></div></div><div style="${ssrRenderStyle({ "padding": "20px 0", "display": "flex", "justify-content": "space-between", "align-items": "center", "gap": "16px", "flex-wrap": "wrap", "font-size": "12px" })}" data-v-347f8fd6><div data-v-347f8fd6>© 2026 Sông Vân Art Space. Bảo lưu mọi quyền.</div><div style="${ssrRenderStyle({ "display": "flex", "gap": "8px", "align-items": "center" })}" data-v-347f8fd6><!--[-->`);
      ssrRenderList(["facebook", "instagram", "youtube"], (s) => {
        _push(`<a href="#" style="${ssrRenderStyle({ "width": "34px", "height": "34px", "display": "grid", "place-items": "center", "background": "rgba(255,255,255,.05)", "border-radius": "50%", "color": "rgba(245,239,230,.7)", "text-decoration": "none", "transition": "all .2s" })}" onmouseover="this.style.background=&#39;var(--tb-forest)&#39;; this.style.color=&#39;#fff&#39;" onmouseout="this.style.background=&#39;rgba(255,255,255,.05)&#39;; this.style.color=&#39;rgba(245,239,230,.7)&#39;"${ssrRenderAttr("aria-label", s)} data-v-347f8fd6>`);
        if (s === "facebook") {
          _push(`<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" data-v-347f8fd6><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.61 23.1 24 18.1 24 12.07z" data-v-347f8fd6></path></svg>`);
        } else if (s === "instagram") {
          _push(`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-347f8fd6><rect width="20" height="20" x="2" y="2" rx="5" data-v-347f8fd6></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-v-347f8fd6></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" data-v-347f8fd6></line></svg>`);
        } else {
          _push(`<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" data-v-347f8fd6><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" data-v-347f8fd6></path></svg>`);
        }
        _push(`</a>`);
      });
      _push(`<!--]--></div></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-347f8fd6"]]);
export {
  _default as default
};
//# sourceMappingURL=default-Dvg2ORgr.js.map
