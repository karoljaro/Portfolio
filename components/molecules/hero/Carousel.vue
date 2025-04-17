<template>
  <div>
    <AtomsSharedLinePrimary />
    <div class="lg:py-4 md:py-2 py-0">
      <AtomsHeroComponentCarousel :tech-name-list="staticTechList" />
    </div>
    <AtomsSharedLinePrimary />
  </div>
</template>

<script setup lang="ts">
const staticTechList = [
  "Nuxt.js",
  "Vue",
  "Next.js",
  "React",
  "Tailwindcss",
  "Javascript",
  "Typescript",
  "Bun.js",
  "Angular",
  "Elysia.js",
  "TRPC",
  "Docker",
  "Prisma",
];
</script>