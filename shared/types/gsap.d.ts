import type { gsap } from 'gsap';

declare module "#app" {
   interface NuxtApp {
      $gsap: typeof gsap;
      $ScrollSmoother: typeof ScrollSmoother
      $ScrollTrigger: typeof ScrollTrigger
   }
}