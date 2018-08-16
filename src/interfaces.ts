export interface IRasaNLUData {
    common_examples: ICommonExample[];
    regex_features: IRegexFeature[];
    entity_synonyms: IEntitySynonyms[];
}

export interface IRasaNLUDataResult {
    status: number;
    message: string;
    data?: IRasaNLUData;
}

export interface ICommonExample {
    text: string;
    intent: string;
    entities: IEntity[];
}

export interface ICommonExamplesResult {
    status: number;
    message: string;
    data?: ICommonExample[];
}

export interface IEntity {
    start: number;
    end: number;
    value: string;
    entity: string;
}

export interface IRegexFeature {
    name: string;
    pattern: string;
}

export interface IEntitySynonyms {
    value: string;
    synonyms: string[];
}
