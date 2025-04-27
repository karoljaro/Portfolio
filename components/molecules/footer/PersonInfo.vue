<template>
  <div class="space-y-4 md:space-y-2">
    <div>
      <AtomsFooterTextName>{{ creditData.firstName }}</AtomsFooterTextName>
      <AtomsFooterTextName class="sm:hidden">{{ creditData.surname }}</AtomsFooterTextName>
    </div>
    <div class="flex items-center justify-start gap-2">
      <AtomsFooterTextSpecialization>
        {{ creditData.specialization.split(" ").slice(0, 2).join(" ") }} <br>
        {{ creditData.specialization.split(" ").slice(2, ).join(" ") }}
      </AtomsFooterTextSpecialization>
      <AtomsFooterTextName class="max-sm:hidden">{{ creditData.surname }}</AtomsFooterTextName>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FooterDataRaw } from '~/data/types/footer/footer.model';

defineProps<{
  creditData: Omit<FooterDataRaw, "credits" | "socialButtons" | "footerSectionLabel">
}>();
</script>