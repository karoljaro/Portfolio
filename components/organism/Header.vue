<template>
  <header class="flex justify-between items-center py-6">
    <MoleculesHeaderLocalesSelect :langs="staticLangs" />
    <MoleculesHeaderLogo />
    <MoleculesHeaderThemeToogle />
  </header>
</template>

<script setup lang="ts">
const staticLangs: string[] = ["pl", "en"];
</script>
