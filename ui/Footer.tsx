import { Logo } from "./Logo";
import { LocaleText } from "./LocaleText";

const LOCALE_BASE_PATH = "components.footer";

export const Footer = () => {
  return (
    <footer className="pb-5 pt-40">
      <div className="max-w-3xl mx-auto">
        <div>
          <Logo />
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-1">
            <LocaleText basePath={LOCALE_BASE_PATH} path="subtitle" />
          </p>
          <small className="pt-8 inline-block text-zinc-500">
            <LocaleText basePath={LOCALE_BASE_PATH} path="copyright" />
          </small>
        </div>
      </div>
    </footer>
  );
};
