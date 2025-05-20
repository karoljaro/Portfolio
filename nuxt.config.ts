import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/globals.css"],
  pages: true,

  vite: {
    plugins: [tailwindcss()],
  },
  icon: {
    provider: "server",
    serverBundle: "local",
    customCollections: [
      {
        prefix: "static_Lucide",
        dir: "./assets/icons"
      }
    ]
  },
  fonts: {
    families: [
      {
        name: "Open Sans",
        provider: "google",
        display: "swap",
        weights: ["300", "400", "600", "700"],
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
  app: {
    head: {
      title: "Karol Jaroń | Full-Stack Web Developer",
      meta: [
        { name: "description", content: "Portfolio Full-Stack Web Developera specjalizującego się w ekosystemie JavaScript (Vue.js, Nuxt, React, Node.js). REST API, DevOps, UI/UX. Sprawdź moje projekty i technologie."},
        { name: "author", content: "Karol Jaroń" },
      ],
      htmlAttrs: {
        lang: "en",
      }
    }
  },  components: true,
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@vueuse/nuxt", "@nuxt/icon", "@pinia/nuxt", "pinia-plugin-persistedstate"],
  devtools: { enabled: true },
  ssr: false,
  compatibilityDate: "2025-04-07",
});