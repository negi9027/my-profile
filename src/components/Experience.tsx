"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    year: "2024 — Present",
    title: "Senior Automation & Web Engineer",
    company: "Freelance / Contract",
    description:
      "Leading full-stack development projects, building CI/CD pipelines, and integrating AI-powered tools for clients across industries.",
    highlights: ["AI Integration", "Full-Stack Development", "DevOps"],
  },
  {
    year: "2022 — 2024",
    title: "Web Developer & Security Specialist",
    company: "Tech Consultancy",
    description:
      "Architected secure web applications, performed vulnerability assessments, and managed cloud server infrastructure for enterprise clients.",
    highlights: ["Security Audits", "Cloud Infrastructure", "React/Node"],
  },
  {
    year: "2021 — 2022",
    title: "Automation Engineer",
    company: "Startup",
    description:
      "Designed automated testing frameworks, CI/CD workflows, and deployment pipelines that reduced release cycles from weeks to hours.",
    highlights: ["CI/CD", "Testing Automation", "Docker"],
  },
  {
    year: "2019 — 2021",
    title: "Junior Web Developer",
    company: "Web Agency",
    description:
      "Built responsive websites and web applications using modern frameworks. Learned the fundamentals of scalable architecture and clean code.",
    highlights: ["HTML/CSS/JS", "React", "API Development"],
  },
];

const achievements = [
  { metric: "50+", label: "Projects Delivered" },
  { metric: "30+", label: "Happy Clients" },
  { metric: "99.9%", label: "Uptime Maintained" },
  { metric: "70%", label: "Deployment Time Reduced" },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex items-center gap-4"
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">05</span>
        <div className="h-[1px] w-12 bg-accent/30" />
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted">Journey</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
      >
        Experience & <span className="gradient-text">Achievements</span>
      </motion.h2>

      {/* Metrics */}
      <div className="mb-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {achievements.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center rounded-2xl border border-border/20 bg-surface-light/20 p-6 sm:p-8"
          >
            <div className="text-4xl font-bold gradient-text sm:text-5xl">{item.metric}</div>
            <div className="mt-2 text-xs text-muted uppercase tracking-wider">{item.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border/30 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative pl-10 md:w-1/2 ${
                i % 2 === 0
                  ? "md:pl-0 md:pr-16 md:text-right"
                  : "md:pl-16 md:ml-auto"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute top-1 h-3 w-3 rounded-full border-2 border-accent bg-background ${
                  i % 2 === 0
                    ? "left-0 md:left-auto md:right-0 md:translate-x-[calc(50%+0.5px)]"
                    : "left-0 md:-translate-x-[calc(50%+0.5px)]"
                }`}
              />

              {/* Year */}
              <span className="mb-2 inline-block text-xs font-medium text-accent tracking-wider">
                {exp.year}
              </span>

              {/* Card */}
              <div className="group rounded-xl border border-border/20 bg-surface-light/30 p-6 transition-all hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="mt-1 text-sm text-accent/70">{exp.company}</p>
                <p className="mt-3 text-sm text-muted leading-relaxed">{exp.description}</p>

                <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-border/30 px-3 py-1 text-[11px] text-muted"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
