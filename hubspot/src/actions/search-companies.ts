import { getClient } from '../client'
import { searchCompaniesInputSchema, searchCompaniesOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const searchCompanies: Implementation['actions']['searchCompanies'] = async ({ ctx, logger, input }) => {
  const validatedInputString = searchCompaniesInputSchema.parse(input);
  const searchQuery = JSON.parse(validatedInputString.query);

  const hubspotClient = getClient(ctx.configuration.apiKey);

  try {
    const result = await hubspotClient.searchCompanies(searchQuery);
    logger.forBot().debug(`Successful - Search Companies - ${JSON.stringify(searchQuery)}`);
    logger.forBot().debug(`Result - ${JSON.stringify(result.data)}`);

    return searchCompaniesOutputSchema.parse({
      success: true,
      message: 'Companies fetched successfully',
      data: JSON.stringify(result.data)
    });
  } catch (error) {
    logger.forBot().debug(`'Search Companies' exception ${JSON.stringify(error)}`);
    throw error;
  }
}
