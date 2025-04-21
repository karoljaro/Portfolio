// ===============[ CONST ]===============
export interface IConstantWorkData {
    title: string;
    icon: string;
}

// ===============[ TRANSLATABLE ]===============
export interface ITranslatableWorkData {
    description: string;
}

// ===============[ MERGED ]===============
export interface IWorkData extends IConstantWorkData, ITranslatableWorkData {}