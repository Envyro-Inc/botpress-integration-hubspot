import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { ExternalSettings } from '../models/ExternalSettings';
import { SettingsApiRequestFactory, SettingsApiResponseProcessor } from "../apis/SettingsApi";
export declare class ObservableSettingsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor);
    archiveWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(appId: number, _options?: Configuration): Observable<void>;
    getByIdWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<ExternalSettings>>;
    getById(appId: number, _options?: Configuration): Observable<ExternalSettings>;
    replaceWithHttpInfo(appId: number, externalSettings: ExternalSettings, _options?: Configuration): Observable<HttpInfo<ExternalSettings>>;
    replace(appId: number, externalSettings: ExternalSettings, _options?: Configuration): Observable<ExternalSettings>;
}
