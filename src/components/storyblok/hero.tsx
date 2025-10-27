import { Hero as HeroStoryblok } from "@/.storyblok/types/287474179047807/storyblok-components";
import { renderRichText, SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import parse from "html-react-parser";

const Hero = ({ blok }: { blok: HeroStoryblok }) => {
  return (
    <div
      {...storyblokEditable(blok as SbBlokData)}
      className="flex h-[30vh] flex-col items-center justify-center bg-gray-200"
    >
      <h1 className="mb-5 text-4xl">{blok?.Title}</h1>
      <div className="richtext">{parse(renderRichText(blok?.description) ?? "")}</div>
    </div>
  );
};

export default Hero;
