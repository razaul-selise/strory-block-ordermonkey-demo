import { Global as GlobalStoryblok } from "@/.storyblok/types/287474179047807/storyblok-components";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

const Global = ({ blok }: { blok: GlobalStoryblok }) => {
  return (
    <div {...storyblokEditable(blok as SbBlokData)}>
      {/* render other than header and footer as they are rendering on layout. */}
      {/* {blok?.burger_menu?.map((blok) => (
        <StoryblokServerComponent blok={blok} key={blok?._uid} />
      ))}
       */}
    </div>
  );
};

export default Global;
