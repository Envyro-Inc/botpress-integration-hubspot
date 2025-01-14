import { getClient } from '../client';
import { searchDealsInputSchema, searchDealsOutputSchema } from '../misc/custom-schemas';
import type { Implementation } from '../misc/types';

export const searchDeals: Implementation['actions']['searchDeals'] = async ({ ctx, logger, input }) => {
  // Validate input schema
  const validatedInputString = searchDealsInputSchema.parse(input);
  const searchQuery = JSON.parse(validatedInputString.query);

  const hubspotClient = getClient(ctx.configuration.apiKey);

  try {
    // Call the HubSpot API to search for deals
    const result = await hubspotClient.searchDeals(searchQuery);

    logger.forBot().debug(`Successful - Search Deals - ${JSON.stringify(searchQuery)}`);
    logger.forBot().debug(`Result - ${JSON.stringify(result.data)}`);

    // Parse and return output schema
    return searchDealsOutputSchema.parse({
      success: true,
      message: 'Deals fetched successfully',
      data: JSON.stringify(result.data),
    });
  } catch (error) {
    logger.forBot().debug(`'Search Deals' exception ${JSON.stringify(error)}`);
    throw error;
  }
};
