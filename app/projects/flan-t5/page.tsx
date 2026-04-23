"use client";

export default function FlanT5Project() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4">
        Flan-T5 Text Summarization System
      </h1>

      <p className="text-gray-400 max-w-3xl">
        Production-grade MLOps pipeline for fine-tuned Flan-T5 model, deployed 
        using FastAPI and AWS App Runner with full CI/CD, observability, and scalable inference.
      </p>

      {/* LIVE DEMO & GITHUB */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">🚀 Resources & Live API</h2>

        <p className="text-gray-400 mb-6">
          Real-time summarization API deployed on AWS App Runner. Explore the source code or test the live endpoint.
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href="https://fiu3qmfc4e.us-east-1.awsapprunner.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors"
          >
            Test API →
          </a>

          <a 
            href="https://github.com/dineshtyagi1511/text-summarizer"
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
          src="/text.png"
          alt="Flan T5 Architecture"
          className="rounded-xl shadow-lg w-full border border-gray-800"
        />
      </div>

      {/* HLD OVERVIEW */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🧠 High-Level Design (HLD)</h2>

        <p className="text-gray-400 leading-7">
          The system follows a production-grade MLOps lifecycle divided into two phases:
          <span className="text-green-400 font-medium"> Training Pipeline (Offline)</span> and 
          <span className="text-green-400 font-medium"> Inference Pipeline (Online)</span>.
        </p>

        <ul className="list-disc ml-6 text-gray-400 mt-4">
          <li>Training: Fine-tuned Flan-T5 on SAMSum dataset</li>
          <li>Model stored in Hugging Face Hub</li>
          <li>Inference served via FastAPI</li>
          <li>Deployed on AWS App Runner with auto scaling</li>
        </ul>
      </div>

      {/* CORE COMPONENTS */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">⚙️ Core Components</h2>

        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li><b>Model Registry:</b> Hugging Face Hub stores model + tokenizer</li>
          <li><b>Inference Engine:</b> FastAPI + PyTorch with singleton model loading</li>
          <li><b>Observability:</b> W&B Weave tracks inputs, outputs, latency</li>
          <li><b>CI/CD:</b> GitHub Actions → Docker → AWS ECR → App Runner</li>
        </ul>
      </div>

      {/* DATA FLOW */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🔄 Data Flow</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>Fine-tuning → Hugging Face Hub</li>
          <li>GitHub push → CI/CD pipeline</li>
          <li>Docker image → AWS ECR</li>
          <li>App Runner pulls & deploys</li>
          <li>User request → FastAPI → Model → Response</li>
        </ul>
      </div>

      {/* INFERENCE FLOW */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🧪 Inference Pipeline</h2>

        <p className="text-gray-400">
          Input Text → Tokenization → Model → Output Tokens → Summary
        </p>
      </div>

      {/* TECH STACK */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-400">
          <li>Flan-T5 (Hugging Face)</li>
          <li>FastAPI</li>
          <li>PyTorch</li>
          <li>Docker (amd64)</li>
          <li>AWS App Runner</li>
          <li>GitHub Actions</li>
          <li>Weights & Biases Weave</li>
          <li>Pydantic v2</li>
        </ul>
      </div>

      {/* PERFORMANCE */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">📈 Optimization</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>uv package manager → faster builds</li>
          <li>Singleton model loading → low latency</li>
          <li>amd64 container → AWS compatibility</li>
        </ul>
      </div>

      {/* FAILURE HANDLING */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🛡️ Reliability</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>Cold start mitigation via health checks</li>
          <li>Minimum 2GB RAM to avoid OOM</li>
          <li>Structured error handling</li>
        </ul>
      </div>

    </div>
  );
}