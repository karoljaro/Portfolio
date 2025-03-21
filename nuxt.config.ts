import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["@/assets/css/globals.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    assets: {
      prefix: '/_fonts/'
    },
    families: [
      {
        name: 'Open Sans',
        provider: 'google',
        display: "swap",
      }
    ],
  },
  devtools: { enabled: true },
  modules: [  
    "@nuxt/eslint", 
    "@nuxt/test-utils", 
    "@nuxt/fonts"
    // "@nuxtjs/i18n",
    // "@nuxtjs/seo",
  ],
});