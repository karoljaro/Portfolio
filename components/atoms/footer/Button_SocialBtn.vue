<template>
  <NuxtLink
    :to="$props['to']"
    target="_blank"
    rel="noopener noreferrer"
    class="font-OpenSans border-primary-border hover:bg-primary-border flex flex-nowrap items-center justify-center gap-x-2 rounded-full border bg-[#121212] px-16 py-2 text-center text-xl !leading-[130%] font-normal text-[#F5F5F5] duration-300 max-md:grow md:py-3 md:text-2xl"
  >
    <slot name="icon" />

    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>
