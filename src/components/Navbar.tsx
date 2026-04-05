"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center gap-2.5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-purple-600 text-sm font-bold text-white shadow-lg shadow-accent/20">
                GN
              </div>
              <span className="hidden text-sm font-medium text-foreground/70 sm:block">
                Girish Negi
              </span>
            </motion.div>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-0.5 rounded-full border border-border/40 bg-surface/50 px-1.5 py-1 backdrop-blur-sm md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-300 ${
                  activeSection === link.href
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {activeSection === link.href && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-surface-light"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/40 text-muted transition-all hover:text-foreground hover:border-border hover:bg-surface-light"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="rounded-full bg-foreground px-5 py-2 text-[13px] font-medium text-background transition-all hover:opacity-90 hover:shadow-lg"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border/30 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="relative w-4 h-3.5">
              <span className={`absolute left-0 top-0 h-[1.5px] w-4 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 top-[6px]" : ""}`} />
              <span className={`absolute left-0 top-[6px] h-[1.5px] w-4 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
              <span className={`absolute left-0 bottom-0 h-[1.5px] w-4 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 bottom-[6px]" : ""}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-1 md:hidden"
            style={{ background: "rgba(5,5,5,0.95)", backdropFilter: "blur(32px)" }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="w-64 rounded-2xl px-6 py-4 text-center text-lg font-light text-foreground/80 transition-colors hover:bg-surface-light hover:text-foreground"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 rounded-full border border-border/30 px-6 py-2.5 text-sm text-muted"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
