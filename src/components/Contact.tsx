"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex items-center gap-4"
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">06</span>
        <div className="h-[1px] w-12 bg-accent/30" />
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted">Connect</span>
      </motion.div>

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Let&apos;s Build
            <br />
            <span className="gradient-text">Something Great</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 max-w-md text-muted leading-relaxed"
          >
            Have a project in mind or want to collaborate? I&apos;m always open to
            discussing new opportunities, innovation, and building impactful
            solutions together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 space-y-4"
          >
            <div className="flex items-center gap-3 text-sm text-muted">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/30">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <span>girishnegi@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/30">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <span>India</span>
            </div>
          </motion.div>
        </div>

        {/* Right — Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass rounded-2xl p-8 sm:p-10"
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-border/30 bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/40 focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-border/30 bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/40 focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-border/30 bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/40 focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full rounded-xl bg-foreground py-3.5 text-sm font-medium text-background transition-all hover:opacity-90 disabled:opacity-60"
            >
              {status === "idle" && (
                <span className="flex items-center justify-center gap-2">
                  Let&apos;s Build Something
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </span>
              )}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent! ✓"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
