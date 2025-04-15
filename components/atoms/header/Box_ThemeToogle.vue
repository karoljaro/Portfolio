<template>
  <div
    class="border-primary-border text-[#F5F5F5] bg-[#121212] hover:bg-[#202020] flex size-16 cursor-pointer items-center justify-center rounded-3xl border transition-colors duration-300"
    @click="$emit('click')"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: "click"): void;
}>();
</script>
