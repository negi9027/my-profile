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
  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <SectionWrapper id="about">
      <div ref={containerRef}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex items-center gap-4"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            01
          </span>
          <div className="h-[1px] w-12 bg-accent/30" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
            About
          </span>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-24 items-center">
          {/* Image Side — 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-2"
          >
            <motion.div style={{ y: imageY }} className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=800&q=80"
                  alt="Developer workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                {/* Lighter overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="glass absolute -bottom-5 -right-2 rounded-2xl p-5 sm:-right-6 shadow-xl shadow-black/10"
              >
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-xs text-muted mt-1">Years of Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Story Side — 3 cols */}
          <div className="flex flex-col gap-8 lg:col-span-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] leading-[1.15]"
            >
              Crafting code with
              <br />
              <span className="gradient-text">purpose & precision</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-muted leading-relaxed max-w-lg"
            >
              I&apos;m a full-stack engineer who bridges the gap between elegant interfaces and robust infrastructure. Every solution I build balances form with function.
            </motion.p>

            <div className="space-y-10 mt-6">
              {storyPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="group relative pl-7 border-l-2 border-border/30 hover:border-accent/40 transition-colors duration-300"
                >
                  <div className="absolute left-0 top-0.5 -translate-x-[calc(50%+1px)] h-2.5 w-2.5 rounded-full border-2 border-accent/60 bg-background group-hover:bg-accent/20 group-hover:border-accent transition-colors duration-300" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent/80 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-[15px]">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
