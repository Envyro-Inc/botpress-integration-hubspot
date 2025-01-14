"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../../codegen/crm/owners/index");
const index_2 = require("../../../../index");
describe('api client', () => {
    it('is discoverable', () => {
        const client = new index_2.Client().crm.owners;
        expect(client.hasOwnProperty('ownersApi')).toBeTruthy();
        expect(index_1.OwnersApi.name).toBe(client.ownersApi.constructor.name);
    });
});
//# sourceMappingURL=owners.spec.js.map