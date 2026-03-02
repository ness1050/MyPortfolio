"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-left">
        <div className="content">
          <motion.h1
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Hi There, I'Am Naseem Qurbanali
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            Software & Computer Engineer | Fullstack developer | Java developer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          >
            Bachelor graduate and junior software developer. <br />
            Passionate about creating efficient, scalable, and maintainable solutions that deliver real value to the real-world problems.
          </motion.p>

          <div className="cta">
            <motion.button
              className="cta-1"
              initial={{ opacity: 0, transform: "translateY(40px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            >
              Hire Me
            </motion.button>

            <motion.button
              className="cta-2"
              initial={{ opacity: 0, transform: "translateY(40px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
            >
              Contact Me
            </motion.button>
          </div>

          <motion.div
            className="social-icon"
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <a href="https://www.linkedin.com/in/naseem-computer-engineer/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/ness1050" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </motion.div>
        </div>
      </div>
      <div className="hero-right"></div>
    </section>
  );
}