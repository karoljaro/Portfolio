<template>
  <div class="flex gap-4">
    <template v-for="({name, icon, url}, index) in socialInfo" :key="index">
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
import type { HeroDataRaw } from "~/data/types/app-data.model"

const socialInfo: HeroDataRaw['socialButtons'] = [
  {
    name: "GitHub",    
    icon: "static_Lucide:github",
    url: "https://github.com/karoljaro",
  },
  {
    name: "Linkedin",
    icon: "static_Lucide:linkedin",
    url: "https://www.linkedin.com/in/karol-jaro%C5%84-474214361/",
  },
];
</script>
