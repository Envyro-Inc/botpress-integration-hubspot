export declare class LabelsBetweenObjectPair {
    'fromObjectTypeId': string;
    'toObjectId': string;
    'toObjectTypeId': string;
    'fromObjectId': string;
    'labels': Array<string>;
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
