"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const shoeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // 1. AGGRESSIVE "SLAM" ENTRY ANIMATION
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        letterSpacing: "-2vw", // Text starts crunched together
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      }).from(
        shoeRef.current,
        {
          scale: 2, // Shoe starts massive
          y: -100,
          opacity: 0,
          duration: 1.2,
          ease: "back.out(1.5)", // Gives it that heavy basketball "bounce"
        },
        "-=1.2",
      );

      // 2. TIGHT HOVER FLOAT
      gsap.to(shoeRef.current, {
        y: -15,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      // 3. SCROLL TRANSITION
      gsap.to(shoeRef.current, {
        rotateZ: -15, // Keeps the slight tilt

        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      // Tailwind classes that react to the Dark Mode toggle
      // Change it to exactly this:
      className="h-screen w-full flex items-center justify-center overflow-hidden relative bg-[#050505]"
    >
      {/* MASSIVE BACKGROUND TEXT */}
      <h1
        ref={titleRef}
        // Change it to exactly this:
        className="absolute text-[20vw] font-black italic uppercase select-none pointer-events-none z-0 text-[#111]"
      >
        JORDAN
      </h1>

      {/* THE RED GLOW (Matches the shoe) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-red-600/30 dark:bg-red-600/40 blur-[120px] rounded-full pointer-events-none z-0 transition-colors duration-700"></div>

      {/* THE SHOE */}
      <div ref={shoeRef} className="z-10 relative flex flex-col items-center">
        <Image
          src="/AIR1.png"
          alt="Air Jordan 13"
          width={900}
          height={900}
          priority
          className="w-70 md:w-150 lg:w-200 h-auto object-contain pointer-events-none drop-shadow-[0_40px_40px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_40px_40px_rgba(220,38,38,0.15)]"
        />
        {/* Dynamic Shadow */}
        <div className="w-[70%] h-6 bg-black/40 dark:bg-black/80 blur-xl rounded-[100%] absolute -bottom-12 pointer-events-none transition-colors duration-700"></div>
      </div>
    </section>
  );
}
