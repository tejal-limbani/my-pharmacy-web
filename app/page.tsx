import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button";
import { auth } from "@/auth";
import ServerPage from "./(root)/server/page";
import LoginPage from "./(auth)/login/page";
import { redirect } from "next/navigation";
import { HashLoader } from "react-spinners";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <HashLoader />
      {/* <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
          font.className
          )}>
          Auth
        </h1>
        <p className="text-white text-lg">
          A smiple authentication service
        </p>
        <div>
          <LoginButton mode="modal" asChild>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div> */}
    </main>
  );
}