import { redirect } from "react-router";
import type { Route } from "./+types/product-visit-page";
import { makeSSRClient } from "~/supa-client";

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const { client } = makeSSRClient(request);
  const { data, error } = await client
    .from("products")
    .select("url")
    .eq("product_id", params.productId)
    .single();
  if (data) {
    await client.rpc("track_event", {
      event_type: "product_visit",
      event_data: {
        product_id: params.productId,
      },
    });
    return redirect(data.url);
  }
};
