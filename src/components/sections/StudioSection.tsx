export default function StudioSection() {
  return (
    <section className="bg-neutral-100 px-6 py-28">
      <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-2 items-center">
        
        {/* Image placeholder */}
        <div className="aspect-[4/5] bg-neutral-300 rounded-xl" />

        {/* Text */}
        <div>
          <h2 className="text-3xl font-serif text-neutral-900">
            The Studio
          </h2>

          <p className="mt-6 text-lg text-neutral-800 leading-relaxed">
            This is where I teach interior design as it is practiced.
          </p>

          <p className="mt-6 text-lg text-neutral-800 leading-relaxed">
            We work through real projects, real materials, and real decisions.
          </p>

          <p className="mt-6 text-lg text-neutral-800 leading-relaxed">
            You don’t get told what to do.  
            We talk through why things work, and when they don’t.
          </p>
        </div>
      </div>
    </section>
  );
}