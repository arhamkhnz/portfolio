"use client";
import type { ReactNode } from "react";

type StrikeThroughProps = {
  children: ReactNode;
  className?: string;
};

export default function StrikeThrough({ children, className = "" }: StrikeThroughProps) {
  return <span className={`line-through ${className}`}>{children}</span>;
}
