<template>
  <AtomsSectionProjectCardProject class="grid grid-cols-1 lg:grid-cols-[25rem_1fr] 2xl:grid-cols-[25rem_1fr_min-content] gap-6">
    <div class="space-y-3 w-full self-center">
      <AtomsSectionProjectHeadingTitle>
        {{ projectItem.title }}
      </AtomsSectionProjectHeadingTitle>
      <div class="flex flex-wrap gap-2">
        <template v-for="(tech, index) in projectItem.usedTechnologies" :key="index">
          <AtomsSectionProjectBadgeTechnology>{{ tech }}</AtomsSectionProjectBadgeTechnology>
        </template>
      </div>
    </div>

    <div class="self-center w-full">
      <AtomsSectionProjectTextDescription>
        {{ projectItem.description }}
      </AtomsSectionProjectTextDescription>
    </div>

    <div class="flex items-center justify-start gap-2 w-full">
      <template v-for="({ name, url }, index) in projectItem.projectLinks" :key="index">
        <AtomsSectionProjectButtonAction :to="url" :type="name" />
      </template>
    </div>
  </AtomsSectionProjectCardProject>
</template>

<script setup lang="ts">
import type { ProjectItemDataRaw } from '~/data/types/app-data.model';

defineProps<{
  projectItem: ProjectItemDataRaw;
}>();
</script>