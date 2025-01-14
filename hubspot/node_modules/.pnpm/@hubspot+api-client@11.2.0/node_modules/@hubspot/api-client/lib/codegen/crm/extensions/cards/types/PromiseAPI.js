"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseSampleResponseApi = exports.PromiseCardsApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseCardsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCardsApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(cardId, appId, _options) {
        const result = this.api.archiveWithHttpInfo(cardId, appId, _options);
        return result.toPromise();
    }
    archive(cardId, appId, _options) {
        const result = this.api.archive(cardId, appId, _options);
        return result.toPromise();
    }
    createWithHttpInfo(appId, cardCreateRequest, _options) {
        const result = this.api.createWithHttpInfo(appId, cardCreateRequest, _options);
        return result.toPromise();
    }
    create(appId, cardCreateRequest, _options) {
        const result = this.api.create(appId, cardCreateRequest, _options);
        return result.toPromise();
    }
    getAllWithHttpInfo(appId, _options) {
        const result = this.api.getAllWithHttpInfo(appId, _options);
        return result.toPromise();
    }
    getAll(appId, _options) {
        const result = this.api.getAll(appId, _options);
        return result.toPromise();
    }
    getByIdWithHttpInfo(cardId, appId, _options) {
        const result = this.api.getByIdWithHttpInfo(cardId, appId, _options);
        return result.toPromise();
    }
    getById(cardId, appId, _options) {
        const result = this.api.getById(cardId, appId, _options);
        return result.toPromise();
    }
    updateWithHttpInfo(cardId, appId, cardPatchRequest, _options) {
        const result = this.api.updateWithHttpInfo(cardId, appId, cardPatchRequest, _options);
        return result.toPromise();
    }
    update(cardId, appId, cardPatchRequest, _options) {
        const result = this.api.update(cardId, appId, cardPatchRequest, _options);
        return result.toPromise();
    }
}
exports.PromiseCardsApi = PromiseCardsApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromiseSampleResponseApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableSampleResponseApi(configuration, requestFactory, responseProcessor);
    }
    getCardsSampleResponseWithHttpInfo(_options) {
        const result = this.api.getCardsSampleResponseWithHttpInfo(_options);
        return result.toPromise();
    }
    getCardsSampleResponse(_options) {
        const result = this.api.getCardsSampleResponse(_options);
        return result.toPromise();
    }
}
exports.PromiseSampleResponseApi = PromiseSampleResponseApi;
//# sourceMappingURL=PromiseAPI.js.map