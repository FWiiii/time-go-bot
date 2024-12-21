import { CronJob } from 'cron'
import { Telegraf } from 'telegraf'

import { BOT_TOKEN } from './env'

export const bot = new Telegraf(BOT_TOKEN)

bot.start(ctx => ctx.reply('Welcome!'))
bot.help(ctx => ctx.reply('Help text...'))

let count = 0

const job = new CronJob(
  // `${Math.floor(Math.random() * 120 + 60)} * * * *`, // Every 1-3 hours randomly
  '*/30 * * * * *',
  () => {
    bot.telegram.sendMessage(1050365777, `Hello, world! ${count++}`)
  }, // onTick
  null, // onComplete
  true, // start
  'Asia/Shanghai', // timeZone
)
job.start()
