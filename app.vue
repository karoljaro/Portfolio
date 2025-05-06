<template>
  <div>
    <!-- <OrganismThePreloader /> -->
    <main id="smooth-wrapper">
      <NuxtRouteAnnouncer />
      <NuxtLayout id="smooth-content">
        <NuxtPage />
      </NuxtLayout>
    </main>
  </div>
</template>

<script setup lang="ts">
const { $ScrollSmoother } = useNuxtApp();

onMounted(() => {
  $ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1,
  });
});
</script>
