import { IntegrationDefinition, z } from '@botpress/sdk';
import { integrationName } from './package.json';

// Import the schemas
import {
  createContactInputSchema,
  createContactOutputSchema,
  updateContactInputSchema,
  updateContactOutputSchema,
  getContactInputSchema,
  getContactOutputSchema,
  deleteContactInputSchema,
  deleteContactOutputSchema,
  createCompanyInputSchema,
  createCompanyOutputSchema,
  updateCompanyInputSchema,
  updateCompanyOutputSchema,
  getCompanyInputSchema,
  getCompanyOutputSchema,
  deleteCompanyInputSchema,
  deleteCompanyOutputSchema,
  createTicketInputSchema,
  createTicketOutputSchema,
  updateTicketInputSchema,
  updateTicketOutputSchema,
  getTicketInputSchema,
  getTicketOutputSchema,
  deleteTicketInputSchema,
  deleteTicketOutputSchema,
  makeApiCallInputSchema,
  makeApiCallOutputSchema,
  searchContactsInputSchema,
  searchContactsOutputSchema,
  searchCompaniesInputSchema,
  searchCompaniesOutputSchema,
  searchTicketsInputSchema,
  searchTicketsOutputSchema,
} from './src/misc/custom-schemas';

export default new IntegrationDefinition({
  name: integrationName ?? 'hubspot',
  version: '24.6.0',
  title: 'HubSpot',
  readme: 'hub.md',
  icon: 'icon.svg',
  description:
    'Empower your Botpress chatbot with HubSpot CRM to manage customer interactions. Add, update, and retrieve contacts, deals, and tickets directly through your chatbot. Ideal for automating CRM workflows.',
  configuration: {
    schema: z.object({
      apiKey: z.string().describe('Your HubSpot API key').placeholder('your-api-key'),
    }),
  },
  events: {},
  user: {
    tags: {
      id: {
        title: 'HubSpot API Key',
      },
    },
  },
  channels: {},
  states: {},
  actions: {
    createContact: {
      title: 'Create Contact',
      input: {
        schema: createContactInputSchema,
      },
      output: {
        schema: createContactOutputSchema,
      },
    },
    updateContact: {
      title: 'Update Contact',
      input: {
        schema: updateContactInputSchema,
      },
      output: {
        schema: updateContactOutputSchema,
      },
    },
    getContact: {
      title: 'Get Contact',
      input: {
        schema: getContactInputSchema,
      },
      output: {
        schema: getContactOutputSchema,
      },
    },
    deleteContact: {
      title: 'Delete Contact',
      input: {
        schema: deleteContactInputSchema,
      },
      output: {
        schema: deleteContactOutputSchema,
      },
    },
    createCompany: {
      title: 'Create Company',
      input: {
        schema: createCompanyInputSchema,
      },
      output: {
        schema: createCompanyOutputSchema,
      },
    },
    updateCompany: {
      title: 'Update Company',
      input: {
        schema: updateCompanyInputSchema,
      },
      output: {
        schema: updateCompanyOutputSchema,
      },
    },
    getCompany: {
      title: 'Get Company',
      input: {
        schema: getCompanyInputSchema,
      },
      output: {
        schema: getCompanyOutputSchema,
      },
    },
    deleteCompany: {
      title: 'Delete Company',
      input: {
        schema: deleteCompanyInputSchema,
      },
      output: {
        schema: deleteCompanyOutputSchema,
      },
    },
    createTicket: {
      title: 'Create Ticket',
      input: {
        schema: createTicketInputSchema,
      },
      output: {
        schema: createTicketOutputSchema,
      },
    },
    updateTicket: {
      title: 'Update Ticket',
      input: {
        schema: updateTicketInputSchema,
      },
      output: {
        schema: updateTicketOutputSchema,
      },
    },
    getTicket: {
      title: 'Get Ticket',
      input: {
        schema: getTicketInputSchema,
      },
      output: {
        schema: getTicketOutputSchema,
      },
    },
    deleteTicket: {
      title: 'Delete Ticket',
      input: {
        schema: deleteTicketInputSchema,
      },
      output: {
        schema: deleteTicketOutputSchema,
      },
    },
    makeApiCall: {
      title: 'Make API Call',
      input: {
        schema: makeApiCallInputSchema,
      },
      output: {
        schema: makeApiCallOutputSchema,
      },
    },
    searchContacts: {
      title: 'Search Contacts',
      input: {
        schema: searchContactsInputSchema,
      },
      output: {
        schema: searchContactsOutputSchema,
      },
    },
    searchCompanies: {
      title: 'Search Companies',
      input: {
        schema: searchCompaniesInputSchema,
      },
      output: {
        schema: searchCompaniesOutputSchema,
      },
    },
    searchTickets: {
      title: 'Search Tickets',
      input: {
        schema: searchTicketsInputSchema,
      },
      output: {
        schema: searchTicketsOutputSchema,
      },
    },
  },
});
