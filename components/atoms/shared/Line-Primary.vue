<template>
  <div
    v-if="$props.direction === 'both'"
    class="via-primary-border w-full bg-gradient-to-r from-transparent from-0% via-50% to-transparent to-100%"
    :style="`height: ${borderWidth}px;`"
  />

  <div
    v-if="$props.direction === 'right'"
    class="from-primary-border w-full bg-gradient-to-r from-80% to-transparent to-100%"
    :style="`height: ${borderWidth}px;`"
  />

  <div
    v-if="$props.direction === 'left'"
    class="w-full bg-gradient-to-l from-primary-border from-80% to-transparent to-100%"
    :style="`height: ${borderWidth}px;`"
  />
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    direction?: "right" | "left" | "both";
    borderWidth?: number;
  }>(),
  {
    direction: "both",
    borderWidth: 1,
  },
);
</script>
