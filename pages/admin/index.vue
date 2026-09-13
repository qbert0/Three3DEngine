<script setup lang="ts">
definePageMeta({ ssr: false });

const { data } = await useFetch<{ items: any[] }>('/api/tours');
const tours = computed(() => data.value?.items ?? []);
</script>

<template>
  <main class="min-h-screen bg-ink px-6 py-10 text-white">
    <div class="mx-auto max-w-4xl">
      <!-- Header -->
      <div class="mb-8 flex items-end justify-between">
        <div>
          <p class="text-[11px] font-bold uppercase tracking-[0.22em] text-river">Admin</p>
          <h1 class="mt-1 text-3xl font-bold">Tour Manager</h1>
          <p class="mt-1 text-sm text-white/50">Quản lý và chỉnh sửa các tour 360°</p>
        </div>
        <NuxtLink
          to="/"
          class="rounded-lg border border-white/15 px-4 py-2 text-sm text-white/60 hover:border-white/30 hover:text-white transition-colors"
        >
          ← Xem tour
        </NuxtLink>
      </div>

      <!-- Tour list -->
      <div v-if="tours.length" class="grid gap-4 sm:grid-cols-2">
        <NuxtLink
          v-for="tour in tours"
          :key="tour.slug"
          :to="`/admin/${tour.slug}`"
          class="group block rounded-xl border border-white/10 bg-white/5 p-5 hover:border-river/50 hover:bg-white/8 transition-all"
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <p class="font-semibold text-white group-hover:text-river transition-colors">
                {{ tour.title }}
              </p>
              <p class="mt-0.5 text-xs text-white/45">{{ tour.location }}</p>
            </div>
            <span class="shrink-0 rounded-full bg-white/8 px-2.5 py-0.5 text-xs text-white/50">
              {{ tour.sceneCount }} cảnh
            </span>
          </div>
          <p class="mt-3 text-xs leading-5 text-white/40 line-clamp-2">{{ tour.summary }}</p>
          <div class="mt-4 flex items-center gap-2">
            <span class="rounded bg-river/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-river">
              {{ tour.theme ?? 'default' }}
            </span>
          </div>
        </NuxtLink>
      </div>

      <div v-else class="rounded-xl border border-white/10 p-12 text-center text-white/40">
        <p class="text-lg">Không có tour nào</p>
        <p class="mt-1 text-sm">Thêm file .yaml vào thư mục /tours để bắt đầu.</p>
      </div>

      <!-- Dev note -->
      <p class="mt-8 text-xs text-white/25">
        Admin UI — chỉ hoạt động khi <code class="text-white/40">ENABLE_ADMIN=true</code>
      </p>
    </div>
  </main>
</template>
