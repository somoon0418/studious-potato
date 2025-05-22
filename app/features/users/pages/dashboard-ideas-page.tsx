import type { Route } from "./+types/dashboard-ideas-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Dashboard Ideas | wemake" }];
};

export default function DashboardIdeasPage() {
  return <div className="space-y-20"></div>;
}
