<script setup lang="ts">
/**
 * layouts/default.vue — Sông Vân Art Space Layout
 * Học từ Heritage Design System (design/index.html):
 * - Topbar info strip (hotline, giờ mở cửa, mạng xã hội)
 * - Sticky header: logo tròn serif + nav links + CTA
 * - Footer đậm nền ink với newsletter + social
 */
const route      = useRoute();
const mobileOpen = ref(false);

const navLinks = [
  { to: '/',        label: 'Trang chủ',  exact: true  },
  { to: '/tours',   label: 'Tour 360°',  exact: false },
  { to: '/tickets', label: 'Tham quan',  exact: false },
  { to: '/events',  label: 'Sự kiện',    exact: false },
  { to: '/about',   label: 'Giới thiệu', exact: false },
];

watch(() => route.path, () => { mobileOpen.value = false; });
</script>

<template>
  <div style="font-family: var(--font-sans); background: var(--tb-paper); color: var(--tb-ink); min-height: 100vh;">

    <!-- ══ TOPBAR ══════════════════════════════════════════════════════════ -->
    <div style="background: var(--tb-ink); color: rgba(245,239,230,.7); font-size: 12px; padding: 8px 0;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 6px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Tham quan: <strong style="color: var(--tb-bronze); margin-left: 4px;">Đặt lịch trước khi đến</strong>
        </div>
        <div style="display: flex; align-items: center; gap: 20px;">
          <a href="tel:+84988793456" style="color: rgba(245,239,230,.7); text-decoration: none; display: flex; align-items: center; gap: 6px;" onmouseover="this.style.color='var(--tb-bronze)'" onmouseout="this.style.color='rgba(245,239,230,.7)'">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <strong style="color: var(--tb-bronze);">+84 988 793 456</strong>
          </a>
          <ThemeToggle size="text-base" />
          <NuxtLink to="/admin" style="color: rgba(245,239,230,.6); font-size: 11px; text-decoration: none;">Quản trị</NuxtLink>
        </div>
      </div>
    </div>

    <!-- ══ HEADER ══════════════════════════════════════════════════════════ -->
    <header style="position: sticky; top: 0; z-index: 100; background: rgba(245,239,232,.94); backdrop-filter: blur(12px); border-bottom: 1px solid var(--tb-line);">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; height: 72px; gap: 32px;">

        <!-- Logo -->
        <NuxtLink to="/" style="display: flex; align-items: center; gap: 12px; text-decoration: none;">
          <div style="width: 44px; height: 44px; display: grid; place-items: center; background: linear-gradient(135deg, var(--tb-forest), var(--tb-forest-dk)); color: #fff; border-radius: 50%; font-family: var(--font-serif); font-weight: 600; font-size: 19px; box-shadow: var(--shadow-md); flex-shrink: 0;">
            SV
          </div>
          <div style="line-height: 1.1;">
            <strong style="display: block; font-family: var(--font-serif); font-size: 17px; font-weight: 600; letter-spacing: -.01em; color: var(--tb-ink);">Sông Vân</strong>
            <span style="font-size: 10px; letter-spacing: .18em; text-transform: uppercase; color: var(--tb-muted);">Art Space · Ninh Bình</span>
          </div>
        </NuxtLink>

        <!-- Desktop nav -->
        <nav style="display: flex; gap: 4px;" class="hidden lg:flex">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            style="padding: 8px 14px; border-radius: 8px; font-size: 14px; font-weight: 500; text-decoration: none; transition: all .15s;"
            :style="{ color: route.path === link.to ? 'var(--tb-forest)' : 'var(--ink-70)',
                      background: route.path === link.to ? 'var(--ink-10)' : 'transparent' }"
            @mouseover="($event.target as HTMLElement).style.color = 'var(--tb-forest)'"
            @mouseout="($event.target as HTMLElement).style.color = route.path === link.to ? 'var(--tb-forest)' : 'var(--ink-70)'"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- Actions -->
        <div style="display: flex; align-items: center; gap: 8px;">
          <NuxtLink to="/tickets" class="hidden sm:block">
            <button type="button"
              style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: 999px; background: var(--tb-forest); color: #fff; font-weight: 600; font-size: 14px; box-shadow: var(--shadow-md); transition: all .2s; border: none; cursor: pointer; font-family: var(--font-sans);"
              onmouseover="this.style.background='var(--tb-forest-dk)'; this.style.transform='translateY(-1px)'"
              onmouseout="this.style.background='var(--tb-forest)'; this.style.transform='translateY(0)'">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/></svg>
              Đăng ký tham quan
            </button>
          </NuxtLink>

          <!-- Mobile toggle -->
          <button type="button" class="lg:hidden"
            style="width: 40px; height: 40px; display: grid; place-items: center; border-radius: 50%; color: var(--ink-70); transition: all .15s; background: transparent; border: none; cursor: pointer;"
            @click="mobileOpen = !mobileOpen">
            <svg v-if="!mobileOpen" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <Transition name="slide-down">
        <div v-if="mobileOpen" style="border-top: 1px solid var(--tb-line); background: rgba(245,239,232,.97); padding: 12px 24px 16px;" class="lg:hidden">
          <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"
            style="display: flex; padding: 10px 12px; border-radius: 8px; font-size: 14px; font-weight: 500; color: var(--ink-70); text-decoration: none; transition: all .15s;">
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/tickets" style="display: block; margin-top: 8px;">
            <button type="button" style="width: 100%; padding: 11px; border-radius: 999px; background: var(--tb-forest); color: #fff; font-weight: 600; font-size: 14px; border: none; cursor: pointer; font-family: var(--font-sans);">
              Đăng ký tham quan
            </button>
          </NuxtLink>
        </div>
      </Transition>
    </header>

    <!-- ══ PAGE CONTENT ═════════════════════════════════════════════════════ -->
    <main>
      <slot />
    </main>

    <!-- ══ FOOTER ══════════════════════════════════════════════════════════ -->
    <footer style="background: var(--tb-ink); color: rgba(245,239,230,.7); padding: 64px 0 0;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px;">

        <div style="display: grid; grid-template-columns: 1.4fr 1fr 1fr 1.2fr; gap: 48px; padding-bottom: 48px; border-bottom: 1px solid rgba(255,255,255,.1);" class="footer-grid-responsive">

          <!-- Brand + newsletter -->
          <div>
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
              <div style="width: 40px; height: 40px; display: grid; place-items: center; background: linear-gradient(135deg, var(--tb-forest), var(--tb-forest-dk)); color: #fff; border-radius: 50%; font-family: var(--font-serif); font-weight: 600; font-size: 15px;">SV</div>
              <strong style="color: #fff; font-family: var(--font-serif); font-size: 18px;">Sông Vân Art Space</strong>
            </div>
            <p style="font-size: 13px; line-height: 1.7; max-width: 300px; margin-bottom: 20px;">
              Không gian nghệ thuật bên dòng sông Vân, nơi điêu khắc đá đương đại gặp gỡ truyền thống làng nghề Ninh Vân.
            </p>
            <div style="display: flex; gap: 8px;">
              <input type="email" placeholder="Email của bạn..."
                style="flex: 1; padding: 10px 14px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.15); border-radius: 8px; color: #fff; font-size: 13px; font-family: var(--font-sans); outline: none;" />
              <button type="button" style="padding: 10px 16px; background: var(--tb-forest); color: #fff; border-radius: 8px; font-weight: 600; font-size: 13px; border: none; cursor: pointer; font-family: var(--font-sans); transition: background .2s;">
                Đăng ký
              </button>
            </div>
          </div>

          <!-- Explore -->
          <div>
            <h5 style="color: #fff; font-size: 13px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 20px;">Khám phá</h5>
            <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 10px;">
              <li v-for="link in navLinks" :key="link.to">
                <NuxtLink :to="link.to" style="font-size: 13px; color: rgba(245,239,230,.7); text-decoration: none; transition: color .15s;" onmouseover="this.style.color='var(--tb-bronze)'" onmouseout="this.style.color='rgba(245,239,230,.7)'">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h5 style="color: #fff; font-size: 13px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 20px;">Hỗ trợ</h5>
            <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 10px;">
              <li v-for="item in ['Hướng dẫn tham quan','Thông tin không gian','Câu hỏi thường gặp','Liên hệ hợp tác']" :key="item">
                <a href="#" style="font-size: 13px; color: rgba(245,239,230,.7); text-decoration: none; transition: color .15s;" onmouseover="this.style.color='var(--tb-bronze)'" onmouseout="this.style.color='rgba(245,239,230,.7)'">
                  {{ item }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h5 style="color: #fff; font-size: 13px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 20px;">Liên hệ</h5>
            <div style="display: grid; gap: 12px; font-size: 13px;">
              <div v-for="c in [
                { icon: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0', text: 'Thôn Xuân Phúc, phường Nam Hoa Lư, Ninh Bình' },
                { icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 1 2.81.7A2 2 0 0 1 22 16.92z', text: 'Liên hệ trước khi tham quan' },
                { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6', text: 'Sông Vân Art Space' },
              ]" :key="c.text" style="display: flex; gap: 10px; align-items: flex-start;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--tb-bronze)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;">
                  <path :d="c.icon" />
                </svg>
                <span>{{ c.text }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer bottom -->
        <div style="padding: 20px 0; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; font-size: 12px;">
          <div>© 2026 Sông Vân Art Space. Bảo lưu mọi quyền.</div>
          <div style="display: flex; gap: 8px; align-items: center;">
            <a v-for="s in ['facebook','instagram','youtube']" :key="s" href="#"
              style="width: 34px; height: 34px; display: grid; place-items: center; background: rgba(255,255,255,.05); border-radius: 50%; color: rgba(245,239,230,.7); text-decoration: none; transition: all .2s;"
              onmouseover="this.style.background='var(--tb-forest)'; this.style.color='#fff'"
              onmouseout="this.style.background='rgba(255,255,255,.05)'; this.style.color='rgba(245,239,230,.7)'"
              :aria-label="s">
              <svg v-if="s==='facebook'" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
              <svg v-else-if="s==='instagram'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.slide-down-enter-active, .slide-down-leave-active { transition: all .2s ease; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-8px); }

@media (max-width: 1024px) {
  .footer-grid-responsive {
    grid-template-columns: 1fr 1fr !important;
  }
}
@media (max-width: 640px) {
  .footer-grid-responsive {
    grid-template-columns: 1fr !important;
  }
}
</style>
