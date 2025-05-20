import type { Route } from "./+types/submit-job-page";

export const meta: Route.MetaFunction = ({ params }: Route.MetaArgs) => {
  return [
    {
      title: "submit your job | wemake",
    },
    {
      description: "blahblah",
    },
  ];
};

export default function SubmitJobPage() {
  return <div>Submit Job Page</div>;
}
