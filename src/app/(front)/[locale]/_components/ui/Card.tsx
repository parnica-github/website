import classNames from "classnames";
import Image from "next/image";
import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  imageUrl?: string;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  imageUrl,
  className,
}) => {
  return (
    <div
      className={classNames(
        "max-w-sm rounded overflow-hidden shadow-lg",
        className
      )}
    >
      {imageUrl && <Image src={imageUrl} alt="Medical" />}
      <div className="px-6 py-4">
        {title && <h1 className="font-bold text-xl mb-2">{title}</h1>}
        {children}
      </div>
    </div>
  );
};
