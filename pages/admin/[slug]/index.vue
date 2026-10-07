<script setup lang="ts">
import type { TourConfig, TourScene } from '~/types/tour';

definePageMeta({ layout: 'editor', ssr: false });

const route = useRoute();
const slug  = route.params.slug as string;
const firstSceneInput = ref<HTMLInputElement | null>(null);
const addingFirstScene = ref(false);
const { show: showToast } = useToast();

const { data } = await useFetch<{ item: TourConfig }>(`/api/tours/${slug}`);
const tour   = computed(() => data.value?.item);
const scenes = computed<TourScene[]>(() => tour.value?.scenes ?? []);

const preferredSceneId = tour.value?.scenes.find((scene) => scene.id === tour.value?.initialSceneId)?.id
  ?? tour.value?.scenes[0]?.id;
if (preferredSceneId) {
  await navigateTo(`/admin/${slug}/${preferredSceneId}`, { replace: true });
}

useHead({ title: computed(() => `${tour.value?.title ?? slug} — Admin · View360`) });

// Marker type counts per scene
const markerCount = (scene: TourScene, plugin?: string) =>
  plugin
    ? scene.markers?.filter(m => m.plugin === plugin).length ?? 0
    : scene.markers?.length ?? 0;

function selectFirstScenePanorama() {
  firstSceneInput.value?.click();
}

async function addFirstScene(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file || !tour.value || tour.value.scenes.length > 0) {
    input.value = '';
    return;
  }

  addingFirstScene.value = true;
  try {
    const formData = new FormData();
    formData.append('file', file);
    const upload = await $fetch<{
      ok: boolean;
      files: Array<{ original: string; thumbnail: string; editorPreview: string }>;
    }>('/api/admin/media', { method: 'POST', body: formData });
    const media = upload.files?.[0];
    if (!media) throw new Error('API không trả về ảnh panorama đã tải lên.');

    const sceneId = `scene-${Date.now().toString(36)}`;
    const scene: TourScene = {
      id: sceneId,
      title: 'Cảnh đầu tiên',
      subtitle: '',
      panorama: media.original,
      thumbnail: media.thumbnail || media.original,
      editorPanorama: media.editorPreview,
      initialYaw: 0,
      initialPitch: 0,
      showOnMap: false,
      brightness: 1.25,
      markers: [],
    };
    const updatedTour: TourConfig = {
      ...tour.value,
      initialSceneId: sceneId,
      scenes: [scene],
    };
    await $fetch(`/api/admin/tours/${slug}`, {
      method: 'POST',
      body: updatedTour,
    });
    showToast({ message: 'Đã tạo cảnh đầu tiên', variant: 'success' });
    await navigateTo(`/admin/${slug}/${sceneId}`);
  } catch (error: any) {
    const message = error?.data?.statusMessage ?? error?.statusMessage ?? error?.message ?? 'Không thể tạo cảnh';
    showToast({ message, variant: 'error' });
  } finally {
    addingFirstScene.value = false;
    input.value = '';
  }
}
</script>

<template>
  <div class="min-h-screen bg-[--ui-color-bg] font-[--ui-font-sans]">
    <input
      ref="firstSceneInput"
      class="hidden"
      type="file"
      accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
      @change="addFirstScene"
    >
    <div class="px-6 py-8">
      <!-- Breadcrumb -->
      <div class="mb-6 flex items-center gap-2 text-sm">
        <NuxtLink to="/admin" class="text-[--ui-color-text-muted] hover:text-[--ui-color-text-primary] transition-colors">Admin</NuxtLink>
        <span class="text-[--ui-color-border-strong]">/</span>
        <p class="font-semibold text-[--ui-color-text-primary] truncate">{{ tour?.title ?? slug }}</p>
        <div class="ml-auto">
          <NuxtLink :to="`/experience/${slug}`">
            <UiButton variant="ghost" size="sm">Xem tour →</UiButton>
          </NuxtLink>
        </div>
      </div>

      <!-- ── Tour info header ───────────────────────────────────────────────── -->
      <UiCard variant="surface" padding="md" class="mb-6">
        <div class="flex items-center gap-4">
          <UiAvatar :name="tour?.title ?? slug" size="xl" shape="square" />
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <h1 class="text-xl font-bold text-[--ui-color-text-primary]">{{ tour?.title }}</h1>
              <UiBadge variant="primary" pill>{{ tour?.theme ?? 'nature' }}</UiBadge>
            </div>
            <p class="mt-1 text-sm text-[--ui-color-text-muted]">{{ tour?.location }}</p>
            <div class="mt-2 flex items-center gap-3">
              <UiBadge variant="default">
                {{ scenes.length }} cảnh
              </UiBadge>
              <UiBadge variant="muted">
                {{ scenes.reduce((n, s) => n + (s.markers?.length ?? 0), 0) }} markers
              </UiBadge>
            </div>
          </div>
        </div>
      </UiCard>

      <!-- ── Section label ──────────────────────────────────────────────────── -->
      <div class="mb-4 flex items-center justify-between">
        <h2 class="text-base font-semibold text-[--ui-color-text-primary]">Danh sách cảnh</h2>
        <p class="text-xs text-[--ui-color-text-muted]">Nhấn vào cảnh để chỉnh sửa markers</p>
      </div>

      <!-- ── Scene list ─────────────────────────────────────────────────────── -->
      <div v-if="scenes.length" class="space-y-3">
        <NuxtLink
          v-for="(scene, index) in scenes"
          :key="scene.id"
          :to="`/admin/${slug}/${scene.id}`"
          class="block group"
        >
          <UiCard variant="surface" padding="none" :hoverable="true"
            class="overflow-hidden transition-all group-hover:ring-[--ui-color-brand]/25">
            <div class="flex items-center gap-0">

              <!-- Index -->
              <div class="flex h-full w-12 shrink-0 items-center justify-center border-r border-[--ui-color-border] self-stretch">
                <span class="text-sm font-bold tabular-nums text-[--ui-color-text-muted]">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
              </div>

              <!-- Thumbnail -->
              <div class="shrink-0">
                <img
                  :src="scene.thumbnail"
                  :alt="scene.title"
                  class="h-20 w-32 object-cover"
                />
              </div>

              <!-- Info -->
              <div class="min-w-0 flex-1 px-4 py-3">
                <p class="font-semibold text-[--ui-color-text-primary] group-hover:text-[--ui-color-brand] transition-colors">
                  {{ scene.title }}
                </p>
                <p class="mt-0.5 text-xs text-[--ui-color-text-muted]">{{ scene.subtitle }}</p>
                <!-- Marker badges -->
                <div class="mt-2 flex flex-wrap gap-1.5">
                  <UiBadge
                    v-if="markerCount(scene, 'navigation') > 0"
                    variant="primary" size="sm"
                  >
                    ↑ {{ markerCount(scene, 'navigation') }} nav
                  </UiBadge>
                  <UiBadge
                    v-if="markerCount(scene, 'info') > 0"
                    variant="warning" size="sm"
                  >
                    ⓘ {{ markerCount(scene, 'info') }} info
                  </UiBadge>
                  <UiBadge
                    v-if="markerCount(scene) === 0"
                    variant="muted" size="sm"
                  >
                    Chưa có marker
                  </UiBadge>
                </div>
              </div>

              <!-- Arrow -->
              <div class="shrink-0 pr-4 text-[--ui-color-text-muted] group-hover:text-[--ui-color-brand] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>

            </div>
          </UiCard>
        </NuxtLink>
      </div>

      <!-- Empty -->
      <UiCard v-else variant="outlined" padding="none">
        <UiEmptyState
          icon="🎞️"
          title="Chưa có cảnh nào"
          description="Chọn một ảnh panorama 2:1 để tạo cảnh đầu tiên và mở trình chỉnh sửa."
        >
          <template #actions>
            <UiButton :loading="addingFirstScene" @click="selectFirstScenePanorama">
              + Thêm cảnh đầu tiên
            </UiButton>
          </template>
        </UiEmptyState>
      </UiCard>

    </div>
  </div>
</template>
