// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  tailwindcss: {
    configPath: 'tailwind.config',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontaine',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],

})