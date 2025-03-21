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
        weights: ["300", "400", "500", "600"],
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
  srcDir: './',
  dir: {
    layouts: 'app/layouts',
    pages: 'app/pages',
    plugins: 'app/plugins',
    middleware: 'app/middleware',
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils",
    "@nuxt/fonts",
    // "@nuxtjs/i18n",
    // "@nuxtjs/seo",
  ],
  devtools: { enabled: true },
});
