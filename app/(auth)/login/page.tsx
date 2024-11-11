import { LoginForm } from "@/components/login-form";
import { SignupForm } from "@/components/signup-form";

export default function Login() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4 gap-x-3">
      <LoginForm />
      <SignupForm />
    </div>
  );
}
