"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";


const words = ` Passionate about crafting dynamic and innovative web experiences. Constantly exploring new technologies and development approaches.
`;

export function Footer() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
