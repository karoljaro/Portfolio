<template>
  <NuxtLink :to="$props['to']" target="_blank" rel="noopener noreferrer">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string;
}>();

const isInternalLink = (url: string) => {
  return url.startsWith('/') || url.startsWith('#');
};

if (isInternalLink(props['to'])) {
  console.warn('Uwaga: przekazano link wewnętrzny, który nie powinien być otwierany w nowej karcie: ', props['to']);
}
</script>
