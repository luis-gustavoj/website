"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { Link } from "@/lib/navigation";
import { useEffect, useState } from "react";
import { PAGES } from "@/shared/pages";
import { usePathname } from "@/lib/navigation";

type PagesHref = (typeof PAGES)[number]["href"];

export const Menu = () => {
  const pathname = usePathname() as PagesHref;
  const [activePage, setActivePage] = useState<PagesHref>(pathname);

  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);

  const handleMouseEnter = (page: PagesHref) => {
    setActivePage(page);
  };

  const handleMouseLeave = () => {
    setActivePage(pathname);
  };

  return (
    <motion.nav layout layoutRoot className="max-md:hidden">
      <ul className="flex gap-4 w-max">
        {PAGES.map((page) => (
          <li
            className="flex"
            key={page.href}
            onMouseEnter={() => handleMouseEnter(page.href)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              className={clsx(
                "px-2 py-1 leading-normal relative focus-visible:outline text-zinc-900 dark:text-zinc-50 transition",
                page.href === activePage ? "text-zinc-300" : "text-zinc-400"
              )}
              href={page.href}
            >
              {page.label}
              {activePage === page.href && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 bg-zinc-50 dark:bg-zinc-700 dark:mix-blend-difference -z-10 rounded-md shadow-lg shadow-zinc-400/10 dark:shadow-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
