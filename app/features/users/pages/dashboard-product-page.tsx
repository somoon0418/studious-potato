import type { Route } from "./+types/dashboard-product-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Dashboard Product | wemake" }];
};

export default function DashboardProductPage() {
  return <div className="space-y-20"></div>;
}
