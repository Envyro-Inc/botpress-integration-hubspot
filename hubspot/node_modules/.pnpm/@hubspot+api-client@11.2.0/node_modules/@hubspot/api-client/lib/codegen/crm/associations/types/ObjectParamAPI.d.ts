import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { BatchInputPublicAssociation } from '../models/BatchInputPublicAssociation';
import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponsePublicAssociation } from '../models/BatchResponsePublicAssociation';
import { BatchResponsePublicAssociationMulti } from '../models/BatchResponsePublicAssociationMulti';
import { BatchResponsePublicAssociationMultiWithErrors } from '../models/BatchResponsePublicAssociationMultiWithErrors';
import { BatchResponsePublicAssociationWithErrors } from '../models/BatchResponsePublicAssociationWithErrors';
import { BatchApiRequestFactory, BatchApiResponseProcessor } from "../apis/BatchApi";
export interface BatchApiArchiveRequest {
    fromObjectType: string;
    toObjectType: string;
    batchInputPublicAssociation: BatchInputPublicAssociation;
}
export interface BatchApiCreateRequest {
    fromObjectType: string;
    toObjectType: string;
    batchInputPublicAssociation: BatchInputPublicAssociation;
}
export interface BatchApiReadRequest {
    fromObjectType: string;
    toObjectType: string;
    batchInputPublicObjectId: BatchInputPublicObjectId;
}
export declare class ObjectBatchApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor);
    archiveWithHttpInfo(param: BatchApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: BatchApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: BatchApiCreateRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePublicAssociation | BatchResponsePublicAssociationWithErrors>>;
    create(param: BatchApiCreateRequest, options?: Configuration): Promise<BatchResponsePublicAssociation | BatchResponsePublicAssociationWithErrors>;
    readWithHttpInfo(param: BatchApiReadRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePublicAssociationMultiWithErrors | BatchResponsePublicAssociationMulti>>;
    read(param: BatchApiReadRequest, options?: Configuration): Promise<BatchResponsePublicAssociationMultiWithErrors | BatchResponsePublicAssociationMulti>;
}
