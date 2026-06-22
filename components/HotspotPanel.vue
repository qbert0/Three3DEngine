<script setup lang="ts">
import { Layers3 } from '@lucide/vue';
import type { PlaceHotspot, PlaceScene } from '~/types/place';

defineProps<{
  scene: PlaceScene;
  activeHotspot: PlaceHotspot | undefined;
  selectedHotspotId: string;
}>();

const emit = defineEmits<{ select: [id: string] }>();
</script>

<template>
  <section class="mt-7 border border-ink/10 bg-white p-4">
    <h2 class="flex items-center gap-2 text-sm font-semibold text-ink">
      <Layers3 class="h-4 w-4 text-clay" />
      Hotspots
    </h2>
    <div class="mt-3 flex flex-wrap gap-2">
      <button
        v-for="hotspot in scene.hotspots"
        :key="hotspot.id"
        type="button"
        class="border px-3 py-2 text-xs font-medium transition"
        :class="hotspot.id === selectedHotspotId ? 'border-clay bg-clay text-white' : 'border-ink/10 bg-paper text-ink hover:border-clay'"
        @click="emit('select', hotspot.id)"
      >
        {{ hotspot.label }}
      </button>
    </div>
    <p class="mt-4 min-h-16 text-sm leading-6 text-ink/68">
      {{ activeHotspot?.note || 'Select a marker in the panorama to inspect this scene.' }}
    </p>
  </section>
</template>
