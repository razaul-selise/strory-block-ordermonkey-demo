import { Links as LinksStoryblok } from "@/.storyblok/types/287474179047807/storyblok-components";
import { Link } from "@/i18n/navigation";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

const Links = ({ blok }: { blok: LinksStoryblok }) => {
  return (
    <Link
      {...storyblokEditable(blok as SbBlokData)}
      className="text-white"
      href={blok?.link?.url ?? ""}
      target={blok?.link?.target ?? "_self"}
    >
      {blok?.text}
    </Link>
  );
};

export default Links;
