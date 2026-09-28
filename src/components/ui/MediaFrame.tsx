import Image from "next/image";

export function MediaFrame({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 60vw, 100vw",
  className = "aspect-[16/10]",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${imageClassName}`}
      />
    </div>
  );
}
