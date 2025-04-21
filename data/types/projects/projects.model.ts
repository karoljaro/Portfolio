import type { ModelStructure } from "../utils/model-structure.types";
import type { TransformStructured, Flatten } from "../utils/transform-properties.util";

import type { ITranslatableProjectData, IConstantProjectData } from "./projects.interfaces";

type ProjectStructure = ModelStructure<IConstantProjectData, ITranslatableProjectData>;
export type TransformedProjectData = Flatten<TransformStructured<ProjectStructure>>;