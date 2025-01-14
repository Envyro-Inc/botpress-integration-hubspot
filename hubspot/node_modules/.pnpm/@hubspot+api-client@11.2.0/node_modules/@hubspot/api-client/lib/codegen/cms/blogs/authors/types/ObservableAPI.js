"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableBlogAuthorsApi = void 0;
const rxjsStub_1 = require("../rxjsStub");
const rxjsStub_2 = require("../rxjsStub");
const BlogAuthorsApi_1 = require("../apis/BlogAuthorsApi");
class ObservableBlogAuthorsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BlogAuthorsApi_1.BlogAuthorsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BlogAuthorsApi_1.BlogAuthorsApiResponseProcessor();
    }
    archiveWithHttpInfo(objectId, archived, _options) {
        const requestContextPromise = this.requestFactory.archive(objectId, archived, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.archiveWithHttpInfo(rsp)));
        }));
    }
    archive(objectId, archived, _options) {
        return this.archiveWithHttpInfo(objectId, archived, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    archiveBatchWithHttpInfo(batchInputString, _options) {
        const requestContextPromise = this.requestFactory.archiveBatch(batchInputString, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.archiveBatchWithHttpInfo(rsp)));
        }));
    }
    archiveBatch(batchInputString, _options) {
        return this.archiveBatchWithHttpInfo(batchInputString, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext, _options) {
        const requestContextPromise = this.requestFactory.attachToLangGroup(attachToLangPrimaryRequestVNext, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.attachToLangGroupWithHttpInfo(rsp)));
        }));
    }
    attachToLangGroup(attachToLangPrimaryRequestVNext, _options) {
        return this.attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    createWithHttpInfo(blogAuthor, _options) {
        const requestContextPromise = this.requestFactory.create(blogAuthor, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createWithHttpInfo(rsp)));
        }));
    }
    create(blogAuthor, _options) {
        return this.createWithHttpInfo(blogAuthor, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    createBatchWithHttpInfo(batchInputBlogAuthor, _options) {
        const requestContextPromise = this.requestFactory.createBatch(batchInputBlogAuthor, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createBatchWithHttpInfo(rsp)));
        }));
    }
    createBatch(batchInputBlogAuthor, _options) {
        return this.createBatchWithHttpInfo(batchInputBlogAuthor, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    createLangVariationWithHttpInfo(blogAuthorCloneRequestVNext, _options) {
        const requestContextPromise = this.requestFactory.createLangVariation(blogAuthorCloneRequestVNext, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.createLangVariationWithHttpInfo(rsp)));
        }));
    }
    createLangVariation(blogAuthorCloneRequestVNext, _options) {
        return this.createLangVariationWithHttpInfo(blogAuthorCloneRequestVNext, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext, _options) {
        const requestContextPromise = this.requestFactory.detachFromLangGroup(detachFromLangGroupRequestVNext, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.detachFromLangGroupWithHttpInfo(rsp)));
        }));
    }
    detachFromLangGroup(detachFromLangGroupRequestVNext, _options) {
        return this.detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    getByIdWithHttpInfo(objectId, archived, property, _options) {
        const requestContextPromise = this.requestFactory.getById(objectId, archived, property, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
        }));
    }
    getById(objectId, archived, property, _options) {
        return this.getByIdWithHttpInfo(objectId, archived, property, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options) {
        const requestContextPromise = this.requestFactory.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.getPageWithHttpInfo(rsp)));
        }));
    }
    getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options) {
        return this.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    readBatchWithHttpInfo(batchInputString, archived, _options) {
        const requestContextPromise = this.requestFactory.readBatch(batchInputString, archived, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.readBatchWithHttpInfo(rsp)));
        }));
    }
    readBatch(batchInputString, archived, _options) {
        return this.readBatchWithHttpInfo(batchInputString, archived, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext, _options) {
        const requestContextPromise = this.requestFactory.setLangPrimary(setNewLanguagePrimaryRequestVNext, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.setLangPrimaryWithHttpInfo(rsp)));
        }));
    }
    setLangPrimary(setNewLanguagePrimaryRequestVNext, _options) {
        return this.setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    updateWithHttpInfo(objectId, blogAuthor, archived, _options) {
        const requestContextPromise = this.requestFactory.update(objectId, blogAuthor, archived, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateWithHttpInfo(rsp)));
        }));
    }
    update(objectId, blogAuthor, archived, _options) {
        return this.updateWithHttpInfo(objectId, blogAuthor, archived, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    updateBatchWithHttpInfo(batchInputJsonNode, archived, _options) {
        const requestContextPromise = this.requestFactory.updateBatch(batchInputJsonNode, archived, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateBatchWithHttpInfo(rsp)));
        }));
    }
    updateBatch(batchInputJsonNode, archived, _options) {
        return this.updateBatchWithHttpInfo(batchInputJsonNode, archived, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
    updateLangsWithHttpInfo(updateLanguagesRequestVNext, _options) {
        const requestContextPromise = this.requestFactory.updateLangs(updateLanguagesRequestVNext, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx) => this.configuration.httpApi.send(ctx))).
            pipe((0, rxjsStub_2.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp) => this.responseProcessor.updateLangsWithHttpInfo(rsp)));
        }));
    }
    updateLangs(updateLanguagesRequestVNext, _options) {
        return this.updateLangsWithHttpInfo(updateLanguagesRequestVNext, _options).pipe((0, rxjsStub_2.map)((apiResponse) => apiResponse.data));
    }
}
exports.ObservableBlogAuthorsApi = ObservableBlogAuthorsApi;
//# sourceMappingURL=ObservableAPI.js.map