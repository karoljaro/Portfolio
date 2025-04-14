<template>
  <NuxtLink
    :to="$props['to']"
    target="_blank"
    rel="noopener noreferrer"
    class="font-OpenSans border-primary-border hover:bg-primary-border flex max-md:grow flex-nowrap items-center justify-center gap-x-2 rounded-full border bg-[#121212] px-16 py-3 text-center text-2xl !leading-[130%] font-normal duration-300"
  >
    <span class="text-[#F5F5F5]">
      <slot name="icon" />
    </span>

    <p class="text-[#A6A6A6]">
      <slot />
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>
