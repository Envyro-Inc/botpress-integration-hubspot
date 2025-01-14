import { HttpFile, HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { ActionResponse } from '../models/ActionResponse';
import { CollectionResponsePublicImportErrorForwardPaging } from '../models/CollectionResponsePublicImportErrorForwardPaging';
import { CollectionResponsePublicImportResponse } from '../models/CollectionResponsePublicImportResponse';
import { PublicImportResponse } from '../models/PublicImportResponse';
import { CoreApiRequestFactory, CoreApiResponseProcessor } from "../apis/CoreApi";
export declare class PromiseCoreApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CoreApiRequestFactory, responseProcessor?: CoreApiResponseProcessor);
    cancelWithHttpInfo(importId: number, _options?: Configuration): Promise<HttpInfo<ActionResponse>>;
    cancel(importId: number, _options?: Configuration): Promise<ActionResponse>;
    createWithHttpInfo(files?: HttpFile, importRequest?: string, _options?: Configuration): Promise<HttpInfo<PublicImportResponse>>;
    create(files?: HttpFile, importRequest?: string, _options?: Configuration): Promise<PublicImportResponse>;
    getByIdWithHttpInfo(importId: number, _options?: Configuration): Promise<HttpInfo<PublicImportResponse>>;
    getById(importId: number, _options?: Configuration): Promise<PublicImportResponse>;
    getPageWithHttpInfo(after?: string, before?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicImportResponse>>;
    getPage(after?: string, before?: string, limit?: number, _options?: Configuration): Promise<CollectionResponsePublicImportResponse>;
}
import { PublicImportsApiRequestFactory, PublicImportsApiResponseProcessor } from "../apis/PublicImportsApi";
export declare class PromisePublicImportsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PublicImportsApiRequestFactory, responseProcessor?: PublicImportsApiResponseProcessor);
    getErrorsWithHttpInfo(importId: number, after?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicImportErrorForwardPaging>>;
    getErrors(importId: number, after?: string, limit?: number, _options?: Configuration): Promise<CollectionResponsePublicImportErrorForwardPaging>;
}
