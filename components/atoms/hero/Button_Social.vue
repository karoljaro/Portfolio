<template>
  <NuxtLink
    :to="$props.to"
    target="_blank"
    rel="noopener noreferrer"
    class="border-primary-border bg-primary-bg font-OpenSans text-primary-color dark:hover:bg-primary-hover-bg flex items-center gap-2 rounded-full border px-4 py-2 text-xl leading-[130%] font-light capitalize italic duration-300 select-none hover:bg-[#e9e9e9] sm:px-7 sm:py-3 sm:text-2xl 2xl:text-3xl"
  >
    <slot name="link_icon" />

    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  to: string;
}>();
</script>
