import { Links as LinksStoryblok } from "@/.storyblok/types/339170/storyblok-components";
import { Link } from "@/i18n/navigation";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

const Links = ({ blok }: { blok: LinksStoryblok }) => {
  return (
    <Link
      {...storyblokEditable(blok as SbBlokData)}
      className="block cursor-pointer text-[1.0625rem] leading-[1.4375rem] font-normal tracking-[0.02125rem] text-white uppercase not-italic no-underline md:text-[1.25rem] md:leading-[1.6875rem] md:tracking-[0.0125rem]"
      href={blok?.link?.url ?? ""}
      target={blok?.link?.target ?? "_self"}
    >
      {blok?.text}
    </Link>
  );
};

export default Links;
