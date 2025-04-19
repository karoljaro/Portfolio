import type { IconName } from "~/shared/types/iconsNamesUnion";

export interface WorkArea_DATA {
   title: string;
   icon: `static_Lucide:${IconName}`;
   description: string;
}

export default <WorkArea_DATA[]>[
   {
      title: "Web Dev",
      icon: "static_Lucide:braces",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt accusamus nemo omnis expedita, hic amet odit aliquam nihil aliquid repudiandae illo veniam dicta corporis impedit, cupiditate cumque nostrum! Nemo, consequatur?",
   },
   {
      title: "Rest Api",
      icon: "static_Lucide:database",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt accusamus nemo omnis expedita, hic amet odit aliquam nihil aliquid repudiandae illo veniam dicta corporis impedit, cupiditate cumque nostrum! Nemo, consequatur?",
   },
   {
      title: "DevOps",
      icon: "static_Lucide:workflow",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt accusamus nemo omnis expedita, hic amet odit aliquam nihil aliquid repudiandae illo veniam dicta corporis impedit, cupiditate cumque nostrum! Nemo, consequatur?",
   },
];
