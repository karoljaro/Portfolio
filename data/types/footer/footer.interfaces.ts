import type { IConstantSocialLinksData } from "../shared/shared.interfaces";

// ===============[ CONST ]===============
export interface IConstantFooterData {
  firstName: string;
  surname: string;
  specialization: string;
  socialButtons: IConstantSocialLinksData[];
}

// ===============[ TRANSLATABLE ]===============
export interface ITranslatableCreditsData {
  creditTitle: string;
  creditsDescribe: string[];
}

export interface ITranslatableFooterData {
  footerSectionLabel: string;
  credits: ITranslatableCreditsData;
}

