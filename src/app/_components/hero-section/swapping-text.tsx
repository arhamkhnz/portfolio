"use client";

import { useEffect, useState } from "react";

import { cn } from "cn";

const swappingStyles = [
  { fontClass: "font-rubik-burned", color: "text-pink-400" },
  { fontClass: "font-fascinate-inline", color: "text-yellow-400" },
  { fontClass: "font-flavors", color: "text-violet-400" },
  { fontClass: "font-protest-revolution", color: "text-cyan-300" },
  { fontClass: "font-caesar-dressing", color: "text-lime-400" },
  { fontClass: "font-londrina-sketch", color: "text-red-500" },
  { fontClass: "font-sedgwick-ave-display", color: "text-orange-500" },
] as const;

export default function SwappingText() {
  const [styleIndex, setStyleIndex] = useState(0);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let interval: ReturnType<typeof setInterval> | undefined;

    const updateAnimation = () => {
      clearInterval(interval);

      if (!reducedMotionQuery.matches) {
        interval = setInterval(() => {
          setStyleIndex((previousIndex) => (previousIndex + 1) % swappingStyles.length);
        }, 200);
      }
    };

    updateAnimation();
    reducedMotionQuery.addEventListener("change", updateAnimation);

    return () => {
      clearInterval(interval);
      reducedMotionQuery.removeEventListener("change", updateAnimation);
    };
  }, []);

  const currentStyle = swappingStyles[styleIndex];

  return (
    <p
      className={cn(
        "absolute top-[50%] left-[50%] z-[-1] -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap text-6xl leading-none md:text-8xl lg:text-13xl",
        currentStyle.fontClass,
        currentStyle.color,
      )}
    >
      Portfolio
    </p>
  );
}
