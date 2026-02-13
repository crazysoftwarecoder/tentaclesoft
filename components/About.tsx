const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "100M+", label: "Users Served" },
  { value: "4.9/5", label: "Client Rating" },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Built on Silicon Valley
              <br />
              <span className="text-gray-400">experience.</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Tentacle Software is a boutique consulting firm founded by a
                Silicon Valley veteran who has worked at Apple, Atlassian, Canva,
                eBay, WalmartLabs, and Packsmith.
              </p>
              <p>
                That experience spans a diverse range of technologies and product
                spaces, from large-scale consumer platforms to developer tooling
                and AI-driven systems.
              </p>
              <p>
                Now based in Sydney, Australia, we partner with ambitious
                organisations globally to build exceptional software and
                high-performing engineering teams.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-8 text-center hover:bg-white/[0.08] transition-all"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-8">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-brand-400 mb-5">
                Tech We Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "React",
                  "Node.js",
                  "TypeScript",
                  "Spring Boot",
                  "Redis",
                  "Supabase",
                  "PostgreSQL",
                  "AWS",
                  "Docker",
                  "Claude Code",
                  "LLMs",
                  "Instruction Fine-Tuning",
                  "LoRA",
                  "MCP",
                  "RAG",
                  "Agentic Workflows",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 font-medium hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
