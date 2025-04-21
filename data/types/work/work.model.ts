import type { ModelStructure } from "../utils/model-structure.types";
import type { TransformStructured, Flatten } from "../utils/transform-properties.util";

import type { ITranslatableWorkData, IConstantWorkData } from "./work.interfaces";

type WorkStructure = ModelStructure<IConstantWorkData, ITranslatableWorkData>;
export type TransformedWorkData = Flatten<TransformStructured<WorkStructure>>;