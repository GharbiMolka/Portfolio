"use client";

import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: <FaGithub className="h-4.5 w-4.5" />, href: portfolioData.socialLinks.github, label: "GitHub" },
    { icon: <FaLinkedin className="h-4.5 w-4.5" />, href: portfolioData.socialLinks.linkedin, label: "LinkedIn" },
    { icon: <FaTwitter className="h-4.5 w-4.5" />, href: portfolioData.socialLinks.twitter, label: "Twitter" },
    { icon: <Mail className="h-4.5 w-4.5" />, href: `mailto:${portfolioData.socialLinks.email}`, label: "Email" },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/50 py-12 relative overflow-hidden">
      {/* Background accent glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center gap-6 relative">

        {/* Brand Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-foreground tracking-tight">
            Réalisé par <span className="text-indigo-500 font-semibold">{portfolioData.name}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            &copy; {currentYear} Tous droits réservés.
          </p>
        </div>

        {/* Social Links and Back to Top */}
        <div className="flex items-center gap-6">
          {/* <div className="flex items-center space-x-3">
            {socialLinks.map(
              (link, i) =>
                link.href && (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-border/40 bg-background hover:bg-indigo-500/10 hover:border-indigo-500/30 text-muted-foreground hover:text-indigo-500 transition-all duration-200"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                )
            )}
          </div> */}

          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-full border border-border/40 bg-background hover:bg-secondary/80 text-foreground transition-all duration-200 flex items-center justify-center cursor-pointer shadow-sm group"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4.5 w-4.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
