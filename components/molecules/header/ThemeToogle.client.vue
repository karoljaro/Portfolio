<template>
  <AtomsHeaderBoxThemeToogle @click="toggleTheme">
    <Icon
      :name="mode == 'dark' ? 'static_Lucide:moon' : 'static_Lucide:sun'"
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