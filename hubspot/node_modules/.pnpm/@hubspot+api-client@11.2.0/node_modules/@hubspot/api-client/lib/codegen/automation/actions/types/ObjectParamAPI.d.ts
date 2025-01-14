import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { BatchInputCallbackCompletionBatchRequest } from '../models/BatchInputCallbackCompletionBatchRequest';
import { CallbackCompletionRequest } from '../models/CallbackCompletionRequest';
import { CollectionResponsePublicActionDefinitionForwardPaging } from '../models/CollectionResponsePublicActionDefinitionForwardPaging';
import { CollectionResponsePublicActionFunctionIdentifierNoPaging } from '../models/CollectionResponsePublicActionFunctionIdentifierNoPaging';
import { CollectionResponsePublicActionRevisionForwardPaging } from '../models/CollectionResponsePublicActionRevisionForwardPaging';
import { PublicActionDefinition } from '../models/PublicActionDefinition';
import { PublicActionDefinitionEgg } from '../models/PublicActionDefinitionEgg';
import { PublicActionDefinitionPatch } from '../models/PublicActionDefinitionPatch';
import { PublicActionFunction } from '../models/PublicActionFunction';
import { PublicActionFunctionIdentifier } from '../models/PublicActionFunctionIdentifier';
import { PublicActionRevision } from '../models/PublicActionRevision';
import { CallbacksApiRequestFactory, CallbacksApiResponseProcessor } from "../apis/CallbacksApi";
export interface CallbacksApiCompleteRequest {
    callbackId: string;
    callbackCompletionRequest: CallbackCompletionRequest;
}
export interface CallbacksApiCompleteBatchRequest {
    batchInputCallbackCompletionBatchRequest: BatchInputCallbackCompletionBatchRequest;
}
export declare class ObjectCallbacksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CallbacksApiRequestFactory, responseProcessor?: CallbacksApiResponseProcessor);
    completeWithHttpInfo(param: CallbacksApiCompleteRequest, options?: Configuration): Promise<HttpInfo<void>>;
    complete(param: CallbacksApiCompleteRequest, options?: Configuration): Promise<void>;
    completeBatchWithHttpInfo(param: CallbacksApiCompleteBatchRequest, options?: Configuration): Promise<HttpInfo<void>>;
    completeBatch(param: CallbacksApiCompleteBatchRequest, options?: Configuration): Promise<void>;
}
import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor } from "../apis/DefinitionsApi";
export interface DefinitionsApiArchiveRequest {
    definitionId: string;
    appId: number;
}
export interface DefinitionsApiCreateRequest {
    appId: number;
    publicActionDefinitionEgg: PublicActionDefinitionEgg;
}
export interface DefinitionsApiGetByIdRequest {
    definitionId: string;
    appId: number;
    archived?: boolean;
}
export interface DefinitionsApiGetPageRequest {
    appId: number;
    limit?: number;
    after?: string;
    archived?: boolean;
}
export interface DefinitionsApiUpdateRequest {
    definitionId: string;
    appId: number;
    publicActionDefinitionPatch: PublicActionDefinitionPatch;
}
export declare class ObjectDefinitionsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefinitionsApiRequestFactory, responseProcessor?: DefinitionsApiResponseProcessor);
    archiveWithHttpInfo(param: DefinitionsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: DefinitionsApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: DefinitionsApiCreateRequest, options?: Configuration): Promise<HttpInfo<PublicActionDefinition>>;
    create(param: DefinitionsApiCreateRequest, options?: Configuration): Promise<PublicActionDefinition>;
    getByIdWithHttpInfo(param: DefinitionsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<PublicActionDefinition>>;
    getById(param: DefinitionsApiGetByIdRequest, options?: Configuration): Promise<PublicActionDefinition>;
    getPageWithHttpInfo(param: DefinitionsApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicActionDefinitionForwardPaging>>;
    getPage(param: DefinitionsApiGetPageRequest, options?: Configuration): Promise<CollectionResponsePublicActionDefinitionForwardPaging>;
    updateWithHttpInfo(param: DefinitionsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<PublicActionDefinition>>;
    update(param: DefinitionsApiUpdateRequest, options?: Configuration): Promise<PublicActionDefinition>;
}
import { FunctionsApiRequestFactory, FunctionsApiResponseProcessor } from "../apis/FunctionsApi";
export interface FunctionsApiArchiveRequest {
    definitionId: string;
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';
    functionId: string;
    appId: number;
}
export interface FunctionsApiArchiveByFunctionTypeRequest {
    definitionId: string;
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';
    appId: number;
}
export interface FunctionsApiCreateOrReplaceRequest {
    definitionId: string;
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';
    functionId: string;
    appId: number;
    body: string;
}
export interface FunctionsApiCreateOrReplaceByFunctionTypeRequest {
    definitionId: string;
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';
    appId: number;
    body: string;
}
export interface FunctionsApiGetByFunctionTypeRequest {
    definitionId: string;
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';
    appId: number;
}
export interface FunctionsApiGetByIdRequest {
    definitionId: string;
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION';
    functionId: string;
    appId: number;
}
export interface FunctionsApiGetPageRequest {
    definitionId: string;
    appId: number;
}
export declare class ObjectFunctionsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FunctionsApiRequestFactory, responseProcessor?: FunctionsApiResponseProcessor);
    archiveWithHttpInfo(param: FunctionsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: FunctionsApiArchiveRequest, options?: Configuration): Promise<void>;
    archiveByFunctionTypeWithHttpInfo(param: FunctionsApiArchiveByFunctionTypeRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archiveByFunctionType(param: FunctionsApiArchiveByFunctionTypeRequest, options?: Configuration): Promise<void>;
    createOrReplaceWithHttpInfo(param: FunctionsApiCreateOrReplaceRequest, options?: Configuration): Promise<HttpInfo<PublicActionFunctionIdentifier>>;
    createOrReplace(param: FunctionsApiCreateOrReplaceRequest, options?: Configuration): Promise<PublicActionFunctionIdentifier>;
    createOrReplaceByFunctionTypeWithHttpInfo(param: FunctionsApiCreateOrReplaceByFunctionTypeRequest, options?: Configuration): Promise<HttpInfo<PublicActionFunctionIdentifier>>;
    createOrReplaceByFunctionType(param: FunctionsApiCreateOrReplaceByFunctionTypeRequest, options?: Configuration): Promise<PublicActionFunctionIdentifier>;
    getByFunctionTypeWithHttpInfo(param: FunctionsApiGetByFunctionTypeRequest, options?: Configuration): Promise<HttpInfo<PublicActionFunction>>;
    getByFunctionType(param: FunctionsApiGetByFunctionTypeRequest, options?: Configuration): Promise<PublicActionFunction>;
    getByIdWithHttpInfo(param: FunctionsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<PublicActionFunction>>;
    getById(param: FunctionsApiGetByIdRequest, options?: Configuration): Promise<PublicActionFunction>;
    getPageWithHttpInfo(param: FunctionsApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicActionFunctionIdentifierNoPaging>>;
    getPage(param: FunctionsApiGetPageRequest, options?: Configuration): Promise<CollectionResponsePublicActionFunctionIdentifierNoPaging>;
}
import { RevisionsApiRequestFactory, RevisionsApiResponseProcessor } from "../apis/RevisionsApi";
export interface RevisionsApiGetByIdRequest {
    definitionId: string;
    revisionId: string;
    appId: number;
}
export interface RevisionsApiGetPageRequest {
    definitionId: string;
    appId: number;
    limit?: number;
    after?: string;
}
export declare class ObjectRevisionsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: RevisionsApiRequestFactory, responseProcessor?: RevisionsApiResponseProcessor);
    getByIdWithHttpInfo(param: RevisionsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<PublicActionRevision>>;
    getById(param: RevisionsApiGetByIdRequest, options?: Configuration): Promise<PublicActionRevision>;
    getPageWithHttpInfo(param: RevisionsApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicActionRevisionForwardPaging>>;
    getPage(param: RevisionsApiGetPageRequest, options?: Configuration): Promise<CollectionResponsePublicActionRevisionForwardPaging>;
}
