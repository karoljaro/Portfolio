import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["@/assets/css/globals.css"],
  pages: true,
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      {
        name: "Open Sans",
        provider: "google",
        display: "swap",
        weights: ["300", "400", "600"],
        styles: ["normal", "italic"],
        fallbacks: ["sans-serif"],
      },
      {
        name: "Fira Code",
        provider: "google",
        display: "swap",
        weights: ["400", "500", "600"],
        fallbacks: ["monospace"],
      },
    ],
  },
  modules: [// "@nuxtjs/i18n",
  // "@nuxtjs/seo",
  "@nuxt/eslint", "@nuxt/test-utils", "@nuxt/fonts", "@vueuse/nuxt", "@nuxt/icon", "@pinia/nuxt", "pinia-plugin-persistedstate"],
  devtools: { enabled: true },
  ssr: false
});