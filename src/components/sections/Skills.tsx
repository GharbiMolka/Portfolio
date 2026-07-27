"use client";

import { motion } from "framer-motion";
import { BarChart3, Database, Layers, Workflow } from "lucide-react";

import {
  SiOpenjdk, SiJavascript, SiTypescript, SiPhp, SiPython,
  SiAngular, SiReact, SiSpring, SiSymfony, SiFlutter, SiDotnet,
  SiMysql, SiMongodb, SiPostgresql, SiFirebase,
  SiGit, SiDocker, SiFigma, SiPostman, SiGithub, SiGrafana, SiPrometheus,
  SiN8N,
  SiTalend
} from "react-icons/si";
import { IconType } from "react-icons";
import { portfolioData } from "@/data/portfolio";

// Associe le nom d'icône (string, stocké dans portfolio.ts) au vrai composant + sa couleur de marque
const iconMap: Record<string, { icon: IconType; color: string }> = {
  Java: { icon: SiOpenjdk, color: "#f89820" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  PHP: { icon: SiPhp, color: "#8892bf" },
  Python: { icon: SiPython, color: "#3776ab" },
  Angular: { icon: SiAngular, color: "#dd0031" },
  SpringBoot: { icon: SiSpring, color: "#6db33f" },
  Symfony: { icon: SiSymfony, color: "#000000" },
  Flutter: { icon: SiFlutter, color: "#02569b" },
  FlutterFlow: { icon: Layers, color: "#4353ff" },
  FastApi: { icon: SiPython, color: "#009688" }, 
  Laravel: { icon: SiPhp, color: "#ff2d20" },
  DotNet: { icon: SiDotnet, color: "#512bd4" },
  MySQL: { icon: SiMysql, color: "#4479a1" },
  MongoDB: { icon: SiMongodb, color: "#47a248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169e1" },
  Firebase: { icon: SiFirebase, color: "#ffca28" },
  Oracle: { icon: Database, color: "#f80000" },
  SSMS: { icon: Database, color: "#cc2927" },

  Git: { icon: SiGit, color: "#f05032" },

  Docker: { icon: SiDocker, color: "#2496ed" },
  Figma: { icon: SiFigma, color: "#f24e1e" },
  Postman: { icon: SiPostman, color: "#ff6c37" },
  GitHub: { icon: SiGithub, color: "#ffffff" },
  Grafana: { icon: SiGrafana, color: "#f46800" },
  Prometheus: { icon: SiPrometheus, color: "#e65100" },
  PowerBI: { icon: BarChart3, color: "#f2c811" },
  SSIS: { icon: Workflow, color: "#0078d4" },
  Talend: { icon: SiTalend, color: "#ff6d70" },
  N8N: { icon: SiN8N, color: "#ea4b71" },
};

export default function Skills() {
  // Regroupe les compétences par catégorie (ex: "Langages de programmation", "Framework", "Base de données"...)
  const categories = Array.from(
    new Set(portfolioData.skills.map((skill) => skill.category))
  );

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Mes <span className="text-indigo-500">Compétences</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
       
        </motion.div>

        {/* Grille des cartes par catégorie */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {categories.map((category, catIndex) => {
            const skillsInCategory = portfolioData.skills.filter(
              (skill) => skill.category === category
            );

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-border/40"
              >
                {/* Titre de catégorie */}
              <h3 className="text-lg font-bold text-indigo-500 tracking-tight pb-2 mb-5 border-b border-indigo-500/30 w-fit">
                  {category}
                </h3>

                {/* Grille des compétences de cette catégorie */}
                <div className="grid grid-cols-2 gap-3">
                  {skillsInCategory.map((skill) => {
                    const entry = iconMap[skill.iconName];
                    const Icon = entry?.icon ?? SiReact;
                    const color = entry?.color ?? "#818cf8";

                    return (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-border/40 bg-background/40 hover:border-indigo-500/30 transition-all duration-300"
                      >
                        <div className="w-11 h-11 rounded-full bg-secondary/60 flex items-center justify-center">
                          <Icon className="h-5 w-5" style={{ color }} />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-foreground text-center">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}