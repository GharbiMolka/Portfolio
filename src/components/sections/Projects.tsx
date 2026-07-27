"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-secondary/10 relative overflow-hidden"
    >
      {/* Subtle details */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Titre de la section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Mes <span className="text-indigo-500">Projets</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Une sélection d&apos;applications et de plateformes que j&apos;ai conçues et développées.
          </p>
        </motion.div>

        {/* Grille des projets */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {portfolioData.projects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden border border-border/40 hover:border-indigo-500/15 hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col group"
              >
                {/* Image du projet */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-secondary/50">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Contenu de la carte */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight group-hover:text-indigo-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Badges des technologies */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-semibold text-indigo-500 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bouton GitHub */}
                  {project.githubUrl && (
                    <div className="pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-11 w-14 bg-secondary/60 hover:bg-secondary text-foreground rounded-xl border border-border/40 transition-all cursor-pointer"
                        title="Voir sur GitHub"
                      >
                        <FaGithub className="h-5 w-5" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}