<template>
   <div ref="preloader" v-if="isPreloaderVisible" class="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <div class="text text-7xl uppercase text-white">{{ percentage }}%</div>
   </div>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp();

const percentage = ref<any>(0);
const preloader = ref<HTMLDivElement | null>(null);
const isPreloaderVisible = ref<boolean>(true);
let ctx;

onMounted(() => {
   if (!preloader.value) return;

   const tl = $gsap.timeline({
      onUpdate: () => {
         percentage.value = Math.round(tl.progress() * 100);
      }
   });

   tl.to(preloader['value'], {
      duration: 1,
      ease: 'none',
      onComplete: () => {
         $gsap.fromTo(
            preloader['value'],
            { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
            { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
                duration: 1.5,
                onComplete: () => {
                    isPreloaderVisible['value'] = false;
                }
            },

         );
      }
   });
});
</script>
