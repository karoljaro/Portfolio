<template>
  <SectionWrapper>
    <br>
    <br>
    <br>

    <div v-if="isMobile">
      To jest telefon
    </div>
    <div v-else>
      To nie jest telefon
    </div>


    <br>
    <br>
    <br>
    <SharedAnimationsSectionLine />
  </SectionWrapper>
</template>

<script lang="ts" setup>
import SectionWrapper from '~/components/Shared/ContainerWrapper.vue';

const isMobile = ref<boolean>(false);

const isPhone = () => {

  const userAgent = navigator.userAgent;
  console.log(userAgent)
  if(/Android/i.test(userAgent)) {
    return isMobile['value'] = true;
  }
  if(/iPhone|iPad|iPod/i.test(userAgent)) {
    return isMobile['value'] = true;
  }
  if(/Windows Phone/i.test(userAgent)) {
    return isMobile['value'] = true;
  }

  return isMobile['value'] = false;
}

onBeforeMount(() => {
  isPhone();
})
</script>
