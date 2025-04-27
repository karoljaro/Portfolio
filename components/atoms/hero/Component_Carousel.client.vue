<template>
  <div class="slider" :style="`--width: 200px; --height: 50px; --quantity: ${technologiesList.length}`">
    <div class="list">
      <template v-for="({ name, url }, index) in technologiesList" :key="index">
        <div class="item" :style="`--position: ${index}`">
          <NuxtLink target="_blank" rel="noreferrer noopener" :to="url" class="text-primary-color font-OpenSans text-xl font-normal lg:text-2xl xl:text-3xl">
            {{ name }}
          </NuxtLink>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const { technologiesList } = useHeroStore();
</script>

<style lang="css" scoped>
.slider {
  width: 100%;
  height: var(--height);
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #121212 10% 90%, transparent);
}

.slider .list {
  display: flex;
  width: 100%;
  min-width: calc(var(--width) * var(--quantity));
  position: relative;
}

.slider .list .item {
  width: var(--width);
  height: var(--height);
  position: absolute;
  left: 100%;
  animation: autoRun 15s linear infinite;
  transition: filter 0.5s;
  animation-delay: calc((15s / var(--quantity)) * (var(--position) - 1) - 15s) !important;
  animation-fill-mode: both;
}

.slider .list .item {
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    color 0.3s ease,
    text-shadow 0.3s ease;
}

@keyframes autoRun {
  from {
    left: 100%;
  }
  to {
    left: calc(var(--width) * -1);
  }
}

.slider:hover .list .item {
  animation-play-state: paused !important;
  /* filter: grayscale(1); */
}

/* Hover dla trybu jasnego (light mode) */
.slider .list .item:hover {
  color: #121212; /* ciemny kolor dla trybu jasnego */
  text-shadow:
    0 0 5px rgba(151, 151, 151, 0.6),
    0 0 10px rgba(151, 151, 151, 0.4),
    0 0 15px rgba(151, 151, 151, 0.2);
  filter: brightness(0.85) drop-shadow(0 0 5px rgba(151, 151, 151, 0.4));
  transform: scale(1.03);
  transition:
    color 0.3s ease,
    text-shadow 0.3s ease,
    filter 0.3s ease,
    transform 0.3s ease;
}

/* Hover dla trybu ciemnego (dark mode) */
:where([data-theme="dark"]) .slider .list .item:hover {
  color: rgb(245, 245, 245); /* jasny kolor dla trybu ciemnego */
  text-shadow:
    0 0 5px rgba(245, 245, 245, 0.6),
    0 0 10px rgba(245, 245, 245, 0.4),
    0 0 15px rgba(245, 245, 245, 0.2);
  filter: brightness(1.15) drop-shadow(0 0 5px rgba(245, 245, 245, 0.4));
  transform: scale(1.03);
}

.slider[reverse="true"] .item {
  animation: reversePlay 10s linear infinite;
}

@keyframes reversePlay {
  from {
    left: calc(var(--width) * -1);
  }
  to {
    left: 100%;
  }
}
</style>
