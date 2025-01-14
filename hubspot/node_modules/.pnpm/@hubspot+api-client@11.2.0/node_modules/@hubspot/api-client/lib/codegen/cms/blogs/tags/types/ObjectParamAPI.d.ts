import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchInputTag } from '../models/BatchInputTag';
import { BatchResponseTag } from '../models/BatchResponseTag';
import { BatchResponseTagWithErrors } from '../models/BatchResponseTagWithErrors';
import { CollectionResponseWithTotalTagForwardPaging } from '../models/CollectionResponseWithTotalTagForwardPaging';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { Tag } from '../models/Tag';
import { TagCloneRequestVNext } from '../models/TagCloneRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';
import { BlogTagsApiRequestFactory, BlogTagsApiResponseProcessor } from "../apis/BlogTagsApi";
export interface BlogTagsApiArchiveRequest {
    objectId: string;
    archived?: boolean;
}
export interface BlogTagsApiArchiveBatchRequest {
    batchInputString: BatchInputString;
}
export interface BlogTagsApiAttachToLangGroupRequest {
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext;
}
export interface BlogTagsApiCreateRequest {
    tag: Tag;
}
export interface BlogTagsApiCreateBatchRequest {
    batchInputTag: BatchInputTag;
}
export interface BlogTagsApiCreateLangVariationRequest {
    tagCloneRequestVNext: TagCloneRequestVNext;
}
export interface BlogTagsApiDetachFromLangGroupRequest {
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext;
}
export interface BlogTagsApiGetByIdRequest {
    objectId: string;
    archived?: boolean;
    property?: string;
}
export interface BlogTagsApiGetPageRequest {
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
export interface BlogTagsApiReadBatchRequest {
    batchInputString: BatchInputString;
    archived?: boolean;
}
export interface BlogTagsApiSetLangPrimaryRequest {
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext;
}
export interface BlogTagsApiUpdateRequest {
    objectId: string;
    tag: Tag;
    archived?: boolean;
}
export interface BlogTagsApiUpdateBatchRequest {
    batchInputJsonNode: BatchInputJsonNode;
    archived?: boolean;
}
export interface BlogTagsApiUpdateLangsRequest {
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext;
}
export declare class ObjectBlogTagsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BlogTagsApiRequestFactory, responseProcessor?: BlogTagsApiResponseProcessor);
    archiveWithHttpInfo(param: BlogTagsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: BlogTagsApiArchiveRequest, options?: Configuration): Promise<void>;
    archiveBatchWithHttpInfo(param: BlogTagsApiArchiveBatchRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archiveBatch(param: BlogTagsApiArchiveBatchRequest, options?: Configuration): Promise<void>;
    attachToLangGroupWithHttpInfo(param: BlogTagsApiAttachToLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>>;
    attachToLangGroup(param: BlogTagsApiAttachToLangGroupRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: BlogTagsApiCreateRequest, options?: Configuration): Promise<HttpInfo<Tag>>;
    create(param: BlogTagsApiCreateRequest, options?: Configuration): Promise<Tag>;
    createBatchWithHttpInfo(param: BlogTagsApiCreateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>>;
    createBatch(param: BlogTagsApiCreateBatchRequest, options?: Configuration): Promise<BatchResponseTag | BatchResponseTagWithErrors>;
    createLangVariationWithHttpInfo(param: BlogTagsApiCreateLangVariationRequest, options?: Configuration): Promise<HttpInfo<Tag>>;
    createLangVariation(param: BlogTagsApiCreateLangVariationRequest, options?: Configuration): Promise<Tag>;
    detachFromLangGroupWithHttpInfo(param: BlogTagsApiDetachFromLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>>;
    detachFromLangGroup(param: BlogTagsApiDetachFromLangGroupRequest, options?: Configuration): Promise<void>;
    getByIdWithHttpInfo(param: BlogTagsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<Tag>>;
    getById(param: BlogTagsApiGetByIdRequest, options?: Configuration): Promise<Tag>;
    getPageWithHttpInfo(param?: BlogTagsApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalTagForwardPaging>>;
    getPage(param?: BlogTagsApiGetPageRequest, options?: Configuration): Promise<CollectionResponseWithTotalTagForwardPaging>;
    readBatchWithHttpInfo(param: BlogTagsApiReadBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>>;
    readBatch(param: BlogTagsApiReadBatchRequest, options?: Configuration): Promise<BatchResponseTag | BatchResponseTagWithErrors>;
    setLangPrimaryWithHttpInfo(param: BlogTagsApiSetLangPrimaryRequest, options?: Configuration): Promise<HttpInfo<void>>;
    setLangPrimary(param: BlogTagsApiSetLangPrimaryRequest, options?: Configuration): Promise<void>;
    updateWithHttpInfo(param: BlogTagsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<Tag>>;
    update(param: BlogTagsApiUpdateRequest, options?: Configuration): Promise<Tag>;
    updateBatchWithHttpInfo(param: BlogTagsApiUpdateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>>;
    updateBatch(param: BlogTagsApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseTag | BatchResponseTagWithErrors>;
    updateLangsWithHttpInfo(param: BlogTagsApiUpdateLangsRequest, options?: Configuration): Promise<HttpInfo<void>>;
    updateLangs(param: BlogTagsApiUpdateLangsRequest, options?: Configuration): Promise<void>;
}
