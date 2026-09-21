<script setup lang="ts">
/**
 * /pages/ui-demo.vue
 * Showcase page cho tất cả Astryx-ported UI components.
 * Truy cập tại: http://localhost:3000/ui-demo
 */

import { ref } from 'vue';
import { useToast } from '~/composables/useToast';

definePageMeta({ layout: false });

useHead({ title: 'UI Components — View360' });

const toast = useToast();

// State demos
const switchVal    = ref(false);
const inputVal     = ref('');
const errorInput   = ref('');
const selectedTab  = ref('button');

const tabs = [
  { id: 'button',    label: 'Button & Badge' },
  { id: 'card',      label: 'Card & Avatar' },
  { id: 'feedback',  label: 'Toast & Banner' },
  { id: 'form',      label: 'Form Controls' },
  { id: 'misc',      label: 'Misc' },
];
</script>

<template>
  <div class="min-h-screen bg-[--ui-color-bg] font-[--ui-font-sans]">

    <!-- Header -->
    <header class="sticky top-0 z-20 border-b border-[--ui-color-border] bg-[--ui-color-surface]/90 backdrop-blur-sm">
      <div class="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <div class="flex items-center gap-3">
          <UiBadge variant="primary" pill>Astryx → Vue</UiBadge>
          <span class="text-base font-semibold text-[--ui-color-text-primary]">UI Component Library</span>
        </div>
        <div class="flex items-center gap-2">
          <UiTooltip content="Chuyển đổi theme">
            <ThemeToggle size="text-xl" />
          </UiTooltip>
          <NuxtLink to="/">
            <UiButton variant="ghost" size="sm">← Về trang chủ</UiButton>
          </NuxtLink>
        </div>
      </div>
    </header>

    <div class="mx-auto max-w-5xl px-6 py-10">
      <!-- Intro -->
      <div class="mb-10">
        <h1 class="text-3xl font-bold text-[--ui-color-text-primary]">Astryx Design System</h1>
        <p class="mt-2 text-[--ui-color-text-secondary]">
          16 component được port từ <a href="https://astryx.atmeta.com" target="_blank" class="text-[--ui-color-brand] underline underline-offset-2">astryx.atmeta.com</a>
          sang Vue 3 + Tailwind CSS. Sử dụng prefix <UiKbd>Ui</UiKbd> khi dùng (e.g. <UiKbd>&lt;UiButton /&gt;</UiKbd>).
        </p>
      </div>

      <!-- Tab nav -->
      <div class="mb-8 flex gap-1 border-b border-[--ui-color-border]">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          :class="[
            'px-4 py-2.5 text-sm font-medium transition-colors -mb-px border-b-2',
            selectedTab === tab.id
              ? 'border-[--ui-color-brand] text-[--ui-color-brand]'
              : 'border-transparent text-[--ui-color-text-secondary] hover:text-[--ui-color-text-primary]',
          ]"
          @click="selectedTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- ── Tab: Button & Badge ─────────────────────────────────────────── -->
      <div v-if="selectedTab === 'button'" class="space-y-10">

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">Button — variants</h2>
          </template>
          <div class="flex flex-wrap gap-3">
            <UiButton variant="primary">Primary</UiButton>
            <UiButton variant="secondary">Secondary</UiButton>
            <UiButton variant="ghost">Ghost</UiButton>
            <UiButton variant="muted">Muted</UiButton>
            <UiButton variant="danger">Danger</UiButton>
          </div>
        </UiCard>

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">Button — sizes</h2>
          </template>
          <div class="flex flex-wrap items-center gap-3">
            <UiButton size="sm">Small</UiButton>
            <UiButton size="md">Medium</UiButton>
            <UiButton size="lg">Large</UiButton>
          </div>
        </UiCard>

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">Button — states</h2>
          </template>
          <div class="flex flex-wrap items-center gap-3">
            <UiButton :loading="true">Loading</UiButton>
            <UiButton :disabled="true">Disabled</UiButton>
            <UiButton href="https://astryx.atmeta.com" variant="secondary">
              Link button ↗
            </UiButton>
          </div>
        </UiCard>

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">Badge — variants</h2>
          </template>
          <div class="flex flex-wrap gap-3">
            <UiBadge variant="default">Default</UiBadge>
            <UiBadge variant="primary">Primary</UiBadge>
            <UiBadge variant="success">Success</UiBadge>
            <UiBadge variant="error">Error</UiBadge>
            <UiBadge variant="warning">Warning</UiBadge>
            <UiBadge variant="muted">Muted</UiBadge>
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <UiBadge variant="default" size="sm">sm · default</UiBadge>
            <UiBadge variant="primary" pill>pill · primary</UiBadge>
            <UiBadge variant="success" size="sm" pill>sm · pill · success</UiBadge>
          </div>
        </UiCard>

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">Kbd — keyboard shortcuts</h2>
          </template>
          <div class="flex flex-wrap items-center gap-2">
            <UiKbd>⌘</UiKbd><span class="text-sm text-[--ui-color-text-muted]">+</span><UiKbd>K</UiKbd>
            <UiDivider orientation="vertical" />
            <UiKbd>Ctrl</UiKbd><span class="text-sm text-[--ui-color-text-muted]">+</span><UiKbd>S</UiKbd>
            <UiDivider orientation="vertical" />
            <UiKbd>Esc</UiKbd>
            <UiKbd>Tab</UiKbd>
            <UiKbd>Enter</UiKbd>
          </div>
        </UiCard>

      </div>

      <!-- ── Tab: Card & Avatar ──────────────────────────────────────────── -->
      <div v-if="selectedTab === 'card'" class="space-y-10">

        <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <UiCard variant="surface" padding="md">
            <p class="text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted] mb-2">Surface</p>
            <p class="text-sm text-[--ui-color-text-secondary]">Mặc định với ring border.</p>
          </UiCard>
          <UiCard variant="elevated" padding="md">
            <p class="text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted] mb-2">Elevated</p>
            <p class="text-sm text-[--ui-color-text-secondary]">Shadow thay vì border.</p>
          </UiCard>
          <UiCard variant="outlined" padding="md">
            <p class="text-xs font-semibold uppercase tracking-wide text-[--ui-color-text-muted] mb-2">Outlined</p>
            <p class="text-sm text-[--ui-color-text-secondary]">Strong border, bg transparent.</p>
          </UiCard>
        </div>

        <UiCard :hoverable="true" padding="md">
          <p class="text-sm font-medium text-[--ui-color-text-primary]">Hoverable card — hover để xem hiệu ứng lift</p>
          <p class="text-xs text-[--ui-color-text-muted] mt-1">Dùng prop <UiKbd>:hoverable="true"</UiKbd></p>
        </UiCard>

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">Avatar — sizes & shapes</h2>
          </template>
          <div class="flex flex-wrap items-end gap-4 mb-6">
            <UiAvatar size="xs" name="Nguyễn Văn A" />
            <UiAvatar size="sm" name="Trần Thị B" />
            <UiAvatar size="md" name="Lê Văn C" />
            <UiAvatar size="lg" name="Phạm Thị D" />
            <UiAvatar size="xl" name="Hoàng Văn E" />
          </div>
          <div class="flex flex-wrap items-end gap-4 mb-6">
            <UiAvatar size="md" name="Square A" shape="square" />
            <UiAvatar size="lg" name="Square B" shape="square" />
            <UiAvatar size="xl" src="https://i.pravatar.cc/150?img=5" name="With Photo" />
          </div>
          <!-- Avatar + StatusDot -->
          <div class="flex flex-wrap items-end gap-6">
            <div class="relative inline-flex">
              <UiAvatar size="lg" name="Online User" />
              <UiStatusDot variant="online" size="md" :pulse="true"
                class="absolute bottom-0 right-0 ring-2 ring-white dark:ring-[#1c1c1c]" />
            </div>
            <div class="relative inline-flex">
              <UiAvatar size="lg" name="Busy User" />
              <UiStatusDot variant="busy" size="md"
                class="absolute bottom-0 right-0 ring-2 ring-white dark:ring-[#1c1c1c]" />
            </div>
            <div class="relative inline-flex">
              <UiAvatar size="lg" name="Away User" />
              <UiStatusDot variant="away" size="md"
                class="absolute bottom-0 right-0 ring-2 ring-white dark:ring-[#1c1c1c]" />
            </div>
            <div class="relative inline-flex">
              <UiAvatar size="lg" name="Offline User" />
              <UiStatusDot variant="offline" size="md"
                class="absolute bottom-0 right-0 ring-2 ring-white dark:ring-[#1c1c1c]" />
            </div>
          </div>
          <template #footer>
            <p class="text-xs text-[--ui-color-text-muted]">Màu avatar được tạo tự động từ tên, nhất quán mỗi lần render.</p>
          </template>
        </UiCard>

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">Skeleton loading</h2>
          </template>
          <div class="space-y-5">
            <!-- Article skeleton -->
            <div class="flex items-start gap-4">
              <UiSkeleton width="48" height="48" rounded="full" />
              <div class="flex-1 space-y-2 pt-1">
                <UiSkeleton height="14" width="60%" />
                <UiSkeleton height="12" :lines="3" />
              </div>
            </div>
            <!-- Card skeleton -->
            <UiSkeleton height="140" rounded="md" />
          </div>
        </UiCard>

      </div>

      <!-- ── Tab: Toast & Banner ─────────────────────────────────────────── -->
      <div v-if="selectedTab === 'feedback'" class="space-y-10">

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">Toast — imperative API</h2>
          </template>
          <p class="text-sm text-[--ui-color-text-secondary] mb-4">
            Dùng <code class="text-xs bg-[--ui-color-bg-muted] px-1.5 py-0.5 rounded font-mono">useToast()</code> từ bất kỳ component nào.
          </p>
          <div class="flex flex-wrap gap-3">
            <UiButton variant="ghost" @click="toast.show({ message: 'Thông báo mặc định', variant: 'default' })">Default</UiButton>
            <UiButton variant="ghost" @click="toast.success('Đã lưu thành công! ✓')">Success</UiButton>
            <UiButton variant="ghost" @click="toast.error('Có lỗi xảy ra. Thử lại.')">Error</UiButton>
            <UiButton variant="ghost" @click="toast.warning('Dung lượng gần đầy.')">Warning</UiButton>
            <UiButton variant="secondary" @click="toast.show({ title: 'Tiêu đề', message: 'Toast với tiêu đề riêng biệt.', variant: 'success' })">
              With title
            </UiButton>
          </div>
        </UiCard>

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">Banner — contextual alerts</h2>
          </template>
          <div class="space-y-3">
            <UiBanner variant="info" title="Thông tin">Panorama mới đã được tải lên và đang chờ xử lý.</UiBanner>
            <UiBanner variant="success" title="Thành công" :dismissable="true">Tour đã được lưu thành công vào hệ thống.</UiBanner>
            <UiBanner variant="warning" :dismissable="true">Ảnh chụp có độ phân giải thấp. Chất lượng xem có thể bị ảnh hưởng.</UiBanner>
            <UiBanner variant="error" title="Lỗi tải ảnh">Không thể tải panorama. Kiểm tra kết nối và thử lại.</UiBanner>
            <UiBanner variant="info">
              Banner với actions slot.
              <template #actions>
                <UiButton size="sm" variant="secondary">Tìm hiểu thêm</UiButton>
                <UiButton size="sm" variant="ghost">Bỏ qua</UiButton>
              </template>
            </UiBanner>
          </div>
        </UiCard>

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">EmptyState</h2>
          </template>
          <UiEmptyState
            icon="🗺️"
            title="Chưa có tour nào"
            description="Bắt đầu bằng cách tải lên ảnh panorama đầu tiên của bạn."
          >
            <template #actions>
              <UiButton variant="primary">Tạo tour mới</UiButton>
              <UiButton variant="ghost">Xem hướng dẫn</UiButton>
            </template>
          </UiEmptyState>
        </UiCard>

      </div>

      <!-- ── Tab: Form Controls ─────────────────────────────────────────── -->
      <div v-if="selectedTab === 'form'" class="space-y-10">

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">TextInput</h2>
          </template>
          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <UiTextInput
              v-model="inputVal"
              label="Tên tour"
              placeholder="Nhập tên tour..."
              hint="Tên sẽ hiển thị trong danh sách."
            />
            <UiTextInput
              v-model="errorInput"
              label="Email"
              type="email"
              placeholder="user@example.com"
              error="Địa chỉ email không hợp lệ."
              :required="true"
            />
            <UiTextInput
              label="Tìm kiếm"
              placeholder="Tìm cảnh..."
              size="sm"
            >
              <template #leading>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
              </template>
            </UiTextInput>
            <UiTextInput label="Chỉ đọc" :model-value="'Giá trị cố định'" :readonly="true" />
            <UiTextInput label="Bị vô hiệu hóa" placeholder="Không thể nhập..." :disabled="true" />
          </div>
        </UiCard>

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">Switch</h2>
          </template>
          <div class="space-y-4">
            <UiSwitch v-model="switchVal" label="Bật thông báo" />
            <UiSwitch :model-value="true" label="Lưu tự động" size="sm" />
            <UiSwitch :model-value="false" label="Chế độ ngoại tuyến" :disabled="true" />
            <p class="text-xs text-[--ui-color-text-muted]">
              Switch 1: <UiBadge :variant="switchVal ? 'success' : 'muted'">{{ switchVal ? 'Bật' : 'Tắt' }}</UiBadge>
            </p>
          </div>
        </UiCard>

      </div>

      <!-- ── Tab: Misc ──────────────────────────────────────────────────── -->
      <div v-if="selectedTab === 'misc'" class="space-y-10">

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">Spinner</h2>
          </template>
          <div class="flex flex-wrap items-center gap-6">
            <div class="text-center">
              <UiSpinner size="sm" /><p class="mt-2 text-xs text-[--ui-color-text-muted]">sm</p>
            </div>
            <div class="text-center">
              <UiSpinner size="md" /><p class="mt-2 text-xs text-[--ui-color-text-muted]">md</p>
            </div>
            <div class="text-center">
              <UiSpinner size="lg" /><p class="mt-2 text-xs text-[--ui-color-text-muted]">lg</p>
            </div>
            <div class="grid h-16 w-16 place-items-center rounded-lg bg-ink text-center">
              <UiSpinner size="md" color="white" /><p class="text-[9px] text-white/50 mt-1">white</p>
            </div>
          </div>
        </UiCard>

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">Divider</h2>
          </template>
          <div class="space-y-4">
            <UiDivider />
            <UiDivider variant="subtle" />
            <UiDivider variant="strong" />
            <UiDivider label="hoặc" />
            <div class="flex items-center h-10 gap-4">
              <span class="text-sm text-[--ui-color-text-secondary]">Trái</span>
              <UiDivider orientation="vertical" />
              <span class="text-sm text-[--ui-color-text-secondary]">Phải</span>
            </div>
          </div>
        </UiCard>

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">Tooltip</h2>
          </template>
          <div class="flex flex-wrap gap-6 py-4">
            <UiTooltip content="Xem panorama 360°" placement="top">
              <UiButton variant="secondary" size="sm">Hover (top)</UiButton>
            </UiTooltip>
            <UiTooltip content="Chỉnh sửa cảnh" placement="bottom">
              <UiButton variant="secondary" size="sm">Hover (bottom)</UiButton>
            </UiTooltip>
            <UiTooltip content="Xoá tour này" placement="right">
              <UiButton variant="danger" size="sm">Hover (right)</UiButton>
            </UiTooltip>
          </div>
        </UiCard>

        <UiCard>
          <template #header>
            <h2 class="text-sm font-semibold text-[--ui-color-text-primary]">StatusDot — tất cả variants</h2>
          </template>
          <div class="flex flex-wrap items-center gap-6">
            <div v-for="s in ['online', 'offline', 'busy', 'away'] as const" :key="s" class="flex items-center gap-2">
              <UiStatusDot :variant="s" :pulse="s === 'online'" />
              <span class="text-sm capitalize text-[--ui-color-text-secondary]">{{ s }}</span>
            </div>
          </div>
        </UiCard>

      </div>
    </div>
  </div>
</template>
