"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseSearchApi = exports.PromiseBatchApi = exports.PromiseBasicApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseBasicApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(leadsId, _options) {
        const result = this.api.archiveWithHttpInfo(leadsId, _options);
        return result.toPromise();
    }
    archive(leadsId, _options) {
        const result = this.api.archive(leadsId, _options);
        return result.toPromise();
    }
    createWithHttpInfo(simplePublicObjectInputForCreate, _options) {
        const result = this.api.createWithHttpInfo(simplePublicObjectInputForCreate, _options);
        return result.toPromise();
    }
    create(simplePublicObjectInputForCreate, _options) {
        const result = this.api.create(simplePublicObjectInputForCreate, _options);
        return result.toPromise();
    }
    getByIdWithHttpInfo(leadsId, properties, propertiesWithHistory, associations, archived, idProperty, _options) {
        const result = this.api.getByIdWithHttpInfo(leadsId, properties, propertiesWithHistory, associations, archived, idProperty, _options);
        return result.toPromise();
    }
    getById(leadsId, properties, propertiesWithHistory, associations, archived, idProperty, _options) {
        const result = this.api.getById(leadsId, properties, propertiesWithHistory, associations, archived, idProperty, _options);
        return result.toPromise();
    }
    getPageWithHttpInfo(limit, after, properties, propertiesWithHistory, associations, archived, _options) {
        const result = this.api.getPageWithHttpInfo(limit, after, properties, propertiesWithHistory, associations, archived, _options);
        return result.toPromise();
    }
    getPage(limit, after, properties, propertiesWithHistory, associations, archived, _options) {
        const result = this.api.getPage(limit, after, properties, propertiesWithHistory, associations, archived, _options);
        return result.toPromise();
    }
    updateWithHttpInfo(leadsId, simplePublicObjectInput, idProperty, _options) {
        const result = this.api.updateWithHttpInfo(leadsId, simplePublicObjectInput, idProperty, _options);
        return result.toPromise();
    }
    update(leadsId, simplePublicObjectInput, idProperty, _options) {
        const result = this.api.update(leadsId, simplePublicObjectInput, idProperty, _options);
        return result.toPromise();
    }
}
exports.PromiseBasicApi = PromiseBasicApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromiseBatchApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(batchInputSimplePublicObjectId, _options) {
        const result = this.api.archiveWithHttpInfo(batchInputSimplePublicObjectId, _options);
        return result.toPromise();
    }
    archive(batchInputSimplePublicObjectId, _options) {
        const result = this.api.archive(batchInputSimplePublicObjectId, _options);
        return result.toPromise();
    }
    createWithHttpInfo(batchInputSimplePublicObjectInputForCreate, _options) {
        const result = this.api.createWithHttpInfo(batchInputSimplePublicObjectInputForCreate, _options);
        return result.toPromise();
    }
    create(batchInputSimplePublicObjectInputForCreate, _options) {
        const result = this.api.create(batchInputSimplePublicObjectInputForCreate, _options);
        return result.toPromise();
    }
    readWithHttpInfo(batchReadInputSimplePublicObjectId, archived, _options) {
        const result = this.api.readWithHttpInfo(batchReadInputSimplePublicObjectId, archived, _options);
        return result.toPromise();
    }
    read(batchReadInputSimplePublicObjectId, archived, _options) {
        const result = this.api.read(batchReadInputSimplePublicObjectId, archived, _options);
        return result.toPromise();
    }
    updateWithHttpInfo(batchInputSimplePublicObjectBatchInput, _options) {
        const result = this.api.updateWithHttpInfo(batchInputSimplePublicObjectBatchInput, _options);
        return result.toPromise();
    }
    update(batchInputSimplePublicObjectBatchInput, _options) {
        const result = this.api.update(batchInputSimplePublicObjectBatchInput, _options);
        return result.toPromise();
    }
    upsertWithHttpInfo(batchInputSimplePublicObjectBatchInputUpsert, _options) {
        const result = this.api.upsertWithHttpInfo(batchInputSimplePublicObjectBatchInputUpsert, _options);
        return result.toPromise();
    }
    upsert(batchInputSimplePublicObjectBatchInputUpsert, _options) {
        const result = this.api.upsert(batchInputSimplePublicObjectBatchInputUpsert, _options);
        return result.toPromise();
    }
}
exports.PromiseBatchApi = PromiseBatchApi;
const ObservableAPI_3 = require("./ObservableAPI");
class PromiseSearchApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }
    doSearchWithHttpInfo(publicObjectSearchRequest, _options) {
        const result = this.api.doSearchWithHttpInfo(publicObjectSearchRequest, _options);
        return result.toPromise();
    }
    doSearch(publicObjectSearchRequest, _options) {
        const result = this.api.doSearch(publicObjectSearchRequest, _options);
        return result.toPromise();
    }
}
exports.PromiseSearchApi = PromiseSearchApi;
//# sourceMappingURL=PromiseAPI.js.map