"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const email = "dineshtyagi1511@gmail.com";
  // Updated to match your Gmail compose link strategy
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Hello Dinesh&body=Hi Dinesh, I visited your portfolio and would like to connect with you.`;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 bg-gray-950 text-white relative overflow-hidden">
      
      {/* 🔵 Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-3xl"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-block mb-6 px-4 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-sm font-medium text-blue-400"
        >
          AI Engineer • RAG Systems • LLM Applications
        </motion.div>

        {/* YOUR NAME */}
        <motion.h2
          variants={item}
          className="text-2xl md:text-3xl font-semibold text-gray-400"
        >
          I'm Dinesh
        </motion.h2>

        {/* Main Heading */}
        <motion.h1
          variants={item}
          className="mt-3 text-4xl md:text-7xl font-bold leading-tight tracking-tight"
        >
          Building <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">Production-Grade</span> AI
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={item}
          className="mt-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          I design and deploy Multi-Source RAG pipelines, Text-to-SQL systems,
          and LLM-powered applications focused on real-world impact and cost efficiency.
        </motion.p>

        {/* SOCIAL LINKS */}
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="https://github.com/dineshtyagi1511"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-all hover:border-blue-500/50"
          >
            <GitHubIcon />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dinesh-tyagi-1511-/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-all hover:border-blue-500/50"
          >
            <LinkedInIcon />
            LinkedIn
          </a>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm hover:bg-blue-500/20 transition-all"
          >
            <MailIcon />
            Contact Me
          </a>
        </motion.div>

        {/* ACTION BUTTONS */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-95"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-medium active:scale-95"
          >
            Download Resume
          </a>
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-3 gap-6 text-center text-sm text-gray-500 border-t border-white/5 pt-10"
        >
          <div className="flex flex-col gap-1">
            <p className="text-white text-2xl font-bold">3+</p>
            <p className="uppercase tracking-widest text-[10px]">AI Systems</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-white text-2xl font-bold">40–60%</p>
            <p className="uppercase tracking-widest text-[10px]">Cost Reduction</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-white text-2xl font-bold text-blue-400">LLM</p>
            <p className="uppercase tracking-widest text-[10px]">Production Ready</p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

// ICON COMPONENTS
function GitHubIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.3a11.4 11.4 0 0 1 6.2 0C17 5.4 18 5.7 18 5.7c.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.3 12C23.3 5.6 18.3.5 12 .5z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
    </svg>
  );
}