import type { ModelStructure } from "../utils/model-structure.types";
import type { TransformStructured, Flatten } from "../utils/transform-properties.util";

import type { ITranslatableAboutData } from "./about.interfaces";

type AboutStructure = ModelStructure<unknown, ITranslatableAboutData>;
export type TransformedAboutData = Flatten<TransformStructured<AboutStructure>>;