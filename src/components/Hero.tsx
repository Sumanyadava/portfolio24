"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "ToGo",
    link: "https://togo.vercel.app/",
    thumbnail:
      "https://i.pinimg.com/originals/37/ff/6f/37ff6f16ac3c1886d0729b0cf6375eb0.png",
  },
  {
    title: "Attendance portal",
    link: "https://emplog.vercel.app/",
    thumbnail:
      "https://i.pinimg.com/originals/02/56/46/025646b6e45c59f50e745d447a21072f.png",
  },
  {
    title: "Auto",
    link: "https://www.youtube.com/watch?v=NOo1At5A-5E",
    thumbnail:
      "https://i.pinimg.com/originals/e7/3d/c2/e73dc20bbb057d8c82319ce3dc59e2cc.png",
  },

  {
    title: "3Things4U (app)",
    link: "",
    thumbnail:
      "https://i.pinimg.com/originals/f6/77/d8/f677d800aff62d151d3d069921daebbd.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Resturant We",
    link: "https://resturantwe.netlify.app/",
    thumbnail:
      "https://i.pinimg.com/originals/6f/c6/08/6fc608595ab4534f663e20f99bc9b346.jpg",
  },

  {
    title: "Togo",
    link: "https://togo.vercel.app/",
    thumbnail:
      "https://i.pinimg.com/originals/a4/38/a8/a438a83369705376a77c5b21c55788a5.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "Local todo",
    link: "https://sumantodo.netlify.app/",
    thumbnail:
      "https://i.pinimg.com/originals/36/1d/2a/361d2a120e08f73db020032b0b939f0e.jpg",
  },
  {
    title: "Suttle Animation",
    link: "https://sumanintership.netlify.app/",
    thumbnail:
      "https://i.pinimg.com/originals/77/84/63/778463698e05e9befec5a11fe738b50b.jpg",
  },

  {
    title: "Pomodoro (app)",
    link: "",
    thumbnail:
      "https://i.pinimg.com/originals/25/87/dd/2587dde5e5eb7be4ad540d3397ec2930.jpg",
  },
  
  {
    title: "Sharda Garden",
    link: "https://shardagarden.netlify.app/",
    thumbnail:
      "https://i.pinimg.com/originals/3c/f9/97/3cf9979f84af96567d9cac324b56dff6.png",
  },
  
  
];
