<template>
  <section class="space-y-12 md:space-y-16 py-8">
    <div class="space-y-6">
      <MoleculesHeroIntroduction />

      <div class="flex flex-wrap items-center justify-between gap-14">
        <MoleculesHeroPrimaryHeading />
        <MoleculesHeroProjectBtn class="[@media(max-width:1440px)]:hidden" />
      </div>

      <div class="flex flex-wrap-reverse items-center justify-between gap-4">
        <!-- GoalsDesc może się zawijać -->
        <MoleculesHeroGoalsDesc class="min-w-72 flex-1 [@media(max-width:1440px)]:hidden" />

        <!-- SecondaryHeading nie powinien się zawijać -->
        <MoleculesHeroSecondaryHeading class="flex-shrink-0 whitespace-nowrap" />
      </div>

      <div class="flex flex-wrap items-center justify-between gap-8 [@media(min-width:1441px)]:hidden">
        <MoleculesHeroGoalsDesc class="flex-1 basis-1/2" />
        <MoleculesHeroProjectBtn class="flex-1 basis-1/2" />
      </div>

      <MoleculesHeroSocialBtns />
    </div>
    <MoleculesHeroCarousel />
  </section>
</template>
