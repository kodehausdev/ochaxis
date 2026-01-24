import StudioImage from "@/components/ui/StudioImage";

export default function StudioSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto grid gap-16 md:grid-cols-2 md:items-center">
        
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