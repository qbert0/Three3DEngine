<script setup lang="ts">
/**
 * pages/about.vue — Giới thiệu khu du lịch Trảng Bay
 */
definePageMeta({ layout: 'default' });
useHead({
  title: 'Giới Thiệu — Trảng Bay',
  meta: [{ name: 'description', content: 'Câu chuyện, sứ mệnh và đội ngũ của khu du lịch sinh thái Trảng Bay.' }],
});

const milestones = [
  { year: '2018', title: 'Thành lập', desc: 'Khởi đầu từ 120 ha rừng tự nhiên, với sứ mệnh bảo tồn và phát triển du lịch bền vững.' },
  { year: '2020', title: 'Mở rộng', desc: 'Mở rộng lên 600 ha, xây dựng hệ thống đường mòn sinh thái và khu nghỉ dưỡng xanh.' },
  { year: '2023', title: 'Số hóa', desc: 'Ra mắt hệ thống tour ảo 360°, cho phép du khách khám phá Trảng Bay từ mọi nơi trên thế giới.' },
  { year: '2026', title: 'Hôm nay', desc: 'Hơn 1.200 ha, 15 điểm tham quan, đón tiếp hàng nghìn du khách mỗi tháng.' },
];

const values = [
  { icon: '🌿', title: 'Bảo tồn thiên nhiên', desc: '10% doanh thu được dùng để tái trồng rừng và bảo tồn đa dạng sinh học.' },
  { icon: '🤝', title: 'Cộng đồng địa phương', desc: 'Ưu tiên tuyển dụng và phát triển kỹ năng cho người dân bản địa.' },
  { icon: '♻️', title: 'Không rác thải nhựa', desc: 'Toàn bộ khu không dùng đồ nhựa dùng một lần kể từ 2022.' },
  { icon: '📚', title: 'Giáo dục sinh thái', desc: 'Chương trình tham quan giáo dục cho học sinh các cấp, miễn phí cho trường công lập.' },
];
</script>

<template>
  <div>

    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-[#0d1a12] to-[#1a3a22] py-24 text-white">
      <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=1%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      <div class="relative container text-center">
        <div class="section-eyebrow justify-center text-emerald-400">Câu chuyện chúng tôi</div>
        <h1 class="section-title text-4xl sm:text-5xl lg:text-6xl text-white">Trảng Bay —<br />Sống cùng thiên nhiên</h1>
        <p class="section-sub text-white/70 max-w-2xl mx-auto">
          Hơn 8 năm phát triển, chúng tôi tin rằng du lịch và bảo tồn không mâu thuẫn — chúng có thể cùng phát triển khi được thiết kế đúng cách.
        </p>
      </div>
    </section>

    <!-- Mission -->
    <section class="container section">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-3">Sứ mệnh</p>
          <h2 class="text-3xl font-bold text-[--ui-color-text-primary] leading-tight">
            Bảo tồn thiên nhiên,<br />Nâng tầm trải nghiệm
          </h2>
          <p class="mt-5 text-[--ui-color-text-muted] leading-relaxed">
            Trảng Bay được thành lập với mục tiêu bảo vệ 1.200 ha rừng nguyên sinh trong khi tạo ra nguồn thu bền vững cho cộng đồng địa phương thông qua du lịch sinh thái có trách nhiệm.
          </p>
          <p class="mt-4 text-[--ui-color-text-muted] leading-relaxed">
            Mỗi trải nghiệm tại đây được thiết kế để kết nối con người với thiên nhiên một cách sâu sắc và có ý nghĩa — từ tour 360° số hóa đến những chuyến trekking mặt đất.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="v in values" :key="v.title"
            class="rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] p-5">
            <div class="text-2xl mb-3">{{ v.icon }}</div>
            <h3 class="font-bold text-sm text-[--ui-color-text-primary]">{{ v.title }}</h3>
            <p class="mt-1.5 text-xs text-[--ui-color-text-muted] leading-relaxed">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="bg-[--ui-color-surface] border-y border-[--ui-color-border] py-16">
      <div class="mx-auto max-w-5xl px-5 lg:px-8">
        <div class="text-center mb-12">
          <p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-2">Lịch sử</p>
          <h2 class="text-2xl font-bold text-[--ui-color-text-primary]">Hành trình phát triển</h2>
        </div>
        <div class="relative">
          <div class="absolute left-1/2 top-0 bottom-0 w-px bg-[--ui-color-border] hidden lg:block" />
          <div class="space-y-8 lg:space-y-0">
            <div v-for="(m, i) in milestones" :key="m.year"
              :class="['relative lg:flex lg:items-center lg:gap-8', i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse']">
              <!-- Year badge (center) -->
              <div class="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-[--ui-color-brand] text-xs font-bold text-white shadow-md">
                {{ m.year.slice(2) }}'
              </div>
              <!-- Content -->
              <div :class="['lg:w-[calc(50%-2.5rem)] rounded-2xl border border-[--ui-color-border] bg-[--ui-color-bg] p-5', i % 2 === 0 ? 'lg:text-right' : '']">
                <p class="text-xs font-bold text-[--ui-color-brand] mb-1">{{ m.year }}</p>
                <h3 class="font-bold text-[--ui-color-text-primary]">{{ m.title }}</h3>
                <p class="mt-1 text-sm text-[--ui-color-text-muted] leading-relaxed">{{ m.desc }}</p>
              </div>
              <div class="hidden lg:block lg:w-[calc(50%-2.5rem)]" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="mx-auto max-w-5xl px-5 py-20 lg:px-8">
      <div class="text-center mb-10">
        <p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-brand] mb-2">Liên hệ</p>
        <h2 class="text-2xl font-bold text-[--ui-color-text-primary]">Chúng tôi luôn sẵn sàng hỗ trợ</h2>
      </div>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <a v-for="c in [
          { icon: '📞', label: 'Hotline', value: '0900 000 000', sub: '7:00 – 18:00 hàng ngày', href: 'tel:0900000000' },
          { icon: '✉️', label: 'Email', value: 'info@trangbay.vn', sub: 'Phản hồi trong 4 giờ', href: 'mailto:info@trangbay.vn' },
          { icon: '📍', label: 'Địa chỉ', value: 'Rừng Núi Trảng Bay', sub: 'Việt Nam', href: '#' },
        ]" :key="c.label" :href="c.href"
          class="rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] p-6 text-center transition hover:border-[--ui-color-brand]/40 hover:shadow-md">
          <div class="text-3xl mb-3">{{ c.icon }}</div>
          <p class="text-xs font-bold uppercase tracking-widest text-[--ui-color-text-muted]">{{ c.label }}</p>
          <p class="mt-1 font-bold text-[--ui-color-text-primary]">{{ c.value }}</p>
          <p class="text-xs text-[--ui-color-text-muted] mt-0.5">{{ c.sub }}</p>
        </a>
      </div>
    </section>

  </div>
</template>
