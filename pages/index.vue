<template>
  <div>
    <OrganismHeader />
    <OrganismHero />
    <OrganismAboutSection />
    <OrganismProjectSection id="projects" />
    <OrganismWorkSection />
    <OrganismFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Karol Jaroń - Full-Stack Web Developer Portfolio",
  description: "Portfolio Karola Jaroń, Full-Stack Web Developera specjalizującego się w Vue, Nuxt, React. Zobacz moje projekty i doświadczenie.",
  ogTitle: "Karol Jaroń - Full-Stack Web Developer Portfolio",
  ogDescription: "Portfolio Karola Jaroń, Full-Stack Web Developera specjalizującego się w Vue, Nuxt, React. Zobacz moje projekty i doświadczenie.",
  twitterTitle: "Karol Jaroń - Full-Stack Web Developer Portfolio",
  twitterDescription: "Portfolio Karola Jaroń, Full-Stack Web Developera specjalizującego się w Vue, Nuxt, React. Zobacz moje projekty i doświadczenie.",
  author: "Karol Jaroń",
  charset: "utf-8",
});
</script>
