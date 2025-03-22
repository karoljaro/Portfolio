<template>
  <p
    class="font-OpenSans dark:text-primary-dark-color text-primary-light-color hover:text-primary-dark-hover-bg cursor-pointer text-2xl font-normal -tracking-[3%] uppercase transition-colors duration-300"
    @click="$emit('click')"
  >
    <slot />
  </p>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'click'): void
}>();
</script>