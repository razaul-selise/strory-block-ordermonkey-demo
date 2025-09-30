"use client";
import { Hero as HeroStoryblok } from "@/.storyblok/types/339170/storyblok-components";
import { BreakPointHooks, breakpointsTailwind } from "@react-hooks-library/core";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

const Hero = ({ blok }: { blok: HeroStoryblok }) => {
  const { useSmaller } = BreakPointHooks(breakpointsTailwind);
  const smaller = useSmaller("md");
  return (
    <div {...storyblokEditable(blok as SbBlokData)} className="mt-60">
      <div className="flex items-start gap-[0.625rem] md:gap-[1.25rem]">
        {blok?.svg_icon_light?.filename && (
          <Image
            className="mt-4 shrink-0 mix-blend-difference"
            src={blok?.svg_icon_light?.filename ?? ""}
            alt={blok?.svg_icon_light?.alt ?? ""}
            width={!smaller ? 82.5 : 30.777}
            height={!smaller ? 67.5 : 25.181}
          />
        )}
        <h1 className="mr-[10%] text-[45px] leading-[53px] font-normal tracking-[-0.015em] md:mr-[40%] md:text-[102px] md:leading-[108px] md:tracking-[-0.025em]">
          {blok?.headline}
        </h1>
      </div>
      <p className="mt-9 mr-[2%] ml-[10%] text-[17px] leading-[23px] font-normal tracking-[0.02em] normal-case md:mr-[5%] md:ml-[33%] md:text-[25px] md:leading-[31px] md:tracking-[0.01em]">
        {blok?.description}
      </p>
    </div>
  );
};

export default Hero;
