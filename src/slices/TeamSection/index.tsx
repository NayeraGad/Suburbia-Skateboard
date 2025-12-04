import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";

import { Bounded, Heading } from "@/components";
import { createClient } from "@/prismicio";

/**
 * Props for `TeamSection`.
 */
export type TeamSectionProps = SliceComponentProps<Content.TeamSectionSlice>;

/**
 * Component for "TeamSection" Slices.
 */
const TeamSection: FC<TeamSectionProps> = async ({ slice }) => {
  const client = createClient();
  const skaters = await client.getAllByType("skaters");

  console.log(skaters);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-navy bg-texture"
    >
      <Heading as="h2">
        <PrismicText field={slice.primary.the_team} />
      </Heading>

      <div>
        {skaters.map(() => (
          <></>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamSection;
