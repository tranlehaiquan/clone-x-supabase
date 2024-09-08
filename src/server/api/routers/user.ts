import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { createClient } from "~/utils/supabase/server";

export const userRouter = createTRPCRouter({
  currentUser: publicProcedure.query(async () => {
    const supabase = createClient();
    const user = await supabase.auth.getUser();

    return {
      user,
    };
  }),
});
