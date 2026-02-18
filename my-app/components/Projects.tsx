"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Java OOP Lending System",
    tech: "Java · OOP · UML",
    desc: "Designed and implemented an object-oriented lending system using Java. Applied OOAD principles, UML diagrams, and clean architecture.",
  },
  {
    title: "Thesis Research – EEG Machine Learning model",
    tech: "Python · Matlab · Scikit-learn · TensorFlow · Brain-Computer Interface",
    desc: "Prefrontal EEG analysis with supervised ML models for detecting genuine vs. simulated engagement...",
    link: "https://urn.kb.se/resolve?urn=urn:nbn:se:lnu:diva-133902",
  },
  // Add your other projects similarly...
  // Vehicle Detection Embedded System, Full-Stack Web App, IoT Smart-Street lights, etc.
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold mb-8 text-center gradient-text"
      >
        Academic Projects
      </motion.h2>

      <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
        Selected university and academic projects demonstrating software design, full-stack development, and system engineering.
      </p>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((proj) => (
          <motion.div
            key={proj.title}
            variants={{
              hidden: { y: 80, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ y: -12, scale: 1.04 }}
            className="glass p-8 border border-[var(--secondary)]/30 hover:border-[var(--primary)]/60 transition-all duration-300 neon-glow cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-3 gradient-text">{proj.title}</h3>
            <p className="text-sm text-[var(--primary)] mb-4">{proj.tech}</p>
            <p className="text-gray-300 mb-6">{proj.desc}</p>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                className="inline-block px-5 py-2 bg-[var(--secondary)]/20 text-[var(--secondary)] rounded-lg hover:bg-[var(--secondary)]/40 transition"
              >
                View Thesis →
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}