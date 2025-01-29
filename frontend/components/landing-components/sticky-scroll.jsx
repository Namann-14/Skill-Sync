"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Decentralized Collaboration",
      description:
        "Empower your team with blockchain-backed collaboration. Work together in a secure and decentralized environment where data integrity and transparency are guaranteed. Blockchain ensures every change is traceable and tamper-proof, providing confidence in your shared projects.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/resume.gif"
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-xl"
            alt="blockchain collaboration demo"
          />
        </div>
      ),
    },
    {
      title: "Real-Time Blockchain Updates",
      description:
        "Experience the power of real-time updates on a distributed ledger. Our platform uses blockchain to provide instant synchronization across your network, ensuring all participants have access to the latest changes without delays or discrepancies.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/blockchain_updates.png"
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-xl"
            alt="real-time blockchain updates demo"
          />
        </div>
      ),
    },
    {
      title: "Immutable Version Control",
      description:
        "Say goodbye to versioning headaches with blockchain-powered version control. Every update is permanently recorded on the blockchain, ensuring an immutable and verifiable history of your project's evolution. Maintain transparency and avoid version conflicts effortlessly.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/resume.gif"
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-xl"
            alt="blockchain version control demo"
          />
        </div>
      ),
    },
    {
      title: "Smart Contract Integration",
      description:
        "Automate workflows and enforce agreements with blockchain-based smart contracts. Our platform seamlessly integrates smart contracts to streamline processes, reduce manual effort, and ensure compliance with pre-defined rules and conditions.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/blockchain_updates.png"
            width={300}
            height={300}
            className="h-full w-full object-cover rounded-xl"
            alt="smart contract integration demo"
          />
        </div>
      ),
    },
  ];
  
export function StickyScrollRevealDemo() {
  return (
    (<div className=" bg-black">
      <StickyScroll content={content} />
    </div>)
  );
}
