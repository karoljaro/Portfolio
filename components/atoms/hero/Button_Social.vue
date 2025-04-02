<template>
  <NuxtLink
    :to="$props.to"
    target="_blank"
    class="border-primary-border bg-primary-bg font-OpenSans text-third-color flex items-center gap-2 rounded-full border px-4 py-2 text-xl leading-[130%] font-light capitalize italic sm:px-7 sm:py-3 sm:text-2xl 2xl:text-3xl hover:bg-primary-hover-bg duration-300"
  >
    <slot name="link_icon" class="nav_icon" />
    <span class="!text-second-color">
      <slot />
    </span>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  to: string;
}>();
</script>

<style lang="css" scoped>
::v-deep(span) {
  color: #f5f5f5;
}
</style>
