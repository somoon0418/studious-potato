import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-product-page";
import { Form } from "react-router";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";
import { Label } from "~/common/components/ui/label";
import InputPair from "~/common/components/input-pair";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/common/components/ui/select";
import SelectPair from "~/common/components/select-pair";
import { useState } from "react";
export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Product | WeMake" },
    { name: "description", content: "Submit your product to WeMake" },
  ];
};

export default function SubmitPage() {
  const [icon, setIcon] = useState<string | null>(null);
  const onChangeIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setIcon(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Hero
        title="Submit Yourt Product"
        subtitle="Share your product with the world"
      />
      <Form className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto">
        <div className="space-y-5">
          <InputPair
            label="Name"
            description="This is the name of your product"
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name of your product"
          />
          <InputPair
            label="Tagline"
            description="60 characters or less"
            type="text"
            id="tagline"
            name="tagline"
            required
            placeholder="A concise description of your product"
          />
          <InputPair
            label="URL"
            description="The URL of your product"
            type="text"
            id="url"
            name="url"
            required
            placeholder="https://example.com"
          />
          <InputPair
            label="Description"
            description="A detailed description of your product"
            textArea
            id="description"
            name="description"
            required
            placeholder="A detailed description of your product"
          />
          <SelectPair
            label="Category"
            description="Select the category of your product"
            name="category"
            placeholder="Select a category"
            options={[
              { label: "Category 1", value: "1" },
              { label: "Category 2", value: "2" },
            ]}
          />
          <Button type="submit" className="w-full" size="lg">
            Submit
          </Button>
        </div>
        <div className=" space-y-2 flex flex-col">
          <div className="size-40 rounded-xl shadow-xl overflow-hidden">
            {icon && (
              <img
                src={icon}
                alt="icon"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <Label className="flex flex-col gap-1 items-start">
            Icon{" "}
            <small className="text-muted-foreground">
              This is the icon your product.
            </small>
          </Label>
          <Input
            type="file"
            className="max-w-1/2"
            onChange={onChangeIcon}
            required
            name="icon"
          />
          <div className="flex flex-col text-xs text-muted-foreground">
            <span>Recommended size 128x128px</span>
            <span>Allowed formats: PNG, JPEG</span>
            <span>Max file size: 1MB</span>
          </div>
        </div>
      </Form>
    </div>
  );
}
