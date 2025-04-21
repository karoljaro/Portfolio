import { defineStore } from "pinia";
import technologies from "~/data/constant/technologies";

export const useHeroStore = defineStore("heroStore", {
  state: () => ({
    technologies: technologies,
  }),
  actions: {},
});
