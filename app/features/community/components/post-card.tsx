import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { DotIcon } from "lucide-react";
interface PostCardProps {
  id: string;
  title: string;
  author: string;
  authorAvatarUrl?: string;
  category: string;
  timeAgo: string;
}

export function PostCard({
  id,
  title,
  author,
  authorAvatarUrl,
  category,
  timeAgo,
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors overflow-hidden">
        <CardHeader className="flex items-center flex-row gap-2 overflow-hidden min-w-0">
          <Avatar className="size-14 shrink-0">
            <AvatarImage src={authorAvatarUrl} />
            <AvatarFallback>{author}</AvatarFallback>
          </Avatar>
          <div className="space-y-2 min-w-0 flex-1">
            <CardTitle className="truncate w-full min-w-0">{title}</CardTitle>
            <div className="flex gap-2 text-sm leading-tight text-muted-foreground truncate">
              <span>{author} on</span>
              <span>{category}</span>
              <DotIcon className="size-4" />
              <span>{timeAgo}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link">Reply &rarr;</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
