"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const categories = [
  {
    label: "Frontend",
    items: [
      { name: "React", abbr: "Re", color: "#61DAFB", textColor: "#000" },
      { name: "Next.js", abbr: "Nx", color: "#ffffff", textColor: "#000" },
      { name: "TypeScript", abbr: "TS", color: "#3178C6", textColor: "#fff" },
      { name: "Tailwind", abbr: "Tw", color: "#06B6D4", textColor: "#fff" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", abbr: "No", color: "#339933", textColor: "#fff" },
      { name: "Python", abbr: "Py", color: "#3776AB", textColor: "#FFD43B" },
      { name: "GraphQL", abbr: "GQ", color: "#E10098", textColor: "#fff" },
      { name: "REST APIs", abbr: "AP", color: "#6366f1", textColor: "#fff" },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "MongoDB", abbr: "Mg", color: "#47A248", textColor: "#fff" },
      { name: "PostgreSQL", abbr: "Pg", color: "#336791", textColor: "#fff" },
      { name: "Redis", abbr: "Rd", color: "#DC382D", textColor: "#fff" },
    ],
  },
  {
    label: "DevOps & Cloud",
    items: [
      { name: "Docker", abbr: "Dk", color: "#2496ED", textColor: "#fff" },
      { name: "AWS", abbr: "AW", color: "#FF9900", textColor: "#232F3E" },
      { name: "Kubernetes", abbr: "K8", color: "#326CE5", textColor: "#fff" },
      { name: "Nginx", abbr: "Ng", color: "#009639", textColor: "#fff" },
      { name: "Linux", abbr: "Lx", color: "#FCC624", textColor: "#000" },
      { name: "Git", abbr: "Gt", color: "#F05032", textColor: "#fff" },
    ],
  },
];

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

      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]"
        >
          Tech <span className="gradient-text">Stack</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-muted max-w-md text-[15px]"
        >
          The tools and technologies I use to bring ideas to life — organized by domain.
        </motion.p>
      </div>

      {/* Categorized Grid */}
      <div className="grid gap-8 sm:grid-cols-2">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.08, duration: 0.5 }}
            className="card-premium p-7"
          >
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center gap-2.5 rounded-xl border border-border/30 bg-surface-light/30 px-3.5 py-2.5 transition-colors hover:border-border/60 cursor-default"
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold"
                    style={{ backgroundColor: tech.color, color: tech.textColor }}
                  >
                    {tech.abbr}
                  </span>
                  <span className="text-sm font-medium text-foreground/80">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
