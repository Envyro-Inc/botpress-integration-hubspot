import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputBlogAuthor } from '../models/BatchInputBlogAuthor';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseBlogAuthor } from '../models/BatchResponseBlogAuthor';
import { BatchResponseBlogAuthorWithErrors } from '../models/BatchResponseBlogAuthorWithErrors';
import { BlogAuthor } from '../models/BlogAuthor';
import { BlogAuthorCloneRequestVNext } from '../models/BlogAuthorCloneRequestVNext';
import { CollectionResponseWithTotalBlogAuthorForwardPaging } from '../models/CollectionResponseWithTotalBlogAuthorForwardPaging';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';
import { BlogAuthorsApiRequestFactory, BlogAuthorsApiResponseProcessor } from "../apis/BlogAuthorsApi";
export interface BlogAuthorsApiArchiveRequest {
    objectId: string;
    archived?: boolean;
}
export interface BlogAuthorsApiArchiveBatchRequest {
    batchInputString: BatchInputString;
}
export interface BlogAuthorsApiAttachToLangGroupRequest {
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext;
}
export interface BlogAuthorsApiCreateRequest {
    blogAuthor: BlogAuthor;
}
export interface BlogAuthorsApiCreateBatchRequest {
    batchInputBlogAuthor: BatchInputBlogAuthor;
}
export interface BlogAuthorsApiCreateLangVariationRequest {
    blogAuthorCloneRequestVNext: BlogAuthorCloneRequestVNext;
}
export interface BlogAuthorsApiDetachFromLangGroupRequest {
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext;
}
export interface BlogAuthorsApiGetByIdRequest {
    objectId: string;
    archived?: boolean;
    property?: string;
}
export interface BlogAuthorsApiGetPageRequest {
    createdAt?: Date;
    createdAfter?: Date;
    createdBefore?: Date;
    updatedAt?: Date;
    updatedAfter?: Date;
    updatedBefore?: Date;
    sort?: Array<string>;
    after?: string;
    limit?: number;
    archived?: boolean;
    property?: string;
}
export interface BlogAuthorsApiReadBatchRequest {
    batchInputString: BatchInputString;
    archived?: boolean;
}
export interface BlogAuthorsApiSetLangPrimaryRequest {
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext;
}
export interface BlogAuthorsApiUpdateRequest {
    objectId: string;
    blogAuthor: BlogAuthor;
    archived?: boolean;
}
export interface BlogAuthorsApiUpdateBatchRequest {
    batchInputJsonNode: BatchInputJsonNode;
    archived?: boolean;
}
export interface BlogAuthorsApiUpdateLangsRequest {
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext;
}
export declare class ObjectBlogAuthorsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BlogAuthorsApiRequestFactory, responseProcessor?: BlogAuthorsApiResponseProcessor);
    archiveWithHttpInfo(param: BlogAuthorsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: BlogAuthorsApiArchiveRequest, options?: Configuration): Promise<void>;
    archiveBatchWithHttpInfo(param: BlogAuthorsApiArchiveBatchRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archiveBatch(param: BlogAuthorsApiArchiveBatchRequest, options?: Configuration): Promise<void>;
    attachToLangGroupWithHttpInfo(param: BlogAuthorsApiAttachToLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>>;
    attachToLangGroup(param: BlogAuthorsApiAttachToLangGroupRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: BlogAuthorsApiCreateRequest, options?: Configuration): Promise<HttpInfo<BlogAuthor>>;
    create(param: BlogAuthorsApiCreateRequest, options?: Configuration): Promise<BlogAuthor>;
    createBatchWithHttpInfo(param: BlogAuthorsApiCreateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>>;
    createBatch(param: BlogAuthorsApiCreateBatchRequest, options?: Configuration): Promise<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>;
    createLangVariationWithHttpInfo(param: BlogAuthorsApiCreateLangVariationRequest, options?: Configuration): Promise<HttpInfo<BlogAuthor>>;
    createLangVariation(param: BlogAuthorsApiCreateLangVariationRequest, options?: Configuration): Promise<BlogAuthor>;
    detachFromLangGroupWithHttpInfo(param: BlogAuthorsApiDetachFromLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>>;
    detachFromLangGroup(param: BlogAuthorsApiDetachFromLangGroupRequest, options?: Configuration): Promise<void>;
    getByIdWithHttpInfo(param: BlogAuthorsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<BlogAuthor>>;
    getById(param: BlogAuthorsApiGetByIdRequest, options?: Configuration): Promise<BlogAuthor>;
    getPageWithHttpInfo(param?: BlogAuthorsApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalBlogAuthorForwardPaging>>;
    getPage(param?: BlogAuthorsApiGetPageRequest, options?: Configuration): Promise<CollectionResponseWithTotalBlogAuthorForwardPaging>;
    readBatchWithHttpInfo(param: BlogAuthorsApiReadBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>>;
    readBatch(param: BlogAuthorsApiReadBatchRequest, options?: Configuration): Promise<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>;
    setLangPrimaryWithHttpInfo(param: BlogAuthorsApiSetLangPrimaryRequest, options?: Configuration): Promise<HttpInfo<void>>;
    setLangPrimary(param: BlogAuthorsApiSetLangPrimaryRequest, options?: Configuration): Promise<void>;
    updateWithHttpInfo(param: BlogAuthorsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<BlogAuthor>>;
    update(param: BlogAuthorsApiUpdateRequest, options?: Configuration): Promise<BlogAuthor>;
    updateBatchWithHttpInfo(param: BlogAuthorsApiUpdateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>>;
    updateBatch(param: BlogAuthorsApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>;
    updateLangsWithHttpInfo(param: BlogAuthorsApiUpdateLangsRequest, options?: Configuration): Promise<HttpInfo<void>>;
    updateLangs(param: BlogAuthorsApiUpdateLangsRequest, options?: Configuration): Promise<void>;
}
