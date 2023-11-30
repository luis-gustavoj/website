"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    const currentTheme = theme === "light" ? "dark" : "light";
    setTheme(currentTheme);
  };

  return (
    <button className="p-2 relative" type="button" onClick={handleToggleTheme}>
      <MoonIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <SunIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
