import process from 'node:process'

// export const TOKEN = process.env.TOKEN!
export const BOT_TOKEN = process.env.BOT_TOKEN!
export const DATABASE_URL = process.env.DATABASE_URL!

if (!BOT_TOKEN || !DATABASE_URL) {
  throw new Error('missing env')
}
