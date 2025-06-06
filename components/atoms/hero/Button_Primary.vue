<template>
  <button
    :to="$props['to']"
    class="hover-group flex max-w-80 grow cursor-pointer items-stretch justify-between gap-2 drop-shadow-md select-none md:max-w-[25rem] dark:drop-shadow-none"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @touchstart="isHovered = true"
    @touchend="isHovered = false"
    @click="scrollToId"
  >
    <!-- ====================[LEFT PART OF BUTTON]==================== -->
    <div
      ref="firstDivRef"
      class="border-primary-border bg-secondary-bg text-fourth-color relative flex h-fit grow items-center justify-center overflow-hidden rounded-full border-2 px-8 py-3 leading-[130%] md:px-12 md:py-4 2xl:py-6"
      :class="[{ 'text-neutral-900 dark:text-white': isHovered }, isHovered ? 'text-change-active' : 'text-change-inactive']"
    >
      <p class="font-OpenSans relative z-20 text-lg font-normal italic sm:text-2xl 2xl:text-3xl">
        <slot />
      </p>
      <div
        class="slide-bg absolute inset-0 z-10 transform bg-[#F5F5F5] dark:bg-[#121212]"
        :class="{ 'slide-in-first': isHovered, 'slide-out-second': !isHovered && wasHovered }"
      />
    </div>

    <!-- ====================[RIGHT PART OF BUTTON]==================== -->
    <div
      ref="secondDivRef"
      class="border-primary-border bg-secondary-bg text-fourth-color relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2"
      :class="[{ 'text-neutral-900 dark:text-white': isHovered }, isHovered ? 'text-change-active-second' : 'text-change-inactive-second']"
      :style="secondDivStyle"
    >
      <Icon name="static_Lucide:move-right" class="relative z-20 shrink-0 text-2xl md:text-4xl" />
      <div
        class="slide-bg absolute inset-0 z-10 transform bg-[#F5F5F5] dark:bg-[#121212]"
        :class="{ 'slide-in-second': isHovered, 'slide-out-first': !isHovered && wasHovered }"
      />
    </div>
  </button>
</template>

<script setup lang="ts">
const DEFAULT_WIDTH: number = 0;
const firstDivRef = ref<HTMLDivElement | null>(null);
const secondDivRef = ref<HTMLDivElement | null>(null);
const secondDivWidth = ref<number>(DEFAULT_WIDTH);
const isHovered = ref(false);
const wasHovered = ref(false);
const generalStore = useGeneralStore();

const props = defineProps<{
  to: string;
}>();

const interialUrl = props["to"].replace("#", "");

function scrollToId() {
  const el = document.getElementById(interialUrl);
  const currentSmScroll = generalStore.smScroll;
  if (el && currentSmScroll) {
    currentSmScroll.scrollTo(el, true, "top top");
  }
}

watch(isHovered, (newValue, oldValue) => {
  if (oldValue === true && newValue === false) {
    wasHovered.value = true;
    setTimeout(() => {
      wasHovered.value = false;
    }, 600); // Czas trwania animacji + opóźnienie
  }
});

const secondDivStyle = computed(() => ({
  height: `${secondDivWidth["value"]}px`,
  width: `${secondDivWidth["value"]}px`,
}));

const updateWidth = async () => {
  secondDivWidth["value"] = DEFAULT_WIDTH;

  nextTick(() => {
    if (secondDivRef["value"] && firstDivRef["value"]) {
      secondDivWidth["value"] = firstDivRef["value"].offsetHeight;
    }
  });
};

onMounted(() => {
  updateWidth();
});

useEventListener(window, "resize", updateWidth);
</script>

<style scoped>
.slide-bg {
  transition-property: transform, opacity;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  transform: translateX(-100%);
}

/* Animacje wejścia (hover) */
.slide-in-first {
  transform: translateX(0);
  transition-delay: 0ms;
}

.slide-in-second {
  transform: translateX(0);
  transition-delay: 290ms;
}

.slide-out-first {
  transform: translateX(-100%);
  transition-delay: 0ms;
}

.slide-out-second {
  transform: translateX(-100%);
  transition-delay: 290ms;
}

/* Przejścia kolorów dla pierwszego elementu */
.text-change-active {
  transition: color 50ms ease-in-out 0ms;
}

.text-change-inactive {
  transition: color 50ms ease-in-out 300ms; /* Opóźnienie przy wyjściu */
}

/* Przejścia kolorów dla drugiego elementu */
.text-change-active-second {
  transition: color 50ms ease-in-out 290ms; /* Opóźnienie przy wejściu */
}

.text-change-inactive-second {
  transition: color 50ms ease-in-out 0ms;
}
</style>
