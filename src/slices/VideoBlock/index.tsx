import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components";
import { LazyYouTubePlayer } from "./LazyYoutubePlayer";
import Image from "next/image";

/**
 * Props for `VideoBlock`.
 */
export type VideoBlockProps = SliceComponentProps<Content.VideoBlockSlice>;

/**
 * Component for "VideoBlock" Slices.
 */
const VideoBlock: FC<VideoBlockProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-zinc-900 bg-texture"
    >
      <h2 className="sr-only">Video Reel</h2>

      <div className="relative aspect-video">
        <div className="video-masks inset-0 bg-brand-lime ~translate-x-2/3 ~translate-y-2/3"></div>
        <div className="video-masks inset-0 bg-white ~translate-x-1/3 ~translate-y-1/2"></div>
        <div className="video-masks inset-0 bg-white ~translate-x-1/2 ~-translate-y-1/3"></div>

        <div className="video-masks relative h-full">
          {isFilled.keyText(slice.primary.youtube_video_id) && (
            <LazyYouTubePlayer youTubeID={slice.primary.youtube_video_id} />
          )}

          <Image
            src="/image-texture.png"
            alt=""
            fill
            className="pointer-events-none object-cover opacity-50"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default VideoBlock;
