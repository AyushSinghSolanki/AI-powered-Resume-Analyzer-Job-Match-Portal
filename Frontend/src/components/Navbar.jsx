import React from "react";
import logo from "../assets/logo.png"; // Change path if needed

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50">
      <div className="w-full px-15 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center   cursor-pointer">
          <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
          <div className="leading-none">
            <h1 className="text-2xl font-black tracking-tight">
              <span className="text-slate-900">Resume</span>
              <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
          </div>
        </div>

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-slate-500">
          <li>
            <a
              href="/"
              className="transition hover:text-blue-600 hover:scale-105"
            >
              Resume AI
            </a>
          </li>

          <li>
            <a
              href="/"
              className="transition hover:text-blue-600 hover:scale-105"
            >
              ATS Score
            </a>
          </li>

          <li>
            <a
              href="/"
              className="transition hover:text-blue-600 hover:scale-105"
            >
              Job Match
            </a>
          </li>

          <li>
            <a
              href="/"
              className="transition hover:text-blue-600 hover:scale-105"
            >
              Resources
            </a>
          </li>
        </ul>

        {/* Right Button */}
        <div className="flex items-center gap-4">
          <button
            className="
            px-7
            py-3
            rounded-xl
            bg-linear-to-r
            from-gray-950
            to-violet-900
            text-white
            font-semibold
            shadow-lg
            shadow-blue-500/25
           
           
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
