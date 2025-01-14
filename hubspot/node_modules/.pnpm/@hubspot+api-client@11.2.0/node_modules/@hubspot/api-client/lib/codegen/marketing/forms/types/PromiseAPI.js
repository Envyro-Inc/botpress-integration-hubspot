"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseFormsApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseFormsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableFormsApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(formId, _options) {
        const result = this.api.archiveWithHttpInfo(formId, _options);
        return result.toPromise();
    }
    archive(formId, _options) {
        const result = this.api.archive(formId, _options);
        return result.toPromise();
    }
    createWithHttpInfo(formDefinitionCreateRequestBase, _options) {
        const result = this.api.createWithHttpInfo(formDefinitionCreateRequestBase, _options);
        return result.toPromise();
    }
    create(formDefinitionCreateRequestBase, _options) {
        const result = this.api.create(formDefinitionCreateRequestBase, _options);
        return result.toPromise();
    }
    getByIdWithHttpInfo(formId, archived, _options) {
        const result = this.api.getByIdWithHttpInfo(formId, archived, _options);
        return result.toPromise();
    }
    getById(formId, archived, _options) {
        const result = this.api.getById(formId, archived, _options);
        return result.toPromise();
    }
    getPageWithHttpInfo(after, limit, archived, formTypes, _options) {
        const result = this.api.getPageWithHttpInfo(after, limit, archived, formTypes, _options);
        return result.toPromise();
    }
    getPage(after, limit, archived, formTypes, _options) {
        const result = this.api.getPage(after, limit, archived, formTypes, _options);
        return result.toPromise();
    }
    replaceWithHttpInfo(formId, hubSpotFormDefinition, _options) {
        const result = this.api.replaceWithHttpInfo(formId, hubSpotFormDefinition, _options);
        return result.toPromise();
    }
    replace(formId, hubSpotFormDefinition, _options) {
        const result = this.api.replace(formId, hubSpotFormDefinition, _options);
        return result.toPromise();
    }
    updateWithHttpInfo(formId, hubSpotFormDefinitionPatchRequest, _options) {
        const result = this.api.updateWithHttpInfo(formId, hubSpotFormDefinitionPatchRequest, _options);
        return result.toPromise();
    }
    update(formId, hubSpotFormDefinitionPatchRequest, _options) {
        const result = this.api.update(formId, hubSpotFormDefinitionPatchRequest, _options);
        return result.toPromise();
    }
}
exports.PromiseFormsApi = PromiseFormsApi;
//# sourceMappingURL=PromiseAPI.js.map