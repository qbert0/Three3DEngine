<script setup lang="ts">
import Viewer360 from './Viewer360.vue';
import type { TourScene, TourConfig } from '~/types/tour';

defineProps<{
  tour: TourConfig;
  scene: TourScene;
}>();

defineEmits<{
  navigate: [sceneId: string];
  infoOpen: [content: string, label: string];
}>();
</script>

<template>
  <Viewer360
    :tour="tour"
    :scene="scene"
    @navigate="$emit('navigate', $event)"
    @info-open="$emit('infoOpen', $1, $2)"
  />
</template>
