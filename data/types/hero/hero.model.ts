import type { ModelStructure } from "../utils/model-structure.types";
import type { TransformStructured, Flatten } from "../utils/transform-properties.util";

import type { ITranslatableHeroData, IConstantHeroData } from "./hero.interfaces";

type HeroStructure = ModelStructure<IConstantHeroData, ITranslatableHeroData>;
export type TransformedHeroData = Flatten<TransformStructured<HeroStructure>>;