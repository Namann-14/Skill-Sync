"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { TabsDemo } from "./TabsDemo";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    (<div
      className="h-screen rounded-md flex flex-col items-center pt-12 relative w-full">
      <ShootingStars />
      <StarsBackground />
    <TabsDemo />
    </div>)
  );
}
