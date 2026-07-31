import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef();
  const hiredRef = useRef();
  const newTextRef = useRef();
  const firstUiWrapperRef = useRef();
  const resumeContainerRef = useRef();

  const scanner1Ref = useRef();
  const scanner2Ref = useRef();

  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  const ribbonRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=8500",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    // --- STEP 1: Pehli Animation ("Hired" & "Ready to transform") ---
    tl.to(sectionRef.current, {
      backgroundColor: "#000",
      duration: 2,
      ease: "power2.inOut",
    });

    tl.to(
      ".fade-out-text",
      {
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "<",
    );

    tl.to(
      hiredRef.current,
      {
        x: "35vw",
        y: "25vh",
        scale: 25,
        rotation: 2160,
        opacity: 0,
        transformOrigin: "center center",
        ease: "power4.inOut",
        duration: 5,
      },
      "<",
    );

    tl.fromTo(
      newTextRef.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 0.4, duration: 4, ease: "power3.out" },
      "-=1",
    );

    tl.to(newTextRef.current, {
      opacity: 0,
      scale: 0.7,
      duration: 2,
      ease: "power2.inOut",
    });

    // --- STEP 2: Pehla Layout Aayega (4 Cards + Badges) ---
    tl.to(firstUiWrapperRef.current, { autoAlpha: 1, duration: 0.1 });

    tl.fromTo(
      ".center-card",
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2.5,
        stagger: 0.2,
        ease: "power4.out",
      },
    );

    tl.fromTo(
      ".badge-left",
      { opacity: 0, x: -100, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 2,
        stagger: 0.15,
        ease: "power3.out",
      },
      "<",
    );

    tl.fromTo(
      ".badge-right",
      { opacity: 0, x: 100, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 2,
        stagger: 0.15,
        ease: "power3.out",
      },
      "<",
    );

    // --- STEP 3: Pehla Layout Gayab Ho Jayega ---
    tl.to(
      firstUiWrapperRef.current,
      { autoAlpha: 0, duration: 1.5, ease: "power2.inOut" },
      "+=1",
    );

    // --- STEP 4: Resume Container Aayega ---
    tl.to(resumeContainerRef.current, { autoAlpha: 1, duration: 0.1 });

    // 1st Card: Low ATS (45) + Unoptimized Ananya Card
    tl.fromTo(
      card1Ref.current,
      { opacity: 0, scale: 0.85, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 2, ease: "power4.out" },
    );
    tl.fromTo(
      scanner1Ref.current,
      { top: "0%" },
      { top: "85%", duration: 3, ease: "power1.inOut" },
      "<",
    );

    // --- STEP 5: 1st Card Out, 2nd Card In (AI Optimizer Card with Scanning) ---
    tl.to(
      card1Ref.current,
      { opacity: 0, scale: 0.9, duration: 1, ease: "power2.inOut" },
      "+=1.5",
    );

    tl.fromTo(
      card2Ref.current,
      { opacity: 0, scale: 0.85, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power4.out" },
    );
    tl.fromTo(
      scanner2Ref.current,
      { top: "0%" },
      { top: "85%", duration: 3, ease: "power1.inOut" },
      "<",
    );

    // --- STEP 6: 2nd Card Out, 3rd Card In (Optimized Ananya Card + High ATS 84% + Ribbon/Confetti theme) ---
    tl.to(
      card2Ref.current,
      { opacity: 0, scale: 0.9, duration: 1, ease: "power2.inOut" },
      "+=1.5",
    );

    tl.fromTo(
      card3Ref.current,
      { opacity: 0, scale: 0.85, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power4.out" },
    );

    // Ribbon / Banner pop animation
    tl.fromTo(
      ribbonRef.current,
      { opacity: 0, scale: 0.5, y: -20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
      "<",
    );

    // --- STEP 7: Final Transition ---
    tl.to(
      resumeContainerRef.current,
      {
        scale: 0.1,
        rotation: 720,
        opacity: 0,
        duration: 3,
        ease: "power4.inOut",
      },
      "+=2",
    );

    tl.to(
      sectionRef.current,
      {
        backgroundColor: "#ffffff",
        duration: 1.5,
        ease: "power2.inOut",
      },
      "-=1.5",
    );
  }, []);

  const CenterCard = ({ title }) => (
    <div className="center-card w-70 sm:w-95 bg-[#111318] border border-neutral-800 rounded-2xl p-3 sm:p-3.5 shadow-2xl flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        <h3 className="text-blue-400 font-bold text-[10px] sm:text-xs tracking-widest uppercase">
          {title}
        </h3>
      </div>
      <div className="w-full h-1.5 bg-neutral-800 rounded-full"></div>
      <div className="w-3/4 h-1.5 bg-neutral-800 rounded-full"></div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden bg-white relative font-sans"
    >
      {/* TOP NAVBAR */}
      <div className="w-full flex items-center justify-between py-4 sm:py-5 z-50 fade-out-text">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-md">
            P
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-tight text-gray-900">
            ResumeAI
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <span className="hover:text-blue-600 cursor-pointer">Resume AI</span>
          <span className="hover:text-blue-600 cursor-pointer">ATS Score</span>
          <span className="hover:text-blue-600 cursor-pointer">Job Match</span>
          <span className="hover:text-blue-600 cursor-pointer">Resources</span>
        </div>
        <button className="bg-gray-900 text-white px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold hover:bg-black transition shadow-sm">
          Get Started
        </button>
      </div>

      {/* ORIGINAL HERO TEXT */}
      <div className="max-w-3xl -translate-y-6 sm:-translate-y-12">
        <div className="flex items-center gap-2 px-2 sm:px-6 mb-2 sm:mb-3 fade-out-text">
          <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-blue-500"></span>
          <p className="text-gray-950 font-semibold text-sm sm:text-lg">
            Trusted by 32,969+ professionals
          </p>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl px-2 sm:px-6 font-bold leading-none text-gray-900">
          <span className="fade-out-text">Build a resume</span>
          <br />
          <span className="text-green-600">
            <span className="fade-out-text">that gets you </span>
            <span
              ref={hiredRef}
              className="inline-block text-green-600 font-bold relative z-10"
            >
              hired
            </span>
          </span>
        </h1>
      </div>

      {/* FOOTER TAGLINE */}
      <div className="w-full text-center pb-4 sm:pb-6 z-50 fade-out-text">
        <p className="text-sm sm:text-lg font-bold text-gray-900">
          Same resume. <span className="text-green-600">Sharper words.</span>
        </p>
      </div>

      {/* "Ready to transform" WRAPPER */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-100 px-4 text-center">
        <h2
          ref={newTextRef}
          className="text-white/30 text-xl sm:text-4xl md:text-6xl font-bold leading-tight whitespace-normal sm:whitespace-nowrap blur-[0.2px]"
        >
          Ready to transform your career?
          <br className="hidden sm:block" />
          Let's see what can it do
        </h2>
      </div>

      {/* FIRST UI WRAPPER: 4 Cards + Badges */}
      <div
        ref={firstUiWrapperRef}
        className="fixed inset-0 pointer-events-none z-110 invisible flex items-center justify-center px-4"
      >
        <div className="relative w-full max-w-135 h-120 flex items-center justify-center scale-90 sm:scale-100">
          <div className="flex flex-col items-center justify-center gap-3">
            <CenterCard title="Experience" />
            <CenterCard title="Education" />
            <CenterCard title="Skills" />
            <CenterCard title="Projects" />
          </div>

          <div className="badge-left absolute left-0 sm:-left-12 top-2 flex items-center gap-1.5 sm:gap-2 border border-neutral-800 bg-[#111318] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white text-[10px] sm:text-xs font-medium shadow-xl">
            <span className="text-blue-500 font-bold">in</span> LinkedIn
          </div>
          <div className="badge-left absolute left-0 sm:-left-12 bottom-2 flex items-center gap-1.5 sm:gap-2 border border-neutral-800 bg-[#111318] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white text-[10px] sm:text-xs font-medium shadow-xl">
            ✏️ From scratch
          </div>

          <div className="badge-right absolute right-0 sm:-right-12 top-2 flex items-center gap-1.5 sm:gap-2 border border-neutral-800 bg-[#111318] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white text-[10px] sm:text-xs font-medium shadow-xl">
            📄 Your PDF
          </div>
          <div className="badge-right absolute right-0 sm:-right-12 bottom-2 flex items-center gap-1.5 sm:gap-2 border border-neutral-800 bg-[#111318] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white text-[10px] sm:text-xs font-medium shadow-xl">
            🔍 A job post
          </div>
        </div>
      </div>

      {/* FIXED POSITION RESUME CONTAINER */}
      <div
        ref={resumeContainerRef}
        className="fixed inset-0 pointer-events-none z-120 invisible flex items-center justify-center px-4"
      >
        <div className="relative w-75 sm:w-95 h-110 flex items-center justify-center">
          {/* CARD 1: Unoptimized Resume + Low ATS Score (45) */}
          <div
            ref={card1Ref}
            className="absolute inset-0 bg-white rounded-xl p-4 sm:p-5 shadow-2xl flex flex-col gap-2.5 sm:gap-3 overflow-hidden border border-slate-200 opacity-0"
          >
            <div
              ref={scanner1Ref}
              className="absolute left-0 right-0 h-10 bg-linear-to-b from-transparent via-blue-500/20 to-blue-500/60 border-b-2 border-blue-500 pointer-events-none z-20 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
            ></div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Ananya Sharma
              </h2>
              <p className="text-blue-600 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">
                MARKETING ASSOCIATE
              </p>
            </div>

            <hr className="border-slate-100" />

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="text-blue-600 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">
                  EXPERIENCE
                </span>
                <span className="bg-red-50 text-red-600 text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-red-100">
                  NO NUMBER
                </span>
              </div>
              <div className="bg-red-50/60 border border-red-100 p-2 sm:p-2.5 rounded-lg text-slate-700 text-[11px] sm:text-xs">
                Responsible for handling social media accounts.
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full"></div>
              <p className="text-slate-600 text-[11px] sm:text-xs">
                Worked on improving checkout flow.
              </p>
            </div>

            <div className="flex flex-col gap-1.5 mt-1">
              <span className="text-blue-600 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">
                PROJECTS
              </span>
              <div className="w-full h-1.5 bg-slate-100 rounded-full"></div>
              <div className="w-3/4 h-1.5 bg-slate-100 rounded-full"></div>
            </div>

            <div className="flex flex-col gap-1.5 mt-1">
              <span className="text-blue-600 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">
                SKILLS
              </span>
              <div className="w-5/6 h-1.5 bg-slate-100 rounded-full"></div>
              <div className="w-2/3 h-1.5 bg-slate-100 rounded-full"></div>
            </div>

            {/* ATS Badge Shifted to Top Right Corner */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-2xl border-4 border-slate-100 flex flex-col items-center justify-center p-1 z-30">
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    className="text-slate-100"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-red-500"
                    strokeDasharray="45, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="text-[10px] sm:text-[11px] font-extrabold text-red-600 leading-none">
                  45
                </span>
                <span className="text-[3px] sm:text-[4px] font-bold text-red-500 uppercase tracking-widest mt-0.5 text-center leading-none">
                  ATS
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2: AI Resume Optimizer Card with Continuous Scanning Effect */}
          <div
            ref={card2Ref}
            className="absolute inset-0 bg-[#111318] border border-neutral-800 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col gap-3 sm:gap-4 text-white opacity-0 overflow-hidden"
          >
            <div
              ref={scanner2Ref}
              className="absolute left-0 right-0 h-10 bg-linear-to-b from-transparent via-green-500/20 to-green-500/60 border-b-2 border-green-500 pointer-events-none z-20 shadow-[0_0_15px_rgba(34,197,94,0.6)]"
            ></div>

            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <h3 className="text-green-400 font-bold text-[10px] sm:text-xs tracking-widest uppercase">
                  AI Resume Optimizer
                </h3>
              </div>
              <span className="bg-green-500/10 text-green-400 text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded-md border border-green-500/20">
                UPGRADING...
              </span>
            </div>

            <div className="w-full h-px bg-neutral-800 z-10"></div>

            <div className="flex flex-col gap-2.5 sm:gap-3 text-[11px] sm:text-xs text-neutral-300 z-10">
              <div className="flex items-start gap-2 bg-neutral-900/80 p-2 sm:p-2.5 rounded-xl border border-neutral-800">
                <span className="text-green-400 font-bold">✨</span>
                <p>
                  <strong className="text-white">Adding Metrics:</strong>{" "}
                  Injecting quantifiable data into work experience bullets.
                </p>
              </div>
              <div className="flex items-start gap-2 bg-neutral-900/80 p-2 sm:p-2.5 rounded-xl border border-neutral-800">
                <span className="text-green-400 font-bold">🎯</span>
                <p>
                  <strong className="text-white">Keyword Matching:</strong>{" "}
                  Aligning skills directly with target job descriptions.
                </p>
              </div>
              <div className="flex items-start gap-2 bg-neutral-900/80 p-2 sm:p-2.5 rounded-xl border border-neutral-800">
                <span className="text-green-400 font-bold">⚡</span>
                <p>
                  <strong className="text-white">ATS Formatting:</strong>{" "}
                  Optimizing layout structure for parse engines.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3: Optimized Resume + High ATS Score (84) + Ribbon Theme */}
          <div
            ref={card3Ref}
            className="absolute inset-0 bg-white rounded-xl p-4 sm:p-5 shadow-2xl flex flex-col gap-2.5 sm:gap-3 overflow-hidden border border-slate-200 opacity-0"
          >
            {/* Ribbon / Congratulatory Banner Theme */}
            <div
              ref={ribbonRef}
              className="absolute -left-12 top-6 bg-linear-to-r from-emerald-600 to-green-500 text-white text-[9px] sm:text-[10px] font-extrabold py-1 px-12 -rotate-45 shadow-lg tracking-wider uppercase z-40 border border-emerald-400/50 flex items-center gap-1 justify-center"
            >
              🎉 CONGRATS!
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Ananya Sharma
              </h2>
              <p className="text-blue-600 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">
                MARKETING ASSOCIATE
              </p>
            </div>

            <hr className="border-slate-100" />

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="text-blue-600 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">
                  EXPERIENCE
                </span>
                <span className="bg-emerald-50 text-emerald-600 text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-emerald-100 flex items-center gap-1">
                  ✓ FIXED
                </span>
              </div>
              <div className="bg-emerald-50/60 border border-emerald-100 p-2 sm:p-2.5 rounded-lg text-slate-700 text-[11px] sm:text-xs font-medium">
                Grew Instagram{" "}
                <span className="text-emerald-700 font-bold">3+ to 45K</span> in
                six months.
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full"></div>
              <p className="text-slate-600 text-[11px] sm:text-xs">
                Worked on improving the checkout flow
              </p>
            </div>

            <div className="flex flex-col gap-1.5 mt-1">
              <span className="text-blue-600 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">
                PROJECTS
              </span>
              <div className="w-full h-1.5 bg-slate-100 rounded-full"></div>
              <div className="w-3/4 h-1.5 bg-slate-100 rounded-full"></div>
            </div>

            <div className="flex flex-col gap-1.5 mt-1">
              <span className="text-blue-600 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">
                SKILLS
              </span>
              <div className="w-5/6 h-1.5 bg-slate-100 rounded-full"></div>
              <div className="w-2/3 h-1.5 bg-slate-100 rounded-full"></div>
            </div>

            {/* ATS Badge Shifted to Top Right Corner */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-2xl border-4 border-slate-100 flex flex-col items-center justify-center p-1 z-30">
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    className="text-slate-100"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-green-500"
                    strokeDasharray="84, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="text-[10px] sm:text-[11px] font-extrabold text-green-600 leading-none">
                  84
                </span>
                <span className="text-[3px] sm:text-[4px] font-bold text-green-500 uppercase tracking-widest mt-0.5 text-center leading-none">
                  ATS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
