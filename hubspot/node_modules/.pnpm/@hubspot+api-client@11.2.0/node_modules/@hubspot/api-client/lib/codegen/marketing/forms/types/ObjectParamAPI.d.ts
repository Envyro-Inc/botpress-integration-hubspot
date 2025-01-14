import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { CollectionResponseFormDefinitionBaseForwardPaging } from '../models/CollectionResponseFormDefinitionBaseForwardPaging';
import { FormDefinitionBase } from '../models/FormDefinitionBase';
import { FormDefinitionCreateRequestBase } from '../models/FormDefinitionCreateRequestBase';
import { HubSpotFormDefinition } from '../models/HubSpotFormDefinition';
import { HubSpotFormDefinitionPatchRequest } from '../models/HubSpotFormDefinitionPatchRequest';
import { FormsApiRequestFactory, FormsApiResponseProcessor } from "../apis/FormsApi";
export interface FormsApiArchiveRequest {
    formId: string;
}
export interface FormsApiCreateRequest {
    formDefinitionCreateRequestBase: FormDefinitionCreateRequestBase;
}
export interface FormsApiGetByIdRequest {
    formId: string;
    archived?: boolean;
}
export interface FormsApiGetPageRequest {
    after?: string;
    limit?: number;
    archived?: boolean;
    formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>;
}
export interface FormsApiReplaceRequest {
    formId: string;
    hubSpotFormDefinition: HubSpotFormDefinition;
}
export interface FormsApiUpdateRequest {
    formId: string;
    hubSpotFormDefinitionPatchRequest: HubSpotFormDefinitionPatchRequest;
}
export declare class ObjectFormsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FormsApiRequestFactory, responseProcessor?: FormsApiResponseProcessor);
    archiveWithHttpInfo(param: FormsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>>;
    archive(param: FormsApiArchiveRequest, options?: Configuration): Promise<void>;
    createWithHttpInfo(param: FormsApiCreateRequest, options?: Configuration): Promise<HttpInfo<FormDefinitionBase>>;
    create(param: FormsApiCreateRequest, options?: Configuration): Promise<FormDefinitionBase>;
    getByIdWithHttpInfo(param: FormsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<FormDefinitionBase>>;
    getById(param: FormsApiGetByIdRequest, options?: Configuration): Promise<FormDefinitionBase>;
    getPageWithHttpInfo(param?: FormsApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseFormDefinitionBaseForwardPaging>>;
    getPage(param?: FormsApiGetPageRequest, options?: Configuration): Promise<CollectionResponseFormDefinitionBaseForwardPaging>;
    replaceWithHttpInfo(param: FormsApiReplaceRequest, options?: Configuration): Promise<HttpInfo<FormDefinitionBase>>;
    replace(param: FormsApiReplaceRequest, options?: Configuration): Promise<FormDefinitionBase>;
    updateWithHttpInfo(param: FormsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<FormDefinitionBase>>;
    update(param: FormsApiUpdateRequest, options?: Configuration): Promise<FormDefinitionBase>;
}
