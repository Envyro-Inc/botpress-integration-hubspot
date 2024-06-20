import { Client } from "@hubspot/api-client";

/**
 * HubSpotApi Class: Provides methods to interact with HubSpot's API.
 *
 * Methods:
 * - createContact: Creates a new contact in HubSpot.
 * - updateContact: Updates an existing contact in HubSpot.
 * - getContact: Retrieves a contact from HubSpot by ID.
 * - deleteContact: Deletes a contact from HubSpot by ID.
 * - createCompany: Creates a new company in HubSpot.
 * - updateCompany: Updates an existing company in HubSpot.
 * - getCompany: Retrieves a company from HubSpot by ID.
 * - deleteCompany: Deletes a company from HubSpot by ID.
 * - createTicket: Creates a new ticket in HubSpot.
 * - updateTicket: Updates an existing ticket in HubSpot.
 * - getTicket: Retrieves a ticket from HubSpot by ID.
 * - deleteTicket: Deletes a ticket from HubSpot by ID.
 * - makeApiCall: Makes a custom API call to HubSpot.
 * - searchContacts: Searches for contacts based on given filters.
 * - searchCompanies: Searches for companies based on given filters.
 * - searchTickets: Searches for tickets based on given filters.
 */

export class HubSpotApi {
  private hubspotClient: Client;

  constructor(apiKey: string) {
    this.hubspotClient = new Client({ accessToken: apiKey });
  }

  /**
   * Retrieves a contact from HubSpot by ID.
   * @param {string} contactId - The ID of the contact to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async getContact(contactId: string) {
    const result = await this.hubspotClient.crm.contacts.basicApi.getById(contactId);
    return { success: true, message: "Contact fetched successfully", data: result };
  }

  /**
   * Creates a new contact in HubSpot.
   * @param {Object} contactData - The data of the contact to create.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async createContact(contactData: any) {
    try {
      const result = await this.hubspotClient.crm.contacts.basicApi.create(contactData);
      return { success: true, message: "Contact created successfully", data: result };
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes("Contact already exists")) {
        const existingIdMatch = error.message.match(/Existing ID: (\d+)/);
        const existingId = existingIdMatch ? existingIdMatch[1] : null;
        return { success: false, message: `Contact already exists with ID: ${existingId}`, data: existingId };
      } else if (error instanceof Error) {
        throw new Error(`Unexpected error: ${error.message}`);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  }

  /**
   * Deletes a contact from HubSpot by ID.
   * @param {string} contactId - The ID of the contact to delete.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async deleteContact(contactId: string) {
    const result = await this.hubspotClient.crm.contacts.basicApi.archive(contactId);
    return { success: true, message: "Contact deleted successfully", data: result };
  }

  /**
   * Updates an existing contact in HubSpot.
   * @param {string} contactId - The ID of the contact to update.
   * @param {Object} contactData - The new data of the contact.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async updateContact(contactId: string, contactData: any) {
    const result = await this.hubspotClient.crm.contacts.basicApi.update(contactId, contactData);
    return { success: true, message: "Contact updated successfully", data: result };
  }

  /**
   * Retrieves a company from HubSpot by ID.
   * @param {string} companyId - The ID of the company to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async getCompany(companyId: string) {
    const result = await this.hubspotClient.crm.companies.basicApi.getById(companyId);
    return { success: true, message: "Company fetched successfully", data: result };
  }

  /**
   * Creates a new company in HubSpot.
   * @param {Object} companyData - The data of the company to create.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async createCompany(companyData: any) {
    const result = await this.hubspotClient.crm.companies.basicApi.create(companyData);
    return { success: true, message: "Company created successfully", data: result };
  }

  /**
   * Deletes a company from HubSpot by ID.
   * @param {string} companyId - The ID of the company to delete.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async deleteCompany(companyId: string) {
    const result = await this.hubspotClient.crm.companies.basicApi.archive(companyId);
    return { success: true, message: "Company deleted successfully" };
  }

  /**
   * Updates an existing company in HubSpot.
   * @param {string} companyId - The ID of the company to update.
   * @param {Object} companyData - The new data of the company.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async updateCompany(companyId: string, companyData: any) {
    const result = await this.hubspotClient.crm.companies.basicApi.update(companyId, companyData);
    return { success: true, message: "Company updated successfully", data: result };
  }

  /**
   * Retrieves a ticket from HubSpot by ID.
   * @param {string} ticketId - The ID of the ticket to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async getTicket(ticketId: string) {
    const result = await this.hubspotClient.crm.tickets.basicApi.getById(ticketId);
    return { success: true, message: "Ticket fetched successfully", data: result };
  }

  /**
   * Creates a new ticket in HubSpot.
   * @param {Object} ticketData - The data of the ticket to create.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async createTicket(ticketData: any) {
    const result = await this.hubspotClient.crm.tickets.basicApi.create(ticketData);
    return { success: true, message: "Ticket created successfully", data: result };
  }

  /**
   * Deletes a ticket from HubSpot by ID.
   * @param {string} ticketId - The ID of the ticket to delete.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async deleteTicket(ticketId: string) {
    const result = await this.hubspotClient.crm.tickets.basicApi.archive(ticketId);
    return { success: true, message: "Ticket deleted successfully", data: result };
  }

  /**
   * Updates an existing ticket in HubSpot.
   * @param {string} ticketId - The ID of the ticket to update.
   * @param {Object} ticketData - The new data of the ticket.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async updateTicket(ticketId: string, ticketData: any) {
    const result = await this.hubspotClient.crm.tickets.basicApi.update(ticketId, ticketData);
    return { success: true, message: "Ticket updated successfully", data: result };
  }

  /**
   * Makes a custom API call to HubSpot.
   * @param {string} endpoint - The API endpoint to call.
   * @param {string} method - The HTTP method to use.
   * @param {Object} data - The data to send with the request.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
async makeApiCall(endpoint: string, method: string, data: any) {
  const result = await this.hubspotClient.apiRequest({
    method,
    path: endpoint,
    body: data
  });
  return { success: true, message: "API call successful", data: result };
}


  /**
   * Checks the connection to HubSpot.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async checkConnection() {
    const result = await this.hubspotClient.crm.contacts.basicApi.getPage();
    return result;
  }

  /**
   * Searches for contacts based on given filters.
   * @param {Object} searchQuery - The search query object.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async searchContacts(searchQuery: any) {
    const result = await this.hubspotClient.crm.contacts.searchApi.doSearch(searchQuery);
    return { success: true, message: "Contacts fetched successfully", data: result };
  }

  /**
   * Searches for companies based on given filters.
   * @param {Object} searchQuery - The search query object.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async searchCompanies(searchQuery: any) {
    const result = await this.hubspotClient.crm.companies.searchApi.doSearch(searchQuery);
    return { success: true, message: "Companies fetched successfully", data: result };
  }

  /**
   * Searches for tickets based on given filters.
   * @param {Object} searchQuery - The search query object.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async searchTickets(searchQuery: any) {
    const result = await this.hubspotClient.crm.tickets.searchApi.doSearch(searchQuery);
    return { success: true, message: "Tickets fetched successfully", data: result };
  }
}

export const getClient = (apiKey: string) => {
  return new HubSpotApi(apiKey);
}
