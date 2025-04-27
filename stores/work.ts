import { defineStore } from "pinia";
import type { WorkDataRaw } from "~/data/types/app-data.model";
import workDataFromJson from "../data/locales/en/work.data.json" with { type: "json" };

export const useWorkStore = defineStore("workStore", {
  state: (): { data: WorkDataRaw } => ({
    data: JSON.parse(JSON.stringify(workDataFromJson)),
  }),
  getters: {
    workSectionLabel: (state): WorkDataRaw["workSectionLabel"] => state.data.workSectionLabel,
    workItems: (state): WorkDataRaw["workItems"] => state.data.workItems,
  },
  actions: {},
});