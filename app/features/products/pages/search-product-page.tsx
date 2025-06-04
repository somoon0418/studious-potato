import { z } from "zod";
import type { Route } from "./+types/search-product-page";
import { ProductCard } from "~/features/products/components/product-card";
import { Form } from "react-router";
import { data } from "react-router";
import { Hero } from "~/common/components/hero";
import ProductPagination from "~/common/components/product-pagination";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";
export const meta: Route.MetaFunction = () => {
  return [
    { title: "Search Products | WeMake" },
    { name: "description", content: "Search for products" },
  ];
};

const paramsSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),
});

export const loader = ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const { success, data: parsedData } = paramsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );
  if (!success) {
    throw data(
      {
        error_code: "invalid_params",
        message: "Invalid params",
      },
      { status: 400 }
    );
  }
  return {
    ...parsedData,
  };
};

export default function SearchPage() {
  return (
    <div className="space-y-10">
      <Hero
        title="Search"
        subtitle="Search for products by title or description"
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
            reviewsCount={"10"}
            viewsCount={"100"}
            votesCount={"120"}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}
