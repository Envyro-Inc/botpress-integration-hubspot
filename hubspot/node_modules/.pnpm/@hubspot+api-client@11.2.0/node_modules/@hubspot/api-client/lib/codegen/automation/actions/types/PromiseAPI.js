"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseRevisionsApi = exports.PromiseFunctionsApi = exports.PromiseDefinitionsApi = exports.PromiseCallbacksApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseCallbacksApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCallbacksApi(configuration, requestFactory, responseProcessor);
    }
    completeWithHttpInfo(callbackId, callbackCompletionRequest, _options) {
        const result = this.api.completeWithHttpInfo(callbackId, callbackCompletionRequest, _options);
        return result.toPromise();
    }
    complete(callbackId, callbackCompletionRequest, _options) {
        const result = this.api.complete(callbackId, callbackCompletionRequest, _options);
        return result.toPromise();
    }
    completeBatchWithHttpInfo(batchInputCallbackCompletionBatchRequest, _options) {
        const result = this.api.completeBatchWithHttpInfo(batchInputCallbackCompletionBatchRequest, _options);
        return result.toPromise();
    }
    completeBatch(batchInputCallbackCompletionBatchRequest, _options) {
        const result = this.api.completeBatch(batchInputCallbackCompletionBatchRequest, _options);
        return result.toPromise();
    }
}
exports.PromiseCallbacksApi = PromiseCallbacksApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromiseDefinitionsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableDefinitionsApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(definitionId, appId, _options) {
        const result = this.api.archiveWithHttpInfo(definitionId, appId, _options);
        return result.toPromise();
    }
    archive(definitionId, appId, _options) {
        const result = this.api.archive(definitionId, appId, _options);
        return result.toPromise();
    }
    createWithHttpInfo(appId, publicActionDefinitionEgg, _options) {
        const result = this.api.createWithHttpInfo(appId, publicActionDefinitionEgg, _options);
        return result.toPromise();
    }
    create(appId, publicActionDefinitionEgg, _options) {
        const result = this.api.create(appId, publicActionDefinitionEgg, _options);
        return result.toPromise();
    }
    getByIdWithHttpInfo(definitionId, appId, archived, _options) {
        const result = this.api.getByIdWithHttpInfo(definitionId, appId, archived, _options);
        return result.toPromise();
    }
    getById(definitionId, appId, archived, _options) {
        const result = this.api.getById(definitionId, appId, archived, _options);
        return result.toPromise();
    }
    getPageWithHttpInfo(appId, limit, after, archived, _options) {
        const result = this.api.getPageWithHttpInfo(appId, limit, after, archived, _options);
        return result.toPromise();
    }
    getPage(appId, limit, after, archived, _options) {
        const result = this.api.getPage(appId, limit, after, archived, _options);
        return result.toPromise();
    }
    updateWithHttpInfo(definitionId, appId, publicActionDefinitionPatch, _options) {
        const result = this.api.updateWithHttpInfo(definitionId, appId, publicActionDefinitionPatch, _options);
        return result.toPromise();
    }
    update(definitionId, appId, publicActionDefinitionPatch, _options) {
        const result = this.api.update(definitionId, appId, publicActionDefinitionPatch, _options);
        return result.toPromise();
    }
}
exports.PromiseDefinitionsApi = PromiseDefinitionsApi;
const ObservableAPI_3 = require("./ObservableAPI");
class PromiseFunctionsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableFunctionsApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(definitionId, functionType, functionId, appId, _options) {
        const result = this.api.archiveWithHttpInfo(definitionId, functionType, functionId, appId, _options);
        return result.toPromise();
    }
    archive(definitionId, functionType, functionId, appId, _options) {
        const result = this.api.archive(definitionId, functionType, functionId, appId, _options);
        return result.toPromise();
    }
    archiveByFunctionTypeWithHttpInfo(definitionId, functionType, appId, _options) {
        const result = this.api.archiveByFunctionTypeWithHttpInfo(definitionId, functionType, appId, _options);
        return result.toPromise();
    }
    archiveByFunctionType(definitionId, functionType, appId, _options) {
        const result = this.api.archiveByFunctionType(definitionId, functionType, appId, _options);
        return result.toPromise();
    }
    createOrReplaceWithHttpInfo(definitionId, functionType, functionId, appId, body, _options) {
        const result = this.api.createOrReplaceWithHttpInfo(definitionId, functionType, functionId, appId, body, _options);
        return result.toPromise();
    }
    createOrReplace(definitionId, functionType, functionId, appId, body, _options) {
        const result = this.api.createOrReplace(definitionId, functionType, functionId, appId, body, _options);
        return result.toPromise();
    }
    createOrReplaceByFunctionTypeWithHttpInfo(definitionId, functionType, appId, body, _options) {
        const result = this.api.createOrReplaceByFunctionTypeWithHttpInfo(definitionId, functionType, appId, body, _options);
        return result.toPromise();
    }
    createOrReplaceByFunctionType(definitionId, functionType, appId, body, _options) {
        const result = this.api.createOrReplaceByFunctionType(definitionId, functionType, appId, body, _options);
        return result.toPromise();
    }
    getByFunctionTypeWithHttpInfo(definitionId, functionType, appId, _options) {
        const result = this.api.getByFunctionTypeWithHttpInfo(definitionId, functionType, appId, _options);
        return result.toPromise();
    }
    getByFunctionType(definitionId, functionType, appId, _options) {
        const result = this.api.getByFunctionType(definitionId, functionType, appId, _options);
        return result.toPromise();
    }
    getByIdWithHttpInfo(definitionId, functionType, functionId, appId, _options) {
        const result = this.api.getByIdWithHttpInfo(definitionId, functionType, functionId, appId, _options);
        return result.toPromise();
    }
    getById(definitionId, functionType, functionId, appId, _options) {
        const result = this.api.getById(definitionId, functionType, functionId, appId, _options);
        return result.toPromise();
    }
    getPageWithHttpInfo(definitionId, appId, _options) {
        const result = this.api.getPageWithHttpInfo(definitionId, appId, _options);
        return result.toPromise();
    }
    getPage(definitionId, appId, _options) {
        const result = this.api.getPage(definitionId, appId, _options);
        return result.toPromise();
    }
}
exports.PromiseFunctionsApi = PromiseFunctionsApi;
const ObservableAPI_4 = require("./ObservableAPI");
class PromiseRevisionsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableRevisionsApi(configuration, requestFactory, responseProcessor);
    }
    getByIdWithHttpInfo(definitionId, revisionId, appId, _options) {
        const result = this.api.getByIdWithHttpInfo(definitionId, revisionId, appId, _options);
        return result.toPromise();
    }
    getById(definitionId, revisionId, appId, _options) {
        const result = this.api.getById(definitionId, revisionId, appId, _options);
        return result.toPromise();
    }
    getPageWithHttpInfo(definitionId, appId, limit, after, _options) {
        const result = this.api.getPageWithHttpInfo(definitionId, appId, limit, after, _options);
        return result.toPromise();
    }
    getPage(definitionId, appId, limit, after, _options) {
        const result = this.api.getPage(definitionId, appId, limit, after, _options);
        return result.toPromise();
    }
}
exports.PromiseRevisionsApi = PromiseRevisionsApi;
//# sourceMappingURL=PromiseAPI.js.map