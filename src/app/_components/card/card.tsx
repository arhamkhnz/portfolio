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
        return "rounded-3xl border border-darkGrey-100 bg-darkGrey-100";
      case "plain":
        return "border-[0.5px] border-darkGrey-500";
      default:
        return "rounded-3xl border border-darkGrey-100 bg-darkGrey-100";
    }
  };

  return (
    <div className={`relative p-8 ${getCardClasses(type)} ${className} h-full`}>
      {children}

      {type === "plain" && (
        <>
          <div className="absolute top-[-12px] left-[-12px]">
            <HiOutlinePlus color="white" size={24} />
          </div>

          <div className="absolute top-[-12px] right-[-12px]">
            <HiOutlinePlus color="white" size={24} />
          </div>

          <div className="absolute bottom-[-12px] left-[-12px]">
            <HiOutlinePlus color="white" size={24} />
          </div>

          <div className="absolute right-[-12px] bottom-[-12px]">
            <HiOutlinePlus color="white" size={24} />
          </div>
        </>
      )}
    </div>
  );
}
