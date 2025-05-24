import { Hero } from "~/common/components/hero";
import { EyeIcon, HeartIcon } from "lucide-react";
import { DotIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";

export const meta = () => {
  return [
    { title: "IdeasGPT | wemake" },
    { name: "description", content: "Find ideas for your next project" },
  ];
};

export default function IdeaPage() {
  return (
    <div>
      <Hero title="Ideas #1212122" />
      <div className="max-w-screen-sm mx-auto flex flex-col items-center gap-10">
        <p className="italic text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-1">
            <EyeIcon className="size-4" />
            <span>10</span>
          </div>
          <DotIcon className="size-4" />
          <span>10 days ago</span>
          <DotIcon className="size-4" />
          <Button variant="outline">
            <HeartIcon className="size-4" />
            <span>10</span>
          </Button>
        </div>
        <Button size="lg">Claim idea now</Button>
      </div>
    </div>
  );
}
