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

      <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
        {/* Left — 2 cols */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] leading-[1.15]"
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
              className="mt-8 text-muted leading-relaxed text-[15px]"
            >
              Have a project in mind or want to collaborate? I&apos;m always open to
              discussing new opportunities, innovation, and building impactful
              solutions together.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 space-y-6"
          >
            <a
              href="mailto:girishnegi@example.com"
              className="group flex items-center gap-4 rounded-xl p-3 -ml-3 transition-colors hover:bg-surface-light/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/30 bg-surface-light/30 transition-colors group-hover:border-accent/30 group-hover:bg-accent/5">
                <svg className="h-4 w-4 text-muted group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <div className="text-[11px] text-muted uppercase tracking-wider font-medium mb-0.5">Email</div>
                <div className="text-sm text-foreground/80">girishnegi@example.com</div>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl p-3 -ml-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/30 bg-surface-light/30">
                <svg className="h-4 w-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <div className="text-[11px] text-muted uppercase tracking-wider font-medium mb-0.5">Location</div>
                <div className="text-sm text-foreground/80">India</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — Form (3 cols) */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="card-premium lg:col-span-3 p-8 sm:p-10"
        >
          <div className="space-y-6">
            {/* Name & Email row */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2.5 block text-[11px] font-semibold uppercase tracking-widest text-muted">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-border/40 bg-surface-light/30 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/30 focus:border-accent/40 focus:ring-2 focus:ring-accent/10 focus:bg-surface-light/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2.5 block text-[11px] font-semibold uppercase tracking-widest text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-border/40 bg-surface-light/30 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/30 focus:border-accent/40 focus:ring-2 focus:ring-accent/10 focus:bg-surface-light/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="mb-2.5 block text-[11px] font-semibold uppercase tracking-widest text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-border/40 bg-surface-light/30 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/30 focus:border-accent/40 focus:ring-2 focus:ring-accent/10 focus:bg-surface-light/50"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`group w-full rounded-xl py-4 text-sm font-semibold transition-all duration-300 ${
                status === "sent"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "bg-gradient-to-r from-accent to-purple-600 text-white shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 disabled:opacity-60"
              }`}
            >
              {status === "idle" && (
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </span>
              )}
              {status === "sending" && (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </span>
              )}
              {status === "sent" && (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Message Sent!
                </span>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
