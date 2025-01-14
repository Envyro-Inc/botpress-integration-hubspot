"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableBatchApi = void 0;
const rxjsStub_1 = require("../rxjsStub");
const rxjsStub_2 = require("../rxjsStub");
const BatchApi_1 = require("../apis/BatchApi");
class ObservableBatchApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BatchApi_1.BatchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BatchApi_1.BatchApiResponseProcessor();
    }
    archiveWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociation, _options) {
        const requestContextPromise = this.requestFactory.archive(fromObjectType, toObjectType, batchInputPublicAssociation, _options);
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
    archive(fromObjectType, toObjectType, batchInputPublicAssociation, _options) {
        return this.archiveWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociation, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    createWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociation, _options) {
        const requestContextPromise = this.requestFactory.create(fromObjectType, toObjectType, batchInputPublicAssociation, _options);
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
    create(fromObjectType, toObjectType, batchInputPublicAssociation, _options) {
        return this.createWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociation, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    readWithHttpInfo(fromObjectType, toObjectType, batchInputPublicObjectId, _options) {
        const requestContextPromise = this.requestFactory.read(fromObjectType, toObjectType, batchInputPublicObjectId, _options);
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
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.readWithHttpInfo(rsp)));
        }));
    }
    read(fromObjectType, toObjectType, batchInputPublicObjectId, _options) {
        return this.readWithHttpInfo(fromObjectType, toObjectType, batchInputPublicObjectId, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
}
exports.ObservableBatchApi = ObservableBatchApi;
//# sourceMappingURL=ObservableAPI.js.map