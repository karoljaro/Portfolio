<template>
  <div ref="sectionLabelRoot" class="flex items-center gap-6">
    <AtomsSharedTextSectionLabel ref="textLabelAtom" :text="text" />
    <AtomsSharedLinePrimary ref="lineAtom" direction="right" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();

interface TextLabelAtomInstance {
  createAppearAnimation: () => gsap.core.Timeline | null;
}

interface LineAtomInstance {
  createDrawAnimation: () => gsap.core.Timeline | null;
}

const sectionLabelRoot = ref<HTMLDivElement | null>(null);
const textLabelAtom = ref<TextLabelAtomInstance | null>(null);
const lineAtom = ref<LineAtomInstance | null>(null);

const { $gsap, $ScrollTrigger } = useNuxtApp();

let ctx: gsap.Context;
let mainTimeLine: gsap.core.Timeline | null = null;

onMounted(async () => {
  await nextTick();
  await document.fonts.ready;

  ctx = $gsap.context(() => {
    if (sectionLabelRoot.value && textLabelAtom.value && lineAtom.value) {
      const textAnimation = textLabelAtom.value.createAppearAnimation();
      const lineAnimation = lineAtom.value.createDrawAnimation();

      if (textAnimation && lineAnimation) {
        mainTimeLine = $gsap.timeline({ paused: true });

        mainTimeLine.add(textAnimation.play());
        mainTimeLine.add(lineAnimation.play(), "-=0.5");

        $ScrollTrigger.create({
          trigger: sectionLabelRoot.value,
          start: "top 80%",
          onEnter: () => mainTimeLine?.play(),
          toggleActions: "play none none none",
          // markers: import.meta.dev,
        });
      } else {
        if (!textAnimation) console.warn("SectionLabel: Text animation could not be created.");
        if (!lineAnimation) console.warn("SectionLabel: Line animation could not be created.");
      }
    }
  }, sectionLabelRoot);
});

onUnmounted(() => {
  ctx.revert();
});
</script>
