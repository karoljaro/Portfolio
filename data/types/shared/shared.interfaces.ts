import type { IconName } from "shared/__types__/iconsNamesUnion.generated";

export interface IConstantSocialLinksData {
  name: string;
  icon: `static_Lucide:${IconName}`;
  url: string | URL;
}
