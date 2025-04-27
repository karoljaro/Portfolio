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
import type { WorkItemDataRaw } from '~/data/types/app-data.model';

defineProps<{
  data: WorkItemDataRaw;
}>();
</script>
