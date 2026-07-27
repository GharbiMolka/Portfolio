"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Mes compétences", href: "#skills" },
  { label: "Mes expériences", href: "#timeline" },
  { label: "Mes projets", href: "#projects" },
  // { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle mounting on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Monitor scroll height to add shadow/shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple scroll spy logic
      const sections = navItems.map((item) => item.href.substring(1));
      let currentSection = "";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      const offset = 80; // height of sticky navbar
      const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 glass border-b border-border/40 shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="flex items-center space-x-2 text-foreground font-semibold tracking-tight hover:opacity-85 transition-opacity"
        >
          <Code2 className="h-5 w-5 text-indigo-500" />
          <span className="font-bold text-lg">{portfolioData.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-medium transition-colors hover:text-indigo-500 relative ${
                activeSection === item.href.substring(1)
                  ? "text-indigo-500 font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <motion.span
                  layoutId="activeDot"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          {/* {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-border/40 hover:bg-secondary/50 text-foreground transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5 text-yellow-500 animate-pulse" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-indigo-600" />
              )}
            </button>
          )} */}

          {/* Hamburger Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full border border-border/40 hover:bg-secondary/50 text-foreground transition-all duration-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 glass border-b border-border/60 shadow-lg py-6 px-4 md:hidden flex flex-col space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`py-2 px-4 rounded-lg text-base font-medium transition-all ${
                  activeSection === item.href.substring(1)
                    ? "bg-indigo-500/10 text-indigo-500 font-semibold"
                    : "text-muted-foreground hover:bg-secondary/30 hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
