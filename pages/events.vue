<script setup lang="ts">
/**
 * pages/events.vue — Sự kiện tại Sông Vân Art Space
 */
definePageMeta({ layout: 'default' });
useHead({
  title: 'Sự Kiện — Sông Vân Art Space',
  meta: [{ name: 'description', content: 'Triển lãm và hoạt động điêu khắc đá đương đại tại Sông Vân Art Space, Ninh Bình.' }],
});

const activeFilter = ref('all');
const filters = [
  { id: 'all',      label: 'Tất cả' },
  { id: 'exhibition', label: 'Triển lãm' },
  { id: 'workshop', label: 'Workshop' },
  { id: 'talk', label: 'Trò chuyện' },
];

const allEvents = [
  { id: 1, title: 'Triển lãm điêu khắc “Sông Vân”', date: '2026-03-22', tag: 'exhibition', tagLabel: 'Triển lãm', status: 'past', seats: 0, capacity: 1, price: 0, img: '' },
];

const filtered = computed(() =>
  activeFilter.value === 'all'
    ? allEvents
    : allEvents.filter(e => e.tag === activeFilter.value),
);

const upcoming = computed(() => filtered.value.filter(e => e.status === 'upcoming'));
const past     = computed(() => filtered.value.filter(e => e.status === 'past'));

function formatDate(d: string) {
  const dt = new Date(d);
  return dt.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatPrice(n: number) { return n.toLocaleString('vi-VN') + '₫'; }
function seatsPercent(e: typeof allEvents[0]) { return Math.round(((e.capacity - e.seats) / e.capacity) * 100); }
function seatsColor(e: typeof allEvents[0]) {
  const p = e.seats / e.capacity;
  if (p > 0.5) return 'text-green-500';
  if (p > 0.2) return 'text-amber-500';
  return 'text-red-500';
}
</script>

<template>
  <div class="container section">

    <div class="section-head">
      <div class="section-eyebrow">Lịch trình</div>
      <h1 class="section-title">Sự kiện tại Sông Vân</h1>
      <p class="section-sub">
        Theo dõi các triển lãm, workshop và cuộc trò chuyện xoay quanh điêu khắc, vật liệu và làng nghề đá.
      </p>
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap gap-2 mb-10">
      <button v-for="f in filters" :key="f.id" type="button"
        :class="['rounded-full px-4 py-1.5 text-sm font-semibold transition',
          activeFilter === f.id
            ? 'bg-[--ui-color-brand] text-white'
            : 'border border-[--ui-color-border] text-[--ui-color-text-secondary] hover:border-[--ui-color-brand]/40 hover:text-[--ui-color-brand]']"
        @click="activeFilter = f.id">
        {{ f.label }}
      </button>
    </div>

    <!-- Upcoming events -->
    <section v-if="upcoming.length">
      <h2 class="text-sm font-bold uppercase tracking-widest text-[--ui-color-text-muted] mb-5">Sắp diễn ra</h2>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="event in upcoming" :key="event.id"
          class="group overflow-hidden rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] transition hover:shadow-lg hover:border-[--ui-color-brand]/30">
          <!-- Color header based on tag -->
          <div :class="['h-1.5', {
            'bg-gradient-to-r from-[#1a4a2e] to-[#2d7a4f]': event.tag === 'outdoor',
            'bg-gradient-to-r from-purple-700 to-indigo-500': event.tag === 'science',
            'bg-gradient-to-r from-amber-600 to-orange-400': event.tag === 'music',
            'bg-gradient-to-r from-rose-600 to-pink-400':    event.tag === 'food',
          }]" />
          <div class="p-5">
            <div class="flex items-center justify-between mb-3">
              <span class="rounded-full bg-[--ui-color-bg-muted] px-2.5 py-0.5 text-xs font-semibold text-[--ui-color-text-secondary]">{{ event.tagLabel }}</span>
              <span class="text-xs font-semibold text-[--ui-color-text-muted]">{{ formatDate(event.date) }}</span>
            </div>
            <h3 class="font-bold text-[--ui-color-text-primary] leading-snug">{{ event.title }}</h3>
            <!-- Seats bar -->
            <div class="mt-3">
              <div class="flex justify-between text-xs mb-1">
                <span class="text-[--ui-color-text-muted]">Chỗ còn lại</span>
                <span :class="['font-semibold', seatsColor(event)]">{{ event.seats }} / {{ event.capacity }}</span>
              </div>
              <div class="h-1.5 rounded-full bg-[--ui-color-bg-muted] overflow-hidden">
                <div class="h-full rounded-full bg-[--ui-color-brand] transition-all"
                  :style="{ width: seatsPercent(event) + '%' }" />
              </div>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <p class="font-bold text-[--ui-color-brand]">{{ formatPrice(event.price) }}<span class="text-xs font-normal text-[--ui-color-text-muted]">/người</span></p>
              <button type="button"
                class="rounded-lg bg-[--ui-color-brand] px-4 py-1.5 text-xs font-bold text-white transition hover:opacity-90 active:scale-[0.97]">
                Đăng ký
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Past events -->
    <section v-if="past.length" class="mt-14">
      <h2 class="text-sm font-bold uppercase tracking-widest text-[--ui-color-text-muted] mb-5">Đã kết thúc</h2>
      <div class="space-y-3">
        <div v-for="event in past" :key="event.id"
          class="flex items-center gap-4 rounded-xl border border-[--ui-color-border] bg-[--ui-color-surface] px-5 py-4 opacity-60">
          <div class="flex-1 min-w-0">
            <p class="font-semibold text-[--ui-color-text-primary] truncate">{{ event.title }}</p>
            <p class="text-xs text-[--ui-color-text-muted] mt-0.5">{{ event.tagLabel }} · {{ formatDate(event.date) }}</p>
          </div>
          <span class="shrink-0 rounded-full border border-[--ui-color-border] px-3 py-1 text-xs text-[--ui-color-text-muted]">Đã kết thúc</span>
        </div>
      </div>
    </section>

    <div v-if="!upcoming.length && !past.length" class="py-20 text-center text-[--ui-color-text-muted]">
      Không có sự kiện nào phù hợp với bộ lọc này.
    </div>
  </div>
</template>
