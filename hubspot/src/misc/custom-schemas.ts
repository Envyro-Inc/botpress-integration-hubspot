import { z } from '@botpress/sdk'

/*
Action Schemas
*/

// Create Contact
export const createContactInputSchema = z.object({
  properties: z.string().describe('Properties of the contact to create, as a string JSON object.')
})

export const createContactOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.string()
})

// Get Contact
export const getContactInputSchema = z.object({
  contactId: z.string().describe('ID of the contact to retrieve')
})

export const getContactOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.string()
})

// Update Contact
export const updateContactInputSchema = z.object({
  contactId: z.string().describe('ID of the contact to update'),
  properties: z.string().describe('Properties of the contact to update')
})

export const updateContactOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.string()
})

// Delete Contact
export const deleteContactInputSchema = z.object({
  contactId: z.string().describe('ID of the contact to delete')
})

export const deleteContactOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.string()
})

// Create Company
export const createCompanyInputSchema = z.object({
  properties: z.string().describe('Properties of the company to create, as a string JSON object.')
})

export const createCompanyOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.string() 
})

// Get Company
export const getCompanyInputSchema = z.object({
  companyId: z.string().describe('ID of the company to retrieve')
})

export const getCompanyOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.string() 
})

// Update Company
export const updateCompanyInputSchema = z.object({
  companyId: z.string().describe('ID of the company to update'),
  properties: z.string().describe('Properties of the company to update')
})

export const updateCompanyOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.string() 
})

// Delete Company
export const deleteCompanyInputSchema = z.object({
  companyId: z.string().describe('ID of the company to delete')
})

export const deleteCompanyOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),

})

// Create Ticket
export const createTicketInputSchema = z.object({
  properties: z.string().describe('Properties of the ticket to create, as a string JSON object.')
})

export const createTicketOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.string() 
})

// Get Ticket
export const getTicketInputSchema = z.object({
  ticketId: z.string().describe('ID of the ticket to retrieve')
})

export const getTicketOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.string() 
})

// Update Ticket
export const updateTicketInputSchema = z.object({
  ticketId: z.string().describe('ID of the ticket to update'),
  properties: z.string().describe('Properties of the ticket to update')
})

export const updateTicketOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.string() 
})

// Delete Ticket
export const deleteTicketInputSchema = z.object({
  ticketId: z.string().describe('ID of the ticket to delete')
})

export const deleteTicketOutputSchema = z.object({
  success: z.boolean(),
  message: z.string()
})

/*
Search Schemas
*/

// Search Contacts
export const searchContactsInputSchema = z.object({
  query: z.string().describe('Search query for contacts as a string JSON object.')
});

export const searchContactsOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.string()
});

// Search Companies
export const searchCompaniesInputSchema = z.object({
  query: z.string().describe('Search query for companies as a string JSON object.')
});

export const searchCompaniesOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.string() 
});


// Search Tickets
export const searchTicketsInputSchema = z.object({
  query: z.string().describe('Search query for tickets as a string JSON object.')
});

export const searchTicketsOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.string() 
});

// Make API Call
export const makeApiCallInputSchema = z.object({
  endpoint: z.string().describe('The API endpoint to call'),
  method: z.string().describe("The HTTP method to use ['GET', 'POST', 'PUT', 'DELETE']"),
  data: z.string().optional().describe('The data to send with the request')
})

export const makeApiCallOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.string() 
})
