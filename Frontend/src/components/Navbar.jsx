import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="h-10 sm:h-12 lg:h-16 w-auto object-contain"
          />

          <div className="leading-none">
            <h1 className="text-xl sm:text-2xl font-black tracking-tight">
              <span className="text-slate-900">Resume</span>
              <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
          </div>
        </div>

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm xl:text-[15px] font-medium text-slate-500">
          <li>
            <a href="/" className="transition hover:text-blue-600">
              Resume AI
            </a>
          </li>

          <li>
            <a href="/" className="transition hover:text-blue-600">
              ATS Score
            </a>
          </li>

          <li>
            <a href="/" className="transition hover:text-blue-600">
              Job Match
            </a>
          </li>

          <li>
            <a href="/" className="transition hover:text-blue-600">
              Resources
            </a>
          </li>
        </ul>

        {/* Right Button */}
        <div className="flex items-center gap-3">
          <button
            className="
              px-4 sm:px-6 lg:px-7
              py-2 sm:py-3
              rounded-xl
              bg-linear-to-r
              from-gray-950
              to-violet-900
              text-white
              text-sm sm:text-base
              font-semibold
              shadow-lg
              shadow-blue-500/25
              transition
              hover:scale-105
            "
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
