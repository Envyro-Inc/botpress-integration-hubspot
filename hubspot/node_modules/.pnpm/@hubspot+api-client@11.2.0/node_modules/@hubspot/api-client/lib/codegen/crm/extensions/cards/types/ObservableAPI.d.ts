import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { CardCreateRequest } from '../models/CardCreateRequest';
import { CardPatchRequest } from '../models/CardPatchRequest';
import { IntegratorCardPayloadResponse } from '../models/IntegratorCardPayloadResponse';
import { PublicCardListResponse } from '../models/PublicCardListResponse';
import { PublicCardResponse } from '../models/PublicCardResponse';
import { CardsApiRequestFactory, CardsApiResponseProcessor } from "../apis/CardsApi";
export declare class ObservableCardsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CardsApiRequestFactory, responseProcessor?: CardsApiResponseProcessor);
    archiveWithHttpInfo(cardId: string, appId: number, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(cardId: string, appId: number, _options?: Configuration): Observable<void>;
    createWithHttpInfo(appId: number, cardCreateRequest: CardCreateRequest, _options?: Configuration): Observable<HttpInfo<PublicCardResponse>>;
    create(appId: number, cardCreateRequest: CardCreateRequest, _options?: Configuration): Observable<PublicCardResponse>;
    getAllWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<PublicCardListResponse>>;
    getAll(appId: number, _options?: Configuration): Observable<PublicCardListResponse>;
    getByIdWithHttpInfo(cardId: string, appId: number, _options?: Configuration): Observable<HttpInfo<PublicCardResponse>>;
    getById(cardId: string, appId: number, _options?: Configuration): Observable<PublicCardResponse>;
    updateWithHttpInfo(cardId: string, appId: number, cardPatchRequest: CardPatchRequest, _options?: Configuration): Observable<HttpInfo<PublicCardResponse>>;
    update(cardId: string, appId: number, cardPatchRequest: CardPatchRequest, _options?: Configuration): Observable<PublicCardResponse>;
}
import { SampleResponseApiRequestFactory, SampleResponseApiResponseProcessor } from "../apis/SampleResponseApi";
export declare class ObservableSampleResponseApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SampleResponseApiRequestFactory, responseProcessor?: SampleResponseApiResponseProcessor);
    getCardsSampleResponseWithHttpInfo(_options?: Configuration): Observable<HttpInfo<IntegratorCardPayloadResponse>>;
    getCardsSampleResponse(_options?: Configuration): Observable<IntegratorCardPayloadResponse>;
}
