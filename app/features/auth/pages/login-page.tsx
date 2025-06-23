import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/login-page";
import { Form, Link } from "react-router";
import InputPair from "~/common/components/input-pair";
import AuthButtons from "../components/auth-buttons";
import { useNavigation } from "react-router";
import { LoaderCircle } from "lucide-react";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Login | wemake" }];
};

export const action = async ({ request }: Route.ActionArgs) => {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Email and password are required" };
  }
  console.log(email, password);
};
export default function LoginPage({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <Button variant="ghost" asChild className="absolute top-8 right-8">
        <Link to="/auth/join">Create an account</Link>
      </Button>
      <div className="flex flex-col items-center justify-center gap-10 w-full max-w-md">
        <h1 className="text-2xl font-semibold">Log in to your account</h1>
        <Form className="w-full space-y-4" method="post">
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
            type="password"
            placeholder="enter your password"
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <LoaderCircle className="w-4 h-4 animate-spin" />
            ) : (
              "Log in"
            )}
          </Button>
          {actionData?.error && (
            <p className="text-red-500 text-sm">{actionData.error}</p>
          )}
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
}
