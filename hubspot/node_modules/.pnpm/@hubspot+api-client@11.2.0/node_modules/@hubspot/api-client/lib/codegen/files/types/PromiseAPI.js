"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseFoldersApi = exports.PromiseFilesApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseFilesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableFilesApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(fileId, _options) {
        const result = this.api.archiveWithHttpInfo(fileId, _options);
        return result.toPromise();
    }
    archive(fileId, _options) {
        const result = this.api.archive(fileId, _options);
        return result.toPromise();
    }
    archiveGDPRWithHttpInfo(fileId, _options) {
        const result = this.api.archiveGDPRWithHttpInfo(fileId, _options);
        return result.toPromise();
    }
    archiveGDPR(fileId, _options) {
        const result = this.api.archiveGDPR(fileId, _options);
        return result.toPromise();
    }
    checkImportWithHttpInfo(taskId, _options) {
        const result = this.api.checkImportWithHttpInfo(taskId, _options);
        return result.toPromise();
    }
    checkImport(taskId, _options) {
        const result = this.api.checkImport(taskId, _options);
        return result.toPromise();
    }
    doSearchWithHttpInfo(properties, after, before, limit, sort, id, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderId, size, height, width, encoding, type, extension, url, isUsableInContent, allowsAnonymousAccess, _options) {
        const result = this.api.doSearchWithHttpInfo(properties, after, before, limit, sort, id, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderId, size, height, width, encoding, type, extension, url, isUsableInContent, allowsAnonymousAccess, _options);
        return result.toPromise();
    }
    doSearch(properties, after, before, limit, sort, id, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderId, size, height, width, encoding, type, extension, url, isUsableInContent, allowsAnonymousAccess, _options) {
        const result = this.api.doSearch(properties, after, before, limit, sort, id, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderId, size, height, width, encoding, type, extension, url, isUsableInContent, allowsAnonymousAccess, _options);
        return result.toPromise();
    }
    getByIdWithHttpInfo(fileId, properties, _options) {
        const result = this.api.getByIdWithHttpInfo(fileId, properties, _options);
        return result.toPromise();
    }
    getById(fileId, properties, _options) {
        const result = this.api.getById(fileId, properties, _options);
        return result.toPromise();
    }
    getMetadataWithHttpInfo(path, properties, _options) {
        const result = this.api.getMetadataWithHttpInfo(path, properties, _options);
        return result.toPromise();
    }
    getMetadata(path, properties, _options) {
        const result = this.api.getMetadata(path, properties, _options);
        return result.toPromise();
    }
    getSignedUrlWithHttpInfo(fileId, size, expirationSeconds, upscale, _options) {
        const result = this.api.getSignedUrlWithHttpInfo(fileId, size, expirationSeconds, upscale, _options);
        return result.toPromise();
    }
    getSignedUrl(fileId, size, expirationSeconds, upscale, _options) {
        const result = this.api.getSignedUrl(fileId, size, expirationSeconds, upscale, _options);
        return result.toPromise();
    }
    importFromUrlWithHttpInfo(importFromUrlInput, _options) {
        const result = this.api.importFromUrlWithHttpInfo(importFromUrlInput, _options);
        return result.toPromise();
    }
    importFromUrl(importFromUrlInput, _options) {
        const result = this.api.importFromUrl(importFromUrlInput, _options);
        return result.toPromise();
    }
    replaceWithHttpInfo(fileId, file, charsetHunch, options, _options) {
        const result = this.api.replaceWithHttpInfo(fileId, file, charsetHunch, options, _options);
        return result.toPromise();
    }
    replace(fileId, file, charsetHunch, options, _options) {
        const result = this.api.replace(fileId, file, charsetHunch, options, _options);
        return result.toPromise();
    }
    updatePropertiesWithHttpInfo(fileId, fileUpdateInput, _options) {
        const result = this.api.updatePropertiesWithHttpInfo(fileId, fileUpdateInput, _options);
        return result.toPromise();
    }
    updateProperties(fileId, fileUpdateInput, _options) {
        const result = this.api.updateProperties(fileId, fileUpdateInput, _options);
        return result.toPromise();
    }
    uploadWithHttpInfo(file, folderId, folderPath, fileName, charsetHunch, options, _options) {
        const result = this.api.uploadWithHttpInfo(file, folderId, folderPath, fileName, charsetHunch, options, _options);
        return result.toPromise();
    }
    upload(file, folderId, folderPath, fileName, charsetHunch, options, _options) {
        const result = this.api.upload(file, folderId, folderPath, fileName, charsetHunch, options, _options);
        return result.toPromise();
    }
}
exports.PromiseFilesApi = PromiseFilesApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromiseFoldersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableFoldersApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(folderId, _options) {
        const result = this.api.archiveWithHttpInfo(folderId, _options);
        return result.toPromise();
    }
    archive(folderId, _options) {
        const result = this.api.archive(folderId, _options);
        return result.toPromise();
    }
    archiveByPathWithHttpInfo(folderPath, _options) {
        const result = this.api.archiveByPathWithHttpInfo(folderPath, _options);
        return result.toPromise();
    }
    archiveByPath(folderPath, _options) {
        const result = this.api.archiveByPath(folderPath, _options);
        return result.toPromise();
    }
    checkUpdateStatusWithHttpInfo(taskId, _options) {
        const result = this.api.checkUpdateStatusWithHttpInfo(taskId, _options);
        return result.toPromise();
    }
    checkUpdateStatus(taskId, _options) {
        const result = this.api.checkUpdateStatus(taskId, _options);
        return result.toPromise();
    }
    createWithHttpInfo(folderInput, _options) {
        const result = this.api.createWithHttpInfo(folderInput, _options);
        return result.toPromise();
    }
    create(folderInput, _options) {
        const result = this.api.create(folderInput, _options);
        return result.toPromise();
    }
    doSearchWithHttpInfo(properties, after, before, limit, sort, id, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderId, _options) {
        const result = this.api.doSearchWithHttpInfo(properties, after, before, limit, sort, id, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderId, _options);
        return result.toPromise();
    }
    doSearch(properties, after, before, limit, sort, id, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderId, _options) {
        const result = this.api.doSearch(properties, after, before, limit, sort, id, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderId, _options);
        return result.toPromise();
    }
    getByIdWithHttpInfo(folderId, properties, _options) {
        const result = this.api.getByIdWithHttpInfo(folderId, properties, _options);
        return result.toPromise();
    }
    getById(folderId, properties, _options) {
        const result = this.api.getById(folderId, properties, _options);
        return result.toPromise();
    }
    getByPathWithHttpInfo(folderPath, properties, _options) {
        const result = this.api.getByPathWithHttpInfo(folderPath, properties, _options);
        return result.toPromise();
    }
    getByPath(folderPath, properties, _options) {
        const result = this.api.getByPath(folderPath, properties, _options);
        return result.toPromise();
    }
    updatePropertiesWithHttpInfo(folderUpdateInput, _options) {
        const result = this.api.updatePropertiesWithHttpInfo(folderUpdateInput, _options);
        return result.toPromise();
    }
    updateProperties(folderUpdateInput, _options) {
        const result = this.api.updateProperties(folderUpdateInput, _options);
        return result.toPromise();
    }
}
exports.PromiseFoldersApi = PromiseFoldersApi;
//# sourceMappingURL=PromiseAPI.js.map