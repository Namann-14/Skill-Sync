"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Search } from "./search";
import { WorldMapDemo } from "./world-map";
import { ContactForm } from "./Form";

export function SparklesPreview() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center pt-28 overflow-hidden rounded-md">
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
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Let&apos;s Talk
      </h1>
      <p className="text-white text-center text-lg relative z-20 mt-4">
        Send in a message or book a call with us. We are always happy to help.
      </p>
      <div className="w-full  mt-8 relative z-20">
        <Search />
      </div>
      <div className="container flex mt-12">
        <div className="w-full h-24">
          <h1 className="text-white text-start font-bold text-5xl relative z-20 mb-3">Need more assistance?</h1>

          <h1 className="text-white text-start font-bold text-4xl relative z-20">Contact us</h1>
          <p className="text-neutral-500 text-start text-lg relative z-20">
          We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.
          </p>
          <div className="w-full h-24 mt-4">
            <WorldMapDemo />
          </div>
        </div>
        <div className="w-full h-24 pt-3 flex flex-col items-center "> 
        <ContactForm />
        </div>
      </div>
    </div>
  );
}
