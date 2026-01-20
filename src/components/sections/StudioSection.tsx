export default function StudioSection() {
  return (
    <section id="studio" className="fade-in px-6 py-24 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-serif mb-6">The Studio</h2>
        <p className="max-w-xl text-neutral-700">
          We work through real projects, real materials, and real constraints.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative group overflow-hidden rounded-2xl fade-in visible">
          <img
            src="/images/studio-1.jpg"
            alt="Ochaxis studio"
            className="w-full h-[500px] object-cover grayscale-[30%] 
                       group-hover:grayscale-0 
                       group-hover:scale-105 
                       transition duration-700 ease-out"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-neutral-900/10 
                          group-hover:bg-neutral-900/0 
                          transition duration-700" />
        </div>

        {/* Text Content */}
        <div className="fade-in visible">
          <h2 className="text-4xl font-serif font-semibold text-neutral-900">
            The Studio
          </h2>
          <p className="mt-6 text-neutral-700 leading-relaxed">
            I design interiors that are calm, functional, and intentional.
          </p>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            I also teach interior design, not from a pedestal, but from practice.
          </p>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            This studio is a place to learn, ask questions, and build real skill.
          </p>
        </div>
      </div>
    </section>
  );
}
