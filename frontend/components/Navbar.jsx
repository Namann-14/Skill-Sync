import React from "react";

const Navbar = () => {
  return (
    <div className="w-full py-4 fixed top-0 shadow-lg bg-transparent backdrop-blur-md z-50 px-6 navbar font-extralight">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Name */}
        <a href="/" className="flex items-center">
          {/* SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-brain cursor-pointer hover:scale-110 transition-transform text-white "
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
          </svg>
          <span className="font-normal ml-3 text-lg hidden md:block text-white navbar">
            SkillSync
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <div className="hidden md:flex items-center justify-between w-auto border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-white text-sm">
            <a href="/skillgap" className="px-4 py-1 hover:text-white transition">
              Skillset
            </a>
            <a href="/dashboard" className="px-4 py-1 hover:text-white transition">
              Dashboard
            </a>
            <a href="/contact" className="px-4 py-1 hover:text-white transition">
              Contact Us
            </a>
            <a href="/blockchain" className="px-4 py-1 hover:text-white transition">
              Crypto Auth
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-5">
          {/* GitHub Icon */}
          <a href="/login" className="text-white hover:text-gray-400 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
           {/* User Icon */}
           <a href="signup" className="text-white hover:text-gray-400 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



