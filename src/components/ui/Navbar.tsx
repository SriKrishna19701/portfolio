"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useScroll } from "./SmoothScroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lenis } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (lenis) {
      lenis.scrollTo(id, { offset: 0, duration: 1.5 });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1, ease: "circOut" }}
      className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[5000] flex items-center transition-all duration-500 rounded-full border ${
        scrolled 
          ? "bg-black/60 backdrop-blur-xl border-brand-border py-2 px-4 md:py-3 md:px-6" 
          : "bg-transparent border-transparent px-2"
      }`}
    >
      <div className="flex items-center gap-4 md:gap-12 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
        <button onClick={() => scrollTo("#intro")} className="hover:text-brand-accent transition-colors py-2">Intro</button>
        <button onClick={() => scrollTo("#work")} className="hover:text-brand-accent transition-colors py-2">Projects</button>
        <button onClick={() => scrollTo("#capability")} className="hover:text-brand-accent transition-colors py-2 hidden sm:block">Capability</button>
        <button onClick={() => scrollTo("#contact")} className="bg-brand-accent text-brand-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:scale-105 active:scale-95 transition-all">Connect</button>
      </div>
    </motion.nav>
  );
}
