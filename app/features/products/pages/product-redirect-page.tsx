import type { Route } from ".react-router/types/app/+types/root";
import { redirect } from "react-router";

export const loader = ({ params }: Route.LoaderArgs) => {
  return redirect(`/products/${params.productId}/overview`);
};

export default function ProductRedirectionPage() {
  return null;
}
