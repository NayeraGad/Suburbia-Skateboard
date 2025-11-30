import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

import { Bounded, Heading } from "../../components";
import { SkateProduct } from "./SkateProduct";

/**
 * Props for `ProductsGrid`.
 */
export type ProductsGridProps = SliceComponentProps<Content.ProductsGridSlice>;

/**
 * Component for "ProductsGrid" Slices.
 */
const ProductsGrid: FC<ProductsGridProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-gray bg-texture text-center"
    >
      <Heading as="h2" className="~mb-4/6">
        <PrismicText field={slice.primary.heading} />
      </Heading>

      <div className="~mb-6/10">
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
        {slice.primary.products.map(
          ({ skateboard }) =>
            isFilled.contentRelationship(skateboard) && (
              <SkateProduct key={skateboard.id} id={skateboard.id} />
            )
        )}
      </div>
    </Bounded>
  );
};

export default ProductsGrid;
