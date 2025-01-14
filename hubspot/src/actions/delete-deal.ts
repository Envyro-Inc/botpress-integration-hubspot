import { getClient } from '../client';
import { deleteDealInputSchema, deleteDealOutputSchema } from '../misc/custom-schemas';
import type { Implementation } from '../misc/types';

export const deleteDeal: Implementation['actions']['deleteDeal'] = async ({ ctx, logger, input }) => {
  // Validate the input
  const validatedInput = deleteDealInputSchema.parse(input);
  const hubspotClient = getClient(ctx.configuration.apiKey);

  try {
    // Call the HubSpot API to delete the deal
    const result = await hubspotClient.deleteDeal(validatedInput.dealId);

    logger.forBot().debug(`Successful - Delete Deal`);
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`);

    return {
      success: result.success,
      message: result.message,
    };
  } catch (error) {
    logger.forBot().debug(`'Delete Deal' exception ${JSON.stringify(error)}`);

    throw error;
  }
};
