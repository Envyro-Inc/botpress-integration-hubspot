import { getClient } from '../client'
import { makeApiCallInputSchema, makeApiCallOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const makeApiCall: Implementation['actions']['makeApiCall'] = async ({ ctx, logger, input }) => {
  const validatedInput = makeApiCallInputSchema.parse(input)
  const hubspotClient = getClient(ctx.configuration.apiKey)

  try {
    const data = validatedInput.data ? JSON.parse(validatedInput.data) : undefined
    const result = await hubspotClient.makeApiCall(validatedInput.endpoint, validatedInput.method, data)
    
    logger.forBot().debug(`Successful - Make API Call - ${JSON.stringify(validatedInput)}`)
    logger.forBot().debug(`Result - ${JSON.stringify(result.data)}`)
    
    return { 
      success: result.success, 
      message: result.message, 
      data: JSON.stringify(result.data) 
    }
  } catch (error) {
    logger.forBot().debug(`'Make API Call' exception ${JSON.stringify(error)}`)
    throw error
  }
}
