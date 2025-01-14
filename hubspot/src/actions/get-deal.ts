import { getClient } from '../client';
import { getDealInputSchema, getDealOutputSchema } from '../misc/custom-schemas';
import type { Implementation } from '../misc/types';

export const getDeal: Implementation['actions']['getDeal'] = async ({ ctx, logger, input }) => {
  // Validate and parse input
  const validatedInput = getDealInputSchema.parse(input);
  const { dealId } = validatedInput;

  const hubspotClient = getClient(ctx.configuration.apiKey);

  try {
    // Call HubSpot API to retrieve the deal
    const result = await hubspotClient.getDeal(dealId);

    logger.forBot().debug(`Successful - Get Deal - Deal ID: ${dealId}`);
    logger.forBot().debug(`Result - ${JSON.stringify(result.data)}`);

    return {
      success: true,
      message: 'Deal retrieved successfully',
      data: JSON.stringify(result.data),
    };
  } catch (error) {
    logger.forBot().error(`Error retrieving deal - Deal ID: ${dealId}`, error);
    throw new Error(`Failed to retrieve deal with ID: ${dealId}`);
  }
};
