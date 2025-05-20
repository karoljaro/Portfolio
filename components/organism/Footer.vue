<template>
  <NuxtLayout name="section">
    <MoleculesSharedSectionLabel :text="footerStore.footerSectionLabel" />

    <div class="flex flex-wrap items-center justify-between gap-x-8 gap-y-6">
      <MoleculesFooterPersonInfo :credit-data="footerStore" />
      <MoleculesFooterCredits :credits-data="footerStore.credits" class="grow shadow-2xl dark:shadow-none" />
    </div>

    <MoleculesFooterSocialButtons />
    <MoleculesFooterCopyright />
  </NuxtLayout>
</template>

<script setup lang="ts">
const footerStore = useFooterStore();
</script>