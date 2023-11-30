"use client";

import cx from "clsx";
import type { ImageProps } from "next/image";
import NextImage from "next/image";
import React from "react";

export const BlurImage = ({ className, ...props }: ImageProps) => {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <div
      className={cx(
        "relative overflow-hidden",
        isLoading ? "animate-pulse" : "",
        className
      )}
    >
      <NextImage
        className={cx(
          "duration-700 ease-in-out",
          className,
          isLoading
            ? "scale-[1.02] blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
        onLoad={() => setLoading(false)}
        {...props}
      />
    </div>
  );
};
