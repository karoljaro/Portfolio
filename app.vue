<template>
  <div>
    <OrganismThePreloader />
    <main id="smooth-wrapper">
      <NuxtRouteAnnouncer />
      <NuxtLayout id="smooth-content" class="will-change-transform">
        <NuxtPage />
      </NuxtLayout>
    </main>
  </div>
</template>

<script setup lang="ts">
const { $ScrollSmoother } = useNuxtApp();
const { smScroll, setScrollSmoother } = useGeneralStore();

tryOnMounted(() => {
  setScrollSmoother(
    $ScrollSmoother.create({
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    }),
  );
});

onBeforeUnmount(() => {
  if (smScroll) {
    smScroll.kill();
    setScrollSmoother(null);
  }
});
</script>
