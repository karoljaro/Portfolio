// ===============[ CONST ]===============
export interface IConstantProjectLinkData {
    name: string;
    url: string | URL;
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

