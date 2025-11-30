import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

import { Bounded, ButtonLink, Heading } from "@/components";
import { TallLogo } from "./TallLogo";
import { WideLogo } from "./WideLogo";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative h-dvh bg-brand-pink bg-texture overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center pt-20">
        <TallLogo className="lg:hidden hero-logo" />
        <WideLogo className="hidden lg:block hero-logo" />
      </div>

      <div className="absolute inset-0 grid grid-rows-[1fr,auto] place-items-end max-w-6xl mx-auto mt-24 px-6 ~py-10/16">
        <Heading className="relative place-self-start max-w-2xl">
          <PrismicText field={slice.primary.heading} />
        </Heading>

        <div className="relative flex flex-col lg:flex-row justify-between items-center ~gap-2/4 w-full">
          <div className="max-w-[45ch] ~text-lg/xl font-semibold">
            <PrismicRichText field={slice.primary.body} />
          </div>

          <ButtonLink
            field={slice.primary.button}
            size="lg"
            icon="skateboard"
            className="z-20 block mt-2"
          >
            {slice.primary.button.text}
          </ButtonLink>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
