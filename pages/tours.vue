<script setup lang="ts">
/**
 * pages/tours.vue — Danh sách tour 360° của khu Trảng Bay
 */
import type { TourEntry } from '~/types/tour';

definePageMeta({ layout: 'default' });
useHead({
  title: 'Tour 360° — Trảng Bay',
  meta: [{ name: 'description', content: 'Khám phá các tour panorama 360° tại khu du lịch sinh thái Trảng Bay.' }],
});

const { data, pending } = await useFetch<{ items: TourEntry[] }>('/api/tours');
const tours = computed<TourEntry[]>(() => data.value?.items ?? []);
</script>

<template>
  <div class="container section">

    <!-- Header -->
    <div class="section-head">
      <div class="section-eyebrow">Khám phá</div>
      <h1 class="section-title">Tour 360° Ảo</h1>
      <p class="section-sub">
        Trải nghiệm toàn cảnh khu du lịch Trảng Bay qua ảnh panorama 360° độ phân giải cao. Di chuyển tự do, khám phá từng điểm nhìn.
      </p>
    </div>

    <!-- Tip -->
    <div class="mb-8 flex items-center gap-3 rounded-xl bg-[--ui-color-brand-muted] border border-[--ui-color-brand]/20 p-4">
      <div class="text-xl">🌐</div>
      <p class="text-sm text-[--ui-color-text-secondary]">
        <strong class="text-[--ui-color-text-primary]">Tip:</strong>
        Kéo chuột để xoay, cuộn để zoom. Nhấn các mũi tên xanh để di chuyển giữa các điểm tham quan.
      </p>
    </div>

    <!-- Loading -->
    <div v-if="pending" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="i in 3" :key="i" class="rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] overflow-hidden">
        <div class="h-48 bg-[--ui-color-bg-muted] animate-pulse" />
        <div class="p-5 space-y-3">
          <div class="h-4 w-3/4 rounded bg-[--ui-color-bg-muted] animate-pulse" />
          <div class="h-3 rounded bg-[--ui-color-bg-muted] animate-pulse" />
          <div class="h-3 w-1/2 rounded bg-[--ui-color-bg-muted] animate-pulse" />
        </div>
      </div>
    </div>

    <!-- Empty -->
    <div v-else-if="!tours.length" class="py-20 text-center">
      <div class="text-5xl mb-4">🗺️</div>
      <p class="font-bold text-[--ui-color-text-primary]">Chưa có tour nào</p>
      <p class="mt-2 text-sm text-[--ui-color-text-muted]">Thêm file .yaml vào thư mục /tours để bắt đầu.</p>
    </div>

    <!-- Tour grid -->
    <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink v-for="tour in tours" :key="tour.slug" :to="`/experience/${tour.slug}`"
        class="group overflow-hidden rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] transition hover:shadow-xl hover:border-[--ui-color-brand]/30 hover:-translate-y-1">
        <!-- Thumbnail -->
        <div class="relative overflow-hidden aspect-video">
          <img :src="tour.thumbnail" :alt="tour.title" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <!-- Play button overlay -->
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <div class="grid h-12 w-12 place-items-center rounded-full bg-white/25 backdrop-blur-sm border border-white/40">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
          </div>
          <!-- Tags -->
          <div class="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            <span class="rounded-full bg-black/50 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">360°</span>
            <span v-if="tour.duration" class="rounded-full bg-black/50 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">{{ tour.duration }}</span>
          </div>
        </div>
        <!-- Content -->
        <div class="p-5">
          <div class="flex items-start justify-between gap-2">
            <div class="min-w-0">
              <h3 class="font-bold text-[--ui-color-text-primary] leading-tight truncate">{{ tour.title }}</h3>
              <p class="mt-0.5 text-xs text-[--ui-color-text-muted] flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                {{ tour.location || 'Trảng Bay' }}
              </p>
            </div>
          </div>
          <p class="mt-3 text-xs text-[--ui-color-text-muted] leading-relaxed line-clamp-2">{{ tour.summary }}</p>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-xs font-semibold text-[--ui-color-brand]">Miễn phí xem ảo</span>
            <span class="text-xs text-[--ui-color-text-muted] group-hover:text-[--ui-color-brand] transition flex items-center gap-1">
              Trải nghiệm ngay
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>

  </div>
</template>
