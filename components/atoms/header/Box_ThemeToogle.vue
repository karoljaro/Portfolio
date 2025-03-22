<template>
  <div
    class="border-primary-dark-border bg-primary-dark-bg hover:bg-primary-dark-hover-bg flex size-16 cursor-pointer items-center justify-center rounded-3xl border transition-colors duration-300"
    @click="$emit('click')"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'click'): void
}>();
</script>

