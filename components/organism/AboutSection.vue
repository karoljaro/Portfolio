<template>
  <NuxtLayout name="section">
    <MoleculesSharedSectionLabel>{{ aboutStore.aboutSectionLabel }}</MoleculesSharedSectionLabel>

    <MoleculesSectionAboutDescription :description="aboutStore.description" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const aboutStore = useAboutStore();
</script>