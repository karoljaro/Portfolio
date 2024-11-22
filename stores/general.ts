import { defineStore } from 'pinia'

export const useGeneralStore = defineStore({
  id: 'generalStore',
  state: () => ({
    isPreloaderVisible: true,
    isMobile: false,
  }),
  actions: {
    updateIsPreloaderVisible(newValue: typeof this.isPreloaderVisible) {
      this.isPreloaderVisible = newValue;
    },
    updateIsMobile(newValue: typeof this.isMobile) {
      this.isMobile = newValue;
    }
  },
  persist: {
    storage: sessionStorage,
    pick: ['isPreloaderVisible', 'isMobile']
  },
})
