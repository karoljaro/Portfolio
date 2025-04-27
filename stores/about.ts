import { defineStore } from "pinia";
import aboutDataFromJson from "../data/locales/en/about.data.json" with { type: "json" };
import type { AboutDataRaw } from "~/data/types/app-data.model";

export const useAboutStore = defineStore("aboutStore", {
  state: (): { data: AboutDataRaw } => ({
    data: JSON.parse(JSON.stringify(aboutDataFromJson)),
  }),
  getters: {
    aboutSectionLabel: (state): AboutDataRaw["aboutSectionLabel"] => state.data.aboutSectionLabel,
    description: (state): AboutDataRaw["description"] => state.data.description,
  },
  actions: {},
});
