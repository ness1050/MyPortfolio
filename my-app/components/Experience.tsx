"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Wordpress | PHP | Elementor | HTML5 | CSS | Tailwind Developer Intern – Torghandel AB",
    date: "Oct 2025 – Jan 2026",
    desc: "Worked with WordPress, WooCommerce, PHP, JavaScript, and MySQL. Implemented e-commerce features, payment solutions, invoice integrations...",
  },
  {
    title: "System Developer",
    date: "Apr 2025 – Oct 2025",
    desc: "Built full-stack web applications using Node.js, Express, REST APIs, authentication, and responsive UI design with accessibility in mind.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold mb-16 text-center gradient-text"
      >
        Experience
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] opacity-40" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            className={`flex items-center mb-16 last:mb-0 ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className={`glass p-8 w-full md:w-5/12 ${i % 2 === 0 ? "mr-auto" : "ml-auto"} border-l-4 border-[var(--primary)]`}>
              <h3 className="text-2xl font-bold mb-2 text-[var(--primary)]">{exp.title}</h3>
              <span className="text-sm text-gray-400 block mb-4">{exp.date}</span>
              <p className="text-gray-300">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}