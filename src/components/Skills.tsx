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
            The frontend is the face of a website, and I have a strong
            foundation in this area from my college studies. I have developed a
            solid understanding of the following technologies:
          </p>
            <ol className="bg-blue-800 list-disc list-inside rounded-md">
              <li>HTML , Css , JavaScript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Expo</li>
              <li>Redux</li>
              <li>Tailwind</li>
              <li>Sass</li>
              <li>Figma</li>
              <li>Photoshop</li>
            </ol>
        </div>
       
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-700">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          API
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Api is crucial which intergraing frontenda and backend for that i use
        </p>
          <ol className="bg-blue-800 list-disc list-inside rounded-md ">
            <li>JavaScript</li>
            <li>Axios</li>
            <li>Fast API</li>
            <li>Cookies</li>
            <li>Local Storage</li>
            <li>Rest API</li>
            <li>API testing through Postman</li>
          </ol>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-pink-600 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Backend
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Its a backbone of any web apps and it serios business I learn backend
          in my MCA and very familiar with these techs:
        </p>
          <ol className="bg-blue-800 rounded-md list-disc list-inside ">
            <li>Node</li>
            <li>Express</li>
            <li>JWT</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ol>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-pink-700 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Developer Tools
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        </p>
          <ol className="bg-blue-800 rounded-md list-disc list-inside ">
            <li>Git</li>
            <li>GitHub</li>
            <li>Postman</li>
            <li>VsCode</li>
            <li>Excelidraw</li>
          </ol>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 bg-pink-900 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Component Librabries
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        </p>
          <ol className="bg-blue-800 rounded-md list-disc list-inside ">
            <li>Material UI</li>
            <li>Accernity UI</li>
            <li>Bootstrap</li>
            <li>Daisy UI</li>
            <li>Shadcn</li>
          </ol>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            these are the other technoloies i worked in
          </p>
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            <ol className="bg-pink-600 rounded-md list-disc list-inside">
              <li>Python</li>
              <li>Tinker</li>
              <li>Desktop Apps</li>
              <li>Automation</li>
              <li>WordPress</li>
            </ol>
          </h2>
          
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
