<template>
  <div
    class="slider"
    :style="`--width: 200px; --height: 50px; --quantity: ${$props.techNameList.length}`"
  >
    <div class="list">
      <template v-for="(item, index) in techNameList" :key="index">
        <div class="item" :style="`--position: ${index}`">
          <p>{{ item }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  techNameList: readonly string[];
}>();
</script>

<style lang="css" scoped>
.slider {
  width: 100%;
  height: var(--height);
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    #121212 10% 90%,
    transparent
  );
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
  animation-delay: calc(
    (15s / var(--quantity)) * (var(--position) - 1)
  ) !important;
}

.slider .list .item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f5f5f5;
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
  font-weight: 400;
  transition: color 0.3s ease, text-shadow 0.3s ease;
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

.slider .list .item:hover {
  /* filter: grayscale(0); */
  color: #ff3333; /* Jasny czerwony */
  text-shadow: 
    0 0 5px rgba(255, 0, 0, 0.9),
    0 0 10px rgba(255, 0, 0, 0.8),
    0 0 20px rgba(255, 0, 0, 0.7),
    0 0 30px rgba(255, 0, 0, 0.6),
    0 0 40px rgba(255, 0, 0, 0.5),
    0 0 50px rgba(255, 0, 0, 0.4),
    0 0 60px rgba(255, 0, 0, 0.3);
  filter: brightness(1.2) drop-shadow(0 0 8px rgba(255, 0, 0, 0.8));
  transform: scale(1.05);
  transition: color 0.3s ease, text-shadow 0.3s ease, filter 0.3s ease, transform 0.3s ease;
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
