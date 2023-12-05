"use client";

import { PAGES } from "@/shared/pages";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@/lib/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LanguageSelector } from "../LanguageSelector";
import { ThemeSwitch } from "../ThemeSwitch";
import { usePathname } from "@/lib/navigation";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

type PortalProps = {
  children: React.ReactNode;
};

const Portal = ({ children }: PortalProps) => {
  return createPortal(children, document.body);
};

export const HamburgerMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const handleClose = () => {
    document.body.style.overflow = "auto";
    setIsOpen(false);
  };

  useEffect(() => {
    handleClose();
  }, [pathname]);

  return (
    <>
      <button className="p-2 md:hidden" onClick={handleOpen}>
        <Bars3Icon className="w-6 h-6" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <Portal>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delayChildren: 1,
                },
              }}
              exit={{ opacity: 0 }}
              className="fixed w-full h-full bg-gray-200 dark:bg-zinc-900/50 shadow-surface-glass backdrop-blur-xl will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-zinc-300/[50%] dark:[@supports(backdrop-filter:blur(0px))]:bg-black/[50%] inset-0 z-50 "
            >
              <button
                className="p-2 absolute top-4 right-4"
                onClick={handleClose}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <nav className="absolute top-40 pl-4 flex flex-col gap-20">
                <ul className="space-y-4 pl-2 text-2xl">
                  {PAGES.map((page) => (
                    <li key={page.href} className="font-semibold">
                      <Link href={page.href}>{page.label}</Link>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-1">
                  <LanguageSelector />
                  <ThemeSwitch />
                </div>
              </nav>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};
