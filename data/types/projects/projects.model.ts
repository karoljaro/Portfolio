import type { ModelStructure } from "../utils/model-structure.types";
import type { TransformStructured, Flatten } from "../utils/transform-properties.util";

import type { ITranslatableProjectData, IConstantProjectData, ITranslatableProjectSectionData } from "./projects.interfaces";

export type ProjectItemDataRaw = IConstantProjectData & ITranslatableProjectData;
type ProjectItemStructure = ModelStructure<IConstantProjectData, ITranslatableProjectData>;
type ProjectItemPreModel = Flatten<TransformStructured<ProjectItemStructure>>;

export type ProjectDataRaw = {
  projectSectionLabel: ITranslatableProjectSectionData["projectSectionLabel"];
  projects: ProjectItemDataRaw[];
};

export type ProjectDataModel = {
  projects: ProjectItemPreModel[];
} & Flatten<TransformStructured<ModelStructure<unknown, ITranslatableProjectSectionData>>>;