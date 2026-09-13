<script setup lang="ts">
import { Binoculars, MapPin } from '@lucide/vue';
import type { TourConfig, TourScene } from '~/types/tour';

defineProps<{
  tour: TourConfig;
  activeScene: TourScene;
}>();
</script>

<template>
  <aside class="order-2 flex w-full flex-col border-t border-white/10 bg-ink lg:order-1 lg:h-screen lg:w-[320px] lg:border-r lg:border-t-0">

    <!-- Header -->
    <div class="relative overflow-hidden px-6 pb-6 pt-7">
      <div class="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-river/20 blur-3xl" />
      <div class="pointer-events-none absolute -bottom-4 left-4 h-24 w-24 rounded-full bg-clay/15 blur-2xl" />

      <div class="relative flex items-start gap-3">
        <div class="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-river/20 ring-1 ring-river/40">
          <Binoculars class="h-5 w-5 text-river" />
        </div>
        <div>
          <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-river">View360</p>
          <h1 class="mt-0.5 text-xl font-bold leading-tight text-white">{{ tour.title }}</h1>
        </div>
      </div>

      <p class="relative mt-4 text-sm leading-6 text-white/55">{{ tour.summary }}</p>

      <div class="relative mt-4 flex items-center gap-2 text-xs text-white/40">
        <MapPin class="h-3.5 w-3.5 shrink-0 text-clay" />
        <span>{{ tour.location }}</span>
      </div>
    </div>

    <div class="mx-6 h-px bg-white/8" />

    <!-- Active scene -->
    <div class="px-6 py-5">
      <p class="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">Đang xem</p>
      <p class="text-base font-semibold text-white">{{ activeScene.title }}</p>
      <p class="mt-0.5 text-xs leading-5 text-white/50">{{ activeScene.subtitle }}</p>
    </div>

    <div class="mx-6 h-px bg-white/8" />

    <!-- Usage guide -->
    <div class="mt-auto px-6 py-5">
      <p class="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">Hướng dẫn</p>
      <ul class="grid gap-2">
        <li class="flex items-center gap-2.5 text-xs text-white/50">
          <span class="text-base leading-none">🖱️</span> Kéo để xoay ảnh 360°
        </li>
        <li class="flex items-center gap-2.5 text-xs text-white/50">
          <span class="text-base leading-none">🔵</span> Nút xanh – di chuyển cảnh
        </li>
        <li class="flex items-center gap-2.5 text-xs text-white/50">
          <span class="text-base leading-none">🟠</span> Nút cam – xem thông tin
        </li>
        <li class="flex items-center gap-2.5 text-xs text-white/50">
          <span class="text-base leading-none">🔍</span> Cuộn chuột để zoom
        </li>
      </ul>
    </div>

  </aside>
</template>
