export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* 🌌 BLUE BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Experience
        </h2>

        {/* CARD */}
        <div
          className="
            text-left
            bg-white/5 backdrop-blur-md
            border border-white/10
            p-8 rounded-2xl
            transition-all duration-300
            hover:border-blue-400/40
            hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
          "
        >
          {/* ROLE */}
          <h3 className="text-xl font-semibold text-white">
            Data Analyst Intern | AXL - Zenix
          </h3>

          {/* DATE */}
          <p className="text-gray-400 text-sm mt-1">
            Jun 2025 – Jul 2025
          </p>

          {/* RESPONSIBILITIES */}
          <ul className="mt-6 space-y-2 text-gray-300 list-disc ml-5">
            <li>Analyzed datasets using Python & SQL</li>
            <li>Performed EDA and preprocessing</li>
            <li>Built optimized SQL queries</li>
          </ul>

          {/* HIGHLIGHT TAG */}
          <div className="mt-6 inline-block text-blue-400 text-sm font-medium px-3 py-1 bg-blue-400/10 border border-blue-400/20 rounded-lg">
            Data Analytics • SQL • Python
          </div>
        </div>
      </div>
    </section>
  );
}