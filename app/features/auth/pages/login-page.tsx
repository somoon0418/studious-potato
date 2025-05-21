import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/login-page";
import { Form, Link } from "react-router";
import InputPair from "~/common/components/input-pair";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Login | wemake" }];
};

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <Button variant="ghost" asChild className="absolute top-8 right-8">
        <Link to="/auth/join">Create an account</Link>
      </Button>
      <div className="flex flex-col items-center justify-center gap-10 w-full max-w-md">
        <h1 className="text-2xl font-semibold">Login to your account</h1>
        <Form className="w-full space-y-4">
          <InputPair
            id="email"
            name="email"
            label="Email"
            description="Enter your email"
            required
            type="text"
            placeholder="i.e wemake@example.com"
          />
          <InputPair
            id="password"
            name="password"
            label="Password"
            description="Enter your password"
            required
            type="text"
            placeholder="enter your password"
          />
          <Button type="submit" className="w-full">
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
}
