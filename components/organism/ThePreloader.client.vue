<template>
  <Transition name="preloader-fade">
    <div
      v-if="isPreloaderVisible"
      ref="preloaderRef"
      class="bg-primary-bg fixed top-0 left-0 z-30 flex h-full w-full items-center justify-center overflow-hidden"
    >
      <div
        ref="textContainerRef"
        class="text-fourth flex flex-row gap-5 overflow-hidden"
        :class="{ 'invisible': !animationStarted }"
      >
        <h1 
          v-for="(word, index) in words" 
          :key="index" 
          :ref="(el) => elementRefs?.push(el)" 
          class="text-4xl text-primary-color will-change-transform"
        >
          {{ word }}
        </h1>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { useGeneralStore } from "~/stores/general";

const { 
  preloaderRef, 
  textContainerRef, 
  elementRefs,
  animationStarted,
  words
} = usePreloader({
  skipForReturningVisitors: true,
  minDisplayTime: 1500
});

const store = useGeneralStore();
const { isPreloaderVisible } = storeToRefs(store);
</script>

<style scoped>
.preloader-fade-enter-active,
.preloader-fade-leave-active {
  transition: opacity 0.5s ease;
}

.preloader-fade-enter-from,
.preloader-fade-leave-to {
  opacity: 0;
}

.will-change-transform {
  will-change: transform;
}
</style>
