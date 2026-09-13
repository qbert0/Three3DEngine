<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { TourConfig, TourScene } from '~/types/tour';

definePageMeta({ ssr: false });

// ── Fetch tour from YAML-backed API ──────────────────────────────────────────
const { data, pending, error } = await useFetch<{ item: TourConfig }>('/api/tours/trang-bay');

const tour = computed(() => data.value?.item);
const scenes = computed<TourScene[]>(() => tour.value?.scenes ?? []);

// ── Active scene state ────────────────────────────────────────────────────────
const activeSceneId = ref('');
const activeScene = computed<TourScene | undefined>(
  () => scenes.value.find((s) => s.id === activeSceneId.value) ?? scenes.value[0],
);

watch(scenes, (val) => {
  if (val.length && !activeSceneId.value) {
    const preferredId = tour.value?.initialSceneId;
    const exists = preferredId && val.some((s) => s.id === preferredId);
    activeSceneId.value = exists ? preferredId : val[0].id;
  }
}, { immediate: true });

// ── Theme — read from tour config, resolve sidebar component ─────────────────
const themeName = computed(() => tour.value?.theme ?? 'nature');
// Resolve at script level (Vue 3 requirement — not in template)
const NatureSidebar = resolveComponent('NatureTourSidebar');
const MinimalSidebar = resolveComponent('MinimalTourSidebar');
const themeSidebar = computed(() =>
  themeName.value === 'minimal' ? MinimalSidebar : NatureSidebar,
);
</script>

<template>
  <main class="min-h-screen bg-ink">

    <!-- Loading -->
    <div v-if="pending" class="grid min-h-screen place-items-center">
      <div class="text-center">
        <div class="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-river" />
        <p class="text-sm text-white/50">Đang tải trải nghiệm 360°…</p>
      </div>
    </div>

    <!-- Error -->
    <div v-else-if="error || !tour || !activeScene"
      class="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <h1 class="text-2xl font-semibold text-white">Không thể tải nội dung</h1>
        <p class="mt-2 text-sm text-white/50">API server không trả về dữ liệu tour.</p>
      </div>
    </div>

    <!-- Main layout -->
    <div v-else class="flex min-h-screen flex-col lg:flex-row">

      <!-- Sidebar: dynamic theme component -->
      <component
        :is="themeSidebar"
        :tour="tour"
        :active-scene="activeScene"
        class="lg:order-1"
      />

      <!-- Viewer section -->
      <section class="order-1 flex min-h-[62vh] flex-1 flex-col bg-ink lg:order-2 lg:h-screen">
        <!-- Top bar -->
        <div class="flex items-center justify-between border-b border-white/8 bg-ink/95 px-4 py-3 backdrop-blur-sm lg:px-6">
          <div class="min-w-0">
            <p class="truncate text-sm font-semibold text-white">{{ activeScene.title }}</p>
            <p class="truncate text-xs text-white/45">{{ activeScene.subtitle }}</p>
          </div>
          <div class="ml-4 flex items-center gap-1.5 rounded-full bg-white/8 px-3 py-1.5 text-[11px] font-medium text-white/60 ring-1 ring-white/10">
            <span class="text-sm">🖱️</span> Kéo để xoay
          </div>
        </div>

        <!-- 360° Viewer -->
        <Viewer360
          :tour="tour"
          :scene="activeScene"
          @navigate="activeSceneId = $event"
        />
      </section>

    </div>
  </main>
</template>

