import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponseAssociationSpecWithLabelNoPaging } from '../models/CollectionResponseAssociationSpecWithLabelNoPaging';
import { PublicAssociationDefinitionCreateRequest } from '../models/PublicAssociationDefinitionCreateRequest';
import { PublicAssociationDefinitionUpdateRequest } from '../models/PublicAssociationDefinitionUpdateRequest';
import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor } from "../apis/DefinitionsApi";
export interface DefinitionsApiArchiveRequest {
    fromObjectType: string;
    toObjectType: string;
    associationTypeId: number;
}
export interface DefinitionsApiCreateRequest {
    fromObjectType: string;
    toObjectType: string;
    publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest;
}
export interface DefinitionsApiGetAllRequest {
    fromObjectType: string;
    toObjectType: string;
}
export interface DefinitionsApiUpdateRequest {
    fromObjectType: string;
    toObjectType: string;
    publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest;
}
export declare class ObjectDefinitionsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefinitionsApiRequestFactory, responseProcessor?: DefinitionsApiResponseProcessor);
    archiveWithHttpInfo(param: DefinitionsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: DefinitionsApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: DefinitionsApiCreateRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>>;
    create(param: DefinitionsApiCreateRequest, options?: Configuration): Promise<CollectionResponseAssociationSpecWithLabelNoPaging>;
    getAllWithHttpInfo(param: DefinitionsApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>>;
    getAll(param: DefinitionsApiGetAllRequest, options?: Configuration): Promise<CollectionResponseAssociationSpecWithLabelNoPaging>;
    updateWithHttpInfo(param: DefinitionsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<void>>;
    update(param: DefinitionsApiUpdateRequest, options?: Configuration): Promise<void>;
}
