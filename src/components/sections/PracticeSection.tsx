const items = [
  {
    title: "Studio Projects",
    description:
      "We work through real interior projects from concept to execution, learning how decisions are made in practice.",
  },
  {
    title: "Design Challenges",
    description:
      "Short, focused challenges that sharpen thinking, materials knowledge, and spatial reasoning.",
  },
  {
    title: "Workshops & Crits",
    description:
      "Hands-on sessions where we build, discuss, review, and refine work together in the studio.",
  },
];

export default function PracticeSection() {
  return (
    <section className="px-6 py-28 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-serif font-semibold text-neutral-900">
          Practice
        </h2>

        <p className="mt-6 max-w-2xl text-neutral-700 leading-relaxed">
          Learning here is grounded in doing. We focus on building skill through
          repetition, feedback, and real studio work.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-neutral-200
                         hover:border-neutral-300
                         transition duration-300 fade-in visible"
            >
              <h3 className="text-xl font-semibold text-neutral-900">
                {item.title}
              </h3>

              <p className="mt-4 text-neutral-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}