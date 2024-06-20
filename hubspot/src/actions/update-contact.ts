import { getClient } from '../client';
import { updateContactInputSchema, updateContactOutputSchema } from '../misc/custom-schemas';
import type { Implementation } from '../misc/types';

export const updateContact: Implementation['actions']['updateContact'] = async ({ ctx, logger, input }) => {
  const validatedInputString = updateContactInputSchema.parse(input);
  const validatedInput = JSON.parse(validatedInputString.properties);

  logger.forBot().debug(`Validated Input - ${JSON.stringify(validatedInput)}`);

  const hubspotClient = getClient(ctx.configuration.apiKey);

  try {
    const result = await hubspotClient.updateContact(validatedInputString.contactId, validatedInput);
    
    logger.forBot().debug(`Successful - Update Contact - ${JSON.stringify(validatedInput)}`);
    logger.forBot().debug(`Result - ${JSON.stringify(result.data)}`);

    return {
      success: result.success,
      message: result.message,
      data: JSON.stringify(result.data)
    };
  } catch (error) {
    logger.forBot().debug(`'Update Contact' exception ${JSON.stringify(error)}`);
    throw error;
  }
};
