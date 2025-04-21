import type { ModelStructure } from "../utils/model-structure.types";
import type { TransformStructured, Flatten } from "../utils/transform-properties.util";

import type { ITranslatableWorkData, IConstantWorkData } from "./work.interfaces";

export type WorkDataRaw = ITranslatableWorkData & IConstantWorkData;
type WorkDataStructure = ModelStructure<IConstantWorkData, ITranslatableWorkData>;
export type WorkDataModel = Flatten<TransformStructured<WorkDataStructure>>;