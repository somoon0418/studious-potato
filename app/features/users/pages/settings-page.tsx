import type { Route } from "./+types/settings-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Settings | wemake" }];
};

export default function SettingsPage() {
  return <div className="space-y-20"></div>;
}
