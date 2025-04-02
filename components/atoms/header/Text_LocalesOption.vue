<template>
  <p
    class="font-OpenSans text-primary-color hover:text-primary-hover-bg cursor-pointer text-2xl font-normal -tracking-[3%] uppercase transition-colors duration-300"
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