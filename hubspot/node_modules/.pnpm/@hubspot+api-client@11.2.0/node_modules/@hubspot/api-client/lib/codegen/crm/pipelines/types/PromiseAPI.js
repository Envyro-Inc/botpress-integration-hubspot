"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromisePipelinesApi = exports.PromisePipelineStagesApi = exports.PromisePipelineStageAuditsApi = exports.PromisePipelineAuditsApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromisePipelineAuditsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservablePipelineAuditsApi(configuration, requestFactory, responseProcessor);
    }
    getAuditWithHttpInfo(objectType, pipelineId, _options) {
        const result = this.api.getAuditWithHttpInfo(objectType, pipelineId, _options);
        return result.toPromise();
    }
    getAudit(objectType, pipelineId, _options) {
        const result = this.api.getAudit(objectType, pipelineId, _options);
        return result.toPromise();
    }
}
exports.PromisePipelineAuditsApi = PromisePipelineAuditsApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromisePipelineStageAuditsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservablePipelineStageAuditsApi(configuration, requestFactory, responseProcessor);
    }
    getAuditWithHttpInfo(objectType, stageId, _options) {
        const result = this.api.getAuditWithHttpInfo(objectType, stageId, _options);
        return result.toPromise();
    }
    getAudit(objectType, stageId, _options) {
        const result = this.api.getAudit(objectType, stageId, _options);
        return result.toPromise();
    }
}
exports.PromisePipelineStageAuditsApi = PromisePipelineStageAuditsApi;
const ObservableAPI_3 = require("./ObservableAPI");
class PromisePipelineStagesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservablePipelineStagesApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(objectType, pipelineId, stageId, _options) {
        const result = this.api.archiveWithHttpInfo(objectType, pipelineId, stageId, _options);
        return result.toPromise();
    }
    archive(objectType, pipelineId, stageId, _options) {
        const result = this.api.archive(objectType, pipelineId, stageId, _options);
        return result.toPromise();
    }
    createWithHttpInfo(objectType, pipelineId, pipelineStageInput, _options) {
        const result = this.api.createWithHttpInfo(objectType, pipelineId, pipelineStageInput, _options);
        return result.toPromise();
    }
    create(objectType, pipelineId, pipelineStageInput, _options) {
        const result = this.api.create(objectType, pipelineId, pipelineStageInput, _options);
        return result.toPromise();
    }
    getAllWithHttpInfo(objectType, pipelineId, _options) {
        const result = this.api.getAllWithHttpInfo(objectType, pipelineId, _options);
        return result.toPromise();
    }
    getAll(objectType, pipelineId, _options) {
        const result = this.api.getAll(objectType, pipelineId, _options);
        return result.toPromise();
    }
    getByIdWithHttpInfo(objectType, pipelineId, stageId, _options) {
        const result = this.api.getByIdWithHttpInfo(objectType, pipelineId, stageId, _options);
        return result.toPromise();
    }
    getById(objectType, pipelineId, stageId, _options) {
        const result = this.api.getById(objectType, pipelineId, stageId, _options);
        return result.toPromise();
    }
    replaceWithHttpInfo(objectType, pipelineId, stageId, pipelineStageInput, _options) {
        const result = this.api.replaceWithHttpInfo(objectType, pipelineId, stageId, pipelineStageInput, _options);
        return result.toPromise();
    }
    replace(objectType, pipelineId, stageId, pipelineStageInput, _options) {
        const result = this.api.replace(objectType, pipelineId, stageId, pipelineStageInput, _options);
        return result.toPromise();
    }
    updateWithHttpInfo(objectType, pipelineId, stageId, pipelineStagePatchInput, _options) {
        const result = this.api.updateWithHttpInfo(objectType, pipelineId, stageId, pipelineStagePatchInput, _options);
        return result.toPromise();
    }
    update(objectType, pipelineId, stageId, pipelineStagePatchInput, _options) {
        const result = this.api.update(objectType, pipelineId, stageId, pipelineStagePatchInput, _options);
        return result.toPromise();
    }
}
exports.PromisePipelineStagesApi = PromisePipelineStagesApi;
const ObservableAPI_4 = require("./ObservableAPI");
class PromisePipelinesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservablePipelinesApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(objectType, pipelineId, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options) {
        const result = this.api.archiveWithHttpInfo(objectType, pipelineId, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options);
        return result.toPromise();
    }
    archive(objectType, pipelineId, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options) {
        const result = this.api.archive(objectType, pipelineId, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options);
        return result.toPromise();
    }
    createWithHttpInfo(objectType, pipelineInput, _options) {
        const result = this.api.createWithHttpInfo(objectType, pipelineInput, _options);
        return result.toPromise();
    }
    create(objectType, pipelineInput, _options) {
        const result = this.api.create(objectType, pipelineInput, _options);
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
    getByIdWithHttpInfo(objectType, pipelineId, _options) {
        const result = this.api.getByIdWithHttpInfo(objectType, pipelineId, _options);
        return result.toPromise();
    }
    getById(objectType, pipelineId, _options) {
        const result = this.api.getById(objectType, pipelineId, _options);
        return result.toPromise();
    }
    replaceWithHttpInfo(objectType, pipelineId, pipelineInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options) {
        const result = this.api.replaceWithHttpInfo(objectType, pipelineId, pipelineInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options);
        return result.toPromise();
    }
    replace(objectType, pipelineId, pipelineInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options) {
        const result = this.api.replace(objectType, pipelineId, pipelineInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options);
        return result.toPromise();
    }
    updateWithHttpInfo(objectType, pipelineId, pipelinePatchInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options) {
        const result = this.api.updateWithHttpInfo(objectType, pipelineId, pipelinePatchInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options);
        return result.toPromise();
    }
    update(objectType, pipelineId, pipelinePatchInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options) {
        const result = this.api.update(objectType, pipelineId, pipelinePatchInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options);
        return result.toPromise();
    }
}
exports.PromisePipelinesApi = PromisePipelinesApi;
//# sourceMappingURL=PromiseAPI.js.map