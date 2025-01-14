export declare class SignedUrl {
    'extension': string;
    'size': number;
    'name': string;
    'width'?: number;
    'type': string;
    'expiresAt': Date;
    'url': string;
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
