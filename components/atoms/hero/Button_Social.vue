<template>
  <NuxtLink :to="$props.to" target="_blank" class="flex items-center gap-2 px-7 py-3 bg-primary-dark-bg italic font-OpenSans font-light text-3xl leading-[130%] text-third-dark-color capitalize">
    <slot name="link_icon" />
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  to: string;
}>();
</script>


<style lang="css" scoped>
::v-deep([slot="link_icon"]) {
  color: red !important;
}
</style>