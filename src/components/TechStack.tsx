"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const techStack = [
  { name: "React", abbr: "Re", color: "#61DAFB", textColor: "#000" },
  { name: "Next.js", abbr: "Nx", color: "#ffffff", textColor: "#000" },
  { name: "Node.js", abbr: "No", color: "#339933", textColor: "#fff" },
  { name: "TypeScript", abbr: "TS", color: "#3178C6", textColor: "#fff" },
  { name: "Python", abbr: "Py", color: "#3776AB", textColor: "#FFD43B" },
  { name: "Docker", abbr: "Dk", color: "#2496ED", textColor: "#fff" },
  { name: "AWS", abbr: "AW", color: "#FF9900", textColor: "#232F3E" },
  { name: "Linux", abbr: "Lx", color: "#FCC624", textColor: "#000" },
  { name: "MongoDB", abbr: "Mg", color: "#47A248", textColor: "#fff" },
  { name: "PostgreSQL", abbr: "Pg", color: "#336791", textColor: "#fff" },
  { name: "Redis", abbr: "Rd", color: "#DC382D", textColor: "#fff" },
  { name: "Nginx", abbr: "Ng", color: "#009639", textColor: "#fff" },
  { name: "Git", abbr: "Gt", color: "#F05032", textColor: "#fff" },
  { name: "Tailwind", abbr: "Tw", color: "#06B6D4", textColor: "#fff" },
  { name: "GraphQL", abbr: "GQ", color: "#E10098", textColor: "#fff" },
  { name: "Kubernetes", abbr: "K8", color: "#326CE5", textColor: "#fff" },
];

// Duplicate for seamless marquee
const doubledStack = [...techStack, ...techStack];

export default function TechStack() {
  return (
    <SectionWrapper id="stack">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex items-center gap-4"
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">04</span>
        <div className="h-[1px] w-12 bg-accent/30" />
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted">Technologies</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
      >
        Tech <span className="gradient-text">Stack</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mb-16 max-w-xl text-muted"
      >
        The tools and technologies I use to bring ideas to life — from frontend frameworks to cloud infrastructure.
      </motion.p>

      {/* Marquee Row 1 */}
      <div className="relative mb-6 overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="animate-marquee flex gap-4 w-max">
          {doubledStack.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="group flex items-center gap-3 rounded-xl border border-border/20 bg-surface-light/30 px-5 py-3 transition-all hover:border-accent/30 hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/10 cursor-default"
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-bold shrink-0 shadow-sm"
                style={{ backgroundColor: tech.color, color: tech.textColor }}
              >
                {tech.abbr}
              </span>
              <span className="text-sm font-medium whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Static Grid for larger screens */}
      <div className="mt-16 hidden md:grid grid-cols-4 lg:grid-cols-8 gap-4">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(99, 102, 241, 0.2)",
            }}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border/20 bg-surface-light/30 p-4 transition-colors hover:border-accent/30 cursor-default"
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold shadow-sm"
              style={{ backgroundColor: tech.color, color: tech.textColor }}
            >
              {tech.abbr}
            </span>
            <span className="text-[11px] font-medium text-muted">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
