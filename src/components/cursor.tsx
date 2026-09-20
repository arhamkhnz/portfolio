"use client";

import { useEffect, useRef } from "react";

import { useAnimate } from "motion/react";

const power1Out = (progress: number) => 1 - (1 - progress) ** 2;

export function Cursor() {
  const [scope, animate] = useAnimate();
  const bigBallRef = useRef<HTMLDivElement>(null);
  const smallBallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bigBall = bigBallRef.current;
    const smallBall = smallBallRef.current;
    const hoverables = document.querySelectorAll(".hoverable");
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!bigBall || !smallBall) {
      return;
    }

    if (isTouchDevice) {
      document.body.classList.add("hide-cursor");
      return () => document.body.classList.remove("hide-cursor");
    }

    const onMouseMove = (event: MouseEvent) => {
      animate(bigBall, { x: event.pageX - 15, y: event.pageY - 15 }, { type: "tween", duration: 0.4, ease: power1Out });
      animate(smallBall, { x: event.pageX - 5, y: event.pageY - 7 }, { type: "tween", duration: 0.1, ease: power1Out });
    };

    const onMouseHover = () => {
      animate(bigBall, { scale: 4 }, { type: "tween", duration: 0.3, ease: power1Out });
    };

    const onMouseHoverOut = () => {
      animate(bigBall, { scale: 1 }, { type: "tween", duration: 0.3, ease: power1Out });
    };

    document.body.addEventListener("mousemove", onMouseMove);
    hoverables.forEach((hoverable) => {
      hoverable.addEventListener("mouseenter", onMouseHover);
      hoverable.addEventListener("mouseleave", onMouseHoverOut);
    });

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
      hoverables.forEach((hoverable) => {
        hoverable.removeEventListener("mouseenter", onMouseHover);
        hoverable.removeEventListener("mouseleave", onMouseHoverOut);
      });
    };
  }, [animate]);

  return (
    <div ref={scope} className="pointer-events-none" aria-hidden="true">
      <div ref={bigBallRef} className="fixed top-0 left-0 z-[9999] mix-blend-difference [.hide-cursor_&]:hidden">
        <svg height="30" width="30">
          <circle className="fill-[#f7f8fa]" cx="15" cy="15" r="12" strokeWidth="0" />
        </svg>
      </div>
      <div ref={smallBallRef} className="fixed top-0 left-0 z-[9999] mix-blend-difference [.hide-cursor_&]:hidden">
        <svg height="10" width="10">
          <circle className="fill-[#f7f8fa]" cx="5" cy="5" r="4" strokeWidth="0" />
        </svg>
      </div>
    </div>
  );
}
