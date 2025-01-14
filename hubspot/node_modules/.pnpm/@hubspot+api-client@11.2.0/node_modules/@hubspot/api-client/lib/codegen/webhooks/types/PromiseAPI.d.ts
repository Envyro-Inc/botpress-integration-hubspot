import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
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
export declare class PromiseSettingsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor);
    clearWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<void>>;
    clear(appId: number, _options?: Configuration): Promise<void>;
    configureWithHttpInfo(appId: number, settingsChangeRequest: SettingsChangeRequest, _options?: Configuration): Promise<HttpInfo<SettingsResponse>>;
    configure(appId: number, settingsChangeRequest: SettingsChangeRequest, _options?: Configuration): Promise<SettingsResponse>;
    getAllWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<SettingsResponse>>;
    getAll(appId: number, _options?: Configuration): Promise<SettingsResponse>;
}
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor } from "../apis/SubscriptionsApi";
export declare class PromiseSubscriptionsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor);
    archiveWithHttpInfo(subscriptionId: number, appId: number, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(subscriptionId: number, appId: number, _options?: Configuration): Promise<void>;
    createWithHttpInfo(appId: number, subscriptionCreateRequest: SubscriptionCreateRequest, _options?: Configuration): Promise<HttpInfo<SubscriptionResponse>>;
    create(appId: number, subscriptionCreateRequest: SubscriptionCreateRequest, _options?: Configuration): Promise<SubscriptionResponse>;
    getAllWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<SubscriptionListResponse>>;
    getAll(appId: number, _options?: Configuration): Promise<SubscriptionListResponse>;
    getByIdWithHttpInfo(subscriptionId: number, appId: number, _options?: Configuration): Promise<HttpInfo<SubscriptionResponse>>;
    getById(subscriptionId: number, appId: number, _options?: Configuration): Promise<SubscriptionResponse>;
    updateWithHttpInfo(subscriptionId: number, appId: number, subscriptionPatchRequest: SubscriptionPatchRequest, _options?: Configuration): Promise<HttpInfo<SubscriptionResponse>>;
    update(subscriptionId: number, appId: number, subscriptionPatchRequest: SubscriptionPatchRequest, _options?: Configuration): Promise<SubscriptionResponse>;
    updateBatchWithHttpInfo(appId: number, batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest, _options?: Configuration): Promise<HttpInfo<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors>>;
    updateBatch(appId: number, batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest, _options?: Configuration): Promise<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors>;
}
