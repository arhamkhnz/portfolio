import type { ReactNode } from "react";

import { HiOutlinePlus } from "react-icons/hi2";

type CardProps = {
  children: ReactNode;
  type?: "rounded" | "plain";
  className?: string;
};

export default function Card({ children, type, className = "" }: CardProps) {
  const getCardClasses = (cardType: CardProps["type"]) => {
    switch (cardType) {
      case "rounded":
        return "rounded-3xl border border-white/10 bg-white/10";
      case "plain":
        return "border-[0.5px] border-white/50";
      default:
        return "rounded-3xl border border-white/10 bg-white/10";
    }
  };

  return (
    <div className={`relative p-8 ${getCardClasses(type)} ${className} h-full`}>
      {children}

      {type === "plain" && (
        <>
          <div className="absolute -top-3 -left-3">
            <HiOutlinePlus color="white" size={24} />
          </div>

          <div className="absolute -top-3 -right-3">
            <HiOutlinePlus color="white" size={24} />
          </div>

          <div className="absolute -bottom-3 -left-3">
            <HiOutlinePlus color="white" size={24} />
          </div>

          <div className="absolute -right-3 -bottom-3">
            <HiOutlinePlus color="white" size={24} />
          </div>
        </>
      )}
    </div>
  );
}
