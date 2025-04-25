<template>
  <NuxtLayout name="section">
    <div class="space-y-6">
      <MoleculesHeroIntroduction />

      <div class="flex flex-wrap items-center justify-between gap-14">
        <MoleculesHeroPrimaryHeading />
        <MoleculesHeroProjectBtn class="[@media(max-width:1440px)]:hidden" />
      </div>

      <div class="flex flex-wrap-reverse items-center justify-between gap-4">
        <!-- GoalsDesc może się zawijać -->
        <MoleculesHeroGoalsDesc :description="heroStore.goalsDescription" class="min-w-72 flex-1 [@media(max-width:1440px)]:hidden" />

        <!-- SecondaryHeading nie powinien się zawijać -->
        <MoleculesHeroSecondaryHeading class="flex-shrink-0 whitespace-nowrap" />
      </div>

      <div class="flex flex-wrap items-center justify-between gap-8 [@media(min-width:1441px)]:hidden">
        <MoleculesHeroGoalsDesc :description="heroStore.goalsDescription" class="flex-1 basis-1/2" />
        <MoleculesHeroProjectBtn class="flex-1 basis-1/2" />
      </div>

      <MoleculesHeroSocialBtns />
    </div>
    <MoleculesHeroCarousel />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useHeroStore } from '~/stores/hero';
const heroStore = useHeroStore();
</script>
