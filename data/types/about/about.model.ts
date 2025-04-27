import type { ModelStructure } from "../utils/model-structure.types";
import type { TransformStructured, Flatten } from "../utils/transform-properties.util";

import type { ITranslatableAboutData } from "./about.interfaces";

export type AboutDataRaw = ITranslatableAboutData;
type AboutDataStructure = ModelStructure<unknown, ITranslatableAboutData>;
export type AboutDataModel = Flatten<TransformStructured<AboutDataStructure>>;