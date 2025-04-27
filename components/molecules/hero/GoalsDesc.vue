<template>
  <AtomsHeroTextGoalsDesc :segments="processedSegments" />
</template>

<script setup lang="ts">
const props = defineProps<{
  description: string;
}>();
const { processedSegments } = useProcessedText(toRef(props, "description"));
</script>