"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableSubscriptionsApi = exports.ObservableSettingsApi = void 0;
const rxjsStub_1 = require("../rxjsStub");
const rxjsStub_2 = require("../rxjsStub");
const SettingsApi_1 = require("../apis/SettingsApi");
class ObservableSettingsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SettingsApi_1.SettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SettingsApi_1.SettingsApiResponseProcessor();
    }
    clearWithHttpInfo(appId, _options) {
        const requestContextPromise = this.requestFactory.clear(appId, _options);
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
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.clearWithHttpInfo(rsp)));
        }));
    }
    clear(appId, _options) {
        return this.clearWithHttpInfo(appId, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    configureWithHttpInfo(appId, settingsChangeRequest, _options) {
        const requestContextPromise = this.requestFactory.configure(appId, settingsChangeRequest, _options);
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
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.configureWithHttpInfo(rsp)));
        }));
    }
    configure(appId, settingsChangeRequest, _options) {
        return this.configureWithHttpInfo(appId, settingsChangeRequest, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    getAllWithHttpInfo(appId, _options) {
        const requestContextPromise = this.requestFactory.getAll(appId, _options);
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
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getAllWithHttpInfo(rsp)));
        }));
    }
    getAll(appId, _options) {
        return this.getAllWithHttpInfo(appId, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
}
exports.ObservableSettingsApi = ObservableSettingsApi;
const SubscriptionsApi_1 = require("../apis/SubscriptionsApi");
class ObservableSubscriptionsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubscriptionsApi_1.SubscriptionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubscriptionsApi_1.SubscriptionsApiResponseProcessor();
    }
    archiveWithHttpInfo(subscriptionId, appId, _options) {
        const requestContextPromise = this.requestFactory.archive(subscriptionId, appId, _options);
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
    archive(subscriptionId, appId, _options) {
        return this.archiveWithHttpInfo(subscriptionId, appId, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    createWithHttpInfo(appId, subscriptionCreateRequest, _options) {
        const requestContextPromise = this.requestFactory.create(appId, subscriptionCreateRequest, _options);
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
    create(appId, subscriptionCreateRequest, _options) {
        return this.createWithHttpInfo(appId, subscriptionCreateRequest, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    getAllWithHttpInfo(appId, _options) {
        const requestContextPromise = this.requestFactory.getAll(appId, _options);
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
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getAllWithHttpInfo(rsp)));
        }));
    }
    getAll(appId, _options) {
        return this.getAllWithHttpInfo(appId, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    getByIdWithHttpInfo(subscriptionId, appId, _options) {
        const requestContextPromise = this.requestFactory.getById(subscriptionId, appId, _options);
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
    getById(subscriptionId, appId, _options) {
        return this.getByIdWithHttpInfo(subscriptionId, appId, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    updateWithHttpInfo(subscriptionId, appId, subscriptionPatchRequest, _options) {
        const requestContextPromise = this.requestFactory.update(subscriptionId, appId, subscriptionPatchRequest, _options);
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
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateWithHttpInfo(rsp)));
        }));
    }
    update(subscriptionId, appId, subscriptionPatchRequest, _options) {
        return this.updateWithHttpInfo(subscriptionId, appId, subscriptionPatchRequest, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    updateBatchWithHttpInfo(appId, batchInputSubscriptionBatchUpdateRequest, _options) {
        const requestContextPromise = this.requestFactory.updateBatch(appId, batchInputSubscriptionBatchUpdateRequest, _options);
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
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateBatchWithHttpInfo(rsp)));
        }));
    }
    updateBatch(appId, batchInputSubscriptionBatchUpdateRequest, _options) {
        return this.updateBatchWithHttpInfo(appId, batchInputSubscriptionBatchUpdateRequest, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
}
exports.ObservableSubscriptionsApi = ObservableSubscriptionsApi;
//# sourceMappingURL=ObservableAPI.js.map