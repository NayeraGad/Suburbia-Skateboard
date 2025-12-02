import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceComponentProps, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { bundleSlides, SlidesBundleSlice } from "@/utilities";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home").catch(() => notFound());
  const slices = bundleSlides(page.data.slices);

  return (
    <SliceZone
      slices={slices}
      components={{
        ...components,
        slides_bundle: ({ slice }: SliceComponentProps<SlidesBundleSlice>) => (
          <div>
            <SliceZone slices={slice.slices} components={components} />
          </div>
        ),
      }}
    />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home").catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}
