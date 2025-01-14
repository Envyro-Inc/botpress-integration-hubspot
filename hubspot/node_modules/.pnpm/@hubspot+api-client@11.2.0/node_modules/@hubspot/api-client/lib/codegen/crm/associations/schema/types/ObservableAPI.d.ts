import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { CollectionResponsePublicAssociationDefinitionNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionNoPaging';
import { TypesApiRequestFactory, TypesApiResponseProcessor } from "../apis/TypesApi";
export declare class ObservableTypesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TypesApiRequestFactory, responseProcessor?: TypesApiResponseProcessor);
    getAllWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicAssociationDefinitionNoPaging>>;
    getAll(fromObjectType: string, toObjectType: string, _options?: Configuration): Observable<CollectionResponsePublicAssociationDefinitionNoPaging>;
}
