"use client";

import { Link, usePathname } from "@/lib/navigation";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";
import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import { LocaleText } from "./LocaleText";
import { LOCALES } from "@/shared/locales";

const LOCALE_BASE_PATH = "components.languageSelector";

export const LanguageSelector = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger className="p-2">
        <GlobeAmericasIcon className="w-6 h-6" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="z-50 bg-zinc-200 text-zinc-700 dark:bg-gradient-to-r dark:from-[#27272A] dark:to-[#2f2f35] dark:text-zinc-300 rounded-lg backdrop-blur-3xl p-4 border-zinc-400 dark:border-zinc-600 border">
          <div className="flex flex-col">
            {LOCALES.map((locale) => (
              <Link
                key={locale}
                href={pathname}
                locale={locale}
                className="flex items-center justify-center hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md p-2 transition"
              >
                <LocaleText
                  basePath={LOCALE_BASE_PATH}
                  path="label"
                  values={{ locale }}
                />
              </Link>
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
