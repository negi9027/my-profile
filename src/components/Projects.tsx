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
        className="mb-14 flex items-center gap-4"
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">03</span>
        <div className="h-[1px] w-12 bg-accent/30" />
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted">Work</span>
      </motion.div>

      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-muted max-w-md text-[15px]"
        >
          A selection of projects I&apos;ve built that showcase my engineering capabilities.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="card-premium group relative overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

              {/* Hover overlay with CTA */}
              <div className="absolute inset-0 flex items-center justify-center bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.a
                  href={project.link}
                  className="rounded-full bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md border border-white/20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  View Project
                </motion.a>
              </div>
            </div>

            {/* Content */}
            <div className="relative p-6">
              <h3 className="mb-2 text-lg font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="mb-5 text-sm text-muted leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-accent/8 px-2.5 py-1 text-[11px] font-medium text-accent/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
