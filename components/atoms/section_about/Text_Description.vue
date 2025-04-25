<template>
  <p class="font-OpenSans text-second-color 3xl:text-2.8xl text-left text-base font-normal tracking-[4%] sm:text-xl md:text-2xl">
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
