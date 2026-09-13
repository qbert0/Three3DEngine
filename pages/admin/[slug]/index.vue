<script setup lang="ts">
import type { TourConfig, TourScene } from '~/types/tour';

definePageMeta({ ssr: false });

const route = useRoute();
const slug = route.params.slug as string;

const { data, refresh } = await useFetch<{ item: TourConfig }>(`/api/tours/${slug}`);
const tour = computed(() => data.value?.item);
const scenes = computed<TourScene[]>(() => tour.value?.scenes ?? []);
</script>

<template>
  <main class="min-h-screen bg-ink px-6 py-10 text-white">
    <div class="mx-auto max-w-5xl">

      <!-- Header -->
      <div class="mb-8 flex items-end justify-between">
        <div>
          <NuxtLink to="/admin" class="text-xs text-white/40 hover:text-white/70">← Danh sách tour</NuxtLink>
          <h1 class="mt-2 text-2xl font-bold">{{ tour?.title }}</h1>
          <p class="text-sm text-white/40">{{ scenes.length }} cảnh · {{ tour?.location }}</p>
        </div>
        <NuxtLink
          :to="`/${slug}`"
          class="rounded-lg border border-white/15 px-4 py-2 text-sm text-white/60 hover:text-white transition"
        >
          Xem tour →
        </NuxtLink>
      </div>

      <!-- Scene list -->
      <div class="space-y-3">
        <div
          v-for="(scene, index) in scenes"
          :key="scene.id"
          class="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:border-river/40 transition-all"
        >
          <!-- Index -->
          <span class="w-7 shrink-0 text-center text-sm font-bold text-white/25">
            {{ String(index + 1).padStart(2, '0') }}
          </span>

          <!-- Thumbnail -->
          <img
            :src="scene.thumbnail"
            :alt="scene.title"
            class="h-16 w-28 shrink-0 rounded-lg object-cover"
          />

          <!-- Info -->
          <div class="min-w-0 flex-1">
            <p class="font-semibold text-white">{{ scene.title }}</p>
            <p class="mt-0.5 text-xs text-white/45">{{ scene.subtitle }}</p>
            <div class="mt-2 flex flex-wrap gap-1.5">
              <span
                v-for="marker in scene.markers"
                :key="marker.id"
                class="rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                :class="{
                  'bg-river/20 text-river': marker.plugin === 'navigation',
                  'bg-clay/20 text-clay': marker.plugin === 'info',
                  'bg-moss/20 text-moss': marker.plugin === 'audio',
                }"
              >
                {{ marker.plugin }} · {{ marker.label }}
              </span>
            </div>
          </div>

          <!-- Edit button -->
          <NuxtLink
            :to="`/admin/${slug}/${scene.id}`"
            class="shrink-0 rounded-lg border border-white/15 px-3 py-2 text-xs text-white/50 hover:border-river/50 hover:text-river transition-all"
          >
            Chỉnh sửa
          </NuxtLink>
        </div>
      </div>

    </div>
  </main>
</template>
