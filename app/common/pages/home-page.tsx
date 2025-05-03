import type { MetaFunction } from "react-router";
import { ProductCard } from "~/features/products/components/product-card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { PostCard } from "~/features/community/components/post-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Home || wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button asChild variant="link" className="text-lg p-0">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`productId-${index}`}
            title={`Product Name ?????????????????????????????????????????????????????????????????????????????????${index}`}
            description={`Product Description ${index}??????????????????????????????????????????????????????????????????????????????????????`}
            commentCount={10}
            viewCount={100}
            upvoteCount={120}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions made by our community.
          </p>
          <Button asChild variant="link" className="text-lg p-0">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <PostCard
            key={index}
            id={`postId-${index}`}
            title={`What is the best productivity tool???????????????????????????????????????`}
            author={`Author ${index}`}
            authorAvatarUrl={`https://github.com/apple.png`}
            category={`Category${index}`}
            timeAgo={`${index} minutes ago`}
          />
        ))}
      </div>
    </div>
  );
}
