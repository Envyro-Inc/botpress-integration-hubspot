import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponseFormDefinitionBaseForwardPaging } from '../models/CollectionResponseFormDefinitionBaseForwardPaging';
import { FormDefinitionBase } from '../models/FormDefinitionBase';
import { FormDefinitionCreateRequestBase } from '../models/FormDefinitionCreateRequestBase';
import { HubSpotFormDefinition } from '../models/HubSpotFormDefinition';
import { HubSpotFormDefinitionPatchRequest } from '../models/HubSpotFormDefinitionPatchRequest';
import { FormsApiRequestFactory, FormsApiResponseProcessor } from "../apis/FormsApi";
export declare class PromiseFormsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FormsApiRequestFactory, responseProcessor?: FormsApiResponseProcessor);
    archiveWithHttpInfo(formId: string, _options?: Configuration): Promise<HttpInfo<void>>;
    archive(formId: string, _options?: Configuration): Promise<void>;
    createWithHttpInfo(formDefinitionCreateRequestBase: FormDefinitionCreateRequestBase, _options?: Configuration): Promise<HttpInfo<FormDefinitionBase>>;
    create(formDefinitionCreateRequestBase: FormDefinitionCreateRequestBase, _options?: Configuration): Promise<FormDefinitionBase>;
    getByIdWithHttpInfo(formId: string, archived?: boolean, _options?: Configuration): Promise<HttpInfo<FormDefinitionBase>>;
    getById(formId: string, archived?: boolean, _options?: Configuration): Promise<FormDefinitionBase>;
    getPageWithHttpInfo(after?: string, limit?: number, archived?: boolean, formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>, _options?: Configuration): Promise<HttpInfo<CollectionResponseFormDefinitionBaseForwardPaging>>;
    getPage(after?: string, limit?: number, archived?: boolean, formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>, _options?: Configuration): Promise<CollectionResponseFormDefinitionBaseForwardPaging>;
    replaceWithHttpInfo(formId: string, hubSpotFormDefinition: HubSpotFormDefinition, _options?: Configuration): Promise<HttpInfo<FormDefinitionBase>>;
    replace(formId: string, hubSpotFormDefinition: HubSpotFormDefinition, _options?: Configuration): Promise<FormDefinitionBase>;
    updateWithHttpInfo(formId: string, hubSpotFormDefinitionPatchRequest: HubSpotFormDefinitionPatchRequest, _options?: Configuration): Promise<HttpInfo<FormDefinitionBase>>;
    update(formId: string, hubSpotFormDefinitionPatchRequest: HubSpotFormDefinitionPatchRequest, _options?: Configuration): Promise<FormDefinitionBase>;
}
