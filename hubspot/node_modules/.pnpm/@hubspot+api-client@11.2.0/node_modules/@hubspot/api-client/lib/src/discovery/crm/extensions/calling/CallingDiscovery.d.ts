import { RecordingSettingsApi, SettingsApi } from '../../../../../codegen/crm/extensions/calling/index';
import IConfiguration from '../../../../configuration/IConfiguration';
export default class CallingDiscovery {
    settingsApi: SettingsApi;
    recordingSettingsApi: RecordingSettingsApi;
    constructor(config: IConfiguration);
}
