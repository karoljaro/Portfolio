const passiveSupported = (): boolean => {
  let supportsPassive: boolean = false;
  try {
    const options = Object.defineProperty({}, "passive", {
      get() {
        supportsPassive = true;
        return true;
      },
    });

    (window as EventTarget).addEventListener("testPassive", null , options);
    (window as EventTarget).removeEventListener("testPassive", null, options);
  } catch (e) {
    console.warn("Passive event listener not supported:", e);
  }

  return supportsPassive;
};

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    const passiveEvents = ["touchstart", "touchmove", "wheel", "mousewheel"];
    const supportsPassive = passiveSupported();

    EventTarget.prototype.addEventListener = function (
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions,
    ) {
      let modifiedOptions = options;

      if (passiveEvents.includes(type) && supportsPassive) {
        if (typeof options === "object") {
          modifiedOptions = {
            ...options,
            passive: options.passive !== false,
          };
        } else {
          modifiedOptions = {
            passive: true,
            capture: !!options,
          };
        }
      }

      return originalAddEventListener.call(this, type, listener, modifiedOptions);
    };
  }
});
