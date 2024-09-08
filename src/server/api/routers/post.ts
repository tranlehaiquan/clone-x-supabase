import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from '~/server/db';
import { InsertTwitter, twitters } from '~/server/db/schema';

const insertSchemaZod = z.object({
  name: z.string(),
});

export const postRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async () => {
      const data = await db.select().from(twitters);

      return {
        twitters: data,
      };
    }),

  create: publicProcedure
    .input(insertSchemaZod)
    .mutation(async ({ input }) => {
      const insertData: InsertTwitter = {
        name: input.name,
      }

      const twitter = await db.insert(twitters).values(insertData).returning();

      return {
        twitter: twitter[0],
      };
    }),
});
