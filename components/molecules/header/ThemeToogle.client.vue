<template>
  <AtomsHeaderBoxThemeToogle :icon-key="mode" @click="toggleTheme">
    <transition name="fade" mode="out-in">
      <Icon
        :name="mode == 'dark' ? 'static_Lucide:moon' : 'static_Lucide:sun'"
        class="text-2xl"
      />
    </transition>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
