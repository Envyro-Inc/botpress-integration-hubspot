import { getClient } from '../client'
import { searchTicketsInputSchema, searchTicketsOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const searchTickets: Implementation['actions']['searchTickets'] = async ({ ctx, logger, input }) => {
  const validatedInputString = searchTicketsInputSchema.parse(input);
  const searchQuery = JSON.parse(validatedInputString.query);

  const hubspotClient = getClient(ctx.configuration.apiKey);

  try {
    const result = await hubspotClient.searchTickets(searchQuery);
    logger.forBot().debug(`Successful - Search Tickets - ${JSON.stringify(searchQuery)}`);
    logger.forBot().debug(`Result - ${JSON.stringify(result.data)}`);

    return searchTicketsOutputSchema.parse({
      success: true,
      message: 'Tickets fetched successfully',
      data: JSON.stringify(result.data)
    });
  } catch (error) {
    logger.forBot().debug(`'Search Tickets' exception ${JSON.stringify(error)}`);
    throw error;
  }
}
