import gsap from "gsap"
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtPlugin((nuxtApp) => {
   if (import.meta.client) {
      gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrambleTextPlugin);
   }
   nuxtApp.provide("gsap", gsap);
   nuxtApp.provide("ScrollSmoother", ScrollSmoother);
   nuxtApp.provide("ScrollTrigger", ScrollTrigger)
})
