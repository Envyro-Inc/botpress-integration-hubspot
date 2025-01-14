"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseBlogAuthorsApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseBlogAuthorsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableBlogAuthorsApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(objectId, archived, _options) {
        const result = this.api.archiveWithHttpInfo(objectId, archived, _options);
        return result.toPromise();
    }
    archive(objectId, archived, _options) {
        const result = this.api.archive(objectId, archived, _options);
        return result.toPromise();
    }
    archiveBatchWithHttpInfo(batchInputString, _options) {
        const result = this.api.archiveBatchWithHttpInfo(batchInputString, _options);
        return result.toPromise();
    }
    archiveBatch(batchInputString, _options) {
        const result = this.api.archiveBatch(batchInputString, _options);
        return result.toPromise();
    }
    attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext, _options) {
        const result = this.api.attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext, _options);
        return result.toPromise();
    }
    attachToLangGroup(attachToLangPrimaryRequestVNext, _options) {
        const result = this.api.attachToLangGroup(attachToLangPrimaryRequestVNext, _options);
        return result.toPromise();
    }
    createWithHttpInfo(blogAuthor, _options) {
        const result = this.api.createWithHttpInfo(blogAuthor, _options);
        return result.toPromise();
    }
    create(blogAuthor, _options) {
        const result = this.api.create(blogAuthor, _options);
        return result.toPromise();
    }
    createBatchWithHttpInfo(batchInputBlogAuthor, _options) {
        const result = this.api.createBatchWithHttpInfo(batchInputBlogAuthor, _options);
        return result.toPromise();
    }
    createBatch(batchInputBlogAuthor, _options) {
        const result = this.api.createBatch(batchInputBlogAuthor, _options);
        return result.toPromise();
    }
    createLangVariationWithHttpInfo(blogAuthorCloneRequestVNext, _options) {
        const result = this.api.createLangVariationWithHttpInfo(blogAuthorCloneRequestVNext, _options);
        return result.toPromise();
    }
    createLangVariation(blogAuthorCloneRequestVNext, _options) {
        const result = this.api.createLangVariation(blogAuthorCloneRequestVNext, _options);
        return result.toPromise();
    }
    detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext, _options) {
        const result = this.api.detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext, _options);
        return result.toPromise();
    }
    detachFromLangGroup(detachFromLangGroupRequestVNext, _options) {
        const result = this.api.detachFromLangGroup(detachFromLangGroupRequestVNext, _options);
        return result.toPromise();
    }
    getByIdWithHttpInfo(objectId, archived, property, _options) {
        const result = this.api.getByIdWithHttpInfo(objectId, archived, property, _options);
        return result.toPromise();
    }
    getById(objectId, archived, property, _options) {
        const result = this.api.getById(objectId, archived, property, _options);
        return result.toPromise();
    }
    getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options) {
        const result = this.api.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);
        return result.toPromise();
    }
    getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options) {
        const result = this.api.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);
        return result.toPromise();
    }
    readBatchWithHttpInfo(batchInputString, archived, _options) {
        const result = this.api.readBatchWithHttpInfo(batchInputString, archived, _options);
        return result.toPromise();
    }
    readBatch(batchInputString, archived, _options) {
        const result = this.api.readBatch(batchInputString, archived, _options);
        return result.toPromise();
    }
    setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext, _options) {
        const result = this.api.setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext, _options);
        return result.toPromise();
    }
    setLangPrimary(setNewLanguagePrimaryRequestVNext, _options) {
        const result = this.api.setLangPrimary(setNewLanguagePrimaryRequestVNext, _options);
        return result.toPromise();
    }
    updateWithHttpInfo(objectId, blogAuthor, archived, _options) {
        const result = this.api.updateWithHttpInfo(objectId, blogAuthor, archived, _options);
        return result.toPromise();
    }
    update(objectId, blogAuthor, archived, _options) {
        const result = this.api.update(objectId, blogAuthor, archived, _options);
        return result.toPromise();
    }
    updateBatchWithHttpInfo(batchInputJsonNode, archived, _options) {
        const result = this.api.updateBatchWithHttpInfo(batchInputJsonNode, archived, _options);
        return result.toPromise();
    }
    updateBatch(batchInputJsonNode, archived, _options) {
        const result = this.api.updateBatch(batchInputJsonNode, archived, _options);
        return result.toPromise();
    }
    updateLangsWithHttpInfo(updateLanguagesRequestVNext, _options) {
        const result = this.api.updateLangsWithHttpInfo(updateLanguagesRequestVNext, _options);
        return result.toPromise();
    }
    updateLangs(updateLanguagesRequestVNext, _options) {
        const result = this.api.updateLangs(updateLanguagesRequestVNext, _options);
        return result.toPromise();
    }
}
exports.PromiseBlogAuthorsApi = PromiseBlogAuthorsApi;
//# sourceMappingURL=PromiseAPI.js.map