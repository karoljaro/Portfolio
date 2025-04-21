import type { ModelStructure } from "../utils/model-structure.types";
import type { TransformStructured, Flatten } from "../utils/transform-properties.util";

import type { ITranslatableProjectData, IConstantProjectData } from "./projects.interfaces";

export type ProjectDataRaw = ITranslatableProjectData & IConstantProjectData;
type ProjectDataStructure = ModelStructure<IConstantProjectData, ITranslatableProjectData>;
export type ProjectDataModel = Flatten<TransformStructured<ProjectDataStructure>>;