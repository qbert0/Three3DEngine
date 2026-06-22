export default defineNuxtConfig({
  compatibilityDate: '2026-06-21',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'View360 Heritage Walk',
      meta: [
        {
          name: 'description',
          content: 'A Nuxt, Vue, TypeScript and Photo Sphere Viewer 360 travel experience.',
        },
      ],
    },
  },
  build: {
    transpile: ['@photo-sphere-viewer/core', '@photo-sphere-viewer/markers-plugin'],
  },
  vite: {
    optimizeDeps: {
      include: ['three', '@photo-sphere-viewer/core', '@photo-sphere-viewer/markers-plugin'],
    },
    ssr: {
      noExternal: ['three', '@photo-sphere-viewer/core', '@photo-sphere-viewer/markers-plugin'],
    },
  },
  runtimeConfig: {
    minioEndpoint: process.env.MINIO_ENDPOINT || 'http://minio:9000',
    mariadbHost: process.env.MARIADB_HOST || 'mariadb',
    public: {
      mediaBaseUrl: process.env.NUXT_PUBLIC_MEDIA_BASE_URL || '',
    },
  },
});
