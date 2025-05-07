import type { MetaFunction } from "react-router";
import { ProductCard } from "~/features/products/components/product-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Daily Leaderboard | WeMake" },
    { name: "description", content: "Top products of the day" },
  ];
};

export default function DailyLeaderboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Top Products of March 20, 2024
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`productId-${index}`}
            title={`Product Name ${index}`}
            description={`Product Description ${index}`}
            commentCount={10}
            viewCount={100}
            upvoteCount={120}
          />
        ))}
      </div>
    </div>
  );
}
