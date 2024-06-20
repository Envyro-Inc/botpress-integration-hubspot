import { getClient } from '../client';
import { updateTicketInputSchema, updateTicketOutputSchema } from '../misc/custom-schemas';
import type { Implementation } from '../misc/types';

export const updateTicket: Implementation['actions']['updateTicket'] = async ({ ctx, logger, input }) => {
  const validatedInputString = updateTicketInputSchema.parse(input);
  const validatedInput = JSON.parse(validatedInputString.properties);

  logger.forBot().debug(`Validated Input - ${JSON.stringify(validatedInput)}`);

  const hubspotClient = getClient(ctx.configuration.apiKey);

  try {
    const result = await hubspotClient.updateTicket(validatedInputString.ticketId, validatedInput);
    
    logger.forBot().debug(`Successful - Update Ticket - ${JSON.stringify(validatedInput)}`);
    logger.forBot().debug(`Result - ${JSON.stringify(result.data)}`);

    return {
      success: result.success,
      message: result.message,
      data: JSON.stringify(result.data)
    };
  } catch (error) {
    logger.forBot().debug(`'Update Ticket' exception ${JSON.stringify(error)}`);
    throw error;
  }
};
