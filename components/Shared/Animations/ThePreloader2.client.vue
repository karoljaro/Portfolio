<template>
   <div
      ref="preloader"
      v-if="isPreloaderVisible"
      class="fixed left-0 top-0 z-30 flex h-full w-full items-center justify-center overflow-hidden bg-[#0c0a0b]"
   >
      <div
         ref="preloaderTextContainer"
         class="invisible flex flex-row gap-5 overflow-hidden text-white"
      >
         <h1 :ref="(el) => h1Elements?.push(el)" class="text-4xl">The future</h1>
         <h1 :ref="(el) => h1Elements?.push(el)" class="text-4xl">is</h1>
         <h1 :ref="(el) => h1Elements?.push(el)" class="text-4xl">yours</h1>
      </div>
   </div>
</template>

<script lang="ts" setup>
import type { ComponentPublicInstance } from 'vue';

const { $gsap } = useNuxtApp();
const store = useGeneralStore();
const { isPreloaderVisible } = storeToRefs(store);

const preloader = ref<HTMLDivElement | null>(null);
const preloaderTextContainer = ref<HTMLDivElement | null>(null);
const h1Elements = ref<(Element | ComponentPublicInstance | null)[]>([]);

let ctx: gsap.Context;

onMounted(async () => {
   await nextTick();

   if (isPreloaderVisible && preloader['value'] && preloaderTextContainer['value'] && h1Elements['value']) {
      ctx = $gsap.context(() => {
         const tl = $gsap.timeline();

         tl.to('body', {
            overflow: 'hidden'
         });

         tl.to(preloaderTextContainer['value'], {
            duration: 0,
            visibility: 'visible',
            ease: 'Power3.easeOut'
         });

         tl.from(h1Elements['value'], {
            duration: 1.5,
            delay: 2,
            y: 70,
            skewY: 10,
            stagger: 0.4,
            ease: 'Power3.easeOut'
         });

         tl.to(h1Elements['value'], {
            duration: 1.2,
            y: 70,
            skewY: -20,
            stagger: 0.2,
            ease: 'Power3.easeOut'
         });

         tl.to(preloader['value'], {
            duration: 1.5,
            height: '0vh',
            ease: 'Power3.easeOut'
         });

         tl.to(
            'body',
            {
               overflow: 'auto'
            },
            '-=2'
         );

         tl.to(preloader['value'], {
            display: 'none',
            onComplete: () => {
               ctx.kill()
               ctx.revert();

               store.updateIsPreloaderVisible(false);
            }
         });
      });
   }
});
</script>
