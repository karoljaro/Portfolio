import { defineStore } from 'pinia'

export const useGeneralStore = defineStore({
  id: 'generalStore',
  state: () => ({ isPreloaderVisible: true, }),
  actions: {
    updateIsPreloaderVisible(value: boolean) {
      this.isPreloaderVisible = value;
    }
  },
  persist: {
    storage: sessionStorage,
    pick: ['isPreloaderVisible']
  },
})