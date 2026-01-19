export default function PracticeSection() {
  return (
    <section className="bg-neutral-50 px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif text-neutral-900">
          Practice, in real terms
        </h2>

        <p className="mt-4 text-neutral-700 max-w-2xl">
          Learning happens when you work through real constraints.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-medium text-neutral-900">
              Projects
            </h3>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              You work on real interior design projects, from concept to
              decision-making. Not samples. Not hypotheticals.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-neutral-900">
              Challenges
            </h3>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Short, focused design problems that sharpen thinking and confidence.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-neutral-900">
              Workshops
            </h3>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Hands-on sessions around materials, layout, and spatial thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}