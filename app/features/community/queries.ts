import client from "~/supa-client";

export const getTopics = async () => {
  const { data, error } = await client.from("topics").select("name, slug");
  if (error) throw new Error(error.message);
  return data;
};

type PostWithRelations = {
  post_id: number;
  title: string;
  created_at: string;
  topic: {
    name: string;
  };
  author: {
    name: string;
    username: string;
    avatar?: string;
  };
  upvotes: {
    count: number;
  }[];
};

export const getPosts = async () => {
  const { data, error } = await client
    .from("posts")
    .select(
      `post_id, title, created_at, topic:topic_id!inner(name), author:profile_id!inner(name, username, avatar), upvotes:post_upvotes(count)`
    );
  if (error) throw new Error(error.message);
  return <PostWithRelations[]>data;
};
