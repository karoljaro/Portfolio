<template>
  <section class="py-8 space-y-6">
      <MoleculesHeroIntroduction />
      <div class="flex justify-between items-center">
        <MoleculesHeroPrimaryHeading />
        <MoleculesHeroProjectBtn />
      </div>

      <div class="flex flex-wrap-reverse justify-between items-center gap-4">
        <MoleculesHeroGoalsDesc />
        <MoleculesHeroSecondaryHeading />
      </div>

      <MoleculesHeroSocialBtns />
      <AtomsHeroComponentCarousel :tech-name-list="staticTechList" />
  </section>
</template>

<script setup lang="ts">
const staticTechList = ["Nuxt.js", "Vue", "Next.js", "React", "Tailwindcss", "Javascript", "Typescript", "Bun.js", "Angular", "Elysia.js", "TRPC", "Docker", "Prisma"]
</script>