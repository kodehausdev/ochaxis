import StudioImage from "@/components/ui/StudioImage";

export default function StudioSection() {
  return (
    <section className="fade-in section">
      <div className="container grid gap-12 lg:grid-cols-2 items-center">
        
        <div>
          <h2 className="text-3xl font-serif mb-4">
            Inside the Studio
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