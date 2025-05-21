import type { Route } from "./+types/social-start-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Social Login | wemake" }];
};

export default function SocialStartPage() {
  return <div></div>;
}
