// YOUR_BASE_DIRECTORY/netlify/functions/test-scheduled-function.mts

import type { Config } from '@netlify/functions'
import { sendSubscribeMessage } from '~/src/commands/subscribe'

export default async (req: Request) => {
  const { next_run } = await req.json()

  console.log('Received event! Next invocation at:', next_run)
  sendSubscribeMessage()
}

export const config: Config = {
  schedule: '@hourly',
}
