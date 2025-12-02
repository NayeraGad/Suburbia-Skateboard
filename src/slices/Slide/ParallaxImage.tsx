"use client";

import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { useRef, useEffect } from "react";

type ParallaxImageProps = {
  backgroundImage: ImageField;
  foregroundImage: ImageField;
};

export const ParallaxImage = ({
  backgroundImage,
  foregroundImage,
}: ParallaxImageProps) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);

  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const frameId = requestAnimationFrame(animationFrame);

    window.addEventListener("mousemove", onMouseMove);

    function onMouseMove(event: MouseEvent) {
      const { innerWidth, innerHeight } = window;

      const xPercent = (event.clientX / innerWidth - 0.5) * 2;
      const yPercent = (event.clientY / innerHeight - 0.5) * 2;

      targetPosition.current = {
        x: xPercent * -20,
        y: yPercent * -20,
      };
    }

    function animationFrame() {
      const { x: targetX, y: targetY } = targetPosition.current;
      const { x: currentX, y: currentY } = currentPosition.current;

      const newX = currentX + (targetX - currentX) * 0.1;
      const newY = currentY + (targetY - currentY) * 0.1;

      currentPosition.current = { x: newX, y: newY };

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
      }

      if (foregroundRef.current) {
        foregroundRef.current.style.transform = `translate(${newX * 2.5}px, ${newY * 2.5}px)`;
      }

      requestAnimationFrame(animationFrame);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 place-items-center">
      <div ref={backgroundRef} className="parallax-images">
        <PrismicNextImage alt="" field={backgroundImage} className="w-11/12" />
      </div>

      <div
        ref={foregroundRef}
        className="parallax-images w-full h-full place-items-center"
      >
        <PrismicNextImage
          alt=""
          field={foregroundImage}
          className="w-auto h-full max-h-[500px]"
          imgixParams={{ height: 600 }}
        />
      </div>
    </div>
  );
};
