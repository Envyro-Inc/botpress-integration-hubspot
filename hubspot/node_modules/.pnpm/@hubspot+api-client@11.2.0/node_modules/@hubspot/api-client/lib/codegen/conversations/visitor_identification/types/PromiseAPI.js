"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseGenerateApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseGenerateApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableGenerateApi(configuration, requestFactory, responseProcessor);
    }
    generateTokenWithHttpInfo(identificationTokenGenerationRequest, _options) {
        const result = this.api.generateTokenWithHttpInfo(identificationTokenGenerationRequest, _options);
        return result.toPromise();
    }
    generateToken(identificationTokenGenerationRequest, _options) {
        const result = this.api.generateToken(identificationTokenGenerationRequest, _options);
        return result.toPromise();
    }
}
exports.PromiseGenerateApi = PromiseGenerateApi;
//# sourceMappingURL=PromiseAPI.js.map