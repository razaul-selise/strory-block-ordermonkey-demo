"use client";
import { getStoryblokApi } from "@/lib/storyblok";
import type { PropsWithChildren } from "react";

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  getStoryblokApi();

  return <>{children}</>;
};
