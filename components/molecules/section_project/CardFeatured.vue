<template>
  <AtomsSectionProjectCardProject class="grid grid-cols-1 lg:grid-cols-[25rem_1fr] 2xl:grid-cols-[25rem_1fr_min-content] gap-6">
    <div class="space-y-3 w-full">
      <AtomsSectionProjectHeadingTitle>Test</AtomsSectionProjectHeadingTitle>
      <div class="flex flex-wrap gap-2">
        <AtomsSectionProjectBadgeTechnology>Typescript</AtomsSectionProjectBadgeTechnology>
        <AtomsSectionProjectBadgeTechnology>Pinia</AtomsSectionProjectBadgeTechnology>
        <AtomsSectionProjectBadgeTechnology>GSAP</AtomsSectionProjectBadgeTechnology>
        <AtomsSectionProjectBadgeTechnology>vue</AtomsSectionProjectBadgeTechnology>
        <AtomsSectionProjectBadgeTechnology>Typescript</AtomsSectionProjectBadgeTechnology>
      </div>
    </div>

    <div class="self-center w-full">
      <AtomsSectionProjectTextDescription>
        The College Python Projects repository showcases a collection of diverse Python projects created during college studies. These projects demonstrate a
        range of programming skills, from data analysis to web development, and highlight the versatility and power of Python.
      </AtomsSectionProjectTextDescription>
    </div>

    <div class="flex items-center justify-start gap-2 w-full">
      <AtomsSectionProjectButtonAction to="https://github.com/nuxt/icon?tab=readme-ov-file" type="GitHub" />
      <AtomsSectionProjectButtonAction to="https://github.com/nuxt/icon?tab=readme-ov-file" type="Live" />
    </div>
  </AtomsSectionProjectCardProject>
</template>