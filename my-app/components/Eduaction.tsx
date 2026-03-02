"use client";

import { motion } from "framer-motion";

const education = [
  {
    title: "BSc in Computer Engineering",
    place: "Linnéuniversitetet (2021 – 2024)",
    desc: "Focus on software engineering, OOP, UML, embedded systems, and machine learning.",
  },
  {
    title: "Front-End & React Development",
    place: "Lexicon IT Consultant (2025)",
    desc: "",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold mb-16 text-center gradient-text"
      >
        Education
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {education.map((edu, i) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            className="glass p-8 hover:scale-[1.03] transition-transform duration-300 neon-glow"
          >
            <h3 className="text-2xl font-bold mb-3 gradient-text">{edu.title}</h3>
            <span className="text-[var(--primary)] block mb-4">{edu.place}</span>
            <p className="text-gray-300">{edu.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}