<template>
  <NuxtLayout name="section">
    <MoleculesSharedSectionLabel>
      {{ projectStore.projectsSectionLabel }}
    </MoleculesSharedSectionLabel>

    <div>
      <template v-for="(projectItem, index) in projectStore.projects.slice(0,3)" :key="index">
        <MoleculesSectionProjectCardFeatured :project-item="projectItem" />
      </template>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const projectStore = useProjectsStore();
</script>