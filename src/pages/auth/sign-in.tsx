import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  function handleSignIn(data: SignInForm) {
    try {
      // Handle sign in logic

      toast.success(
        "An email has been sent to your inbox with a sign in link.",
        {
          action: {
            label: "Resend email",
            onClick: () => {
              // Handle resend email logic
              handleSignIn(data);
            },
          },
        },
      );
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  }

  return (
    <>
      <Helmet title="Sign In" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant="ghost">
          <Link to="/sign-up">Sign Up</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Access your dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage your sales through the Partner's dashboard!
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required {...register("email")} />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
