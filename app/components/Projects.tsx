"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Multi-Source RAG + Text-to-SQL System",
    desc: "Production-grade system routing queries between RAG & SQL pipelines",
    impact: "40–60% cost reduction, 5–10ms latency (cached)",
    tech: "FastAPI, OpenAI, Pinecone, AWS Lambda",
    link: "/projects/rag-system",
    category: "LLM",
  },
  {
  title: "Multi-Source RAG Financial Assistant",
  desc: "AI-powered investment research system using hybrid retrieval (API + vector DB)",
  impact: "Reduced hallucinations by 70% with structured outputs & caching",
  tech: "FastAPI, ChromaDB, Redis, OpenAI, MongoDB",
  link: "/projects/aira",
  category: "LLM",
},
  {
    title: "Flan-T5 Text Summarization",
    desc: "Fine-tuned LLM for dialogue summarization",
    impact: "Deployed with CI/CD + real-time inference",
    tech: "HuggingFace, FastAPI, AWS App Runner",
    link: "/projects/flan-t5",
    category: "LLM",
  },
  {
    title: "RAG Q&A System",
    desc: "Production-ready Retrieval-Augmented Generation system",
    impact: "Streaming responses, evaluation, full observability",
    tech: "FastAPI, LangChain, Qdrant, OpenAI, AWS",
    link: "/projects/rag-qa",
    category: "LLM",
  },
  {
    title: "ClothStore AI (E-Commerce Agent)",
    desc: "Natural language shopping assistant for product discovery",
    impact: "Enabled NLP-to-database query conversion for better UX",
    tech: "FastAPI, MongoDB, Pydantic AI, Vanilla JS",
    link: "/projects/clothstore-ai",
    category: "GenAI"
},
{
    title: "Bayesian Forecasting System",
    desc: "Hybrid Bayesian-ML pipeline for financial time-series",
    impact: "Quantified market uncertainty with 95% Credible Intervals and ~2.1% MAPE",
    tech: "PyMC, XGBoost, MLflow, Render",
    link: "/projects/bayesian-forecasting",
    category: "Statistics",
},
  {
    title: "Drinks Quality Prediction System",
    desc: "End-to-end ML pipeline with deployment",
    impact: "Full MLOps pipeline from training to production",
    tech: "Flask, Docker, AWS EC2",
    link: "/projects/drinks",
    category: "MLOps",
  },
  {
    title: "Two-Stage Loan Approval System",
    desc: "End-to-end ML pipeline using classification + regression",
    impact: "Deployed Streamlit app with automated preprocessing & tuning",
    tech: "Scikit-learn, Streamlit, GridSearchCV, YAML",
    link: "/projects/loan",
    category: "ML",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  return (
    <section
      id="projects"
      className="relative py-24 bg-gray-950 text-white overflow-hidden"
    >
      {/* 🌌 BLUE BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">
          Featured{" "}
          <span className="text-blue-400">Projects</span>
        </h2>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {["All", "LLM", "MLOps","Statistics" ,"ML","GenAI"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
              ${
                filter === cat
                  ? "bg-blue-500 text-white border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-blue-400/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {projects
              .filter((p) => filter === "All" || p.category === filter)
              .map((p) => (
                <motion.div
                  layout
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={p.link} className="block h-full group">
                    {/* CARD */}
                    <div
                      className="
                      relative h-full flex flex-col justify-between
                      bg-white/5 backdrop-blur-md 
                      border border-white/10 p-8 rounded-2xl 
                      transition-all duration-500 
                      group-hover:border-blue-400/40 
                      group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
                    "
                    >
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          {/* TITLE */}
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-500">
                            {p.title}
                          </h3>

                          {/* CATEGORY */}
                          <span className="text-[10px] uppercase tracking-widest text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md border border-blue-400/20">
                            {p.category}
                          </span>
                        </div>

                        <p className="text-gray-400 leading-relaxed mb-4">
                          {p.desc}
                        </p>

                        {/* IMPACT */}
                        <div className="bg-blue-400/5 border-l-2 border-blue-400 p-3 mb-6">
                          <p className="text-blue-400 text-sm font-medium">
                            {p.impact}
                          </p>
                        </div>
                      </div>

                      <div>
                        {/* TECH STACK */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {p.tech.split(", ").map((t) => (
                            <span
                              key={t}
                              className="text-gray-500 text-[10px] px-2 py-1 bg-white/5 rounded border border-white/5"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="text-blue-400 flex items-center gap-2 text-sm font-semibold">
                          <span>
                            View Case Study
                          </span>
                          <span className="group-hover:translate-x-2 transition-transform duration-300">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}