<script setup lang="ts">
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { Viewer, events } from '@photo-sphere-viewer/core';
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import type { PlaceScene } from '~/types/place';
const props = defineProps<{ scene: PlaceScene }>();
const emit = defineEmits<{
  hotspot: [id: string];
  navigate: [sceneId: string];
}>();

const container = ref<HTMLElement | null>(null);
const isLoading = ref(true);
const errorMessage = ref('');
let viewer: Viewer | null = null;

const markerHtml = (label: string, isNav: boolean) =>
  `<button class="grid h-10 w-10 place-items-center rounded-full border-2 border-white shadow-panel ${isNav ? 'bg-river' : 'bg-clay'} text-white" aria-label="${label}">${isNav ? '›' : '•'}</button>`;

const markersForScene = (scene: PlaceScene) =>
  scene.hotspots.map((h) => ({
    id: h.id,
    data: { targetSceneId: h.targetSceneId },
    position: { yaw: h.yaw, pitch: h.pitch },
    html: markerHtml(h.label, !!h.targetSceneId),
    anchor: 'center center',
    tooltip: h.targetSceneId ? `→ ${h.label}` : h.label,
  }));

const initViewer = async () => {
  await nextTick();
  const el = container.value ?? document.getElementById('psv-viewer');
  if (!el) {
    errorMessage.value = 'Viewer container not found.';
    isLoading.value = false;
    return;
  }
  try {
    viewer = new Viewer({
      container: el,
      panorama: props.scene.panorama,
      caption: props.scene.title,
      defaultYaw: props.scene.initialYaw,
      defaultPitch: props.scene.initialPitch,
      touchmoveTwoFingers: false,
      mousewheelCtrlKey: false,
      navbar: ['zoom', 'move', 'caption', 'fullscreen'],
      plugins: [[MarkersPlugin, { markers: markersForScene(props.scene) }]],
    });
    viewer.addEventListener(events.PanoramaLoadedEvent.type, () => { isLoading.value = false; });
    viewer.addEventListener(events.PanoramaErrorEvent.type, ({ error }) => {
      isLoading.value = false;
      errorMessage.value = error.message || 'Could not load panorama.';
    });
    viewer.getPlugin<MarkersPlugin>(MarkersPlugin)
      .addEventListener('select-marker', ({ marker }) => {
        if (marker.data?.targetSceneId) {
          emit('navigate', marker.data.targetSceneId);
        } else {
          emit('hotspot', marker.id);
        }
      });
  } catch (e) {
    errorMessage.value = e instanceof Error ? e.message : 'Could not start viewer.';
    isLoading.value = false;
  }
};

const switchScene = async (scene: PlaceScene) => {
  if (!viewer) return;
  isLoading.value = true;
  const loaded = await viewer.setPanorama(scene.panorama, {
    caption: scene.title,
    position: { yaw: scene.initialYaw, pitch: scene.initialPitch },
    transition: true,
  });
  if (!loaded) return;
  isLoading.value = false;
  const markers = viewer.getPlugin<MarkersPlugin>(MarkersPlugin);
  markers.clearMarkers();
  markers.setMarkers(markersForScene(scene));
};

onMounted(initViewer);
watch(() => props.scene.id, () => switchScene(props.scene));
onBeforeUnmount(() => { viewer?.destroy(); viewer = null; });
</script>

<template>
  <div class="relative h-[calc(62vh-52px)] w-full overflow-hidden bg-ink lg:h-[calc(100vh-52px)]">
    <div id="psv-viewer" ref="container" class="h-full w-full" />
    <div
      v-if="isLoading || errorMessage"
      class="pointer-events-none absolute inset-0 grid place-items-center bg-ink/80 px-6 text-center text-white"
    >
      <p class="text-sm font-semibold">{{ errorMessage || 'Loading panorama...' }}</p>
      <p v-if="errorMessage" class="mt-2 max-w-md text-xs leading-5 text-white/70">{{ errorMessage }}</p>
    </div>
  </div>
</template>
