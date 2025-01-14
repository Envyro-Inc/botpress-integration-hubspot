import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { AccessTokenInfoResponse } from '../models/AccessTokenInfoResponse';
import { RefreshTokenInfoResponse } from '../models/RefreshTokenInfoResponse';
import { TokenResponseIF } from '../models/TokenResponseIF';
import { AccessTokensApiRequestFactory, AccessTokensApiResponseProcessor } from "../apis/AccessTokensApi";
export interface AccessTokensApiGetRequest {
    token: string;
}
export declare class ObjectAccessTokensApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AccessTokensApiRequestFactory, responseProcessor?: AccessTokensApiResponseProcessor);
    getWithHttpInfo(param: AccessTokensApiGetRequest, options?: Configuration): Promise<HttpInfo<AccessTokenInfoResponse>>;
    get(param: AccessTokensApiGetRequest, options?: Configuration): Promise<AccessTokenInfoResponse>;
}
import { RefreshTokensApiRequestFactory, RefreshTokensApiResponseProcessor } from "../apis/RefreshTokensApi";
export interface RefreshTokensApiArchiveRequest {
    token: string;
}
export interface RefreshTokensApiGetRequest {
    token: string;
}
export declare class ObjectRefreshTokensApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: RefreshTokensApiRequestFactory, responseProcessor?: RefreshTokensApiResponseProcessor);
    archiveWithHttpInfo(param: RefreshTokensApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: RefreshTokensApiArchiveRequest, options?: Configuration): Promise<void>;
    getWithHttpInfo(param: RefreshTokensApiGetRequest, options?: Configuration): Promise<HttpInfo<RefreshTokenInfoResponse>>;
    get(param: RefreshTokensApiGetRequest, options?: Configuration): Promise<RefreshTokenInfoResponse>;
}
import { TokensApiRequestFactory, TokensApiResponseProcessor } from "../apis/TokensApi";
export interface TokensApiCreateRequest {
    grantType?: string;
    code?: string;
    redirectUri?: string;
    clientId?: string;
    clientSecret?: string;
    refreshToken?: string;
}
export declare class ObjectTokensApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TokensApiRequestFactory, responseProcessor?: TokensApiResponseProcessor);
    createWithHttpInfo(param?: TokensApiCreateRequest, options?: Configuration): Promise<HttpInfo<TokenResponseIF>>;
    create(param?: TokensApiCreateRequest, options?: Configuration): Promise<TokenResponseIF>;
}
