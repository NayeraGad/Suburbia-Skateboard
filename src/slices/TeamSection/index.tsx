import React, { FC, Fragment } from "react";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";

import { Bounded, Heading } from "@/components";
import { createClient } from "@/prismicio";
import { SkaterCard } from "./components/SkaterCard";

/**
 * Props for `TeamSection`.
 */
export type TeamSectionProps = SliceComponentProps<Content.TeamSectionSlice>;

/**
 * Component for "TeamSection" Slices.
 */
const TeamSection: FC<TeamSectionProps> = async ({ slice }) => {
  const client = createClient();
  const { results } = await client.getByType("skaters");

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-navy bg-texture"
    >
      <Heading as="h2" className="mb-8 text-white text-center">
        <PrismicText field={slice.primary.the_team} />
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {results.map((skater) => (
          <Fragment key={skater.id}>
            {skater.data.first_name && <SkaterCard skater={skater} />}
          </Fragment>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamSection;
