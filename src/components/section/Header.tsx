import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { Menu } from "@/.storyblok/types/287474179047807/storyblok-components";
import LanguageSwitcher from "../ui/language-switcher";

const Header = ({ burger_menu }: { burger_menu?: Menu[] }) => {
	//adjust this component based on your need.
	return (
		<div className="">
			{burger_menu && <StoryblokServerComponent blok={burger_menu[0]} />}
			<LanguageSwitcher />
		</div>
	);
};

export default Header;
