<template>
  <AtomsHeaderBoxThemeToogle @click="() => console.log(isDark = !isDark)">
    <Icon :name="isDark ? 'lucide:moon' : 'lucide:sun'" class="text-2xl" />
  </AtomsHeaderBoxThemeToogle>
</template>

<script lang="ts" setup>
const isDark = ref(true);
</script>
<!-- lucide:sun lucide:moon -->
