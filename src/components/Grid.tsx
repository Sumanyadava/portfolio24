"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function Grid() {
  return (
    <div className="h-screen py-20 w-full">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl  font-bold ">My Designs </h1>
        <div className="w-40 h-2 bg-green-500 rounded-full"></div>
        <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
      </div>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">A Orange orange</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Drawn in illustrator when leaning about color theory
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Quotes From frog</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This is when i was learning 3D rendering in illustrator
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Smmoothiee</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A Cartonish smootie i was inpired from a image in the internet
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">3D rainbow</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A clay drawing type on render also inspired from internet
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 bg-center bg-contain",
    thumbnail:
    "https://i.pinimg.com/originals/4e/4a/4a/4e4a4a9b3e390c4d0cc4635731842ccc.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://i.pinimg.com/originals/f8/59/ce/f859ce223729c85d6d8ee9553d863fad.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://i.pinimg.com/originals/6b/e4/60/6be460eee3104189d33971c2b32187f6.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://i.pinimg.com/originals/88/79/7f/88797fd6de160720aaac31137b476e00.jpg",
  },
];
