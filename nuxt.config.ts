
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo','@vueuse/nuxt'],
  css:['~/assets/styles/main.css'],
  ssr:false,
  plugins:['@/plugins/calendar.ts','@/plugins/swiper.ts','@/plugins/viewer.ts'],
  svgo: {
    defaultImport: "url",
  },
})