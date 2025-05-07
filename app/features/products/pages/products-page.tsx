import type { MetaFunction } from "react-router";
import { ProductCard } from "~/features/products/components/product-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Products | WeMake" },
    { name: "description", content: "Browse and discover amazing products" },
  ];
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Products</h1>
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
