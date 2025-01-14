import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { CollectionResponseFormDefinitionBaseForwardPaging } from '../models/CollectionResponseFormDefinitionBaseForwardPaging';
import { FormDefinitionBase } from '../models/FormDefinitionBase';
import { FormDefinitionCreateRequestBase } from '../models/FormDefinitionCreateRequestBase';
import { HubSpotFormDefinition } from '../models/HubSpotFormDefinition';
import { HubSpotFormDefinitionPatchRequest } from '../models/HubSpotFormDefinitionPatchRequest';
import { FormsApiRequestFactory, FormsApiResponseProcessor } from "../apis/FormsApi";
export declare class ObservableFormsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FormsApiRequestFactory, responseProcessor?: FormsApiResponseProcessor);
    archiveWithHttpInfo(formId: string, _options?: Configuration): Observable<HttpInfo<void>>;
    archive(formId: string, _options?: Configuration): Observable<void>;
    createWithHttpInfo(formDefinitionCreateRequestBase: FormDefinitionCreateRequestBase, _options?: Configuration): Observable<HttpInfo<FormDefinitionBase>>;
    create(formDefinitionCreateRequestBase: FormDefinitionCreateRequestBase, _options?: Configuration): Observable<FormDefinitionBase>;
    getByIdWithHttpInfo(formId: string, archived?: boolean, _options?: Configuration): Observable<HttpInfo<FormDefinitionBase>>;
    getById(formId: string, archived?: boolean, _options?: Configuration): Observable<FormDefinitionBase>;
    getPageWithHttpInfo(after?: string, limit?: number, archived?: boolean, formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>, _options?: Configuration): Observable<HttpInfo<CollectionResponseFormDefinitionBaseForwardPaging>>;
    getPage(after?: string, limit?: number, archived?: boolean, formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>, _options?: Configuration): Observable<CollectionResponseFormDefinitionBaseForwardPaging>;
    replaceWithHttpInfo(formId: string, hubSpotFormDefinition: HubSpotFormDefinition, _options?: Configuration): Observable<HttpInfo<FormDefinitionBase>>;
    replace(formId: string, hubSpotFormDefinition: HubSpotFormDefinition, _options?: Configuration): Observable<FormDefinitionBase>;
    updateWithHttpInfo(formId: string, hubSpotFormDefinitionPatchRequest: HubSpotFormDefinitionPatchRequest, _options?: Configuration): Observable<HttpInfo<FormDefinitionBase>>;
    update(formId: string, hubSpotFormDefinitionPatchRequest: HubSpotFormDefinitionPatchRequest, _options?: Configuration): Observable<FormDefinitionBase>;
}
