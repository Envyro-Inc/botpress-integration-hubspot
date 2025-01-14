import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponseWithTotalUrlMappingForwardPaging } from '../models/CollectionResponseWithTotalUrlMappingForwardPaging';
import { UrlMapping } from '../models/UrlMapping';
import { UrlMappingCreateRequestBody } from '../models/UrlMappingCreateRequestBody';
import { RedirectsApiRequestFactory, RedirectsApiResponseProcessor } from "../apis/RedirectsApi";
export interface RedirectsApiArchiveRequest {
    urlRedirectId: string;
}
export interface RedirectsApiCreateRequest {
    urlMappingCreateRequestBody: UrlMappingCreateRequestBody;
}
export interface RedirectsApiGetByIdRequest {
    urlRedirectId: string;
}
export interface RedirectsApiGetPageRequest {
    createdAt?: Date;
    createdAfter?: Date;
    createdBefore?: Date;
    updatedAt?: Date;
    updatedAfter?: Date;
    updatedBefore?: Date;
    sort?: Array<string>;
    after?: string;
    limit?: number;
    archived?: boolean;
}
export interface RedirectsApiUpdateRequest {
    urlRedirectId: string;
    urlMapping: UrlMapping;
}
export declare class ObjectRedirectsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: RedirectsApiRequestFactory, responseProcessor?: RedirectsApiResponseProcessor);
    archiveWithHttpInfo(param: RedirectsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: RedirectsApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: RedirectsApiCreateRequest, options?: Configuration): Promise<HttpInfo<UrlMapping>>;
    create(param: RedirectsApiCreateRequest, options?: Configuration): Promise<UrlMapping>;
    getByIdWithHttpInfo(param: RedirectsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<UrlMapping>>;
    getById(param: RedirectsApiGetByIdRequest, options?: Configuration): Promise<UrlMapping>;
    getPageWithHttpInfo(param?: RedirectsApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalUrlMappingForwardPaging>>;
    getPage(param?: RedirectsApiGetPageRequest, options?: Configuration): Promise<CollectionResponseWithTotalUrlMappingForwardPaging>;
    updateWithHttpInfo(param: RedirectsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<UrlMapping>>;
    update(param: RedirectsApiUpdateRequest, options?: Configuration): Promise<UrlMapping>;
}
