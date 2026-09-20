"use client";

import { useEffect, useState } from "react";

import { cn } from "cn";

export default function SwappingText() {
  const styles = [
    { fontFamily: "font-funky-star", color: "text-[#FF69B4]" },
    { fontFamily: "font-smokey-brown", color: "text-[#FFD700]" },
    { fontFamily: "font-lowpoly", color: "text-[#00FFFF]" },
    { fontFamily: "font-crit-race", color: "text-[#32CD32]" },
    { fontFamily: "font-letter-sketch", color: "text-[#8B0000]" },
    { fontFamily: "font-okezone-chamoon", color: "text-[#FF4500]" },
  ];
  const [styleIndex, setStyleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStyleIndex((prevIndex) => (prevIndex + 1) % styles.length);
    }, 200);

    return () => clearInterval(interval);
  }, [styles.length]);

  const currentStyle = styles[styleIndex];

  return (
    <p
      className={cn(
        "absolute top-[50%] left-[50%] -z-[1] -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap text-6xl md:text-8xl lg:text-13xl",
        currentStyle.fontFamily,
        currentStyle.color,
      )}
    >
      Portfolio
    </p>
  );
}
