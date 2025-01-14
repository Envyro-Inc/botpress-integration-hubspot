"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservablePublicApi = void 0;
const rxjsStub_1 = require("../rxjsStub");
const rxjsStub_2 = require("../rxjsStub");
const PublicApi_1 = require("../apis/PublicApi");
class ObservablePublicApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PublicApi_1.PublicApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PublicApi_1.PublicApiResponseProcessor();
    }
    getByIdWithHttpInfo(contentId, type, _options) {
        const requestContextPromise = this.requestFactory.getById(contentId, type, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
        }));
    }
    getById(contentId, type, _options) {
        return this.getByIdWithHttpInfo(contentId, type, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    searchWithHttpInfo(q, limit, offset, language, matchPrefix, autocomplete, popularityBoost, boostLimit, boostRecent, tableId, hubdbQuery, domain, type, pathPrefix, property, length, groupId, _options) {
        const requestContextPromise = this.requestFactory.search(q, limit, offset, language, matchPrefix, autocomplete, popularityBoost, boostLimit, boostRecent, tableId, hubdbQuery, domain, type, pathPrefix, property, length, groupId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.searchWithHttpInfo(rsp)));
        }));
    }
    search(q, limit, offset, language, matchPrefix, autocomplete, popularityBoost, boostLimit, boostRecent, tableId, hubdbQuery, domain, type, pathPrefix, property, length, groupId, _options) {
        return this.searchWithHttpInfo(q, limit, offset, language, matchPrefix, autocomplete, popularityBoost, boostLimit, boostRecent, tableId, hubdbQuery, domain, type, pathPrefix, property, length, groupId, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
}
exports.ObservablePublicApi = ObservablePublicApi;
//# sourceMappingURL=ObservableAPI.js.map