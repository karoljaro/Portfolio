<template>
  <NuxtLayout name="section">
    <MoleculesSharedSectionLabel>My_work_area</MoleculesSharedSectionLabel>

    <div class="flex flex-wrap justify-around gap-10 items-center">
      <template v-for="(data, index) in workSection_data" :key="index">
        <MoleculesSectionWorkCardWork :data="data" />
      </template>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { workSection_data } = useWorkSectionStore();
</script>