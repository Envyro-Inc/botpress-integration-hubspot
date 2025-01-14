import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { BatchInputSubscriptionBatchUpdateRequest } from '../models/BatchInputSubscriptionBatchUpdateRequest';
import { BatchResponseSubscriptionResponse } from '../models/BatchResponseSubscriptionResponse';
import { BatchResponseSubscriptionResponseWithErrors } from '../models/BatchResponseSubscriptionResponseWithErrors';
import { SettingsChangeRequest } from '../models/SettingsChangeRequest';
import { SettingsResponse } from '../models/SettingsResponse';
import { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest';
import { SubscriptionListResponse } from '../models/SubscriptionListResponse';
import { SubscriptionPatchRequest } from '../models/SubscriptionPatchRequest';
import { SubscriptionResponse } from '../models/SubscriptionResponse';
import { SettingsApiRequestFactory, SettingsApiResponseProcessor } from "../apis/SettingsApi";
export declare class ObservableSettingsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor);
    clearWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<void>>;
    clear(appId: number, _options?: Configuration): Observable<void>;
    configureWithHttpInfo(appId: number, settingsChangeRequest: SettingsChangeRequest, _options?: Configuration): Observable<HttpInfo<SettingsResponse>>;
    configure(appId: number, settingsChangeRequest: SettingsChangeRequest, _options?: Configuration): Observable<SettingsResponse>;
    getAllWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<SettingsResponse>>;
    getAll(appId: number, _options?: Configuration): Observable<SettingsResponse>;
}
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor } from "../apis/SubscriptionsApi";
export declare class ObservableSubscriptionsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor);
    archiveWithHttpInfo(subscriptionId: number, appId: number, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(subscriptionId: number, appId: number, _options?: Configuration): Observable<void>;
    createWithHttpInfo(appId: number, subscriptionCreateRequest: SubscriptionCreateRequest, _options?: Configuration): Observable<HttpInfo<SubscriptionResponse>>;
    create(appId: number, subscriptionCreateRequest: SubscriptionCreateRequest, _options?: Configuration): Observable<SubscriptionResponse>;
    getAllWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<SubscriptionListResponse>>;
    getAll(appId: number, _options?: Configuration): Observable<SubscriptionListResponse>;
    getByIdWithHttpInfo(subscriptionId: number, appId: number, _options?: Configuration): Observable<HttpInfo<SubscriptionResponse>>;
    getById(subscriptionId: number, appId: number, _options?: Configuration): Observable<SubscriptionResponse>;
    updateWithHttpInfo(subscriptionId: number, appId: number, subscriptionPatchRequest: SubscriptionPatchRequest, _options?: Configuration): Observable<HttpInfo<SubscriptionResponse>>;
    update(subscriptionId: number, appId: number, subscriptionPatchRequest: SubscriptionPatchRequest, _options?: Configuration): Observable<SubscriptionResponse>;
    updateBatchWithHttpInfo(appId: number, batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest, _options?: Configuration): Observable<HttpInfo<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors>>;
    updateBatch(appId: number, batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest, _options?: Configuration): Observable<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors>;
}
