import BrandName from "@/components/ui/BrandName";

export default function Home() {
  return (
    <main className="container section">
      <h1 className="text-5xl">
        <BrandName />
      </h1>

      <p className="mt-4 max-w-xl">
        Thoughtfully designed interiors and professional interior design
        training.
      </p>
    </main>
  );
}