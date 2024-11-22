<template>
   <div ref="navLink" class="w-1/4">
      <NuxtLink
         :to="data['url']"
         class="text-fourth font-fira-code tracking-wide flex flex-nowrap items-center space-x-2 text-left text-base leading-normal lg:text-lg xl:text-xl"
      >
         <div ref="navLinkLine" class="border-third h-[1px] border-b"></div>
         <p>{{ data['text'] }}</p>
      </NuxtLink>
   </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

defineProps<
   Required<{
      data: {
         readonly id: string;
         readonly text: string;
         readonly url: string;
      };
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
               width: '3.75rem',
               ease: 'power3.out'
            });
         });

         useEventListener(navLink, 'mouseleave', () => {
            gsap.to(navLinkLine['value'], {
               width: '0rem',
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
