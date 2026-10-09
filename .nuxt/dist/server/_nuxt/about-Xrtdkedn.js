import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-vl98-hf4.js";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/@unhead/vue/dist/index.mjs";
import "../server.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ofetch/dist/node.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unctx/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/h3/dist/index.mjs";
import "pinia";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ufo/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/klona/dist/index.mjs";
const _imports_0 = publicAssetsURL("/images/song-van/sculpture-garden.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Giới Thiệu — Sông Vân Art Space",
      meta: [{ name: "description", content: "Câu chuyện Sông Vân Art Space — không gian điêu khắc đá đương đại giữa làng nghề Ninh Vân, Ninh Bình." }]
    });
    const milestones = [
      { year: "2018", title: "Về với đá", desc: "Lương Gia Art Space khởi động hoạt động điêu khắc đá đương đại với workshop “Về với đá”." },
      { year: "2021", title: "Biến Chuyển", desc: "Workshop và triển lãm điêu khắc đá “Biến Chuyển” tiếp tục mở rộng đối thoại nghệ thuật tại làng nghề." },
      { year: "2026", title: "Sông Vân Art Space", desc: "Không gian mang tên mới, hướng đến một nơi trưng bày hoàn chỉnh và hòa đồng hơn với cảnh quan sống." },
      { year: "2026", title: "Triển lãm “Sông Vân”", desc: "Lê Thị Hiền và Lương Trịnh giới thiệu hơn 30 tác phẩm điêu khắc đá đương đại." }
    ];
    const values = [
      { icon: "🪨", title: "Tôn trọng vật liệu", desc: "Đá tự nhiên được lắng nghe như một chất liệu có ký ức, cấu trúc và tiếng nói riêng." },
      { icon: "✦", title: "Ngôn ngữ đương đại", desc: "Tạo một không gian cho tư duy hình khối tối giản, tự do và giàu tính tự thân." },
      { icon: "🤝", title: "Kết nối làng nghề", desc: "Đặt nghệ thuật đương đại trong mạch nghề đá lâu đời của Ninh Vân." },
      { icon: "◯", title: "Không gian mở", desc: "Để tác phẩm đối thoại tự nhiên với ánh sáng, cây xanh, mặt nước và người xem." }
    ];
    const artists = [
      {
        name: "Lê Thị Hiền",
        role: "Nhà điêu khắc · Trừu tượng hình học",
        image: "/images/song-van/le-thi-hien.jpg",
        alt: "Nhà điêu khắc Lê Thị Hiền giới thiệu tác phẩm tại Sông Vân Art Space",
        bio: "Một gương mặt bản lề của điêu khắc đương đại Việt Nam. Thực hành của bà đi từ biểu hình đến phi biểu hình, sử dụng những chuyển động gấp, xoắn, đan và đảo chiều để làm vật liệu nặng trở nên thanh thoát.",
        note: "Tại triển lãm “Sông Vân”, bà giới thiệu 15 tác phẩm bằng cẩm thạch trắng, đá đen và granite."
      },
      {
        name: "Lương Trịnh",
        role: "Nhà điêu khắc · Người sáng lập không gian",
        image: "/images/song-van/luong-trinh.jpg",
        alt: "Nhà điêu khắc Lương Trịnh phác thảo tác phẩm tại Sông Vân Art Space",
        bio: "Sinh trưởng trong gia đình có truyền thống làm nghề đá tại Ninh Vân và được đào tạo tại Trường Đại học Mỹ thuật Việt Nam. Anh kết nối kỹ nghệ bản địa với một ngôn ngữ điêu khắc hiện đại, kiệm lời và giàu chất kiến trúc.",
        note: "Bộ “Bóng núi” gồm 21 tác phẩm đá đen, chắt lọc từ núi non, mây trời và kiến trúc cổ Ninh Bình."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative overflow-hidden bg-gradient-to-br from-[#0d1a12] to-[#1a3a22] py-24 text-white"><div class="absolute inset-0 opacity-10 bg-[url(&#39;data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=1%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&#39;)]"></div><div class="relative container text-center"><div class="section-eyebrow justify-center text-emerald-400">Câu chuyện chúng tôi</div><h1 class="section-title text-4xl sm:text-5xl lg:text-6xl text-white">Sông Vân —<br>Một không gian cho đá</h1><p class="section-sub text-white/70 max-w-2xl mx-auto"> Một điểm gặp giữa truyền thống chế tác đá Ninh Vân, thực hành điêu khắc đương đại và cảnh quan Ninh Bình. </p></div></section><section class="container section"><div class="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center"><div><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-3">Sứ mệnh</p><h2 class="text-3xl font-bold text-[--ui-color-text-primary] leading-tight"> Kết nối truyền thống,<br>Mở lối đương đại </h2><p class="mt-5 text-[--ui-color-text-muted] leading-relaxed"> Sông Vân Art Space phát triển từ không gian sống và sáng tác của gia đình nghệ sĩ Lương Trịnh, giữa lòng làng nghề đá Ninh Vân. </p><p class="mt-4 text-[--ui-color-text-muted] leading-relaxed"> Không gian hướng đến việc đưa điêu khắc đá đương đại đến gần hơn với đời sống, đồng thời tạo nơi gặp gỡ giữa nghệ sĩ, người thợ, tác phẩm và công chúng. </p></div><div class="grid grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(values, (v) => {
        _push(`<div class="rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] p-5"><div class="text-2xl mb-3">${ssrInterpolate(v.icon)}</div><h3 class="font-bold text-sm text-[--ui-color-text-primary]">${ssrInterpolate(v.title)}</h3><p class="mt-1.5 text-xs text-[--ui-color-text-muted] leading-relaxed">${ssrInterpolate(v.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-[--ui-color-surface] border-y border-[--ui-color-border] py-20"><div class="mx-auto max-w-6xl px-5 lg:px-8"><div class="mb-12 max-w-3xl"><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-3">Nghệ sĩ</p><h2 class="text-3xl font-bold text-[--ui-color-text-primary]">Hai thế hệ, một cuộc đối thoại với đá</h2><p class="mt-4 text-[--ui-color-text-muted] leading-relaxed"> Lê Thị Hiền và Lương Trịnh gặp nhau ở tinh thần hình học, tối giản và sự tôn trọng tính tự thân của vật liệu — một người đi qua nhiều môi trường nghệ thuật trở về làng, một người từ làng nghề bước ra thế giới. </p></div><div class="grid grid-cols-1 gap-8 lg:grid-cols-2"><!--[-->`);
      ssrRenderList(artists, (artist) => {
        _push(`<article class="overflow-hidden rounded-2xl border border-[--ui-color-border] bg-[--ui-color-bg]"><img${ssrRenderAttr("src", artist.image)}${ssrRenderAttr("alt", artist.alt)} class="h-72 w-full object-cover"><div class="p-6"><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand]">${ssrInterpolate(artist.role)}</p><h3 class="mt-2 text-2xl font-bold text-[--ui-color-text-primary]">${ssrInterpolate(artist.name)}</h3><p class="mt-4 text-sm leading-relaxed text-[--ui-color-text-muted]">${ssrInterpolate(artist.bio)}</p><p class="mt-4 border-l-2 border-[--ui-color-brand] pl-4 text-sm font-medium leading-relaxed text-[--ui-color-text-secondary]">${ssrInterpolate(artist.note)}</p></div></article>`);
      });
      _push(`<!--]--></div><p class="mt-5 text-xs text-[--ui-color-text-muted]">Ảnh: Ngọc Linh / Báo Ninh Bình.</p></div></section><section class="container section"><div class="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center"><img${ssrRenderAttr("src", _imports_0)} alt="Toàn cảnh khu vườn điêu khắc Sông Vân bên mặt nước" class="h-full min-h-80 w-full rounded-2xl object-cover"><div><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-3">Ninh Vân · Ninh Bình</p><h2 class="text-3xl font-bold text-[--ui-color-text-primary]">Một art space ở ngay trong mạch sống của làng đá</h2><p class="mt-5 text-[--ui-color-text-muted] leading-relaxed"> Sông Vân Art Space nằm tại Xuân Phúc, phường Nam Hoa Lư, trong vùng nghề đá Ninh Vân. Xưởng, tư gia, hai phòng trưng bày và khu vườn điêu khắc cùng tồn tại bên một nhánh sông Vân, để tác phẩm đối thoại trực tiếp với ánh sáng, mặt nước và đời sống địa phương. </p><dl class="mt-6 grid grid-cols-2 gap-4 text-sm"><div class="rounded-xl bg-[--ui-color-bg-muted] p-4"><dt class="text-[--ui-color-text-muted]">Không gian</dt><dd class="mt-1 font-bold">02 phòng · 01 khu vườn</dd></div><div class="rounded-xl bg-[--ui-color-bg-muted] p-4"><dt class="text-[--ui-color-text-muted]">Tọa độ</dt><dd class="mt-1 font-bold">20°12′29.4″N<br>105°57′12.1″E</dd></div></dl><a href="https://maps.app.goo.gl/Yzgs3xcSwHCcgq2L9" target="_blank" rel="noreferrer" class="mt-6 inline-flex font-bold text-[--ui-color-brand] hover:underline">Mở Google Maps ↗</a></div></div></section><section class="bg-[--ui-color-surface] border-y border-[--ui-color-border] py-16"><div class="mx-auto max-w-5xl px-5 lg:px-8"><div class="text-center mb-12"><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-2">Lịch sử</p><h2 class="text-2xl font-bold text-[--ui-color-text-primary]">Hành trình phát triển</h2></div><div class="relative"><div class="absolute left-1/2 top-0 bottom-0 w-px bg-[--ui-color-border] hidden lg:block"></div><div class="space-y-8 lg:space-y-0"><!--[-->`);
      ssrRenderList(milestones, (m, i) => {
        _push(`<div class="${ssrRenderClass(["relative lg:flex lg:items-center lg:gap-8", i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"])}"><div class="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-[--ui-color-brand] text-xs font-bold text-white shadow-md">${ssrInterpolate(m.year.slice(2))}&#39; </div><div class="${ssrRenderClass(["lg:w-[calc(50%-2.5rem)] rounded-2xl border border-[--ui-color-border] bg-[--ui-color-bg] p-5", i % 2 === 0 ? "lg:text-right" : ""])}"><p class="text-xs font-bold text-[--ui-color-brand] mb-1">${ssrInterpolate(m.year)}</p><h3 class="font-bold text-[--ui-color-text-primary]">${ssrInterpolate(m.title)}</h3><p class="mt-1 text-sm text-[--ui-color-text-muted] leading-relaxed">${ssrInterpolate(m.desc)}</p></div><div class="hidden lg:block lg:w-[calc(50%-2.5rem)]"></div></div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="mx-auto max-w-5xl px-5 py-20 lg:px-8"><div class="text-center mb-10"><p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-2">Liên hệ</p><h2 class="text-2xl font-bold text-[--ui-color-text-primary]">Chúng tôi luôn sẵn sàng hỗ trợ</h2></div><div class="grid grid-cols-1 gap-5 sm:grid-cols-3"><!--[-->`);
      ssrRenderList([
        { icon: "◷", label: "Lịch tham quan", value: "Đặt lịch trước khi đến", sub: "Không gian sẽ xác nhận thời gian", href: "/tickets" },
        { icon: "☎", label: "Điện thoại", value: "+84 988 793 456", sub: "Liên hệ Sông Vân Art Space", href: "tel:+84988793456" },
        { icon: "📍", label: "Địa chỉ", value: "Xuân Phúc", sub: "Phường Nam Hoa Lư, Ninh Bình", href: "https://maps.app.goo.gl/Yzgs3xcSwHCcgq2L9" }
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
export {
  _sfc_main as default
};
//# sourceMappingURL=about-Xrtdkedn.js.map
