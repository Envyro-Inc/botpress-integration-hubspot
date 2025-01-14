import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponsePublicAssociationDefinitionNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionNoPaging';
import { TypesApiRequestFactory, TypesApiResponseProcessor } from "../apis/TypesApi";
export declare class PromiseTypesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TypesApiRequestFactory, responseProcessor?: TypesApiResponseProcessor);
    getAllWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionNoPaging>>;
    getAll(fromObjectType: string, toObjectType: string, _options?: Configuration): Promise<CollectionResponsePublicAssociationDefinitionNoPaging>;
}
