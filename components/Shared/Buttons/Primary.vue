<template>
   <div class="flex flex-nowrap space-x-4">
      <div
         class="w-96 rounded-full bg-fourth px-5 py-[1.125rem] text-center font-normal italic text-primary lg:text-lg xl:text-xl"
      >
         <slot />
      </div>
      <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-fourth">
         <MoveRight class="text-primary" />
      </div>
   </div>
</template>

<script lang="ts" setup>
import { MoveRight } from 'lucide-vue-next';
</script>
