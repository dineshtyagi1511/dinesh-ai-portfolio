"use client";

export default function BayesianForecastingProject() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4">
        Bayesian Time-Series Forecasting System
      </h1>

      <p className="text-gray-400 max-w-3xl">
        A hybrid forecasting system combining classical statistics, machine learning, 
        and Bayesian inference to quantify market uncertainty with full MLOps tracking.
      </p>

      {/* GITHUB */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">🔗 Project Link</h2>

        <a 
          href="https://github.com/dineshtyagi1511/bayesian-stock-forecasting"
          target="_blank"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          View on GitHub →
        </a>
      </div>

      {/* ARCHITECTURE IMAGE */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">🏗️ System Architecture</h2>

        <img 
          src="/baye.png" 
          alt="Bayesian Forecasting Architecture"
          className="rounded-xl shadow-lg w-full border border-gray-800"
        />
      </div>

      {/* HLD */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🧠 High-Level Design (HLD)</h2>

        <p className="text-gray-400 leading-7">
          The system implements a <span className="text-blue-400">multi-model ensemble approach</span> 
          leveraging Bayesian Structural Time Series (BSTS) to provide not just point forecasts, 
          but full probability distributions for risk assessment.
        </p>
      </div>

      {/* PIPELINE */}
      <div className="mt-8 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">⚙️ Forecasting Phases</h2>

        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li><b>Statistical Baseline:</b> Auto-regressive modeling (SARIMA) for trend/seasonality.</li>
          <li><b>ML/DL Engine:</b> XGBoost and Stacked LSTMs with Huber loss for robust return prediction.</li>
          <li><b>Bayesian Layer:</b> MCMC sampling via PyMC for 95% credible interval generation.</li>
          <li><b>Experiment Tracking:</b> MLflow logging for parameters, metrics, and artifact versioning.</li>
        </ul>
      </div>

      {/* STATS SECTION */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">📉 Statistical Rigor</h2>

        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li><b>Stationarity Testing:</b> ADF and KPSS tests to ensure valid time-series assumptions.</li>
          <li><b>Bayesian A/B Testing:</b> Direct probability comparison of strategy alpha over p-values.</li>
          <li><b>Uncertainty Quantification:</b> Quantifying "Expected Shortfall" using posterior predictive checks.</li>
        </ul>
      </div>

      {/* MLOPS & DEPLOYMENT */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🚀 Production Stack (MLOps)</h2>

        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li><b>MLflow:</b> Centralized dashboard for 50+ experimental runs.</li>
          <li><b>FastAPI:</b> Asynchronous REST API serving both forecasts and confidence bounds.</li>
          <li><b>Render:</b> Continuous deployment platform for hosting the inference service.</li>
          <li><b>GitHub Actions:</b> Automated CI/CD for model validation and deployment.</li>
        </ul>
      </div>

      {/* TECH STACK */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>

        <ul className="grid md:grid-cols-2 gap-3 text-gray-400">
          <li>PyMC (Bayesian Inference)</li>
          <li>XGBoost & TensorFlow (LSTM)</li>
          <li>MLflow (Experiment Tracking)</li>
          <li>FastAPI</li>
          <li>Render Cloud</li>
          <li>yfinance (Market Data)</li>
          <li>Statsmodels</li>
          <li>GitHub Actions</li>
        </ul>
      </div>

    </div>
  );
}