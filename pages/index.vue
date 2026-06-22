<script setup lang="ts">
import { computed, ref, watch } from 'vue';

definePageMeta({ ssr: false });
import type { PlaceExperience, PlaceHotspot, PlaceScene } from '~/types/place';

const { data, pending, error } = await useFetch<{ item: PlaceExperience }>('/api/places/heritage-ridge');

const activeSceneId = ref('');
const selectedHotspotId = ref('');

const place = computed(() => data.value?.item);
const scenes = computed(() => place.value?.scenes || []);
const activeScene = computed<PlaceScene | undefined>(() =>
  scenes.value.find((s) => s.id === activeSceneId.value) || scenes.value[0],
);
const activeHotspot = computed<PlaceHotspot | undefined>(() =>
  activeScene.value?.hotspots.find((h) => h.id === selectedHotspotId.value),
);

watch(scenes, (value) => {
  if (value.length && !activeSceneId.value) {
    activeSceneId.value = value[0].id;
    selectedHotspotId.value = value[0].hotspots[0]?.id || '';
  }
}, { immediate: true });

watch(activeScene, (scene) => {
  selectedHotspotId.value = scene?.hotspots[0]?.id || '';
});
</script>

<template>
  <main class="min-h-screen bg-paper">
    <div v-if="pending" class="grid min-h-screen place-items-center text-ink">
      Loading the 360 experience...
    </div>

    <div v-else-if="error || !place || !activeScene" class="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <h1 class="text-2xl font-semibold text-ink">Experience unavailable</h1>
        <p class="mt-2 text-sm text-ink/65">The local API did not return a tour.</p>
      </div>
    </div>

    <div v-else class="flex min-h-screen flex-col lg:flex-row">
      <TourSidebar
        :place="place"
        :scenes="scenes"
        :active-scene="activeScene"
        :active-hotspot="activeHotspot"
        :selected-hotspot-id="selectedHotspotId"
        @select-scene="activeSceneId = $event.id"
        @select-hotspot="selectedHotspotId = $event"
      />
      <section class="order-1 flex min-h-[62vh] flex-1 flex-col bg-ink lg:order-2 lg:h-screen">
        <div class="flex items-center justify-between border-b border-white/10 bg-ink px-4 py-3 text-white lg:px-6">
          <div class="min-w-0">
            <p class="truncate text-sm font-semibold">{{ activeScene.title }}</p>
            <p class="truncate text-xs text-white/55">{{ activeScene.subtitle }}</p>
          </div>
          <div class="ml-4 rounded bg-white/10 px-3 py-2 text-xs font-medium text-white/80">
            Drag to look around
          </div>
        </div>
        <SceneViewer
          :scene="activeScene"
          @hotspot="selectedHotspotId = $event"
          @navigate="activeSceneId = $event"
        />
      </section>
    </div>
  </main>
</template>
