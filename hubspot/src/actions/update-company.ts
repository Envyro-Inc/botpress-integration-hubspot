import { getClient } from '../client'
import { updateCompanyInputSchema, updateCompanyOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const updateCompany: Implementation['actions']['updateCompany'] = async ({ ctx, logger, input }) => {
  const validatedInputString = updateCompanyInputSchema.parse(input)
  const validatedInput = JSON.parse(validatedInputString.properties)

  const hubspotClient = getClient(ctx.configuration.apiKey)

  try {
    const result = await hubspotClient.updateCompany(validatedInputString.companyId, validatedInput)

    logger.forBot().debug(`Successful - Update Company - ${JSON.stringify(validatedInput)}`)
    logger.forBot().debug(`Result - ${JSON.stringify(result.data)}`)

    return {
      success: result.success,
      message: result.message,
      data: JSON.stringify(result.data)
    }
  } catch (error) {
    logger.forBot().debug(`'Update Company' exception ${JSON.stringify(error)}`)
    throw error
  }
}
