import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { Bounded, ButtonLink, Heading } from "@/components";
import clsx from "clsx";

import { ParallaxImage } from "./ParallaxImage";

declare module "react" {
  interface CSSProperties {
    "--index"?: number;
  }
}
/**
 * Props for `Slide`.
 */
export type SlideProps = SliceComponentProps<Content.SlideSlice>;

/**
 * Component for "Slide" Slices.
 */
const Slide: FC<SlideProps> = ({ slice, index }) => {
  const { theme, heading, body, button, image, foreground_image } =
    slice.primary;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        "bg-texture sticky top-0 md:top-[calc(var(--index)*2rem)] text-white overflow-x-hidden",

        theme === "Blue" && "bg-brand-blue",
        theme === "Orange" && "bg-brand-orange",
        theme === "Navy" && "bg-brand-navy",
        theme === "Lime" && "bg-brand-lime text-black"
      )}
      style={{ "--index": index }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24">
        <div
          className={clsx(
            "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
            slice.variation === "imageOnLeft" && "md:order-2"
          )}
        >
          <Heading as="h2" size="lg">
            <PrismicText field={heading} />
          </Heading>
          <div className="max-w-md text-lg leading-relaxed">
            <PrismicRichText field={body} />
          </div>
          <ButtonLink
            field={button}
            color={theme === "Lime" ? "orange" : "lime"}
          >
            {button.text}
          </ButtonLink>
        </div>

        <ParallaxImage
          backgroundImage={image}
          foregroundImage={foreground_image}
        />
      </div>
    </Bounded>
  );
};

export default Slide;
