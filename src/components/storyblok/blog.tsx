import { Blog as BlogStoryblok } from "@/.storyblok/types/287474179047807/storyblok-components";
import { renderRichText, SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import parse from "html-react-parser";

const Blog = ({ blok }: { blok: BlogStoryblok }) => {
  return (
    <div
      {...storyblokEditable(blok as SbBlokData)}
      className="flex flex-col items-center justify-center bg-gray-200"
    >
      <h1 className="text-4xl">{blok?.title}</h1>
      <div className="richtext">{parse(renderRichText(blok?.description) ?? "")}</div>
    </div>
  );
};

export default Blog;
