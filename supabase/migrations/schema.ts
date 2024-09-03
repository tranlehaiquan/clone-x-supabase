import { pgTable, index, serial, varchar, timestamp, pgSequence } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"


export const todosIdSeq = pgSequence("todos_id_seq", {  startWith: "1", increment: "1", minValue: "1", maxValue: "9223372036854775807", cache: "1", cycle: false })


export const t3TestPost = pgTable("t3-test_post", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 256 }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
},
(table) => {
	return {
		nameIdx: index("name_idx").using("btree", table.name.asc().nullsLast()),
	}
});