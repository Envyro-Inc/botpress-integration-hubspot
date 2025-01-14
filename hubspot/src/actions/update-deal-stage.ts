import { getClient } from '../client';
import { updateDealStageInputSchema, updateDealStageOutputSchema } from '../misc/custom-schemas';
import type { Implementation } from '../misc/types';

export const updateDealStage: Implementation['actions']['updateDealStage'] = async ({ ctx, logger, input }) => {
  // Validate and parse input
  const validatedInput = updateDealStageInputSchema.parse(input);
  const { dealId, stage } = validatedInput;

  const hubspotClient = getClient(ctx.configuration.apiKey);

  try {
    // Prepare the properties to update only the deal stage
    const properties = { dealstage: stage };

    // Call the HubSpot API to update the deal stage
    const result = await hubspotClient.updateDealStage(dealId, properties);

    logger.forBot().debug(`Successful - Update Deal Stage - Deal ID: ${dealId}`);
    logger.forBot().debug(`Response - ${JSON.stringify(result.data)}`);

    return {
      success: true,
      message: `Deal stage updated successfully to ${stage}`,
      data: JSON.stringify(result.data),
    };
  } catch (error) {
    logger.forBot().error(`Error updating deal stage - Deal ID: ${dealId}`, error);
    throw new Error(`Failed to update deal stage for ID: ${dealId}`);
  }
};
