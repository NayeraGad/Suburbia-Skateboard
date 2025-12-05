import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { Scribble } from "./Scribble";
import clsx from "clsx";
import { ButtonLink } from "@/components";

type CardProps = {
  skater: Content.SkatersDocument;
};

export const SkaterCard = ({ skater }: CardProps) => {
  const {
    first_name,
    last_name,
    background_photo,
    foreground_photo,
    button,
    theme,
  } = skater.data;

  return (
    <div className="relative group flex flex-col items-center gap-4">
      <div className="stack-layout overflow-hidden">
        <PrismicNextImage
          alt=""
          field={background_photo}
          width={500}
          imgixParams={{ q: 20 }}
          className="team-image-transform scale-110 group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[0.8]"
        />

        <Scribble
          className={clsx(
            "relative",
            theme === "Navy" && " text-brand-navy",
            theme === "Lime" && " text-brand-lime",
            theme === "Orange" && " text-brand-orange",
            theme === "Pink" && " text-brand-pink"
          )}
        />

        <PrismicNextImage
          alt=""
          field={foreground_photo}
          width={500}
          className="team-image-transform group-hover:scale-110"
        />

        <div className="relative w-full h-48 flex items-end place-self-end bg-gradient-to-t from-black via-transparent to-transparent">
          <h3 className="flex flex-col p-2 text-brand-gray ~text-2xl/3xl font-sans">
            <span className="-mb-[0.3em]">{first_name}</span>
            <span>{last_name}</span>
          </h3>
        </div>
      </div>

      <ButtonLink field={button} size="sm">
        Build their board
      </ButtonLink>
    </div>
  );
};
