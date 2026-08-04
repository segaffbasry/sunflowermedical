import Image from "next/image";

type EditorialImageProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  position?: string;
  sizes?: string;
};

export default function EditorialImage({
  src,
  alt,
  caption,
  className = "",
  imageClassName = "",
  position = "50% 50%",
  sizes = "(max-width: 767px) 92vw, 84vw",
}: EditorialImageProps) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-[24px] bg-[#e9eae6] ring-1 ring-inset ring-[rgba(27,27,24,0.08)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        loading="lazy"
        style={{ objectPosition: position }}
        className={`object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-[1.025] ${imageClassName}`}
      />
      {caption && (
        <figcaption className="absolute bottom-3 left-3 max-w-[calc(100%_-_1.5rem)] rounded-full bg-[rgba(253,253,247,0.94)] px-3.5 py-2 text-[0.75rem] font-medium text-[#1b1b18] shadow-[0_8px_24px_-18px_rgba(27,27,24,0.7)] sm:bottom-4 sm:left-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
