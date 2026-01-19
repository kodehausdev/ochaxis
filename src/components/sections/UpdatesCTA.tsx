export default function UpdatesCTA() {
  return (
    <section className="bg-neutral-100 px-6 py-24">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-2xl font-serif text-neutral-900">
          Stay in the loop
        </h3>

        <p className="mt-4 text-neutral-700">
          Occasional updates from the studio. Classes, workshops, and new sessions.
        </p>

        <form className="mt-10 flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 rounded-md border border-neutral-300 px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />
          <button
            type="submit"
            className="rounded-md bg-neutral-900 px-6 py-3 text-white hover:bg-neutral-800 transition"
          >
            Get updates
          </button>
        </form>
      </div>
    </section>
  );
}