<template>
   <div class="grow">
      <ul class="space-y-1.5 lg:space-y-2">
         <template v-for="link in links" :key="link['id']">
            <li class="relative pl-3 flex items-center before:content-['•'] before:text-fourth before:absolute before:left-0 before:top-[43%] before:-translate-y-1/2 before:text-2xl">
               <SharedHeaderAtomsNavLink :data="link" />
            </li>
         </template>
      </ul>
   </div>
</template>

<script lang="ts" setup>
type Links_TYPE = {
   readonly id: string;
   readonly text: string;
   readonly url: string;
};

const links: Links_TYPE[] = [
   {
      id: '9d0692bb-e2ad-4de7-b05f-7c446c0d5903',
      text: 'About',
      url: '#'
   },
   {
      id: '2fb4e0da-4fa7-43f6-8fe0-30032c7e198f',
      text: 'Projects',
      url: '#'
   },
   {
      id: '00810b3a-b2bf-40d4-bb5a-8aafdc5d7f9b',
      text: 'Skills',
      url: '#'
   },
   {
      id: '910523c3-3713-467a-bc50-c29336fe5424',
      text: 'Contact',
      url: '#'
   }
];
</script>
