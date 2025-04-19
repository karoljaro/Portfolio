<template>
  <AtomsSectionWorkCardWork>
    <AtomsSectionWorkIconCardIcon :icon-name="$props['data'].icon" />

    <AtomsSectionWorkHeadingCardTitle>{{ $props['data'].title }}</AtomsSectionWorkHeadingCardTitle>

    <AtomsSectionWorkTextCardDescription>
      {{ $props['data'].description }}
    </AtomsSectionWorkTextCardDescription>
  </AtomsSectionWorkCardWork>
</template>

<script lang="ts" setup>
import type { WorkArea_DATA } from '~/data/workArea';

defineProps<{
  data: WorkArea_DATA;
}>();
</script>
