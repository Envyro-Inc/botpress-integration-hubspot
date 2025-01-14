import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
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
export declare class ObservableCallbacksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CallbacksApiRequestFactory, responseProcessor?: CallbacksApiResponseProcessor);
    completeWithHttpInfo(callbackId: string, callbackCompletionRequest: CallbackCompletionRequest, _options?: Configuration): Observable<HttpInfo<void>>;
    complete(callbackId: string, callbackCompletionRequest: CallbackCompletionRequest, _options?: Configuration): Observable<void>;
    completeBatchWithHttpInfo(batchInputCallbackCompletionBatchRequest: BatchInputCallbackCompletionBatchRequest, _options?: Configuration): Observable<HttpInfo<void>>;
    completeBatch(batchInputCallbackCompletionBatchRequest: BatchInputCallbackCompletionBatchRequest, _options?: Configuration): Observable<void>;
}
import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor } from "../apis/DefinitionsApi";
export declare class ObservableDefinitionsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DefinitionsApiRequestFactory, responseProcessor?: DefinitionsApiResponseProcessor);
    archiveWithHttpInfo(definitionId: string, appId: number, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(definitionId: string, appId: number, _options?: Configuration): Observable<void>;
    createWithHttpInfo(appId: number, publicActionDefinitionEgg: PublicActionDefinitionEgg, _options?: Configuration): Observable<HttpInfo<PublicActionDefinition>>;
    create(appId: number, publicActionDefinitionEgg: PublicActionDefinitionEgg, _options?: Configuration): Observable<PublicActionDefinition>;
    getByIdWithHttpInfo(definitionId: string, appId: number, archived?: boolean, _options?: Configuration): Observable<HttpInfo<PublicActionDefinition>>;
    getById(definitionId: string, appId: number, archived?: boolean, _options?: Configuration): Observable<PublicActionDefinition>;
    getPageWithHttpInfo(appId: number, limit?: number, after?: string, archived?: boolean, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicActionDefinitionForwardPaging>>;
    getPage(appId: number, limit?: number, after?: string, archived?: boolean, _options?: Configuration): Observable<CollectionResponsePublicActionDefinitionForwardPaging>;
    updateWithHttpInfo(definitionId: string, appId: number, publicActionDefinitionPatch: PublicActionDefinitionPatch, _options?: Configuration): Observable<HttpInfo<PublicActionDefinition>>;
    update(definitionId: string, appId: number, publicActionDefinitionPatch: PublicActionDefinitionPatch, _options?: Configuration): Observable<PublicActionDefinition>;
}
import { FunctionsApiRequestFactory, FunctionsApiResponseProcessor } from "../apis/FunctionsApi";
export declare class ObservableFunctionsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FunctionsApiRequestFactory, responseProcessor?: FunctionsApiResponseProcessor);
    archiveWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: Configuration): Observable<void>;
    archiveByFunctionTypeWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: Configuration): Observable<HttpInfo<void>>;
    archiveByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: Configuration): Observable<void>;
    createOrReplaceWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, body: string, _options?: Configuration): Observable<HttpInfo<PublicActionFunctionIdentifier>>;
    createOrReplace(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, body: string, _options?: Configuration): Observable<PublicActionFunctionIdentifier>;
    createOrReplaceByFunctionTypeWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, body: string, _options?: Configuration): Observable<HttpInfo<PublicActionFunctionIdentifier>>;
    createOrReplaceByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, body: string, _options?: Configuration): Observable<PublicActionFunctionIdentifier>;
    getByFunctionTypeWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: Configuration): Observable<HttpInfo<PublicActionFunction>>;
    getByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: Configuration): Observable<PublicActionFunction>;
    getByIdWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: Configuration): Observable<HttpInfo<PublicActionFunction>>;
    getById(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: Configuration): Observable<PublicActionFunction>;
    getPageWithHttpInfo(definitionId: string, appId: number, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicActionFunctionIdentifierNoPaging>>;
    getPage(definitionId: string, appId: number, _options?: Configuration): Observable<CollectionResponsePublicActionFunctionIdentifierNoPaging>;
}
import { RevisionsApiRequestFactory, RevisionsApiResponseProcessor } from "../apis/RevisionsApi";
export declare class ObservableRevisionsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RevisionsApiRequestFactory, responseProcessor?: RevisionsApiResponseProcessor);
    getByIdWithHttpInfo(definitionId: string, revisionId: string, appId: number, _options?: Configuration): Observable<HttpInfo<PublicActionRevision>>;
    getById(definitionId: string, revisionId: string, appId: number, _options?: Configuration): Observable<PublicActionRevision>;
    getPageWithHttpInfo(definitionId: string, appId: number, limit?: number, after?: string, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicActionRevisionForwardPaging>>;
    getPage(definitionId: string, appId: number, limit?: number, after?: string, _options?: Configuration): Observable<CollectionResponsePublicActionRevisionForwardPaging>;
}
