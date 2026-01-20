import Image from "next/image";

type StudioImageProps = {
  src: string;
  alt: string;
};

export default function StudioImage({ src, alt }: StudioImageProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-neutral-100">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="object-cover grayscale-[20%] contrast-[1.05]"
      />

      {/* soft overlay */}
      <div className="absolute inset-0 bg-neutral-900/5" />
    </div>
  );
}