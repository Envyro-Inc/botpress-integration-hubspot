import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CardCreateRequest } from '../models/CardCreateRequest';
import { CardPatchRequest } from '../models/CardPatchRequest';
import { IntegratorCardPayloadResponse } from '../models/IntegratorCardPayloadResponse';
import { PublicCardListResponse } from '../models/PublicCardListResponse';
import { PublicCardResponse } from '../models/PublicCardResponse';
import { CardsApiRequestFactory, CardsApiResponseProcessor } from "../apis/CardsApi";
export declare class PromiseCardsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CardsApiRequestFactory, responseProcessor?: CardsApiResponseProcessor);
    archiveWithHttpInfo(cardId: string, appId: number, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(cardId: string, appId: number, _options?: Configuration): Promise<void>;
    createWithHttpInfo(appId: number, cardCreateRequest: CardCreateRequest, _options?: Configuration): Promise<HttpInfo<PublicCardResponse>>;
    create(appId: number, cardCreateRequest: CardCreateRequest, _options?: Configuration): Promise<PublicCardResponse>;
    getAllWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<PublicCardListResponse>>;
    getAll(appId: number, _options?: Configuration): Promise<PublicCardListResponse>;
    getByIdWithHttpInfo(cardId: string, appId: number, _options?: Configuration): Promise<HttpInfo<PublicCardResponse>>;
    getById(cardId: string, appId: number, _options?: Configuration): Promise<PublicCardResponse>;
    updateWithHttpInfo(cardId: string, appId: number, cardPatchRequest: CardPatchRequest, _options?: Configuration): Promise<HttpInfo<PublicCardResponse>>;
    update(cardId: string, appId: number, cardPatchRequest: CardPatchRequest, _options?: Configuration): Promise<PublicCardResponse>;
}
import { SampleResponseApiRequestFactory, SampleResponseApiResponseProcessor } from "../apis/SampleResponseApi";
export declare class PromiseSampleResponseApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SampleResponseApiRequestFactory, responseProcessor?: SampleResponseApiResponseProcessor);
    getCardsSampleResponseWithHttpInfo(_options?: Configuration): Promise<HttpInfo<IntegratorCardPayloadResponse>>;
    getCardsSampleResponse(_options?: Configuration): Promise<IntegratorCardPayloadResponse>;
}
