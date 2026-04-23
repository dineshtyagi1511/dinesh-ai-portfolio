"use client";

export default function DrinksProject() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4">
        Drinks Quality Prediction System
      </h1>

      <p className="text-gray-400 max-w-3xl">
        End-to-end MLOps pipeline implementing a modular ML architecture with 
        data validation, transformation, training, and deployment using Flask, Docker, and AWS.
      </p>

      {/* GITHUB */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">🔗 Project Link</h2>

        <a 
          href="https://github.com/dineshtyagi1511/Drinks-Quality-Prediction-System-aws"
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
          src="/drinks.jpg"
          alt="Drinks Architecture"
          className="rounded-xl shadow-lg w-full"
        />
      </div>

      {/* HLD */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🧠 High-Level Design (HLD)</h2>

        <p className="text-gray-400 leading-7">
          The system follows a <span className="text-green-400">modular pipeline architecture</span> 
          where each stage of the ML lifecycle is implemented as an independent component.
        </p>
      </div>

      {/* PIPELINE */}
      <div className="mt-8 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">⚙️ Pipeline Stages</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li><b>Data Ingestion:</b> Load and split dataset</li>
          <li><b>Data Validation:</b> Validate schema using YAML</li>
          <li><b>Transformation:</b> Feature engineering & preprocessing</li>
          <li><b>Model Training:</b> Train and evaluate model</li>
        </ul>
      </div>

      {/* CONFIG */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">📂 Configuration-Driven Design</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li><b>params.yaml:</b> Stores hyperparameters</li>
          <li><b>schema.yaml:</b> Defines data structure</li>
          <li>Ensures reproducibility and flexibility</li>
        </ul>
      </div>

      {/* WORKFLOW */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🔄 Engineering Workflow</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>Notebook experimentation</li>
          <li>Refactor into modular pipeline</li>
          <li>main.py orchestrates full pipeline</li>
          <li>Flask API serves predictions</li>
        </ul>
      </div>

      {/* DEPLOYMENT */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🚀 Deployment (MLOps)</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li>Docker containerization</li>
          <li>GitHub Actions for CI/CD</li>
          <li>AWS ECR for image storage</li>
          <li>AWS EC2 for hosting API</li>
        </ul>
      </div>

      {/* TECH STACK */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>

        <ul className="grid md:grid-cols-2 gap-3 text-gray-400">
          <li>Python</li>
          <li>Scikit-learn</li>
          <li>Flask</li>
          <li>Docker</li>
          <li>AWS EC2</li>
          <li>AWS ECR</li>
          <li>GitHub Actions</li>
          <li>YAML Configs</li>
        </ul>
      </div>

    </div>
  );
}