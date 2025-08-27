"use client";

import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import Link from "next/link";
import { SlSocialLinkedin } from "react-icons/sl";
import { PiGithubLogo } from "react-icons/pi";
import { BsJournals } from "react-icons/bs";
import Image from "next/image";
import { ToggleTheme } from "./theme-toggle";
import { Separator } from "./ui/separator";

export const Navbar = () => {
  const items = [
    {
      href: "https://www.linkedin.com/in/jaedon-spurlock/",
      label: "LinkedIn",
      icon: <SlSocialLinkedin className="size-5" />,
    },
    {
      href: "https://github.com/JaedonSpurlock01",
      label: "Github",
      icon: <PiGithubLogo className="size-5" />,
    },
    {
      href: "/blogs",
      label: "Blogs",
      icon: <BsJournals className="size-5" />,
    },
  ];

  return (
    <header className="sticky top-10 z-50">
      <nav className="mt-4 w-full md:w-full relative rounded-lg py-4 px-5 flex items-center justify-between custom-background">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" width={40} height={40} alt="logo" />
        </Link>

        <Separator orientation="vertical" className="h-10" />

        <div className="flex items-center gap-2 w-max ml-auto">
          {items.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              target={item.href === "/blogs" ? "_self" : "_blank"}
            />
          ))}
          <div className="w-px h-8 bg-border mx-2" />
          <ToggleTheme />
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({
  href,
  label,
  icon,
  target = "_blank",
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  target?: string;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={href} target={target}>
          <Button
            variant="ghost"
            size="icon"
            className={"rounded-full size-fit p-2"}
          >
            {icon}
          </Button>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};
