const testimonials = [
  {
    name: "Ramesh Periyathambi",
    title: "Distinguished Engineer, eBay",
    quote:
      "Ashwanth is extremely knowledgeable and an awesome leader with an incredible ability to motivate his team to perform at their best. He is an absolute powerhouse with an amazing amount of energy and industry knowledge. He is very friendly and always enjoys mentoring and helping many engineers around him with his deep technical expertise and leadership skills. He is always focused on what he does and loves solving complex engineering problems creating scalable creative solutions. Ashwanth is an absolute joy to work with.",
  },
  {
    name: "Praveen Athmanathan",
    title: "Engineering Leadership, ShiftSmart",
    quote:
      "I have seen Ashwanth as a great individual contributor with stellar leadership skills. Being a strong coder he was extremely productive by contributing a ton of code to the Search Experience Service and Search Backend code bases. His ability to convince leadership and senior architects on his strategy and design is noteworthy. Junior engineers in the team also constantly looked up to Ashwanth for advice.",
  },
  {
    name: "Dmitry Paramzin",
    title: "Java Software Engineer, Canva",
    quote:
      "I know Ash as an excellent mentor and highly experienced engineer. When I was a newbie in the company, he helped me to navigate through the technical and subtle cultural aspects of the organization. Pragmatic learnings from him rocketed my onboarding process enabling me to start quickly delivering value for the company at full speed!",
  },
  {
    name: "Amit Srivastava",
    title: "AI Executive, ServiceNow",
    quote:
      "Ashwanth is one of the best engineer + leader employees I\u2019ve had the honor to work with in my career. He not only adds value through his excellent coding, design, and automation skills, but also increases the impact of the team through code reviews, technical designs, and mentoring. Within a year of joining my AI team at NPD, he came up with a framework that reduced our testing and validation time from days to mere minutes and then open-sourced the framework. He also developed the framework + ecosystem to enable deterministic dialogs in ShopBot\u2019s AI in a matter of minutes, something which had taken months in the past and was a major obstacle to our build to production cycle. I have enjoyed having Ashwanth on my team and have learned a lot about engineering simplicity and agile development from him.",
  },
  {
    name: "Ravindra Bhanot",
    title: "Software Engineer, Meta",
    quote:
      "Ashwanth has a serious blend of technical and leadership skills. I have seen him be a mentor to many developers and he has a natural way of advising the decisions and compromises one should make around coding and architecture of a system. Based on his experience, he can master any skill pretty quick and so I highly recommend him for senior roles in technical projects.",
  },
  {
    name: "Ajoy Chattopadhyay",
    title: "Cloud | Platforms | E-Commerce, LinkedIn",
    quote:
      "Ashwanth is a very talented engineer, who delivered and helped my team deliver many crucial projects into production. What is most noticeable in him is the ability to explore new areas and become proficient or even an expert in them in a very short span of time. His knowledge and practical experience with ecommerce software, deep computer science background and ability to think on the ground was crucial to engineering organizations like ours. He has single-handedly developed software that affected a huge code base with almost zero issues in production, fixed many critical issues in production and worked in a team setting to help meet a deadline with great quality and he has delivered brilliantly on all fronts. I wish him all the very best and look forward to working with him in the future.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What people say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card p-8 hover:bg-white/[0.08] transition-all"
            >
              <svg
                className="w-8 h-8 text-brand-500/40 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-sm text-gray-500">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
