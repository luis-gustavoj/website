import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  defaultTranslationValues: {
    bold: (text) => `<b>${text}</b>`,
    italic: (text) => `<i>${text}</i>`,
  },
  messages: (await import(`./messages/${locale}.json`)).default,
}));
