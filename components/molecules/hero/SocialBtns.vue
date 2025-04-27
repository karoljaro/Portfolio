<template>
  <div class="flex gap-4">
    <template v-for="({ name, icon, url }, index) in socialInfo" :key="index">
      <AtomsHeroButtonSocial :to="url as string" class="shadow-md">
        <template #link_icon>
          <Icon :name="icon" />
        </template>
        <template #default> {{ name }} </template>
      </AtomsHeroButtonSocial>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { HeroDataRaw } from "~/data/types/app-data.model";
defineProps<{
  socialInfo: HeroDataRaw["socialButtons"];
}>();
</script>