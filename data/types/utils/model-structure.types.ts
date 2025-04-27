export type ModelStructure<ConstantPart = unknown, TranslatablePart = unknown> = {
    constant: ConstantPart;
    translatable: TranslatablePart;
};
