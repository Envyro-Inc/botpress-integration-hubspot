import { getClient } from '../client'
import { getContactInputSchema, getContactOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const getContact: Implementation['actions']['getContact'] = async ({ ctx, logger, input }) => {
  const validatedInput = getContactInputSchema.parse(input)
  const hubspotClient = getClient(ctx.configuration.apiKey)

  try {
    const result = await hubspotClient.getContact(validatedInput.contactId)

    logger.forBot().debug(`Successful - Get Contact`)
    logger.forBot().debug(`Response - ${JSON.stringify(result.data)}`)

    return {
      success: result.success,
      message: result.message,
      data: JSON.stringify(result.data)
    }
  } catch (error) {
    logger.forBot().debug(`'Get Contact' exception ${JSON.stringify(error)}`)
    throw error
  }
}
