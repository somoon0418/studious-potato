import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Promote Product | WeMake" },
    { name: "description", content: "Promote your product on WeMake" },
  ];
};

export default function PromotePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Promote Your Product</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-muted p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Promotion Options</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-medium mb-2">Featured Listing</h3>
              <p className="text-muted-foreground mb-4">
                Get your product featured at the top of relevant category pages.
              </p>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
                Select Plan
              </button>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-medium mb-2">Newsletter Promotion</h3>
              <p className="text-muted-foreground mb-4">
                Reach our community through our weekly newsletter.
              </p>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
                Select Plan
              </button>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-medium mb-2">Social Media Boost</h3>
              <p className="text-muted-foreground mb-4">
                Get featured on our social media channels.
              </p>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
