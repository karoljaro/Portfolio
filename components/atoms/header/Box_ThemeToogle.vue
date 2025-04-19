<template>
  <div
    class="border-primary-border text-[#F5F5F5] shadow-md bg-[#121212] hover:bg-[#202020] flex size-12 md:size-16 cursor-pointer items-center justify-center rounded-2xl md:rounded-3xl border transition-colors duration-300"
    @click="$emit('click')"
  >
    <transition
      name="fade"
      mode="out-in"
    >
      <slot :key="iconKey" />
    </transition>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: "click"): void;
}>();

defineProps<{
  iconKey: string | number;
}>();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
