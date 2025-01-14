import { HttpFile, HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { ActionResponse } from '../models/ActionResponse';
import { CollectionResponsePublicImportErrorForwardPaging } from '../models/CollectionResponsePublicImportErrorForwardPaging';
import { CollectionResponsePublicImportResponse } from '../models/CollectionResponsePublicImportResponse';
import { PublicImportResponse } from '../models/PublicImportResponse';
import { CoreApiRequestFactory, CoreApiResponseProcessor } from "../apis/CoreApi";
export interface CoreApiCancelRequest {
    importId: number;
}
export interface CoreApiCreateRequest {
    files?: HttpFile;
    importRequest?: string;
}
export interface CoreApiGetByIdRequest {
    importId: number;
}
export interface CoreApiGetPageRequest {
    after?: string;
    before?: string;
    limit?: number;
}
export declare class ObjectCoreApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CoreApiRequestFactory, responseProcessor?: CoreApiResponseProcessor);
    cancelWithHttpInfo(param: CoreApiCancelRequest, options?: Configuration): Promise<HttpInfo<ActionResponse>>;
    cancel(param: CoreApiCancelRequest, options?: Configuration): Promise<ActionResponse>;
    createWithHttpInfo(param?: CoreApiCreateRequest, options?: Configuration): Promise<HttpInfo<PublicImportResponse>>;
    create(param?: CoreApiCreateRequest, options?: Configuration): Promise<PublicImportResponse>;
    getByIdWithHttpInfo(param: CoreApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<PublicImportResponse>>;
    getById(param: CoreApiGetByIdRequest, options?: Configuration): Promise<PublicImportResponse>;
    getPageWithHttpInfo(param?: CoreApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicImportResponse>>;
    getPage(param?: CoreApiGetPageRequest, options?: Configuration): Promise<CollectionResponsePublicImportResponse>;
}
import { PublicImportsApiRequestFactory, PublicImportsApiResponseProcessor } from "../apis/PublicImportsApi";
export interface PublicImportsApiGetErrorsRequest {
    importId: number;
    after?: string;
    limit?: number;
}
export declare class ObjectPublicImportsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PublicImportsApiRequestFactory, responseProcessor?: PublicImportsApiResponseProcessor);
    getErrorsWithHttpInfo(param: PublicImportsApiGetErrorsRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicImportErrorForwardPaging>>;
    getErrors(param: PublicImportsApiGetErrorsRequest, options?: Configuration): Promise<CollectionResponsePublicImportErrorForwardPaging>;
}
