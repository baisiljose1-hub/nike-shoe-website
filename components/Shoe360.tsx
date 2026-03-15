"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Shoe360() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  // Configuration: How many frames do you have?
  const frameCount = 36; // Example: 36 images for a full rotation

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext("2d");
      if (!context) return;

      // Load all images into an array
      const images: HTMLImageElement[] = [];
      const imageSeq = { frame: 0 };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        // This assumes you have images named shoe0.png, shoe1.png, etc., in your public folder
        img.src = `/shoe-sequence/shoe${i}.png`;
        images.push(img);
      }

      // Draw the first image as soon as it loads
      images[0].onload = () => drawImage(0);

      function drawImage(index: number) {
        if (!canvas || !context) return;
        context.clearRect(0, 0, canvas.width, canvas.height);
        const img = images[index];

        // Keep aspect ratio and center the image in the canvas
        const scale = Math.min(
          canvas.width / img.width,
          canvas.height / img.height,
        );
        const x = canvas.width / 2 - (img.width / 2) * scale;
        const y = canvas.height / 2 - (img.height / 2) * scale;

        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }

      // The GSAP Scroll Magic
      gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame", // Ensures we only land on whole numbers (no half-images)
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%", // Pin the section for two screen heights
          scrub: 0.5, // Smooth scrolling transition
          pin: true,
        },
        onUpdate: () => drawImage(imageSeq.frame),
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="h-screen w-full bg-[#e5e5e5] flex flex-col items-center justify-center relative overflow-hidden"
    >
      <h1 className="absolute text-[15vw] font-black italic text-black/5 uppercase select-none pointer-events-none z-0">
        360 VIEW
      </h1>

      {/* The HTML Canvas where the images are drawn */}
      <canvas
        ref={canvasRef}
        width={1000}
        height={800}
        className="z-10 w-full max-w-200 h-auto pointer-events-none drop-shadow-2xl"
      />

      <p className="absolute bottom-10 z-20 font-bold uppercase tracking-widest text-xs text-slate-500">
        Scroll to Rotate
      </p>
    </section>
  );
}
