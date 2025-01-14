import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { AbTestCreateRequestVNext } from '../models/AbTestCreateRequestVNext';
import { AbTestEndRequestVNext } from '../models/AbTestEndRequestVNext';
import { AbTestRerunRequestVNext } from '../models/AbTestRerunRequestVNext';
import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputContentFolder } from '../models/BatchInputContentFolder';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputPage } from '../models/BatchInputPage';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseContentFolder } from '../models/BatchResponseContentFolder';
import { BatchResponseContentFolderWithErrors } from '../models/BatchResponseContentFolderWithErrors';
import { BatchResponsePage } from '../models/BatchResponsePage';
import { BatchResponsePageWithErrors } from '../models/BatchResponsePageWithErrors';
import { CollectionResponseWithTotalContentFolderForwardPaging } from '../models/CollectionResponseWithTotalContentFolderForwardPaging';
import { CollectionResponseWithTotalPageForwardPaging } from '../models/CollectionResponseWithTotalPageForwardPaging';
import { CollectionResponseWithTotalVersionContentFolder } from '../models/CollectionResponseWithTotalVersionContentFolder';
import { CollectionResponseWithTotalVersionPage } from '../models/CollectionResponseWithTotalVersionPage';
import { ContentCloneRequestVNext } from '../models/ContentCloneRequestVNext';
import { ContentFolder } from '../models/ContentFolder';
import { ContentLanguageCloneRequestVNext } from '../models/ContentLanguageCloneRequestVNext';
import { ContentScheduleRequestVNext } from '../models/ContentScheduleRequestVNext';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { Page } from '../models/Page';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';
import { VersionContentFolder } from '../models/VersionContentFolder';
import { VersionPage } from '../models/VersionPage';
import { LandingPagesApiRequestFactory, LandingPagesApiResponseProcessor } from "../apis/LandingPagesApi";
export interface LandingPagesApiArchiveRequest {
    objectId: string;
    archived?: boolean;
}
export interface LandingPagesApiArchiveBatchRequest {
    batchInputString: BatchInputString;
}
export interface LandingPagesApiArchiveFolderRequest {
    objectId: string;
    archived?: boolean;
}
export interface LandingPagesApiArchiveFoldersRequest {
    batchInputString: BatchInputString;
}
export interface LandingPagesApiAttachToLangGroupRequest {
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext;
}
export interface LandingPagesApiCloneRequest {
    contentCloneRequestVNext: ContentCloneRequestVNext;
}
export interface LandingPagesApiCreateRequest {
    page: Page;
}
export interface LandingPagesApiCreateABTestVariationRequest {
    abTestCreateRequestVNext: AbTestCreateRequestVNext;
}
export interface LandingPagesApiCreateBatchRequest {
    batchInputPage: BatchInputPage;
}
export interface LandingPagesApiCreateFolderRequest {
    contentFolder: ContentFolder;
}
export interface LandingPagesApiCreateFoldersRequest {
    batchInputContentFolder: BatchInputContentFolder;
}
export interface LandingPagesApiCreateLangVariationRequest {
    contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext;
}
export interface LandingPagesApiDetachFromLangGroupRequest {
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext;
}
export interface LandingPagesApiEndActiveABTestRequest {
    abTestEndRequestVNext: AbTestEndRequestVNext;
}
export interface LandingPagesApiGetByIdRequest {
    objectId: string;
    archived?: boolean;
    property?: string;
}
export interface LandingPagesApiGetDraftByIdRequest {
    objectId: string;
}
export interface LandingPagesApiGetFolderByIdRequest {
    objectId: string;
    archived?: boolean;
    property?: string;
}
export interface LandingPagesApiGetFolderPreviousVersionRequest {
    objectId: string;
    revisionId: string;
}
export interface LandingPagesApiGetFolderPreviousVersionsRequest {
    objectId: string;
    after?: string;
    before?: string;
    limit?: number;
}
export interface LandingPagesApiGetFoldersPageRequest {
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
export interface LandingPagesApiGetPageRequest {
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
export interface LandingPagesApiGetPreviousVersionRequest {
    objectId: string;
    revisionId: string;
}
export interface LandingPagesApiGetPreviousVersionsRequest {
    objectId: string;
    after?: string;
    before?: string;
    limit?: number;
}
export interface LandingPagesApiPushLiveRequest {
    objectId: string;
}
export interface LandingPagesApiReadBatchRequest {
    batchInputString: BatchInputString;
    archived?: boolean;
}
export interface LandingPagesApiReadFoldersRequest {
    batchInputString: BatchInputString;
    archived?: boolean;
}
export interface LandingPagesApiRerunPreviousABTestRequest {
    abTestRerunRequestVNext: AbTestRerunRequestVNext;
}
export interface LandingPagesApiResetDraftRequest {
    objectId: string;
}
export interface LandingPagesApiRestoreFolderPreviousVersionRequest {
    objectId: string;
    revisionId: string;
}
export interface LandingPagesApiRestorePreviousVersionRequest {
    objectId: string;
    revisionId: string;
}
export interface LandingPagesApiRestorePreviousVersionToDraftRequest {
    objectId: string;
    revisionId: number;
}
export interface LandingPagesApiScheduleRequest {
    contentScheduleRequestVNext: ContentScheduleRequestVNext;
}
export interface LandingPagesApiSetLangPrimaryRequest {
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext;
}
export interface LandingPagesApiUpdateRequest {
    objectId: string;
    page: Page;
    archived?: boolean;
}
export interface LandingPagesApiUpdateBatchRequest {
    batchInputJsonNode: BatchInputJsonNode;
    archived?: boolean;
}
export interface LandingPagesApiUpdateDraftRequest {
    objectId: string;
    page: Page;
}
export interface LandingPagesApiUpdateFolderRequest {
    objectId: string;
    contentFolder: ContentFolder;
    archived?: boolean;
}
export interface LandingPagesApiUpdateFoldersRequest {
    batchInputJsonNode: BatchInputJsonNode;
    archived?: boolean;
}
export interface LandingPagesApiUpdateLangsRequest {
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext;
}
export declare class ObjectLandingPagesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LandingPagesApiRequestFactory, responseProcessor?: LandingPagesApiResponseProcessor);
    archiveWithHttpInfo(param: LandingPagesApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: LandingPagesApiArchiveRequest, options?: Configuration): Promise<void>;
    archiveBatchWithHttpInfo(param: LandingPagesApiArchiveBatchRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archiveBatch(param: LandingPagesApiArchiveBatchRequest, options?: Configuration): Promise<void>;
    archiveFolderWithHttpInfo(param: LandingPagesApiArchiveFolderRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archiveFolder(param: LandingPagesApiArchiveFolderRequest, options?: Configuration): Promise<void>;
    archiveFoldersWithHttpInfo(param: LandingPagesApiArchiveFoldersRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archiveFolders(param: LandingPagesApiArchiveFoldersRequest, options?: Configuration): Promise<void>;
    attachToLangGroupWithHttpInfo(param: LandingPagesApiAttachToLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>>;
    attachToLangGroup(param: LandingPagesApiAttachToLangGroupRequest, options?: Configuration): Promise<void>;
    cloneWithHttpInfo(param: LandingPagesApiCloneRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    clone(param: LandingPagesApiCloneRequest, options?: Configuration): Promise<Page>;
    createWithHttpInfo(param: LandingPagesApiCreateRequest, options?: Configuration): Promise<HttpInfo<void | Page>>;
    create(param: LandingPagesApiCreateRequest, options?: Configuration): Promise<void | Page>;
    createABTestVariationWithHttpInfo(param: LandingPagesApiCreateABTestVariationRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    createABTestVariation(param: LandingPagesApiCreateABTestVariationRequest, options?: Configuration): Promise<Page>;
    createBatchWithHttpInfo(param: LandingPagesApiCreateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>>;
    createBatch(param: LandingPagesApiCreateBatchRequest, options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors>;
    createFolderWithHttpInfo(param: LandingPagesApiCreateFolderRequest, options?: Configuration): Promise<HttpInfo<ContentFolder>>;
    createFolder(param: LandingPagesApiCreateFolderRequest, options?: Configuration): Promise<ContentFolder>;
    createFoldersWithHttpInfo(param: LandingPagesApiCreateFoldersRequest, options?: Configuration): Promise<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>>;
    createFolders(param: LandingPagesApiCreateFoldersRequest, options?: Configuration): Promise<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>;
    createLangVariationWithHttpInfo(param: LandingPagesApiCreateLangVariationRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    createLangVariation(param: LandingPagesApiCreateLangVariationRequest, options?: Configuration): Promise<Page>;
    detachFromLangGroupWithHttpInfo(param: LandingPagesApiDetachFromLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>>;
    detachFromLangGroup(param: LandingPagesApiDetachFromLangGroupRequest, options?: Configuration): Promise<void>;
    endActiveABTestWithHttpInfo(param: LandingPagesApiEndActiveABTestRequest, options?: Configuration): Promise<HttpInfo<void>>;
    endActiveABTest(param: LandingPagesApiEndActiveABTestRequest, options?: Configuration): Promise<void>;
    getByIdWithHttpInfo(param: LandingPagesApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    getById(param: LandingPagesApiGetByIdRequest, options?: Configuration): Promise<Page>;
    getDraftByIdWithHttpInfo(param: LandingPagesApiGetDraftByIdRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    getDraftById(param: LandingPagesApiGetDraftByIdRequest, options?: Configuration): Promise<Page>;
    getFolderByIdWithHttpInfo(param: LandingPagesApiGetFolderByIdRequest, options?: Configuration): Promise<HttpInfo<ContentFolder>>;
    getFolderById(param: LandingPagesApiGetFolderByIdRequest, options?: Configuration): Promise<ContentFolder>;
    getFolderPreviousVersionWithHttpInfo(param: LandingPagesApiGetFolderPreviousVersionRequest, options?: Configuration): Promise<HttpInfo<VersionContentFolder>>;
    getFolderPreviousVersion(param: LandingPagesApiGetFolderPreviousVersionRequest, options?: Configuration): Promise<VersionContentFolder>;
    getFolderPreviousVersionsWithHttpInfo(param: LandingPagesApiGetFolderPreviousVersionsRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalVersionContentFolder>>;
    getFolderPreviousVersions(param: LandingPagesApiGetFolderPreviousVersionsRequest, options?: Configuration): Promise<CollectionResponseWithTotalVersionContentFolder>;
    getFoldersPageWithHttpInfo(param?: LandingPagesApiGetFoldersPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalContentFolderForwardPaging>>;
    getFoldersPage(param?: LandingPagesApiGetFoldersPageRequest, options?: Configuration): Promise<CollectionResponseWithTotalContentFolderForwardPaging>;
    getPageWithHttpInfo(param?: LandingPagesApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalPageForwardPaging>>;
    getPage(param?: LandingPagesApiGetPageRequest, options?: Configuration): Promise<CollectionResponseWithTotalPageForwardPaging>;
    getPreviousVersionWithHttpInfo(param: LandingPagesApiGetPreviousVersionRequest, options?: Configuration): Promise<HttpInfo<VersionPage>>;
    getPreviousVersion(param: LandingPagesApiGetPreviousVersionRequest, options?: Configuration): Promise<VersionPage>;
    getPreviousVersionsWithHttpInfo(param: LandingPagesApiGetPreviousVersionsRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalVersionPage>>;
    getPreviousVersions(param: LandingPagesApiGetPreviousVersionsRequest, options?: Configuration): Promise<CollectionResponseWithTotalVersionPage>;
    pushLiveWithHttpInfo(param: LandingPagesApiPushLiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    pushLive(param: LandingPagesApiPushLiveRequest, options?: Configuration): Promise<void>;
    readBatchWithHttpInfo(param: LandingPagesApiReadBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>>;
    readBatch(param: LandingPagesApiReadBatchRequest, options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors>;
    readFoldersWithHttpInfo(param: LandingPagesApiReadFoldersRequest, options?: Configuration): Promise<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>>;
    readFolders(param: LandingPagesApiReadFoldersRequest, options?: Configuration): Promise<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>;
    rerunPreviousABTestWithHttpInfo(param: LandingPagesApiRerunPreviousABTestRequest, options?: Configuration): Promise<HttpInfo<void>>;
    rerunPreviousABTest(param: LandingPagesApiRerunPreviousABTestRequest, options?: Configuration): Promise<void>;
    resetDraftWithHttpInfo(param: LandingPagesApiResetDraftRequest, options?: Configuration): Promise<HttpInfo<void>>;
    resetDraft(param: LandingPagesApiResetDraftRequest, options?: Configuration): Promise<void>;
    restoreFolderPreviousVersionWithHttpInfo(param: LandingPagesApiRestoreFolderPreviousVersionRequest, options?: Configuration): Promise<HttpInfo<ContentFolder>>;
    restoreFolderPreviousVersion(param: LandingPagesApiRestoreFolderPreviousVersionRequest, options?: Configuration): Promise<ContentFolder>;
    restorePreviousVersionWithHttpInfo(param: LandingPagesApiRestorePreviousVersionRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    restorePreviousVersion(param: LandingPagesApiRestorePreviousVersionRequest, options?: Configuration): Promise<Page>;
    restorePreviousVersionToDraftWithHttpInfo(param: LandingPagesApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    restorePreviousVersionToDraft(param: LandingPagesApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<Page>;
    scheduleWithHttpInfo(param: LandingPagesApiScheduleRequest, options?: Configuration): Promise<HttpInfo<void>>;
    schedule(param: LandingPagesApiScheduleRequest, options?: Configuration): Promise<void>;
    setLangPrimaryWithHttpInfo(param: LandingPagesApiSetLangPrimaryRequest, options?: Configuration): Promise<HttpInfo<void>>;
    setLangPrimary(param: LandingPagesApiSetLangPrimaryRequest, options?: Configuration): Promise<void>;
    updateWithHttpInfo(param: LandingPagesApiUpdateRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    update(param: LandingPagesApiUpdateRequest, options?: Configuration): Promise<Page>;
    updateBatchWithHttpInfo(param: LandingPagesApiUpdateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>>;
    updateBatch(param: LandingPagesApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors>;
    updateDraftWithHttpInfo(param: LandingPagesApiUpdateDraftRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    updateDraft(param: LandingPagesApiUpdateDraftRequest, options?: Configuration): Promise<Page>;
    updateFolderWithHttpInfo(param: LandingPagesApiUpdateFolderRequest, options?: Configuration): Promise<HttpInfo<ContentFolder>>;
    updateFolder(param: LandingPagesApiUpdateFolderRequest, options?: Configuration): Promise<ContentFolder>;
    updateFoldersWithHttpInfo(param: LandingPagesApiUpdateFoldersRequest, options?: Configuration): Promise<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>>;
    updateFolders(param: LandingPagesApiUpdateFoldersRequest, options?: Configuration): Promise<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>;
    updateLangsWithHttpInfo(param: LandingPagesApiUpdateLangsRequest, options?: Configuration): Promise<HttpInfo<void>>;
    updateLangs(param: LandingPagesApiUpdateLangsRequest, options?: Configuration): Promise<void>;
}
import { SitePagesApiRequestFactory, SitePagesApiResponseProcessor } from "../apis/SitePagesApi";
export interface SitePagesApiArchiveRequest {
    objectId: string;
    archived?: boolean;
}
export interface SitePagesApiArchiveBatchRequest {
    batchInputString: BatchInputString;
}
export interface SitePagesApiAttachToLangGroupRequest {
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext;
}
export interface SitePagesApiCloneRequest {
    contentCloneRequestVNext: ContentCloneRequestVNext;
}
export interface SitePagesApiCreateRequest {
    page: Page;
}
export interface SitePagesApiCreateABTestVariationRequest {
    abTestCreateRequestVNext: AbTestCreateRequestVNext;
}
export interface SitePagesApiCreateBatchRequest {
    batchInputPage: BatchInputPage;
}
export interface SitePagesApiCreateLangVariationRequest {
    contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext;
}
export interface SitePagesApiDetachFromLangGroupRequest {
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext;
}
export interface SitePagesApiEndActiveABTestRequest {
    abTestEndRequestVNext: AbTestEndRequestVNext;
}
export interface SitePagesApiGetByIdRequest {
    objectId: string;
    archived?: boolean;
    property?: string;
}
export interface SitePagesApiGetDraftByIdRequest {
    objectId: string;
}
export interface SitePagesApiGetPageRequest {
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
export interface SitePagesApiGetPreviousVersionRequest {
    objectId: string;
    revisionId: string;
}
export interface SitePagesApiGetPreviousVersionsRequest {
    objectId: string;
    after?: string;
    before?: string;
    limit?: number;
}
export interface SitePagesApiPushLiveRequest {
    objectId: string;
}
export interface SitePagesApiReadBatchRequest {
    batchInputString: BatchInputString;
    archived?: boolean;
}
export interface SitePagesApiRerunPreviousABTestRequest {
    abTestRerunRequestVNext: AbTestRerunRequestVNext;
}
export interface SitePagesApiResetDraftRequest {
    objectId: string;
}
export interface SitePagesApiRestorePreviousVersionRequest {
    objectId: string;
    revisionId: string;
}
export interface SitePagesApiRestorePreviousVersionToDraftRequest {
    objectId: string;
    revisionId: number;
}
export interface SitePagesApiScheduleRequest {
    contentScheduleRequestVNext: ContentScheduleRequestVNext;
}
export interface SitePagesApiSetLangPrimaryRequest {
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext;
}
export interface SitePagesApiUpdateRequest {
    objectId: string;
    page: Page;
    archived?: boolean;
}
export interface SitePagesApiUpdateBatchRequest {
    batchInputJsonNode: BatchInputJsonNode;
    archived?: boolean;
}
export interface SitePagesApiUpdateDraftRequest {
    objectId: string;
    page: Page;
}
export interface SitePagesApiUpdateLangsRequest {
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext;
}
export declare class ObjectSitePagesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SitePagesApiRequestFactory, responseProcessor?: SitePagesApiResponseProcessor);
    archiveWithHttpInfo(param: SitePagesApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: SitePagesApiArchiveRequest, options?: Configuration): Promise<void>;
    archiveBatchWithHttpInfo(param: SitePagesApiArchiveBatchRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archiveBatch(param: SitePagesApiArchiveBatchRequest, options?: Configuration): Promise<void>;
    attachToLangGroupWithHttpInfo(param: SitePagesApiAttachToLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>>;
    attachToLangGroup(param: SitePagesApiAttachToLangGroupRequest, options?: Configuration): Promise<void>;
    cloneWithHttpInfo(param: SitePagesApiCloneRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    clone(param: SitePagesApiCloneRequest, options?: Configuration): Promise<Page>;
    createWithHttpInfo(param: SitePagesApiCreateRequest, options?: Configuration): Promise<HttpInfo<void | Page>>;
    create(param: SitePagesApiCreateRequest, options?: Configuration): Promise<void | Page>;
    createABTestVariationWithHttpInfo(param: SitePagesApiCreateABTestVariationRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    createABTestVariation(param: SitePagesApiCreateABTestVariationRequest, options?: Configuration): Promise<Page>;
    createBatchWithHttpInfo(param: SitePagesApiCreateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>>;
    createBatch(param: SitePagesApiCreateBatchRequest, options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors>;
    createLangVariationWithHttpInfo(param: SitePagesApiCreateLangVariationRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    createLangVariation(param: SitePagesApiCreateLangVariationRequest, options?: Configuration): Promise<Page>;
    detachFromLangGroupWithHttpInfo(param: SitePagesApiDetachFromLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>>;
    detachFromLangGroup(param: SitePagesApiDetachFromLangGroupRequest, options?: Configuration): Promise<void>;
    endActiveABTestWithHttpInfo(param: SitePagesApiEndActiveABTestRequest, options?: Configuration): Promise<HttpInfo<void>>;
    endActiveABTest(param: SitePagesApiEndActiveABTestRequest, options?: Configuration): Promise<void>;
    getByIdWithHttpInfo(param: SitePagesApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    getById(param: SitePagesApiGetByIdRequest, options?: Configuration): Promise<Page>;
    getDraftByIdWithHttpInfo(param: SitePagesApiGetDraftByIdRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    getDraftById(param: SitePagesApiGetDraftByIdRequest, options?: Configuration): Promise<Page>;
    getPageWithHttpInfo(param?: SitePagesApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalPageForwardPaging>>;
    getPage(param?: SitePagesApiGetPageRequest, options?: Configuration): Promise<CollectionResponseWithTotalPageForwardPaging>;
    getPreviousVersionWithHttpInfo(param: SitePagesApiGetPreviousVersionRequest, options?: Configuration): Promise<HttpInfo<VersionPage>>;
    getPreviousVersion(param: SitePagesApiGetPreviousVersionRequest, options?: Configuration): Promise<VersionPage>;
    getPreviousVersionsWithHttpInfo(param: SitePagesApiGetPreviousVersionsRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalVersionPage>>;
    getPreviousVersions(param: SitePagesApiGetPreviousVersionsRequest, options?: Configuration): Promise<CollectionResponseWithTotalVersionPage>;
    pushLiveWithHttpInfo(param: SitePagesApiPushLiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    pushLive(param: SitePagesApiPushLiveRequest, options?: Configuration): Promise<void>;
    readBatchWithHttpInfo(param: SitePagesApiReadBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>>;
    readBatch(param: SitePagesApiReadBatchRequest, options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors>;
    rerunPreviousABTestWithHttpInfo(param: SitePagesApiRerunPreviousABTestRequest, options?: Configuration): Promise<HttpInfo<void>>;
    rerunPreviousABTest(param: SitePagesApiRerunPreviousABTestRequest, options?: Configuration): Promise<void>;
    resetDraftWithHttpInfo(param: SitePagesApiResetDraftRequest, options?: Configuration): Promise<HttpInfo<void>>;
    resetDraft(param: SitePagesApiResetDraftRequest, options?: Configuration): Promise<void>;
    restorePreviousVersionWithHttpInfo(param: SitePagesApiRestorePreviousVersionRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    restorePreviousVersion(param: SitePagesApiRestorePreviousVersionRequest, options?: Configuration): Promise<Page>;
    restorePreviousVersionToDraftWithHttpInfo(param: SitePagesApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    restorePreviousVersionToDraft(param: SitePagesApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<Page>;
    scheduleWithHttpInfo(param: SitePagesApiScheduleRequest, options?: Configuration): Promise<HttpInfo<void>>;
    schedule(param: SitePagesApiScheduleRequest, options?: Configuration): Promise<void>;
    setLangPrimaryWithHttpInfo(param: SitePagesApiSetLangPrimaryRequest, options?: Configuration): Promise<HttpInfo<void>>;
    setLangPrimary(param: SitePagesApiSetLangPrimaryRequest, options?: Configuration): Promise<void>;
    updateWithHttpInfo(param: SitePagesApiUpdateRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    update(param: SitePagesApiUpdateRequest, options?: Configuration): Promise<Page>;
    updateBatchWithHttpInfo(param: SitePagesApiUpdateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>>;
    updateBatch(param: SitePagesApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors>;
    updateDraftWithHttpInfo(param: SitePagesApiUpdateDraftRequest, options?: Configuration): Promise<HttpInfo<Page>>;
    updateDraft(param: SitePagesApiUpdateDraftRequest, options?: Configuration): Promise<Page>;
    updateLangsWithHttpInfo(param: SitePagesApiUpdateLangsRequest, options?: Configuration): Promise<HttpInfo<void>>;
    updateLangs(param: SitePagesApiUpdateLangsRequest, options?: Configuration): Promise<void>;
}
