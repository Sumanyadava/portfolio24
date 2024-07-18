
import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const Footer = ({className}:{className?:string}) => {
  const socials = [
    {
      link: "https://github.com/Sumanyadava",

      label: "GitHub",

      icon: SiGithub,
    },
    {
      link: "https://www.linkedin.com/in/suman-yadav-7a6115227/",

      label: "LinkedIn",

      icon: SiLinkedin,
    },
    {
      link: "https://www.instagram.com/sumanydv__/",

      label: "Insta",

      icon: SiInstagram,
    },
  ];
  return (
    <nav className={cn("py-10 flex justify-between items-center",className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-400 -rotate-2">
        {" "}
        Suman Yadav 👨‍💻
      </h1>

      <div className="flex justify-between items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <Link href={social.link} key={index} aria-label={social.label } >
              <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
            </Link>
          )
          
        })}
      </div>
    </nav>
  );
};

export default Footer;
