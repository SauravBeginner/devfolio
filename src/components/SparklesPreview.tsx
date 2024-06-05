"use client";
import React from "react";
// import { SparklesCore } from "../components/ui/sparkles";
import { Skills } from "./Skills";
import { WorkExperience as TracingBeamDemo } from "@/components/WorkExperience";
import HeroSection from "./HeroSection";
import { MyProjects } from "./MyProjects";
import { ContactForm } from "./ContactForm";

export function SparklesPreview() {
  return (
    <div className="h-[full] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 min-h-screen">
        {/* <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        /> */}

        <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Backgrounds
          </p> */}
        </div>
      </div>
      {/* <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Build great products
      </h1> */}
      <HeroSection />
      <TracingBeamDemo />
      <Skills />
      <MyProjects />
      <ContactForm />
    </div>
  );
}
