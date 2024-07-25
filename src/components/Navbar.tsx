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
            <HoveredLink href="/web-dev">Full Stack Developer</HoveredLink>
            <HoveredLink href="/web-dev">Problem Solver</HoveredLink>
            <HoveredLink href="/interface-design">UI/UX</HoveredLink>
          </div>
        </MenuItem>

        
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Togo"
              href="https://togo.vercel.app/"
              src="https://i.pinimg.com/originals/37/ff/6f/37ff6f16ac3c1886d0729b0cf6375eb0.png"
              description="Do your Goal setting like never before"
            />
            <ProductItem
              title=" Attendance portal"
              href="https://emplog.vercel.app/"
              src="https://i.pinimg.com/originals/02/56/46/025646b6e45c59f50e745d447a21072f.png"
              description="3 level attendance process -> HR , Admin , Employee"
            />
            <ProductItem
              title="AutoDesk"
              href="https://www.youtube.com/watch?v=NOo1At5A-5E"
              src="https://i.pinimg.com/originals/e7/3d/c2/e73dc20bbb057d8c82319ce3dc59e2cc.png"
              description="A python automation app to set up your enviroment ."
            />
            <ProductItem
              title="Resturant Website"
              href="https://resturantwe.netlify.app/"
              src="https://i.pinimg.com/originals/6f/c6/08/6fc608595ab4534f663e20f99bc9b346.jpg"
              description="Simple frontend Resturant website using bootstrap and jquery"
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
