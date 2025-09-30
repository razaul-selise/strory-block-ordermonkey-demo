import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/section/Footer"), {
  ssr: true,
});
const Accordion = dynamic(() => import("@/components/storyblok/accordion/accordion"), {
  ssr: true,
});
const AccordionItem = dynamic(() => import("@/components/storyblok/accordion/accordion_item"), {
  ssr: true,
});
const AccordionSubItem = dynamic(
  () => import("@/components/storyblok/accordion/accordion_subitem"),
  {
    ssr: true,
  }
);
const Advantage = dynamic(() => import("@/components/storyblok/advantage"), {
  ssr: true,
});
const Benifits = dynamic(() => import("@/components/storyblok/benefits"), {
  ssr: true,
});
const Brandstory = dynamic(() => import("@/components/storyblok/brandstory"), {
  ssr: true,
});
const ButtonSB = dynamic(() => import("@/components/storyblok/button_sb"), {
  ssr: true,
});
const Buttons = dynamic(() => import("@/components/storyblok/buttons"), {
  ssr: true,
});
const CircularAnimation = dynamic(() => import("@/components/storyblok/circular_animation"), {
  ssr: true,
});
const CircularAnimationStepInfo = dynamic(
  () => import("@/components/storyblok/circular_animation_step_info"),
  {
    ssr: true,
  }
);
const ContactForm = dynamic(() => import("@/components/storyblok/ContactForm"), {
  ssr: true,
});
const DataItem = dynamic(() => import("@/components/storyblok/dataItem"), {
  ssr: true,
});
const FaqContent = dynamic(() => import("@/components/storyblok/faq"), {
  ssr: true,
});
const FeatureSection = dynamic(() => import("@/components/storyblok/feature_section"), {
  ssr: true,
});
const FeatureSectionContainer = dynamic(
  () => import("@/components/storyblok/feature_sections_container"),
  {
    ssr: true,
  }
);
const FooterItem = dynamic(() => import("@/components/storyblok/footer/footerItem"), {
  ssr: true,
});

const Hero = dynamic(() => import("@/components/storyblok/hero"), {
  ssr: true,
});
const Imprint = dynamic(() => import("@/components/storyblok/imprint"), {
  ssr: true,
});
const ImprintItem = dynamic(() => import("@/components/storyblok/imprintItem"), {
  ssr: true,
});
const Info = dynamic(() => import("@/components/storyblok/info"), {
  ssr: true,
});
const Item = dynamic(() => import("@/components/storyblok/item"), {
  ssr: true,
});
const Links = dynamic(() => import("@/components/storyblok/links"), {
  ssr: true,
});
const ListWithItems = dynamic(() => import("@/components/storyblok/list_with_items"), {
  ssr: true,
});
const SBMenu = dynamic(() => import("@/components/storyblok/menu"), {
  ssr: true,
});
const SBMenuItem = dynamic(() => import("@/components/storyblok/menu_item"), {
  ssr: true,
});
const Module = dynamic(() => import("@/components/storyblok/module"), {
  ssr: true,
});
const ModuleIntro = dynamic(() => import("@/components/storyblok/module_intro"), {
  ssr: true,
});
const Modules = dynamic(() => import("@/components/storyblok/modules"), {
  ssr: true,
});
const pageContent = dynamic(() => import("@/components/storyblok/pageContent"), {
  ssr: true,
});
const Pricing = dynamic(() => import("@/components/storyblok/pricing"), {
  ssr: true,
});
const PricingComparison = dynamic(() => import("@/components/storyblok/pricing_comparison"), {
  ssr: true,
});
const PricingComparisonContainer = dynamic(
  () => import("@/components/storyblok/pricing_comparison_container"),
  {
    ssr: true,
  }
);
const PricingContainer = dynamic(() => import("@/components/storyblok/pricing_container"), {
  ssr: true,
});
const Section = dynamic(() => import("@/components/storyblok/section"), {
  ssr: true,
});
const SectionAnimationContainer = dynamic(
  () => import("@/components/storyblok/section_with_btn_circular_animation_container"),
  {
    ssr: true,
  }
);
const SectionWithAdvantages = dynamic(
  () => import("@/components/storyblok/sectionWithAdvantages"),
  {
    ssr: true,
  }
);
const SectionWithDataItem = dynamic(() => import("@/components/storyblok/sectionWithDataItem"), {
  ssr: true,
});
const Slider = dynamic(() => import("@/components/storyblok/slider/slider"), {
  ssr: true,
});
const Story = dynamic(() => import("@/components/storyblok/story"), {
  ssr: true,
});
const Team = dynamic(() => import("@/components/storyblok/team"), {
  ssr: true,
});
const TeamContainer = dynamic(() => import("@/components/storyblok/team_container"), {
  ssr: true,
});
const Version = dynamic(() => import("@/components/storyblok/version"), {
  ssr: true,
});

const components = {
  page: pageContent,
  benefits: Benifits,
  brandstory: Brandstory,
  hero: Hero,
  section: Section,
  slider: Slider,
  story: Story,
  footer: Footer,
  footer_item: FooterItem,
  info: Info,
  links: Links,
  imprint: Imprint,
  imprint_item: ImprintItem,
  section_with_data_item: SectionWithDataItem,
  data_item: DataItem,
  version: Version,
  faq: FaqContent,
  accordion: Accordion,
  accordion_item: AccordionItem,
  accordion_subitem: AccordionSubItem,
  menu: SBMenu,
  menu_item: SBMenuItem,
  trial_form: ContactForm,
  modules: Modules,
  buttons: Buttons,
  button: ButtonSB,
  module_intro: ModuleIntro,
  pricing_container: PricingContainer,
  pricing: Pricing,
  module: Module,
  section_with_advantages: SectionWithAdvantages,
  advantage: Advantage,
  pricing_comparison_container: PricingComparisonContainer,
  pricing_comparison: PricingComparison,
  list_with_items: ListWithItems,
  item: Item,
  feature_sections_container: FeatureSectionContainer,
  feature_section: FeatureSection,
  team: Team,
  team_container: TeamContainer,
  section_with_btn_circular_animation_container: SectionAnimationContainer,
  circular_animation: CircularAnimation,
  circular_animation_step_info: CircularAnimationStepInfo,
};

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
  enableFallbackComponent: true,
});
