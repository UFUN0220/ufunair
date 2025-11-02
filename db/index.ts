// db/index.ts - 正确的 SQLite 配置
import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import * as schema from './schema'

config({ path: '.env' })

// 直接使用文件路径，避免环境变量问题
const sqlite = new Database('dev.db')
export const db = drizzle(sqlite, {
  schema,
  casing: 'snake_case',
})

// 或者如果必须使用环境变量
// if (!process.env.DATABASE_URL) {
//   throw new Error('DATABASE_URL is not set!')
// }
// const dbPath = process.env.DATABASE_URL.replace('file:', '').trim()
// const sqlite = new Database(dbPath)
