import { defineStore } from "pinia";
import FooterDataFromJson from "../data/locales/en/footer.data.json" with { type: "json" };
import type { FooterDataRaw } from "~/data/types/footer/footer.model";

export const useFooterStore = defineStore("footerStore", {
  state: (): { data: FooterDataRaw } => ({
    data: JSON.parse(JSON.stringify(FooterDataFromJson)),
  }),
  getters: {
    footerSectionLabel: (state): FooterDataRaw["footerSectionLabel"] => state.data.footerSectionLabel,
    firstName: (state): FooterDataRaw["firstName"] => state.data.firstName,
    surname: (state): FooterDataRaw["surname"] => state.data.surname,
    specialization: (state): FooterDataRaw["specialization"] => state.data.specialization,
    socialButtons: (state): FooterDataRaw["socialButtons"] => state.data.socialButtons,
    credits: (state): FooterDataRaw["credits"] => state.data.credits,
  },
  actions: {},
});
