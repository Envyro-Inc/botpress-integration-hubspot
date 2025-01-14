import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { PublicSubscriptionStatus } from '../models/PublicSubscriptionStatus';
import { PublicSubscriptionStatusesResponse } from '../models/PublicSubscriptionStatusesResponse';
import { PublicUpdateSubscriptionStatusRequest } from '../models/PublicUpdateSubscriptionStatusRequest';
import { SubscriptionDefinitionsResponse } from '../models/SubscriptionDefinitionsResponse';
import { DefinitionApiRequestFactory, DefinitionApiResponseProcessor } from "../apis/DefinitionApi";
export declare class ObservableDefinitionApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DefinitionApiRequestFactory, responseProcessor?: DefinitionApiResponseProcessor);
    getPageWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SubscriptionDefinitionsResponse>>;
    getPage(_options?: Configuration): Observable<SubscriptionDefinitionsResponse>;
}
import { StatusApiRequestFactory, StatusApiResponseProcessor } from "../apis/StatusApi";
export declare class ObservableStatusApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: StatusApiRequestFactory, responseProcessor?: StatusApiResponseProcessor);
    getEmailStatusWithHttpInfo(emailAddress: string, _options?: Configuration): Observable<HttpInfo<PublicSubscriptionStatusesResponse>>;
    getEmailStatus(emailAddress: string, _options?: Configuration): Observable<PublicSubscriptionStatusesResponse>;
    subscribeWithHttpInfo(publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, _options?: Configuration): Observable<HttpInfo<PublicSubscriptionStatus>>;
    subscribe(publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, _options?: Configuration): Observable<PublicSubscriptionStatus>;
    unsubscribeWithHttpInfo(publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, _options?: Configuration): Observable<HttpInfo<PublicSubscriptionStatus>>;
    unsubscribe(publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, _options?: Configuration): Observable<PublicSubscriptionStatus>;
}
