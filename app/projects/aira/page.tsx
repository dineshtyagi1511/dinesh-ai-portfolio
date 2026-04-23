"use client";

export default function AIRAProject() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4">
        AI Investment Research Assistant (AIRA)
      </h1>

      <p className="text-gray-400 max-w-3xl">
        Production-grade multi-source RAG system that delivers accurate, explainable 
        financial insights using type-safe AI agents, hybrid retrieval, and cost-optimized LLM routing.
      </p>

      {/* GITHUB */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">🔗 Project Link</h2>

        <a 
          href="https://github.com/dineshtyagi1511/ai-investment-assistant"
          target="_blank"
          className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold"
        >
          View on GitHub →
        </a>
      </div>

      {/* ARCHITECTURE IMAGE */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">🏗️ System Architecture</h2>

        <img 
          src="/ai.png"
          alt="AIRA Architecture"
          className="rounded-xl shadow-lg w-full"
        />
      </div>

      {/* HLD */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🧠 High-Level Design (HLD)</h2>

        <p className="text-gray-400 leading-7">
          AIRA follows a <span className="text-green-400">multi-source RAG architecture</span> 
          combining structured financial APIs and unstructured document retrieval. 
          The system integrates intelligent routing, reranking, and LLM reasoning 
          with strict schema validation to ensure reliable outputs.
        </p>
      </div>

      {/* PIPELINE */}
      <div className="mt-8 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">⚙️ Pipeline Flow</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li><b>Query Routing:</b> Classifies intent (API vs Vector DB)</li>
          <li><b>Data Retrieval:</b> Fetch from APIs or semantic search</li>
          <li><b>Reranking:</b> BGE reranker improves relevance</li>
          <li><b>LLM Reasoning:</b> Model tiering for efficiency</li>
          <li><b>Validation:</b> Structured output via Pydantic</li>
        </ul>
      </div>

      {/* MULTI SOURCE */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🔀 Multi-Source RAG</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li><b>Stock Data:</b> Financial APIs (Alpha Vantage)</li>
          <li><b>News:</b> Vector database (semantic search)</li>
          <li><b>Reports:</b> PDF embeddings</li>
        </ul>
      </div>

      {/* AGENTS */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🤖 Multi-Agent System</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>🐂 Bull Agent → Positive analysis</li>
          <li>🐻 Bear Agent → Risk-focused analysis</li>
          <li>⚖️ Synthesizer → Balanced final output</li>
        </ul>
      </div>

      {/* OPTIMIZATION */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">⚡ Optimization & Efficiency</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>Semantic caching using Redis</li>
          <li>Top-K retrieval for context pruning</li>
          <li>Model tiering (gpt-4o-mini / gpt-4o)</li>
        </ul>
      </div>

      {/* DEPLOYMENT */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🚀 Deployment (MLOps)</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>Docker containerization</li>
          <li>CI/CD via GitHub Actions</li>
          <li>AWS deployment (EC2 + ECR)</li>
          <li>Monitoring with Prometheus & Grafana</li>
        </ul>
      </div>

      {/* TECH STACK */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>

        <ul className="grid md:grid-cols-2 gap-3 text-gray-400">
          <li>FastAPI</li>
          <li>PydanticAI</li>
          <li>LiteLLM</li>
          <li>ChromaDB</li>
          <li>MongoDB</li>
          <li>Redis</li>
          <li>Docker</li>
          <li>AWS</li>
        </ul>
      </div>

    </div>
  );
}