import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

import Scrollbar from "smooth-scrollbar";

type SmoothScrollbarProps = {
  children: ReactNode;
  onScroll?: (scrollY: number) => void;
};

const SmoothScrollbar = ({ children, onScroll }: SmoothScrollbarProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const onScrollRef = useRef(onScroll);

  useEffect(() => {
    onScrollRef.current = onScroll;
  }, [onScroll]);

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
      overscroll: {
        enable: true,
        effect: "glow",
        damping: 0.2,
        maxOverscroll: 150,
        glowColor: "#fffff",
      },
    });

    scrollbar.track.xAxis.element.remove();
    scrollbar.track.yAxis.element.remove();

    const handleScroll: Parameters<typeof scrollbar.addListener>[0] = (status) => {
      if (onScrollRef.current) {
        onScrollRef.current(status.offset.y); // Pass the vertical scroll position to the parent
      }
    };

    scrollbar.addListener(handleScroll);

    // Cleanup on component unmount
    return () => {
      scrollbar.removeListener(handleScroll);
      scrollbar.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} style={{ height: "100vh", width: "100%" }}>
      {children}
    </div>
  );
};

export default SmoothScrollbar;
