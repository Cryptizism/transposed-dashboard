export enum DataType {
    NULL = "NULL",
    INTEGER = "INTEGER",
    REAL = "REAL",
    TEXT = "TEXT",
    BLOB = "BLOB"
}

export enum Key{
    PRIMARY = "PRIMARY KEY",
    AUTOINCREMENT = "AUTOINCREMENT"
}

export interface Field {
    name: string;
    type: DataType;
    key?: Key[];
}

export interface Entry {
    fields: Field[];
    values: any[];
}