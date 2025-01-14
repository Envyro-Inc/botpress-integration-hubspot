import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponseWithTotalDomainForwardPaging } from '../models/CollectionResponseWithTotalDomainForwardPaging';
import { Domain } from '../models/Domain';
import { DomainsApiRequestFactory, DomainsApiResponseProcessor } from "../apis/DomainsApi";
export declare class PromiseDomainsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DomainsApiRequestFactory, responseProcessor?: DomainsApiResponseProcessor);
    getByIdWithHttpInfo(domainId: string, _options?: Configuration): Promise<HttpInfo<Domain>>;
    getById(domainId: string, _options?: Configuration): Promise<Domain>;
    getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalDomainForwardPaging>>;
    getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<CollectionResponseWithTotalDomainForwardPaging>;
}
