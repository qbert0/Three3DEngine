<script setup lang="ts">
import { computed, ref } from 'vue';
import type { PlaceScene } from '~/types/place';

const props = defineProps<{ scene: PlaceScene }>();
const emit = defineEmits<{ hotspot: [id: string] }>();

const container = ref<HTMLElement | null>(null);
const sceneRef = computed(() => props.scene);

const { isLoading, errorMessage } = useSceneViewer(
  container,
  sceneRef,
  (id) => emit('hotspot', id),
);
</script>

<template>
  <div class="relative h-full min-h-[360px] w-full overflow-hidden bg-ink">
    <div ref="container" class="h-full min-h-[360px] w-full" />
    <div
      v-if="isLoading || errorMessage"
      class="pointer-events-none absolute inset-0 grid place-items-center bg-ink/80 px-6 text-center text-white"
    >
      <div>
        <p class="text-sm font-semibold">
          {{ errorMessage ? 'Viewer error' : 'Loading panorama...' }}
        </p>
        <p v-if="errorMessage" class="mt-2 max-w-md text-xs leading-5 text-white/70">
          {{ errorMessage }}
        </p>
      </div>
    </div>
  </div>
</template>
