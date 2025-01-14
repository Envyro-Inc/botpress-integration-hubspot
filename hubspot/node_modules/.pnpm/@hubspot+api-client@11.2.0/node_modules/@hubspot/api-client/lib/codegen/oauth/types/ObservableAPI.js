"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableTokensApi = exports.ObservableRefreshTokensApi = exports.ObservableAccessTokensApi = void 0;
const rxjsStub_1 = require("../rxjsStub");
const rxjsStub_2 = require("../rxjsStub");
const AccessTokensApi_1 = require("../apis/AccessTokensApi");
class ObservableAccessTokensApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccessTokensApi_1.AccessTokensApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccessTokensApi_1.AccessTokensApiResponseProcessor();
    }
    getWithHttpInfo(token, _options) {
        const requestContextPromise = this.requestFactory.get(token, _options);
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
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getWithHttpInfo(rsp)));
        }));
    }
    get(token, _options) {
        return this.getWithHttpInfo(token, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
}
exports.ObservableAccessTokensApi = ObservableAccessTokensApi;
const RefreshTokensApi_1 = require("../apis/RefreshTokensApi");
class ObservableRefreshTokensApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RefreshTokensApi_1.RefreshTokensApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RefreshTokensApi_1.RefreshTokensApiResponseProcessor();
    }
    archiveWithHttpInfo(token, _options) {
        const requestContextPromise = this.requestFactory.archive(token, _options);
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
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.archiveWithHttpInfo(rsp)));
        }));
    }
    archive(token, _options) {
        return this.archiveWithHttpInfo(token, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    getWithHttpInfo(token, _options) {
        const requestContextPromise = this.requestFactory.get(token, _options);
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
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getWithHttpInfo(rsp)));
        }));
    }
    get(token, _options) {
        return this.getWithHttpInfo(token, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
}
exports.ObservableRefreshTokensApi = ObservableRefreshTokensApi;
const TokensApi_1 = require("../apis/TokensApi");
class ObservableTokensApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TokensApi_1.TokensApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TokensApi_1.TokensApiResponseProcessor();
    }
    createWithHttpInfo(grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options) {
        const requestContextPromise = this.requestFactory.create(grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options);
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
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createWithHttpInfo(rsp)));
        }));
    }
    create(grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options) {
        return this.createWithHttpInfo(grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
}
exports.ObservableTokensApi = ObservableTokensApi;
//# sourceMappingURL=ObservableAPI.js.map