export default function Hero() {
  return (
    <section className="relative px-6 py-32 bg-neutral-50 overflow-hidden">
      {/* Soft studio background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/studio-bg.jpg"
          alt="Studio background"
          className="w-full h-full object-cover opacity-675"
        />
      </div>

      {/* Hero content */}
      <div className="max-w-3xl mx-auto text-center fade-in visible">
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-neutral-900 inline-block">
          Ocha
          <span className="flourish mx-1">
            <span className="text-yellow-400">x</span>
          </span>
          is
        </h1>

        <p className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed">
          Interior Design • Teaching • Studio Practice
        </p>

        <a
          href="#studio"
          className="mt-10 inline-block rounded-md bg-neutral-900 px-8 py-3 text-white font-medium
                     hover:bg-neutral-800 hover:scale-105 transition duration-300 ease-in-out"
        >
          Explore the Studio
        </a>
      </div>
    </section>
  );
}