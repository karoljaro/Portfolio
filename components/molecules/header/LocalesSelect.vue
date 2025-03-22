<template>
  <div class="flex flex-col">
    <template v-for="singleLang in langs" :key="singleLang">
      <AtomsHeaderTextLocalesOption>
        {{ singleLang }}
      </AtomsHeaderTextLocalesOption>
    </template>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  langs: readonly string[];
}>();
</script>
