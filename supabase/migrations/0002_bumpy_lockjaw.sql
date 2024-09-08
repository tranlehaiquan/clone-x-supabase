CREATE TABLE IF NOT EXISTS "pow_supabase_twitter" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
DROP TABLE "t3-test_post";--> statement-breakpoint
DROP TABLE "t3-test_twitter";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "pow_supabase_twitter" USING btree ("name");