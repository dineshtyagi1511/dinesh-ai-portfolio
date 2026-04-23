"use client";

export default function RagProject() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4">
        Multi-Source RAG + Text-to-SQL System
      </h1>

      <p className="text-gray-400 max-w-3xl">
        Production-grade AI system combining Retrieval-Augmented Generation (RAG) 
        and Text-to-SQL pipelines for unified querying across structured and 
        unstructured data sources.
      </p>

      {/* LIVE DEMO & GITHUB */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">🚀 Resources & Live API</h2>

        <p className="text-gray-400 mb-6">
          Explore the source code or test real endpoints of the deployed AWS Lambda FastAPI service via Swagger.
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href="https://xzqrrhx2pusfkjqqdstvzc7rhy0byzlm.lambda-url.us-east-1.on.aws/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors"
          >
            Open API Docs →
          </a>

          <a 
            href="https://github.com/dineshtyagi1511/text-2-sql-RAG-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            View GitHub
          </a>
        </div>
      </div>

      {/* ARCHITECTURE IMAGE */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">🏗️ System Architecture</h2>

        <img 
          src="/rag1.png"
          alt="RAG Architecture"
          className="rounded-xl shadow-lg w-full border border-gray-800"
        />
      </div>

      {/* ARCHITECTURE EXPLANATION */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🧠 Architecture Overview</h2>

        <p className="text-gray-400 leading-7">
          The system follows a modular micro-services architecture wrapped inside FastAPI,
          implementing a <span className="text-green-400 font-medium">Cache-First strategy</span> 
          to minimize latency and reduce LLM costs.
        </p>

        {/* SECTION 1 */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-green-400">1. Unified Interface Layer</h3>
          <ul className="list-disc ml-6 text-gray-400 mt-2">
            <li>FastAPI-based entry point for all requests</li>
            <li>Intelligent router decides RAG vs SQL vs Hybrid</li>
            <li>Validation layer ensures SQL safety & file constraints (50MB)</li>
          </ul>
        </div>

        {/* SECTION 2 */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-green-400">2. Processing Engines</h3>
          <ul className="list-disc ml-6 text-gray-400 mt-2">
            <li>RAG Engine: Docling → Chunking → Pinecone → GPT-4</li>
            <li>Text-to-SQL Engine: Vanna.ai → PostgreSQL</li>
            <li>Approval workflow prevents unsafe queries</li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-green-400">3. Multi-Tier Caching</h3>
          <ul className="list-disc ml-6 text-gray-400 mt-2">
            <li>Tier 1: Redis (fast query cache)</li>
            <li>Tier 2: S3 (document + embeddings cache)</li>
            <li>Tier 3: Pinecone + PostgreSQL (primary data)</li>
          </ul>
        </div>
      </div>

      {/* DATA FLOW */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🔄 Request Flow</h2>

        <ul className="list-disc ml-6 text-gray-400 leading-7">
          <li>User uploads file → SHA-256 hashing → Cache check</li>
          <li>If miss → Parsing → Chunking → Embeddings → Stored</li>
          <li>User query → Redis cache check (&lt;10ms response if hit)</li>
          <li>Router sends query to RAG / SQL / Hybrid pipeline</li>
          <li>Response generated → Cached → Returned</li>
        </ul>
      </div>

      {/* TECH STACK */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-400">
          <li>FastAPI (Python 3.12+)</li>
          <li>OpenAI GPT-4 / GPT-4o</li>
          <li>Pinecone Vector DB</li>
          <li>PostgreSQL</li>
          <li>Redis (Upstash)</li>
          <li>AWS Lambda (ARM64)</li>
          <li>Docker + CI/CD</li>
          <li>CloudWatch + OPIK</li>
        </ul>
      </div>

      {/* PERFORMANCE */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">📈 Performance & Optimization</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>40–60% cost reduction via caching</li>
          <li>ARM64 Lambda → ~20% cheaper</li>
          <li>Embedding TTL = 7 days</li>
          <li>Deterministic SQL (temperature = 0)</li>
        </ul>
      </div>

      {/* SECURITY */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🛡️ Security & Reliability</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>SQL approval workflow (human-in-loop)</li>
          <li>SHA-256 deduplication</li>
          <li>Structured error handling</li>
        </ul>
      </div>

    </div>
  );
}