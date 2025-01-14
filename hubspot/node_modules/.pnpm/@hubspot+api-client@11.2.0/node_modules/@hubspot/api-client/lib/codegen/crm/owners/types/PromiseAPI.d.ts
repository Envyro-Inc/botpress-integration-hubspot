import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponsePublicOwnerForwardPaging } from '../models/CollectionResponsePublicOwnerForwardPaging';
import { PublicOwner } from '../models/PublicOwner';
import { OwnersApiRequestFactory, OwnersApiResponseProcessor } from "../apis/OwnersApi";
export declare class PromiseOwnersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: OwnersApiRequestFactory, responseProcessor?: OwnersApiResponseProcessor);
    getByIdWithHttpInfo(ownerId: number, idProperty?: 'id' | 'userId', archived?: boolean, _options?: Configuration): Promise<HttpInfo<PublicOwner>>;
    getById(ownerId: number, idProperty?: 'id' | 'userId', archived?: boolean, _options?: Configuration): Promise<PublicOwner>;
    getPageWithHttpInfo(email?: string, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicOwnerForwardPaging>>;
    getPage(email?: string, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<CollectionResponsePublicOwnerForwardPaging>;
}
