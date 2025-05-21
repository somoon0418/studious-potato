import { Form, Link } from "react-router";
import type { Route } from "./+types/join-page";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import AuthButtons from "../components/auth-buttons";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Join | wemake" }];
};

export default function JoinPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <Button variant="ghost" asChild className="absolute top-8 right-8">
        <Link to="/auth/login">Login</Link>
      </Button>
      <div className="flex flex-col items-center justify-center gap-10 w-full max-w-md">
        <h1 className="text-2xl font-semibold">Create an account</h1>
        <Form className="w-full space-y-4">
          <InputPair
            id="name"
            name="name"
            label="Name"
            description="Enter your name"
            required
            type="text"
            placeholder="Enter your name"
          />
          <InputPair
            id="username"
            name="username"
            label="Username"
            description="Enter your username"
            required
            type="text"
            placeholder="i.e wemake"
          />
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
            Create account
          </Button>
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
}
