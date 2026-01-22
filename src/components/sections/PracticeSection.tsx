export default function PracticeSection() {
  return (
    <section className="fade-in section bg-neutral-50">
      <div className="container">
        <h2 className="text-3xl font-serif mb-10">
          Practice
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <PracticeCard
            title="Projects"
            description="Extended studio work where ideas are tested through real materials, constraints, and iteration."
          />

          <PracticeCard
            title="Challenges"
            description="Short prompts designed to sharpen decision-making, speed, and clarity."
          />

          <PracticeCard
            title="Workshops"
            description="Focused sessions led through conversation, observation, and shared making."
          />
        </div>
      </div>
    </section>
  );
}

function PracticeCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-300">
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-neutral-700 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}