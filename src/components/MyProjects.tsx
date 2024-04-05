"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import { projectData } from "@/app/data/dummyData";

export function MyProjects() {
  return (
    <>
      <div className="text-center">
        <h2 className="mb-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Projects
        </h2>
        <p className="text-base text-[#9e77c6] font-semibold tracking-wide uppercase">
          My Projects
        </p>
      </div>
      <div className="flex-col flex md:flex-row">
        {projectData.map((item) => (
          <div
            className="h-[30rem] w-full flex items-center justify-center"
            key={item.id}
          >
            <PinContainer title="www.goole.com" href={item.link}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {item.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">{item.description}</span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </>
  );
}
