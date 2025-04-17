<template>
  <NuxtLayout name="section">
    <MoleculesSharedSectionLabel>Contact</MoleculesSharedSectionLabel>

    <div class="flex flex-wrap items-center justify-between gap-x-8 gap-y-6">
      <MoleculesFooterPersonInfo />
      <MoleculesFooterCredits class="grow shadow-2xl" />
    </div>

    <MoleculesFooterSocialButtons />
    <MoleculesFooterCopyright />
  </NuxtLayout>
</template>
