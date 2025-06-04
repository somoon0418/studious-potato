import { Link } from "react-router";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  reviewsCount: string;
  viewsCount: string;
  votesCount: string;
}

export function ProductCard({
  id,
  name,
  description,
  reviewsCount,
  viewsCount,
  votesCount,
}: ProductCardProps) {
  return (
    <Link to={`/products/${id}`} className="block">
      <Card className="w-full flex flex-row item-center justify-between p-4 bg-transparent hover:bg-card/50 overflow-hidden">
        <CardHeader className="flex-1 overflow-hidden min-w-0">
          <CardTitle className="text-2xl font-semibold leading-none tracking-tight truncate w-full min-w-0">
            {name}
          </CardTitle>
          <CardDescription className="text-muted-foreground line-clamp-2">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <MessageCircleIcon className="size-4" />
              <span>{reviewsCount}</span>
            </div>
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <EyeIcon className="size-4" />
              <span>{viewsCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0">
          <Button variant={"outline"} className="flex flex-col h-14">
            <ChevronUpIcon className="size-4 shrink-9" />
            <span>{votesCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
