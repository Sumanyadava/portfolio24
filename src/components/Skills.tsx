"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function Skills() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            FrontEnd
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          The frontend is the face of a website, and I have a strong foundation in this area from my college studies. I have developed a solid understanding of the following technologies:
          <br />
          Technogies
          <br />
            HTML , Css , JavaScript , React ,Redux , Tailwind ,Sass , Figma , photoshop
          </p>
        </div>
        <Image
          src="/noise.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-700">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          API
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Api is crucial which intergraing frontenda and backend for that i use 

          Axios ,Api Testing, Cookies, Local Storage,  Fast API , can Build Rest API , 
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-pink-600 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Backend
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Node and Express , JwT, MongoDB , SQL ,
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-pink-700 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Developer Tools
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Git , Github , PostMan ,Excelidraw , VsCode
        </p>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 bg-pink-900 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Component Librabries
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Material UI , Accernity UI,Bootstrap , Daisy UI , Shadcn
        </p>
      </WobbleCard>
      
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Python,Tinker, Desktop Apps , automation , wordpress
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            these are the othertechnoloies i worked in
          </p>
        </div>
        
      </WobbleCard>
      

      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-900">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Deployement
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Vercel , netlify
        </p>
      </WobbleCard>
      
    </div>
  );
}
