"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  } as const;

  const socialLinks = [
    { icon: <FaGithub className="h-5 w-5" />, href: portfolioData.socialLinks.github, label: "GitHub" },
    { icon: <FaLinkedin className="h-5 w-5" />, href: portfolioData.socialLinks.linkedin, label: "LinkedIn" },
    { icon: <FaTwitter className="h-5 w-5" />, href: portfolioData.socialLinks.twitter, label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, href: `mailto:${portfolioData.socialLinks.email}`, label: "Email" },
  ];

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetEl = document.querySelector("#about");
    if (targetEl) {
      const offset = 80;
      const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden bg-grid-pattern">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl">
        {/* Info Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center self-center lg:self-start space-x-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Disponible pour un stage pfe</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]"
          >
          Bonjour, je suis <br /><span className="text-indigo-500">{portfolioData.name}</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-bold text-muted-foreground"
          >
            {portfolioData.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            {portfolioData.subTitle}
          </motion.p>

          {/* Social connections */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start space-x-4 pt-2"
          >
            {socialLinks.map(
              (link, i) =>
                link.href && (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border/40 hover:border-indigo-500/40 bg-card hover:bg-indigo-500/5 text-muted-foreground hover:text-indigo-500 shadow-sm transition-all duration-200"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                )
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all text-center"
            >
              Contactez-moi
            </a>
            
            <a
              href="/Cv_MolkaGharbi_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
             className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-border/60 bg-card hover:bg-secondary/40 text-foreground font-medium transition-all text-center flex items-center justify-center space-x-2 cursor-pointer"
              >
              <FileText className="h-4.5 w-4.5" />
              <span>Apperçu cv</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Visual element frame */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Glowing borders around portrait */}
            <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 opacity-20 blur-xl animate-pulse pointer-events-none" />
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-violet-500 to-cyan-500 opacity-10 pointer-events-none" />

            {/* Profile Avatar Mask container */}
            <div className="w-full h-full rounded-3xl overflow-hidden border border-border/80 relative shadow-2xl bg-card">
              <Image
                src={portfolioData.avatarUrl}
                alt={portfolioData.name}
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 288px, (max-width: 1200px) 320px, 384px"
              />
            </div>

            {/* Animated badges float */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass px-4 py-2.5 rounded-2xl shadow-lg border border-border/40 flex items-center space-x-2"
            >
              <span className="text-xl">💻</span>
              <div className="text-left">
                <p className="text-[10px] uppercase text-muted-foreground font-semibold">Specialité</p>
                <p className="text-xs font-bold text-foreground"> BI / Data Analytics</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 -left-4 glass px-4 py-2.5 rounded-2xl shadow-lg border border-border/40 flex items-center space-x-2"
            >
              <span className="text-xl">🚀</span>
              <div className="text-left">
                <p className="text-[10px] uppercase text-muted-foreground font-semibold">Localisation</p>
                <p className="text-xs font-bold text-foreground">Ariana, Tunis</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <a
          href="#about"
          onClick={handleScrollToAbout}
          className="p-2.5 rounded-full border border-border/40 text-muted-foreground hover:text-indigo-500 hover:border-indigo-500/40 bg-card hover:bg-indigo-500/5 transition-all duration-200 flex items-center justify-center shadow-sm cursor-pointer animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

// Inline anchor scroll handler for contact button helper
function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const targetEl = document.querySelector(href);
  if (targetEl) {
    const offset = 80;
    const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}
