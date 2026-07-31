import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white relative pt-20 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden font-sans border-t border-slate-100">
      {/* FLOATING CTA CARD OVERLAYING TOP OF FOOTER */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/80 relative overflow-hidden bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[16px_16px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className=" oswald  text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Right resume. Right opportunity.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              See what Pika finds in your resume, free. Rewrite it for impact
              when you're ready, for ₹79.
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-bold text-sm sm:text-base transition shadow-lg whitespace-nowrap">
            Create Resume →
          </button>
        </div>
      </div>

      {/* MAIN FOOTER LINKS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 pb-16 border-b border-slate-200">
        {/* Column 1: Company */}
        <div className="flex flex-col gap-3">
          <h4 className="text-slate-900 font-bold text-xs sm:text-sm tracking-wider uppercase">
            Company
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600">
            <li className="hover:text-blue-600 cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              All Templates
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Resume Examples
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              State of Resume
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Blogs
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Column 2: Resources */}
        <div className="flex flex-col gap-3">
          <h4 className="text-slate-900 font-bold text-xs sm:text-sm tracking-wider uppercase">
            Resources
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600">
            <li className="hover:text-blue-600 cursor-pointer transition">
              Resume Roast
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Expert Review
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Pricing
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Reviews
            </li>
          </ul>
        </div>

        {/* Column 3: Tools */}
        <div className="flex flex-col gap-3">
          <h4 className="text-slate-900 font-bold text-xs sm:text-sm tracking-wider uppercase">
            Tools
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600">
            <li className="hover:text-blue-600 cursor-pointer transition">
              Resume Editor
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Edit PDF Resume
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Modify PDF Resume
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              JD Tailoring
            </li>
          </ul>
        </div>

        {/* Column 4: Compare */}
        <div className="flex flex-col gap-3">
          <h4 className="text-slate-900 font-bold text-xs sm:text-sm tracking-wider uppercase">
            Compare
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600">
            <li className="hover:text-blue-600 cursor-pointer transition">
              Compare Resume Builders
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Resume Roast
            </li>
          </ul>
        </div>

        {/* Column 5: By Country */}
        <div className="flex flex-col gap-3">
          <h4 className="text-slate-900 font-bold text-xs sm:text-sm tracking-wider uppercase">
            By country
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600">
            <li className="hover:text-blue-600 cursor-pointer transition">
              India Resume Guides
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              UAE CV Guides
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              UK CV Guides
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Canada Resume Guides
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Australia Resume Guides
            </li>
          </ul>
        </div>

        {/* Column 6: Guides */}
        <div className="flex flex-col gap-3">
          <h4 className="text-slate-900 font-bold text-xs sm:text-sm tracking-wider uppercase">
            Guides
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600">
            <li className="hover:text-blue-600 cursor-pointer transition">
              Hobbies for Resume
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Skills for Resume
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              LinkedIn to Resume
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Resume Glossary
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Free ATS Check
            </li>
          </ul>
        </div>
      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
        {/* Brand Copyright & Made with love */}
        <div className="flex items-center gap-3 text-slate-700 font-medium">
          <span>
            Made with love by people who care. © 2026. All rights reserved.
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition"
          >
            📷
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 font-bold transition"
          >
            in
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
