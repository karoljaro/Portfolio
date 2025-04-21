import type { IConstantSocialLinksData } from "./shared.interfaces";

// ===============[ CONST ]===============
export interface IConstantTechnologyData {
  name: string;
  url: string | URL;
}

export interface IConstantHeroData {
  primaryHeading: string;
  secondaryHeading: string;
  technologiesList: IConstantTechnologyData[];
  socialButtons: IConstantSocialLinksData[]
}

// ===============[ TRANSLATABLE ]===============
export interface ITranslatableHeroData {
  introduction: string;
  goalsDescription: string;
  projectButtonLabel: string;
}

// ===============[ MERGED ]===============
export interface IHeroData extends IConstantHeroData, ITranslatableHeroData {}