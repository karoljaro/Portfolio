import type { ModelStructure } from "../utils/model-structure.types";
import type { TransformStructured, Flatten } from "../utils/transform-properties.util";

import type { ITranslatableHeroData, IConstantHeroData } from "./hero.interfaces";

export type HeroDataRaw = ITranslatableHeroData & IConstantHeroData;
type HeroDataStructure = ModelStructure<IConstantHeroData, ITranslatableHeroData>;
export type HeroDataModel = Flatten<TransformStructured<HeroDataStructure>>;