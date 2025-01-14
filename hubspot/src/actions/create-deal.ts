import { getClient } from '../client'
import { createDealInputSchema, createDealOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const createDeal: Implementation['actions']['createDeal'] = async ({ ctx, logger, input }) => {
  const validatedInputString = createDealInputSchema.parse(input);
  const validatedInput = JSON.parse(validatedInputString.properties);

  const hubspotClient = getClient(ctx.configuration.apiKey);

  logger.forBot().debug(`Validated Input - ${JSON.stringify(validatedInput)}`);

  try {
    // Call the HubSpot API to create a deal
    const result = await hubspotClient.createDeal(validatedInput);

    logger.forBot().debug(`Successful - Create Deal - ${JSON.stringify(validatedInput)}`);
    logger.forBot().debug(`Result - ${JSON.stringify(result.data)}`);

    return {
      success: result.success,
      message: result.message,
      data: JSON.stringify(result.data),
    };
  } catch (error) {
    logger.forBot().error(`'Create Deal' exception ${JSON.stringify(error)}`);
    throw error;
  }
};
