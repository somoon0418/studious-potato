import { Hero } from "~/common/components/hero";
import { IdeaCard } from "../components/idea-card";

export const meta = () => {
  return [
    { title: "IdeasGPT | wemake" },
    { name: "description", content: "Find ideas for your next project" },
  ];
};

export default function IdeasPage() {
  return (
    <div className="space-y-20">
      <Hero title="IdeasGPT" subtitle="Find ideas for your next project" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <IdeaCard
            key={`idea-Id-${index}`}
            id={`idea-Id-${index}`}
            title={`Idea ${index + 1}`}
            viewsCount={index + 1}
            postedAt={`${index + 1} days ago`}
            likesCount={index + 1}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
