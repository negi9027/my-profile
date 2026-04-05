"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";

const storyPoints = [
  {
    title: "The Beginning",
    text: "Started with curiosity — taking apart systems, writing first scripts, and discovering the power of code to automate the mundane.",
  },
  {
    title: "The Evolution",
    text: "From building web applications to securing servers, every project became a puzzle. I fell in love with the intersection of development, automation, and security.",
  },
  {
    title: "The Mission",
    text: "Today I engineer solutions that scale. Whether it's automating workflows, building performant web apps, or hardening infrastructure — I bring precision and passion.",
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <SectionWrapper id="about">
      <div ref={containerRef}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            01
          </span>
          <div className="h-[1px] w-12 bg-accent/30" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
            About
          </span>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div style={{ y: imageY }} className="relative pb-10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=800&q=80"
                  alt="Developer workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="glass absolute -bottom-6 right-0 rounded-2xl p-5 sm:-right-6 lg:-right-10"
              >
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-xs text-muted mt-1">Years of Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Story Side */}
          <div className="flex flex-col gap-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Crafting code with
              <br />
              <span className="gradient-text">purpose & precision</span>
            </motion.h2>

            <div className="space-y-10">
              {storyPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="group relative pl-8 border-l border-border/40 hover:border-accent/50 transition-colors"
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 h-2 w-2 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                  <h3 className="text-sm font-medium uppercase tracking-wider text-accent mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
