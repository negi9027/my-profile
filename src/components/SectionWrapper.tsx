"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  alternate?: boolean;
}

export default function SectionWrapper({ children, className = "", id, alternate = false }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full ${alternate ? "bg-surface/50" : ""} ${className}`}
    >
      {/* Top divider line */}
      <div className="mx-auto max-w-5xl">
        <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
      </div>

      <div className="px-6 sm:px-8 py-28 md:py-36 lg:py-44">
        <div className="mx-auto max-w-6xl">{children}</div>
      </div>
    </motion.section>
  );
}
