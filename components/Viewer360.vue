<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useViewer360 } from '~/composables/useViewer360';
import { usePreloader } from '~/composables/usePreloader';
import { resolvePlugins } from '~/core/plugins/registry';
import type { TourScene, TourConfig } from '~/types/tour';

const props = defineProps<{
  tour: TourConfig;
  scene: TourScene;
}>();

const emit = defineEmits<{
  navigate: [sceneId: string];
  infoOpen: [content: string, label: string];
}>();

// ── Info panel state ──────────────────────────────────────────────────────────
const infoPanelOpen = ref(false);
const infoPanelContent = ref('');
const infoPanelLabel = ref('');

// ── Plugin system ─────────────────────────────────────────────────────────────
const enabledPlugins = resolvePlugins(props.tour.plugins ?? ['navigation']);

// ── Viewer + Preloader ────────────────────────────────────────────────────────
const container = ref<HTMLElement | null>(null);
const { isLoading, errorMessage, currentScene, initViewer, switchScene, destroyViewer } =
  useViewer360({
    plugins: enabledPlugins,
    onNavigate: (sceneId) => emit('navigate', sceneId),
    onInfoOpen: (content, label) => {
      infoPanelContent.value = content;
      infoPanelLabel.value = label;
      infoPanelOpen.value = true;
      emit('infoOpen', content, label);
    },
  });

const { preloadScene, preloadNeighbours } = usePreloader();

// ── Lifecycle ─────────────────────────────────────────────────────────────────
onMounted(async () => {
  await nextTick();
  if (!container.value) return;

  currentScene.value = props.scene;
  await initViewer(container.value, props.scene);

  // Preload neighbours immediately after first scene loads
  preloadNeighbours(props.scene, props.tour.scenes);
});

watch(
  () => props.scene.id,
  async () => {
    await switchScene(props.scene);
    preloadNeighbours(props.scene, props.tour.scenes);
  },
);

onBeforeUnmount(destroyViewer);
</script>

<template>
  <div class="relative h-[calc(62vh-52px)] w-full overflow-hidden bg-ink lg:h-[calc(100vh-52px)]">
    <!-- PSV container -->
    <div ref="container" class="h-full w-full" />

    <!-- Loading overlay -->
    <Transition name="fade-overlay">
      <div
        v-if="isLoading && !errorMessage"
        class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-ink/75 backdrop-blur-sm"
      >
        <div class="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-river" />
        <p class="mt-3 text-xs font-semibold text-white/60">Đang tải panorama…</p>
      </div>
    </Transition>

    <!-- Error overlay -->
    <div
      v-if="errorMessage"
      class="pointer-events-none absolute inset-0 grid place-items-center bg-ink/90 px-6 text-center"
    >
      <div>
        <p class="text-sm font-semibold text-white">Không thể tải ảnh</p>
        <p class="mt-2 max-w-md text-xs leading-5 text-white/60">{{ errorMessage }}</p>
      </div>
    </div>

    <!-- Info panel (shown when InfoPlugin marker is clicked) -->
    <Transition name="slide-up">
      <div
        v-if="infoPanelOpen"
        class="absolute bottom-0 left-0 right-0 rounded-t-2xl bg-ink/95 px-6 pb-8 pt-5 shadow-panel backdrop-blur-sm"
      >
        <div class="mb-3 flex items-start justify-between gap-4">
          <p class="text-sm font-semibold text-white">{{ infoPanelLabel }}</p>
          <button
            class="text-white/50 hover:text-white transition-colors"
            aria-label="Đóng"
            @click="infoPanelOpen = false"
          >✕</button>
        </div>
        <p class="text-sm leading-6 text-white/70 whitespace-pre-line">{{ infoPanelContent }}</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-overlay-enter-active,
.fade-overlay-leave-active { transition: opacity 0.25s ease; }
.fade-overlay-enter-from,
.fade-overlay-leave-to { opacity: 0; }

.slide-up-enter-active,
.slide-up-leave-active { transition: transform 0.3s ease, opacity 0.3s ease; }
.slide-up-enter-from,
.slide-up-leave-to { transform: translateY(100%); opacity: 0; }
</style>
