<template>
   <p
      :class="`${isAtive && '!font-medium !text-fourth !underline'} text-left font-open-sans text-base font-normal capitalize text-third no-underline lg:text-lg`"
   >
      {{ text }}
   </p>
</template>

<script setup lang="ts">
const { isAtive = false } = defineProps<{
   text: string;
   isAtive: boolean;
}>();
</script>
