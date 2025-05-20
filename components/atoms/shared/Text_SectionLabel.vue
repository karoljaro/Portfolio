<template>
  <p ref="textElementRef" class="font-FiraCode text-primary-color text-2.8xl flex font-semibold text-nowrap sm:text-5xl">&gt;</p>
</template>

<script setup lang="ts">
import { ref, onUnmounted, nextTick } from 'vue';
import { tryOnMounted } from '@vueuse/core';

const props = defineProps<{
  text: string;
}>();

const { $gsap } = useNuxtApp();
const textElementRef = ref<HTMLParagraphElement | null>(null);

let ctx: gsap.Context | undefined;
let exposedAnimationCreator: (() => gsap.core.Timeline | null) | null = null;

tryOnMounted(async () => {
  await nextTick();

  if (!textElementRef.value) {
    console.warn("Text_SectionLabel: textElementRef is not available.");
    return;
  }

  ctx = $gsap.context(() => {
    const createAnimationInsideContext = () => {
      if (!textElementRef.value) {
        console.warn("Text_SectionLabel (context): No target text element found for animation.");
        return null;
      }
      const tl = $gsap.timeline({ paused: true });
      tl.to(textElementRef.value, {
        duration: 1,
        scrambleText: {
          text: `> ${props.text}`,
          chars: "X0mYFSISQcoqjvZJwzWbUeDgHhJkL",
        }
      });
      return tl;
    };

    exposedAnimationCreator = createAnimationInsideContext;

  }, textElementRef.value);
});

onUnmounted(() => {
  ctx?.revert();
});

defineExpose({
  createAppearAnimation: () => {
    if (exposedAnimationCreator) {
      return exposedAnimationCreator();
    }
    console.warn("Text_SectionLabel: exposedAnimationCreator is not yet available.");
    return null;
  },
});
</script>