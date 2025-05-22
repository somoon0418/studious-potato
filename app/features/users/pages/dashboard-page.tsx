import type { Route } from "./+types/dashboard-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Dashboard | wemake" }];
};

export default function DashboardPage() {
  return <div className="space-y-20"></div>;
}
