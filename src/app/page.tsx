"use client";

import { useState } from "react";

import AboutSection from "./_components/about-section/about-section";
import HeroSection from "./_components/hero-section/hero-section";
import SmoothScrollbar from "./_components/smooth-scrollbar/smooth-scrollbar";

export default function Home() {
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = (scrollY: number) => {
    setScrollValue(scrollY);
  };

  return (
    <SmoothScrollbar onScroll={handleScroll}>
      <HeroSection scrollValue={scrollValue} />
      <AboutSection />
    </SmoothScrollbar>
  );
}
