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
        dir: "./assets/icons",
      },
    ],
    fetchTimeout: 5000,
    clientBundle: {
      includeCustomCollections: true,
    },
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
        {
          name: "description",
          content:
            "Portfolio Full-Stack Web Developera specjalizującego się w ekosystemie JavaScript (Vue.js, Nuxt, React, Node.js). REST API, DevOps, UI/UX. Sprawdź moje projekty i technologie.",
        },
        { name: "author", content: "Karol Jaroń" },
      ],
      link: [
        {
          rel: "canonical",
          href: `${import.meta.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000/"}`,
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  components: true,
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "nuxt-schema-org",
  ],
  robots: {
    enabled: true,
    metaTag: true,
    header: true,
    allow: ["/"],
    disallow: ["/assets/"],
    sitemap: "/sitemap.xml",
    blockAiBots: false,
    groups: [
      {
        userAgent: ["Googlebot-Mobile", "AdsBot-Google-Mobile"],
        allow: ["/"],
      },
      {
        userAgent: ["Googlebot-Image"],
        allow: ["/"],
      },
    ],
    robotsEnabledValue: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    cacheControl: "max-age=86400, must-revalidate",
  },

  sitemap: {
    enabled: true,
    autoLastmod: true,
    defaults: {
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    urls: [
      {
        loc: "/",
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 1,
      },
    ],
    discoverImages: true,
    discoverVideos: true,
    cacheMaxAgeSeconds: 3600,
  },

  devtools: { enabled: true },
  // ssr: false,
  compatibilityDate: "2025-04-07",
});
