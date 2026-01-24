export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-50" />

      {/* content */}
      <div className="relative text-center px-6">
        <h1 className="text-5xl md:text-6xl font-serif mb-6">
          Ochaxis
        </h1>

        <p className="text-neutral-700 mb-8">
          Interior Design · Teaching · Studio Practice
        </p>

        <a
          href="#studio"
          className="inline-block text-sm underline underline-offset-4 text-neutral-800 hover:text-neutral-900"
        >
          Explore the Studio
        </a>
      </div>
    </section>
  );
}