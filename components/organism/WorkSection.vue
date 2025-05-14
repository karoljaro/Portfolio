<template>
  <NuxtLayout name="section">
    <MoleculesSharedSectionLabel :text="workStore.workSectionLabel" />

    <div class="flex flex-wrap justify-around gap-10 items-center">
      <template v-for="(data, index) in workStore.workItems" :key="index">
        <MoleculesSectionWorkCardWork :data="data" />
      </template>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const workStore = useWorkStore();
</script>