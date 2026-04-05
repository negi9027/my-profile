"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="animated-gradient absolute inset-0" />

      {/* Noise texture */}
      <div className="noise absolute inset-0" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Central radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[150px]" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[10%] w-80 h-80 rounded-full bg-gradient-to-br from-accent/8 to-purple-600/8 blur-[100px]"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[15%] left-[5%] w-96 h-96 rounded-full bg-gradient-to-tr from-pink-500/6 to-accent/6 blur-[120px]"
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 inline-flex items-center gap-2.5 rounded-full border border-border/50 bg-surface/50 px-5 py-2.5 text-xs font-medium text-muted backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for new projects
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          I Build{" "}
          <span className="gradient-text">Digital</span>
          <br />
          Experiences
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 max-w-2xl text-base text-muted sm:text-lg md:text-xl font-light leading-relaxed"
        >
          <span className="whitespace-nowrap">Automation Engineer</span>
          <span className="mx-2.5 text-border">·</span>
          <span className="whitespace-nowrap">Web Developer</span>
          <span className="mx-2.5 text-border">·</span>
          <span className="whitespace-nowrap">AI Tools Expert</span>
          <span className="mx-2.5 text-border hidden sm:inline">·</span>
          <br className="sm:hidden" />
          <span className="whitespace-nowrap">Security & Server Specialist</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 flex flex-col gap-4 sm:flex-row sm:gap-5"
        >
          <a
            href="#projects"
            className="group relative inline-flex h-13 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-accent to-purple-600 px-8 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              View Work
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="group inline-flex h-13 items-center justify-center rounded-full border border-border/60 bg-surface/30 px-8 text-sm font-medium text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:bg-surface-light/50 hover:text-foreground hover:scale-[1.03] active:scale-[0.98]"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted/50 font-medium">
          Scroll
        </span>
        <div className="relative h-10 w-[1px]">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 h-4 w-[1px] bg-gradient-to-b from-accent/60 to-transparent"
          />
          <div className="h-full w-[1px] bg-border/30" />
        </div>
      </motion.div>

      {/* Bottom gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
}
