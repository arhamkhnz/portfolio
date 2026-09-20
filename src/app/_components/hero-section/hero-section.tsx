"use client";
import Link from "next/link";

import SwappingText from "./swapping-text";

type HeroSectionProps = {
  scrollValue: number;
};

export default function HeroSection({ scrollValue }: HeroSectionProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative flex h-dvh w-screen items-center justify-center pb-40 lg:pb-0">
      <SwappingText />
      <div className="relative z-10 flex items-center space-x-4 border bg-black p-4 shadow-lg lg:p-10">
        <p className="font-helixa-bold text-2xl text-white md:text-4xl lg:text-5xl">portfolio</p>
        <div className="border-white border-l-2 pl-4">
          <p className="font-helixa-bold text-sm text-white md:text-lg lg:text-xl">
            Arham Khan
            <br />
            Creative Developer
          </p>
        </div>
      </div>
      {/* {scrollValue < 50 && (
        <div className="absolute inset-x-0 bottom-7">
          <div className="hidden items-center justify-center md:flex">
            <p className="animate-bounce text-xs font-semibold tracking-wide text-orange">Scroll …</p>
          </div>
        </div>
      )} */}
      <p className="absolute top-5 left-5 font-helixa-bold text-white text-xl">
        Arham Khan<span className="text-4xl text-orange">.</span>
      </p>

      <Link
        href="/showcase"
        className="absolute top-5 right-5 rounded-full border-2 border-orange px-8 py-2 font-helixa-bold text-orange transition duration-300 ease-in-out hover:bg-orange hover:text-white"
      >
        Showcase
      </Link>

      <p className="absolute bottom-7 left-5 font-helixa-bold text-lg text-white">
        Working as <br /> Full Stack Developer
      </p>
      <p className="absolute right-5 bottom-7 font-helixa-bold text-lg text-white">{currentYear}</p>
    </div>
  );
}
