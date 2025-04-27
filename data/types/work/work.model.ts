import type { ModelStructure } from "../utils/model-structure.types";
import type { TransformStructured, Flatten } from "../utils/transform-properties.util";

import type { ITranslatableWorkData, IConstantWorkData, ITranslatableWorkSectionData } from "./work.interfaces";

export type WorkItemDataRaw = ITranslatableWorkData & IConstantWorkData;
type WorkItemStructure = ModelStructure<IConstantWorkData, ITranslatableWorkData>;
type WorkItemDataModel = Flatten<TransformStructured<WorkItemStructure>>;

export type WorkDataRaw = {
  workSectionLabel: ITranslatableWorkSectionData["workSectionLabel"];
  workItems: WorkItemDataRaw[];
};

export type WorkDataModel = {
  workSectionLabel: Flatten<TransformStructured<ModelStructure<unknown, ITranslatableWorkSectionData>>>["workSectionLabel"];
  workItems: WorkItemDataModel[];
};