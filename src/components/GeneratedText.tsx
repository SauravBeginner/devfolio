"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `Welcome to my portfolio, where innovation meets coding. Explore my
projects, dive into my code, and witness the journey of a passionate
developer.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect className="" words={words} />;
}
