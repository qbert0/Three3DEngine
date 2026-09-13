import { ref, shallowRef, onBeforeUnmount } from 'vue';
import { Viewer, events } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import type { TourScene } from '~/types/tour';
import type { PluginMarker, PluginContext } from '~/core/plugins/types';
import type { View360Plugin } from '~/core/plugins/types';

export interface UseViewer360Options {
  plugins: View360Plugin[];
  onNavigate: (sceneId: string) => void;
  onInfoOpen: (content: string, label: string) => void;
}

export function useViewer360(options: UseViewer360Options) {
  const isLoading = ref(true);
  const errorMessage = ref('');
  const viewer = shallowRef<Viewer | null>(null);

  /** Build the plugin context that plugins call back into */
  const buildContext = (): PluginContext => ({
    navigate: options.onNavigate,
    openInfo: options.onInfoOpen,
    playAudio: (src, label) => {
      const audio = new Audio(src);
      audio.play().catch(() => {});
    },
  });

  /** Collect markers from all active plugins for a scene */
  const buildMarkers = (scene: TourScene): PluginMarker[] => {
    const ctx = buildContext();
    return options.plugins.flatMap((p) => p.getMarkers(scene, ctx));
  };

  /** Initialise PSV — call once after container is mounted */
  async function initViewer(container: HTMLElement, scene: TourScene): Promise<void> {
    isLoading.value = true;
    errorMessage.value = '';

    try {
      viewer.value = new Viewer({
        container,
        panorama: scene.panorama,
        loadingImg: scene.thumbnail,   // show thumbnail while full res loads
        caption: scene.title,
        defaultYaw: scene.initialYaw,
        defaultPitch: scene.initialPitch,
        touchmoveTwoFingers: false,
        mousewheelCtrlKey: false,
        navbar: ['zoom', 'move', 'caption', 'fullscreen'],
        plugins: [
          [MarkersPlugin, { markers: buildMarkers(scene) }],
        ],
      });

      viewer.value.addEventListener(events.PanoramaLoadedEvent.type, () => {
        isLoading.value = false;
      });

      viewer.value.addEventListener(events.PanoramaErrorEvent.type, ({ error }) => {
        isLoading.value = false;
        errorMessage.value = error.message || 'Không thể tải ảnh panorama.';
      });

      // Route marker clicks to the correct plugin handler
      viewer.value
        .getPlugin<MarkersPlugin>(MarkersPlugin)
        .addEventListener('select-marker', ({ marker }) => {
          const pluginName = marker.data?.plugin as string | undefined;
          const scene_marker = options.plugins
            .find((p) => p.name === pluginName);
          // Find the raw marker data to pass to handler
          const rawMarker = (currentScene.value?.markers ?? []).find((m) => m.id === marker.id);
          if (scene_marker && rawMarker) {
            scene_marker.onMarkerClick(rawMarker, buildContext());
          }
        });
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : 'Không thể khởi động viewer.';
      isLoading.value = false;
    }
  }

  const currentScene = ref<TourScene | null>(null);

  /** Switch to a new scene — instant cut, then update markers */
  async function switchScene(scene: TourScene): Promise<void> {
    if (!viewer.value) return;
    currentScene.value = scene;
    isLoading.value = true;

    const loaded = await viewer.value.setPanorama(scene.panorama, {
      caption: scene.title,
      position: { yaw: scene.initialYaw, pitch: scene.initialPitch },
      transition: false,   // instant cut — no PSV fade/zoom
    });

    if (!loaded) return;
    isLoading.value = false;

    const markersPlugin = viewer.value.getPlugin<MarkersPlugin>(MarkersPlugin);
    markersPlugin.clearMarkers();
    markersPlugin.setMarkers(buildMarkers(scene));
  }

  /** Destroy PSV — call in onBeforeUnmount */
  function destroyViewer(): void {
    viewer.value?.destroy();
    viewer.value = null;
  }

  return {
    isLoading,
    errorMessage,
    currentScene,
    initViewer,
    switchScene,
    destroyViewer,
  };
}
