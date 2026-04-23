export default function Contact() {
  const email = "dineshtyagi1511@gmail.com";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Hello Dinesh&body=Hi Dinesh, I visited your portfolio and would like to connect with you.`;

  return (
    <section
      id="contact"
      className="py-24 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Contact
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-400 mb-10 max-w-md mx-auto">
          Feel free to reach out for opportunities, internships, or collaborations.
        </p>

        {/* CARD */}
        <div
          className="
            bg-white/5 backdrop-blur-md
            border border-white/10
            rounded-3xl
            p-10
            space-y-8
            transition-all duration-500
            hover:border-blue-500/30
            hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]
          "
        >
          {/* EMAIL DISPLAY */}
          <div className="group">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-semibold">
              Get in touch
            </p>
            <a
              href={`mailto:${email}`}
              className="text-xl md:text-2xl text-white font-medium hover:text-blue-400 transition-colors duration-300"
            >
              {email}
            </a>
          </div>

          {/* BUTTON GROUP */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-4 rounded-2xl
                bg-blue-600 hover:bg-blue-500
                text-white font-semibold
                transition-all active:scale-95
                shadow-lg shadow-blue-900/20
                inline-block
              "
            >
              Send Email 
            </a>

            <a
              href="https://github.com/dineshtyagi1511"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-4 rounded-2xl
                bg-white/5 border border-white/10
                hover:bg-white/10 hover:border-blue-400/40
                text-white font-semibold
                transition-all active:scale-95
                inline-block
              "
            >
              GitHub Profile →
            </a>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <p className="text-gray-500 text-sm mt-10 italic">
          I usually respond within 24–48 hours
        </p>
      </div>
    </section>
  );
}