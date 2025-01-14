"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseRedirectsApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseRedirectsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableRedirectsApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(urlRedirectId, _options) {
        const result = this.api.archiveWithHttpInfo(urlRedirectId, _options);
        return result.toPromise();
    }
    archive(urlRedirectId, _options) {
        const result = this.api.archive(urlRedirectId, _options);
        return result.toPromise();
    }
    createWithHttpInfo(urlMappingCreateRequestBody, _options) {
        const result = this.api.createWithHttpInfo(urlMappingCreateRequestBody, _options);
        return result.toPromise();
    }
    create(urlMappingCreateRequestBody, _options) {
        const result = this.api.create(urlMappingCreateRequestBody, _options);
        return result.toPromise();
    }
    getByIdWithHttpInfo(urlRedirectId, _options) {
        const result = this.api.getByIdWithHttpInfo(urlRedirectId, _options);
        return result.toPromise();
    }
    getById(urlRedirectId, _options) {
        const result = this.api.getById(urlRedirectId, _options);
        return result.toPromise();
    }
    getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, _options) {
        const result = this.api.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, _options);
        return result.toPromise();
    }
    getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, _options) {
        const result = this.api.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, _options);
        return result.toPromise();
    }
    updateWithHttpInfo(urlRedirectId, urlMapping, _options) {
        const result = this.api.updateWithHttpInfo(urlRedirectId, urlMapping, _options);
        return result.toPromise();
    }
    update(urlRedirectId, urlMapping, _options) {
        const result = this.api.update(urlRedirectId, urlMapping, _options);
        return result.toPromise();
    }
}
exports.PromiseRedirectsApi = PromiseRedirectsApi;
//# sourceMappingURL=PromiseAPI.js.map