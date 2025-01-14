import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CardCreateRequest } from '../models/CardCreateRequest';
import { CardPatchRequest } from '../models/CardPatchRequest';
import { IntegratorCardPayloadResponse } from '../models/IntegratorCardPayloadResponse';
import { PublicCardListResponse } from '../models/PublicCardListResponse';
import { PublicCardResponse } from '../models/PublicCardResponse';
import { CardsApiRequestFactory, CardsApiResponseProcessor } from "../apis/CardsApi";
export interface CardsApiArchiveRequest {
    cardId: string;
    appId: number;
}
export interface CardsApiCreateRequest {
    appId: number;
    cardCreateRequest: CardCreateRequest;
}
export interface CardsApiGetAllRequest {
    appId: number;
}
export interface CardsApiGetByIdRequest {
    cardId: string;
    appId: number;
}
export interface CardsApiUpdateRequest {
    cardId: string;
    appId: number;
    cardPatchRequest: CardPatchRequest;
}
export declare class ObjectCardsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CardsApiRequestFactory, responseProcessor?: CardsApiResponseProcessor);
    archiveWithHttpInfo(param: CardsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: CardsApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: CardsApiCreateRequest, options?: Configuration): Promise<HttpInfo<PublicCardResponse>>;
    create(param: CardsApiCreateRequest, options?: Configuration): Promise<PublicCardResponse>;
    getAllWithHttpInfo(param: CardsApiGetAllRequest, options?: Configuration): Promise<HttpInfo<PublicCardListResponse>>;
    getAll(param: CardsApiGetAllRequest, options?: Configuration): Promise<PublicCardListResponse>;
    getByIdWithHttpInfo(param: CardsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<PublicCardResponse>>;
    getById(param: CardsApiGetByIdRequest, options?: Configuration): Promise<PublicCardResponse>;
    updateWithHttpInfo(param: CardsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<PublicCardResponse>>;
    update(param: CardsApiUpdateRequest, options?: Configuration): Promise<PublicCardResponse>;
}
import { SampleResponseApiRequestFactory, SampleResponseApiResponseProcessor } from "../apis/SampleResponseApi";
export interface SampleResponseApiGetCardsSampleResponseRequest {
}
export declare class ObjectSampleResponseApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SampleResponseApiRequestFactory, responseProcessor?: SampleResponseApiResponseProcessor);
    getCardsSampleResponseWithHttpInfo(param?: SampleResponseApiGetCardsSampleResponseRequest, options?: Configuration): Promise<HttpInfo<IntegratorCardPayloadResponse>>;
    getCardsSampleResponse(param?: SampleResponseApiGetCardsSampleResponseRequest, options?: Configuration): Promise<IntegratorCardPayloadResponse>;
}
