<script setup lang="ts">
import { Binoculars, Clock3, Database, MapPin, Server, Warehouse } from '@lucide/vue';
import type { PlaceExperience, PlaceHotspot, PlaceScene } from '~/types/place';

defineProps<{
  place: PlaceExperience;
  scenes: PlaceScene[];
  activeScene: PlaceScene;
  activeHotspot: PlaceHotspot | undefined;
  selectedHotspotId: string;
}>();

const emit = defineEmits<{
  selectScene: [scene: PlaceScene];
  selectHotspot: [id: string];
}>();
</script>

<template>
  <aside class="order-2 w-full border-t border-ink/10 bg-paper/95 p-4 lg:order-1 lg:h-screen lg:w-[380px] lg:overflow-y-auto lg:border-r lg:border-t-0 lg:p-6">
    <div class="flex items-center gap-3">
      <div class="grid h-11 w-11 place-items-center rounded bg-ink text-paper">
        <Binoculars class="h-5 w-5" />
      </div>
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-river">View360</p>
        <h1 class="text-2xl font-semibold leading-tight text-ink">{{ place.title }}</h1>
      </div>
    </div>

    <p class="mt-5 text-sm leading-6 text-ink/70">{{ place.summary }}</p>

    <div class="mt-5 grid grid-cols-2 gap-3 text-sm">
      <div class="border border-ink/10 bg-white p-3">
        <MapPin class="mb-2 h-4 w-4 text-clay" />
        <p class="font-medium text-ink">{{ place.location }}</p>
      </div>
      <div class="border border-ink/10 bg-white p-3">
        <Clock3 class="mb-2 h-4 w-4 text-moss" />
        <p class="font-medium text-ink">{{ place.duration }}</p>
      </div>
    </div>

    <SceneGraph :scenes="scenes" :active-scene-id="activeScene.id" @select="emit('selectScene', $event)" />
    <SceneList :scenes="scenes" :active-scene-id="activeScene.id" @select="emit('selectScene', $event)" />
    <HotspotPanel :scene="activeScene" :active-hotspot="activeHotspot" :selected-hotspot-id="selectedHotspotId" @select="emit('selectHotspot', $event)" />

    <section class="mt-7 grid gap-2 text-xs text-ink/60">
      <div class="flex items-center gap-2"><Server class="h-4 w-4 text-river" /> Nuxt server API split into catalog and experience services</div>
      <div class="flex items-center gap-2"><Warehouse class="h-4 w-4 text-moss" /> MinIO ready for future panorama object storage</div>
      <div class="flex items-center gap-2"><Database class="h-4 w-4 text-clay" /> MariaDB reserved for persistent tour metadata</div>
    </section>
  </aside>
</template>
