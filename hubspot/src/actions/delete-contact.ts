import { getClient } from '../client'
import { deleteContactInputSchema, deleteContactOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const deleteContact: Implementation['actions']['deleteContact'] = async ({ ctx, logger, input }) => {
  const validatedInput = deleteContactInputSchema.parse(input)
  const hubspotClient = getClient(ctx.configuration.apiKey)

  try {
    const result = await hubspotClient.deleteContact(validatedInput.contactId)
    
    logger.forBot().debug(`Successful - Delete Contact`)
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`)

    return {
      success: result.success,
      message: result.message,
      data: JSON.stringify(result)
    }
  } catch (error) {
    logger.forBot().debug(`'Delete Contact' exception ${JSON.stringify(error)}`)
    throw error
  }
}
