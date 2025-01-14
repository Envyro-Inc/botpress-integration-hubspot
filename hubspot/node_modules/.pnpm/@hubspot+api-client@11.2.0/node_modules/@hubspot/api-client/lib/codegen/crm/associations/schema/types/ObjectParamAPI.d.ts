import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponsePublicAssociationDefinitionNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionNoPaging';
import { TypesApiRequestFactory, TypesApiResponseProcessor } from "../apis/TypesApi";
export interface TypesApiGetAllRequest {
    fromObjectType: string;
    toObjectType: string;
}
export declare class ObjectTypesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TypesApiRequestFactory, responseProcessor?: TypesApiResponseProcessor);
    getAllWithHttpInfo(param: TypesApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionNoPaging>>;
    getAll(param: TypesApiGetAllRequest, options?: Configuration): Promise<CollectionResponsePublicAssociationDefinitionNoPaging>;
}
