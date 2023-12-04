import clsx from "clsx";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <p
    className={clsx(
      "tracking-tighter font-bold text-lg leading-none font-mono select-none",
      className
    )}
  >
    luisgustavosilva.
  </p>
);
