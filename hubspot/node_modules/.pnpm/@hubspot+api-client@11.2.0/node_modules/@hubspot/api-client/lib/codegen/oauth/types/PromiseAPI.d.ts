import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { AccessTokenInfoResponse } from '../models/AccessTokenInfoResponse';
import { RefreshTokenInfoResponse } from '../models/RefreshTokenInfoResponse';
import { TokenResponseIF } from '../models/TokenResponseIF';
import { AccessTokensApiRequestFactory, AccessTokensApiResponseProcessor } from "../apis/AccessTokensApi";
export declare class PromiseAccessTokensApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AccessTokensApiRequestFactory, responseProcessor?: AccessTokensApiResponseProcessor);
    getWithHttpInfo(token: string, _options?: Configuration): Promise<HttpInfo<AccessTokenInfoResponse>>;
    get(token: string, _options?: Configuration): Promise<AccessTokenInfoResponse>;
}
import { RefreshTokensApiRequestFactory, RefreshTokensApiResponseProcessor } from "../apis/RefreshTokensApi";
export declare class PromiseRefreshTokensApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: RefreshTokensApiRequestFactory, responseProcessor?: RefreshTokensApiResponseProcessor);
    archiveWithHttpInfo(token: string, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(token: string, _options?: Configuration): Promise<void>;
    getWithHttpInfo(token: string, _options?: Configuration): Promise<HttpInfo<RefreshTokenInfoResponse>>;
    get(token: string, _options?: Configuration): Promise<RefreshTokenInfoResponse>;
}
import { TokensApiRequestFactory, TokensApiResponseProcessor } from "../apis/TokensApi";
export declare class PromiseTokensApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TokensApiRequestFactory, responseProcessor?: TokensApiResponseProcessor);
    createWithHttpInfo(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: Configuration): Promise<HttpInfo<TokenResponseIF>>;
    create(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: Configuration): Promise<TokenResponseIF>;
}
