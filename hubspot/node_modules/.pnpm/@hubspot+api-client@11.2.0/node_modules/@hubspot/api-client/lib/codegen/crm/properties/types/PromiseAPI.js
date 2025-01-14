"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseGroupsApi = exports.PromiseCoreApi = exports.PromiseBatchApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseBatchApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(objectType, batchInputPropertyName, _options) {
        const result = this.api.archiveWithHttpInfo(objectType, batchInputPropertyName, _options);
        return result.toPromise();
    }
    archive(objectType, batchInputPropertyName, _options) {
        const result = this.api.archive(objectType, batchInputPropertyName, _options);
        return result.toPromise();
    }
    createWithHttpInfo(objectType, batchInputPropertyCreate, _options) {
        const result = this.api.createWithHttpInfo(objectType, batchInputPropertyCreate, _options);
        return result.toPromise();
    }
    create(objectType, batchInputPropertyCreate, _options) {
        const result = this.api.create(objectType, batchInputPropertyCreate, _options);
        return result.toPromise();
    }
    readWithHttpInfo(objectType, batchReadInputPropertyName, _options) {
        const result = this.api.readWithHttpInfo(objectType, batchReadInputPropertyName, _options);
        return result.toPromise();
    }
    read(objectType, batchReadInputPropertyName, _options) {
        const result = this.api.read(objectType, batchReadInputPropertyName, _options);
        return result.toPromise();
    }
}
exports.PromiseBatchApi = PromiseBatchApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromiseCoreApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableCoreApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(objectType, propertyName, _options) {
        const result = this.api.archiveWithHttpInfo(objectType, propertyName, _options);
        return result.toPromise();
    }
    archive(objectType, propertyName, _options) {
        const result = this.api.archive(objectType, propertyName, _options);
        return result.toPromise();
    }
    createWithHttpInfo(objectType, propertyCreate, _options) {
        const result = this.api.createWithHttpInfo(objectType, propertyCreate, _options);
        return result.toPromise();
    }
    create(objectType, propertyCreate, _options) {
        const result = this.api.create(objectType, propertyCreate, _options);
        return result.toPromise();
    }
    getAllWithHttpInfo(objectType, archived, properties, _options) {
        const result = this.api.getAllWithHttpInfo(objectType, archived, properties, _options);
        return result.toPromise();
    }
    getAll(objectType, archived, properties, _options) {
        const result = this.api.getAll(objectType, archived, properties, _options);
        return result.toPromise();
    }
    getByNameWithHttpInfo(objectType, propertyName, archived, properties, _options) {
        const result = this.api.getByNameWithHttpInfo(objectType, propertyName, archived, properties, _options);
        return result.toPromise();
    }
    getByName(objectType, propertyName, archived, properties, _options) {
        const result = this.api.getByName(objectType, propertyName, archived, properties, _options);
        return result.toPromise();
    }
    updateWithHttpInfo(objectType, propertyName, propertyUpdate, _options) {
        const result = this.api.updateWithHttpInfo(objectType, propertyName, propertyUpdate, _options);
        return result.toPromise();
    }
    update(objectType, propertyName, propertyUpdate, _options) {
        const result = this.api.update(objectType, propertyName, propertyUpdate, _options);
        return result.toPromise();
    }
}
exports.PromiseCoreApi = PromiseCoreApi;
const ObservableAPI_3 = require("./ObservableAPI");
class PromiseGroupsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableGroupsApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(objectType, groupName, _options) {
        const result = this.api.archiveWithHttpInfo(objectType, groupName, _options);
        return result.toPromise();
    }
    archive(objectType, groupName, _options) {
        const result = this.api.archive(objectType, groupName, _options);
        return result.toPromise();
    }
    createWithHttpInfo(objectType, propertyGroupCreate, _options) {
        const result = this.api.createWithHttpInfo(objectType, propertyGroupCreate, _options);
        return result.toPromise();
    }
    create(objectType, propertyGroupCreate, _options) {
        const result = this.api.create(objectType, propertyGroupCreate, _options);
        return result.toPromise();
    }
    getAllWithHttpInfo(objectType, _options) {
        const result = this.api.getAllWithHttpInfo(objectType, _options);
        return result.toPromise();
    }
    getAll(objectType, _options) {
        const result = this.api.getAll(objectType, _options);
        return result.toPromise();
    }
    getByNameWithHttpInfo(objectType, groupName, _options) {
        const result = this.api.getByNameWithHttpInfo(objectType, groupName, _options);
        return result.toPromise();
    }
    getByName(objectType, groupName, _options) {
        const result = this.api.getByName(objectType, groupName, _options);
        return result.toPromise();
    }
    updateWithHttpInfo(objectType, groupName, propertyGroupUpdate, _options) {
        const result = this.api.updateWithHttpInfo(objectType, groupName, propertyGroupUpdate, _options);
        return result.toPromise();
    }
    update(objectType, groupName, propertyGroupUpdate, _options) {
        const result = this.api.update(objectType, groupName, propertyGroupUpdate, _options);
        return result.toPromise();
    }
}
exports.PromiseGroupsApi = PromiseGroupsApi;
//# sourceMappingURL=PromiseAPI.js.map