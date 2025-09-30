"use client";
import { MenuItem } from "@/.storyblok/types/339170/storyblok-components";
import { Link } from "@/i18n/navigation";

import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import { motion } from "framer-motion";
import { useState } from "react";

const SBMenuItem = ({ blok }: { blok: MenuItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      {...storyblokEditable(blok as SbBlokData)}
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      tabIndex={-1}
      className="group overflow-hidden border-t-2 border-theme-white"
      animate={{ height: isOpen ? "auto" : "var(--menu-height)" }}
      initial={{ height: "var(--menu-height)" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex w-full cursor-pointer items-center justify-between overflow-hidden text-left">
        {blok?.link?.url ? (
          <Link
            tabIndex={0}
            href={blok?.link?.url}
            target={blok.link?.target ?? "_self"}
            className="no-underline"
          >
            <h1 className="py-[0.94rem] text-[3.4375rem] md:px-[0.62rem] md:py-[1.56rem] md:text-[10rem]">
              {blok?.Title}
            </h1>
          </Link>
        ) : (
          <button tabIndex={-1} type="button">
            <h1 className="bg-theme-black py-[0.94rem] text-[3.4375rem] font-normal !normal-case md:px-[0.62rem] md:py-[1.56rem] md:text-[10rem]">
              {blok?.Title}
            </h1>
          </button>
        )}
        <motion.div
          className="size-2.5 rounded-full bg-theme-white md:size-5"
          animate={isOpen ? { y: "var(--dot-translate)" } : { y: 0 }}
          initial={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* SubItems */}
      <div className="mb-5 grid grid-cols-1 md:grid-cols-2 md:gap-x-[3.75rem] md:gap-y-[1.875rem] lg:grid-cols-4">
        {blok?.SubItems?.map((subitem) => (
          <Link
            href={subitem.link?.url ?? "#"}
            target={subitem.link?.target ?? "_self"}
            key={subitem._uid}
            className="px-2.5 py-[0.31rem] text-[1.75rem] leading-[normal] no-underline md:py-0 md:text-[3.1875rem]"
          >
            {subitem.title}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default SBMenuItem;
