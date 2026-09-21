import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-vl98-hf4.js";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/@unhead/vue/dist/index.mjs";
import "../server.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unctx/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/h3/dist/index.mjs";
import "pinia";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ufo/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/klona/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tickets",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Đặt Vé — Trảng Bay",
      meta: [{ name: "description", content: "Đặt vé tham quan khu du lịch sinh thái Trảng Bay trực tuyến. Nhận QR ngay lập tức." }]
    });
    const ticketTypes = [
      {
        id: "normal",
        label: "Vé Thường",
        price: 15e4,
        desc: "Người lớn (trên 12 tuổi)",
        includes: ["Tham quan toàn khu", "Bản đồ tham quan", "Wifi khu vực trung tâm"],
        badge: ""
      },
      {
        id: "child",
        label: "Vé Trẻ Em",
        price: 75e3,
        desc: "Trẻ em 4–12 tuổi",
        includes: ["Tham quan toàn khu", "Bản đồ tham quan", "Khu vui chơi trẻ em"],
        badge: ""
      },
      {
        id: "family",
        label: "Vé Gia Đình",
        price: 4e5,
        desc: "2 người lớn + 2 trẻ em",
        includes: ["Tham quan toàn khu", "Picnic set miễn phí", "Ưu tiên đặt chỗ sự kiện", "Giảm 20% dịch vụ ăn uống"],
        badge: "Phổ biến"
      },
      {
        id: "group",
        label: "Vé Nhóm",
        price: 12e4,
        desc: "Từ 10 người (tính/người)",
        includes: ["Tham quan toàn khu", "Hướng dẫn viên riêng", "Xe đưa đón nội bộ"],
        badge: "Tiết kiệm"
      }
    ];
    const selected = ref("family");
    const visitDate = ref("");
    const quantity = ref(1);
    const visitorName = ref("");
    const visitorPhone = ref("");
    const submitted = ref(false);
    const selectedTicket = computed(() => ticketTypes.find((t) => t.id === selected.value));
    const totalPrice = computed(() => (selectedTicket.value?.price ?? 0) * quantity.value);
    function formatPrice(n) {
      return n.toLocaleString("vi-VN") + "₫";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container section" }, _attrs))}><div class="section-head center"><div class="section-eyebrow">Vé tham quan</div><h1 class="section-title">Đặt vé online</h1><p class="section-sub"> Chọn loại vé, ngày tham quan và điền thông tin. Nhận mã QR xác nhận qua SMS ngay lập tức. </p></div>`);
      if (unref(submitted)) {
        _push(`<div class="max-w-md mx-auto rounded-2xl border border-green-500/30 bg-green-500/10 p-10 text-center"><div class="text-5xl mb-4">🎉</div><h2 class="text-xl font-bold text-[--ui-color-text-primary]">Đặt vé thành công!</h2><p class="mt-2 text-sm text-[--ui-color-text-muted]">Mã QR đã được gửi đến <strong>${ssrInterpolate(unref(visitorPhone))}</strong>. Vui lòng xuất trình khi vào cổng.</p><div class="mt-6 p-4 rounded-xl bg-[--ui-color-bg-muted] font-mono text-2xl tracking-widest text-center text-[--ui-color-brand]"> TB${ssrInterpolate(Math.random().toString(36).slice(2, 8).toUpperCase())}</div><button type="button" class="mt-6 text-sm text-[--ui-color-brand] hover:underline">Đặt thêm vé</button></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 gap-8 lg:grid-cols-3"><div class="lg:col-span-2 space-y-4"><h2 class="font-bold text-[--ui-color-text-primary] mb-4">Chọn loại vé</h2><!--[-->`);
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
        _push(`<!--]--></div><div class="rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] p-6 h-fit sticky top-20"><h2 class="font-bold text-[--ui-color-text-primary] mb-5">Thông tin đặt vé</h2><form class="space-y-4"><div><label class="text-xs font-semibold text-[--ui-color-text-secondary] block mb-1">Ngày tham quan *</label><input type="date"${ssrRenderAttr("value", unref(visitDate))} required class="w-full rounded-lg border border-[--ui-color-border] bg-[--ui-color-bg] px-3 py-2.5 text-sm text-[--ui-color-text-primary] outline-none focus:border-[--ui-color-brand] focus:ring-2 focus:ring-[--ui-color-brand]/20 transition"></div><div><label class="text-xs font-semibold text-[--ui-color-text-secondary] block mb-1">Số lượng vé</label><div class="flex items-center gap-3"><button type="button" class="grid h-9 w-9 place-items-center rounded-lg border border-[--ui-color-border] text-lg font-bold transition hover:bg-[--ui-color-bg-muted]">−</button><span class="text-lg font-bold text-[--ui-color-text-primary] w-8 text-center">${ssrInterpolate(unref(quantity))}</span><button type="button" class="grid h-9 w-9 place-items-center rounded-lg border border-[--ui-color-border] text-lg font-bold transition hover:bg-[--ui-color-bg-muted]">+</button></div></div><div><label class="text-xs font-semibold text-[--ui-color-text-secondary] block mb-1">Họ tên *</label><input type="text"${ssrRenderAttr("value", unref(visitorName))} placeholder="Nguyễn Văn A" required class="w-full rounded-lg border border-[--ui-color-border] bg-[--ui-color-bg] px-3 py-2.5 text-sm text-[--ui-color-text-primary] outline-none focus:border-[--ui-color-brand] focus:ring-2 focus:ring-[--ui-color-brand]/20 transition"></div><div><label class="text-xs font-semibold text-[--ui-color-text-secondary] block mb-1">Số điện thoại *</label><input type="tel"${ssrRenderAttr("value", unref(visitorPhone))} placeholder="090x xxx xxx" required class="w-full rounded-lg border border-[--ui-color-border] bg-[--ui-color-bg] px-3 py-2.5 text-sm text-[--ui-color-text-primary] outline-none focus:border-[--ui-color-brand] focus:ring-2 focus:ring-[--ui-color-brand]/20 transition"></div><div class="rounded-xl bg-[--ui-color-bg-muted] p-4 space-y-2"><div class="flex justify-between text-sm"><span class="text-[--ui-color-text-muted]">${ssrInterpolate(unref(selectedTicket)?.label)}</span><span class="text-[--ui-color-text-secondary]">${ssrInterpolate(formatPrice(unref(selectedTicket)?.price ?? 0))} × ${ssrInterpolate(unref(quantity))}</span></div><div class="flex justify-between font-bold text-[--ui-color-text-primary] border-t border-[--ui-color-border] pt-2 mt-2"><span>Tổng cộng</span><span class="text-[--ui-color-brand] text-lg">${ssrInterpolate(formatPrice(unref(totalPrice)))}</span></div></div><button type="submit" class="w-full rounded-xl bg-gradient-to-r from-[#1a4a2e] to-[#2d7a4f] py-3 text-sm font-bold text-white shadow-md transition hover:opacity-90 active:scale-[0.98]"> Đặt vé — ${ssrInterpolate(formatPrice(unref(totalPrice)))}</button><p class="text-center text-xs text-[--ui-color-text-muted]">🔒 Thanh toán an toàn · Hoàn tiền 100% nếu hủy trước 24h</p></form></div></div>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=tickets-ChZBhEmS.js.map
