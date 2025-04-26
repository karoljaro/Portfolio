import { defineStore } from "pinia";
import projectsDataFromJson from "../data/locales/en/projects.data.json" with { type: "json" };
import type { ProjectDataRaw } from "~/data/types/app-data.model";

export const useProjectsStore = defineStore("projectsStore", {
  state: (): { data: ProjectDataRaw } => ({
    data: JSON.parse(JSON.stringify(projectsDataFromJson)),
  }),
  getters: {
    projectsSectionLabel: (state): ProjectDataRaw["projectSectionLabel"] => state.data.projectSectionLabel,
    projects: (state): ProjectDataRaw["projects"] => state.data.projects,
  },
  actions: {},
});
  