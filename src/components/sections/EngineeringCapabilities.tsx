"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Frontend Engineering",
    description: "Crafting immersive, high-performance user interfaces with React, Next.js, and React Native.",
    skills: ["React", "Next.js", "React Native"],
    icon: "⚡",
  },
  {
    title: "Backend Systems",
    description: "Architecting scalable server-side logic and robust API infrastructures for complex data flows.",
    skills: ["Node.js", "Express", "REST APIs", "JWT"],
    icon: "⚙️",
  },
  {
    title: "Mobile Development",
    description: "Building native-quality cross-platform applications with React Native for iOS and Android.",
    skills: ["React Native", "Expo", "Mobile UI"],
    icon: "📱",
  },
  {
    title: "Database Architecture",
    description: "Designing efficient data models and optimizing query performance across SQL and NoSQL systems.",
    skills: ["MongoDB", "MySQL"],
    icon: "🗄️",
  },
  {
    title: "Cloud & Deployment",
    description: "Managing infrastructure and automated deployment pipelines for reliable product delivery.",
    skills: ["Render", "Vercel", "Linux"],
    icon: "☁️",
  },
  {
    title: "UI/UX Engineering",
    description: "Bridging the gap between design and engineering with a focus on product-thinking and accessibility.",
    skills: ["Figma"],
    icon: "🎨",
  },
];

export default function EngineeringCapabilities() {
  return (
    <section id="capability" className="py-24 px-6 md:px-24 bg-black border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-accent text-xs font-mono uppercase tracking-widest mb-4 block">
              Technical Excellence
            </span>
            <h2 className="text-4xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter leading-tight font-bold">
              Technical<br />
              <span className="text-brand-accent">Capabilities</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-xs md:text-sm uppercase tracking-widest leading-loose">
            A comprehensive ecosystem of technologies and methodologies focused on building 2026-ready digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 bg-brand-border border border-brand-border overflow-hidden">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-8 md:p-12 bg-black hover:bg-[#050505] transition-all duration-500 flex flex-col justify-between aspect-square md:aspect-auto min-h-[320px]"
            >
              <div>
                <div className="text-3xl mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tighter mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {item.skills.map((skill) => (
                  <span key={skill} className="text-[10px] text-gray-700 group-hover:text-brand-accent font-mono uppercase tracking-widest transition-colors duration-500">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
