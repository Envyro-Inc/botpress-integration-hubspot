import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { BatchInputPropertyCreate } from '../models/BatchInputPropertyCreate';
import { BatchInputPropertyName } from '../models/BatchInputPropertyName';
import { BatchReadInputPropertyName } from '../models/BatchReadInputPropertyName';
import { BatchResponseProperty } from '../models/BatchResponseProperty';
import { BatchResponsePropertyWithErrors } from '../models/BatchResponsePropertyWithErrors';
import { CollectionResponsePropertyGroupNoPaging } from '../models/CollectionResponsePropertyGroupNoPaging';
import { CollectionResponsePropertyNoPaging } from '../models/CollectionResponsePropertyNoPaging';
import { Property } from '../models/Property';
import { PropertyCreate } from '../models/PropertyCreate';
import { PropertyGroup } from '../models/PropertyGroup';
import { PropertyGroupCreate } from '../models/PropertyGroupCreate';
import { PropertyGroupUpdate } from '../models/PropertyGroupUpdate';
import { PropertyUpdate } from '../models/PropertyUpdate';
import { BatchApiRequestFactory, BatchApiResponseProcessor } from "../apis/BatchApi";
export declare class ObservableBatchApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor);
    archiveWithHttpInfo(objectType: string, batchInputPropertyName: BatchInputPropertyName, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(objectType: string, batchInputPropertyName: BatchInputPropertyName, _options?: Configuration): Observable<void>;
    createWithHttpInfo(objectType: string, batchInputPropertyCreate: BatchInputPropertyCreate, _options?: Configuration): Observable<HttpInfo<BatchResponseProperty | BatchResponsePropertyWithErrors>>;
    create(objectType: string, batchInputPropertyCreate: BatchInputPropertyCreate, _options?: Configuration): Observable<BatchResponseProperty | BatchResponsePropertyWithErrors>;
    readWithHttpInfo(objectType: string, batchReadInputPropertyName: BatchReadInputPropertyName, _options?: Configuration): Observable<HttpInfo<BatchResponseProperty | BatchResponsePropertyWithErrors>>;
    read(objectType: string, batchReadInputPropertyName: BatchReadInputPropertyName, _options?: Configuration): Observable<BatchResponseProperty | BatchResponsePropertyWithErrors>;
}
import { CoreApiRequestFactory, CoreApiResponseProcessor } from "../apis/CoreApi";
export declare class ObservableCoreApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CoreApiRequestFactory, responseProcessor?: CoreApiResponseProcessor);
    archiveWithHttpInfo(objectType: string, propertyName: string, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(objectType: string, propertyName: string, _options?: Configuration): Observable<void>;
    createWithHttpInfo(objectType: string, propertyCreate: PropertyCreate, _options?: Configuration): Observable<HttpInfo<Property>>;
    create(objectType: string, propertyCreate: PropertyCreate, _options?: Configuration): Observable<Property>;
    getAllWithHttpInfo(objectType: string, archived?: boolean, properties?: string, _options?: Configuration): Observable<HttpInfo<CollectionResponsePropertyNoPaging>>;
    getAll(objectType: string, archived?: boolean, properties?: string, _options?: Configuration): Observable<CollectionResponsePropertyNoPaging>;
    getByNameWithHttpInfo(objectType: string, propertyName: string, archived?: boolean, properties?: string, _options?: Configuration): Observable<HttpInfo<Property>>;
    getByName(objectType: string, propertyName: string, archived?: boolean, properties?: string, _options?: Configuration): Observable<Property>;
    updateWithHttpInfo(objectType: string, propertyName: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Observable<HttpInfo<Property>>;
    update(objectType: string, propertyName: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Observable<Property>;
}
import { GroupsApiRequestFactory, GroupsApiResponseProcessor } from "../apis/GroupsApi";
export declare class ObservableGroupsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: GroupsApiRequestFactory, responseProcessor?: GroupsApiResponseProcessor);
    archiveWithHttpInfo(objectType: string, groupName: string, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(objectType: string, groupName: string, _options?: Configuration): Observable<void>;
    createWithHttpInfo(objectType: string, propertyGroupCreate: PropertyGroupCreate, _options?: Configuration): Observable<HttpInfo<PropertyGroup>>;
    create(objectType: string, propertyGroupCreate: PropertyGroupCreate, _options?: Configuration): Observable<PropertyGroup>;
    getAllWithHttpInfo(objectType: string, _options?: Configuration): Observable<HttpInfo<CollectionResponsePropertyGroupNoPaging>>;
    getAll(objectType: string, _options?: Configuration): Observable<CollectionResponsePropertyGroupNoPaging>;
    getByNameWithHttpInfo(objectType: string, groupName: string, _options?: Configuration): Observable<HttpInfo<PropertyGroup>>;
    getByName(objectType: string, groupName: string, _options?: Configuration): Observable<PropertyGroup>;
    updateWithHttpInfo(objectType: string, groupName: string, propertyGroupUpdate: PropertyGroupUpdate, _options?: Configuration): Observable<HttpInfo<PropertyGroup>>;
    update(objectType: string, groupName: string, propertyGroupUpdate: PropertyGroupUpdate, _options?: Configuration): Observable<PropertyGroup>;
}
