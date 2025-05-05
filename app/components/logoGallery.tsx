import { useState, useEffect, Key } from "react";
type Logo = {
  src?: string;
  alt?: string;
  aspect?: string;
};

type LogoGalleryProps = {
  logos: Logo[];
};

export default function LogoGallery({ logos }: LogoGalleryProps) {
  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    if (loadedCount === logos.length) {
      setAllLoaded(true);
    }
  }, [loadedCount, logos.length]);

  return (
    <div
      className={`${
        allLoaded ? "animate-gallery " : ""
      }tech-logos grid logos items-center place-items-center justify-around grid-rows-3 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-8 mt-8 mb-12`}
    >
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className={`opacity-0 md:w-fit h-32 aspect-${logo.aspect}`}
          style={{ animationDelay: `${200 * (index + 1)}ms` }}
          onLoad={() => setLoadedCount((count) => count + 1)}
        />
      ))}
    </div>
  );
}
