import type { ModelStructure } from "../utils/model-structure.types";
import type { TransformStructured, Flatten } from "../utils/transform-properties.util";

import type { ITranslatableFooterData, IConstantFooterData } from "./footer.interfaces";

export type FooterDataRaw = ITranslatableFooterData & IConstantFooterData;
type FooterDataStructure = ModelStructure<IConstantFooterData, ITranslatableFooterData>;
export type FooterDataModel = Flatten<TransformStructured<FooterDataStructure>>;