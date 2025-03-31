<template>
  <section class="space-y-6 py-8">
    <MoleculesHeroIntroduction />

    <div class="flex flex-wrap items-center justify-between gap-14">
      <MoleculesHeroPrimaryHeading />
      <MoleculesHeroProjectBtn class="[@media(max-width:1440px)]:hidden" />
    </div>

    <div class="flex flex-wrap-reverse items-center justify-between gap-4">
      <!-- GoalsDesc może się zawijać -->
      <MoleculesHeroGoalsDesc class="flex-1 min-w-72 [@media(max-width:1440px)]:hidden" />
      
      <!-- SecondaryHeading nie powinien się zawijać -->
      <MoleculesHeroSecondaryHeading class="whitespace-nowrap flex-shrink-0" />
    </div>

    <div class="[@media(min-width:1441px)]:hidden flex justify-between gap-8 items-center flex-wrap">
      <MoleculesHeroGoalsDesc class="flex-1 basis-1/2" />
      <MoleculesHeroProjectBtn class="flex-1 basis-1/2" />
    </div>
    
      <MoleculesHeroSocialBtns />
      <AtomsHeroComponentCarousel :tech-name-list="staticTechList" />
  </section>
</template>

<script setup lang="ts">
const staticTechList = ["Nuxt.js", "Vue", "Next.js", "React", "Tailwindcss", "Javascript", "Typescript", "Bun.js", "Angular", "Elysia.js", "TRPC", "Docker", "Prisma"]
</script>
