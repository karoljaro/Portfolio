import type { ModelStructure } from "./model-structure.types";

export type TransformStructured<T extends ModelStructure<unknown, unknown>> = {
    [Key in keyof T["constant"]]: {
        value: T["constant"][Key];
        translatable: false;
    }
} & {
    [Key in keyof T["translatable"]]: {
        value: T["translatable"][Key];
        translatable: true;
    }
}

export type Flatten<T> = {
    [Key in keyof T]: T[Key];
}