import { defineStore } from 'pinia'

export const useGeneralStore = defineStore("generalStore", {
  state: () => ({
    isPreloaderVisible: true,
  }),
  actions: {
    updateIsPreloaderVisible(newValue: typeof this.isPreloaderVisible) {
      this.isPreloaderVisible = newValue;
    },
  },
  persist: {
    storage: sessionStorage,
    pick: ['isPreloaderVisible']
  }
})
