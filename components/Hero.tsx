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
  const container = useRef(null);
  const shoeRef = useRef(null);

  useGSAP(
    () => {
      // Subtle float
      gsap.to(shoeRef.current, {
        y: -15,
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Subtler Scroll: Small tilt and slight slide
      gsap.to(shoeRef.current, {
        rotate: 15, // Reduced from 360
        x: 50, // Small horizontal shift
        scale: 1.1,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden"
    >
      <h1 className="absolute text-[20vw] font-black opacity-10 italic select-none">
        NIKE
      </h1>
      <div ref={shoeRef} className="z-10 drop-shadow-2xl">
        <Image
          src="/AIR1.png"
          alt="Shoe"
          width={700}
          height={700}
          priority
          className="rotate-[-10deg]"
        />
      </div>
    </section>
  );
}
