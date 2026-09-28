<script setup lang="ts">
/**
 * pages/index.vue — Landing page Sông Vân Art Space
 * Theo đúng cấu trúc Heritage Design System từ design/index.html:
 *   Hero (slideshow + stats bar) → Giới thiệu → Highlights → Tour 360° → Events → Tickets → Partners → CTA
 */
import type { TourEntry } from '~/types/tour';

definePageMeta({ layout: 'default' });
useHead({
  title: 'Sông Vân Art Space — Điêu khắc đá đương đại',
  meta: [{ name: 'description', content: 'Không gian nghệ thuật Sông Vân tại Ninh Bình — điêu khắc đá đương đại, làng nghề Ninh Vân và tour tham quan 360°.' }],
});

const { data, pending } = await useFetch<{ items: TourEntry[] }>('/api/tours');
const tours        = computed<TourEntry[]>(() => data.value?.items ?? []);
const featuredTour = computed(() => tours.value[0]);

// Hero slides
const heroSlides = [
  { bg: '/images/song-van/sculpture-garden.jpg', label: 'Sông Vân Art Space bên dòng sông Vân' },
  { bg: '/images/song-van/waterside-sculpture.jpg', label: 'Điêu khắc đá trong cảnh quan' },
  { bg: '/images/song-van/gallery-interior.jpg', label: 'Phòng trưng bày Sông Vân' },
];
const currentSlide = ref(0);
let slideTimer: ReturnType<typeof setInterval> | null = null;

function goSlide(i: number) { currentSlide.value = i; }

onMounted(() => {
  slideTimer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % heroSlides.length;
  }, 5500);
});
onBeforeUnmount(() => { if (slideTimer) clearInterval(slideTimer); });

const highlights = [
  { tag: 'Điêu khắc', title: 'Đối thoại cùng đá', desc: 'Ngôn ngữ điêu khắc đương đại được hình thành từ cẩm thạch, đá đen và granite.' },
  { tag: 'Không gian', title: 'Nghệ thuật bên sông', desc: 'Tác phẩm hiện diện giữa ánh sáng, cây xanh và cảnh quan ven sông Vân.' },
  { tag: 'Làng nghề', title: 'Mạch nguồn Ninh Vân', desc: 'Một điểm gặp giữa kỹ nghệ đá truyền thống và tư duy tạo hình đương đại.' },
  { tag: 'Trải nghiệm', title: 'Tour nghệ thuật 360°', desc: 'Dạo qua sân tượng, xưởng sáng tác và không gian trưng bày từ bất cứ đâu.' },
];

const events = [
  { day: '22', month: 'Tháng 3', cat: 'Triển lãm', title: 'Khai mạc triển lãm “Sông Vân”', desc: 'Cuộc gặp gỡ điêu khắc đá đương đại của Lê Thị Hiền và Lương Trịnh.', time: '2026', place: 'Sông Vân Art Space' },
  { day: '22', month: 'Tháng 8', cat: 'Triển lãm', title: 'Hành trình triển lãm “Sông Vân”', desc: 'Hơn 30 tác phẩm kết nối hình khối hiện đại với chất liệu đá Ninh Bình.', time: '2026', place: 'Nam Hoa Lư' },
];

const tickets = [
  { name: 'Khách Cá Nhân', desc: 'Dành cho người yêu nghệ thuật', price: 'Đăng ký', unit: 'trước khi đến', features: ['Tham quan không gian trưng bày','Khám phá tour 360°','Xác nhận lịch trước khi đến'], featured: false },
  { name: 'Nhóm Học Tập', desc: 'Dành cho học sinh, sinh viên và nhà nghiên cứu', price: 'Liên hệ', unit: 'theo chương trình', features: ['Tìm hiểu điêu khắc đá','Khám phá mối liên hệ với làng nghề','Trao đổi nhu cầu đón nhóm'], featured: true },
  { name: 'Đoàn · Đối Tác', desc: 'Dành cho tổ chức và nhóm nghệ thuật', price: 'Liên hệ', unit: 'để xác nhận', features: ['Đề xuất lịch riêng','Trao đổi chương trình phù hợp','Kết nối hợp tác nghệ thuật'], featured: false },
];

const contexts = ['Điêu khắc đương đại', 'Đá Ninh Vân', 'Ninh Bình', 'Sculpture Garden', 'Nghệ thuật & cảnh quan'];
</script>

<template>
  <div>

    <!-- ══ HERO ═══════════════════════════════════════════════════════════ -->
    <section class="hero">

      <!-- Slides -->
      <div class="hero-slides">
        <div v-for="(slide, i) in heroSlides" :key="i"
          class="hero-slide" :class="{ active: currentSlide === i }"
          :style="{ backgroundImage: `url('${slide.bg}')` }" />
      </div>

      <!-- Content -->
      <div class="container hero-content">
        <div class="hero-eyebrow">
          <span class="dot" />
          Không gian nghệ thuật · Ninh Bình
        </div>

        <h1 class="hero-title">
          Dòng chảy của hình khối<br />
          <em>Sông Vân</em>
        </h1>

        <p class="hero-desc">
          Nơi đá, nước và ký ức làng nghề gặp nhau trong một không gian điêu khắc đương đại mở.
        </p>

        <div class="hero-ctas">
          <NuxtLink to="/tickets" class="btn btn-primary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/></svg>
            Đăng ký tham quan
          </NuxtLink>
          <NuxtLink v-if="featuredTour" :to="`/experience/${featuredTour.slug}`" class="btn-hero-outline">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:-2px; margin-right:6px;"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
            Tour 360° Ảo
          </NuxtLink>
        </div>
      </div>

      <!-- Slide dots -->
      <div class="hero-dots">
        <button v-for="(_, i) in heroSlides" :key="i" type="button"
          class="hero-dot" :class="{ active: currentSlide === i }"
          @click="goSlide(i)" />
      </div>

      <!-- Stats bar -->
      <div class="hero-stats">
        <div class="hero-stats-inner">
          <div v-for="stat in [
            { value: '02',       label: 'Phòng trưng bày' },
            { value: '01',       label: 'Vườn điêu khắc' },
            { value: '360°',     label: 'Tour ảo sống động' },
            { value: '2018',     label: 'Khởi nguồn không gian' },
          ]" :key="stat.label" class="stat">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ GIỚI THIỆU ══════════════════════════════════════════════════════ -->
    <section class="section" id="intro">
      <div class="container">
        <div class="intro-grid">

          <!-- Images -->
          <div class="intro-images">
            <img src="/images/song-van/aerial-view.jpg" alt="Toàn cảnh Sông Vân Art Space bên dòng sông Vân" class="intro-img-main" />
            <img src="/images/song-van/exhibition-visitors.jpg" alt="Khách tham quan triển lãm Sông Vân" class="intro-img-float" />
            <div class="intro-badge">
              <strong>Từ 2018</strong>
              <span>một không gian cho đá</span>
            </div>
          </div>

          <!-- Content -->
          <div>
            <div class="section-eyebrow">Giới thiệu</div>
            <h2 class="section-title">
              Từ làng nghề truyền thống<br /><em style="font-style: italic; color: var(--tb-bronze);">đến nghệ thuật đương đại</em>
            </h2>
            <p class="section-sub">
              Phát triển từ Lương Gia Art Space, Sông Vân Art Space mở ra một điểm đến sáng tạo giữa làng đá Ninh Vân, kết nối nghệ sĩ, người thợ và công chúng.
            </p>

            <div class="intro-features">
              <div v-for="feat in [
                { title: 'Tour 360° Số Hóa', desc: 'Khám phá sân tượng, xưởng đá và không gian trưng bày qua panorama.' },
                { title: 'Điêu Khắc Đương Đại', desc: 'Hình khối tối giản đối thoại với đặc tính tự nhiên của đá.' },
                { title: 'Kết Nối Làng Nghề', desc: 'Đưa truyền thống chế tác đá Ninh Vân đến gần hơn với công chúng hôm nay.' },
              ]" :key="feat.title" class="intro-feature">
                <div class="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                </div>
                <div>
                  <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 4px; color: var(--tb-ink);">{{ feat.title }}</h4>
                  <p style="font-size: 13px; color: var(--ink-70); line-height: 1.5; margin: 0;">{{ feat.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ HIGHLIGHTS ══════════════════════════════════════════════════════ -->
    <section class="section highlights" id="highlights">
      <div class="container">
        <div class="section-head">
          <div class="section-eyebrow">Điểm chạm nghệ thuật</div>
          <h2 class="section-title">Khám phá những lớp không gian<br />của Sông Vân</h2>
        </div>

        <div class="highlight-grid">
          <div v-for="(h, i) in highlights" :key="h.title" class="highlight-card">
            <img
              :src="['/images/song-van/bong-nui.jpg','/images/song-van/waterside-sculpture.jpg','/images/song-van/luong-trinh.jpg','/images/song-van/gallery-interior.jpg'][i]"
              :alt="h.title" />
            <div class="highlight-body">
              <span class="highlight-tag">{{ h.tag }}</span>
              <h3>{{ h.title }}</h3>
              <p>{{ h.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ TOUR 360° MODULE ════════════════════════════════════════════════ -->
    <section class="section" id="tour">
      <div class="container">
        <div class="tour-module">

          <!-- Info side -->
          <div class="tour-info">
            <div class="section-eyebrow">Trải nghiệm số</div>
            <h2>Tour 360°<br />Tham quan ảo</h2>
            <p>
              Dạo qua từng lớp không gian nghệ thuật ngay tại nhà. Chọn một điểm để bắt đầu hành trình.
            </p>

            <div class="tour-scenes">
              <NuxtLink v-for="(tour, i) in (tours.length ? tours.slice(0,4) : [{slug:'',title:'Sân Điêu Khắc Bên Sông'},{slug:'',title:'Vườn Tượng'},{slug:'',title:'Xưởng Đá'},{slug:'',title:'Khoảng Trưng Bày Mở'}])" :key="i"
                :to="tour.slug ? `/experience/${tour.slug}` : '#'"
                class="tour-scene">
                <span class="tour-scene-num">{{ i+1 }}</span>
                {{ tour.title }}
              </NuxtLink>
            </div>

            <NuxtLink v-if="featuredTour" :to="`/experience/${featuredTour.slug}`" style="align-self: flex-start;">
              <button type="button" class="btn btn-primary">
                Mở toàn màn hình
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
              </button>
            </NuxtLink>
          </div>

          <!-- Viewer side -->
          <div class="tour-viewer" @click="featuredTour && $router.push(`/experience/${featuredTour.slug}`)">
            <div class="tour-viewer-img"
              :style="{ backgroundImage: `url('/images/song-van/aerial-view.jpg')` }" />
            <div class="tour-viewer-overlay" />

            <!-- Badge -->
            <div class="tour-badge">● Panorama 360°</div>

            <!-- Hotspots (decorative) -->
            <div v-for="pos in [{top:'35%',left:'28%'},{top:'55%',left:'72%'},{top:'68%',left:'45%'}]" :key="pos.left"
              style="position: absolute; width: 20px; height: 20px; border-radius: 50%; background: var(--tb-bronze); box-shadow: 0 0 0 6px rgba(160,120,40,.25), 0 0 20px rgba(160,120,40,.5); cursor: pointer;"
              :style="{ top: pos.top, left: pos.left }" />

            <!-- Play button overlay -->
            <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
              <div style="width: 64px; height: 64px; display: grid; place-items: center; border-radius: 50%; background: rgba(255,255,255,.18); backdrop-filter: blur(8px); border: 2px solid rgba(255,255,255,.4); transition: all .2s;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
            </div>

            <!-- Label -->
            <div style="position: absolute; bottom: 24px; left: 24px; right: 24px;">
              <h4 style="font-family: var(--font-serif); font-size: 22px; font-weight: 600; color: #fff; margin: 0 0 4px;">{{ featuredTour?.title ?? 'Tour 360° Sông Vân' }}</h4>
              <p style="font-size: 13px; color: rgba(255,255,255,.7); margin: 0;">{{ featuredTour?.location ?? 'Nam Hoa Lư, Ninh Bình' }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ EVENTS ══════════════════════════════════════════════════════════ -->
    <section class="section" id="events" style="background: #fff;">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; flex-wrap: wrap; gap: 16px;">
          <div>
            <div class="section-eyebrow">Triển lãm</div>
            <h2 class="section-title">Những dấu mốc tại Sông Vân</h2>
          </div>
          <NuxtLink to="/events" class="btn btn-ghost">
            Xem tất cả
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </NuxtLink>
        </div>

        <div class="events-grid">
          <NuxtLink v-for="event in events" :key="event.title" to="/events" class="event-card">

            <!-- Image with date badge -->
            <div class="event-img">
              <img :src="['/images/song-van/exhibition-visitors.jpg','/images/song-van/sculpture-garden.jpg'][events.indexOf(event)]"
                :alt="event.title" />
              <div class="event-date">
                <strong>{{ event.day }}</strong>
                <span>{{ event.month }}</span>
              </div>
            </div>

            <!-- Body -->
            <div class="event-body">
              <div class="event-cat">{{ event.cat }}</div>
              <h3>{{ event.title }}</h3>
              <p>{{ event.desc }}</p>
              <div class="event-meta">
                <span>🕐 {{ event.time }}</span>
                <span>📍 {{ event.place }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ══ TICKETS ══════════════════════════════════════════════════════════ -->
    <section class="section tickets" id="tickets">
      <div class="container">
        <div class="section-head center">
          <div class="section-eyebrow">Lên kế hoạch tham quan</div>
          <h2 class="section-title">Chọn gói phù hợp với bạn</h2>
          <p class="section-sub">Gửi yêu cầu trước chuyến đi để không gian xác nhận lịch tham quan phù hợp.</p>
        </div>

        <div class="tickets-grid">
          <div v-for="t in tickets" :key="t.name" class="ticket" :class="{ featured: t.featured }">
            <div class="ticket-name">{{ t.name }}</div>
            <div class="ticket-desc">{{ t.desc }}</div>
            <div class="ticket-price">
              {{ t.price }}<span>{{ t.unit }}</span>
            </div>

            <ul class="ticket-features">
              <li v-for="f in t.features" :key="f">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                {{ f }}
              </li>
            </ul>

            <NuxtLink to="/tickets" style="display: block;">
              <button type="button" class="btn" :class="t.featured ? 'btn-primary' : 'btn-outline'" style="width: 100%; justify-content: center;">
                {{ t.featured ? 'Gửi yêu cầu' : 'Chọn hình thức' }}
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ PARTNERS ════════════════════════════════════════════════════════ -->
    <section class="partners">
      <div class="container">
        <div class="partners-label">Sông Vân Art Space</div>
        <div class="partners-logos">
          <span v-for="p in contexts" :key="p" class="partner-logo">
            {{ p }}
          </span>
        </div>
      </div>
    </section>

  </div>
</template>


<style scoped>
.intro-grid-responsive { display: grid; }
.tour-module-responsive { display: grid; }

@media (max-width: 900px) {
  .intro-grid-responsive { grid-template-columns: 1fr !important; }
  .tour-module-responsive { grid-template-columns: 1fr !important; }
}

@keyframes pulse-ring {
  0%   { box-shadow: 0 0 0 0   rgba(160,120,40,.4); }
  100% { box-shadow: 0 0 0 20px rgba(160,120,40,0); }
}
</style>
