import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: '.env' })

// 确保使用 SQLite
export default defineConfig({
  schema: './db/schema.ts',
  out: './drizzle/migrations', // 改为 drizzle 目录，避免 supabase 混淆
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DATABASE_URL!, // 应该是 file:./dev.db
  },
})
