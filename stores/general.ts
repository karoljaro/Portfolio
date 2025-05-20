import { defineStore } from 'pinia'

export const useGeneralStore = defineStore("generalStore", {
  state: (): {
    isPreloaderVisible: boolean;
    smScroll: ScrollSmoother | null;
  } => ({
    isPreloaderVisible: true,
    smScroll: null,
  }),
  actions: {
    updateIsPreloaderVisible(newValue: typeof this.isPreloaderVisible) {
      this.isPreloaderVisible = newValue;
    },

    setScrollSmoother(instance: typeof this.smScroll) {
      this.smScroll = instance;
    },
  },
  persist: {
    storage: sessionStorage,
    pick: ['isPreloaderVisible']
  }
})
