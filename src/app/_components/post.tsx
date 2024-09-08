"use client";

import { api } from "~/trpc/react";

export function LatestPost() {
  const utils = api.useUtils();
  const [posts, postsQuery] = api.post.getAll.useSuspenseQuery();
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      console.log("Post created");
      await utils.post.getAll.invalidate();
    },
  });

  const onClickCreate = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    createPost.mutate({ name: randomNumber.toString() });
  };

  return (
    <div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <button onClick={onClickCreate}>Create random</button>
    </div>
  );
}
