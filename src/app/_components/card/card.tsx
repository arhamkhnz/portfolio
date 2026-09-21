import type { ReactNode } from "react";

import { PlusIcon } from "@phosphor-icons/react/ssr";
import { cn } from "cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn("relative h-full border-[0.5px] border-white/50 p-8", className)}>
      {children}

      <div className="absolute -top-3 -left-3">
        <PlusIcon color="white" size={24} />
      </div>

      <div className="absolute -top-3 -right-3">
        <PlusIcon color="white" size={24} />
      </div>

      <div className="absolute -bottom-3 -left-3">
        <PlusIcon color="white" size={24} />
      </div>

      <div className="absolute -right-3 -bottom-3">
        <PlusIcon color="white" size={24} />
      </div>
    </div>
  );
}
