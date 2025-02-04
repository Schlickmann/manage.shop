import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();
  const navigate = useNavigate();

  function handleSignUp(data: SignUpForm) {
    try {
      // Handle sign in logic

      toast.success("Shop has been created successfully.", {
        action: {
          label: "Login",
          onClick: () => {
            navigate("/sign-in");
          },
        },
      });
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  }

  return (
    <>
      <Helmet title="Sign Up" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant="ghost">
          <Link to="/sign-in">Sign In</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create your free account
            </h1>
            <p className="text-sm text-muted-foreground">
              Become a Partner and start selling!
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="shopName">Shop's name</Label>
              <Input
                id="shopName"
                type="text"
                required
                {...register("restaurantName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Manager's name</Label>
              <Input
                id="managerName"
                type="text"
                required
                {...register("managerName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required {...register("email")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" required {...register("phone")} />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Sign Up
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              By signing up, you agree to our{" "}
              <a className="underline underline-offset-4" href="#">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="underline underline-offset-4" href="#">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
