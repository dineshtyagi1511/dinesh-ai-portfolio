"use client";

export default function LoanProject() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4">
        Two-Stage Loan Approval System
      </h1>

      <p className="text-gray-400 max-w-3xl">
        End-to-end ML system implementing a conditional pipeline using classification 
        and regression for intelligent loan approval and credit limit prediction.
      </p>

      {/* LIVE APP & GITHUB */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">🚀 Resources & Live App</h2>

        <p className="text-gray-400 mb-6">
          Interact with the real-time prediction engine or explore the conditional pipeline architecture on GitHub.
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href="https://your-streamlit-link.streamlit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors"
          >
            Try App →
          </a>

          <a 
            href="https://github.com/dineshtyagi1511/LOAN_APPROVAL_PREDICTION"
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
          src="/loan.png"
          alt="Loan System Architecture"
          className="rounded-xl shadow-lg w-full border border-gray-800"
        />
      </div>

      {/* HLD */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🧠 High-Level Design (HLD)</h2>

        <p className="text-gray-400 leading-7">
          The system follows a <span className="text-green-400 font-medium">Two-Stage Conditional Pipeline</span>, 
          where the regression model (valuation) is executed only if the classification model (gatekeeper) approves the candidate.
        </p>
      </div>

      {/* TWO STAGE LOGIC */}
      <div className="mt-8 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">⚙️ Two-Stage Decision Logic</h2>

        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li>
            <b>Stage 1 – Gatekeeper (Classifier):</b> Uses advanced classification to predict loan approval based on historical credit risk data.
          </li>
          <li>
            <b>Stage 2 – Valuator (Regressor):</b> If approved, a secondary model calculates the optimal loan amount limit based on financial health.
          </li>
          <li>
            Conditional flow ensures computational efficiency and mimics real-world banking underwriting processes.
          </li>
        </ul>
      </div>

      {/* COMPONENTS */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🧩 System Components</h2>

        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li><b>Config Layer:</b> YAML-based configuration for easy hyperparameter tuning and model versioning.</li>
          <li><b>Environment:</b> <code className="text-green-400">uv</code> for lightning-fast, reproducible dependency management.</li>
          <li><b>Data Loader:</b> Automated ingestion and preprocessing for categorical and numerical features.</li>
          <li><b>Pipeline:</b> Scikit-learn <code className="text-white">ColumnTransformer</code> for seamless data flow.</li>
          <li><b>Engine:</b> Custom <code className="text-white">CreditRiskEngine</code> managing the handshake between the two models.</li>
        </ul>
      </div>

      {/* WORKFLOW */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🔄 Request Workflow</h2>

        <ul className="list-disc ml-6 text-gray-400 leading-7">
          <li>User inputs financial profile via the <b>Streamlit UI</b>.</li>
          <li>Data flows through a synchronized <b>Scikit-learn preprocessing pipeline</b>.</li>
          <li><b>Classifier</b> determines if the applicant meets the safety threshold.</li>
          <li><b>If Approved:</b> Regression model activates to predict the suggested loan amount.</li>
          <li>Final results are visualized with transparency on approval status and amount.</li>
        </ul>
      </div>

      {/* TECH STACK */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-400">
          <li>Scikit-learn (ML Framework)</li>
          <li>Streamlit (Frontend UI)</li>
          <li>GridSearchCV (Tuning)</li>
          <li>ColumnTransformer (Preprocessing)</li>
          <li>YAML (Config Management)</li>
          <li>uv (Python Package Manager)</li>
          <li>Pandas & Numpy</li>
        </ul>
      </div>

      {/* STRATEGY */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">📊 Technical Strategy</h2>

        <ul className="list-disc ml-6 text-gray-400">
          <li><b>Consistent Preprocessing:</b> Ensuring Stage 1 and Stage 2 use the same feature engineering logic.</li>
          <li><b>Hyperparameter Optimization:</b> Exhaustive search via GridSearchCV to find the best-performing models.</li>
          <li><b>Modular Design:</b> Decoupled logic wrapper allows for easy model swapping without breaking the UI.</li>
        </ul>
      </div>

    </div>
  );
}