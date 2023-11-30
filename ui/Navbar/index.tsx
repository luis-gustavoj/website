import { GlobeAmericasIcon } from "@heroicons/react/24/outline";
import { Logo } from "../Logo";
import { Menu } from "./Menu";
import { ThemeSwitch } from "../ThemeSwitch";

export const Navbar = () => {
  return (
    <div className="fixed w-full grid grid-cols-[1fr,min(768px,100%),1fr] top-8 left-0 z-30">
      <div className="flex col-start-2 justify-between items-center py-4 px-4 bg-gray-200 dark:bg-gray-800/95 shadow-surface-glass backdrop-blur-xl will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-zinc-300/[50%] dark:[@supports(backdrop-filter:blur(0px))]:bg-white/[2%] rounded-2xl border border-zinc-500/20">
        <Logo className="pl-2" />
        <Menu />
        <div className="flex gap-1">
          <button className="p-2">
            <GlobeAmericasIcon className="w-6 h-6" />
          </button>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};
