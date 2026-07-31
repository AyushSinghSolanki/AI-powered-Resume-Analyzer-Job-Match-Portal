import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition block py-2 lg:py-0 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-500 hover:text-blue-600"
    }`;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleGetStartedClick = () => {
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="h-10 sm:h-12 lg:h-16 w-auto object-contain"
          />

          <div className="leading-none ml-2">
            <h1 className="text-xl sm:text-2xl font-black tracking-tight">
              <span className="text-slate-900">Resume</span>
              <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
          </div>
        </NavLink>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm xl:text-[15px] font-medium">
          <li>
            <NavLink to="/resume-ai" className={navLinkClass}>
              Resume AI
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume-ai" className={navLinkClass}>
              ATS Score
            </NavLink>
          </li>
          <li>
            <NavLink to="/job-match" className={navLinkClass}>
              Job Match
            </NavLink>
          </li>
          <li>
            <NavLink to="/resources" className={navLinkClass}>
              Resources
            </NavLink>
          </li>
        </ul>

        {/* Desktop Right Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/login")}
            className="
              hidden lg:block
              px-4 sm:px-6 lg:px-7
              py-2 sm:py-3
              rounded-xl
              bg-linear-to-r
              from-gray-950
              to-violet-900
              text-white
              text-sm sm:text-base
              font-semibold
              hover:opacity-90
              transition
            "
          >
            Get Started
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-blue-600 focus:outline-none transition"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Smooth Mobile Menu Drawer with Get Started Button Inside */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-2xl border-b border-gray-200 shadow-xl ${
          isOpen
            ? "max-h-112.5 opacity-100 py-6 px-6"
            : "max-h-0 opacity-0 py-0 px-6"
        }`}
      >
        <ul className="flex flex-col gap-4 text-base font-medium mb-6">
          <li>
            <NavLink
              to="/resume-ai"
              className={navLinkClass}
              onClick={handleLinkClick}
            >
              Resume AI
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume-ai"
              className={navLinkClass}
              onClick={handleLinkClick}
            >
              ATS Score
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/job-match"
              className={navLinkClass}
              onClick={handleLinkClick}
            >
              Job Match
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resources"
              className={navLinkClass}
              onClick={handleLinkClick}
            >
              Resources
            </NavLink>
          </li>
        </ul>

        {/* Get Started Button inside mobile menu drawer */}
        <button
          onClick={handleGetStartedClick}
          className="w-full py-3 rounded-xl bg-linear-to-r from-gray-950 to-violet-900 text-white text-base font-semibold text-center hover:opacity-90 transition shadow-md"
        >
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;
