import { Formats, TranslationValues, useTranslations } from "next-intl";
import { Fragment } from "react";

type TranslatedTextProps = {
  basePath: string;
  path: string;
  values?: TranslationValues;
  formats?: Partial<Formats>;
  variant?: "markup";
};

export const LocaleText = ({
  basePath,
  path,
  values,
  formats,
  variant,
}: TranslatedTextProps) => {
  const t = useTranslations(basePath);

  if (variant === "markup") {
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: t.markup(path, {
            ...values,
          }),
        }}
      />
    );
  }

  return <>{t(path, values, formats)}</>;
};
