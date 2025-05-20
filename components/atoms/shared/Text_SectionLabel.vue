<template>
  <p ref="textElementRef" class="font-FiraCode text-primary-color text-2.8xl flex font-semibold text-nowrap sm:text-5xl">&gt;</p>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
const { $gsap } = useNuxtApp();
const textElementRef = ref<HTMLParagraphElement | null>(null);
const transfromText = ref<string>('');

transfromText['value'] = `> ${props.text}`;

const createAppearAnimation = () => {
  const tl = $gsap.timeline({ paused: true });
  if (!textElementRef.value) return null;
  tl.to(textElementRef["value"], {
    duration: 1,
    scrambleText: {
      text: transfromText['value'],
      chars: "X0mYFSISQcoqjvZJwzWbUeDgHhJkL",
    }
  });

  return tl;
};

defineExpose({
  createAppearAnimation,
});
</script>
