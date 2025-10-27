import { Menu } from "@/.storyblok/types/287474179047807/storyblok-components";
import { SbBlokData, storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

const SBMenu = ({ blok }: { blok: Menu }) => {
  return (
    <div {...storyblokEditable(blok as SbBlokData)}>
      {blok?.items?.map((blok) => (
        <StoryblokServerComponent blok={blok} key={blok?._uid} />
      ))}
    </div>
  );
};

export default SBMenu;
