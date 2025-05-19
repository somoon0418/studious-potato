import { StarIcon, UserIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { ReviewCard } from "../components/review-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/common/components/ui/dialog";
import { CreateReviewDialog } from "../components/create-review-dialog";
export const meta = () => {
  return [
    { title: "Product Reviews | wemake" },
    { name: "description", content: "View and manage product reviews" },
  ];
};

export default function ProductReviewsPage() {
  return (
    <Dialog>
      <div className="space-y-10 max-w-xl ">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">10 Reviews</h2>
          <DialogTrigger asChild>
            <Button variant={"secondary"}>Write a review</Button>
          </DialogTrigger>
        </div>
        <div className="space-y-20">
          <div className="space-y-5">
            {Array.from({ length: 10 }).map((_, index) => (
              <ReviewCard
                key={index}
                username="John Doe"
                handle="username"
                rating={5}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                postedAt="10 days ago"
              />
            ))}
          </div>
        </div>
      </div>
      <CreateReviewDialog />
    </Dialog>
  );
}
