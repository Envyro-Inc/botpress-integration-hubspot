import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { IdentificationTokenGenerationRequest } from '../models/IdentificationTokenGenerationRequest';
import { IdentificationTokenResponse } from '../models/IdentificationTokenResponse';
import { GenerateApiRequestFactory, GenerateApiResponseProcessor } from "../apis/GenerateApi";
export declare class ObservableGenerateApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: GenerateApiRequestFactory, responseProcessor?: GenerateApiResponseProcessor);
    generateTokenWithHttpInfo(identificationTokenGenerationRequest: IdentificationTokenGenerationRequest, _options?: Configuration): Observable<HttpInfo<IdentificationTokenResponse>>;
    generateToken(identificationTokenGenerationRequest: IdentificationTokenGenerationRequest, _options?: Configuration): Observable<IdentificationTokenResponse>;
}
