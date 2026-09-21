<script setup lang="ts">
definePageMeta({ layout: 'editor', ssr: false });
useHead({ title: 'Admin — Quản lý Tour · View360' });

const { data } = await useFetch<{ items: any[] }>('/api/tours');
const tours = computed(() => data.value?.items ?? []);

const totalScenes = computed(() =>
  tours.value.reduce((sum: number, t: any) => sum + (t.sceneCount ?? 0), 0),
);
</script>

<template>
  <div class="min-h-screen bg-[--ui-color-bg] font-[--ui-font-sans]">
    <div class="px-6 py-8">

      <!-- ── Stats bar ──────────────────────────────────────────────────────── -->
      <div class="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <UiCard variant="surface" padding="md">
          <p class="text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted]">Tổng tour</p>
          <p class="mt-2 text-3xl font-bold text-[--ui-color-text-primary]">{{ tours.length }}</p>
          <UiBadge variant="primary" size="sm" class="mt-2">đang hoạt động</UiBadge>
        </UiCard>
        <UiCard variant="surface" padding="md">
          <p class="text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted]">Tổng cảnh</p>
          <p class="mt-2 text-3xl font-bold text-[--ui-color-text-primary]">{{ totalScenes }}</p>
          <UiBadge variant="success" size="sm" class="mt-2">panoramas</UiBadge>
        </UiCard>
        <UiCard variant="surface" padding="md" class="col-span-2 sm:col-span-1">
          <p class="text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted]">Hệ thống</p>
          <div class="mt-2 flex items-center gap-2">
            <UiStatusDot variant="online" :pulse="true" />
            <p class="text-sm font-semibold text-[--ui-color-text-primary]">Hoạt động bình thường</p>
          </div>
          <p class="mt-1 text-xs text-[--ui-color-text-muted]">
            Chỉ hoạt động khi <code class="rounded bg-[--ui-color-bg-muted] px-1 font-mono text-[10px]">ENABLE_ADMIN=true</code>
          </p>
        </UiCard>
      </div>

      <!-- ── Section header ─────────────────────────────────────────────────── -->
      <div class="mb-5 flex items-center justify-between">
        <div>
          <h1 class="text-xl font-bold text-[--ui-color-text-primary]">Danh sách Tour</h1>
          <p class="mt-0.5 text-sm text-[--ui-color-text-muted]">Chọn tour để xem và chỉnh sửa các cảnh</p>
        </div>
        <UiTooltip content="Thêm tour YAML vào thư mục /tours" placement="left">
          <UiBadge variant="muted">{{ tours.length }} tour</UiBadge>
        </UiTooltip>
      </div>

      <!-- ── Tour grid ──────────────────────────────────────────────────────── -->
      <div v-if="tours.length" class="grid gap-4 sm:grid-cols-2">
        <NuxtLink
          v-for="tour in tours"
          :key="tour.slug"
          :to="`/admin/${tour.slug}`"
          class="block group"
        >
          <UiCard variant="surface" padding="md" :hoverable="true" class="h-full transition-all group-hover:ring-[--ui-color-brand]/30">
            <div class="flex items-start justify-between gap-3">
              <!-- Tour icon -->
              <div class="flex items-start gap-3">
                <UiAvatar
                  :name="tour.title"
                  size="md"
                  shape="square"
                />
                <div class="min-w-0 flex-1">
                  <p class="font-semibold text-[--ui-color-text-primary] group-hover:text-[--ui-color-brand] transition-colors">
                    {{ tour.title }}
                  </p>
                  <p class="mt-0.5 text-xs text-[--ui-color-text-muted]">{{ tour.location }}</p>
                </div>
              </div>
              <!-- Scene count -->
              <UiBadge variant="default" size="sm" class="shrink-0">
                {{ tour.sceneCount }} cảnh
              </UiBadge>
            </div>

            <!-- Summary -->
            <p class="mt-3 text-xs leading-relaxed text-[--ui-color-text-muted] line-clamp-2">
              {{ tour.summary }}
            </p>

            <!-- Footer tags -->
            <div class="mt-4 flex items-center justify-between">
              <div class="flex gap-2">
                <UiBadge variant="primary" size="sm" pill>
                  {{ tour.theme ?? 'nature' }}
                </UiBadge>
              </div>
              <span class="text-xs text-[--ui-color-text-muted] group-hover:text-[--ui-color-brand] transition-colors flex items-center gap-1">
                Chỉnh sửa
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </div>
          </UiCard>
        </NuxtLink>
      </div>

      <!-- ── Empty state ────────────────────────────────────────────────────── -->
      <UiCard v-else variant="outlined" padding="none">
        <UiEmptyState
          icon="🗺️"
          title="Chưa có tour nào"
          description="Thêm file .yaml vào thư mục /tours để bắt đầu tạo tour 360°."
        >
          <template #actions>
            <UiTooltip content="Xem tài liệu cú pháp YAML" placement="top">
              <UiButton variant="secondary" size="sm">Xem hướng dẫn</UiButton>
            </UiTooltip>
          </template>
        </UiEmptyState>
      </UiCard>

    </div>
  </div>
</template>
