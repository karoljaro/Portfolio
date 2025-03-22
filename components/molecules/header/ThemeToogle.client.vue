<template>
  <AtomsHeaderBoxThemeToogle @click="toggleTheme">
    <Icon
      :name="mode == 'dark' ? 'lucide:moon' : 'lucide:sun'"
      class="text-2xl"
    />
  </AtomsHeaderBoxThemeToogle>
</template>

<script lang="ts" setup>
const { system, store } = useColorMode({
  selector: "html",
  attribute: "data-theme",
});

const mode = computed(() =>
  store.value === "auto" ? system.value : store.value,
);

const toggleTheme = () => {
  store.value = store.value === "dark" ? "light" : "dark";
};

</script>
<!-- lucide:sun lucide:moon -->
