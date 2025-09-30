import { FooterItem as FooterLeftStoryblok } from "@/.storyblok/types/339170/storyblok-components";
import { SbBlokData, storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

const FooterItem = ({ blok }: { blok: FooterLeftStoryblok }) => {
  return (
    <div {...storyblokEditable(blok as SbBlokData)} className="col-span-1">
      {blok?.items?.map((item, index) => (
        <StoryblokServerComponent blok={item} key={item?._uid || `footer-item-${index}`} />
      ))}
    </div>
  );
};

export default FooterItem;
