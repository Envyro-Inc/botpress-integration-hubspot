import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { IdentificationTokenGenerationRequest } from '../models/IdentificationTokenGenerationRequest';
import { IdentificationTokenResponse } from '../models/IdentificationTokenResponse';
import { GenerateApiRequestFactory, GenerateApiResponseProcessor } from "../apis/GenerateApi";
export interface GenerateApiGenerateTokenRequest {
    identificationTokenGenerationRequest: IdentificationTokenGenerationRequest;
}
export declare class ObjectGenerateApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: GenerateApiRequestFactory, responseProcessor?: GenerateApiResponseProcessor);
    generateTokenWithHttpInfo(param: GenerateApiGenerateTokenRequest, options?: Configuration): Promise<HttpInfo<IdentificationTokenResponse>>;
    generateToken(param: GenerateApiGenerateTokenRequest, options?: Configuration): Promise<IdentificationTokenResponse>;
}
