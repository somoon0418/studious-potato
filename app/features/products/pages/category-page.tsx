import { Form } from "react-router";
import { ProductCard } from "../components/product-card";
import type { Route } from "./+types/category-page";
import { Button } from "~/common/components/ui/button";
import { Hero } from "~/common/components/hero";
import { Input } from "~/common/components/ui/input";
import ProductPagination from "~/common/components/product-pagination";

export const meta: Route.MetaFunction = ({ params }: Route.MetaArgs) => {
  return [
    { title: `Developer Tools | WeMake` },
    { name: "description", content: "Browse Developer Tools Products" },
  ];
};

export default function CategoryPage() {
  return (
    <div className="space-y-10">
      <Hero
        title="Developer Tools"
        subtitle="Tools for developers to build products faster"
      />
      <Form
        method="get"
        className="flex justify-center max-w-screen-sm items-center mx-auto gap-2"
      >
        <Input
          name="query"
          placeholder="Search for products"
          className="text-lg"
        />
        <Button type="submit">Search</Button>
      </Form>
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`productId-${index}`}
            name="Product Name"
            description="Product Description"
            commentsCount={10}
            viewsCount={100}
            votesCount={120}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}
