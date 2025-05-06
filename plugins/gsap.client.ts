import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtPlugin((nuxtApp) => {
   if (import.meta.client) {
      gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
   }
   nuxtApp.provide("gsap", gsap);
   nuxtApp.provide("ScrollSmoother", ScrollSmoother);
   nuxtApp.provide("ScrollTrigger", ScrollTrigger)
})
