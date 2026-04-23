"use client";

export default function ClothStoreProject() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4">
        ClothStore AI (E-Commerce Agent)
      </h1>

      <p className="text-gray-400 max-w-3xl">
        GenAI-powered e-commerce platform with a natural language shopping assistant 
        that converts user queries into structured database searches using LLM agents.
      </p>

      {/* GITHUB */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">🔗 Project Link</h2>

        <a 
          href="https://github.com/dineshtyagi1511/clothstore-ai"
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
          src="/Gen.png"
          alt="ClothStore Architecture"
          className="rounded-xl shadow-lg w-full"
        />
      </div>

      {/* HLD */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🧠 High-Level Design (HLD)</h2>

        <p className="text-gray-400 leading-7">
          The system follows an <span className="text-green-400">agent-based architecture</span> 
          where an LLM-powered assistant interprets user queries and interacts with backend services 
          to fetch relevant products dynamically.
        </p>
      </div>

      {/* PIPELINE */}
      <div className="mt-8 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">⚙️ Core Workflow</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li><b>User Query:</b> Natural language input from frontend</li>
          <li><b>AI Agent:</b> Parses intent and extracts filters</li>
          <li><b>Query Engine:</b> Converts into structured DB query</li>
          <li><b>Database:</b> Fetches matching products</li>
          <li><b>Response:</b> Returns results to UI</li>
        </ul>
      </div>

      {/* FEATURES */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">✨ Key Features</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>Natural Language Product Search</li>
          <li>Dynamic Product Catalog (Men, Women, Kids)</li>
          <li>Smart Shopping Cart System</li>
          <li>Bulk Product Generation (500+ items)</li>
          <li>Admin CRUD Operations</li>
        </ul>
      </div>

      {/* AI COMPONENT */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🤖 AI Assistant</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>LLM-powered query understanding</li>
          <li>Intent extraction (price, category, type)</li>
          <li>Tool-based backend interaction</li>
          <li>Real-time response generation</li>
        </ul>
      </div>

      {/* WORKFLOW */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🔄 Engineering Workflow</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>Frontend sends user query</li>
          <li>FastAPI handles request routing</li>
          <li>AI agent processes and calls tools</li>
          <li>MongoDB returns filtered products</li>
        </ul>
      </div>

      {/* DEPLOYMENT */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🚀 Deployment</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>FastAPI backend deployment</li>
          <li>MongoDB Atlas cloud database</li>
          <li>Docker containerization (optional)</li>
          <li>Monitoring via Logfire</li>
        </ul>
      </div>

      {/* TECH STACK */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>

        <ul className="grid md:grid-cols-2 gap-3 text-gray-400">
          <li>FastAPI</li>
          <li>MongoDB</li>
          <li>Pydantic AI</li>
          <li>Groq (LLM Inference)</li>
          <li>Vanilla JavaScript</li>
          <li>HTML/CSS</li>
          <li>Logfire (Observability)</li>
        </ul>
      </div>

    </div>
  );
}