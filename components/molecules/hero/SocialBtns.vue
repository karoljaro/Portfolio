<template>
  <div class="flex gap-4">
    <template v-for="({name, icon, url}, index) in socialInfo" :key="index">
      <AtomsHeroButtonSocial :to="url" class="shadow-md">
        <template #link_icon>
          <Icon :name="icon" />
        </template>
        <template #default> {{ name }} </template>
      </AtomsHeroButtonSocial>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { IconName } from "~/shared/types/iconsNamesUnion";

interface SocialInfo_DATA {
  name: string;
  icon: `static_Lucide:${IconName}`;
  url: string;
}

const socialInfo: SocialInfo_DATA[] = [
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
