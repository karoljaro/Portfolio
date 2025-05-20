<template>
  <NuxtLayout name="section">
    <MoleculesSharedSectionLabel :text="aboutStore.aboutSectionLabel" />

    <MoleculesSectionAboutDescription :description="aboutStore.description" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const aboutStore = useAboutStore();
</script>