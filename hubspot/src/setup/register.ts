import { getClient } from 'src/client'
import type { RegisterFunction } from '../misc/types'

export const register: RegisterFunction = async ({ ctx, client, logger }) => {
  try {
    const hubspotClient = getClient(ctx.configuration.apiKey)

    // Check access by trying to list contacts
    const result = await hubspotClient.checkConnection()

    // If the getPage command does not throw, it means we have successfully accessed HubSpot
    logger.forBot().info("Successfully accessed HubSpot: Integration can proceed")
    
    logger.forBot().info(`Successfully retrieved ${JSON.stringify(result)} contacts`)
  } catch (error) {
    logger.forBot().error("Failed to access HubSpot: Check configuration", error)
    return;
  }
}
