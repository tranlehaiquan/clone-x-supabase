import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { createClient } from "~/utils/supabase/server";
import { db } from '~/server/db';
import { posts } from '~/server/db/schema';

export const userRouter = createTRPCRouter({
  currentUser: publicProcedure.query(async () => {
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    
    const postsData = await db.select({
      id: posts.id,
      title: posts.name,
    }).from(posts);

    return {
      postsData,
      user,
    };
  }),
});
