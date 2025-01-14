import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { BatchInputTimelineEvent } from '../models/BatchInputTimelineEvent';
import { BatchResponseTimelineEventResponse } from '../models/BatchResponseTimelineEventResponse';
import { BatchResponseTimelineEventResponseWithErrors } from '../models/BatchResponseTimelineEventResponseWithErrors';
import { CollectionResponseTimelineEventTemplateNoPaging } from '../models/CollectionResponseTimelineEventTemplateNoPaging';
import { EventDetail } from '../models/EventDetail';
import { TimelineEvent } from '../models/TimelineEvent';
import { TimelineEventResponse } from '../models/TimelineEventResponse';
import { TimelineEventTemplate } from '../models/TimelineEventTemplate';
import { TimelineEventTemplateCreateRequest } from '../models/TimelineEventTemplateCreateRequest';
import { TimelineEventTemplateToken } from '../models/TimelineEventTemplateToken';
import { TimelineEventTemplateTokenUpdateRequest } from '../models/TimelineEventTemplateTokenUpdateRequest';
import { TimelineEventTemplateUpdateRequest } from '../models/TimelineEventTemplateUpdateRequest';
import { EventsApiRequestFactory, EventsApiResponseProcessor } from "../apis/EventsApi";
export interface EventsApiCreateRequest {
    timelineEvent: TimelineEvent;
}
export interface EventsApiCreateBatchRequest {
    batchInputTimelineEvent: BatchInputTimelineEvent;
}
export interface EventsApiGetByIdRequest {
    eventTemplateId: string;
    eventId: string;
}
export interface EventsApiGetDetailByIdRequest {
    eventTemplateId: string;
    eventId: string;
}
export interface EventsApiGetRenderByIdRequest {
    eventTemplateId: string;
    eventId: string;
    detail?: boolean;
}
export declare class ObjectEventsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor);
    createWithHttpInfo(param: EventsApiCreateRequest, options?: Configuration): Promise<HttpInfo<TimelineEventResponse>>;
    create(param: EventsApiCreateRequest, options?: Configuration): Promise<TimelineEventResponse>;
    createBatchWithHttpInfo(param: EventsApiCreateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors>>;
    createBatch(param: EventsApiCreateBatchRequest, options?: Configuration): Promise<BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors>;
    getByIdWithHttpInfo(param: EventsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<TimelineEventResponse>>;
    getById(param: EventsApiGetByIdRequest, options?: Configuration): Promise<TimelineEventResponse>;
    getDetailByIdWithHttpInfo(param: EventsApiGetDetailByIdRequest, options?: Configuration): Promise<HttpInfo<EventDetail>>;
    getDetailById(param: EventsApiGetDetailByIdRequest, options?: Configuration): Promise<EventDetail>;
    getRenderByIdWithHttpInfo(param: EventsApiGetRenderByIdRequest, options?: Configuration): Promise<HttpInfo<string>>;
    getRenderById(param: EventsApiGetRenderByIdRequest, options?: Configuration): Promise<string>;
}
import { TemplatesApiRequestFactory, TemplatesApiResponseProcessor } from "../apis/TemplatesApi";
export interface TemplatesApiArchiveRequest {
    eventTemplateId: string;
    appId: number;
}
export interface TemplatesApiCreateRequest {
    appId: number;
    timelineEventTemplateCreateRequest: TimelineEventTemplateCreateRequest;
}
export interface TemplatesApiGetAllRequest {
    appId: number;
}
export interface TemplatesApiGetByIdRequest {
    eventTemplateId: string;
    appId: number;
}
export interface TemplatesApiUpdateRequest {
    eventTemplateId: string;
    appId: number;
    timelineEventTemplateUpdateRequest: TimelineEventTemplateUpdateRequest;
}
export declare class ObjectTemplatesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TemplatesApiRequestFactory, responseProcessor?: TemplatesApiResponseProcessor);
    archiveWithHttpInfo(param: TemplatesApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: TemplatesApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: TemplatesApiCreateRequest, options?: Configuration): Promise<HttpInfo<TimelineEventTemplate>>;
    create(param: TemplatesApiCreateRequest, options?: Configuration): Promise<TimelineEventTemplate>;
    getAllWithHttpInfo(param: TemplatesApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseTimelineEventTemplateNoPaging>>;
    getAll(param: TemplatesApiGetAllRequest, options?: Configuration): Promise<CollectionResponseTimelineEventTemplateNoPaging>;
    getByIdWithHttpInfo(param: TemplatesApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<TimelineEventTemplate>>;
    getById(param: TemplatesApiGetByIdRequest, options?: Configuration): Promise<TimelineEventTemplate>;
    updateWithHttpInfo(param: TemplatesApiUpdateRequest, options?: Configuration): Promise<HttpInfo<TimelineEventTemplate>>;
    update(param: TemplatesApiUpdateRequest, options?: Configuration): Promise<TimelineEventTemplate>;
}
import { TokensApiRequestFactory, TokensApiResponseProcessor } from "../apis/TokensApi";
export interface TokensApiArchiveRequest {
    eventTemplateId: string;
    tokenName: string;
    appId: number;
}
export interface TokensApiCreateRequest {
    eventTemplateId: string;
    appId: number;
    timelineEventTemplateToken: TimelineEventTemplateToken;
}
export interface TokensApiUpdateRequest {
    eventTemplateId: string;
    tokenName: string;
    appId: number;
    timelineEventTemplateTokenUpdateRequest: TimelineEventTemplateTokenUpdateRequest;
}
export declare class ObjectTokensApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TokensApiRequestFactory, responseProcessor?: TokensApiResponseProcessor);
    archiveWithHttpInfo(param: TokensApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: TokensApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: TokensApiCreateRequest, options?: Configuration): Promise<HttpInfo<TimelineEventTemplateToken>>;
    create(param: TokensApiCreateRequest, options?: Configuration): Promise<TimelineEventTemplateToken>;
    updateWithHttpInfo(param: TokensApiUpdateRequest, options?: Configuration): Promise<HttpInfo<TimelineEventTemplateToken>>;
    update(param: TokensApiUpdateRequest, options?: Configuration): Promise<TimelineEventTemplateToken>;
}
