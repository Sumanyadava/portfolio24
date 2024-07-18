"use client";
import React, { useState,useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";



export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // Scrolling up
        setShowNavbar(true);
      } else {
        // Scrolling down
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
    className={cn("fixed top-0 inset-x-0 z-50  transition-transform duration-300 flex justify-around items-center bg-[#020617]", className, { "transform -translate-y-full": !showNavbar, "transform translate-y-0": showNavbar })}

    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-400 -rotate-2">
        {" "}
        Suman Yadav 👨‍💻
      </h1>
        
        
      <Menu setActive={setActive} >
        <MenuItem setActive={setActive} active={active} item="Skills">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">MERN Developer</HoveredLink>
            <HoveredLink href="/web-dev">Problem Solver</HoveredLink>
            <HoveredLink href="/interface-design">UI/UX</HoveredLink>
          </div>
        </MenuItem>

        
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Education">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">MCA (2023-2025)</HoveredLink>
            <HoveredLink href="/individual">BCA (2020-2023) </HoveredLink>
            <HoveredLink href="/team">12th (2018-2020)</HoveredLink>
            <HoveredLink href="/enterprise">10th (2018)</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      <a href="/Resume.pdf" download="Resume.pdf">
      <button className="bg-blue-600 p-3  rounded-full animate-rotate ">CV</button>
      </a>
    </div>
  );
}

export default Navbar
