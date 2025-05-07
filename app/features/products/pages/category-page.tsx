import type { MetaFunction } from "react-router";
import { ProductCard } from "~/features/products/components/product-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Category | WeMake" },
    { name: "description", content: "Browse products in this category" },
  ];
};

export default function CategoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">Productivity Tools</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Discover the best productivity tools to boost your workflow
          </p>
        </div>
        <div className="flex gap-4">
          <select className="px-3 py-2 border rounded-md">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Most Upvoted</option>
          </select>
        </div>
      </div>
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
