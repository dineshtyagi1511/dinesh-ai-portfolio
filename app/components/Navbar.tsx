"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4"
    >
      {/* CENTER PILL NAV */}
      <div
        className={`
          flex items-center gap-8
          px-6 py-3 rounded-full
          border border-white/10
          transition-all duration-300
          ${
            scrolled
              ? "bg-black/60 backdrop-blur-md"
              : "bg-black/20 backdrop-blur-sm"
          }
        `}
      >
        {/* BRAND (optional inside pill) */}
        <span className="text-white font-semibold tracking-wide mr-2">
          Dinesh
        </span>

        {/* LINKS */}
        <a className="text-sm text-gray-300 hover:text-blue-400 transition" href="#projects">
          Projects
        </a>
        <a className="text-sm text-gray-300 hover:text-blue-400 transition" href="#skills">
          Skills
        </a>
        <a className="text-sm text-gray-300 hover:text-blue-400 transition" href="#experience">
          Experience
        </a>
        <a className="text-sm text-gray-300 hover:text-blue-400 transition" href="#contact">
          Contact
        </a>
      </div>
    </motion.nav>
  );
}