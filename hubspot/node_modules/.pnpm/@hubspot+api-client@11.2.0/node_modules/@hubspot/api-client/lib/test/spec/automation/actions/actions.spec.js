"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../../codegen/automation/actions/index");
const index_2 = require("../../../../index");
describe('api client', () => {
    it('is discoverable', () => {
        const client = new index_2.Client().automation.actions;
        expect(client.hasOwnProperty('callbacksApi')).toBeTruthy();
        expect(index_1.CallbacksApi.name).toBe(client.callbacksApi.constructor.name);
        expect(client.hasOwnProperty('definitionsApi')).toBeTruthy();
        expect(index_1.DefinitionsApi.name).toBe(client.definitionsApi.constructor.name);
        expect(client.hasOwnProperty('functionsApi')).toBeTruthy();
        expect(index_1.FunctionsApi.name).toBe(client.functionsApi.constructor.name);
        expect(client.hasOwnProperty('revisionsApi')).toBeTruthy();
        expect(index_1.RevisionsApi.name).toBe(client.revisionsApi.constructor.name);
    });
});
//# sourceMappingURL=actions.spec.js.map