// ===============[ CONST ]===============
export interface IConstantProjectLinkData {
    name: "GitHub" | "Demo" | "Live";
    url: string;
}

export interface IConstantProjectData {
    id: string;
    title: string;
    usedTechnologies: string[];
    projectLinks: IConstantProjectLinkData[];
}

// ===============[ TRANSLATABLE ]===============

export interface ITranslatableProjectData {
    description: string;
}

export interface ITranslatableProjectSectionData {
    projectSectionLabel: string;
}