import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { PublicSubscriptionStatus } from '../models/PublicSubscriptionStatus';
import { PublicSubscriptionStatusesResponse } from '../models/PublicSubscriptionStatusesResponse';
import { PublicUpdateSubscriptionStatusRequest } from '../models/PublicUpdateSubscriptionStatusRequest';
import { SubscriptionDefinitionsResponse } from '../models/SubscriptionDefinitionsResponse';
import { DefinitionApiRequestFactory, DefinitionApiResponseProcessor } from "../apis/DefinitionApi";
export declare class PromiseDefinitionApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefinitionApiRequestFactory, responseProcessor?: DefinitionApiResponseProcessor);
    getPageWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SubscriptionDefinitionsResponse>>;
    getPage(_options?: Configuration): Promise<SubscriptionDefinitionsResponse>;
}
import { StatusApiRequestFactory, StatusApiResponseProcessor } from "../apis/StatusApi";
export declare class PromiseStatusApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: StatusApiRequestFactory, responseProcessor?: StatusApiResponseProcessor);
    getEmailStatusWithHttpInfo(emailAddress: string, _options?: Configuration): Promise<HttpInfo<PublicSubscriptionStatusesResponse>>;
    getEmailStatus(emailAddress: string, _options?: Configuration): Promise<PublicSubscriptionStatusesResponse>;
    subscribeWithHttpInfo(publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, _options?: Configuration): Promise<HttpInfo<PublicSubscriptionStatus>>;
    subscribe(publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, _options?: Configuration): Promise<PublicSubscriptionStatus>;
    unsubscribeWithHttpInfo(publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, _options?: Configuration): Promise<HttpInfo<PublicSubscriptionStatus>>;
    unsubscribe(publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, _options?: Configuration): Promise<PublicSubscriptionStatus>;
}
