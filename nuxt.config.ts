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
        weights: ["400", "600"],
        styles: ["normal", "italic"],
        fallbacks: ["sans-serif"],
      },
      {
        name: "Fira Code",
        provider: "google",
        display: "swap",
        weights: ["400", "500"],
        fallbacks: ["monospace"],
      },
    ],
  },
  modules: ["@nuxt/eslint", // "@nuxtjs/i18n",
  "@nuxt/test-utils", // "@nuxtjs/seo",
  "@nuxt/fonts", "@vueuse/nuxt", "@nuxt/icon"],
  devtools: { enabled: true },
});