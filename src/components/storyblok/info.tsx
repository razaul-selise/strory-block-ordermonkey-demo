import { Info as InfoStoryblok } from "@/.storyblok/types/339170/storyblok-components";
import { renderRichText, SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import parse from "html-react-parser";

const Info = ({ blok }: { blok: InfoStoryblok }) => {
  return (
    <div
      {...storyblokEditable(blok as SbBlokData)}
      className="richtext footer-info text-[1.0625rem] leading-[1.4375rem] tracking-[0.02125rem] md:text-[1.25rem] md:leading-[1.6875rem] md:tracking-[0.0125rem]"
    >
      {parse(renderRichText(blok?.description) ?? "")}
    </div>
  );
};

export default Info;
