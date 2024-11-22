<template>
   <div ref="navLink" class="w-1/4">
      <NuxtLink :to="url" class="flex items-center space-x-2 flex-nowrap">
         <div ref="navLinkLine" class="h-[1px] border-b border-gray-600"></div>
         <p>{{ text }}</p>
      </NuxtLink>
   </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

defineProps<
   Required<{
      readonly text: string;
      readonly url: string | URL;
   }>
>();

const navLink = ref<HTMLDivElement | null>(null);
const navLinkLine = ref<HTMLElement | null>(null);
const gsap = $gsap;
let ctx: gsap.Context;

onMounted(() => {
   if (navLink && navLinkLine) {
      ctx = gsap.context(() => {
         useEventListener(navLink, 'mouseenter', () => {
            gsap.to(navLinkLine['value'], {
               width: '50px',
               ease: 'power3.out'
            });
         });

         useEventListener(navLink, 'mouseleave', () => {
            gsap.to(navLinkLine['value'], {
               width: '0px',
               ease: 'power3.in',
               onComplete: () => {
                  ctx.kill();
                  ctx.revert();
               }
            });
         });
      });
   }
});
</script>
