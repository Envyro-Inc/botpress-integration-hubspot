import { getClient } from '../client'
import { deleteTicketInputSchema, deleteTicketOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const deleteTicket: Implementation['actions']['deleteTicket'] = async ({ ctx, logger, input }) => {
  const validatedInput = deleteTicketInputSchema.parse(input)
  const hubspotClient = getClient(ctx.configuration.apiKey)

  try {
    const result = await hubspotClient.deleteTicket(validatedInput.ticketId)
    
    logger.forBot().debug(`Successful - Delete Ticket`)
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`)
    
    return {
      success: result.success,
      message: result.message
    }
  } catch (error) {
    logger.forBot().debug(`'Delete Ticket' exception ${JSON.stringify(error)}`)
    throw error
  }
}
