<template>
  <Icon :name="iconName" class="text-primary-color text-5xl md:text-6.5xl" />
</template>

<script setup lang="ts">
defineProps<{
  iconName: string;
}>();
</script>