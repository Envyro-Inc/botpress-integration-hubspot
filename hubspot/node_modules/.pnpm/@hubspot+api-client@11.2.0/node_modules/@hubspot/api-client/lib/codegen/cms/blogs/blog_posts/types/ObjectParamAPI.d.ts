import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputBlogPost } from '../models/BatchInputBlogPost';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseBlogPost } from '../models/BatchResponseBlogPost';
import { BatchResponseBlogPostWithErrors } from '../models/BatchResponseBlogPostWithErrors';
import { BlogPost } from '../models/BlogPost';
import { BlogPostLanguageCloneRequestVNext } from '../models/BlogPostLanguageCloneRequestVNext';
import { CollectionResponseWithTotalBlogPostForwardPaging } from '../models/CollectionResponseWithTotalBlogPostForwardPaging';
import { CollectionResponseWithTotalVersionBlogPost } from '../models/CollectionResponseWithTotalVersionBlogPost';
import { ContentCloneRequestVNext } from '../models/ContentCloneRequestVNext';
import { ContentScheduleRequestVNext } from '../models/ContentScheduleRequestVNext';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';
import { VersionBlogPost } from '../models/VersionBlogPost';
import { BlogPostsApiRequestFactory, BlogPostsApiResponseProcessor } from "../apis/BlogPostsApi";
export interface BlogPostsApiArchiveRequest {
    objectId: string;
    archived?: boolean;
}
export interface BlogPostsApiArchiveBatchRequest {
    batchInputString: BatchInputString;
}
export interface BlogPostsApiAttachToLangGroupRequest {
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext;
}
export interface BlogPostsApiCloneRequest {
    contentCloneRequestVNext: ContentCloneRequestVNext;
}
export interface BlogPostsApiCreateRequest {
    blogPost: BlogPost;
}
export interface BlogPostsApiCreateBatchRequest {
    batchInputBlogPost: BatchInputBlogPost;
}
export interface BlogPostsApiCreateLangVariationRequest {
    blogPostLanguageCloneRequestVNext: BlogPostLanguageCloneRequestVNext;
}
export interface BlogPostsApiDetachFromLangGroupRequest {
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext;
}
export interface BlogPostsApiGetByIdRequest {
    objectId: string;
    archived?: boolean;
    property?: string;
}
export interface BlogPostsApiGetDraftByIdRequest {
    objectId: string;
}
export interface BlogPostsApiGetPageRequest {
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
export interface BlogPostsApiGetPreviousVersionRequest {
    objectId: string;
    revisionId: string;
}
export interface BlogPostsApiGetPreviousVersionsRequest {
    objectId: string;
    after?: string;
    before?: string;
    limit?: number;
}
export interface BlogPostsApiPushLiveRequest {
    objectId: string;
}
export interface BlogPostsApiReadBatchRequest {
    batchInputString: BatchInputString;
    archived?: boolean;
}
export interface BlogPostsApiResetDraftRequest {
    objectId: string;
}
export interface BlogPostsApiRestorePreviousVersionRequest {
    objectId: string;
    revisionId: string;
}
export interface BlogPostsApiRestorePreviousVersionToDraftRequest {
    objectId: string;
    revisionId: number;
}
export interface BlogPostsApiScheduleRequest {
    contentScheduleRequestVNext: ContentScheduleRequestVNext;
}
export interface BlogPostsApiSetLangPrimaryRequest {
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext;
}
export interface BlogPostsApiUpdateRequest {
    objectId: string;
    blogPost: BlogPost;
    archived?: boolean;
}
export interface BlogPostsApiUpdateBatchRequest {
    batchInputJsonNode: BatchInputJsonNode;
    archived?: boolean;
}
export interface BlogPostsApiUpdateDraftRequest {
    objectId: string;
    blogPost: BlogPost;
}
export interface BlogPostsApiUpdateLangsRequest {
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext;
}
export declare class ObjectBlogPostsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BlogPostsApiRequestFactory, responseProcessor?: BlogPostsApiResponseProcessor);
    archiveWithHttpInfo(param: BlogPostsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: BlogPostsApiArchiveRequest, options?: Configuration): Promise<void>;
    archiveBatchWithHttpInfo(param: BlogPostsApiArchiveBatchRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archiveBatch(param: BlogPostsApiArchiveBatchRequest, options?: Configuration): Promise<void>;
    attachToLangGroupWithHttpInfo(param: BlogPostsApiAttachToLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>>;
    attachToLangGroup(param: BlogPostsApiAttachToLangGroupRequest, options?: Configuration): Promise<void>;
    cloneWithHttpInfo(param: BlogPostsApiCloneRequest, options?: Configuration): Promise<HttpInfo<BlogPost>>;
    clone(param: BlogPostsApiCloneRequest, options?: Configuration): Promise<BlogPost>;
    createWithHttpInfo(param: BlogPostsApiCreateRequest, options?: Configuration): Promise<HttpInfo<BlogPost>>;
    create(param: BlogPostsApiCreateRequest, options?: Configuration): Promise<BlogPost>;
    createBatchWithHttpInfo(param: BlogPostsApiCreateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>>;
    createBatch(param: BlogPostsApiCreateBatchRequest, options?: Configuration): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>;
    createLangVariationWithHttpInfo(param: BlogPostsApiCreateLangVariationRequest, options?: Configuration): Promise<HttpInfo<BlogPost>>;
    createLangVariation(param: BlogPostsApiCreateLangVariationRequest, options?: Configuration): Promise<BlogPost>;
    detachFromLangGroupWithHttpInfo(param: BlogPostsApiDetachFromLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>>;
    detachFromLangGroup(param: BlogPostsApiDetachFromLangGroupRequest, options?: Configuration): Promise<void>;
    getByIdWithHttpInfo(param: BlogPostsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<BlogPost>>;
    getById(param: BlogPostsApiGetByIdRequest, options?: Configuration): Promise<BlogPost>;
    getDraftByIdWithHttpInfo(param: BlogPostsApiGetDraftByIdRequest, options?: Configuration): Promise<HttpInfo<BlogPost>>;
    getDraftById(param: BlogPostsApiGetDraftByIdRequest, options?: Configuration): Promise<BlogPost>;
    getPageWithHttpInfo(param?: BlogPostsApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalBlogPostForwardPaging>>;
    getPage(param?: BlogPostsApiGetPageRequest, options?: Configuration): Promise<CollectionResponseWithTotalBlogPostForwardPaging>;
    getPreviousVersionWithHttpInfo(param: BlogPostsApiGetPreviousVersionRequest, options?: Configuration): Promise<HttpInfo<VersionBlogPost>>;
    getPreviousVersion(param: BlogPostsApiGetPreviousVersionRequest, options?: Configuration): Promise<VersionBlogPost>;
    getPreviousVersionsWithHttpInfo(param: BlogPostsApiGetPreviousVersionsRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalVersionBlogPost>>;
    getPreviousVersions(param: BlogPostsApiGetPreviousVersionsRequest, options?: Configuration): Promise<CollectionResponseWithTotalVersionBlogPost>;
    pushLiveWithHttpInfo(param: BlogPostsApiPushLiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    pushLive(param: BlogPostsApiPushLiveRequest, options?: Configuration): Promise<void>;
    readBatchWithHttpInfo(param: BlogPostsApiReadBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>>;
    readBatch(param: BlogPostsApiReadBatchRequest, options?: Configuration): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>;
    resetDraftWithHttpInfo(param: BlogPostsApiResetDraftRequest, options?: Configuration): Promise<HttpInfo<void>>;
    resetDraft(param: BlogPostsApiResetDraftRequest, options?: Configuration): Promise<void>;
    restorePreviousVersionWithHttpInfo(param: BlogPostsApiRestorePreviousVersionRequest, options?: Configuration): Promise<HttpInfo<BlogPost>>;
    restorePreviousVersion(param: BlogPostsApiRestorePreviousVersionRequest, options?: Configuration): Promise<BlogPost>;
    restorePreviousVersionToDraftWithHttpInfo(param: BlogPostsApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<HttpInfo<BlogPost>>;
    restorePreviousVersionToDraft(param: BlogPostsApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<BlogPost>;
    scheduleWithHttpInfo(param: BlogPostsApiScheduleRequest, options?: Configuration): Promise<HttpInfo<void>>;
    schedule(param: BlogPostsApiScheduleRequest, options?: Configuration): Promise<void>;
    setLangPrimaryWithHttpInfo(param: BlogPostsApiSetLangPrimaryRequest, options?: Configuration): Promise<HttpInfo<void>>;
    setLangPrimary(param: BlogPostsApiSetLangPrimaryRequest, options?: Configuration): Promise<void>;
    updateWithHttpInfo(param: BlogPostsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<BlogPost>>;
    update(param: BlogPostsApiUpdateRequest, options?: Configuration): Promise<BlogPost>;
    updateBatchWithHttpInfo(param: BlogPostsApiUpdateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>>;
    updateBatch(param: BlogPostsApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>;
    updateDraftWithHttpInfo(param: BlogPostsApiUpdateDraftRequest, options?: Configuration): Promise<HttpInfo<BlogPost>>;
    updateDraft(param: BlogPostsApiUpdateDraftRequest, options?: Configuration): Promise<BlogPost>;
    updateLangsWithHttpInfo(param: BlogPostsApiUpdateLangsRequest, options?: Configuration): Promise<HttpInfo<void>>;
    updateLangs(param: BlogPostsApiUpdateLangsRequest, options?: Configuration): Promise<void>;
}
