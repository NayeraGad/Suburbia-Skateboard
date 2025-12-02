"use client";

import { useEffect, useRef, useState } from "react";
import { KeyTextField } from "@prismicio/client";

type VideoProps = {
  youTubeID: KeyTextField;
};

export function LazyYouTubePlayer({ youTubeID }: VideoProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = containerRef;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          console.log("in view");
        }
      },
      {
        threshold: 0,
        rootMargin: "1000px",
      }
    );

    if (current) observer.observe(current);

    return () => {
      if (current) observer.observe(current);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {isInView && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youTubeID}?autoplay=1&mute=1&loop=1&playlist=${youTubeID}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="pointer-events-none h-full w-full border-0"
        />
      )}
    </div>
  );
}
