"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Multi-Tenant Feature Flags",
    category: "SaaS Infrastructure",
    description: "Enterprise-grade feature management system similar to LaunchDarkly, built for high-scale multi-tenant environments.",
    tags: ["Next.js", "Node.js", "MongoDB", "RBAC"],
    link: "https://github.com/SriKrishna19701/Multi-Tenant-Feature-Flag-Management-System",
  },
  {
    title: "Local Workforce App",
    category: "Marketplace",
    description: "Connects local workers with short-term job opportunities through an intuitive, location-based mobile experience.",
    tags: ["React Native", "Express", "JWT", "REST API"],
    link: "https://github.com/SriKrishna19701/Local-Workforce-and-Short-Term-Job-App-Backend"
  },
  {
    title: "Outpass Management",
    category: "Campus Automation",
    description: "Streamlined digital outpass system for institutional campus management with automated approval workflows.",
    tags: ["React", "Express", "Node.js", "MySQL"],
    link: "https://github.com/SriKrishna19701/OMS-RN"
  },
  {
    title: "Hackintosh Build",
    category: "System Engineering",
    description: "Custom macOS optimization on non-Apple hardware, focusing on kernel-level patching and hardware compatibility.",
    tags: ["Linux", "Kernel", "Hardware"],
  },
];

export default function ProjectWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // 5 panels total
      const pin = gsap.to(sectionRef.current, {
        x: "-400vw", // Explicitly move 4 sections to the left
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=4000", // Long enough scroll distance
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          snap: 1 / 4, // Snap to each of the 5 panels (0, 0.25, 0.5, 0.75, 1.0)
        },
      });
      return () => pin.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="overflow-hidden bg-black">
      <div id="work" ref={triggerRef}>
        <div
          ref={sectionRef}
          className="flex flex-col md:flex-row relative flex-nowrap w-full md:w-[500vw]"
        >
          {/* Section Header */}
          <div className="h-screen w-full md:w-screen flex-shrink-0 flex flex-col justify-center px-6 md:px-24">
            <h2 className="text-[18vw] md:text-[12vw] font-bold text-white uppercase tracking-tighter leading-[0.8] mb-8">
              Project<br />
              <span className="text-brand-accent">Works</span>
            </h2>
            <p className="text-gray-500 uppercase tracking-widest text-[10px] md:text-xs">
              Scroll to explore engineering craftsmanship.
            </p>
          </div>

          {/* Project Panels */}
          {projects.map((project, index) => (
            <div key={index} className="h-screen w-full md:w-screen flex-shrink-0 flex items-center justify-center p-6 md:p-24 relative overflow-hidden">
              {/* Cinematic Background Number */}
              <div className="hidden md:flex absolute -left-12 top-0 h-full -z-0 pointer-events-none md:opacity-[0.6] items-center">
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[42vw] font-black leading-none tracking-tighter bg-gradient-to-b from-white via-white/20 to-transparent bg-clip-text text-transparent inline-block whitespace-nowrap select-none [font-variant-numeric:lining-nums_tabular-nums]"
                  style={{ height: '1em', display: 'flex', alignItems: 'center' }}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </motion.span>
              </div>

              <div className="relative w-full max-w-7xl flex flex-col md:flex-row items-center md:items-end justify-between z-10 gap-12 group">
                <div className="hidden md:block w-1/4 shrink-0" />

                {/* Project Info */}
                <div className="w-full md:w-1/2 flex flex-col items-start bg-black/40 backdrop-blur-md p-6 md:p-0 rounded-xl md:rounded-none">
                  <span className="text-brand-accent text-[10px] md:text-sm font-mono mb-4 uppercase tracking-[0.2em] border-l-2 border-brand-accent pl-4">
                    {project.category}
                  </span>
                  <h3 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tighter leading-[0.85] mb-8">
                    {project.title}
                  </h3>
                  <div className="w-full h-[1px] bg-brand-border mb-8" />
                  <p className="text-gray-400 text-sm md:text-lg mb-10 font-light leading-relaxed max-w-md">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 rounded-full border border-brand-border text-[9px] md:text-xs text-gray-400 uppercase font-bold tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative py-4 text-white uppercase text-[10px] tracking-[0.3em] font-bold overflow-hidden inline-block"
                  >
                    <span className="relative z-10">View Project</span>
                    <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-brand-accent group-hover/btn:w-full transition-all duration-500 ease-expo" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[10vh] bg-black" />
    </section>
  );
}
