export default defineNuxtConfig({
  compatibilityDate: '2026-06-21',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vercel/speed-insights'],
  css: ['~/assets/css/main.css', 'leaflet/dist/leaflet.css'],

  experimental: {
    // The application does not consume Nuxt's client app-manifest. Disabling
    // it also prevents Vite from resolving #app-manifest before dev.json has
    // been generated during a dev-server restart.
    appManifest: false,
  },

  // Panorama filenames are stable assets (uploads use unique names). Let the
  // browser reuse them across scene changes and repeat visits.
  routeRules: {
    '/images/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/uploads/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/thumbnails/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  },

  app: {
    head: {
      title: 'Sông Vân Art Space — Không gian nghệ thuật tại Ninh Bình',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Lora:ital,wght@0,500;0,600;1,500&display=swap',
        },
      ],
      meta: [
        {
          name: 'description',
          content: 'Khám phá Sông Vân Art Space tại Ninh Bình qua tour panorama 360° — nơi điêu khắc đá đương đại đối thoại với làng nghề Ninh Vân.',
        },
      ],
    },
  },

  // Transpile PSV for SSR/Vite
  build: {
    transpile: ['@photo-sphere-viewer/core', '@photo-sphere-viewer/markers-plugin', '@photo-sphere-viewer/plan-plugin'],
  },

  vite: {
    resolve: {
      // Leaflet 1.x defaults to its CommonJS build, while PlanPlugin uses
      // named ESM imports. Point Vite at Leaflet's published ESM bundle.
      alias: [
        { find: /^leaflet$/, replacement: 'leaflet/dist/leaflet-src.esm.js' },
      ],
    },
    optimizeDeps: {
      include: ['three', 'leaflet', '@photo-sphere-viewer/core', '@photo-sphere-viewer/markers-plugin', '@photo-sphere-viewer/plan-plugin', 'js-yaml', '@theme-toggles/vue'],
      exclude: ['sharp'],  // server-only, never bundle to client
    },
    ssr: {
      noExternal: ['three', '@photo-sphere-viewer/core', '@photo-sphere-viewer/markers-plugin', '@photo-sphere-viewer/plan-plugin'],
      external: ['sharp', 'worker_threads'],  // keep server-only deps external
    },
  },

  // Component auto-import: explicit groups per docs architecture
  // docs/01-kien-truc-tong-the.md §6: catalog/ experience/ editor/ ui/
  components: [
    // ui/ — prefix 'Ui' so Button.vue → <UiButton />
    { path: '~/components/ui', prefix: 'Ui' },
    // experience/, editor/, catalog/ — no folder prefix
    { path: '~/components/experience', pathPrefix: false },
    { path: '~/components/editor',     pathPrefix: false },
    { path: '~/components/catalog',    pathPrefix: false },
    // admin/ — client-only editors such as Leaflet keep their .client boundary
    { path: '~/components/admin', prefix: 'Admin' },
    // Root components (ThemeToggle, MorphIcon, SceneViewer…) — no prefix
    { path: '~/components', pathPrefix: false, pattern: '*.vue' },
    // Themes: prefixed by folder (NatureTourSidebar, MinimalTourSidebar…)
    { path: '~/themes', pathPrefix: true },
  ],

  nitro: {
    serverAssets: [
      {
        baseName: 'tours',
        dir: 'tours',
      },
    ],
  },

  runtimeConfig: {
    // Server-only (not exposed to client)
    minioEndpoint: process.env.MINIO_ENDPOINT || 'http://minio:9000',
    mariadbHost:   process.env.MARIADB_HOST   || 'mariadb',
    // Admin guard — enabled by default in local dev unless explicitly set to false
    enableAdmin:   process.env.ENABLE_ADMIN !== 'false',
    adminKey:      process.env.ADMIN_KEY || '',
    public: {
      mediaBaseUrl: process.env.NUXT_PUBLIC_MEDIA_BASE_URL || '',
    },
  },
});
