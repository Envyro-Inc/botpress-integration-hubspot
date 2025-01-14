import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
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
export interface BatchApiArchiveRequest {
    objectType: string;
    batchInputPropertyName: BatchInputPropertyName;
}
export interface BatchApiCreateRequest {
    objectType: string;
    batchInputPropertyCreate: BatchInputPropertyCreate;
}
export interface BatchApiReadRequest {
    objectType: string;
    batchReadInputPropertyName: BatchReadInputPropertyName;
}
export declare class ObjectBatchApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor);
    archiveWithHttpInfo(param: BatchApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: BatchApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: BatchApiCreateRequest, options?: Configuration): Promise<HttpInfo<BatchResponseProperty | BatchResponsePropertyWithErrors>>;
    create(param: BatchApiCreateRequest, options?: Configuration): Promise<BatchResponseProperty | BatchResponsePropertyWithErrors>;
    readWithHttpInfo(param: BatchApiReadRequest, options?: Configuration): Promise<HttpInfo<BatchResponseProperty | BatchResponsePropertyWithErrors>>;
    read(param: BatchApiReadRequest, options?: Configuration): Promise<BatchResponseProperty | BatchResponsePropertyWithErrors>;
}
import { CoreApiRequestFactory, CoreApiResponseProcessor } from "../apis/CoreApi";
export interface CoreApiArchiveRequest {
    objectType: string;
    propertyName: string;
}
export interface CoreApiCreateRequest {
    objectType: string;
    propertyCreate: PropertyCreate;
}
export interface CoreApiGetAllRequest {
    objectType: string;
    archived?: boolean;
    properties?: string;
}
export interface CoreApiGetByNameRequest {
    objectType: string;
    propertyName: string;
    archived?: boolean;
    properties?: string;
}
export interface CoreApiUpdateRequest {
    objectType: string;
    propertyName: string;
    propertyUpdate: PropertyUpdate;
}
export declare class ObjectCoreApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CoreApiRequestFactory, responseProcessor?: CoreApiResponseProcessor);
    archiveWithHttpInfo(param: CoreApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: CoreApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: CoreApiCreateRequest, options?: Configuration): Promise<HttpInfo<Property>>;
    create(param: CoreApiCreateRequest, options?: Configuration): Promise<Property>;
    getAllWithHttpInfo(param: CoreApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePropertyNoPaging>>;
    getAll(param: CoreApiGetAllRequest, options?: Configuration): Promise<CollectionResponsePropertyNoPaging>;
    getByNameWithHttpInfo(param: CoreApiGetByNameRequest, options?: Configuration): Promise<HttpInfo<Property>>;
    getByName(param: CoreApiGetByNameRequest, options?: Configuration): Promise<Property>;
    updateWithHttpInfo(param: CoreApiUpdateRequest, options?: Configuration): Promise<HttpInfo<Property>>;
    update(param: CoreApiUpdateRequest, options?: Configuration): Promise<Property>;
}
import { GroupsApiRequestFactory, GroupsApiResponseProcessor } from "../apis/GroupsApi";
export interface GroupsApiArchiveRequest {
    objectType: string;
    groupName: string;
}
export interface GroupsApiCreateRequest {
    objectType: string;
    propertyGroupCreate: PropertyGroupCreate;
}
export interface GroupsApiGetAllRequest {
    objectType: string;
}
export interface GroupsApiGetByNameRequest {
    objectType: string;
    groupName: string;
}
export interface GroupsApiUpdateRequest {
    objectType: string;
    groupName: string;
    propertyGroupUpdate: PropertyGroupUpdate;
}
export declare class ObjectGroupsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: GroupsApiRequestFactory, responseProcessor?: GroupsApiResponseProcessor);
    archiveWithHttpInfo(param: GroupsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: GroupsApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: GroupsApiCreateRequest, options?: Configuration): Promise<HttpInfo<PropertyGroup>>;
    create(param: GroupsApiCreateRequest, options?: Configuration): Promise<PropertyGroup>;
    getAllWithHttpInfo(param: GroupsApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePropertyGroupNoPaging>>;
    getAll(param: GroupsApiGetAllRequest, options?: Configuration): Promise<CollectionResponsePropertyGroupNoPaging>;
    getByNameWithHttpInfo(param: GroupsApiGetByNameRequest, options?: Configuration): Promise<HttpInfo<PropertyGroup>>;
    getByName(param: GroupsApiGetByNameRequest, options?: Configuration): Promise<PropertyGroup>;
    updateWithHttpInfo(param: GroupsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<PropertyGroup>>;
    update(param: GroupsApiUpdateRequest, options?: Configuration): Promise<PropertyGroup>;
}
