"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fullText = "Hi There, I'm Naseem Qurbanali";

export default function Hero() {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else clearInterval(timer);
    }, 70);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-6 pt-32 pb-20 bg-[url('/Profil_portfolio.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/65" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 gradient-text">
            {text}
            <span className="animate-pulse">|</span>
          </h1>

          <h3 className="text-2xl md:text-4xl font-bold text-[var(--secondary)] mb-8">
            Software & Computer Engineer | Fullstack Developer | Java Enthusiast
          </h3>

          <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl">
            Bachelor graduate and junior software developer.<br />
            Passionate about creating efficient, scalable, and maintainable solutions that deliver real value to real-world problems.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.button
              whileHover={{ scale: 1.06, boxShadow: "0 0 30px #3ff670" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-[var(--primary)] text-black font-bold rounded-xl shadow-lg neon-glow"
            >
              Hire Me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.06 }}
              className="px-8 py-4 border-2 border-[var(--accent)] text-[var(--accent)] font-bold rounded-xl hover:bg-[var(--accent)]/20 transition neon-glow"
            >
              Contact Me
            </motion.button>
          </div>
        </div>

        {/* Right side: can add animated avatar, code rain, or particles later */}
        <div className="hidden md:block" />
      </motion.div>
    </section>
  );
}