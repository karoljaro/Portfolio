<template>
  <NuxtLayout name="section">
    <div class="space-y-6">
      <!-- =============================[ FIRST ROW ]============================= -->
      <MoleculesHeroIntroduction>
        {{ heroStore.introduction }}
      </MoleculesHeroIntroduction>

      <!-- =============================[ SECOND ROW ]============================= -->
      <div class="flex flex-wrap items-center justify-between gap-14">
        <MoleculesHeroPrimaryHeading>
          {{ heroStore.primaryHeading }}
        </MoleculesHeroPrimaryHeading>
        <MoleculesHeroProjectBtn class="[@media(max-width:1440px)]:hidden">
          {{ heroStore.projectButtonLabel }}
        </MoleculesHeroProjectBtn>
      </div>

      <!-- =============================[ THIRD ROW ]============================= -->
      <div class="flex flex-wrap-reverse items-center justify-between gap-x-6 gap-y-4">
        <MoleculesHeroGoalsDesc :description="heroStore.goalsDescription" class="min-w-72 flex-1 [@media(max-width:1440px)]:hidden" />

        <MoleculesHeroSecondaryHeading class="flex-shrink-0 whitespace-nowrap">
          {{ heroStore.secondaryHeading }}
        </MoleculesHeroSecondaryHeading>
      </div>

      <!-- =============================[ FOURTH ROW ]============================= -->
      <div class="flex flex-wrap items-center justify-between gap-8 [@media(min-width:1441px)]:hidden">
        <MoleculesHeroGoalsDesc :description="heroStore.goalsDescription" class="flex-1 basis-1/2" />
        <MoleculesHeroProjectBtn class="flex-1 basis-1/2">
          {{ heroStore.projectButtonLabel }}
        </MoleculesHeroProjectBtn>
      </div>

      <!-- =============================[ FIFTH ROW ]============================= -->
      <MoleculesHeroSocialBtns :social-info="heroStore.socialButtons" />
    </div>
    <!-- =============================[ SIXTH ROW ]============================= -->
    <MoleculesHeroCarousel />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useHeroStore } from "~/stores/hero";
const heroStore = useHeroStore();
</script>
