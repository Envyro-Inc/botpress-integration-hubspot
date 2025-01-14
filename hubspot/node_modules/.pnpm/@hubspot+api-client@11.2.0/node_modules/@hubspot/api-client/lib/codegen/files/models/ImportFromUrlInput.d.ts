export declare class ImportFromUrlInput {
    'folderPath'?: string;
    'access': ImportFromUrlInputAccessEnum;
    'duplicateValidationScope'?: ImportFromUrlInputDuplicateValidationScopeEnum;
    'name'?: string;
    'duplicateValidationStrategy'?: ImportFromUrlInputDuplicateValidationStrategyEnum;
    'ttl'?: string;
    'overwrite'?: boolean;
    'url': string;
    'folderId'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export declare enum ImportFromUrlInputAccessEnum {
    PublicIndexable = "PUBLIC_INDEXABLE",
    PublicNotIndexable = "PUBLIC_NOT_INDEXABLE",
    HiddenIndexable = "HIDDEN_INDEXABLE",
    HiddenNotIndexable = "HIDDEN_NOT_INDEXABLE",
    HiddenPrivate = "HIDDEN_PRIVATE",
    Private = "PRIVATE"
}
export declare enum ImportFromUrlInputDuplicateValidationScopeEnum {
    EntirePortal = "ENTIRE_PORTAL",
    ExactFolder = "EXACT_FOLDER"
}
export declare enum ImportFromUrlInputDuplicateValidationStrategyEnum {
    None = "NONE",
    Reject = "REJECT",
    ReturnExisting = "RETURN_EXISTING"
}
