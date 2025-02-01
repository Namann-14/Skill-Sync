"use client";
import React, { useState, useEffect } from "react"; // Import useEffect
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/lib/utils";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation"; // Correct useRouter for Next.js
import { useAuth } from "../../context/authContext"; // Import useAuth to access authentication context
import axios from "axios"; // Import axios

export default function SignupFormDemo1() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { isAuthenticated, setAuthenticated } = useAuth();
  const router = useRouter(); // Initialize useRouter

  // Redirect to homepage if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/"); // Redirect to homepage if already authenticated
    }
  }, [isAuthenticated, router]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3002/api/user/login";
      const response = await axios.post(url, data, {
        withCredentials: true, // Ensure cookies are sent
      });

      if (response.status === 200) {
        toast.success(response.data.message || "Login successful!");
        setAuthenticated(true); // Set authenticated state
      }
    } catch (error) {
      if (error.response && error.response.status >= 400) {
        toast.error(error.response.data.message || "Login failed!");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen" >
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to SkillSync
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Login to access your personalized dashboard and start learning!
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              onChange={handleChange}
              value={data.email}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={handleChange}
              value={data.password}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </LabelInputContainer>

          <div className="flex items-center justify-between mb-3">
            <a href="/signup" className="text-white hover:text-gray-400 transition">Don&apos;t have a account? Sign up now</a>
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)inset,0px-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Login &rarr;
            <BottomGradient />
          </button>
          <div className="flex flex-col space-y-4"></div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
