"use client";

import { motion } from "framer-motion";
import { Brain, Laptop, Rocket, LucideIcon } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

// Associe le nom d'icône (string) stocké dans portfolio.ts au vrai composant lucide-react
const iconMap: Record<string, LucideIcon> = {
  Brain,
  Laptop,
  Rocket,
};

export default function About() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Mes Forces (icônes + titres + descriptions)
  const strengths = portfolioData.about.strengths ?? [
    {
      icon: "Brain",
      title: "Esprit logique et analytique",
      description: "Capacité à comprendre et résoudre efficacement les problèmes techniques",
    },
    {
      icon: "Laptop",
      title: "Passion pour la Data et la Business Intelligence",
      description: "Création de solutions analytiques modernes, avec une attention particulière à la qualité des données et à l'aide à la prise de décision.",
    },
    {
      icon: "Rocket",
      title: "Motivation et ambition",
      description: "Toujours prête à relever de nouveaux défis et à apprendre",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            À propos de <span className="text-indigo-500">moi</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Colonne Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-indigo-500/60 shadow-lg shadow-indigo-500/10">
                <Image
                  src={portfolioData.avatarUrl}
                  alt={portfolioData.name}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              {/* Badge rôle */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md shadow-indigo-500/30 flex items-center space-x-2 whitespace-nowrap">
                <span>✨</span>
                <span>{portfolioData.role}</span>
              </div>
            </div>
          </motion.div>

          {/* Colonne Contenu */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Carte Mon Parcours */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-border/40">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-4">
                Mon Parcours
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
                {portfolioData.about.bio.map((paragraph, index) => (
                  <p key={index} className="text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

            
            </div>

            {/* Carte Mes Forces */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-border/40">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-6">
                Mes Forces
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {strengths.map((strength, i) => {
                  const IconComponent = iconMap[strength.icon] ?? Brain;
                  return (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: i * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="mb-2">
                        <IconComponent className="h-6 w-6 text-indigo-500" />
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground tracking-tight leading-snug">
                        {strength.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                        {strength.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}