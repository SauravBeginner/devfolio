"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { Skills } from "./Skills";
import { WorkExperience as TracingBeamDemo } from "@/components/WorkExperience";
import HeroSection from "./HeroSection";
import { MyProjects } from "./MyProjects";
import { SignupComp } from "./Signup";

export function SparklesPreview() {
  return (
    <div className="h-[full] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 min-h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Build great products
      </h1> */}
      <HeroSection />
      <TracingBeamDemo />
      <Skills />
      <MyProjects />
      <SignupComp />
    </div>
  );
}
