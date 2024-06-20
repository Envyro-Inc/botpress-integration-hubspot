import { getClient } from '../client';
import { createCompanyInputSchema, createCompanyOutputSchema } from '../misc/custom-schemas';
import type { Implementation } from '../misc/types';

export const createCompany: Implementation['actions']['createCompany'] = async ({ ctx, logger, input }) => {
  const validatedInputString = createCompanyInputSchema.parse(input);
  const validatedInput = JSON.parse(validatedInputString.properties);

  const hubspotClient = getClient(ctx.configuration.apiKey);

  logger.forBot().debug(`Validated Input - ${JSON.stringify(validatedInput)}`);

  try {
    const result = await hubspotClient.createCompany(validatedInput);
    
    logger.forBot().debug(`Successful - Create Company - ${JSON.stringify(validatedInput)}`);
    logger.forBot().debug(`Result - ${JSON.stringify(result.data)}`);

    return { 
      success: result.success, 
      message: result.message, 
      data: JSON.stringify(result.data) 
    }
  } catch (error) {
    logger.forBot().debug(`'Create Company' exception ${JSON.stringify(error)}`);
    throw error;
  }
};
