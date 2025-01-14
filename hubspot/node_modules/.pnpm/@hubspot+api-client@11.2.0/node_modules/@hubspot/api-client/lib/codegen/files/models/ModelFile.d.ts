export declare class ModelFile {
    'extension'?: string;
    'access': ModelFileAccessEnum;
    'parentFolderId'?: string;
    'encoding'?: string;
    'type'?: string;
    'isUsableInContent'?: boolean;
    'url'?: string;
    'expiresAt'?: number;
    'createdAt': Date;
    'archivedAt'?: Date;
    'archived': boolean;
    'path'?: string;
    'size'?: number;
    'name'?: string;
    'width'?: number;
    'id': string;
    'defaultHostingUrl'?: string;
    'updatedAt': Date;
    'height'?: number;
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
export declare enum ModelFileAccessEnum {
    PublicIndexable = "PUBLIC_INDEXABLE",
    PublicNotIndexable = "PUBLIC_NOT_INDEXABLE",
    HiddenIndexable = "HIDDEN_INDEXABLE",
    HiddenNotIndexable = "HIDDEN_NOT_INDEXABLE",
    HiddenPrivate = "HIDDEN_PRIVATE",
    Private = "PRIVATE"
}
