import { getClient } from '../client'
import { getCompanyInputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const getCompany: Implementation['actions']['getCompany'] = async ({ ctx, logger, input }) => {
  const validatedInput = getCompanyInputSchema.parse(input)
  
  const hubspotClient = getClient(ctx.configuration.apiKey)

  try {
    const result = await hubspotClient.getCompany(validatedInput.companyId)
    
    logger.forBot().debug(`Successful - Get Company - ${JSON.stringify(validatedInput)}`)
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`)

    return {
      success: result.success,
      message: result.message,
      data: JSON.stringify(result.data)
    }
  } catch (error) {
    logger.forBot().debug(`'Get Company' exception ${JSON.stringify(error)}`)
    throw error
  }
}
