"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { AppleCardsCarouselDemo } from "./apple-hero";
import ColourfulText from "@/components/ui/colourful-text";


export function StarBackground() {
  return (
    <div className="h-fit relative w-full bg-black flex flex-col items-center py-24 overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="container">
        <AppleCardsCarouselDemo />
      </div>
    </div>
  );
}
