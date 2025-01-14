import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CollectionResponseAssociationSpecWithLabelNoPaging } from '../models/CollectionResponseAssociationSpecWithLabelNoPaging';
import { PublicAssociationDefinitionCreateRequest } from '../models/PublicAssociationDefinitionCreateRequest';
import { PublicAssociationDefinitionUpdateRequest } from '../models/PublicAssociationDefinitionUpdateRequest';
export declare class DefinitionsApiRequestFactory extends BaseAPIRequestFactory {
    archive(fromObjectType: string, toObjectType: string, associationTypeId: number, _options?: Configuration): Promise<RequestContext>;
    create(fromObjectType: string, toObjectType: string, publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest, _options?: Configuration): Promise<RequestContext>;
    getAll(fromObjectType: string, toObjectType: string, _options?: Configuration): Promise<RequestContext>;
    update(fromObjectType: string, toObjectType: string, publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class DefinitionsApiResponseProcessor {
    archiveWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>>;
    getAllWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>>;
    updateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
}
