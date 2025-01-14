import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponseWithTotalUrlMappingForwardPaging } from '../models/CollectionResponseWithTotalUrlMappingForwardPaging';
import { UrlMapping } from '../models/UrlMapping';
import { UrlMappingCreateRequestBody } from '../models/UrlMappingCreateRequestBody';
import { RedirectsApiRequestFactory, RedirectsApiResponseProcessor } from "../apis/RedirectsApi";
export declare class PromiseRedirectsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: RedirectsApiRequestFactory, responseProcessor?: RedirectsApiResponseProcessor);
    archiveWithHttpInfo(urlRedirectId: string, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(urlRedirectId: string, _options?: Configuration): Promise<void>;
    createWithHttpInfo(urlMappingCreateRequestBody: UrlMappingCreateRequestBody, _options?: Configuration): Promise<HttpInfo<UrlMapping>>;
    create(urlMappingCreateRequestBody: UrlMappingCreateRequestBody, _options?: Configuration): Promise<UrlMapping>;
    getByIdWithHttpInfo(urlRedirectId: string, _options?: Configuration): Promise<HttpInfo<UrlMapping>>;
    getById(urlRedirectId: string, _options?: Configuration): Promise<UrlMapping>;
    getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalUrlMappingForwardPaging>>;
    getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<CollectionResponseWithTotalUrlMappingForwardPaging>;
    updateWithHttpInfo(urlRedirectId: string, urlMapping: UrlMapping, _options?: Configuration): Promise<HttpInfo<UrlMapping>>;
    update(urlRedirectId: string, urlMapping: UrlMapping, _options?: Configuration): Promise<UrlMapping>;
}
