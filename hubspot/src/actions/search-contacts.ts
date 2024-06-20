import { getClient } from '../client'
import { searchContactsInputSchema, searchContactsOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const searchContacts: Implementation['actions']['searchContacts'] = async ({ ctx, logger, input }) => {
  const validatedInputString = searchContactsInputSchema.parse(input);
  const searchQuery = JSON.parse(validatedInputString.query);

  const hubspotClient = getClient(ctx.configuration.apiKey);

  try {
    const result = await hubspotClient.searchContacts(searchQuery);
    logger.forBot().debug(`Successful - Search Contacts - ${JSON.stringify(searchQuery)}`);
    logger.forBot().debug(`Result - ${JSON.stringify(result.data)}`);

    return searchContactsOutputSchema.parse({
      success: true,
      message: 'Contacts fetched successfully',
      data: JSON.stringify(result.data)
    });
  } catch (error) {
    logger.forBot().debug(`'Search Contacts' exception ${JSON.stringify(error)}`);
    throw error;
  }
}
