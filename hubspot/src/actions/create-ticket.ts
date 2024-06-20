import { getClient } from '../client'
import { createTicketInputSchema, createTicketOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const createTicket: Implementation['actions']['createTicket'] = async ({ ctx, logger, input }) => {
  const validatedInputString = createTicketInputSchema.parse(input);
  const validatedInput = JSON.parse(validatedInputString.properties);
  
  logger.forBot().debug(`Validated Input - ${JSON.stringify(validatedInput)}`);

  const hubspotClient = getClient(ctx.configuration.apiKey);

  try {
    const result = await hubspotClient.createTicket(validatedInput);
    
    logger.forBot().debug(`Successful - Create Ticket - ${JSON.stringify(validatedInput)}`);
    logger.forBot().debug(`Result - ${JSON.stringify(result.data)}`);
    
    return {
      success: result.success, 
      message: result.message, 
      data: JSON.stringify(result.data) 
    }
  } catch (error) {
    logger.forBot().debug(`'Create Ticket' exception ${JSON.stringify(error)}`);
    throw error;
  }
}
