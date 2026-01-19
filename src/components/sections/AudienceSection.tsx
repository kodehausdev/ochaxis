export default function AudienceSection() {
  return (
    <section className="px-6 py-28">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif text-neutral-900">
          This studio is for you if…
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3 text-left">
          <div>
            <h3 className="text-lg font-medium text-neutral-900">
              You’re curious, not rushed
            </h3>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              You want to understand design, not just copy trends.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-neutral-900">
              You learn by doing
            </h3>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              You’re okay making mistakes, asking questions, and figuring things out.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-neutral-900">
              You want guidance, not noise
            </h3>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              You’re looking for clarity, not pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}