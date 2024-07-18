"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function Lamp() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparen md:text-7xl"
      >

        <p className="text-4xl lg:text-7xl font-bold">
          Hey ,Nice to Meet you 🧐
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"My name is Suman"}
          </span>
        </p>


      </motion.h1>
    </LampContainer>
  );
}
