import { defineStore } from 'pinia'
import workArea from '~/data/workArea'

export const useWorkSectionStore = defineStore("workSectionStore", {
  state: () => ({
    workSection_data: workArea, 
  }),
})
