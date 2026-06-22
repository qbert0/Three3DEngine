import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { Viewer, events } from '@photo-sphere-viewer/core';
import { onBeforeUnmount, onMounted, ref, watch, type Ref } from 'vue';
import type { PlaceScene } from '~/types/place';

const markerHtml = (label: string) =>
  `<button class="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-clay text-white shadow-panel" aria-label="${label}">
    <span class="h-3 w-3 rounded-full bg-white"></span>
  </button>`;

const markersForScene = (scene: PlaceScene) =>
  scene.hotspots.map((h) => ({
    id: h.id,
    position: { yaw: h.yaw, pitch: h.pitch },
    html: markerHtml(h.label),
    anchor: 'center center',
    tooltip: h.label,
  }));

export function useSceneViewer(
  container: Ref<HTMLElement | null>,
  scene: Ref<PlaceScene>,
  onHotspot: (id: string) => void,
) {
  const isLoading = ref(true);
  const errorMessage = ref('');
  let viewer: Viewer | null = null;

  const createViewer = () => {
    if (!container.value) return;
    isLoading.value = true;
    errorMessage.value = '';
    try {
      viewer = new Viewer({
        container: container.value,
        panorama: scene.value.panorama,
        caption: scene.value.title,
        defaultYaw: scene.value.initialYaw,
        defaultPitch: scene.value.initialPitch,
        touchmoveTwoFingers: false,
        mousewheelCtrlKey: false,
        navbar: ['zoom', 'move', 'caption', 'fullscreen'],
        plugins: [[MarkersPlugin, { markers: markersForScene(scene.value) }]],
      });
      viewer.addEventListener(events.PanoramaLoadedEvent.type, () => {
        isLoading.value = false;
      });
      viewer.addEventListener(events.PanoramaErrorEvent.type, ({ error }) => {
        isLoading.value = false;
        errorMessage.value = error.message || 'Could not load panorama.';
      });
      viewer.getPlugin<MarkersPlugin>(MarkersPlugin)
        .addEventListener('select-marker', ({ marker }) => onHotspot(marker.id));
    } catch (e) {
      isLoading.value = false;
      errorMessage.value = e instanceof Error ? e.message : 'Could not start the 360 viewer.';
    }
  };

  const updateScene = async (s: PlaceScene) => {
    if (!viewer) return;
    isLoading.value = true;
    errorMessage.value = '';
    try {
      await viewer.setPanorama(s.panorama, {
        caption: s.title,
        position: { yaw: s.initialYaw, pitch: s.initialPitch },
        transition: true,
      });
      const markers = viewer.getPlugin<MarkersPlugin>(MarkersPlugin);
      markers.clearMarkers();
      markers.setMarkers(markersForScene(s));
    } catch (e) {
      isLoading.value = false;
      errorMessage.value = e instanceof Error ? e.message : 'Could not switch panorama.';
    }
  };

  onMounted(createViewer);
  watch(() => scene.value.id, () => updateScene(scene.value));
  onBeforeUnmount(() => { viewer?.destroy(); viewer = null; });

  return { isLoading, errorMessage };
}
