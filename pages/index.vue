<script setup lang="ts">
/**
 * pages/index.vue — Landing page Trảng Bay
 * Theo đúng cấu trúc Heritage Design System từ design/index.html:
 *   Hero (slideshow + stats bar) → Giới thiệu → Highlights → Tour 360° → Events → Tickets → Partners → CTA
 */
import type { TourEntry } from '~/types/tour';

definePageMeta({ layout: 'default' });
useHead({
  title: 'Trảng Bay — Khu Du Lịch Sinh Thái 360°',
  meta: [{ name: 'description', content: 'Khu du lịch sinh thái Trảng Bay — thiên nhiên hoang sơ, tour 360°, đặt vé và sự kiện.' }],
});

const { data, pending } = await useFetch<{ items: TourEntry[] }>('/api/tours');
const tours        = computed<TourEntry[]>(() => data.value?.items ?? []);
const featuredTour = computed(() => tours.value[0]);

// Hero slides
const heroSlides = [
  { bg: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80', label: 'Rừng nguyên sinh Trảng Bay' },
  { bg: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80', label: 'Đại ngàn xanh thẳm' },
  { bg: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80', label: 'Khám phá thiên nhiên' },
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
  { tag: 'Thiên nhiên', title: 'Rừng Nguyên Sinh 12km', desc: 'Đường mòn xuyên rừng nguyên sinh, hệ động thực vật phong phú.' },
  { tag: 'Mạo hiểm',    title: 'Đỉnh Trảng Nhìn Xa',    desc: 'Điểm ngắm cảnh toàn bộ thung lũng ở độ cao 840m.' },
  { tag: 'Văn hóa',     title: 'Làng Bản Địa',           desc: 'Trải nghiệm văn hóa và ẩm thực cộng đồng dân tộc địa phương.' },
  { tag: 'Sinh thái',   title: 'Hồ Trảng Bay',           desc: 'Hồ nước tự nhiên giữa lòng rừng, trong xanh bốn mùa.' },
];

const events = [
  { day: '20', month: 'Tháng 9', cat: 'Thiên văn',  title: 'Đêm Ngắm Sao Trảng Bay', desc: 'Quan sát bầu trời đêm hoang sơ cùng kính thiên văn chuyên nghiệp.', time: '19:00 – 23:00', place: 'Đỉnh Trảng' },
  { day: '27', month: 'Tháng 9', cat: 'Outdoor',    title: 'Trekking Rừng 12km',        desc: 'Hành trình xuyên rừng cùng hướng dẫn viên sinh thái địa phương.',   time: '06:00 – 18:00', place: 'Cổng chính' },
  { day: '04', month: 'Tháng 10', cat: 'Âm nhạc',  title: 'Lễ Hội Âm Nhạc Xanh',      desc: 'Âm nhạc acoustic và indie giữa thiên nhiên, không khuếch đại.',      time: '17:00 – 22:00', place: 'Bãi Trảng' },
];

const tickets = [
  { name: 'Vé Tiêu Chuẩn', desc: 'Phù hợp khách lẻ, tham quan tự do', price: '150.000', unit: 'đ / người', features: ['Vào tất cả khu tham quan','Bản đồ tham quan miễn phí','Thời gian tự do'], featured: false },
  { name: 'Combo Trải Nghiệm', desc: 'Được chọn nhiều nhất — tiết kiệm 25%', price: '350.000', unit: 'đ / người', features: ['Vé vào cổng + Hướng dẫn viên','Tour rừng 4h có thuyết minh','Bữa trưa địa phương','Ảnh kỷ niệm miễn phí'], featured: true },
  { name: 'Gói Gia Đình', desc: '2 người lớn + 2 trẻ em', price: '450.000', unit: 'đ / gói', features: ['Vé vào cổng cả gia đình','Khu vui chơi trẻ em','Picnic set tặng kèm'], featured: false },
];

const partners = ['Bộ Văn hóa TT&DL', 'Vietnam Airlines', 'Booking.com', 'TripAdvisor', 'Agoda', 'Sun Group'];
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
          Khu du lịch sinh thái · Mở cửa hôm nay
        </div>

        <h1 class="hero-title">
          Thiên nhiên hoang sơ<br />
          <em>Trảng Bay</em>
        </h1>

        <p class="hero-desc">
          Rừng núi nguyên sinh, không khí trong lành và những trải nghiệm 360° đắm chìm. Khám phá. Nghỉ ngơi. Tái sinh.
        </p>

        <div class="hero-ctas">
          <NuxtLink to="/tickets" class="btn btn-primary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/></svg>
            Đặt vé tham quan
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
            { value: '1.200 ha', label: 'Diện tích rừng' },
            { value: '15+',      label: 'Điểm tham quan' },
            { value: '360°',     label: 'Tour ảo sống động' },
            { value: '7 ngày',   label: 'Mở cửa mỗi tuần' },
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
            <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80" alt="Rừng Trảng Bay" class="intro-img-main" />
            <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80" alt="Toàn cảnh" class="intro-img-float" />
            <div class="intro-badge">
              <strong>8+ năm</strong>
              <span>bảo tồn thiên nhiên</span>
            </div>
          </div>

          <!-- Content -->
          <div>
            <div class="section-eyebrow">Giới thiệu</div>
            <h2 class="section-title">
              Hơn 8 năm gìn giữ<br /><em style="font-style: italic; color: var(--tb-bronze);">rừng nguyên sinh</em>
            </h2>
            <p class="section-sub">
              Trảng Bay được thành lập với sứ mệnh bảo vệ 1.200 ha rừng nguyên sinh trong khi tạo ra nguồn thu bền vững cho cộng đồng địa phương thông qua du lịch sinh thái có trách nhiệm.
            </p>

            <div class="intro-features">
              <div v-for="feat in [
                { title: 'Tour 360° Số Hóa',        desc: 'Khám phá toàn bộ khu rừng từ mọi nơi qua ảnh panorama sống động.' },
                { title: 'Bảo Tồn Có Trách Nhiệm',  desc: '10% doanh thu tái đầu tư vào bảo tồn và phát triển cộng đồng.' },
                { title: 'Sinh Thái Không Rác Thải', desc: 'Toàn khu không dùng đồ nhựa dùng một lần từ năm 2022.' },
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
          <div class="section-eyebrow">Điểm tham quan</div>
          <h2 class="section-title">Khám phá những điểm đến<br />không thể bỏ qua</h2>
        </div>

        <div class="highlight-grid">
          <div v-for="(h, i) in highlights" :key="h.title" class="highlight-card">
            <img
              :src="`https://images.unsplash.com/photo-${['1448375240586-882707db888b','1501854140801-50d01698950b','1441974231531-c6227db76b6e','1506905925346-21bda4d32df4'][i]}?w=600&q=80`"
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
              Dạo bước qua từng góc khu du lịch ngay tại nhà. Chọn điểm để bắt đầu hành trình.
            </p>

            <div class="tour-scenes">
              <NuxtLink v-for="(tour, i) in (tours.length ? tours.slice(0,4) : [{slug:'',title:'Đỉnh Nhìn Ra Thung Lũng'},{slug:'',title:'Rìa Rừng Thưa'},{slug:'',title:'Hồ Trảng Bay'},{slug:'',title:'Trảng Cỏ Mênh Mông'}])" :key="i"
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
              :style="{ backgroundImage: featuredTour?.thumbnail ? `url('${featuredTour.thumbnail}')` : `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80')` }" />
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
              <h4 style="font-family: var(--font-serif); font-size: 22px; font-weight: 600; color: #fff; margin: 0 0 4px;">{{ featuredTour?.title ?? 'Tour 360° Trảng Bay' }}</h4>
              <p style="font-size: 13px; color: rgba(255,255,255,.7); margin: 0;">{{ featuredTour?.location ?? 'Rừng Núi Trảng Bay' }}</p>
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
            <div class="section-eyebrow">Sự kiện &amp; Lễ hội</div>
            <h2 class="section-title">Lịch sự kiện sắp diễn ra</h2>
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
              <img :src="`https://images.unsplash.com/photo-${['1501854140801-50d01698950b','1448375240586-882707db888b','1441974231531-c6227db76b6e'][events.indexOf(event)]}?w=600&q=80`"
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
          <div class="section-eyebrow">Bán vé trực tuyến</div>
          <h2 class="section-title">Chọn gói phù hợp với bạn</h2>
          <p class="section-sub">Đặt vé online, nhận mã QR qua email, không cần xếp hàng tại quầy.</p>
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
                {{ t.featured ? 'Đặt ngay' : 'Chọn gói này' }}
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ PARTNERS ════════════════════════════════════════════════════════ -->
    <section class="partners">
      <div class="container">
        <div class="partners-label">Đơn vị đồng hành &amp; Chứng nhận</div>
        <div class="partners-logos">
          <span v-for="p in partners" :key="p" class="partner-logo">
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
