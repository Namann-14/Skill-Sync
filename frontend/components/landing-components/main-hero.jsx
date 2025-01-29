"use client";
import { cn } from "@/lib/utils";
import React,{useState,useEffect} from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export  default function HeroSection() {
  return (
    (<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon} />
      ))}
    </BentoGrid>)
  );
}


const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-transparent backdrop-blur-lg flex-col space-y-2">
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white/30 dark:bg-black/30 backdrop-blur-lg">
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-slate-800 to-purple-600 flex-shrink-0" />
        <div className="w-full bg-gray-100/30 h-4 rounded-full dark:bg-neutral-900/30" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white/30 dark:bg-black/30 backdrop-blur-lg">
        <div className="w-full bg-gray-100/30 h-4 rounded-full dark:bg-neutral-900/30" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-slate-800 to-purple-600 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white/30 dark:bg-black/30 backdrop-blur-lg">
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-slate-800 to-purple-600  flex-shrink-0" />
        <div className="w-full bg-gray-100/30 h-4 rounded-full dark:bg-neutral-900/30" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
    const [width, setWidth] = useState("40%");
  
    useEffect(() => {
      // Set random width after component mounts on the client side
      setWidth(Math.random() * (100 - 40) + 40 + "%");
    }, []);
  
    const variants = {
      initial: {
        width: "40%",
      },
      animate: {
        width: "100%",
        transition: {
          duration: 0.2,
        },
      },
      hover: {
        width: ["0%", "100%"],
        transition: {
          duration: 2,
        },
      },
    };
  
    const arr = new Array(6).fill(0);
  
    return (
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      >
        {arr.map((_, i) => (
          <motion.div
            key={"skelenton-two" + i}
            variants={variants}
            style={{
              maxWidth: width, // Use the state value for width
            }}
            className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
          ></motion.div>
        ))}
      </motion.div>
    );
  };
  
const SkeletonThree = () => {
    const variants = {
      initial: {
        backgroundPosition: "0 50%",
      },
      animate: {
        backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
      },
    };
  
    return (
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-transparent backdrop-blur-md flex-col space-y-2"
        style={{
          background:
            "linear-gradient(-45deg, #8a2be2, #9b30ff, #ba55d3, #9400d3)", // Purple-related gradient
          backgroundSize: "400% 400%",
        }}
      >
        <motion.div className="h-full w-full rounded-lg"></motion.div>
      </motion.div>
    );
  };
  
  const SkeletonFour = () => {
    const first = {
      initial: {
        x: 20,
        rotate: -5,
      },
      hover: {
        x: 0,
        rotate: 0,
      },
    };
    const second = {
      initial: {
        x: -20,
        rotate: 5,
      },
      hover: {
        x: 0,
        rotate: 0,
      },
    };
  
    return (
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex flex-1 w-full h-full min-h-[6rem] bg-transparent backdrop-blur-md flex-row space-x-2"
      >
        <motion.div
          variants={first}
          className="h-full w-1/3 rounded-2xl bg-transparent backdrop-blur-md p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
        >
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyP62RjdtcYgudg0AhQvEOKf75k1zlUvNtTw&s"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-14 w-14"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
            Just code in Vanilla Javascript
          </p>
          <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 text-xs rounded-full px-2 py-0.5 mt-4">
            Delusional
          </p>
        </motion.div>
        <motion.div
          className="h-full relative z-20 w-1/3 rounded-2xl bg-transparent backdrop-blur-md p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
        >
          <Image
            src="https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-14 w-14"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
            Tailwind CSS is cool, you know
          </p>
          <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 text-xs rounded-full px-2 py-0.5 mt-4">
            Sensible
          </p>
        </motion.div>
        <motion.div
          variants={second}
          className="h-full w-1/3 rounded-2xl bg-transparent backdrop-blur-md p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
        >
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5bfc8dbab40b9d7dd9054f41/1543422989717-ZGDS44WYKN4XYXDE20TB/Randy+Krum+Profile+Photo+square.jpg"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-14 w-14"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
            I love angular, RSC, and Redux.
          </p>
          <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 text-xs rounded-full px-2 py-0.5 mt-4">
            Helpless
          </p>
        </motion.div>
      </motion.div>
    );
  };
  
  
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    (<motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black">
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10" />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-slate-800 to-purple-600 flex-shrink-0" />
      </motion.div>
    </motion.div>)
  );
};
const items = [
    {
      title: "AI-Powered Skill Gap Analysis",
      description: (
        <span className="text-sm">
          SkillSync analyzes the gap between your skills and job requirements, providing a personalized roadmap to make you job-ready.
        </span>
      ),
      header: <SkeletonOne />,
      className: "md:col-span-1",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Dynamic Portfolio & AI Suggestions",
      description: (
        <span className="text-sm">
          Upload your resume, and AI suggests missing skills and how to improve.
        </span>
      ),
      header: <SkeletonTwo />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Blockchain-Verified Certifications & Projects",
      description: (
        <span className="text-sm">
          Your portfolio updates in real-time with projects and certifications, all blockchain-verified for recruiters.
        </span>
      ),
      header: <SkeletonThree />,
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Placement Preparation Dashboard",
      description: (
        <span className="text-sm">
          Track your preparation with mock interviews and coding challenges.
        </span>
      ),
      header: <SkeletonFour />,
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Continuous Growth & Skill Development",
      description: (
        <span className="text-sm">
          Stay on track with AI insights into skill development and career growth.
        </span>
      ),
      header: <SkeletonFive />,
      className: "md:col-span-1",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  