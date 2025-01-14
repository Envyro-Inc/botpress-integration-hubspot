"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseDefinitionsApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseDefinitionsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefinitionsApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(fromObjectType, toObjectType, associationTypeId, _options) {
        const result = this.api.archiveWithHttpInfo(fromObjectType, toObjectType, associationTypeId, _options);
        return result.toPromise();
    }
    archive(fromObjectType, toObjectType, associationTypeId, _options) {
        const result = this.api.archive(fromObjectType, toObjectType, associationTypeId, _options);
        return result.toPromise();
    }
    createWithHttpInfo(fromObjectType, toObjectType, publicAssociationDefinitionCreateRequest, _options) {
        const result = this.api.createWithHttpInfo(fromObjectType, toObjectType, publicAssociationDefinitionCreateRequest, _options);
        return result.toPromise();
    }
    create(fromObjectType, toObjectType, publicAssociationDefinitionCreateRequest, _options) {
        const result = this.api.create(fromObjectType, toObjectType, publicAssociationDefinitionCreateRequest, _options);
        return result.toPromise();
    }
    getAllWithHttpInfo(fromObjectType, toObjectType, _options) {
        const result = this.api.getAllWithHttpInfo(fromObjectType, toObjectType, _options);
        return result.toPromise();
    }
    getAll(fromObjectType, toObjectType, _options) {
        const result = this.api.getAll(fromObjectType, toObjectType, _options);
        return result.toPromise();
    }
    updateWithHttpInfo(fromObjectType, toObjectType, publicAssociationDefinitionUpdateRequest, _options) {
        const result = this.api.updateWithHttpInfo(fromObjectType, toObjectType, publicAssociationDefinitionUpdateRequest, _options);
        return result.toPromise();
    }
    update(fromObjectType, toObjectType, publicAssociationDefinitionUpdateRequest, _options) {
        const result = this.api.update(fromObjectType, toObjectType, publicAssociationDefinitionUpdateRequest, _options);
        return result.toPromise();
    }
}
exports.PromiseDefinitionsApi = PromiseDefinitionsApi;
//# sourceMappingURL=PromiseAPI.js.map