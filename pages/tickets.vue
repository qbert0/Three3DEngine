<script setup lang="ts">
/**
 * pages/tickets.vue — Đăng ký tham quan Sông Vân Art Space
 */
definePageMeta({ layout: 'default' });
useHead({
  title: 'Đăng Ký Tham Quan — Sông Vân Art Space',
  meta: [{ name: 'description', content: 'Gửi yêu cầu tham quan Sông Vân Art Space tại Ninh Bình.' }],
});

const ticketTypes = [
  {
    id: 'normal',
    label: 'Khách Cá Nhân',
    price: 0,
    desc: 'Đăng ký lịch tham quan không gian',
    includes: ['Tham quan không gian trưng bày', 'Khám phá tour 360°', 'Xác nhận lịch trước khi đến'],
    badge: '',
  },
  {
    id: 'child',
    label: 'Học Sinh · Sinh Viên',
    price: 0,
    desc: 'Nhóm học tập và nghiên cứu nghệ thuật',
    includes: ['Tham quan không gian', 'Tìm hiểu điêu khắc đá', 'Liên hệ xác nhận chương trình'],
    badge: '',
  },
  {
    id: 'family',
    label: 'Gia Đình',
    price: 0,
    desc: 'Nhóm gia đình muốn khám phá nghệ thuật',
    includes: ['Tham quan tự do', 'Tour 360° trước chuyến đi', 'Xác nhận lịch trước khi đến'],
    badge: 'Gợi ý',
  },
  {
    id: 'group',
    label: 'Đoàn · Tổ Chức',
    price: 0,
    desc: 'Đoàn từ 10 người hoặc đối tác nghệ thuật',
    includes: ['Đề xuất lịch riêng', 'Trao đổi nhu cầu đón đoàn', 'Liên hệ để xác nhận'],
    badge: 'Liên hệ',
  },
];

const selected    = ref('family');
const visitDate   = ref('');
const quantity    = ref(1);
const visitorName = ref('');
const visitorPhone = ref('');
const submitted   = ref(false);

const selectedTicket = computed(() => ticketTypes.find(t => t.id === selected.value));
const totalPrice = computed(() => (selectedTicket.value?.price ?? 0) * quantity.value);

function formatPrice(n: number) {
  return n.toLocaleString('vi-VN') + '₫';
}

function handleSubmit() {
  if (!visitDate.value || !visitorName.value || !visitorPhone.value) return;
  submitted.value = true;
}
</script>

<template>
  <div class="container section">

    <div class="section-head center">
      <div class="section-eyebrow">Tham quan</div>
      <h1 class="section-title">Đăng ký lịch tham quan</h1>
      <p class="section-sub">
        Chọn hình thức tham quan và gửi thông tin. Không gian sẽ liên hệ xác nhận lịch phù hợp trước khi bạn đến.
      </p>
    </div>

    <!-- Success state -->
    <div v-if="submitted"
      class="max-w-md mx-auto rounded-2xl border border-green-500/30 bg-green-500/10 p-10 text-center">
      <div class="text-5xl mb-4">🎉</div>
      <h2 class="text-xl font-bold text-[--ui-color-text-primary]">Đã nhận đăng ký!</h2>
      <p class="mt-2 text-sm text-[--ui-color-text-muted]">Yêu cầu của bạn đã được ghi nhận. Sông Vân Art Space sẽ liên hệ số <strong>{{ visitorPhone }}</strong> để xác nhận lịch.</p>
      <div class="mt-6 p-4 rounded-xl bg-[--ui-color-bg-muted] font-mono text-2xl tracking-widest text-center text-[--ui-color-brand]">
        SV{{ Math.random().toString(36).slice(2, 8).toUpperCase() }}
      </div>
      <button type="button" class="mt-6 text-sm text-[--ui-color-brand] hover:underline" @click="submitted = false">Đặt thêm vé</button>
    </div>

    <div v-else class="grid grid-cols-1 gap-8 lg:grid-cols-3">

      <!-- Ticket picker -->
      <div class="lg:col-span-2 space-y-4">
        <h2 class="font-bold text-[--ui-color-text-primary] mb-4">Chọn hình thức tham quan</h2>
        <label v-for="t in ticketTypes" :key="t.id"
          :class="['relative flex cursor-pointer gap-4 rounded-2xl border-2 p-5 transition',
            selected === t.id
              ? 'border-[--ui-color-brand] bg-[--ui-color-brand-muted]'
              : 'border-[--ui-color-border] bg-[--ui-color-surface] hover:border-[--ui-color-brand]/40']">
          <input type="radio" :value="t.id" v-model="selected" class="sr-only" />
          <div class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
            :class="selected === t.id ? 'border-[--ui-color-brand]' : 'border-[--ui-color-border]'">
            <div v-if="selected === t.id" class="h-2.5 w-2.5 rounded-full bg-[--ui-color-brand]" />
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-2">
              <p class="font-bold text-[--ui-color-text-primary]">{{ t.label }}</p>
              <span v-if="t.badge"
                class="rounded-full bg-[--ui-color-brand] px-2 py-0.5 text-[10px] font-bold text-white">{{ t.badge }}</span>
            </div>
            <p class="text-xs text-[--ui-color-text-muted] mt-0.5">{{ t.desc }}</p>
            <ul class="mt-2 space-y-1">
              <li v-for="inc in t.includes" :key="inc" class="flex items-center gap-1.5 text-xs text-[--ui-color-text-secondary]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                {{ inc }}
              </li>
            </ul>
          </div>
          <p class="shrink-0 text-xl font-bold text-[--ui-color-brand]">{{ formatPrice(t.price) }}</p>
        </label>
      </div>

      <!-- Order form -->
      <div class="rounded-2xl border border-[--ui-color-border] bg-[--ui-color-surface] p-6 h-fit sticky top-20">
        <h2 class="font-bold text-[--ui-color-text-primary] mb-5">Thông tin đăng ký</h2>
        <form class="space-y-4" @submit.prevent="handleSubmit">
          <div>
            <label class="text-xs font-semibold text-[--ui-color-text-secondary] block mb-1">Ngày tham quan *</label>
            <input type="date" v-model="visitDate" required
              class="w-full rounded-lg border border-[--ui-color-border] bg-[--ui-color-bg] px-3 py-2.5 text-sm text-[--ui-color-text-primary] outline-none focus:border-[--ui-color-brand] focus:ring-2 focus:ring-[--ui-color-brand]/20 transition" />
          </div>
          <div>
            <label class="text-xs font-semibold text-[--ui-color-text-secondary] block mb-1">Số lượng vé</label>
            <div class="flex items-center gap-3">
              <button type="button"
                class="grid h-9 w-9 place-items-center rounded-lg border border-[--ui-color-border] text-lg font-bold transition hover:bg-[--ui-color-bg-muted]"
                @click="quantity = Math.max(1, quantity - 1)">−</button>
              <span class="text-lg font-bold text-[--ui-color-text-primary] w-8 text-center">{{ quantity }}</span>
              <button type="button"
                class="grid h-9 w-9 place-items-center rounded-lg border border-[--ui-color-border] text-lg font-bold transition hover:bg-[--ui-color-bg-muted]"
                @click="quantity++">+</button>
            </div>
          </div>
          <div>
            <label class="text-xs font-semibold text-[--ui-color-text-secondary] block mb-1">Họ tên *</label>
            <input type="text" v-model="visitorName" placeholder="Nguyễn Văn A" required
              class="w-full rounded-lg border border-[--ui-color-border] bg-[--ui-color-bg] px-3 py-2.5 text-sm text-[--ui-color-text-primary] outline-none focus:border-[--ui-color-brand] focus:ring-2 focus:ring-[--ui-color-brand]/20 transition" />
          </div>
          <div>
            <label class="text-xs font-semibold text-[--ui-color-text-secondary] block mb-1">Số điện thoại *</label>
            <input type="tel" v-model="visitorPhone" placeholder="090x xxx xxx" required
              class="w-full rounded-lg border border-[--ui-color-border] bg-[--ui-color-bg] px-3 py-2.5 text-sm text-[--ui-color-text-primary] outline-none focus:border-[--ui-color-brand] focus:ring-2 focus:ring-[--ui-color-brand]/20 transition" />
          </div>

          <!-- Summary -->
          <div class="rounded-xl bg-[--ui-color-bg-muted] p-4 space-y-2">
            <div class="flex justify-between text-sm">
              <span class="text-[--ui-color-text-muted]">{{ selectedTicket?.label }}</span>
              <span class="text-[--ui-color-text-secondary]">{{ formatPrice(selectedTicket?.price ?? 0) }} × {{ quantity }}</span>
            </div>
            <div class="flex justify-between font-bold text-[--ui-color-text-primary] border-t border-[--ui-color-border] pt-2 mt-2">
              <span>Tổng cộng</span>
              <span class="text-[--ui-color-brand] text-lg">{{ formatPrice(totalPrice) }}</span>
            </div>
          </div>

          <button type="submit"
            class="w-full rounded-xl bg-gradient-to-r from-[#1a4a2e] to-[#2d7a4f] py-3 text-sm font-bold text-white shadow-md transition hover:opacity-90 active:scale-[0.98]">
            Gửi yêu cầu tham quan
          </button>
          <p class="text-center text-xs text-[--ui-color-text-muted]">🔒 Thanh toán an toàn · Hoàn tiền 100% nếu hủy trước 24h</p>
        </form>
      </div>
    </div>
  </div>
</template>
