<template>
   <div
      class="relative mb-5 h-[0.0625rem] w-full"
      @mouseenter="manageMouseEnter"
      @mousemove="(e) => manageMouseMove(e)"
      @mouseleave="manageMouseLeave"
   >
      <svg class="absolute -top-[3.125rem] h-[6.25rem] w-full">
         <path ref="path" class="fill-none stroke-slate-800 stroke-[0.0625rem]"></path>
      </svg>
   </div>
</template>

<script setup lang="ts">
import type { UnwrapRef } from 'vue';

const path = ref<SVGPathElement | null>(null);
const progress = ref<number>(0);
let x: number = 0.5;
const time = ref<number>(Math.PI / 2);
let reqId: number | null = null;

const setPath = (progressVal: UnwrapRef<typeof progress>): void => {
   const { width: innerWidth } = useWindowSize();
   const width = innerWidth['value'] * 0.7;
   if (path['value']) {
      path['value'].setAttributeNS(null, 'd', `M0 50 Q${width * x} ${50 + progressVal}, ${width} 50`);
   }
};

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

const manageMouseEnter = () => {
   if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
   }
};

const manageMouseMove = (e: MouseEvent) => {
   const { movementY, clientX } = e;
   const pathBound = path.value!.getBoundingClientRect();
   x = (clientX - pathBound.left) / pathBound.width;
   progress.value += movementY;
   setPath(progress.value);
};

const manageMouseLeave = () => {
   animateOut();
};

const animateOut = () => {
   const newProgress = progress.value * Math.sin(time['value']);
   progress.value = lerp(progress.value, 0, 0.1);
   time['value'] += 0.2;
   setPath(newProgress);
   if (Math.abs(progress.value) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
   } else {
      resetAnimation();
   }
};

const resetAnimation = () => {
   time['value'] = Math.PI / 2;
   progress['value'] = 0;
};

onMounted(() => {
   setPath(progress['value']);
});
</script>
