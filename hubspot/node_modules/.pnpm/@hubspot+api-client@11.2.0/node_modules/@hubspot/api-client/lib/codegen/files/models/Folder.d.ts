export declare class Folder {
    'createdAt': Date;
    'archivedAt'?: Date;
    'archived': boolean;
    'path'?: string;
    'parentFolderId'?: string;
    'name'?: string;
    'id': string;
    'updatedAt': Date;
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
