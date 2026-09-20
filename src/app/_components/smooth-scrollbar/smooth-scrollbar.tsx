"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

Scrollbar.use(OverscrollPlugin);

type SmoothScrollbarProps = {
  children: ReactNode;
};

const SmoothScrollbar = ({ children }: SmoothScrollbarProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const scrollbar = Scrollbar.init(container, {
      damping: 0.05,
      thumbMinSize: 20,
      renderByPixels: true,
      alwaysShowTracks: false,
      continuousScrolling: true,
      plugins: {
        overscroll: {
          effect: "glow",
          damping: 0.2,
          maxOverscroll: 150,
          glowColor: "#fffff",
        },
      },
    });

    scrollbar.track.xAxis.element.remove();
    scrollbar.track.yAxis.element.remove();

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className="h-screen w-full">
      {children}
    </div>
  );
};

export default SmoothScrollbar;
