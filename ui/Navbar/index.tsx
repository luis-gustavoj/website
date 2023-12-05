import { Logo } from "../Logo";
import { Menu } from "./Menu";
import { ThemeSwitch } from "../ThemeSwitch";
import { LanguageSelector } from "../LanguageSelector";
import { HamburgerMenu } from "./HamburgerMenu";

export const Navbar = () => {
  return (
    <div className="fixed w-full grid grid-cols-[1fr,min(768px,100%),1fr] top-8 left-0 z-30 max-md:px-8 max-sm:px-4">
      <div className="flex col-start-2 justify-between items-center py-4 px-4 bg-gray-200 dark:bg-zinc-900/50 shadow-surface-glass backdrop-blur-xl will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-zinc-300/[50%] dark:[@supports(backdrop-filter:blur(0px))]:bg-white/[2%] rounded-2xl border border-zinc-500/20">
        <Logo className="pl-2" />
        <Menu />
        <HamburgerMenu />
        <div className="flex gap-1 max-md:hidden">
          <LanguageSelector />
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};
