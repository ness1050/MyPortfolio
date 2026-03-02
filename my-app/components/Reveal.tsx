"use client";

import { useEffect } from "react";

export default function RevealScript() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");

    if (reveals.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((reveal) => observer.observe(reveal));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
