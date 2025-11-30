import clsx from "clsx";
import React from "react";

type HeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
};

export const Heading = ({
  children,
  as: Component = "h1",
  size = "lg",
  className,
}: HeadingProps) => {
  return (
    <Component
      className={clsx(
        "font-sans uppercase",
        size === "xs" && "~text-lg/xl",
        size === "sm" && "~text-2xl/4xl",
        size === "md" && "~text-3xl/5xl",
        size === "lg" && "~text-4xl/7xl",
        size === "xl" && "~text-4xl/8xl",
        className
      )}
    >
      {children}
    </Component>
  );
};
