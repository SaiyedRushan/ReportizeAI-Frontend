import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Button } from "../ui/button";
import { LucideX } from "lucide-react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SignInButton, SignedIn, SignedOut, UserButton, useAuth } from "@clerk/clerk-react";
import { LucideHome } from "lucide-react";
import { LucideSettings } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LucideSchool } from "lucide-react";
import { Book } from "lucide-react";
import { LucideArrowBigUpDash } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userId } = useAuth();

  const navBarItems = [
    { name: "Solutions", link: "/solutions" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact" },
  ];

  const dashboardItems = [
    { name: "Dashboard", link: "/dashboard", icon: <LucideHome className="mr-2" /> },
    { name: "Classes", link: "/dashboard/class", icon: <LucideSchool className="mr-2" /> },
    { name: "Lesson Plans", link: "/dashboard/lessonPlans", icon: <Book className="mr-2" /> },
    { name: "Upgrade Plan", link: "/pricing", icon: <LucideArrowBigUpDash className="mr-2" /> },
    { name: "Settings", link: "/settings", icon: <LucideSettings className="mr-2" /> },
  ];

  function dashboardSidebar() {
    return (
      <span className="mx-5">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">{isMenuOpen ? <LucideX /> : <FaBars />}</Button>
          </SheetTrigger>
          <SheetContent side="left" className="">
            {dashboardItems.map((item, index) => (
              <div key={index} className="my-3">
                <SheetClose asChild>
                  <Link to={item.link}>
                    <Button variant="ghost" className="w-full">
                      {item.icon}
                      {item.name}
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            ))}
          </SheetContent>
        </Sheet>
      </span>
    );
  }

  return (
    <>
      <nav className="py-3 px-10 flex justify-between" style={{ alignItems: "center" }}>
        <div className="font-bold text-lg flex items-center">
          {userId && dashboardSidebar()}
          <Link to={userId ? "/dashboard" : "/"}>
            <span className="flex gap-2">
              <img src="/images/reportize.ai.png" height={"25"} width={"25"} />
              <p className="font-mono">Reportize AI</p>
            </span>
          </Link>
        </div>

        {/* MOBILE VIEW */}
        <div className="block md:hidden">
          {!userId && (
            <DropdownMenu onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">{isMenuOpen ? <LucideX /> : <FaBars />}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {navBarItems.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <Link to={item.link}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {/* show user button when signed in otherise sign in button */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton redirectUrl="/dashboard"></SignInButton>
          </SignedOut>
        </div>

        {/* DESKTOP VIEW */}
        <div className="gap-5 align-center hidden md:flex-row md:flex" style={{ alignItems: "center" }}>
          {/* only show pricing and other navbar links on the landing page */}
          {!userId &&
            navBarItems.map((item, index) => (
              <Link key={index} to={item.link}>
                <Button variant="link" className={item.className}>
                  {item.name}
                </Button>
              </Link>
            ))}

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton redirectUrl="/dashboard"></SignInButton>
          </SignedOut>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
