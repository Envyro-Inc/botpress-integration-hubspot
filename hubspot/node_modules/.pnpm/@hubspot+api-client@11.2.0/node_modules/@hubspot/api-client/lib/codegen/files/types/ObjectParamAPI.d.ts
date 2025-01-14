import { HttpFile, HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponseFile } from '../models/CollectionResponseFile';
import { CollectionResponseFolder } from '../models/CollectionResponseFolder';
import { FileActionResponse } from '../models/FileActionResponse';
import { FileStat } from '../models/FileStat';
import { FileUpdateInput } from '../models/FileUpdateInput';
import { Folder } from '../models/Folder';
import { FolderActionResponse } from '../models/FolderActionResponse';
import { FolderInput } from '../models/FolderInput';
import { FolderUpdateInput } from '../models/FolderUpdateInput';
import { FolderUpdateTaskLocator } from '../models/FolderUpdateTaskLocator';
import { ImportFromUrlInput } from '../models/ImportFromUrlInput';
import { ImportFromUrlTaskLocator } from '../models/ImportFromUrlTaskLocator';
import { SignedUrl } from '../models/SignedUrl';
import { FilesApiRequestFactory, FilesApiResponseProcessor } from "../apis/FilesApi";
export interface FilesApiArchiveRequest {
    fileId: string;
}
export interface FilesApiArchiveGDPRRequest {
    fileId: string;
}
export interface FilesApiCheckImportRequest {
    taskId: string;
}
export interface FilesApiDoSearchRequest {
    properties?: Array<string>;
    after?: string;
    before?: string;
    limit?: number;
    sort?: Array<string>;
    id?: string;
    createdAt?: Date;
    createdAtLte?: Date;
    createdAtGte?: Date;
    updatedAt?: Date;
    updatedAtLte?: Date;
    updatedAtGte?: Date;
    name?: string;
    path?: string;
    parentFolderId?: number;
    size?: number;
    height?: number;
    width?: number;
    encoding?: string;
    type?: string;
    extension?: string;
    url?: string;
    isUsableInContent?: boolean;
    allowsAnonymousAccess?: boolean;
}
export interface FilesApiGetByIdRequest {
    fileId: string;
    properties?: Array<string>;
}
export interface FilesApiGetMetadataRequest {
    path: string;
    properties?: Array<string>;
}
export interface FilesApiGetSignedUrlRequest {
    fileId: string;
    size?: 'thumb' | 'icon' | 'medium' | 'preview';
    expirationSeconds?: number;
    upscale?: boolean;
}
export interface FilesApiImportFromUrlRequest {
    importFromUrlInput: ImportFromUrlInput;
}
export interface FilesApiReplaceRequest {
    fileId: string;
    file?: HttpFile;
    charsetHunch?: string;
    options?: string;
}
export interface FilesApiUpdatePropertiesRequest {
    fileId: string;
    fileUpdateInput: FileUpdateInput;
}
export interface FilesApiUploadRequest {
    file?: HttpFile;
    folderId?: string;
    folderPath?: string;
    fileName?: string;
    charsetHunch?: string;
    options?: string;
}
export declare class ObjectFilesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FilesApiRequestFactory, responseProcessor?: FilesApiResponseProcessor);
    archiveWithHttpInfo(param: FilesApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: FilesApiArchiveRequest, options?: Configuration): Promise<void>;
    archiveGDPRWithHttpInfo(param: FilesApiArchiveGDPRRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archiveGDPR(param: FilesApiArchiveGDPRRequest, options?: Configuration): Promise<void>;
    checkImportWithHttpInfo(param: FilesApiCheckImportRequest, options?: Configuration): Promise<HttpInfo<FileActionResponse>>;
    checkImport(param: FilesApiCheckImportRequest, options?: Configuration): Promise<FileActionResponse>;
    doSearchWithHttpInfo(param?: FilesApiDoSearchRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseFile>>;
    doSearch(param?: FilesApiDoSearchRequest, options?: Configuration): Promise<CollectionResponseFile>;
    getByIdWithHttpInfo(param: FilesApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<any>>;
    getById(param: FilesApiGetByIdRequest, options?: Configuration): Promise<any>;
    getMetadataWithHttpInfo(param: FilesApiGetMetadataRequest, options?: Configuration): Promise<HttpInfo<FileStat>>;
    getMetadata(param: FilesApiGetMetadataRequest, options?: Configuration): Promise<FileStat>;
    getSignedUrlWithHttpInfo(param: FilesApiGetSignedUrlRequest, options?: Configuration): Promise<HttpInfo<SignedUrl>>;
    getSignedUrl(param: FilesApiGetSignedUrlRequest, options?: Configuration): Promise<SignedUrl>;
    importFromUrlWithHttpInfo(param: FilesApiImportFromUrlRequest, options?: Configuration): Promise<HttpInfo<ImportFromUrlTaskLocator>>;
    importFromUrl(param: FilesApiImportFromUrlRequest, options?: Configuration): Promise<ImportFromUrlTaskLocator>;
    replaceWithHttpInfo(param: FilesApiReplaceRequest, options?: Configuration): Promise<HttpInfo<any>>;
    replace(param: FilesApiReplaceRequest, options?: Configuration): Promise<any>;
    updatePropertiesWithHttpInfo(param: FilesApiUpdatePropertiesRequest, options?: Configuration): Promise<HttpInfo<any>>;
    updateProperties(param: FilesApiUpdatePropertiesRequest, options?: Configuration): Promise<any>;
    uploadWithHttpInfo(param?: FilesApiUploadRequest, options?: Configuration): Promise<HttpInfo<any>>;
    upload(param?: FilesApiUploadRequest, options?: Configuration): Promise<any>;
}
import { FoldersApiRequestFactory, FoldersApiResponseProcessor } from "../apis/FoldersApi";
export interface FoldersApiArchiveRequest {
    folderId: string;
}
export interface FoldersApiArchiveByPathRequest {
    folderPath: string;
}
export interface FoldersApiCheckUpdateStatusRequest {
    taskId: string;
}
export interface FoldersApiCreateRequest {
    folderInput: FolderInput;
}
export interface FoldersApiDoSearchRequest {
    properties?: Array<string>;
    after?: string;
    before?: string;
    limit?: number;
    sort?: Array<string>;
    id?: string;
    createdAt?: Date;
    createdAtLte?: Date;
    createdAtGte?: Date;
    updatedAt?: Date;
    updatedAtLte?: Date;
    updatedAtGte?: Date;
    name?: string;
    path?: string;
    parentFolderId?: number;
}
export interface FoldersApiGetByIdRequest {
    folderId: string;
    properties?: Array<string>;
}
export interface FoldersApiGetByPathRequest {
    folderPath: string;
    properties?: Array<string>;
}
export interface FoldersApiUpdatePropertiesRequest {
    folderUpdateInput: FolderUpdateInput;
}
export declare class ObjectFoldersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FoldersApiRequestFactory, responseProcessor?: FoldersApiResponseProcessor);
    archiveWithHttpInfo(param: FoldersApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: FoldersApiArchiveRequest, options?: Configuration): Promise<void>;
    archiveByPathWithHttpInfo(param: FoldersApiArchiveByPathRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archiveByPath(param: FoldersApiArchiveByPathRequest, options?: Configuration): Promise<void>;
    checkUpdateStatusWithHttpInfo(param: FoldersApiCheckUpdateStatusRequest, options?: Configuration): Promise<HttpInfo<FolderActionResponse>>;
    checkUpdateStatus(param: FoldersApiCheckUpdateStatusRequest, options?: Configuration): Promise<FolderActionResponse>;
    createWithHttpInfo(param: FoldersApiCreateRequest, options?: Configuration): Promise<HttpInfo<Folder>>;
    create(param: FoldersApiCreateRequest, options?: Configuration): Promise<Folder>;
    doSearchWithHttpInfo(param?: FoldersApiDoSearchRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseFolder>>;
    doSearch(param?: FoldersApiDoSearchRequest, options?: Configuration): Promise<CollectionResponseFolder>;
    getByIdWithHttpInfo(param: FoldersApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<Folder>>;
    getById(param: FoldersApiGetByIdRequest, options?: Configuration): Promise<Folder>;
    getByPathWithHttpInfo(param: FoldersApiGetByPathRequest, options?: Configuration): Promise<HttpInfo<Folder>>;
    getByPath(param: FoldersApiGetByPathRequest, options?: Configuration): Promise<Folder>;
    updatePropertiesWithHttpInfo(param: FoldersApiUpdatePropertiesRequest, options?: Configuration): Promise<HttpInfo<FolderUpdateTaskLocator>>;
    updateProperties(param: FoldersApiUpdatePropertiesRequest, options?: Configuration): Promise<FolderUpdateTaskLocator>;
}
