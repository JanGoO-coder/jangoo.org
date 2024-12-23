/* eslint-disable @next/next/no-img-element */
"use client";
import { ChevronsDown, Github, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import { useTheme } from "next-themes";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  
  {
    href: "#hero",
    label: "Home",
  },
  {
    href: "#benefits",
    label: "Benefits",
  },
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Web & Mobile Design",
    description:
      "Crafting visually stunning and user-friendly designs for both web and mobile applications.",
  },
  {
    title: "Development",
    description:
      "Building robust and scalable web and mobile applications tailored to your needs.",
  },
  {
    title: "Security",
    description:
      "Implementing top-notch security measures to protect your applications and data.",
  },
  {
    title: "SEO Optimization",
    description:
      "Enhancing your online presence with effective SEO strategies to drive traffic.",
  },
  {
    title: "Team Collaboration",
    description:
      "Fostering a collaborative environment to ensure seamless project execution.",
  },
  {
    title: "Customer Support",
    description:
      "Providing exceptional customer support to address all your queries and concerns.",
  },
];

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        {theme === 'light' && mounted ? <img className="w-9 h-9 mr-2 border border-secondary rounded-lg" src="./img/Logo-light.svg" alt="" /> : <img className="w-9 h-9 mr-2 border border-secondary rounded-lg" src="./img/Logo-dark.svg" alt="" />}
        JanGoO
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    {theme === 'light' && mounted ? <img className="w-9 h-9 mr-2 border border-secondary rounded-lg" src="./img/Logo-light.svg" alt="" /> : <img className="w-9 h-9 mr-2 border border-secondary rounded-lg" src="./img/Logo-dark.svg" alt="" />}
                    JanGoO
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[800px] grid-cols-3 gap-5 p-4">
                <Image
                  src="https://avatars.githubusercontent.com/u/75042455?v=4"
                  alt="RadixLogo"
                  className="h-full w-full rounded-md object-cover col-span-1"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-wrap gap-2 col-span-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="w-[calc(50%-0.5rem)] rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem> */}

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-sm px-3">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />

        {/* <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/nobruf/shadcn-landing-page.git"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button> */}
      </div>
    </header>
  );
};
