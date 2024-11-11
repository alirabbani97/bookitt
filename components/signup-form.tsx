import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignupForm() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Signup</CardTitle>
        <CardDescription>
          Enter your email below to <strong>signup</strong> to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {/* <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div> */}
          <div className="grid gap-2">
            <Label htmlFor="text">Username</Label>
            <Input
              id="username"
              type="username"
              placeholder="janedoe123"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
            {/* <div>
              <Label htmlFor="confirm_password">Confirm Password</Label>
              <Input id="confirm_password" type="confirm_password" required />
            </div> */}
          </div>
          <Button type="submit" className="w-full">
            Signup
          </Button>
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          Already Have an account?{" "}
          <Link href="#" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
