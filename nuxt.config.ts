// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  tailwindcss: {
    configPath: 'tailwind.config',
  },
  googleFonts: {
    inject: true,
    outputDir: 'assets',
    fontsDir: 'fonts',
    families: {
      "Fira Code": [400, 500, 600],
      "Open Sans": [300, 400, 500],
    }
  },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontaine',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/google-fonts',
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'pl',
      },
      meta: [
        { name: 'description', content: 'Personal Portfolio' }
      ],
      title: "Personal Portfolio",
    }
  }
})