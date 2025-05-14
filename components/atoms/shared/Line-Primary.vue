<template>
  <div ref="lineComponentRoot" class="w-full">
    <div
      v-if="$props.direction === 'both'"
      ref="bothLineRef"
      class="via-primary-border w-full origin-center transform bg-gradient-to-r from-transparent from-0% via-50% to-transparent to-100%"
      :style="`height: ${borderWidth}px;`"
    />

    <div
      v-if="$props.direction === 'right'"
      ref="rightLineRef"
      class="from-primary-border w-full origin-left transform bg-gradient-to-r from-80% to-transparent to-100%"
      :style="`height: ${borderWidth}px;`"
    />

    <div
      v-if="$props.direction === 'left'"
      ref="leftLineRef"
      class="from-primary-border w-full origin-right transform bg-gradient-to-l from-80% to-transparent to-100%"
      :style="`height: ${borderWidth}px;`"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'; 
const props = withDefaults(
  defineProps<{
    direction?: "right" | "left" | "both";
    borderWidth?: number;
  }>(),
  {
    direction: "both",
    borderWidth: 1,
  },
);

const { $gsap } = useNuxtApp();
const lineComponentRoot = ref<HTMLDivElement | null>(null);
const bothLineRef = ref<HTMLDivElement | null>(null);
const rightLineRef = ref<HTMLDivElement | null>(null);
const leftLineRef = ref<HTMLDivElement | null>(null);

let ctx: gsap.Context;
let exposedAnimationCreator: (() => gsap.core.Timeline | null) | null = null;

onMounted(async () => {
  await nextTick();
  ctx = $gsap.context(() => {
    const createAnimationInsideContext = () => {
      let targetLineElement: HTMLDivElement | null = null;
      const animationProps = {
        from: { scaleX: 0, autoAlpha: 0 },
        to: {
          scaleX: 1,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power2.inOut",
        },
      };

      if (props.direction === "both" && bothLineRef.value) {
        targetLineElement = bothLineRef.value;
      } else if (props.direction === "right" && rightLineRef.value) {
        targetLineElement = rightLineRef.value;
      } else if (props.direction === "left" && leftLineRef.value) {
        targetLineElement = leftLineRef.value;
      }

      if (!targetLineElement) {
        console.warn("Line-Primary (context): No target line element found for animation.");
        return null;
      }

      const tl = $gsap.timeline({ paused: true });

      tl.fromTo(
        targetLineElement,
        animationProps.from,
        animationProps.to
      );

      return tl;
    };

    exposedAnimationCreator = createAnimationInsideContext;
  }, lineComponentRoot);
});

onUnmounted(() => {
  if (ctx) {
    ctx.revert();
  }
});

defineExpose({
  createDrawAnimation: () => {
    if (exposedAnimationCreator) {
      return exposedAnimationCreator();
    }
    return null;
  },
});
</script>