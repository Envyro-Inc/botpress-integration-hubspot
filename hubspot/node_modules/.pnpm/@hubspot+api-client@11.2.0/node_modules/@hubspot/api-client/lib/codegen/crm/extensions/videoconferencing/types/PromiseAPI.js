"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseSettingsApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseSettingsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }
    archiveWithHttpInfo(appId, _options) {
        const result = this.api.archiveWithHttpInfo(appId, _options);
        return result.toPromise();
    }
    archive(appId, _options) {
        const result = this.api.archive(appId, _options);
        return result.toPromise();
    }
    getByIdWithHttpInfo(appId, _options) {
        const result = this.api.getByIdWithHttpInfo(appId, _options);
        return result.toPromise();
    }
    getById(appId, _options) {
        const result = this.api.getById(appId, _options);
        return result.toPromise();
    }
    replaceWithHttpInfo(appId, externalSettings, _options) {
        const result = this.api.replaceWithHttpInfo(appId, externalSettings, _options);
        return result.toPromise();
    }
    replace(appId, externalSettings, _options) {
        const result = this.api.replace(appId, externalSettings, _options);
        return result.toPromise();
    }
}
exports.PromiseSettingsApi = PromiseSettingsApi;
//# sourceMappingURL=PromiseAPI.js.map