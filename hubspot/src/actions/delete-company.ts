import { getClient } from '../client'
import { deleteCompanyInputSchema, deleteCompanyOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const deleteCompany: Implementation['actions']['deleteCompany'] = async ({ ctx, logger, input }) => {
  const validatedInput = deleteCompanyInputSchema.parse(input)
  const hubspotClient = getClient(ctx.configuration.apiKey)

  try {
    const result = await hubspotClient.deleteCompany(validatedInput.companyId)
    
    logger.forBot().debug(`Successful - Delete Company`)
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`)
    
    return {
      success: result.success,
      message: result.message
    }
  } catch (error) {
    logger.forBot().debug(`'Delete Company' exception ${JSON.stringify(error)}`)
    
    throw error
  }
}
