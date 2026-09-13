export default defineNuxtConfig({
  compatibilityDate: '2026-06-21',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vercel/speed-insights'],
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'View360 – Tour 360° Trảng Bay',
      meta: [
        {
          name: 'description',
          content: 'Khám phá toàn cảnh 360° khu vực Trảng Bay và vùng lân cận với Photo Sphere Viewer.',
        },
      ],
    },
  },

  // Transpile PSV for SSR/Vite
  build: {
    transpile: ['@photo-sphere-viewer/core', '@photo-sphere-viewer/markers-plugin'],
  },

  vite: {
    optimizeDeps: {
      include: ['three', '@photo-sphere-viewer/core', '@photo-sphere-viewer/markers-plugin', 'js-yaml'],
    },
    ssr: {
      noExternal: ['three', '@photo-sphere-viewer/core', '@photo-sphere-viewer/markers-plugin'],
    },
  },

  // Auto-import components from themes/ folder
  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/themes', pathPrefix: true },   // ThemesNature* / ThemesMinimal*
  ],

  runtimeConfig: {
    minioEndpoint: process.env.MINIO_ENDPOINT || 'http://minio:9000',
    mariadbHost:   process.env.MARIADB_HOST   || 'mariadb',
    public: {
      mediaBaseUrl: process.env.NUXT_PUBLIC_MEDIA_BASE_URL || '',
      enableAdmin:  process.env.ENABLE_ADMIN === 'true',
    },
  },
});
