<script setup lang="ts">
/**
 * pages/tours/[tourId].vue
 * ──────────────────────────────────────────────────────────────────────────────
 * Route: /tours/:tourId
 * Giới thiệu tour: thông tin, preview thumbnail, số cảnh → nút "Bắt đầu khám phá"
 * Docs: "/tours/:tourId → Giới thiệu tour, thời lượng, số điểm nhìn, nút Bắt đầu"
 * ──────────────────────────────────────────────────────────────────────────────
 */
import type { TourConfig, TourScene } from '~/types/tour';

definePageMeta({ layout: 'default' });

const route  = useRoute();
const tourId = computed(() => route.params.tourId as string);

const { data, pending, error } = await useFetch<{ item: TourConfig }>(
  computed(() => `/api/tours/${tourId.value}`),
);
const tour   = computed(() => data.value?.item);
const scenes = computed<TourScene[]>(() => tour.value?.scenes ?? []);

useHead({
  title: computed(() => tour.value ? `${tour.value.title} — View360` : 'Tour — View360'),
  meta: [
    { name: 'description', content: computed(() => tour.value?.summary ?? '') },
  ],
});

const totalMarkers = computed(() =>
  scenes.value.reduce((n, s) => n + (s.markers?.length ?? 0), 0),
);

// Closed by default. Only an explicit user click may change this state.
const isSceneGridOpen = ref(false);
</script>

<template>
  <div>
    <!-- Loading -->
    <div v-if="pending" class="mx-auto max-w-4xl px-6 py-16">
      <UiSkeleton height="40" width="60%" rounded="sm" class="mb-4" />
      <UiSkeleton height="16" :lines="3" />
      <div class="mt-8 grid grid-cols-3 gap-4">
        <UiSkeleton v-for="i in 3" :key="i" height="140" rounded="md" />
      </div>
    </div>

    <!-- Error -->
    <div v-else-if="error || !tour" class="py-24">
      <UiEmptyState icon="🗺️" title="Không tìm thấy tour"
        :description="`Tour '${tourId}' không tồn tại.`">
        <template #actions>
          <NuxtLink to="/"><UiButton variant="primary">Về trang chủ</UiButton></NuxtLink>
        </template>
      </UiEmptyState>
    </div>

    <!-- Tour detail -->
    <template v-else>
      <!-- ── Hero ──────────────────────────────────────────────────────────── -->
      <div class="relative overflow-hidden bg-ink">
        <!-- Cover image -->
        <div class="absolute inset-0">
          <img
            :src="scenes[0]?.thumbnail"
            :alt="tour.title"
            class="h-full w-full object-cover opacity-40"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        </div>

        <!-- Hero content -->
        <div class="relative mx-auto max-w-4xl px-6 pb-16 pt-20">
          <div class="mb-3 flex items-center gap-2">
            <NuxtLink to="/" class="text-xs text-white/50 hover:text-white/80 transition">Trang chủ</NuxtLink>
            <span class="text-white/30">/</span>
            <span class="text-xs text-white/50">{{ tour.location }}</span>
          </div>
          <div class="flex flex-wrap items-center gap-3 mb-3">
            <UiBadge variant="primary" pill>{{ tour.theme ?? 'nature' }}</UiBadge>
            <UiBadge variant="muted">{{ scenes.length }} cảnh</UiBadge>
            <UiBadge v-if="tour.duration" variant="muted">{{ tour.duration }}</UiBadge>
          </div>
          <h1 class="text-4xl font-bold text-white leading-tight">{{ tour.title }}</h1>
          <p class="mt-3 max-w-2xl text-base text-white/70 leading-relaxed">{{ tour.summary }}</p>

          <!-- CTA -->
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink :to="`/experience/${tourId}`">
              <UiButton size="lg" variant="primary">
                <template #icon-leading>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                </template>
                Bắt đầu khám phá
              </UiButton>
            </NuxtLink>
            <NuxtLink to="/">
              <UiButton size="lg" variant="ghost" class="!text-white/70 hover:!text-white hover:!bg-white/10">
                ← Quay lại
              </UiButton>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- ── Stats ─────────────────────────────────────────────────────────── -->
      <div class="border-b border-[--ui-color-border] bg-[--ui-color-surface]">
        <div class="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-[--ui-color-border] px-6">
          <div class="py-5 text-center">
            <p class="text-2xl font-bold text-[--ui-color-text-primary]">{{ scenes.length }}</p>
            <p class="mt-0.5 text-xs text-[--ui-color-text-muted]">Điểm nhìn 360°</p>
          </div>
          <div class="py-5 text-center">
            <p class="text-2xl font-bold text-[--ui-color-text-primary]">{{ totalMarkers }}</p>
            <p class="mt-0.5 text-xs text-[--ui-color-text-muted]">Điểm tương tác</p>
          </div>
          <div class="py-5 text-center">
            <p class="text-2xl font-bold text-[--ui-color-text-primary]">{{ tour.duration ?? '~5 phút' }}</p>
            <p class="mt-0.5 text-xs text-[--ui-color-text-muted]">Thời lượng</p>
          </div>
        </div>
      </div>

      <!-- ── Scene preview grid ─────────────────────────────────────────────── -->
      <div class="mx-auto max-w-4xl px-6 py-10">
        <button
          type="button"
          class="scene-grid-toggle"
          :aria-expanded="isSceneGridOpen"
          aria-controls="scene-preview-grid"
          @click="isSceneGridOpen = !isSceneGridOpen"
        >
          <span>
            <strong>Các điểm trong tour</strong>
            <small>{{ scenes.length }} điểm nhìn 360°</small>
          </span>
          <svg :class="{ open: isSceneGridOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        <Transition name="scene-grid">
          <div v-if="isSceneGridOpen" id="scene-preview-grid" class="grid grid-cols-1 gap-4 pt-5 sm:grid-cols-2 lg:grid-cols-3">
            <NuxtLink
              v-for="(scene, i) in scenes"
              :key="scene.id"
              :to="`/experience/${tourId}?scene=${scene.id}`"
              class="group block"
            >
              <UiCard variant="surface" padding="none" :hoverable="true" class="overflow-hidden">
                <div class="relative overflow-hidden">
                  <img :src="scene.thumbnail" :alt="scene.title" class="h-36 w-full object-cover transition duration-300 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <UiBadge variant="default" size="sm" class="absolute left-2 top-2 !bg-black/50 !text-white !ring-white/10">
                    {{ String(i + 1).padStart(2, '0') }}
                  </UiBadge>
                </div>
                <div class="p-3">
                  <p class="font-semibold text-sm text-[--ui-color-text-primary] group-hover:text-[--ui-color-brand] transition-colors">{{ scene.title }}</p>
                  <p class="mt-0.5 text-xs text-[--ui-color-text-muted]">{{ scene.subtitle }}</p>
                  <div class="mt-2 flex flex-wrap gap-1">
                    <UiBadge v-if="scene.markers?.filter(m => m.plugin === 'navigation').length" variant="primary" size="sm">↑ {{ scene.markers.filter(m => m.plugin === 'navigation').length }} nav</UiBadge>
                    <UiBadge v-if="scene.markers?.filter(m => m.plugin === 'info').length" variant="warning" size="sm">ⓘ {{ scene.markers.filter(m => m.plugin === 'info').length }} info</UiBadge>
                  </div>
                </div>
              </UiCard>
            </NuxtLink>
          </div>
        </Transition>
      </div>
    </template>
  </div>
</template>

<style scoped>
.scene-grid-toggle { width:100%; display:flex; align-items:center; justify-content:space-between; gap:16px; padding:16px 18px; border:1px solid var(--ui-color-border); border-radius:12px; background:var(--ui-color-surface); color:var(--ui-color-text-primary); text-align:left; transition:border-color .2s,background .2s; }
.scene-grid-toggle:hover { border-color:var(--ui-color-brand); }
.scene-grid-toggle span { display:flex; flex-direction:column; gap:3px; }
.scene-grid-toggle strong { font-size:1rem; }
.scene-grid-toggle small { color:var(--ui-color-text-muted); font-size:.75rem; font-weight:400; }
.scene-grid-toggle svg { width:20px; height:20px; flex:none; color:var(--ui-color-text-muted); transition:transform .22s ease; }
.scene-grid-toggle svg.open { transform:rotate(180deg); }
.scene-grid-enter-active,.scene-grid-leave-active { transition:opacity .2s ease,transform .2s ease; }
.scene-grid-enter-from,.scene-grid-leave-to { opacity:0; transform:translateY(-8px); }
</style>
