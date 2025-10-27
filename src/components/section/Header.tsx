import { Menu } from "@/.storyblok/types/287474179047807/storyblok-components";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

const Header = ({ burger_menu }: { burger_menu?: Menu[] }) => {
  //adjust this component based on your need.
  return (
    <div className="">
      {burger_menu && (
        <>
          <StoryblokServerComponent blok={burger_menu[0]} />
        </>
      )}
    </div>
  );
};

export default Header;
