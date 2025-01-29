import React from "react";
import HeroSection from "./main-hero";

const Hero = () => {
  return (
    <>
      <div
        className="relative flex flex-col items-center justify-start h-auto w-full  text-white pt-40"
        id="about-me"
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-[90px] left-[-10px] w-full h-[100vh] object-cover z-0 "
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>

        {/* Content above the video */}
        <div className="relative z-10 text-center mb-10">
          {/* Button */}
          {/* <TailwindcssButtons /> */}

          {/* Main Heading */}
          <h1 className="text-[80px] mb-1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-600 dark:from-slate-200 dark:to-slate-600 font-bold">
            Unlock Your Job Potential
          </h1>

          {/* Small Text */}
          <p className="text-[18px] text-[#efedfdb3] font-light navbar">
            Empowering You to Become Job-Ready with AI-Driven Insights.
          </p>
        </div>

        {/* Adjusted Features Section */}
        <div className="absolute  top-[545px] left-0  w-full z-20">
          <HeroSection />
        </div>
     
      </div>
    </>
  );
};

export default Hero;


