import { ButtonLink } from "@/components";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { FaStar } from "react-icons/fa6";

type SkateProductProps = {
  id: string;
};

export const SkateProduct = async ({ id }: SkateProductProps) => {
  const client = createClient();
  const { data } = await client.getByID<Content.SkateboardDocument>(id);
  const { name, image, price, customizer_link } = data;

  return (
    <div className="group relative w-full max-w-72 mx-auto pt-4 px-8 border-4">
      <div className="flex justify-between items-center ~text-sm/2xl">
        <span>{price ? `$${price}` : "Price not available"}</span>

        <span className="inline-flex items-center gap-1">
          <FaStar className="text-yellow-400" /> 37
        </span>
      </div>

      <div className="-mb-1 py-4 overflow-hidden">
        <PrismicNextImage
          alt=""
          field={image}
          width={150}
          className="mx-auto w-[58%] origin-top transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150"
        />
      </div>

      <h3 className="my-2 ~text-lg/xl font-sans leading-tight">{name}</h3>

      <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <ButtonLink field={customizer_link}>Customize</ButtonLink>
      </div>
    </div>
  );
};
