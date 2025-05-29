import client from "~/supa-client";

export const getTopics = async () => {
  const { data, error } = await client.from("topics").select("name, slug");
  return data;
};

export const getPosts = async () => {
  const { data, error } = await client
    .from("posts")
    .select(`id, title, created_at`);
  return data;
};
