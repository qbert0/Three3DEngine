<script setup lang="ts">
/**
 * pages/tickets.vue — Đặt vé tham quan khu du lịch Trảng Bay
 */
definePageMeta({ layout: 'default' });
useHead({
  title: 'Đặt Vé — Trảng Bay',
  meta: [{ name: 'description', content: 'Đặt vé tham quan khu du lịch sinh thái Trảng Bay trực tuyến. Nhận QR ngay lập tức.' }],
});

const ticketTypes = [
  {
    id: 'normal',
    label: 'Vé Thường',
    price: 150000,
    desc: 'Người lớn (trên 12 tuổi)',
    includes: ['Tham quan toàn khu', 'Bản đồ tham quan', 'Wifi khu vực trung tâm'],
    badge: '',
  },
  {
    id: 'child',
    label: 'Vé Trẻ Em',
    price: 75000,
    desc: 'Trẻ em 4–12 tuổi',
    includes: ['Tham quan toàn khu', 'Bản đồ tham quan', 'Khu vui chơi trẻ em'],
    badge: '',
  },
  {
    id: 'family',
    label: 'Vé Gia Đình',
    price: 400000,
    desc: '2 người lớn + 2 trẻ em',
    includes: ['Tham quan toàn khu', 'Picnic set miễn phí', 'Ưu tiên đặt chỗ sự kiện', 'Giảm 20% dịch vụ ăn uống'],
    badge: 'Phổ biến',
  },
  {
    id: 'group',
    label: 'Vé Nhóm',
    price: 120000,
    desc: 'Từ 10 người (tính/người)',
    includes: ['Tham quan toàn khu', 'Hướng dẫn viên riêng', 'Xe đưa đón nội bộ'],
    badge: 'Tiết kiệm',
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
      <div class="section-eyebrow">Vé tham quan</div>
      <h1 class="section-title">Đặt vé online</h1>
      <p class="section-sub">
        Chọn loại vé, ngày tham quan và điền thông tin. Nhận mã QR xác nhận qua SMS ngay lập tức.
      </p>
    </div>

    <!-- Success state -->
    <div v-if="submitted"
      class="max-w-md mx-auto rounded-2xl border border-green-500/30 bg-green-500/10 p-10 text-center">
      <div class="text-5xl mb-4">🎉</div>
      <h2 class="text-xl font-bold text-[--ui-color-text-primary]">Đặt vé thành công!</h2>
      <p class="mt-2 text-sm text-[--ui-color-text-muted]">Mã QR đã được gửi đến <strong>{{ visitorPhone }}</strong>. Vui lòng xuất trình khi vào cổng.</p>
      <div class="mt-6 p-4 rounded-xl bg-[--ui-color-bg-muted] font-mono text-2xl tracking-widest text-center text-[--ui-color-brand]">
        TB{{ Math.random().toString(36).slice(2, 8).toUpperCase() }}
      </div>
      <button type="button" class="mt-6 text-sm text-[--ui-color-brand] hover:underline" @click="submitted = false">Đặt thêm vé</button>
    </div>

    <div v-else class="grid grid-cols-1 gap-8 lg:grid-cols-3">

      <!-- Ticket picker -->
      <div class="lg:col-span-2 space-y-4">
        <h2 class="font-bold text-[--ui-color-text-primary] mb-4">Chọn loại vé</h2>
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
        <h2 class="font-bold text-[--ui-color-text-primary] mb-5">Thông tin đặt vé</h2>
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
            Đặt vé — {{ formatPrice(totalPrice) }}
          </button>
          <p class="text-center text-xs text-[--ui-color-text-muted]">🔒 Thanh toán an toàn · Hoàn tiền 100% nếu hủy trước 24h</p>
        </form>
      </div>
    </div>
  </div>
</template>
