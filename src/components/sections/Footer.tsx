"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { 
        hour12: true, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="bg-black py-24 px-6 md:px-24 border-t border-brand-border min-h-screen flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <h2 className="text-[15vw] font-bold text-white uppercase tracking-tighter leading-[0.8]">
          Let's<br />
          <span className="text-brand-accent">Build</span>
        </h2>
        <div className="max-w-xs">
          <p className="text-gray-500 uppercase tracking-widest text-xs leading-loose mb-12">
            Currently available for full-time product roles.
          </p>
          <div className="flex flex-col gap-4 text-white uppercase text-xs tracking-widest font-bold">
            <a href="mailto:srikrishna19701@gmail.com" className="hover:text-brand-accent underline underline-offset-8 transition-colors">Email Me</a>
            <a href="https://www.linkedin.com/in/sri-krishna-v-r-13a657370" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent underline underline-offset-8 transition-colors">LinkedIn</a>
            <a href="https://github.com/srikrishna19701" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent underline underline-offset-8 transition-colors">GitHub</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-t border-brand-border pt-12">
        <div className="flex flex-col gap-2">
          <span className="text-gray-600 text-[10px] uppercase tracking-widest">Local Time</span>
          <span className="text-white font-mono min-h-[1.5em]">
            {time ? `${time} IST` : "Loading..."}
          </span>
        </div>
        <div className="text-right">
          <span className="text-gray-600 text-[10px] uppercase tracking-widest block mb-2">Designed & Built by</span>
          <span className="text-white font-bold uppercase tracking-widest">Sri Krishna VR &copy; 2026</span>
        </div>
      </div>
    </footer>
  );
}
