"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export function Socials() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url="https://www.linkedin.com/in/suman-yadav-7a6115227/" className="font-bold">
          LinkedIn
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://github.com/Sumanyadava" className="font-bold">
          GitHub
        </LinkPreview>{" "}
        are a great way to connect with me.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        However you can {" "}
        <LinkPreview
          url="https://mail.google.com/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Email = ansum2411@gmail.com
        </LinkPreview>{" "}
        me, if that your thing . I might respond late, but it will be with in 48 hrs
      </p>
    </div>
  );
}
