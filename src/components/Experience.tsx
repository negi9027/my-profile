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
  { metric: "70%", label: "Deploy Time Saved" },
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
        className="mb-20 flex items-center gap-4"
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
        className="mb-20 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]"
      >
        Experience & <span className="gradient-text">Achievements</span>
      </motion.h2>

      {/* Metrics */}
      <div className="mb-28 grid grid-cols-2 gap-8 sm:grid-cols-4">
        {achievements.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="card-premium p-8 text-center sm:p-10"
          >
            <div className="text-3xl font-bold gradient-text sm:text-4xl lg:text-5xl">{item.metric}</div>
            <div className="mt-3 text-[11px] text-muted uppercase tracking-widest font-medium">{item.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line — centered */}
        <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/30 via-border/30 to-transparent md:left-1/2 md:-translate-x-px" />

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative flex gap-8 pl-14 md:pl-0 ${
                i % 2 === 0
                  ? "md:flex-row-reverse md:text-right"
                  : "md:flex-row"
              }`}
            >
              {/* Dot on the line */}
              <div
                className={`absolute left-5 top-6 -translate-x-1/2 flex items-center justify-center md:left-1/2 ${
                  i === 0 ? "h-4 w-4" : "h-3 w-3"
                }`}
              >
                <div className={`rounded-full border-2 ${
                  i === 0
                    ? "h-4 w-4 border-accent bg-accent/20"
                    : "h-3 w-3 border-border/60 bg-background"
                }`} />
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="md:w-1/2">
                <span className="mb-3 inline-block rounded-full bg-accent/8 px-3 py-1 text-[11px] font-semibold text-accent tracking-wider">
                  {exp.year}
                </span>
                <div className="card-premium p-6">
                  <h3 className="text-base font-semibold">{exp.title}</h3>
                  <p className="mt-1.5 text-sm text-accent/60 font-medium">{exp.company}</p>
                  <p className="mt-4 text-sm text-muted leading-relaxed">{exp.description}</p>

                  <div className={`mt-5 flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-md border border-border/30 bg-surface-light/30 px-2.5 py-0.5 text-[11px] text-muted font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
