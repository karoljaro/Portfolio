<template>
  <NuxtLayout name="section">
    <MoleculesSharedSectionLabel>My_work_area</MoleculesSharedSectionLabel>

    <div class="flex flex-wrap justify-center gap-16 items-center">
      <template v-for="_ in 3" :key="_">
        <MoleculesSectionWorkCardWork  />
      </template>
    </div>
  </NuxtLayout>
</template>
