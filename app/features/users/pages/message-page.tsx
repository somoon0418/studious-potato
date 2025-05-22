import type { Route } from "./+types/message-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Message | wemake" }];
};

export default function MessagePage() {
  return <div className="space-y-20"></div>;
}
