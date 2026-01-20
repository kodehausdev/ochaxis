import StudioImage from "@/components/ui/StudioImage";

export default function StudioSection() {
  return (
<<<<<<< Updated upstream
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
        <div className="studio-image object-cover grayscale-[20%] contrast-[1.05]">
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
=======
    <section className="fade-in section">
      <div className="container grid gap-12 lg:grid-cols-2 items-center">
        
        <div>
          <h2 className="text-3xl font-serif mb-4">
            Inside the Studio
>>>>>>> Stashed changes
          </h2>
          <p className="text-neutral-700 max-w-md">
            This is where questions are allowed.
            Where sketches fail.
            Where design becomes practice.
          </p>
        </div>

        <StudioImage
          src="/images/studio-session.jpg"
          alt="Students working in the Ochaxis studio"
        />
      </div>
    </section>
  );
}