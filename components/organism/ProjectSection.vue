<template>
  <NuxtLayout name="section">
    <MoleculesSharedSectionLabel :text="projectStore.projectsSectionLabel" />

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