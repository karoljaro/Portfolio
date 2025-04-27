<template>
  <AtomsFooterCardCredits>
    <AtomsFooterHeadingCreditsTitle>{{ creditsData.creditTitle }}</AtomsFooterHeadingCreditsTitle>

    <div class="space-y-2">
      <template v-for="(item, index) in creditsData.creditsDescribe" :key="index">
        <AtomsFooterTextCreditsDescription>{{ item }}</AtomsFooterTextCreditsDescription>
      </template>
    </div>
  </AtomsFooterCardCredits>
</template>

<script setup lang="ts">
import type { FooterDataRaw } from "~/data/types/footer/footer.model";

defineProps<{
  creditsData: FooterDataRaw["credits"];
}>();
</script>
