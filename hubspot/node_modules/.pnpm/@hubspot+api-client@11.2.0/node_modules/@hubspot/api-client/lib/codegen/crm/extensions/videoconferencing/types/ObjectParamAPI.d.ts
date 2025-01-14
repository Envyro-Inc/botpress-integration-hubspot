import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { ExternalSettings } from '../models/ExternalSettings';
import { SettingsApiRequestFactory, SettingsApiResponseProcessor } from "../apis/SettingsApi";
export interface SettingsApiArchiveRequest {
    appId: number;
}
export interface SettingsApiGetByIdRequest {
    appId: number;
}
export interface SettingsApiReplaceRequest {
    appId: number;
    externalSettings: ExternalSettings;
}
export declare class ObjectSettingsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor);
    archiveWithHttpInfo(param: SettingsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: SettingsApiArchiveRequest, options?: Configuration): Promise<void>;
    getByIdWithHttpInfo(param: SettingsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<ExternalSettings>>;
    getById(param: SettingsApiGetByIdRequest, options?: Configuration): Promise<ExternalSettings>;
    replaceWithHttpInfo(param: SettingsApiReplaceRequest, options?: Configuration): Promise<HttpInfo<ExternalSettings>>;
    replace(param: SettingsApiReplaceRequest, options?: Configuration): Promise<ExternalSettings>;
}
