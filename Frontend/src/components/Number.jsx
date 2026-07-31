import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Number = () => {
  const sectionRef = useRef(null);
  
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const num3Ref = useRef(null);
  const num4Ref = useRef(null);

  useGSAP(() => {
    // Helper function to animate numbers fast on scroll
    const animateValue = (ref, start, end, duration, suffix = "") => {
      const obj = { value: start };
      gsap.to(obj, {
        value: end,
        duration: duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.innerText = Math.floor(obj.value).toLocaleString() + suffix;
          }
        },
      });
    };

    // Fast counters from 0 to target numbers matching the UI layout structure
    animateValue(num1Ref, 0, 100, 1.2, "+");
    animateValue(num2Ref, 0, 99, 1.2, "%");
    animateValue(num3Ref, 0, 100, 1.2, "+");
    animateValue(num4Ref, 0, 50, 1.2, "+");
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bebas-neue min-h-[70vh] bg-white flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 py-20 font-sans"
    >
      {/* SECTION HEADER */}
      <div className="max-w-4xl w-full text-left mb-12">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Numbers that back it up
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          New platform, high performance. Early adopters are already landing
          results.
        </p>
      </div>

      {/* STATS GRID CONTAINER WITH SUBTLE DOT BACKGROUND */}
      <div className="max-w-4xl w-full bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] background-size:16px_16px">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center text-center pt-4 sm:pt-0">
            <span
              ref={num1Ref}
              className="text-4xl sm:text-5xl font-black text-blue-600 tracking-tight"
            >
              0+
            </span>
            <span className="text-xs sm:text-sm font-semibold text-gray-600 mt-2">
              Resumes Created
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center text-center pt-6 sm:pt-0">
            <span
              ref={num2Ref}
              className="text-4xl sm:text-5xl font-black text-blue-600 tracking-tight"
            >
              0%
            </span>
            <span className="text-xs sm:text-sm font-semibold text-gray-600 mt-2">
              Avg. Rating
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center text-center pt-6 sm:pt-0">
            <span
              ref={num3Ref}
              className="text-4xl sm:text-5xl font-black text-blue-600 tracking-tight"
            >
              0+
            </span>
            <span className="text-xs sm:text-sm font-semibold text-gray-600 mt-2">
              ATS Fixed
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center text-center pt-6 sm:pt-0">
            <span
              ref={num4Ref}
              className="text-4xl sm:text-5xl font-black text-blue-600 tracking-tight"
            >
              0+
            </span>
            <span className="text-xs sm:text-sm font-semibold text-gray-600 mt-2">
              Templates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Number;