import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/authContext";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skill Sync",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-y-scroll bg-[#030014] overflow-x-hidden`}
      >
      <AuthProvider>
      <Toaster/>
        {children}
      </AuthProvider>
      </body>
    </html>
  );
}
