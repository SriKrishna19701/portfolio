"use client";

import { motion } from "framer-motion";

const education = [
  {
    school: "S A Engineering College, Chennai",
    degree: "Master of Computer Applications (MCA)",
    period: "2024 – 2026",
    cgpa: "7.7",
    desc: "Advanced studies in computer applications, focusing on architectural patterns and high-performance engineering.",
  },
  {
    school: "Dr. MGR Education and Research Institute, Chennai",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2021 – 2024",
    cgpa: "7.7",
    desc: "Foundational computer science principles, web technologies, and software development methodologies.",
  },
];

export default function Experience() {
  return (
    <section className="py-24 px-6 md:px-24 bg-black border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <span className="text-brand-accent text-xs font-mono uppercase tracking-widest mb-12 block border-b border-brand-border pb-4">Academic Background</span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col gap-4 mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter group-hover:text-brand-accent transition-colors duration-500">
                  {edu.school}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 font-mono text-[10px] uppercase tracking-widest bg-brand-border px-3 py-1 rounded-full">{edu.period}</span>
                  <span className="text-brand-accent font-mono text-[10px] uppercase tracking-widest">CGPA: {edu.cgpa}</span>
                </div>
              </div>
              <p className="text-white text-sm md:text-lg uppercase tracking-[0.2em] font-bold mb-6">{edu.degree}</p>
              <p className="text-gray-500 leading-relaxed font-light text-sm md:text-base max-w-xl">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
