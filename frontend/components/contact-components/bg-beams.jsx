"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Search } from "./search";
import ContactHero from "./hero";

export function BackgroundBeamsDemo() {
  return (
    (<div
      className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center pt-12 antialiased">
      <Search />
      <BackgroundBeams />
    </div>)
  );
}
