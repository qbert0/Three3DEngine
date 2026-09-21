import { ref, shallowRef, onBeforeUnmount } from 'vue';
import { Three360Engine } from '~/core/three/Three360Engine';
import type { TourScene, TourMarker } from '~/types/tour';

export interface UseThree360Options {
  onNavigate: (sceneId: string) => void;
  onInfoOpen?: (content: string, label: string) => void;
}

export function useThree360Engine(options: UseThree360Options) {
  const isLoading = ref(true);
  const errorMessage = ref('');
  const engine = shallowRef<Three360Engine | null>(null);
  const currentScene = ref<TourScene | null>(null);

  async function initEngine(container: HTMLElement, initialScene: TourScene): Promise<void> {
    isLoading.value = true;
    errorMessage.value = '';

    try {
      engine.value = new Three360Engine({
        container,
        onNavigate: options.onNavigate,
        onHotspotClick: (marker: TourMarker) => {
          if (marker.plugin === 'info' && options.onInfoOpen) {
            options.onInfoOpen(marker.content, marker.label);
          }
        },
      });

      await engine.value.loadScene(initialScene);
      currentScene.value = initialScene;
      isLoading.value = false;
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : 'Không thể khởi tạo 3D Engine.';
      isLoading.value = false;
    }
  }

  async function flyToScene(targetScene: TourScene, targetYaw = 0, targetPitch = 0): Promise<void> {
    if (!engine.value) return;
    try {
      isLoading.value = true;
      await engine.value.flyToScene(targetScene, targetYaw, targetPitch);
      currentScene.value = targetScene;
      isLoading.value = false;
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : 'Lỗi chuyển cảnh 3D.';
      isLoading.value = false;
    }
  }

  function destroyEngine(): void {
    engine.value?.destroy();
    engine.value = null;
  }

  onBeforeUnmount(destroyEngine);

  return {
    isLoading,
    errorMessage,
    currentScene,
    initEngine,
    flyToScene,
    destroyEngine,
  };
}
