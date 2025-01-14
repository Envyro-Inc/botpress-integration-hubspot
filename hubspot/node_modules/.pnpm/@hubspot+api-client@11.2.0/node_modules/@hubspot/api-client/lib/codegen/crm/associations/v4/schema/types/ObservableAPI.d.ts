import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { CollectionResponseAssociationSpecWithLabelNoPaging } from '../models/CollectionResponseAssociationSpecWithLabelNoPaging';
import { PublicAssociationDefinitionCreateRequest } from '../models/PublicAssociationDefinitionCreateRequest';
import { PublicAssociationDefinitionUpdateRequest } from '../models/PublicAssociationDefinitionUpdateRequest';
import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor } from "../apis/DefinitionsApi";
export declare class ObservableDefinitionsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DefinitionsApiRequestFactory, responseProcessor?: DefinitionsApiResponseProcessor);
    archiveWithHttpInfo(fromObjectType: string, toObjectType: string, associationTypeId: number, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(fromObjectType: string, toObjectType: string, associationTypeId: number, _options?: Configuration): Observable<void>;
    createWithHttpInfo(fromObjectType: string, toObjectType: string, publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest, _options?: Configuration): Observable<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>>;
    create(fromObjectType: string, toObjectType: string, publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest, _options?: Configuration): Observable<CollectionResponseAssociationSpecWithLabelNoPaging>;
    getAllWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>>;
    getAll(fromObjectType: string, toObjectType: string, _options?: Configuration): Observable<CollectionResponseAssociationSpecWithLabelNoPaging>;
    updateWithHttpInfo(fromObjectType: string, toObjectType: string, publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest, _options?: Configuration): Observable<HttpInfo<void>>;
    update(fromObjectType: string, toObjectType: string, publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest, _options?: Configuration): Observable<void>;
}
