import type { ComponentPublicInstance } from "vue";
import { useGeneralStore } from "~/stores/general";

/**
 * Configuration options for the preloader composable
 */
export interface PreloaderOptions {
  /**
   * Words to display in the preloader animation
   * @default ["The future", "is", "yours"]
   */
  words?: string[];
  
  /**
   * Whether to skip preloader for returning visitors
   * Uses session storage state to determine if user has visited before
   * @default false
   */
  skipForReturningVisitors?: boolean;
  
  /**
   * Minimum display time in milliseconds
   * Ensures animations are visible even if resources load quickly
   * @default 2000
   */
  minDisplayTime?: number;
}

/**
 * Composable that manages preloader animation and visibility state
 * Controls preloader animations, handles resource loading, and manages visibility state
 * 
 * @param options - Configuration options for the preloader
 * @returns References and state needed by the preloader component
 */
export function usePreloader(options: PreloaderOptions = {}) {
  const { words = ["The future", "is", "yours"], skipForReturningVisitors = false, minDisplayTime = 2000 } = options;

  const store = useGeneralStore();
  const { $gsap } = useNuxtApp();

  // DOM References
  const preloaderRef = ref<HTMLElement | null>(null);
  const textContainerRef = ref<HTMLElement | null>(null);
  const elementRefs = ref<(Element | ComponentPublicInstance | null)[]>([]);
  
  // Internal state
  const animationStarted = ref(false);
  const animationComplete = ref(false);
  const resourcesReady = ref(false);

  // Use store state from Pinia instead of duplicating in session storage
  const { isPreloaderVisible } = storeToRefs(store);

  /**
   * Computed property that determines if preloader should be skipped
   * Based on skipForReturningVisitors option and store state
   */
  const shouldSkipPreloader = computed(() => skipForReturningVisitors && !isPreloaderVisible.value);
  // GSAP context for animation management and cleanup
  let ctx: gsap.Context | undefined;

  /**
   * Checks if all page resources are loaded and updates state accordingly
   * Uses document.readyState or window load event to determine when ready
   */
  const checkResourcesLoaded = () => {
    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        resourcesReady.value = true;
      } else {
        window.addEventListener("load", () => {
          resourcesReady.value = true;
        });
      }
    }
  };
  /**
   * Executes the preloader animation sequence
   * Includes entrance animation, text reveal, and exit animation
   * Updates store state when complete to prevent showing on next visit
   */
  const runAnimation = async () => {
    if (animationStarted.value || !preloaderRef.value || !textContainerRef.value || !elementRefs.value.length) {
      return;
    }

    animationStarted.value = true;

    ctx = $gsap.context(() => {
      const tl = $gsap.timeline();

      // Lock scrolling
      tl.to("body", {
        overflow: "hidden",
      });

      // Show text container
      tl.to(textContainerRef.value, {
        duration: 0,
        visibility: "visible",
      });

      // Animate words in
      tl.from(elementRefs.value, {
        duration: 1.5,
        delay: 0.5,
        y: 70,
        skewY: 10,
        stagger: 0.3,
        ease: "Power3.easeOut",
        clearProps: "transform",
      });

      // Animate words out
      tl.to(elementRefs.value, {
        duration: 1.0,
        y: 70,
        skewY: -20,
        stagger: 0.2,
        ease: "Power3.easeOut",
      });

      // Animate preloader out
      tl.to(preloaderRef.value, {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
      });

      // Enable scrolling again
      tl.to(
        "body",
        {
          overflow: "auto",
        },
        "-=1.5",
      );

      // Hide preloader when done
      tl.to(preloaderRef.value, {
        display: "none",        onComplete: () => {
          // Cleanup GSAP context to prevent memory leaks and release resources
          if (ctx) {
            ctx.kill();
            ctx.revert();
            ctx = undefined;
          }
          animationComplete.value = true;
          // Update store state so we won't show preloader on next visit
          store.updateIsPreloaderVisible(false);
        },
      });
    });
  };
  /**
   * Initialize preloader when component is mounted
   * Skip animation for returning visitors if configured
   * Handle resource loading and timing coordination
   */
  onMounted(() => {
    checkResourcesLoaded();

    // Skip animation for returning visitors if configured
    if (shouldSkipPreloader.value) {
      store.updateIsPreloaderVisible(false);
      animationComplete.value = true;
      return;
    }

    // For first-time visitors, wait for resources to be ready
    if (!shouldSkipPreloader.value) {
      // Ensure minimum display time
      const minTimePromise = new Promise((resolve) => setTimeout(resolve, minDisplayTime));

      // Wait for both resources and minimum time
      Promise.all([
        new Promise<void>((resolve) => {
          watch(
            resourcesReady,
            (ready) => {
              if (ready) resolve();
            },
            { immediate: true },
          );
        }),
        minTimePromise,
      ]).then(() => {
        runAnimation();
      });
    }
  });
  /**
   * Clean up resources when component is unmounted
   * Prevents memory leaks by properly disposing GSAP context
   */
  onBeforeUnmount(() => {
    if (ctx) {
      ctx.kill();
      ctx.revert();
      ctx = undefined;
    }
  });

  return {
    preloaderRef,
    textContainerRef,
    elementRefs,
    animationStarted,
    animationComplete,
    words,
    runAnimation,
  };
}
