import { getClient } from '../client'
import { createContactInputSchema, createContactOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const createContact: Implementation['actions']['createContact'] = async ({ ctx, logger, input }) => {
  const validatedInputString = createContactInputSchema.parse(input);
  const validatedInput = JSON.parse(validatedInputString.properties);

  logger.forBot().debug(`Validated Input - ${JSON.stringify(validatedInput)}`);

  const hubspotClient = getClient(ctx.configuration.apiKey);

  try {
    const result = await hubspotClient.createContact(validatedInput);
    
    logger.forBot().debug(`Successful - Create Contact - ${JSON.stringify(validatedInput)}`);
    logger.forBot().debug(`Result - ${JSON.stringify(result.data)}`);
    
    return { 
      success: result.success, 
      message: result.message, 
      data: JSON.stringify(result.data) 
    }
  } catch (error) {
    logger.forBot().debug(`'Create Contact' exception ${JSON.stringify(error)}`);
    throw error;
  }
}
