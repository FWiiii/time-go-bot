import process from 'node:process'
import { bot } from '../src'

export default eventHandler(async (evt) => {
  const host = getRequestHeader(evt, 'x-forwarded-host') || getRequestHost(evt)
  const webhookUrl = `https://${host}/telegram-hook`
  const isSet = await bot.telegram.setWebhook(webhookUrl)
  const info = await bot.telegram.getWebhookInfo()
  return `Set webhook to ${webhookUrl}: ${isSet}<br/>${JSON.stringify(info)}`
})
