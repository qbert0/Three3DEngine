import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
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
  __name: "events",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Sự Kiện — Trảng Bay",
      meta: [{ name: "description", content: "Các sự kiện sinh thái, âm nhạc, trekking tại khu du lịch Trảng Bay. Đăng ký online." }]
    });
    const activeFilter = ref("all");
    const filters = [
      { id: "all", label: "Tất cả" },
      { id: "outdoor", label: "Outdoor" },
      { id: "music", label: "Âm nhạc" },
      { id: "science", label: "Thiên văn" },
      { id: "food", label: "Ẩm thực" }
    ];
    const allEvents = [
      { id: 1, title: "Đêm Ngắm Sao Trảng Bay", date: "2026-09-20", tag: "science", tagLabel: "Thiên văn", status: "upcoming", seats: 30, capacity: 50, price: 2e5, img: "" },
      { id: 2, title: "Trekking Rừng Nguyên Sinh 12km", date: "2026-09-27", tag: "outdoor", tagLabel: "Outdoor", status: "upcoming", seats: 8, capacity: 20, price: 35e4, img: "" },
      { id: 3, title: "Lễ Hội Âm Nhạc Xanh #3", date: "2026-10-04", tag: "music", tagLabel: "Âm nhạc", status: "upcoming", seats: 150, capacity: 200, price: 12e4, img: "" },
      { id: 4, title: "Workshop Nhiếp Ảnh Thiên Nhiên", date: "2026-10-11", tag: "outdoor", tagLabel: "Outdoor", status: "upcoming", seats: 12, capacity: 15, price: 45e4, img: "" },
      { id: 5, title: "Ẩm Thực Rừng — Mâm Cơm Địa Phương", date: "2026-09-14", tag: "food", tagLabel: "Ẩm thực", status: "past", seats: 0, capacity: 40, price: 28e4, img: "" },
      { id: 6, title: "Chạy Trail Trảng Bay 5km", date: "2026-09-07", tag: "outdoor", tagLabel: "Outdoor", status: "past", seats: 0, capacity: 100, price: 1e5, img: "" }
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
      return n.toLocaleString("vi-VN") + "₫";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container section" }, _attrs))}><div class="section-head"><div class="section-eyebrow">Lịch trình</div><h1 class="section-title">Sự kiện tại Trảng Bay</h1><p class="section-sub"> Trekking, đêm ngắm sao, âm nhạc acoustic và nhiều trải nghiệm sinh thái đặc sắc. Cập nhật hàng tháng. </p></div><div class="flex flex-wrap gap-2 mb-10"><!--[-->`);
      ssrRenderList(filters, (f) => {
        _push(`<button type="button" class="${ssrRenderClass([
          "rounded-full px-4 py-1.5 text-sm font-semibold transition",
          unref(activeFilter) === f.id ? "bg-[--ui-color-brand] text-white" : "border border-[--ui-color-border] text-[--ui-color-text-secondary] hover:border-[--ui-color-brand]/40 hover:text-[--ui-color-brand]"
        ])}">${ssrInterpolate(f.label)}</button>`);
      });
      _push(`<!--]--></div>`);
      if (unref(upcoming).length) {
        _push(`<section><h2 class="text-sm font-bold uppercase tracking-widest text-[--ui-color-text-muted] mb-5">Sắp diễn ra</h2><div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(upcoming), (event) => {
          _push(`<article class="group overflow-hidden rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] transition hover:shadow-lg hover:border-[--ui-color-brand]/30"><div class="${ssrRenderClass(["h-1.5", {
            "bg-gradient-to-r from-[#1a4a2e] to-[#2d7a4f]": event.tag === "outdoor",
            "bg-gradient-to-r from-purple-700 to-indigo-500": event.tag === "science",
            "bg-gradient-to-r from-amber-600 to-orange-400": event.tag === "music",
            "bg-gradient-to-r from-rose-600 to-pink-400": event.tag === "food"
          }])}"></div><div class="p-5"><div class="flex items-center justify-between mb-3"><span class="rounded-full bg-[--ui-color-bg-muted] px-2.5 py-0.5 text-xs font-semibold text-[--ui-color-text-secondary]">${ssrInterpolate(event.tagLabel)}</span><span class="text-xs font-semibold text-[--ui-color-text-muted]">${ssrInterpolate(formatDate(event.date))}</span></div><h3 class="font-bold text-[--ui-color-text-primary] leading-snug">${ssrInterpolate(event.title)}</h3><div class="mt-3"><div class="flex justify-between text-xs mb-1"><span class="text-[--ui-color-text-muted]">Chỗ còn lại</span><span class="${ssrRenderClass(["font-semibold", seatsColor(event)])}">${ssrInterpolate(event.seats)} / ${ssrInterpolate(event.capacity)}</span></div><div class="h-1.5 rounded-full bg-[--ui-color-bg-muted] overflow-hidden"><div class="h-full rounded-full bg-[--ui-color-brand] transition-all" style="${ssrRenderStyle({ width: seatsPercent(event) + "%" })}"></div></div></div><div class="mt-4 flex items-center justify-between"><p class="font-bold text-[--ui-color-brand]">${ssrInterpolate(formatPrice(event.price))}<span class="text-xs font-normal text-[--ui-color-text-muted]">/người</span></p><button type="button" class="rounded-lg bg-[--ui-color-brand] px-4 py-1.5 text-xs font-bold text-white transition hover:opacity-90 active:scale-[0.97]"> Đăng ký </button></div></div></article>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(past).length) {
        _push(`<section class="mt-14"><h2 class="text-sm font-bold uppercase tracking-widest text-[--ui-color-text-muted] mb-5">Đã kết thúc</h2><div class="space-y-3"><!--[-->`);
        ssrRenderList(unref(past), (event) => {
          _push(`<div class="flex items-center gap-4 rounded-xl border border-[--ui-color-border] bg-[--ui-color-surface] px-5 py-4 opacity-60"><div class="flex-1 min-w-0"><p class="font-semibold text-[--ui-color-text-primary] truncate">${ssrInterpolate(event.title)}</p><p class="text-xs text-[--ui-color-text-muted] mt-0.5">${ssrInterpolate(event.tagLabel)} · ${ssrInterpolate(formatDate(event.date))}</p></div><span class="shrink-0 rounded-full border border-[--ui-color-border] px-3 py-1 text-xs text-[--ui-color-text-muted]">Đã kết thúc</span></div>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(upcoming).length && !unref(past).length) {
        _push(`<div class="py-20 text-center text-[--ui-color-text-muted]"> Không có sự kiện nào phù hợp với bộ lọc này. </div>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=events-CixTEtzv.js.map
