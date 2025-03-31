<template>
  <button class="flex max-w-80 md:max-w-[25rem] grow cursor-pointer items-stretch justify-between gap-2">
    <!-- ====================[LEFT PART OF BUTTON]==================== -->
    <div
      class="text-fourth-dark-color bg-secondary-dark-bg flex h-fit grow items-center justify-center rounded-full md:px-12 md:py-4 px-8 py-3 leading-[130%] 2xl:py-6"
    >
      <p class="font-OpenSans font-normal italic 2xl:text-3xl sm:text-2xl text-lg">
        <slot />
      </p>
    </div>

    <!-- ====================[RIGHT PART OF BUTTON]==================== -->
    <div ref="secondDivRef" class="bg-secondary-dark-bg flex shrink-0 items-center justify-center rounded-full" :style="secondDivStyle">
      <Icon name="lucide:move-right" class="shrink-0 text-2xl md:text-4xl" />
    </div>
  </button>
</template>

<script setup lang="ts">
const DEFAULT_WIDTH: number = 0;
const secondDivRef = ref<HTMLDivElement | null>(null);
const secondDivWidth = ref<number>(DEFAULT_WIDTH);

const secondDivStyle = computed(() => ({
  width: `${secondDivWidth["value"]}px`,
}));

const updateWidth = async () => {
  secondDivWidth["value"] = DEFAULT_WIDTH;

  nextTick(() => {
    if (secondDivRef["value"]) {
      secondDivWidth["value"] = secondDivRef["value"].offsetHeight;
    }
  });
};

onMounted(() => {
  updateWidth();
});

useEventListener(window, "resize", updateWidth);
</script>
