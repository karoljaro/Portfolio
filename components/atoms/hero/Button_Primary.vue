<!-- <template>
  <button class="relative block overflow-hidden mx-4 my-auto uppercase border border-solid border-primary-dark-border before:content-[''] before:absolute before:-top-[3.125rem] before:left-0 before:right-0 before:bottom-0 before:border-r-[3.125rem] before:border-r-transparent before:border-b-[5rem] before:-translate-x-full hover:before:translate-x-0">
    <slot />
  </button>
</template> -->

<template>
  <button class="flex w-full max-w-[25rem] gap-4">
    <div
      class="text-fourth-dark-color bg-secondary-dark-bg py-6 grow rounded-full text-3xl leading-[130%]"
    >
      <p class="font-OpenSans text-3xl italic font-normal"><slot /></p>
    </div>

    <div
      class="bg-secondary-dark-bg flex size-20 shrink-0 items-center justify-center rounded-full"
    >
      <Icon name="lucide:move-right" class="shrink-0 text-4xl" />
    </div>
  </button>
</template>
