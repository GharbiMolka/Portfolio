"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.code === "SMTP_NOT_CONFIGURED") {
          toast.error(
            "SMTP non configuré dans .env.local. Ouverture de votre logiciel mail en secours...",
            { duration: 5000 }
          );
          // Redirection vers mailto si SMTP n'est pas encore configuré
          const mailtoUrl = `mailto:gharbimolka4@gmail.com,Molka.Gharbi@esprit.tn?subject=${encodeURIComponent(
            `Message de ${formData.name}`
          )}&body=${encodeURIComponent(
            `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
          )}`;
          window.location.href = mailtoUrl;
        } else {
          toast.error(data.error || "Erreur lors de l'envoi du message.");
        }
        return;
      }

      toast.success(
        data.message || "Votre message a été envoyé avec succès !"
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur d'envoi du formulaire :", error);
      toast.error("Une erreur réseau s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Contactez<span className="text-indigo-500">-moi</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Colonne Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-border/40"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-8">
              Mes coordonnées
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-indigo-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-foreground">Emails</p>
                  <p className="text-sm text-muted-foreground">
                    <a
                      href="mailto:gharbimolka4@gmail.com"
                      className="hover:text-indigo-500 transition-colors"
                    >
                      gharbimolka4@gmail.com
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <a
                      href="mailto:Molka.Gharbi@esprit.tn"
                      className="hover:text-indigo-500 transition-colors"
                    >
                      Molka.Gharbi@esprit.tn
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-indigo-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-foreground">Téléphone</p>
                  <p className="text-sm text-muted-foreground">{portfolioData.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-indigo-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-foreground">Localisation</p>
                  <p className="text-sm text-muted-foreground">{portfolioData.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Colonne Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-border/40"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-8">
              Envoyez-moi un message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 bg-indigo-500 hover:bg-indigo-600 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all shadow-md shadow-indigo-500/20 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}