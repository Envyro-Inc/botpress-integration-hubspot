"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableStatusApi = exports.ObservableDefinitionApi = void 0;
const rxjsStub_1 = require("../rxjsStub");
const rxjsStub_2 = require("../rxjsStub");
const DefinitionApi_1 = require("../apis/DefinitionApi");
class ObservableDefinitionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefinitionApi_1.DefinitionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefinitionApi_1.DefinitionApiResponseProcessor();
    }
    getPageWithHttpInfo(_options) {
        const requestContextPromise = this.requestFactory.getPage(_options);
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
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getPageWithHttpInfo(rsp)));
        }));
    }
    getPage(_options) {
        return this.getPageWithHttpInfo(_options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
}
exports.ObservableDefinitionApi = ObservableDefinitionApi;
const StatusApi_1 = require("../apis/StatusApi");
class ObservableStatusApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatusApi_1.StatusApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatusApi_1.StatusApiResponseProcessor();
    }
    getEmailStatusWithHttpInfo(emailAddress, _options) {
        const requestContextPromise = this.requestFactory.getEmailStatus(emailAddress, _options);
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
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getEmailStatusWithHttpInfo(rsp)));
        }));
    }
    getEmailStatus(emailAddress, _options) {
        return this.getEmailStatusWithHttpInfo(emailAddress, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    subscribeWithHttpInfo(publicUpdateSubscriptionStatusRequest, _options) {
        const requestContextPromise = this.requestFactory.subscribe(publicUpdateSubscriptionStatusRequest, _options);
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
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.subscribeWithHttpInfo(rsp)));
        }));
    }
    subscribe(publicUpdateSubscriptionStatusRequest, _options) {
        return this.subscribeWithHttpInfo(publicUpdateSubscriptionStatusRequest, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    unsubscribeWithHttpInfo(publicUpdateSubscriptionStatusRequest, _options) {
        const requestContextPromise = this.requestFactory.unsubscribe(publicUpdateSubscriptionStatusRequest, _options);
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
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.unsubscribeWithHttpInfo(rsp)));
        }));
    }
    unsubscribe(publicUpdateSubscriptionStatusRequest, _options) {
        return this.unsubscribeWithHttpInfo(publicUpdateSubscriptionStatusRequest, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
}
exports.ObservableStatusApi = ObservableStatusApi;
//# sourceMappingURL=ObservableAPI.js.map