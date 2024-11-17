<template>
   <div
      ref="preloader"
      id="preloader"
      v-if="isPreloaderVisible"
      class="fixed left-0 top-0 z-30 flex h-full w-full items-center justify-center overflow-hidden bg-[#0c0a0b]"
   >
      <div id="text-container" class="invisible flex flex-row gap-5 overflow-hidden text-white">
         <h1 class="text-4xl">The future</h1>
         <h1 class="text-4xl">is</h1>
         <h1 class="text-4xl">yours</h1>
      </div>
   </div>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp();
const preloader = ref<HTMLDivElement | null>(null);
const isPreloaderVisible = ref<boolean>(true);

onMounted(() => {
  const tl = $gsap.timeline();
  tl.to("body", {
  overflow: "hidden"
  })
  .to("#preloader #text-container", {
    duration: 0,
    visibility: "visible",
    ease: "Power3.easeOut"
  })
  .from("#preloader #text-container h1", {
    duration: 1.5,
    delay: 2,
    y: 70,
    skewY: 10,
    stagger: 0.4,
    ease: "Power3.easeOut",
  })
  .to("#preloader #text-container h1", {
    duration: 1.2,
    y: 70,
    skewY: -20,
    stagger: 0.2,
    ease: "Power3.easeOut"
  })
  .to("#preloader", {
    duration: 1.5,
    height: "0vh",
    ease: "Power3.easeOut"
  })
  .to(
    "body",
    {
      overflow: "auto"
    },
    "-=2"
  )
  .to("#preloader", {
    display: "none"
  });

})
</script>
