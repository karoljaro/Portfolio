<template>
  <div>
    <!-- <OrganismThePreloader /> -->
    <main id="smooth-wrapper">
      <NuxtRouteAnnouncer />
      <NuxtLayout id="smooth-content" class="will-change-transform">
        <NuxtPage />
      </NuxtLayout>
    </main>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onBeforeUnmount } from 'vue';
const { $ScrollSmoother, $ScrollTrigger } = useNuxtApp();
const { smScroll, setScrollSmoother } = useGeneralStore();

onMounted(async () => {
  setScrollSmoother(
    $ScrollSmoother.create({
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    }),
  );

  await document.fonts.ready;
  await nextTick();

  $ScrollTrigger.refresh();
});

onBeforeUnmount(() => {
  if (smScroll) {
    smScroll.kill();
    setScrollSmoother(null);
  }
});
</script>
