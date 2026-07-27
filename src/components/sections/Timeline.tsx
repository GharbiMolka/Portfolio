"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
  Building2,
} from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="timeline"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Expériences{" "}
            <span className="text-indigo-500">Professionnelles</span>
          </h2>

          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
          
        </motion.div>

        <div className="glass-card rounded-3xl border border-border/40 p-6 sm:p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500">
              <Briefcase className="h-5 w-5" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Mes Expériences
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="border-l-2 border-indigo-500/30 ml-4 pl-6 sm:pl-8 space-y-10 relative"
          >
            {portfolioData.experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Point de la timeline */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/15" />

                <div className="flex items-start space-x-4">
                  {/* Logo */}
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-secondary/60 border border-border/40 overflow-hidden flex items-center justify-center">
                    {exp.logoUrl ? (
                      <Image
                        src={exp.logoUrl}
                        alt={exp.company}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <Building2 className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>

                  <div className="flex-1 space-y-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-foreground tracking-tight leading-snug">
                        {exp.role}{" "}
                        <span className="text-indigo-500 font-semibold">
                          @ {exp.company}
                        </span>
                      </h4>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-muted-foreground font-light">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{exp.period}</span>
                        </span>

                        <span className="flex items-center space-x-1">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Réalisations */}
                    <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                      {exp.description.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-2"
                        >
                          <ChevronRight className="h-3.5 w-3.5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Compétences */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-semibold text-indigo-500 bg-indigo-500/5 border border-indigo-500/10 px-2.5 py-0.5 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}