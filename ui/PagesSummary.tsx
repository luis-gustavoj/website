"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { LocaleText } from "./LocaleText";

type CardProps = {
  title: string;
  count: number;
  href: string;
  icon: JSX.Element;
  localeKey: string;
  className?: string;
};

const MotionLink = motion(Link);

const LOCALE_BASE_PATH = "components.pagesSummary";

const Card = ({
  count,
  href,
  icon,
  title,
  className,
  localeKey,
}: CardProps) => {
  return (
    <MotionLink
      className={clsx(
        "flex-1 relative overflow-hidden rounded-lg p-[1.5px]",
        className
      )}
      href={href}
      whileHover={{
        scale: 1.025,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
    >
      <span className="absolute inset-[-1000%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#bbbbbe_0%,#9f9fa8_50%,#bbbbbe_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#27272A_0%,#71717a_50%,#27272A_100%)]" />
      <div className="w-full h-full bg-zinc-200 text-zinc-700 dark:bg-zinc-900 rounded-lg backdrop-blur-3xl dark:text-zinc-100">
        <div className="bg-zinc-200 absolute top-3 left-3 p-1 w-max rounded-md">
          {React.cloneElement(icon, { className: "h-6 w-6 stroke-zinc-700" })}
        </div>
        <p className="absolute bottom-3 left-3 text-lg leading-none">{title}</p>
        <p className="absolute top-3 right-3 text-lg leading-none">
          <LocaleText
            basePath={LOCALE_BASE_PATH}
            path={localeKey}
            values={{ count }}
          />
        </p>
      </div>
    </MotionLink>
  );
};

type PagesSummaryProps = {
  cards?: CardProps[];
};

export const PagesSummary = ({ cards }: PagesSummaryProps) => {
  return (
    <div className="h-28 w-full flex gap-4 rounded-lg">
      {cards?.map((card) => (
        <Card key={card.href} {...card} />
      ))}
    </div>
  );
};
