<template>
  <p class="font-OpenSans text-third-color xs:text-2xl lg:text-2.8xl text-lg !leading-[130%] font-normal">
    <template v-for="(segment, index) in segments" :key="index">
      <span v-if="segment.type === 'highlight'" class="text-primary-color font-semibold">
        {{ segment.content }}
      </span>
      <template v-else>
        {{ segment.content }}
      </template>
    </template>
  </p>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    segments?: TextSegment[];
  }>(),
  {
    segments: () => [],
  },
);
</script>