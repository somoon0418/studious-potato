//all the queries for the users feature

import { productListSelect } from "../products/queries";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "~/supa-client";

export const getUserProfile = async (
  client: SupabaseClient<Database>,
  username: string
) => {
  const { data, error } = await client
    .from("profiles")
    .select(
      `
        profile_id,
        avatar,
        name,
        username,
        headline,
        bio,
        role
    `
    )
    .eq("username", username)
    .single();
  if (error) throw error;
  return data;
};

export const getUserProducts = async (
  client: SupabaseClient<Database>,
  username: string
) => {
  const { data, error } = await client
    .from("products")
    .select(
      `
        ${productListSelect}, profiles!products_to_profiles!inner (profile_id)
        `
    )
    .eq("profiles.username", username);
  if (error) throw error;
  return data;
};

export const getUserPosts = async (
  client: SupabaseClient<Database>,
  username: string
) => {
  const { data, error } = await client
    .from("community_post_list_view")
    .select(`*`)
    .eq("author_username", username);
  if (error) throw error;
  return data;
};
