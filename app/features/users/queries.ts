//all the queries for the users feature

import client from "~/supa-client";
import { productListSelect } from "../products/queries";



export const getUserProfile = async (username: string) => {
    const {data, error} = await client.from("profiles").select(`
        profile_id,
        avatar,
        name,
        username,
        headline,
        bio,
        role
    `).eq("username", username).single();
    if (error) throw error;
    return data;
}

export const getUserProducts = async (username: string) => {
    const {data, error} = await client.from("products").select(
        `
        ${productListSelect}, profiles!products_to_profiles!inner (profile_id)
        `
    ).eq("profiles.username", username);
    if (error) throw error;
    return data;
}

export const getUserPosts = async (username: string) => {
    const {data, error} = await client.from("posts").select(`
        post_id,
        title,
        content,
        created_at,
        updated_at,
    `).eq("username", username);
    if (error) throw error;
    return data;
}   
