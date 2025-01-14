import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponsePipelineNoPaging } from '../models/CollectionResponsePipelineNoPaging';
import { CollectionResponsePipelineStageNoPaging } from '../models/CollectionResponsePipelineStageNoPaging';
import { CollectionResponsePublicAuditInfoNoPaging } from '../models/CollectionResponsePublicAuditInfoNoPaging';
import { Pipeline } from '../models/Pipeline';
import { PipelineInput } from '../models/PipelineInput';
import { PipelinePatchInput } from '../models/PipelinePatchInput';
import { PipelineStage } from '../models/PipelineStage';
import { PipelineStageInput } from '../models/PipelineStageInput';
import { PipelineStagePatchInput } from '../models/PipelineStagePatchInput';
import { PipelineAuditsApiRequestFactory, PipelineAuditsApiResponseProcessor } from "../apis/PipelineAuditsApi";
export interface PipelineAuditsApiGetAuditRequest {
    objectType: string;
    pipelineId: string;
}
export declare class ObjectPipelineAuditsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PipelineAuditsApiRequestFactory, responseProcessor?: PipelineAuditsApiResponseProcessor);
    getAuditWithHttpInfo(param: PipelineAuditsApiGetAuditRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>>;
    getAudit(param: PipelineAuditsApiGetAuditRequest, options?: Configuration): Promise<CollectionResponsePublicAuditInfoNoPaging>;
}
import { PipelineStageAuditsApiRequestFactory, PipelineStageAuditsApiResponseProcessor } from "../apis/PipelineStageAuditsApi";
export interface PipelineStageAuditsApiGetAuditRequest {
    objectType: string;
    stageId: string;
}
export declare class ObjectPipelineStageAuditsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PipelineStageAuditsApiRequestFactory, responseProcessor?: PipelineStageAuditsApiResponseProcessor);
    getAuditWithHttpInfo(param: PipelineStageAuditsApiGetAuditRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>>;
    getAudit(param: PipelineStageAuditsApiGetAuditRequest, options?: Configuration): Promise<CollectionResponsePublicAuditInfoNoPaging>;
}
import { PipelineStagesApiRequestFactory, PipelineStagesApiResponseProcessor } from "../apis/PipelineStagesApi";
export interface PipelineStagesApiArchiveRequest {
    objectType: string;
    pipelineId: string;
    stageId: string;
}
export interface PipelineStagesApiCreateRequest {
    objectType: string;
    pipelineId: string;
    pipelineStageInput: PipelineStageInput;
}
export interface PipelineStagesApiGetAllRequest {
    objectType: string;
    pipelineId: string;
}
export interface PipelineStagesApiGetByIdRequest {
    objectType: string;
    pipelineId: string;
    stageId: string;
}
export interface PipelineStagesApiReplaceRequest {
    objectType: string;
    pipelineId: string;
    stageId: string;
    pipelineStageInput: PipelineStageInput;
}
export interface PipelineStagesApiUpdateRequest {
    objectType: string;
    pipelineId: string;
    stageId: string;
    pipelineStagePatchInput: PipelineStagePatchInput;
}
export declare class ObjectPipelineStagesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PipelineStagesApiRequestFactory, responseProcessor?: PipelineStagesApiResponseProcessor);
    archiveWithHttpInfo(param: PipelineStagesApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: PipelineStagesApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: PipelineStagesApiCreateRequest, options?: Configuration): Promise<HttpInfo<PipelineStage>>;
    create(param: PipelineStagesApiCreateRequest, options?: Configuration): Promise<PipelineStage>;
    getAllWithHttpInfo(param: PipelineStagesApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePipelineStageNoPaging>>;
    getAll(param: PipelineStagesApiGetAllRequest, options?: Configuration): Promise<CollectionResponsePipelineStageNoPaging>;
    getByIdWithHttpInfo(param: PipelineStagesApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<PipelineStage>>;
    getById(param: PipelineStagesApiGetByIdRequest, options?: Configuration): Promise<PipelineStage>;
    replaceWithHttpInfo(param: PipelineStagesApiReplaceRequest, options?: Configuration): Promise<HttpInfo<PipelineStage>>;
    replace(param: PipelineStagesApiReplaceRequest, options?: Configuration): Promise<PipelineStage>;
    updateWithHttpInfo(param: PipelineStagesApiUpdateRequest, options?: Configuration): Promise<HttpInfo<PipelineStage>>;
    update(param: PipelineStagesApiUpdateRequest, options?: Configuration): Promise<PipelineStage>;
}
import { PipelinesApiRequestFactory, PipelinesApiResponseProcessor } from "../apis/PipelinesApi";
export interface PipelinesApiArchiveRequest {
    objectType: string;
    pipelineId: string;
    validateReferencesBeforeDelete?: boolean;
    validateDealStageUsagesBeforeDelete?: boolean;
}
export interface PipelinesApiCreateRequest {
    objectType: string;
    pipelineInput: PipelineInput;
}
export interface PipelinesApiGetAllRequest {
    objectType: string;
}
export interface PipelinesApiGetByIdRequest {
    objectType: string;
    pipelineId: string;
}
export interface PipelinesApiReplaceRequest {
    objectType: string;
    pipelineId: string;
    pipelineInput: PipelineInput;
    validateReferencesBeforeDelete?: boolean;
    validateDealStageUsagesBeforeDelete?: boolean;
}
export interface PipelinesApiUpdateRequest {
    objectType: string;
    pipelineId: string;
    pipelinePatchInput: PipelinePatchInput;
    validateReferencesBeforeDelete?: boolean;
    validateDealStageUsagesBeforeDelete?: boolean;
}
export declare class ObjectPipelinesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PipelinesApiRequestFactory, responseProcessor?: PipelinesApiResponseProcessor);
    archiveWithHttpInfo(param: PipelinesApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: PipelinesApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: PipelinesApiCreateRequest, options?: Configuration): Promise<HttpInfo<Pipeline>>;
    create(param: PipelinesApiCreateRequest, options?: Configuration): Promise<Pipeline>;
    getAllWithHttpInfo(param: PipelinesApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePipelineNoPaging>>;
    getAll(param: PipelinesApiGetAllRequest, options?: Configuration): Promise<CollectionResponsePipelineNoPaging>;
    getByIdWithHttpInfo(param: PipelinesApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<Pipeline>>;
    getById(param: PipelinesApiGetByIdRequest, options?: Configuration): Promise<Pipeline>;
    replaceWithHttpInfo(param: PipelinesApiReplaceRequest, options?: Configuration): Promise<HttpInfo<Pipeline>>;
    replace(param: PipelinesApiReplaceRequest, options?: Configuration): Promise<Pipeline>;
    updateWithHttpInfo(param: PipelinesApiUpdateRequest, options?: Configuration): Promise<HttpInfo<Pipeline>>;
    update(param: PipelinesApiUpdateRequest, options?: Configuration): Promise<Pipeline>;
}
