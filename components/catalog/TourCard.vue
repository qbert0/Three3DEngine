<script setup lang="ts">
/**
 * components/catalog/TourCard.vue
 * ──────────────────────────────────────────────────────────────────────────────
 * Reusable tour card for catalog/landing pages.
 * Used in: pages/index.vue (featured grid + list)
 * ──────────────────────────────────────────────────────────────────────────────
 */
import type { TourEntry } from '~/types/tour';

interface Props {
  tour: TourEntry;
  /** 'card' (grid) or 'row' (list). Default: 'card' */
  variant?: 'card' | 'row';
}

const props = withDefaults(defineProps<Props>(), { variant: 'card' });

const link = computed(() => `/tours/${props.tour.slug}`);
const experienceLink = computed(() => `/experience/${props.tour.slug}`);
</script>

<template>
  <!-- ── Card variant (grid) ─────────────────────────────────────────────── -->
  <NuxtLink v-if="variant === 'card'" :to="link" class="group block">
    <UiCard variant="surface" padding="none" :hoverable="true" class="overflow-hidden h-full">
      <!-- Cover image -->
      <div class="relative h-48 overflow-hidden bg-[--ui-color-bg-subtle]">
        <img
          v-if="tour.cover"
          :src="tour.cover"
          :alt="tour.title"
          class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div v-else class="grid h-full w-full place-items-center text-4xl opacity-20">🌄</div>

        <!-- Quick-launch overlay on hover -->
        <div class="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 transition-opacity group-hover:opacity-100">
          <NuxtLink :to="experienceLink" @click.prevent.stop>
            <UiButton size="sm" variant="primary">
              <template #icon-leading>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              </template>
              Xem ngay
            </UiButton>
          </NuxtLink>
        </div>

        <!-- Badges -->
        <div class="absolute bottom-2 right-2">
          <UiBadge variant="default" size="sm" class="!bg-black/60 !text-white !ring-white/10">
            {{ tour.sceneCount }} cảnh
          </UiBadge>
        </div>
      </div>

      <!-- Info -->
      <div class="p-4">
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <p class="font-semibold text-[--ui-color-text-primary] group-hover:text-[--ui-color-brand] transition-colors leading-snug">
              {{ tour.title }}
            </p>
            <p class="mt-0.5 text-xs text-[--ui-color-text-muted]">{{ tour.location }}</p>
          </div>
          <UiBadge variant="primary" size="sm" pill class="shrink-0">{{ tour.theme ?? 'nature' }}</UiBadge>
        </div>
        <p class="mt-2 text-xs leading-relaxed text-[--ui-color-text-muted] line-clamp-2">{{ tour.summary }}</p>
        <div class="mt-3 flex items-center gap-2 text-xs text-[--ui-color-brand] font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          Xem chi tiết
        </div>
      </div>
    </UiCard>
  </NuxtLink>

  <!-- ── Row variant (list) ──────────────────────────────────────────────── -->
  <NuxtLink v-else :to="link" class="group block">
    <UiCard variant="surface" padding="md" :hoverable="true"
      class="transition-all group-hover:ring-[--ui-color-brand]/25">
      <div class="flex items-center gap-4">
        <!-- Thumb -->
        <div class="h-14 w-20 shrink-0 overflow-hidden rounded-[--ui-radius-sm] bg-[--ui-color-bg-subtle]">
          <img v-if="tour.cover" :src="tour.cover" :alt="tour.title" class="h-full w-full object-cover" />
          <div v-else class="grid h-full w-full place-items-center text-xl opacity-20">🌄</div>
        </div>

        <!-- Info -->
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-2 flex-wrap">
            <p class="font-semibold text-[--ui-color-text-primary] group-hover:text-[--ui-color-brand] transition-colors">
              {{ tour.title }}
            </p>
            <UiBadge variant="primary" size="sm" pill>{{ tour.theme ?? 'nature' }}</UiBadge>
          </div>
          <p class="mt-0.5 text-xs text-[--ui-color-text-muted]">{{ tour.location }}</p>
          <p class="mt-1 text-xs text-[--ui-color-text-muted] line-clamp-1">{{ tour.summary }}</p>
        </div>

        <!-- Meta + action -->
        <div class="shrink-0 hidden sm:flex flex-col items-end gap-2">
          <UiBadge variant="default" size="sm">{{ tour.sceneCount }} cảnh</UiBadge>
          <span class="text-xs text-[--ui-color-text-muted] group-hover:text-[--ui-color-brand] transition-colors">
            Xem →
          </span>
        </div>
      </div>
    </UiCard>
  </NuxtLink>
</template>
