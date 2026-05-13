"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.1,
      });

      gsap.to(".bg-grid", {
        backgroundPosition: "0 100px",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="intro"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-brand-primary"
    >
      {/* Background Grid Accent */}
      <div className="bg-grid absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 text-center flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8 flex items-center gap-3 px-4 py-2 border border-brand-border rounded-full bg-black/20 backdrop-blur-sm"
        >
          <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">Full Stack Developer</span>
        </motion.div>

        <h1 className="hero-text text-[14vw] md:text-[10vw] lg:text-[12vw] font-bold text-white uppercase tracking-tighter leading-none mb-12 select-none whitespace-nowrap">
          Sri Krishna <span className="text-brand-accent">VR</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hero-text text-gray-500 uppercase tracking-[0.4em] text-[10px] md:text-sm font-light max-w-2xl px-6"
        >
          Full-Stack Developer focused on creating modern, responsive, and user-first applications.
        </motion.p>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[8px] uppercase tracking-[0.4em] text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent" />
      </div>
    </section>
  );
}
