import { CronJob } from 'cron'
import { Telegraf } from 'telegraf'

import { subscribe, subscribeInfo, unSubscribe } from './commands'
import { BOT_TOKEN } from './env'

export const bot = new Telegraf(BOT_TOKEN)

bot.start(ctx => ctx.reply('Welcome!'))
bot.help(ctx => ctx.reply('Help text...'))

bot.command('subscribe', subscribe())
bot.command('un_subscribe', unSubscribe())
bot.command('subscribe_info', subscribeInfo())

bot.telegram.setMyCommands([
  { command: 'subscribe', description: 'Subscribe to a date' },
  { command: 'un_subscribe', description: 'Unsubscribe from a date' },
  { command: 'subscribe_info', description: 'Get your current subscriptions' },
])
