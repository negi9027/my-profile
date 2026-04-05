"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "AutoFlow CI/CD Platform",
    description:
      "Built an end-to-end CI/CD pipeline platform that automates build, test, and deployment workflows for multi-service architectures. Reduced deployment time by 70%.",
    tech: ["Node.js", "Docker", "GitHub Actions", "AWS"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    link: "#",
  },
  {
    title: "SecureVault Dashboard",
    description:
      "A real-time security monitoring dashboard that tracks vulnerabilities, SSL certificates, and server health across distributed infrastructure.",
    tech: ["React", "TypeScript", "PostgreSQL", "WebSocket"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "#",
  },
  {
    title: "AI Content Engine",
    description:
      "Integrated LLM APIs to create an intelligent content generation engine with custom prompts, RAG pipelines, and automated publishing workflows.",
    tech: ["Next.js", "OpenAI API", "Pinecone", "Tailwind"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    link: "#",
  },
  {
    title: "Infrastructure Orchestrator",
    description:
      "Designed a server orchestration tool that manages Docker containers, load balancers, and DNS configurations through a unified interface.",
    tech: ["Python", "Docker", "Nginx", "Linux"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    link: "#",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex items-center gap-4"
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">03</span>
        <div className="h-[1px] w-12 bg-accent/30" />
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted">Work</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-border/30 bg-surface-light/30 transition-all duration-500 hover:border-border/60 hover:shadow-2xl hover:shadow-accent/5"
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative p-6 sm:p-8">
              <h3 className="mb-3 text-xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="mb-5 text-sm text-muted leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <motion.a
                href={project.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
                whileHover={{ x: 4 }}
              >
                View Project
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
