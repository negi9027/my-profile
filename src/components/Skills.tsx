"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    title: "Automation",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    skills: ["CI/CD Pipelines", "Shell Scripting", "Task Scheduling", "Selenium", "Puppeteer", "GitHub Actions"],
    color: "from-blue-500 to-cyan-400",
    accent: "blue",
  },
  {
    title: "Web Development",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    skills: ["React / Next.js", "Node.js", "TypeScript", "Tailwind CSS", "REST APIs", "MongoDB / PostgreSQL"],
    color: "from-violet-500 to-purple-400",
    accent: "violet",
  },
  {
    title: "Web Security",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    skills: ["Penetration Testing", "OWASP Top 10", "SSL/TLS", "Firewall Config", "Auth Systems", "Vulnerability Assessment"],
    color: "from-red-500 to-orange-400",
    accent: "red",
  },
  {
    title: "Server Config",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    skills: ["Linux Administration", "Nginx / Apache", "Docker", "Cloud Deployment", "DNS Management", "SSH & Networking"],
    color: "from-emerald-500 to-teal-400",
    accent: "emerald",
  },
  {
    title: "AI Tools",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    skills: ["Prompt Engineering", "LLM Integration", "ChatGPT APIs", "AI Automation", "Copilot Workflows", "RAG Systems"],
    color: "from-pink-500 to-rose-400",
    accent: "pink",
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" alternate>
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 flex items-center gap-4"
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">02</span>
        <div className="h-[1px] w-12 bg-accent/30" />
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted">Expertise</span>
      </motion.div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]"
        >
          Skills & <span className="gradient-text">Expertise</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-muted max-w-md text-[15px]"
        >
          Core competencies spanning development, security, and infrastructure.
        </motion.p>
      </div>

      {/* Skills Grid — clean 3-col on desktop, 2-col tablet, 1-col mobile */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="card-premium group relative overflow-hidden p-8"
          >
            {/* Subtle gradient glow on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

            {/* Header */}
            <div className="relative flex items-center gap-4 mb-7">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-lg shadow-black/10`}>
                {cat.icon}
              </div>
              <h3 className="text-base font-semibold">{cat.title}</h3>
            </div>

            {/* Skill Tags */}
            <div className="relative flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border/40 bg-surface-light/40 px-3 py-1.5 text-xs text-muted transition-all duration-300 group-hover:border-border/60 group-hover:text-foreground/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
