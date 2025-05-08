import type { Route } from ".react-router/types/app/+types/root";
import { redirect } from "react-router";

export function loader() {
  console.log("ssr");
  return redirect("/products/leaderboards");
}

export default function ProductsPage({ loaderData }: Route.ComponentProps) {
  console.log("csr");
  return <div>ProductsPage</div>;
}
