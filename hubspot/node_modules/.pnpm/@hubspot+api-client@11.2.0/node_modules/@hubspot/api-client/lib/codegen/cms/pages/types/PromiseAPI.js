"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseSitePagesApi = exports.PromiseLandingPagesApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseLandingPagesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableLandingPagesApi(configuration, requestFactory, responseProcessor);
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
    archiveFolderWithHttpInfo(objectId, archived, _options) {
        const result = this.api.archiveFolderWithHttpInfo(objectId, archived, _options);
        return result.toPromise();
    }
    archiveFolder(objectId, archived, _options) {
        const result = this.api.archiveFolder(objectId, archived, _options);
        return result.toPromise();
    }
    archiveFoldersWithHttpInfo(batchInputString, _options) {
        const result = this.api.archiveFoldersWithHttpInfo(batchInputString, _options);
        return result.toPromise();
    }
    archiveFolders(batchInputString, _options) {
        const result = this.api.archiveFolders(batchInputString, _options);
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
    cloneWithHttpInfo(contentCloneRequestVNext, _options) {
        const result = this.api.cloneWithHttpInfo(contentCloneRequestVNext, _options);
        return result.toPromise();
    }
    clone(contentCloneRequestVNext, _options) {
        const result = this.api.clone(contentCloneRequestVNext, _options);
        return result.toPromise();
    }
    createWithHttpInfo(page, _options) {
        const result = this.api.createWithHttpInfo(page, _options);
        return result.toPromise();
    }
    create(page, _options) {
        const result = this.api.create(page, _options);
        return result.toPromise();
    }
    createABTestVariationWithHttpInfo(abTestCreateRequestVNext, _options) {
        const result = this.api.createABTestVariationWithHttpInfo(abTestCreateRequestVNext, _options);
        return result.toPromise();
    }
    createABTestVariation(abTestCreateRequestVNext, _options) {
        const result = this.api.createABTestVariation(abTestCreateRequestVNext, _options);
        return result.toPromise();
    }
    createBatchWithHttpInfo(batchInputPage, _options) {
        const result = this.api.createBatchWithHttpInfo(batchInputPage, _options);
        return result.toPromise();
    }
    createBatch(batchInputPage, _options) {
        const result = this.api.createBatch(batchInputPage, _options);
        return result.toPromise();
    }
    createFolderWithHttpInfo(contentFolder, _options) {
        const result = this.api.createFolderWithHttpInfo(contentFolder, _options);
        return result.toPromise();
    }
    createFolder(contentFolder, _options) {
        const result = this.api.createFolder(contentFolder, _options);
        return result.toPromise();
    }
    createFoldersWithHttpInfo(batchInputContentFolder, _options) {
        const result = this.api.createFoldersWithHttpInfo(batchInputContentFolder, _options);
        return result.toPromise();
    }
    createFolders(batchInputContentFolder, _options) {
        const result = this.api.createFolders(batchInputContentFolder, _options);
        return result.toPromise();
    }
    createLangVariationWithHttpInfo(contentLanguageCloneRequestVNext, _options) {
        const result = this.api.createLangVariationWithHttpInfo(contentLanguageCloneRequestVNext, _options);
        return result.toPromise();
    }
    createLangVariation(contentLanguageCloneRequestVNext, _options) {
        const result = this.api.createLangVariation(contentLanguageCloneRequestVNext, _options);
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
    endActiveABTestWithHttpInfo(abTestEndRequestVNext, _options) {
        const result = this.api.endActiveABTestWithHttpInfo(abTestEndRequestVNext, _options);
        return result.toPromise();
    }
    endActiveABTest(abTestEndRequestVNext, _options) {
        const result = this.api.endActiveABTest(abTestEndRequestVNext, _options);
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
    getDraftByIdWithHttpInfo(objectId, _options) {
        const result = this.api.getDraftByIdWithHttpInfo(objectId, _options);
        return result.toPromise();
    }
    getDraftById(objectId, _options) {
        const result = this.api.getDraftById(objectId, _options);
        return result.toPromise();
    }
    getFolderByIdWithHttpInfo(objectId, archived, property, _options) {
        const result = this.api.getFolderByIdWithHttpInfo(objectId, archived, property, _options);
        return result.toPromise();
    }
    getFolderById(objectId, archived, property, _options) {
        const result = this.api.getFolderById(objectId, archived, property, _options);
        return result.toPromise();
    }
    getFolderPreviousVersionWithHttpInfo(objectId, revisionId, _options) {
        const result = this.api.getFolderPreviousVersionWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }
    getFolderPreviousVersion(objectId, revisionId, _options) {
        const result = this.api.getFolderPreviousVersion(objectId, revisionId, _options);
        return result.toPromise();
    }
    getFolderPreviousVersionsWithHttpInfo(objectId, after, before, limit, _options) {
        const result = this.api.getFolderPreviousVersionsWithHttpInfo(objectId, after, before, limit, _options);
        return result.toPromise();
    }
    getFolderPreviousVersions(objectId, after, before, limit, _options) {
        const result = this.api.getFolderPreviousVersions(objectId, after, before, limit, _options);
        return result.toPromise();
    }
    getFoldersPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options) {
        const result = this.api.getFoldersPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);
        return result.toPromise();
    }
    getFoldersPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options) {
        const result = this.api.getFoldersPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);
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
    getPreviousVersionWithHttpInfo(objectId, revisionId, _options) {
        const result = this.api.getPreviousVersionWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }
    getPreviousVersion(objectId, revisionId, _options) {
        const result = this.api.getPreviousVersion(objectId, revisionId, _options);
        return result.toPromise();
    }
    getPreviousVersionsWithHttpInfo(objectId, after, before, limit, _options) {
        const result = this.api.getPreviousVersionsWithHttpInfo(objectId, after, before, limit, _options);
        return result.toPromise();
    }
    getPreviousVersions(objectId, after, before, limit, _options) {
        const result = this.api.getPreviousVersions(objectId, after, before, limit, _options);
        return result.toPromise();
    }
    pushLiveWithHttpInfo(objectId, _options) {
        const result = this.api.pushLiveWithHttpInfo(objectId, _options);
        return result.toPromise();
    }
    pushLive(objectId, _options) {
        const result = this.api.pushLive(objectId, _options);
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
    readFoldersWithHttpInfo(batchInputString, archived, _options) {
        const result = this.api.readFoldersWithHttpInfo(batchInputString, archived, _options);
        return result.toPromise();
    }
    readFolders(batchInputString, archived, _options) {
        const result = this.api.readFolders(batchInputString, archived, _options);
        return result.toPromise();
    }
    rerunPreviousABTestWithHttpInfo(abTestRerunRequestVNext, _options) {
        const result = this.api.rerunPreviousABTestWithHttpInfo(abTestRerunRequestVNext, _options);
        return result.toPromise();
    }
    rerunPreviousABTest(abTestRerunRequestVNext, _options) {
        const result = this.api.rerunPreviousABTest(abTestRerunRequestVNext, _options);
        return result.toPromise();
    }
    resetDraftWithHttpInfo(objectId, _options) {
        const result = this.api.resetDraftWithHttpInfo(objectId, _options);
        return result.toPromise();
    }
    resetDraft(objectId, _options) {
        const result = this.api.resetDraft(objectId, _options);
        return result.toPromise();
    }
    restoreFolderPreviousVersionWithHttpInfo(objectId, revisionId, _options) {
        const result = this.api.restoreFolderPreviousVersionWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }
    restoreFolderPreviousVersion(objectId, revisionId, _options) {
        const result = this.api.restoreFolderPreviousVersion(objectId, revisionId, _options);
        return result.toPromise();
    }
    restorePreviousVersionWithHttpInfo(objectId, revisionId, _options) {
        const result = this.api.restorePreviousVersionWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }
    restorePreviousVersion(objectId, revisionId, _options) {
        const result = this.api.restorePreviousVersion(objectId, revisionId, _options);
        return result.toPromise();
    }
    restorePreviousVersionToDraftWithHttpInfo(objectId, revisionId, _options) {
        const result = this.api.restorePreviousVersionToDraftWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }
    restorePreviousVersionToDraft(objectId, revisionId, _options) {
        const result = this.api.restorePreviousVersionToDraft(objectId, revisionId, _options);
        return result.toPromise();
    }
    scheduleWithHttpInfo(contentScheduleRequestVNext, _options) {
        const result = this.api.scheduleWithHttpInfo(contentScheduleRequestVNext, _options);
        return result.toPromise();
    }
    schedule(contentScheduleRequestVNext, _options) {
        const result = this.api.schedule(contentScheduleRequestVNext, _options);
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
    updateWithHttpInfo(objectId, page, archived, _options) {
        const result = this.api.updateWithHttpInfo(objectId, page, archived, _options);
        return result.toPromise();
    }
    update(objectId, page, archived, _options) {
        const result = this.api.update(objectId, page, archived, _options);
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
    updateDraftWithHttpInfo(objectId, page, _options) {
        const result = this.api.updateDraftWithHttpInfo(objectId, page, _options);
        return result.toPromise();
    }
    updateDraft(objectId, page, _options) {
        const result = this.api.updateDraft(objectId, page, _options);
        return result.toPromise();
    }
    updateFolderWithHttpInfo(objectId, contentFolder, archived, _options) {
        const result = this.api.updateFolderWithHttpInfo(objectId, contentFolder, archived, _options);
        return result.toPromise();
    }
    updateFolder(objectId, contentFolder, archived, _options) {
        const result = this.api.updateFolder(objectId, contentFolder, archived, _options);
        return result.toPromise();
    }
    updateFoldersWithHttpInfo(batchInputJsonNode, archived, _options) {
        const result = this.api.updateFoldersWithHttpInfo(batchInputJsonNode, archived, _options);
        return result.toPromise();
    }
    updateFolders(batchInputJsonNode, archived, _options) {
        const result = this.api.updateFolders(batchInputJsonNode, archived, _options);
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
exports.PromiseLandingPagesApi = PromiseLandingPagesApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromiseSitePagesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableSitePagesApi(configuration, requestFactory, responseProcessor);
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
    cloneWithHttpInfo(contentCloneRequestVNext, _options) {
        const result = this.api.cloneWithHttpInfo(contentCloneRequestVNext, _options);
        return result.toPromise();
    }
    clone(contentCloneRequestVNext, _options) {
        const result = this.api.clone(contentCloneRequestVNext, _options);
        return result.toPromise();
    }
    createWithHttpInfo(page, _options) {
        const result = this.api.createWithHttpInfo(page, _options);
        return result.toPromise();
    }
    create(page, _options) {
        const result = this.api.create(page, _options);
        return result.toPromise();
    }
    createABTestVariationWithHttpInfo(abTestCreateRequestVNext, _options) {
        const result = this.api.createABTestVariationWithHttpInfo(abTestCreateRequestVNext, _options);
        return result.toPromise();
    }
    createABTestVariation(abTestCreateRequestVNext, _options) {
        const result = this.api.createABTestVariation(abTestCreateRequestVNext, _options);
        return result.toPromise();
    }
    createBatchWithHttpInfo(batchInputPage, _options) {
        const result = this.api.createBatchWithHttpInfo(batchInputPage, _options);
        return result.toPromise();
    }
    createBatch(batchInputPage, _options) {
        const result = this.api.createBatch(batchInputPage, _options);
        return result.toPromise();
    }
    createLangVariationWithHttpInfo(contentLanguageCloneRequestVNext, _options) {
        const result = this.api.createLangVariationWithHttpInfo(contentLanguageCloneRequestVNext, _options);
        return result.toPromise();
    }
    createLangVariation(contentLanguageCloneRequestVNext, _options) {
        const result = this.api.createLangVariation(contentLanguageCloneRequestVNext, _options);
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
    endActiveABTestWithHttpInfo(abTestEndRequestVNext, _options) {
        const result = this.api.endActiveABTestWithHttpInfo(abTestEndRequestVNext, _options);
        return result.toPromise();
    }
    endActiveABTest(abTestEndRequestVNext, _options) {
        const result = this.api.endActiveABTest(abTestEndRequestVNext, _options);
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
    getDraftByIdWithHttpInfo(objectId, _options) {
        const result = this.api.getDraftByIdWithHttpInfo(objectId, _options);
        return result.toPromise();
    }
    getDraftById(objectId, _options) {
        const result = this.api.getDraftById(objectId, _options);
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
    getPreviousVersionWithHttpInfo(objectId, revisionId, _options) {
        const result = this.api.getPreviousVersionWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }
    getPreviousVersion(objectId, revisionId, _options) {
        const result = this.api.getPreviousVersion(objectId, revisionId, _options);
        return result.toPromise();
    }
    getPreviousVersionsWithHttpInfo(objectId, after, before, limit, _options) {
        const result = this.api.getPreviousVersionsWithHttpInfo(objectId, after, before, limit, _options);
        return result.toPromise();
    }
    getPreviousVersions(objectId, after, before, limit, _options) {
        const result = this.api.getPreviousVersions(objectId, after, before, limit, _options);
        return result.toPromise();
    }
    pushLiveWithHttpInfo(objectId, _options) {
        const result = this.api.pushLiveWithHttpInfo(objectId, _options);
        return result.toPromise();
    }
    pushLive(objectId, _options) {
        const result = this.api.pushLive(objectId, _options);
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
    rerunPreviousABTestWithHttpInfo(abTestRerunRequestVNext, _options) {
        const result = this.api.rerunPreviousABTestWithHttpInfo(abTestRerunRequestVNext, _options);
        return result.toPromise();
    }
    rerunPreviousABTest(abTestRerunRequestVNext, _options) {
        const result = this.api.rerunPreviousABTest(abTestRerunRequestVNext, _options);
        return result.toPromise();
    }
    resetDraftWithHttpInfo(objectId, _options) {
        const result = this.api.resetDraftWithHttpInfo(objectId, _options);
        return result.toPromise();
    }
    resetDraft(objectId, _options) {
        const result = this.api.resetDraft(objectId, _options);
        return result.toPromise();
    }
    restorePreviousVersionWithHttpInfo(objectId, revisionId, _options) {
        const result = this.api.restorePreviousVersionWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }
    restorePreviousVersion(objectId, revisionId, _options) {
        const result = this.api.restorePreviousVersion(objectId, revisionId, _options);
        return result.toPromise();
    }
    restorePreviousVersionToDraftWithHttpInfo(objectId, revisionId, _options) {
        const result = this.api.restorePreviousVersionToDraftWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }
    restorePreviousVersionToDraft(objectId, revisionId, _options) {
        const result = this.api.restorePreviousVersionToDraft(objectId, revisionId, _options);
        return result.toPromise();
    }
    scheduleWithHttpInfo(contentScheduleRequestVNext, _options) {
        const result = this.api.scheduleWithHttpInfo(contentScheduleRequestVNext, _options);
        return result.toPromise();
    }
    schedule(contentScheduleRequestVNext, _options) {
        const result = this.api.schedule(contentScheduleRequestVNext, _options);
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
    updateWithHttpInfo(objectId, page, archived, _options) {
        const result = this.api.updateWithHttpInfo(objectId, page, archived, _options);
        return result.toPromise();
    }
    update(objectId, page, archived, _options) {
        const result = this.api.update(objectId, page, archived, _options);
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
    updateDraftWithHttpInfo(objectId, page, _options) {
        const result = this.api.updateDraftWithHttpInfo(objectId, page, _options);
        return result.toPromise();
    }
    updateDraft(objectId, page, _options) {
        const result = this.api.updateDraft(objectId, page, _options);
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
exports.PromiseSitePagesApi = PromiseSitePagesApi;
//# sourceMappingURL=PromiseAPI.js.map