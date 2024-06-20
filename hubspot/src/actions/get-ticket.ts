import { getClient } from '../client'
import { getTicketInputSchema, getTicketOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const getTicket: Implementation['actions']['getTicket'] = async ({ ctx, logger, input }) => {
  const validatedInput = getTicketInputSchema.parse(input)
  const hubspotClient = getClient(ctx.configuration.apiKey)

  try {
    const result = await hubspotClient.getTicket(validatedInput.ticketId)
    
    logger.forBot().debug(`Successful - Get Ticket - ${JSON.stringify(validatedInput)}`)
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`)
    
    return {
      success: result.success,
      message: result.message,
      data: JSON.stringify(result.data)
    }
  } catch (error) {
    logger.forBot().debug(`'Get Ticket' exception ${JSON.stringify(error)}`)
    
    throw error
  }
}
