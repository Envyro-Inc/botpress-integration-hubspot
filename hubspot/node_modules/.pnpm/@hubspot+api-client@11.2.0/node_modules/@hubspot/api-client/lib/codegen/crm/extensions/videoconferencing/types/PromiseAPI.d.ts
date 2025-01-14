import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { ExternalSettings } from '../models/ExternalSettings';
import { SettingsApiRequestFactory, SettingsApiResponseProcessor } from "../apis/SettingsApi";
export declare class PromiseSettingsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor);
    archiveWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(appId: number, _options?: Configuration): Promise<void>;
    getByIdWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<ExternalSettings>>;
    getById(appId: number, _options?: Configuration): Promise<ExternalSettings>;
    replaceWithHttpInfo(appId: number, externalSettings: ExternalSettings, _options?: Configuration): Promise<HttpInfo<ExternalSettings>>;
    replace(appId: number, externalSettings: ExternalSettings, _options?: Configuration): Promise<ExternalSettings>;
}
