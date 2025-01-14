import { HttpFile, HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { ActionResponse } from '../models/ActionResponse';
import { CollectionResponsePublicImportErrorForwardPaging } from '../models/CollectionResponsePublicImportErrorForwardPaging';
import { CollectionResponsePublicImportResponse } from '../models/CollectionResponsePublicImportResponse';
import { PublicImportResponse } from '../models/PublicImportResponse';
import { CoreApiRequestFactory, CoreApiResponseProcessor } from "../apis/CoreApi";
export declare class ObservableCoreApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CoreApiRequestFactory, responseProcessor?: CoreApiResponseProcessor);
    cancelWithHttpInfo(importId: number, _options?: Configuration): Observable<HttpInfo<ActionResponse>>;
    cancel(importId: number, _options?: Configuration): Observable<ActionResponse>;
    createWithHttpInfo(files?: HttpFile, importRequest?: string, _options?: Configuration): Observable<HttpInfo<PublicImportResponse>>;
    create(files?: HttpFile, importRequest?: string, _options?: Configuration): Observable<PublicImportResponse>;
    getByIdWithHttpInfo(importId: number, _options?: Configuration): Observable<HttpInfo<PublicImportResponse>>;
    getById(importId: number, _options?: Configuration): Observable<PublicImportResponse>;
    getPageWithHttpInfo(after?: string, before?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicImportResponse>>;
    getPage(after?: string, before?: string, limit?: number, _options?: Configuration): Observable<CollectionResponsePublicImportResponse>;
}
import { PublicImportsApiRequestFactory, PublicImportsApiResponseProcessor } from "../apis/PublicImportsApi";
export declare class ObservablePublicImportsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PublicImportsApiRequestFactory, responseProcessor?: PublicImportsApiResponseProcessor);
    getErrorsWithHttpInfo(importId: number, after?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicImportErrorForwardPaging>>;
    getErrors(importId: number, after?: string, limit?: number, _options?: Configuration): Observable<CollectionResponsePublicImportErrorForwardPaging>;
}
