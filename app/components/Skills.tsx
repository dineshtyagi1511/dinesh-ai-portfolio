export default function Skills() {
  const skillGroups = [
  {
    title: "LLM & Generative AI",
    items: ["OpenAI", "LangChain", "RAG", "Prompt Engineering", "Transformers"],
  },
  {
    title: "Vector Databases",
    items: ["Pinecone", "Qdrant", "FAISS", "Chroma"],
  },
  {
    title: "Backend & APIs",
    items: ["FastAPI", "Flask", "REST APIs", "Async"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "CI/CD", "GitHub Actions"],
  },

  // 🌐 NEW SECTION
  {
    title: "Languages",
    items: ["Python", "SQL"],
  },

  // ⚙️ NEW SECTION
  {
    title: "Platforms",
    items: ["Linux", "AWS Cloud", "Docker", "GitHub", "Streamlit"],
  },
];

  return (
    <section
      id="skills"
      className="py-24 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* 🌌 BLUE GLOW BACKGROUND */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Technical{" "}
          <span className="text-blue-400">Skills</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className="
                bg-white/5 backdrop-blur-md
                border border-white/10
                rounded-2xl p-8
                transition-all duration-300
                hover:border-blue-400/40
                hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
              "
            >
              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-5 text-blue-400">
                {group.title}
              </h3>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2 justify-center">
                {group.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="
                      text-gray-300 text-sm
                      px-3 py-1 rounded-lg
                      bg-white/5 border border-white/10
                      hover:border-blue-400/30
                      hover:text-white
                      transition
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}