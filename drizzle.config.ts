import { type Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema.ts",
  out: './supabase/migrations',
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  tablesFilter: ["pow_supabase_*"],
} satisfies Config;

