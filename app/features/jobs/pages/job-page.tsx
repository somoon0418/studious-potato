import type { Route } from "./+types/job-page";

export const meta: Route.MetaFunction = ({ params }: Route.MetaArgs) => {
  return [
    {
      title: "job | wemake",
    },
    {
      description: "blahblah",
    },
  ];
};

export default function JobPage() {
  return <div>Job Page</div>;
}
