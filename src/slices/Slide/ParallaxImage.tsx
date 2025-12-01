import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

type ParallaxImageProps = {
  backgroundImage: ImageField;
  foregroundImage: ImageField;
};

export const ParallaxImage = ({
  backgroundImage,
  foregroundImage,
}: ParallaxImageProps) => {
  return (
    <div className="grid grid-cols-1 place-items-center">
      <div  className="parallax-images">
        <PrismicNextImage alt="" field={backgroundImage} className="w-11/12" />
      </div>

      <div className="parallax-images w-full h-full place-items-center">
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
