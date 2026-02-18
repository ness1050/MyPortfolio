"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, transform: "translateY(60px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2>About Me</h2>
      <p>
        I am a Computer Engineering graduate and junior software developer with a strong
        focus on Java, full-stack development, and system design. I enjoy building
        scalable applications, working with RESTful APIs, and applying object-oriented
        principles to real-world problems.
        <br /><br />
        Motivated and detail-oriented web developer with hands-on academic experience in 
        building both client-side and server-side web applications using JavaScript, HTML, 
        CSS, Node.js, and Express. Skilled in developing responsive and secure web apps, 
        implementing full CRUD functionality, and managing real-time and asynchronous 
        communication. Eager to apply modern web technologies in a junior developer role.
      </p>
    </motion.section>
  );
}