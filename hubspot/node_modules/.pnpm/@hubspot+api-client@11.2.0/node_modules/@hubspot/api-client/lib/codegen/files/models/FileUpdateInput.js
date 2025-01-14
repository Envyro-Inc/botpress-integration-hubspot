"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdateInputAccessEnum = exports.FileUpdateInput = void 0;
class FileUpdateInput {
    static getAttributeTypeMap() {
        return FileUpdateInput.attributeTypeMap;
    }
    constructor() {
    }
}
exports.FileUpdateInput = FileUpdateInput;
FileUpdateInput.discriminator = undefined;
FileUpdateInput.attributeTypeMap = [
    {
        "name": "access",
        "baseName": "access",
        "type": "FileUpdateInputAccessEnum",
        "format": ""
    },
    {
        "name": "parentFolderId",
        "baseName": "parentFolderId",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "parentFolderPath",
        "baseName": "parentFolderPath",
        "type": "string",
        "format": ""
    },
    {
        "name": "isUsableInContent",
        "baseName": "isUsableInContent",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "expiresAt",
        "baseName": "expiresAt",
        "type": "number",
        "format": "int64"
    }
];
var FileUpdateInputAccessEnum;
(function (FileUpdateInputAccessEnum) {
    FileUpdateInputAccessEnum["PublicIndexable"] = "PUBLIC_INDEXABLE";
    FileUpdateInputAccessEnum["PublicNotIndexable"] = "PUBLIC_NOT_INDEXABLE";
    FileUpdateInputAccessEnum["HiddenIndexable"] = "HIDDEN_INDEXABLE";
    FileUpdateInputAccessEnum["HiddenNotIndexable"] = "HIDDEN_NOT_INDEXABLE";
    FileUpdateInputAccessEnum["HiddenPrivate"] = "HIDDEN_PRIVATE";
    FileUpdateInputAccessEnum["Private"] = "PRIVATE";
})(FileUpdateInputAccessEnum = exports.FileUpdateInputAccessEnum || (exports.FileUpdateInputAccessEnum = {}));
//# sourceMappingURL=FileUpdateInput.js.map