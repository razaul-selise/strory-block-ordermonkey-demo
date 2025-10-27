import Blog from "@/components/storyblok/blog";
import Global from "@/components/storyblok/global";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/section/Footer"), {
  ssr: true,
});

const FooterItem = dynamic(() => import("@/components/storyblok/footer/footerItem"), {
  ssr: true,
});
const Section = dynamic(() => import("@/components/storyblok/section"), {
  ssr: true,
});
const Hero = dynamic(() => import("@/components/storyblok/hero"), {
  ssr: true,
});

const Links = dynamic(() => import("@/components/storyblok/links"), {
  ssr: true,
});

const SBMenu = dynamic(() => import("@/components/storyblok/menu"), {
  ssr: true,
});
const SBMenuItem = dynamic(() => import("@/components/storyblok/menu_item"), {
  ssr: true,
});
const pageContent = dynamic(() => import("@/components/storyblok/pageContent"), {
  ssr: true,
});

const components = {
  hero: Hero,
  footer: Footer,
  footer_item: FooterItem,
  links: Links,
  menu: SBMenu,
  menu_item: SBMenuItem,
  page: pageContent,
  Section: Section,
  blog: Blog,
  global: Global,
};

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
  enableFallbackComponent: true,
});
