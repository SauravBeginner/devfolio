"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `5 years of hands-on experience in full-stack development, I'm passionate about leveraging innovative technology solutions to solve real-world problems..
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect className="" words={words} />;
}
