import { getClient } from '../client';
import { updateDealInputSchema, updateDealOutputSchema } from '../misc/custom-schemas';
import type { Implementation } from '../misc/types';

export const updateDeal: Implementation['actions']['updateDeal'] = async ({ ctx, logger, input }) => {
  // Validate and parse input
  const validatedInput = updateDealInputSchema.parse(input);
  const { dealId, properties } = validatedInput;
  const dealProperties = JSON.parse(properties);

  const hubspotClient = getClient(ctx.configuration.apiKey);

  try {
    // Call HubSpot API to update the deal
    const result = await hubspotClient.updateDeal(dealId, dealProperties);

    logger.forBot().debug(`Successful - Update Deal - Deal ID: ${dealId}`);
    logger.forBot().debug(`Result - ${JSON.stringify(result.data)}`);

    return {
      success: true,
      message: 'Deal updated successfully',
      data: JSON.stringify(result.data),
    };
  } catch (error) {
    logger.forBot().error(`Error updating deal - Deal ID: ${dealId}`, error);
    throw new Error(`Failed to update deal with ID: ${dealId}`);
  }
};
