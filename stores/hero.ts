import { defineStore } from "pinia";
import heroDataFromJson from "../data/locales/en/hero.data.json" with { type: 'json' };
import type { HeroDataRaw } from "~/data/types/app-data.model";

export const useHeroStore = defineStore("heroStore", {
  state: (): { data: HeroDataRaw } => ({
    data: JSON.parse(JSON.stringify(heroDataFromJson)),
  }),
  getters: {
    primaryHeading: (state): HeroDataRaw['primaryHeading'] => state.data.primaryHeading,
    secondaryHeading: (state): HeroDataRaw['secondaryHeading'] => state.data.secondaryHeading,
    technologiesList: (state): HeroDataRaw['technologiesList'] => state.data.technologiesList,
    socialButtons: (state): HeroDataRaw['socialButtons'] => state.data.socialButtons,
    introduction: (state): HeroDataRaw['introduction'] => state.data.introduction,
    goalsDescription: (state): HeroDataRaw['goalsDescription'] => state.data.goalsDescription,
    projectButtonLabel: (state): HeroDataRaw['projectButtonLabel'] => state.data.projectButtonLabel,
  },
  actions: {}
});
