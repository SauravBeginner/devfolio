"use client";

import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const webDeveloperServices = [
  {
    title: "Responsive Web Design",
    description:
      "Create visually appealing and functional websites that adapt to various devices.",
    slug: "responsive-web-design",
    isFeatured: true,
  },
  {
    title: "Full Stack Development",
    description:
      "Build robust web applications with expertise in both front-end and back-end technologies.",
    slug: "full-stack-development",
    isFeatured: true,
  },
  {
    title: "UX/UI Design",
    description:
      "Craft user-friendly interfaces and seamless user experiences for optimal engagement.",
    slug: "ux-ui-design",
    isFeatured: true,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Develop secure and efficient e-commerce platforms tailored to client needs.",
    slug: "e-commerce-solutions",
    isFeatured: true,
  },
  {
    title: "Mobile App Development",
    description:
      "Create cross-platform mobile applications to reach a broader audience.",
    slug: "mobile-app-development",
    isFeatured: true,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve website visibility and ranking on search engines for increased online presence.",
    slug: "seo-optimization",
    isFeatured: true,
  },
];

export function UpcomingWebinars() {
  return (
    <div className="p-12 my-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED Service
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Elevate Your Website Experience
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={webDeveloperServices.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}
