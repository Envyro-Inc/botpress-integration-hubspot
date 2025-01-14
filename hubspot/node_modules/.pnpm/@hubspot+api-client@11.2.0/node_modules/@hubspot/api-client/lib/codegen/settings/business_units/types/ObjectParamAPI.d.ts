import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponsePublicBusinessUnitNoPaging } from '../models/CollectionResponsePublicBusinessUnitNoPaging';
import { BusinessUnitApiRequestFactory, BusinessUnitApiResponseProcessor } from "../apis/BusinessUnitApi";
export interface BusinessUnitApiGetByUserIDRequest {
    userId: string;
    properties?: Array<string>;
    name?: Array<string>;
}
export declare class ObjectBusinessUnitApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BusinessUnitApiRequestFactory, responseProcessor?: BusinessUnitApiResponseProcessor);
    getByUserIDWithHttpInfo(param: BusinessUnitApiGetByUserIDRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicBusinessUnitNoPaging>>;
    getByUserID(param: BusinessUnitApiGetByUserIDRequest, options?: Configuration): Promise<CollectionResponsePublicBusinessUnitNoPaging>;
}
