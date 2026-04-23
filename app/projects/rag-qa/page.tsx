"use client";

export default function RagQAProject() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4">
        RAG Q&A System (Production-Ready)
      </h1>

      <p className="text-gray-400 max-w-3xl">
        Production-grade Retrieval-Augmented Generation system built with FastAPI,
        LangChain, and Qdrant. Supports document ingestion, semantic search,
        streaming responses, and evaluation with RAGAS.
      </p>

      {/* LINKS */}
      <div className="mt-10 flex gap-4">
        <a 
          href="https://github.com/dineshtyagi1511/rag-qa-project"
          target="_blank"
          className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold"
        >
          GitHub →
        </a>

        <a 
          href="http://localhost:8000/docs"
          target="_blank"
          className="border border-green-400 px-6 py-3 rounded-lg"
        >
          API Docs →
        </a>
      </div>

      {/* IMAGE */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">🏗️ Architecture</h2>

        <img 
          src="/rag2.png"
          alt="RAG Architecture"
          className="rounded-xl w-full shadow-lg"
        />
      </div>

      {/* OVERVIEW */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">📖 Overview</h2>

        <p className="text-gray-400 leading-7">
          This system implements a full Retrieval-Augmented Generation pipeline 
          combining vector search with LLM-based answer generation. It allows users 
          to upload documents and query them using natural language.
        </p>
      </div>

      {/* FEATURES */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">✨ Features</h2>

        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li>Document upload (PDF, TXT, CSV)</li>
          <li>Semantic search with vector embeddings</li>
          <li>Streaming responses</li>
          <li>Source attribution</li>
          <li>RAGAS evaluation metrics</li>
          <li>LangSmith tracing</li>
        </ul>
      </div>

      {/* ARCHITECTURE FLOW */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🔄 System Flow</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>User uploads document → chunking & embedding</li>
          <li>Stored in Qdrant vector database</li>
          <li>User query → similarity search</li>
          <li>Top-k chunks → GPT-4o generates answer</li>
          <li>Optional evaluation using RAGAS</li>
        </ul>
      </div>

      {/* TECH STACK */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>

        <ul className="grid md:grid-cols-2 gap-3 text-gray-400">
          <li>FastAPI</li>
          <li>LangChain</li>
          <li>OpenAI GPT-4o</li>
          <li>Qdrant</li>
          <li>RAGAS</li>
          <li>LangSmith</li>
          <li>Docker</li>
          <li>AWS App Runner</li>
        </ul>
      </div>

      {/* DEPLOYMENT */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🚀 Deployment</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>Docker containerized application</li>
          <li>CI/CD via GitHub Actions</li>
          <li>Deployed on AWS App Runner</li>
          <li>Auto scaling & monitoring enabled</li>
        </ul>
      </div>

    </div>
  );
}