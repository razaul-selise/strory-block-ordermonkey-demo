import { FooterItem } from "@/.storyblok/types/339170/storyblok-components";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

const Footer = async ({ blok }: { blok?: FooterItem[] }) => {
  if (!blok) {
    return null; // Return null if no blok is provided
  }

  return (
    <footer className="">
      Footer
      {blok.map((item) => (
        <StoryblokServerComponent blok={item} key={item?._uid} />
      ))}
    </footer>
  );
};

export default Footer;
