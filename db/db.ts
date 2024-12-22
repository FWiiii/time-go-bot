import { neon } from '@neondatabase/serverless'

import { DATABASE_URL } from '../src/env'

const sql = neon(DATABASE_URL)

export { sql }
