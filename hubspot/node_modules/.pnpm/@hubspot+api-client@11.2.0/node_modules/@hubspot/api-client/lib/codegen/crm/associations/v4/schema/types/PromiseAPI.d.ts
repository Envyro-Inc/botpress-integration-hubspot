import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponseAssociationSpecWithLabelNoPaging } from '../models/CollectionResponseAssociationSpecWithLabelNoPaging';
import { PublicAssociationDefinitionCreateRequest } from '../models/PublicAssociationDefinitionCreateRequest';
import { PublicAssociationDefinitionUpdateRequest } from '../models/PublicAssociationDefinitionUpdateRequest';
import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor } from "../apis/DefinitionsApi";
export declare class PromiseDefinitionsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefinitionsApiRequestFactory, responseProcessor?: DefinitionsApiResponseProcessor);
    archiveWithHttpInfo(fromObjectType: string, toObjectType: string, associationTypeId: number, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(fromObjectType: string, toObjectType: string, associationTypeId: number, _options?: Configuration): Promise<void>;
    createWithHttpInfo(fromObjectType: string, toObjectType: string, publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest, _options?: Configuration): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>>;
    create(fromObjectType: string, toObjectType: string, publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest, _options?: Configuration): Promise<CollectionResponseAssociationSpecWithLabelNoPaging>;
    getAllWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: Configuration): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>>;
    getAll(fromObjectType: string, toObjectType: string, _options?: Configuration): Promise<CollectionResponseAssociationSpecWithLabelNoPaging>;
    updateWithHttpInfo(fromObjectType: string, toObjectType: string, publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest, _options?: Configuration): Promise<HttpInfo<void>>;
    update(fromObjectType: string, toObjectType: string, publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest, _options?: Configuration): Promise<void>;
}
