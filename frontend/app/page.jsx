"use client";
import Hero from "../components/landing-components/Hero";
import Encryption from "../components/landing-components/Encryption";
import StarsCanvas from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StickyScrollRevealDemo } from "../components/landing-components/sticky-scroll";
import { HeroHighlightDemo } from "../components/landing-components/highlight";
import { useAuth } from "@/context/authContext"; // Assuming you have a custom hook for authentication
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  // const { isAuthenticated, checkAuth } = useAuth(); // Fetch authentication state
  // const router = useRouter(); // Initialize useRouter

  // useEffect(() => {
  //   checkAuth();
  //   if (!isAuthenticated) {
  //     router.push("/login");
  //   }
  // }, [checkAuth, isAuthenticated, router]); // Added missing dependencies

  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <Encryption />
        <StickyScrollRevealDemo />
        <HeroHighlightDemo />
        <Footer />
        <StarsCanvas />
      </div>
    </main>
  );
}
