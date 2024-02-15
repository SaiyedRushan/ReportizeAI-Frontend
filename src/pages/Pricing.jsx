import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SignUpButton } from "@clerk/clerk-react";

export default function Pricing() {
  async function createCheckoutSession(priceId) {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: priceId,
      }),
    });

    const session = await res.json();
    window.location.href = session.url;
  }

  return (
    <div className="flex justify-center py-10">
      <div className="max-w-screen-xl px-4 py-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Pricing Plans </h1>
        <div className="flex justify-between gap-10 flex-col md:flex-row">
          {/* FREE PLAN */}
          <Card className="md:w-[200px]">
            <CardHeader>
              <CardTitle>Free</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <li>Basic features to get you started</li>
                <li>10 Report card credits</li>
                <li>Manage your class and students</li>
              </CardDescription>
              <h2 className="mt-5 text-gray-500">$0</h2>
            </CardContent>
            <CardFooter className="justify-center">
              <Button onClick={() => createCheckoutSession()}>
                Sign Up
                {/* <SignUpButton afterSignInUrl="/dashboard"></SignUpButton> */}
              </Button>
            </CardFooter>
          </Card>

          {/* PROFESSIONAL */}
          <Card className="md:w-[200px]">
            <CardHeader>
              <CardTitle>Standard</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <li>20 Report card credits</li>
                <li>Class and student management</li>
              </CardDescription>
              <h2 className="mt-5 text-gray-500">$10</h2>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild>
                <SignUpButton redirectUrl="localhost:3000/dashboard?standard=true"></SignUpButton>
              </Button>
            </CardFooter>
          </Card>

          {/* ENTERPRISE */}
          <Card className="md:w-[200px]">
            <CardHeader>
              <CardTitle>Professional</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <li>40 Report card credits</li>
                <li>State-of-the-art AI to help you write better and more personalized feedback faster</li>
              </CardDescription>
              <h2 className="mt-5 text-gray-500">$20</h2>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild>
                <SignUpButton redirectUrl="localhost:3000/dashboard?standard=true"></SignUpButton>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}