<template>
  <NuxtLink
    :to="$props['to']"
    target="_blank"
    rel="noopener noreferrer"
    class="font-FiraCode border-primary-border inline-flex items-center justify-between gap-x-2 rounded-full border bg-[#121212] p-4 text-left text-xl font-semibold text-[#F5F5F5] hover:bg-primary-border duration-300"
    
  >
    <Icon :name="$props['type'] === 'GitHub' ? 'lucide:github' : 'lucide:radio'" class="text-2xl" />
    {{ type }}
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string;
  type: "GitHub" | "Demo" | "Live";
}>();

const isInternalLink = (url: HTMLAnchorElement["href"]) => {
  return url.startsWith("/") || url.startsWith("#");
};

if (isInternalLink(props["to"])) {
  console.warn("Uwaga: przekazano link wewnętrzny, który nie powinien być otwierany w nowej karcie: ", props["to"]);
}
</script>
