import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { PublicSubscriptionStatus } from '../models/PublicSubscriptionStatus';
import { PublicSubscriptionStatusesResponse } from '../models/PublicSubscriptionStatusesResponse';
import { PublicUpdateSubscriptionStatusRequest } from '../models/PublicUpdateSubscriptionStatusRequest';
import { SubscriptionDefinitionsResponse } from '../models/SubscriptionDefinitionsResponse';
import { DefinitionApiRequestFactory, DefinitionApiResponseProcessor } from "../apis/DefinitionApi";
export interface DefinitionApiGetPageRequest {
}
export declare class ObjectDefinitionApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefinitionApiRequestFactory, responseProcessor?: DefinitionApiResponseProcessor);
    getPageWithHttpInfo(param?: DefinitionApiGetPageRequest, options?: Configuration): Promise<HttpInfo<SubscriptionDefinitionsResponse>>;
    getPage(param?: DefinitionApiGetPageRequest, options?: Configuration): Promise<SubscriptionDefinitionsResponse>;
}
import { StatusApiRequestFactory, StatusApiResponseProcessor } from "../apis/StatusApi";
export interface StatusApiGetEmailStatusRequest {
    emailAddress: string;
}
export interface StatusApiSubscribeRequest {
    publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest;
}
export interface StatusApiUnsubscribeRequest {
    publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest;
}
export declare class ObjectStatusApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: StatusApiRequestFactory, responseProcessor?: StatusApiResponseProcessor);
    getEmailStatusWithHttpInfo(param: StatusApiGetEmailStatusRequest, options?: Configuration): Promise<HttpInfo<PublicSubscriptionStatusesResponse>>;
    getEmailStatus(param: StatusApiGetEmailStatusRequest, options?: Configuration): Promise<PublicSubscriptionStatusesResponse>;
    subscribeWithHttpInfo(param: StatusApiSubscribeRequest, options?: Configuration): Promise<HttpInfo<PublicSubscriptionStatus>>;
    subscribe(param: StatusApiSubscribeRequest, options?: Configuration): Promise<PublicSubscriptionStatus>;
    unsubscribeWithHttpInfo(param: StatusApiUnsubscribeRequest, options?: Configuration): Promise<HttpInfo<PublicSubscriptionStatus>>;
    unsubscribe(param: StatusApiUnsubscribeRequest, options?: Configuration): Promise<PublicSubscriptionStatus>;
}
