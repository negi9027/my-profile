"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/girishnegi" },
  { label: "LinkedIn", href: "https://linkedin.com/in/girishnegi" },
  { label: "Twitter", href: "https://twitter.com/girishnegi" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-1 sm:items-start"
        >
          <span className="text-sm font-medium">
            <span className="gradient-text">Girish Negi</span>
          </span>
          <span className="text-xs text-muted">
            © {new Date().getFullYear()} · Crafted with precision
          </span>
        </motion.div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted transition-colors hover:text-foreground"
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
