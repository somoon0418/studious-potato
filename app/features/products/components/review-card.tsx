import { UserIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { StarIcon } from "lucide-react";

interface ReviewCardProps {
  username: string;
  handle: string;
  avatarUrl?: string;
  rating: number;
  content: string;
  postedAt: string;
}

export function ReviewCard({
  username,
  handle,
  avatarUrl,
  rating,
  content,
  postedAt,
}: ReviewCardProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>
            <UserIcon className="h-4 w-4" />
          </AvatarFallback>
          {avatarUrl && <AvatarImage src={avatarUrl} />}
        </Avatar>
        <div>
          <h4 className="text-lg font-bold">{username}</h4>
          <p className="text-muted-foreground text-sm">@{handle}</p>
        </div>
      </div>
      <div className="flex text-yellow-400">
        {Array.from({ length: rating }).map((_, index) => (
          <StarIcon key={index} className="size-4" fill="currentColor" />
        ))}
      </div>
      <p className="text-muted-foreground">{content}</p>
      <span className="text-muted-foreground text-xs">{postedAt}</span>
    </div>
  );
}
