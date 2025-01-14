"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../../../codegen/crm/extensions/calling/index");
const index_2 = require("../../../../../index");
describe('api client', () => {
    it('is discoverable', () => {
        const client = new index_2.Client().crm.extensions.calling;
        expect(client.hasOwnProperty('settingsApi')).toBeTruthy();
        expect(index_1.SettingsApi.name).toBe(client.settingsApi.constructor.name);
        expect(client.hasOwnProperty('recordingSettingsApi')).toBeTruthy();
        expect(index_1.RecordingSettingsApi.name).toBe(client.recordingSettingsApi.constructor.name);
    });
});
//# sourceMappingURL=calling.spec.js.map