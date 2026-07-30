import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef();
  const hiredRef = useRef();
  const newTextRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1200",
        scrub: 1.5,
        pin: true,
      },
    });

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
        duration: 6,
      },
      "<",
    );

    // Naya Text Mid Se Zoom In Hoga
   tl.fromTo(
     newTextRef.current,
     {
       opacity: 0,
       scale: 0,
     },
     {
       opacity: 1,
       scale: 0.4, 
       duration: 5,
       ease: "power3.out",
     },
     "-=1",
   );
    
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex items-center px-6 md:px-16 lg:px-15 overflow-hidden bg-white"
    >
      <div className="max-w-3xl -translate-y-27">
        <div className="flex items-center gap-2 px-6 mb-3 fade-out-text">
          <span className="h-3 w-3 rounded-full bg-blue-500"></span>

          <p className="text-gray-950 font-semibold text-lg">
            Trusted by 32,969+ professionals
          </p>
        </div>

        <h1 className="text-7xl md:text-6xl px-6 font-bold leading-none text-gray-900">
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

      {/* FIXED WRAPPER: Ye text ko exactly center me rakhega without using translate */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-100">
        <h2
          ref={newTextRef}
          // whitespace-nowrap se sirf wahi wrap hoga jaha <br /> hai, strict 2 lines!
          className="text-white/30 text-3xl md:text-6xl font-bold leading-tight text-center whitespace-nowrap blur-[0.2px]"
        >
          Ready to transform your career?
          <br />
          Your success story starts now.
        </h2>
      </div>
    </section>
  );
};

export default Hero;
