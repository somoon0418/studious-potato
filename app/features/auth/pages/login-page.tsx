import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/login-page";
import { Form, Link, redirect } from "react-router";
import InputPair from "~/common/components/input-pair";
import AuthButtons from "../components/auth-buttons";
import { useNavigation } from "react-router";
import { LoaderCircle } from "lucide-react";
import { z } from "zod";
import { makeSSRClient } from "~/supa-client";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Login | wemake" }];
};

const formSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email should be a string",
    })
    .email({
      message: "Invalid email address",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, {
      message: "Password must be at least 8 characters long",
    }),
});
export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const { success, data, error } = formSchema.safeParse(
    Object.fromEntries(formData)
  );
  if (!success) {
    return { loginErrors: null, formErrors: error.flatten().fieldErrors };
  }
  const { email, password } = data;
  const { client, headers } = makeSSRClient(request);
  const {
    data: { user },
    error: loginError,
  } = await client.auth.signInWithPassword({
    email,
    password,
  });
  if (loginError) {
    return { loginErrors: loginError.message, formErrors: null };
  }
  return redirect("/", { headers });
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
          {actionData && "formErrors" in actionData && (
            <p className="text-red-500 text-sm">
              {actionData?.formErrors?.email?.join(", ")}
            </p>
          )}
          <InputPair
            id="password"
            name="password"
            label="Password"
            description="Enter your password"
            required
            type="password"
            placeholder="enter your password"
          />
          {actionData && "formErrors" in actionData && (
            <p className="text-red-500 text-sm">
              {actionData?.formErrors?.password?.join(", ")}
            </p>
          )}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <LoaderCircle className="w-4 h-4 animate-spin" />
            ) : (
              "Log in"
            )}
          </Button>
          {actionData && "loginErrors" in actionData && (
            <p className="text-red-500 text-sm">{actionData.loginErrors}</p>
          )}
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
}
