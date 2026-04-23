export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* 🌌 BLUE BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Education
        </h2>

        <div className="space-y-8">

          {/* MSc */}
          <div
            className="
              bg-white/5 backdrop-blur-md
              border border-white/10
              p-8 rounded-2xl
              text-left
              transition-all duration-300
              hover:border-blue-400/40
              hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
            "
          >
            <h3 className="text-xl font-semibold text-white">
              M.Sc. in Statistics
            </h3>

            <p className="text-blue-400 font-medium">
              Kurukshetra University
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Aug 2024 – May 2026
            </p>

            <p className="text-gray-300 mt-3 text-sm">
              Coursework: Time-Series Forecasting, Probability, Statistical Inference
            </p>
          </div>

          {/* BSc */}
          <div
            className="
              bg-white/5 backdrop-blur-md
              border border-white/10
              p-8 rounded-2xl
              text-left
              transition-all duration-300
              hover:border-blue-400/40
              hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
            "
          >
            <h3 className="text-xl font-semibold text-white">
              B.Sc. in Mathematics
            </h3>

            <p className="text-blue-400 font-medium">
              Deenbandhu Chhotu Ram University of Science & Technology
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Aug 2020 – Jun 2023
            </p>

            <p className="text-gray-300 mt-3 text-sm">
              Coursework: Probability, DBMS, Linear Algebra, Calculus
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}